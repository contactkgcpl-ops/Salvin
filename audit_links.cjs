const fs = require('fs');

const brochureData = fs.readFileSync('src/pages/TurnkeyProject/data/brochureCatalog.js', 'utf8');
const turnkeyData = fs.readFileSync('src/pages/TurnkeyProject/data/turnkeyProjectsData.js', 'utf8');
const appData = fs.readFileSync('src/App.jsx', 'utf8');

// Extract RAW array from brochureCatalog.js
const rawMatch = brochureData.match(/const RAW = (\[[\s\S]+?\])[\r\n]+export const brochureProjects/);
let rawArrayStr = rawMatch[1]
  .replace(/'/g, '"')
  .replace(/,\s*]/g, ']')
  .replace(/\n/g, '');

// Hacky parse since it's JS, not strict JSON. Let's use eval safely.
const RAW = eval(rawMatch[1]);

// Extract keys from turnkeyProjectsData.js
const keysMatch = turnkeyData.match(/const (CORE_PROJECTS|DATA) = \{([\s\S]*?)\n\};/);
// To get keys safely, we can regex search for all top level string keys.
const projectKeys = [...turnkeyData.matchAll(/^\s*'([^']+)': \{/gm)].map(m => m[1]);

// Extract routes from App.jsx
const appRoutes = [...appData.matchAll(/<Route path="\/turnkey-project\/([^"]+)"/g)].map(m => m[1]);

console.log("=== AUDIT RESULTS ===");

let brokenCount = 0;
RAW.forEach((item, index) => {
  const title = item[2];
  const explicitPath = item[4];
  
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const detailsPath = explicitPath || `/turnkey-project/${slug}`;
  const pathSlug = detailsPath.replace('/turnkey-project/', '');

  let resolvesToHardcoded = appRoutes.includes(pathSlug);
  let resolvesToDynamic = projectKeys.includes(pathSlug);
  
  let status = "✅ Working";
  if (!resolvesToHardcoded && !resolvesToDynamic) {
    status = "❌ Broken";
    brokenCount++;
  }

  console.log(`${status} | ${title} -> ${pathSlug}`);
  if (status === "❌ Broken") {
    console.log(`   Expected to find <Route path="/turnkey-project/${pathSlug}"> OR key '${pathSlug}' in turnkeyProjectsData.js`);
  }
});

console.log(`\nTotal Broken Links: ${brokenCount}`);
