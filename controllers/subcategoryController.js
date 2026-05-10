import { asyncHandler } from "../utils/asyncHandler.js";
import { slugify, uniqueSlug } from "../utils/slugify.js";
import { getCategoryById } from "../models/categoryModel.js";
import {
  createSubcategory,
  deleteSubcategory,
  getSubcategories,
  getSubcategoryById,
  subcategorySlugExists,
  updateSubcategory,
} from "../models/subcategoryModel.js";

export const listSubcategories = asyncHandler(async (req, res) => {
  const categoryId = req.query.category_id ? Number(req.query.category_id) : null;
  res.json(await getSubcategories(categoryId));
});

export const addSubcategory = asyncHandler(async (req, res) => {
  const category_id = Number(req.body.category_id);
  const name = String(req.body.name || req.body.subcategory_name || "").trim();

  if (!category_id || !(await getCategoryById(category_id))) {
    return res.status(400).json({ error: "Valid category is required" });
  }
  if (!name) return res.status(400).json({ error: "Subcategory name is required" });

  const slug = await uniqueSlug(req.body.slug || name, (candidate) =>
    subcategorySlugExists(category_id, candidate)
  );
  res.status(201).json(await createSubcategory({ category_id, name, slug }));
});

export const editSubcategory = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const existing = await getSubcategoryById(id);
  if (!existing) return res.status(404).json({ error: "Subcategory not found" });

  const category_id = Number(req.body.category_id);
  const name = String(req.body.name || req.body.subcategory_name || "").trim();

  if (!category_id || !(await getCategoryById(category_id))) {
    return res.status(400).json({ error: "Valid category is required" });
  }
  if (!name) return res.status(400).json({ error: "Subcategory name is required" });

  const preferredSlug = slugify(req.body.slug || name);
  const slug = await uniqueSlug(preferredSlug, (candidate) =>
    subcategorySlugExists(category_id, candidate, id)
  );
  res.json(await updateSubcategory(id, { category_id, name, slug }));
});

export const removeSubcategory = asyncHandler(async (req, res) => {
  await deleteSubcategory(Number(req.params.id));
  res.json({ success: true });
});
