const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'frozen-veg-gallery');

const images = [
  { src: 'media__1784890436317.jpg', dest: 'veg_washing.jpg', title: 'High-Capacity Vegetable Washing System' },
  { src: 'media__1784890445264.jpg', dest: 'veg_slicing.jpg', title: 'Automatic Cutting & Slicing Machine' },
  { src: 'media__1784890456254.jpg', dest: 'continuous_blancher.jpg', title: 'Continuous Blanching System' },
  { src: 'media__1784890463297.jpg', dest: 'iqf_freezer.jpg', title: 'IQF (Individual Quick Freezing) Tunnel' },
  { src: 'media__1784890472459.jpg', dest: 'veg_packaging.jpg', title: 'Multihead Weigher & VFFS Packaging Machine' },
  { src: 'media__1784890483601.jpg', dest: 'cold_storage.jpg', title: 'Robotic Palletizing & Cold Storage System (-18°C)' }
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
const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Gallery
const galleryRegex = /const GALLERY_IMAGES = \[[\s\S]*?\];/;
const newGallery = `const GALLERY_IMAGES = [\n${images.map(img => `  { src: "/turnkey-brochures/images/frozen-veg-gallery/${img.dest}", caption: "${img.title}" }`).join(',\n')}\n];`;
content = content.replace(galleryRegex, newGallery);

// 2. Machinery List
const machineryRegex = /const MACHINERY_LIST = \[[\s\S]*?\];/;
const newMachineryList = `const MACHINERY_LIST = [\n${images.map((img, idx) => `  {
    "name": "${img.title}",
    "image": "/turnkey-brochures/images/frozen-veg-gallery/${img.dest}",
    "desc": "Industrial-grade equipment engineered for maximum efficiency, rapid freezing, and hygiene in the frozen food processing line."
  }`).join(',\n')}\n];`;
content = content.replace(machineryRegex, newMachineryList);

// 3. Overview Image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/frozen-vegetable.jpeg" alt="[^"]+" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/frozen-veg-gallery/iqf_freezer.jpg" alt="Fully Automated Frozen Vegetable Processing Plant Overview" loading="lazy" />
            </div>`
);

// 4. Hero Subtitle
content = content.replace(
  /<p className="rcp-hero__subtitle">.*?<\/p>/,
  `<p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Frozen Vegetables</p>`
);

// 5. SEO Overview Text
const oldTextRegex = /<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>/s;
const seoText = `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automated Frozen Vegetable Processing Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity vegetable washing, blanching, IQF freezing, and robotic cold storage. Engineered to meet global food safety standards, our robust production line seamlessly processes fresh produce into premium-grade frozen vegetables.</p>
              <p>From automated multi-stage washing and precision blanching to rapid IQF (Individual Quick Freezing) and automated VFFS packaging, our machinery ensures absolute zero contamination. Experience maximum nutrient retention, vibrant natural color, and perfectly preserved texture. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>`;
content = content.replace(oldTextRegex, seoText);

fs.writeFileSync(filePath, content);
console.log("Successfully updated Fully Automated Frozen Vegetable Processing Plant!");
