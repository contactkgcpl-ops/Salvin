import { asyncHandler } from "../utils/asyncHandler.js";
import { slugify, uniqueSlug } from "../utils/slugify.js";
import { getCategoryById } from "../models/categoryModel.js";
import { getSubcategoryById } from "../models/subcategoryModel.js";
import {
  createMachine,
  deleteMachine,
  getMachineById,
  getMachineBySlug,
  getMachines,
  machineSlugExists,
  updateMachine,
} from "../models/machineModel.js";

function parseSpecifications(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") {
    return Object.entries(value).map(([title, specValue]) => ({ title, value: String(specValue || "") }));
  }

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed;
    if (parsed && typeof parsed === "object") {
      return Object.entries(parsed).map(([title, specValue]) => ({ title, value: String(specValue || "") }));
    }
  } catch {
    return [];
  }

  return [];
}

async function buildMachinePayload(req, currentMachine = null) {
  const machine_name = String(req.body.machine_name || "").trim();
  const description = String(req.body.description || "").trim();
  const category_id = Number(req.body.category_id);
  const subcategory_id = req.body.subcategory_id ? Number(req.body.subcategory_id) : null;

  if (!machine_name) throw Object.assign(new Error("Machine name is required"), { status: 400 });
  if (!description) throw Object.assign(new Error("Description is required"), { status: 400 });
  if (!category_id || !(await getCategoryById(category_id))) {
    throw Object.assign(new Error("Valid category is required"), { status: 400 });
  }
  if (subcategory_id) {
    const subcategory = await getSubcategoryById(subcategory_id);
    if (!subcategory || Number(subcategory.category_id) !== category_id) {
      throw Object.assign(new Error("Valid subcategory is required"), { status: 400 });
    }
  }

  const preferredSlug = slugify(req.body.slug || machine_name);
  const slug = await uniqueSlug(preferredSlug, (candidate) =>
    machineSlugExists(candidate, currentMachine?.id || null)
  );
  const image_url = req.file
    ? `/uploads/machines/${req.file.filename}`
    : String(req.body.image_url || currentMachine?.image_url || "").trim();
  const specifications = JSON.stringify(parseSpecifications(req.body.specifications));

  return {
    machine_name,
    slug,
    description,
    image_url,
    meta_title: String(req.body.meta_title || machine_name).trim(),
    meta_description: String(req.body.meta_description || description).trim(),
    category_id,
    subcategory_id,
    specifications,
  };
}

export const listMachines = asyncHandler(async (req, res) => {
  res.json(await getMachines());
});

export const showMachine = asyncHandler(async (req, res) => {
  const machine = await getMachineBySlug(req.params.slug);
  if (!machine) return res.status(404).json({ error: "Machine not found" });
  res.json(machine);
});

export const addMachine = asyncHandler(async (req, res) => {
  const payload = await buildMachinePayload(req);
  res.status(201).json(await createMachine(payload));
});

export const editMachine = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const currentMachine = await getMachineById(id);
  if (!currentMachine) return res.status(404).json({ error: "Machine not found" });

  const payload = await buildMachinePayload(req, currentMachine);
  res.json(await updateMachine(id, payload));
});

export const removeMachine = asyncHandler(async (req, res) => {
  await deleteMachine(Number(req.params.id));
  res.json({ success: true });
});
