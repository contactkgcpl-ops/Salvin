import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { query } from "../config/db.js";
import { slugify, uniqueSlug } from "../utils/slugify.js";
import { categorySlugExists, createCategory, getCategories } from "../models/categoryModel.js";
import {
  createSubcategory,
  getSubcategories,
  subcategorySlugExists,
} from "../models/subcategoryModel.js";
import { createMachine, machineSlugExists } from "../models/machineModel.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonPath = path.join(__dirname, "..", "data", "machines.json");

function normalizeSpecs(specifications) {
  if (!specifications) return [];
  if (Array.isArray(specifications)) return specifications;
  if (typeof specifications === "object") {
    return Object.entries(specifications).map(([title, value]) => ({ title, value: String(value || "") }));
  }
  return [];
}

async function upsertCategory(name) {
  const categories = await getCategories();
  const found = categories.find((category) => category.name.toLowerCase() === name.toLowerCase());
  if (found) return found;
  const slug = await uniqueSlug(name, (candidate) => categorySlugExists(candidate));
  return createCategory({ name, slug });
}

async function upsertSubcategory(categoryId, name) {
  const subcategories = await getSubcategories(categoryId);
  const found = subcategories.find((subcategory) => subcategory.name.toLowerCase() === name.toLowerCase());
  if (found) return found;
  const slug = await uniqueSlug(name, (candidate) => subcategorySlugExists(categoryId, candidate));
  return createSubcategory({ category_id: categoryId, name, slug });
}

async function run() {
  if (!fs.existsSync(jsonPath)) {
    console.log("No data/machines.json found.");
    return;
  }

  const machines = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  for (const machine of machines) {
    const category = await upsertCategory(machine.category_id || "Processing");
    const subcategory = machine.subcategory
      ? await upsertSubcategory(category.id, machine.subcategory)
      : null;
    const slug = await uniqueSlug(machine.slug || machine.machine_name, (candidate) =>
      machineSlugExists(candidate)
    );

    await createMachine({
      machine_name: machine.machine_name,
      slug,
      description: machine.description || "",
      image_url: String(machine.image_url || "").replace("/assets/machines/", "/uploads/machines/"),
      meta_title: machine.meta_title || machine.machine_name,
      meta_description: machine.meta_description || machine.description || "",
      category_id: category.id,
      subcategory_id: subcategory?.id || null,
      specifications: JSON.stringify(normalizeSpecs(machine.specifications)),
    });
  }

  await query("SELECT 1");
  console.log(`Migrated ${machines.length} machines.`);
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
