import { query } from "../config/db.js";

export async function getCategories() {
  return query("SELECT id, name, slug, created_at FROM categories ORDER BY name ASC");
}

export async function getCategoryById(id) {
  const rows = await query("SELECT * FROM categories WHERE id = :id LIMIT 1", { id });
  return rows[0] || null;
}

export async function categorySlugExists(slug, excludeId = null) {
  const rows = await query(
    "SELECT id FROM categories WHERE slug = :slug AND (:excludeId IS NULL OR id <> :excludeId) LIMIT 1",
    { slug, excludeId }
  );
  return rows.length > 0;
}

export async function createCategory({ name, slug }) {
  const result = await query(
    "INSERT INTO categories (name, slug) VALUES (:name, :slug)",
    { name, slug }
  );
  return getCategoryById(result.insertId);
}

export async function updateCategory(id, { name, slug }) {
  await query(
    "UPDATE categories SET name = :name, slug = :slug WHERE id = :id",
    { id, name, slug }
  );
  return getCategoryById(id);
}

export async function deleteCategory(id) {
  return query("DELETE FROM categories WHERE id = :id", { id });
}
