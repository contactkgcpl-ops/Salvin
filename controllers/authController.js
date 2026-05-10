import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

export const login = asyncHandler(async (req, res) => {
  const username = String(req.body.admin_id || req.body.username || "").trim();
  const password = String(req.body.password || "");
  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin@123";

  if (!username || !password) {
    return res.status(400).json({ error: "Admin ID and password are required" });
  }

  const valid =
    username === adminUsername &&
    (password === adminPassword || (adminPassword.startsWith("$2") && await bcrypt.compare(password, adminPassword)));

  if (!valid) {
    return res.status(401).json({ error: "Invalid admin ID or password" });
  }

  const token = jwt.sign(
    { id: "env-admin", username: adminUsername },
    process.env.JWT_SECRET || "change-this-secret",
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );

  res.json({ token, admin_id: adminUsername });
});

export const me = asyncHandler(async (req, res) => {
  res.json({ admin: req.admin });
});

export const logout = asyncHandler(async (req, res) => {
  res.json({ success: true });
});
