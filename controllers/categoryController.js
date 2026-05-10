import { asyncHandler } from "../utils/asyncHandler.js";
import { slugify, uniqueSlug } from "../utils/slugify.js";
import {
  categorySlugExists,
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../models/categoryModel.js";

export const listCategories = asyncHandler(async (req, res) => {
  res.json(await getCategories());
});

export const addCategory = asyncHandler(async (req, res) => {
  const name = String(req.body.name || req.body.category_name || "").trim();
  if (!name) return res.status(400).json({ error: "Category name is required" });

  const slug = await uniqueSlug(req.body.slug || name, (candidate) => categorySlugExists(candidate));
  res.status(201).json(await createCategory({ name, slug }));
});

export const editCategory = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const category = await getCategoryById(id);
  if (!category) return res.status(404).json({ error: "Category not found" });

  const name = String(req.body.name || req.body.category_name || "").trim();
  if (!name) return res.status(400).json({ error: "Category name is required" });

  const preferredSlug = slugify(req.body.slug || name);
  const slug = await uniqueSlug(preferredSlug, (candidate) => categorySlugExists(candidate, id));
  res.json(await updateCategory(id, { name, slug }));
});

export const removeCategory = asyncHandler(async (req, res) => {
  await deleteCategory(Number(req.params.id));
  res.json({ success: true });
});
