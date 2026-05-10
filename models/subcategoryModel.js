import { query } from "../config/db.js";

export async function getSubcategories(categoryId = null) {
  return query(
    `SELECT s.id, s.category_id, s.name, s.slug, s.created_at, c.name AS category_name
     FROM subcategories s
     JOIN categories c ON c.id = s.category_id
     WHERE (:categoryId IS NULL OR s.category_id = :categoryId)
     ORDER BY c.name ASC, s.name ASC`,
    { categoryId }
  );
}

export async function getSubcategoryById(id) {
  const rows = await query("SELECT * FROM subcategories WHERE id = :id LIMIT 1", { id });
  return rows[0] || null;
}

export async function subcategorySlugExists(categoryId, slug, excludeId = null) {
  const rows = await query(
    `SELECT id FROM subcategories
     WHERE category_id = :categoryId
       AND slug = :slug
       AND (:excludeId IS NULL OR id <> :excludeId)
     LIMIT 1`,
    { categoryId, slug, excludeId }
  );
  return rows.length > 0;
}

export async function createSubcategory({ category_id, name, slug }) {
  const result = await query(
    "INSERT INTO subcategories (category_id, name, slug) VALUES (:category_id, :name, :slug)",
    { category_id, name, slug }
  );
  return getSubcategoryById(result.insertId);
}

export async function updateSubcategory(id, { category_id, name, slug }) {
  await query(
    "UPDATE subcategories SET category_id = :category_id, name = :name, slug = :slug WHERE id = :id",
    { id, category_id, name, slug }
  );
  return getSubcategoryById(id);
}

export async function deleteSubcategory(id) {
  return query("DELETE FROM subcategories WHERE id = :id", { id });
}
