import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { findAdminByUsername } from "../models/adminModel.js";

export const login = asyncHandler(async (req, res) => {
  const username = String(req.body.admin_id || req.body.username || "").trim();
  const password = String(req.body.password || "");

  if (!username || !password) {
    return res.status(400).json({ error: "Admin ID and password are required" });
  }

  const admin = await findAdminByUsername(username);
  const valid = admin ? await bcrypt.compare(password, admin.password_hash) : false;

  if (!valid) {
    return res.status(401).json({ error: "Invalid admin ID or password" });
  }

  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    process.env.JWT_SECRET || "change-this-secret",
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );

  res.json({ token, admin_id: admin.username });
});

export const me = asyncHandler(async (req, res) => {
  res.json({ admin: req.admin });
});

export const logout = asyncHandler(async (req, res) => {
  res.json({ success: true });
});
