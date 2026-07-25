const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'garlic-gallery');

const images = [
  { src: 'media__1784888613184.jpg', dest: 'bulb_breaking.jpg', title: 'Automatic Garlic Bulb Breaking & Peeling Machine' },
  { src: 'media__1784888620634.jpg', dest: 'garlic_washing.jpg', title: 'Garlic Peeling & Washing Machine' },
  { src: 'media__1784888628391.jpg', dest: 'garlic_slicer.jpg', title: 'High-Speed Garlic Slicer' },
  { src: 'media__1784888637180.jpg', dest: 'belt_dryer.jpg', title: 'Continuous Belt Dryer for Dehydration' },
  { src: 'media__1784888646805.jpg', dest: 'vibratory_sorting.jpg', title: 'Vibratory Sorting & Grading Machine' },
  { src: 'media__1784888676783.jpg', dest: 'garlic_packaging.jpg', title: 'Automatic Dehydrated Garlic Packaging Machine' }
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
const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Gallery
const galleryRegex = /const GALLERY_IMAGES = \[[\s\S]*?\];/;
const newGallery = `const GALLERY_IMAGES = [\n${images.map(img => `  { src: "/turnkey-brochures/images/garlic-gallery/${img.dest}", caption: "${img.title}" }`).join(',\n')}\n];`;
content = content.replace(galleryRegex, newGallery);

// 2. Machinery List
const machineryRegex = /const MACHINERY_LIST = \[[\s\S]*?\];/;
const newMachineryList = `const MACHINERY_LIST = [\n${images.map((img, idx) => `  {
    "name": "${img.title}",
    "image": "/turnkey-brochures/images/garlic-gallery/${img.dest}",
    "desc": "Industrial-grade equipment engineered for maximum efficiency and hygiene in the garlic dehydration process."
  }`).join(',\n')}\n];`;
content = content.replace(machineryRegex, newMachineryList);

// 3. Overview Image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/dehydrated-garlic.jpeg" alt="[^"]+" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/hero_garlic.png" alt="Fully Automatic Dehydrated Garlic Processing Plant Overview" loading="lazy" />
            </div>`
);

// 4. Hero Subtitle
content = content.replace(
  /<p className="rcp-hero__subtitle">.*?<\/p>/,
  `<p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Dehydrated Garlic</p>`
);

// 5. SEO Overview Text
const oldTextRegex = /<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>/s;
const seoText = `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automatic Dehydrated Garlic Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity garlic bulb breaking, peeling, slicing, and continuous dehydration. Engineered to meet global food safety standards, our robust production line seamlessly processes raw garlic into premium-grade dehydrated flakes, granules, and powder.</p>
              <p>From automated root cutting and advanced wet peeling to continuous belt drying and vibratory grading, our machinery ensures absolute zero contamination. Experience maximum pungency retention, vibrant natural color, and extended shelf life. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>`;
content = content.replace(oldTextRegex, seoText);

fs.writeFileSync(filePath, content);
console.log("Successfully updated Fully Automatic Dehydrated Garlic Plant!");
