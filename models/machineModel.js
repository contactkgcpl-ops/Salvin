import { query } from "../config/db.js";

const machineSelect = `
  SELECT
    m.id,
    m.id AS machine_id,
    m.machine_name,
    m.slug,
    m.description,
    m.image_url,
    m.meta_title,
    m.meta_description,
    m.category_id,
    c.name AS category_name,
    c.name AS category_id_label,
    m.subcategory_id,
    s.name AS subcategory_name,
    s.name AS subcategory,
    m.specifications,
    m.created_at,
    m.updated_at
  FROM machines m
  JOIN categories c ON c.id = m.category_id
  LEFT JOIN subcategories s ON s.id = m.subcategory_id
`;

function normalizeMachine(machine) {
  if (!machine) return null;
  let specifications = [];
  if (typeof machine.specifications === "string") {
    try {
      specifications = JSON.parse(machine.specifications || "[]");
    } catch {
      specifications = [];
    }
  } else if (Array.isArray(machine.specifications)) {
    specifications = machine.specifications;
  }

  return {
    ...machine,
    category_id: machine.category_name || machine.category_id,
    category_db_id: machine.category_id,
    subcategory: machine.subcategory_name || "",
    subcategory_db_id: machine.subcategory_id,
    specifications,
    tags: [machine.category_name, machine.subcategory_name].filter(Boolean),
    status: "active",
  };
}

export async function getMachines() {
  const rows = await query(`${machineSelect} ORDER BY m.created_at DESC`);
  return rows.map(normalizeMachine);
}

export async function getRecentMachines(limit = 5) {
  const rows = await query(`${machineSelect} ORDER BY m.created_at DESC LIMIT :limit`, { limit });
  return rows.map(normalizeMachine);
}

export async function getMachineBySlug(slug) {
  const rows = await query(`${machineSelect} WHERE m.slug = :slug LIMIT 1`, { slug });
  return normalizeMachine(rows[0]);
}

export async function getMachineById(id) {
  const rows = await query(`${machineSelect} WHERE m.id = :id LIMIT 1`, { id });
  return normalizeMachine(rows[0]);
}

export async function machineSlugExists(slug, excludeId = null) {
  const rows = await query(
    "SELECT id FROM machines WHERE slug = :slug AND (:excludeId IS NULL OR id <> :excludeId) LIMIT 1",
    { slug, excludeId }
  );
  return rows.length > 0;
}

export async function createMachine(machine) {
  const result = await query(
    `INSERT INTO machines
      (machine_name, slug, description, image_url, meta_title, meta_description, category_id, subcategory_id, specifications)
     VALUES
      (:machine_name, :slug, :description, :image_url, :meta_title, :meta_description, :category_id, :subcategory_id, :specifications)`,
    machine
  );
  return getMachineById(result.insertId);
}

export async function updateMachine(id, machine) {
  await query(
    `UPDATE machines SET
      machine_name = :machine_name,
      slug = :slug,
      description = :description,
      image_url = :image_url,
      meta_title = :meta_title,
      meta_description = :meta_description,
      category_id = :category_id,
      subcategory_id = :subcategory_id,
      specifications = :specifications
     WHERE id = :id`,
    { id, ...machine }
  );
  return getMachineById(id);
}

export async function deleteMachine(id) {
  return query("DELETE FROM machines WHERE id = :id", { id });
}

export async function getCounts() {
  const rows = await query(`
    SELECT
      (SELECT COUNT(*) FROM machines) AS total_machines,
      (SELECT COUNT(*) FROM categories) AS total_categories,
      (SELECT COUNT(*) FROM subcategories) AS total_subcategories
  `);
  return rows[0];
}
