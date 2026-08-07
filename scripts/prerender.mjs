import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execSync } from "node:child_process";
import { brochureProjects } from "../src/pages/TurnkeyProject/data/brochureCatalog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const SITE_URL = (process.env.SITE_URL || process.env.VITE_PUBLIC_SITE_URL || "https://salvinindia.com").replace(/\/+$/, "");

/** @type {readonly string[]} */
const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/food-consultant",
  "/consultant",
  "/turnkey",
  "/turnkey-project",
  "/blogs",
  "/blogs/how-to-start-food-processing-business-in-india",
  ...brochureProjects.map((p) => p.detailsPath),
  "/machineries",
];

const MACHINES_FETCH_URL = process.env.SITEMAP_MACHINES_JSON_URL || `${SITE_URL}/api/machines`;

function slugNorm(s) {
  return String(s ?? "").trim().toLowerCase();
}

function deriveMachineSlug(m) {
  if (m?.slug?.trim()) return slugNorm(m.slug);
  return slugNorm(m?.machine_name ?? "").replace(/\s+/g, "-");
}

async function loadMachinePaths() {
  try {
    const res = await fetch(MACHINES_FETCH_URL, { signal: AbortSignal.timeout(15_000) });
    if (!res.ok) return [];
    const machines = await res.json();
    if (!Array.isArray(machines)) return [];
    const paths = [];
    const seen = new Set();
    for (const m of machines) {
      if (m?.status === "inactive") continue;
      const slug = deriveMachineSlug(m);
      if (!slug || seen.has(slug)) continue;
      seen.add(slug);
      paths.push(`/machineries/${slug}`);
    }
    return paths;
  } catch (e) {
    console.warn("[prerender] Machines fetch skipped:", e.message || e);
    return [];
  }
}

const META_MAP = {
  "/": {
    title: "Turnkey Solution & Consultant For Food Industries | Salvin Industries",
    desc: "Salvin Industries is a leading engineering, consultancy, automation, and turnkey project company specializing in the Food, Beverage, Nutraceutical, and Pharmaceutical sectors.",
  },
  "/about": {
    title: "Our Journey & Engineering Expertise | Salvin Industries",
    desc: "Learn about Salvin Industries' journey since 2008 in engineering India's industrial future with high-quality process lines and machinery.",
  },
  "/contact": {
    title: "Contact Us for Turnkey Projects & Machinery | Salvin Industries",
    desc: "Get in touch with Salvin Industries for quotes, consultation, and support on industrial machineries, turnkey projects, and spares.",
  },
  "/food-consultant": {
    title: "Food Processing Plant & Project Consultant | Salvin Industries",
    desc: "Top food processing plant consultants in India by Salvin Industries. Complete turnkey solutions, factory layouts, DPR reports, and FSSAI guidance.",
  },
  "/consultant": {
    title: "Food & Industrial Project Consultancy | Salvin Industries",
    desc: "Get expert industrial planning, plant layout design, feasibility analysis, and technical guidance for greenfield & brownfield food processing setups.",
  },
  "/turnkey": {
    title: "Turnkey Plant Architectural & Commissioning | Salvin Industries",
    desc: "End-to-end plant design, equipment sizing, manufacturing, installation, and commissioning of turnkey processing and packaging lines.",
  },
  "/turnkey-project": {
    title: "Our Successful Turnkey Projects Portfolio | Salvin Industries",
    desc: "Browse our turnkey project portfolio including spices grinding lines, honey filtration units, edible oil mills, and tomato paste plants.",
  },
  "/blogs": {
    title: "Food Processing Industry Insights & Guides | Salvin Industries",
    desc: "Read practical guides, regulatory compliance steps, market data, and capital requirements for food processing manufacturing businesses in India.",
  },
  "/blogs/how-to-start-food-processing-business-in-india": {
    title: "How to Start a Food Processing Business in India: A Complete Guide | Salvin",
    desc: "Comprehensive step-by-step guide to starting a food processing business in India covering market size, licensing, machinery, investment, and turnkey plant setup.",
  },
  "/machineries": {
    title: "Industrial Processing & Packaging Machinery Catalog | Salvin Industries",
    desc: "Explore our wide range of robust, heavy-duty machinery for filling, capping, labeling, processing, and packaging food and pharma products.",
  },
};

for (const p of brochureProjects) {
  if (p.detailsPath) {
    META_MAP[p.detailsPath] = {
      title: `${p.title || "Turnkey Project"} | Salvin Industries`,
      desc: `Complete turnkey ${p.title || "processing plant"} setup by Salvin Industries. High-performance, automated, food-grade equipment and plant engineering.`,
    };
  }
}

async function main() {
  console.log("[prerender] Step 1: Building SSR bundle...");
  execSync("npx vite build --ssr src/entry-server.jsx --outDir dist/server", {
    cwd: projectRoot,
    stdio: "inherit",
  });

  const serverEntryPath = join(projectRoot, "dist", "server", "entry-server.js");
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  console.log("[prerender] Step 2: Loading client template...");
  const templatePath = join(projectRoot, "dist", "index.html");
  const template = await readFile(templatePath, "utf8");

  const machinePaths = await loadMachinePaths();
  const allPaths = Array.from(new Set([...STATIC_PATHS, ...machinePaths]));
  console.log(`[prerender] Step 3: Pre-rendering ${allPaths.length} static HTML pages...`);

  let count = 0;
  for (const urlPath of allPaths) {
    try {
      const appHtml = render(urlPath);
      let pageHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Inject specific meta tags if available
      const meta = META_MAP[urlPath];
      if (meta) {
        pageHtml = pageHtml
          .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
          .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.desc}" />`);
      }

      // Inject exact static canonical tag and og:url tag for search engine crawlers
      const cleanPath = urlPath === "/" ? "/" : urlPath.replace(/\/+$/, "");
      const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "/" : cleanPath}`;
      
      const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
      const ogUrlTag = `<meta property="og:url" content="${canonicalUrl}" />`;

      if (pageHtml.includes('<link rel="canonical"')) {
        pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/s, canonicalTag);
      } else {
        pageHtml = pageHtml.replace('</head>', `  ${canonicalTag}\n</head>`);
      }

      if (pageHtml.includes('property="og:url"')) {
        pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/s, ogUrlTag);
      }

      const destFile =
        urlPath === "/"
          ? join(projectRoot, "dist", "index.html")
          : join(projectRoot, "dist", urlPath.slice(1), "index.html");

      await mkdir(dirname(destFile), { recursive: true });
      await writeFile(destFile, pageHtml, "utf8");
      count++;
    } catch (err) {
      console.warn(`[prerender] Warning pre-rendering path ${urlPath}:`, err.message || err);
    }
  }

  console.log(`[prerender] Successfully generated ${count} static HTML files in dist/!`);

  // Clean up server build folder
  try {
    await rm(join(projectRoot, "dist", "server"), { recursive: true, force: true });
  } catch {}
}

main().catch((err) => {
  console.error("[prerender] Error:", err);
  process.exit(1);
});
