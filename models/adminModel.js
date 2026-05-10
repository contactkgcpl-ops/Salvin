import bcrypt from "bcryptjs";
import { query } from "../config/db.js";

export async function ensureAdmin() {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin@123";
  const rows = await query("SELECT id FROM admins WHERE username = :username LIMIT 1", { username });

  if (rows.length) return;

  const passwordHash = await bcrypt.hash(password, 12);
  await query(
    "INSERT INTO admins (username, password_hash) VALUES (:username, :passwordHash)",
    { username, passwordHash }
  );
}

export async function findAdminByUsername(username) {
  const rows = await query("SELECT * FROM admins WHERE username = :username LIMIT 1", { username });
  return rows[0] || null;
}
