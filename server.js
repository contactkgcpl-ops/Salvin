import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subcategoryRoutes from "./routes/subcategoryRoutes.js";
import machineRoutes from "./routes/machineRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { requireAuth } from "./middleware/authMiddleware.js";
import { ensureAdmin } from "./models/adminModel.js";
import { getCategories } from "./models/categoryModel.js";
import { createCategory } from "./models/categoryModel.js";
import { categorySlugExists } from "./models/categoryModel.js";
import { getMachineBySlug } from "./models/machineModel.js";
import { uniqueSlug } from "./utils/slugify.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
const distDir = path.join(__dirname, "dist");
const uploadsDir = path.join(__dirname, "uploads");

fs.mkdirSync(path.join(uploadsDir, "machines"), { recursive: true });

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsDir));
app.use(express.static(distDir));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Salvin API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);

app.get("/api/machines/categories/list", async (req, res, next) => {
  try {
    const categories = await getCategories();
    res.json(categories.map((category) => ({ ...category, category_name: category.name })));
  } catch (error) {
    next(error);
  }
});

app.post("/api/machines/categories/add", requireAuth, async (req, res, next) => {
  try {
    const name = String(req.body.category_name || req.body.name || "").trim();
    if (!name) return res.status(400).json({ error: "Category name is required" });
    const slug = await uniqueSlug(name, (candidate) => categorySlugExists(candidate));
    res.status(201).json(await createCategory({ name, slug }));
  } catch (error) {
    next(error);
  }
});

app.get("/api/machines/by-slug/:slug", async (req, res, next) => {
  try {
    const machine = await getMachineBySlug(req.params.slug);
    if (!machine) return res.status(404).json({ error: "Machine not found" });
    res.json(machine);
  } catch (error) {
    next(error);
  }
});

app.use("/api/machines", machineRoutes);

app.use("/api", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.get(/.*/, (req, res) => {
  const indexPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexPath)) {
    return res.status(404).send("Frontend build not found. Run npm run build first.");
  }
  res.sendFile(indexPath);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Salvin API running on http://localhost:${PORT}`);
  ensureAdmin().catch((error) => {
    console.error("Admin bootstrap failed. Check MySQL/.env:", error.message);
  });
});
