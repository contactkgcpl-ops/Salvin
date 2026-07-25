const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'jelly-gallery');

const images = [
  { src: 'media__1784888382231.jpg', dest: 'ingredient_mixing.jpg', title: 'Ingredient Mixing & Preparation Tank' },
  { src: 'media__1784888389888.jpg', dest: 'vacuum_cooking.jpg', title: 'Vacuum Cooking System' },
  { src: 'media__1784888398716.jpg', dest: 'jelly_depositing.jpg', title: 'Automatic Jelly Depositing & Moulding Machine' },
  { src: 'media__1784888406503.jpg', dest: 'cooling_tunnel.jpg', title: 'Cooling Tunnel & Demoulding Conveyor' },
  { src: 'media__1784888415099.jpg', dest: 'sugar_coating.jpg', title: 'Sugar & Oil Coating / Polishing Machine' },
  { src: 'media__1784888446189.jpg', dest: 'pouch_packing.jpg', title: 'Automatic Jelly Pouch Filling & Packing Machine' }
];

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

// Copy images
images.forEach(img => {
  const srcPath = path.join(srcDir, img.src);
  const destPath = path.join(destDir, img.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${img.src} to ${img.dest}`);
  } else {
    console.log(`Error: Source file not found ${srcPath}`);
  }
});

// Update JSX file
const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Gallery
const galleryRegex = /const GALLERY_IMAGES = \[[\s\S]*?\];/;
const newGallery = `const GALLERY_IMAGES = [\n${images.map(img => `  { src: "/turnkey-brochures/images/jelly-gallery/${img.dest}", caption: "${img.title}" }`).join(',\n')}\n];`;
content = content.replace(galleryRegex, newGallery);

// 2. Machinery List
const machineryRegex = /const MACHINERY_LIST = \[[\s\S]*?\];/;
const newMachineryList = `const MACHINERY_LIST = [\n${images.map((img, idx) => `  {
    "name": "${img.title}",
    "image": "/turnkey-brochures/images/jelly-gallery/${img.dest}",
    "desc": "Industrial-grade equipment engineered for maximum efficiency and hygiene in the jelly manufacturing process."
  }`).join(',\n')}\n];`;
content = content.replace(machineryRegex, newMachineryList);

// 3. Overview Image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/jelly.jpeg" alt="[^"]+" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/hero_jelly.png" alt="Fully Automatic Jelly Manufacturing Plant Overview" loading="lazy" />
            </div>`
);

// 4. Hero Subtitle
content = content.replace(
  /<p className="rcp-hero__subtitle">.*?<\/p>/,
  `<p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Jelly</p>`
);

// 5. SEO Overview Text
const oldTextRegex = /<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>/s;
const seoText = `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automatic Jelly Manufacturing Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity jelly cooking, depositing, moulding, and packaging. Engineered to meet global food safety standards, our robust production line seamlessly processes premium-grade, consistent jelly products.</p>
              <p>From automated ingredient mixing and advanced vacuum cooking systems to high-speed depositing, cooling tunnels, and aseptic pouch packing, our machinery ensures absolute zero contamination. Experience continuous production, vibrant natural colors, and perfect texture. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>`;
content = content.replace(oldTextRegex, seoText);

fs.writeFileSync(filePath, content);
console.log("Successfully updated Fully Automatic Jelly Manufacturing Plant!");
