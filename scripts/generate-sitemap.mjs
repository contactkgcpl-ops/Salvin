/**
 * Keep static paths in sync with <Routes> in src/App.jsx (public pages only).
 * Machine slug logic must match MachineDetailPage deriveSlugLocal + slugNorm.
 */
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const SITE_URL = (process.env.SITE_URL || process.env.VITE_PUBLIC_SITE_URL || "https://salvinindia.com").replace(
  /\/+$/,
  ""
);

/** @type {readonly string[]} */
const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/consultant",
  "/turnkey",
  "/turnkey-project",
  "/machineries",
];

const MACHINES_JSON_PATH = process.env.SITEMAP_MACHINES_JSON || join(projectRoot, "data", "machines.json");
const MACHINES_FETCH_URL = process.env.SITEMAP_MACHINES_JSON_URL;

function slugNorm(s) {
  return String(s ?? "")
    .trim()
    .toLowerCase();
}

/** Same as MachineDetailPage deriveSlugLocal */
function deriveMachineSlug(m) {
  if (m?.slug?.trim()) return slugNorm(m.slug);
  return slugNorm(m?.machine_name ?? "").replace(/\s+/g, "-");
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function loadMachines() {
  if (MACHINES_FETCH_URL) {
    const res = await fetch(MACHINES_FETCH_URL, { signal: AbortSignal.timeout(60_000) });
    if (!res.ok) throw new Error(`SITEMAP_MACHINES_JSON_URL fetch failed: ${res.status}`);
    return res.json();
  }
  const raw = await readFile(MACHINES_JSON_PATH, "utf8");
  return JSON.parse(raw);
}

function isActiveMachine(m) {
  return m?.status !== "inactive";
}

function isoOrNow(d) {
  if (!d) return new Date().toISOString().slice(0, 10);
  const t = Date.parse(d);
  if (Number.isNaN(t)) return new Date().toISOString().slice(0, 10);
  return new Date(t).toISOString().slice(0, 10);
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  let machines = [];
  try {
    machines = await loadMachines();
  } catch (e) {
    console.warn("[sitemap] machines load failed, static URLs only:", e.message || e);
  }
  if (!Array.isArray(machines)) machines = [];

  const seenSlugs = new Set();
  const machineUrls = [];
  for (const m of machines) {
    if (!isActiveMachine(m)) continue;
    const slug = deriveMachineSlug(m);
    if (!slug) continue;
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    const lastmod = isoOrNow(m.updated_at || m.created_at);
    machineUrls.push({
      loc: `${SITE_URL}/machineries/${slug}`,
      lastmod,
    });
  }

  const today = new Date().toISOString().slice(0, 10);
  const staticEntries = STATIC_PATHS.map((path) =>
    urlEntry(path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`, today, "weekly", path === "/" ? "1.0" : "0.8")
  );
  const machineEntries = machineUrls.map((u) => urlEntry(u.loc, u.lastmod, "monthly", "0.7"));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...machineEntries].join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Disallow: /admin
Disallow: /admin-login
Disallow: /admin-panel

Sitemap: ${SITE_URL}/sitemap.xml
`;

  const outDir = join(projectRoot, "public");
  await writeFile(join(outDir, "sitemap.xml"), sitemap, "utf8");
  await writeFile(join(outDir, "robots.txt"), robots, "utf8");
  console.log(
    `[sitemap] wrote public/sitemap.xml (${STATIC_PATHS.length} static + ${machineUrls.length} machines), public/robots.txt — base ${SITE_URL}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
