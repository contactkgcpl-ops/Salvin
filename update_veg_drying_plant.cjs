const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'veg-drying-gallery');

const images = [
  { src: 'media__1784889111958.jpg', dest: 'veg_washing.jpg', title: 'Industrial Vegetable Washing System' },
  { src: 'media__1784889122725.jpg', dest: 'veg_slicer.jpg', title: 'Automatic Cutting & Slicing Machine' },
  { src: 'media__1784889142908.jpg', dest: 'blanching_dewatering.jpg', title: 'Blanching Tank & Dewatering System' },
  { src: 'media__1784889153684.jpg', dest: 'hot_air_dryer.jpg', title: 'Continuous Hot Air Dryer' },
  { src: 'media__1784889163559.jpg', dest: 'inspection_conveyor.jpg', title: 'Cooling & Inspection Conveyor' },
  { src: 'media__1784889178331.jpg', dest: 'veg_packaging.jpg', title: 'Automatic Dried Vegetable Packaging Machine' }
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
const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomaticVegetableDryingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Gallery
const galleryRegex = /const GALLERY_IMAGES = \[[\s\S]*?\];/;
const newGallery = `const GALLERY_IMAGES = [\n${images.map(img => `  { src: "/turnkey-brochures/images/veg-drying-gallery/${img.dest}", caption: "${img.title}" }`).join(',\n')}\n];`;
content = content.replace(galleryRegex, newGallery);

// 2. Machinery List
const machineryRegex = /const MACHINERY_LIST = \[[\s\S]*?\];/;
const newMachineryList = `const MACHINERY_LIST = [\n${images.map((img, idx) => `  {
    "name": "${img.title}",
    "image": "/turnkey-brochures/images/veg-drying-gallery/${img.dest}",
    "desc": "Industrial-grade equipment engineered for maximum efficiency and hygiene in the vegetable drying and dehydration process."
  }`).join(',\n')}\n];`;
content = content.replace(machineryRegex, newMachineryList);

// 3. Overview Image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/veg-drying.jpeg" alt="[^"]+" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/veg-drying-gallery/hot_air_dryer.jpg" alt="Fully Automatic Vegetable Drying Plant Overview" loading="lazy" />
            </div>`
);

// 4. Hero Subtitle
content = content.replace(
  /<p className="rcp-hero__subtitle">.*?<\/p>/,
  `<p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Dried Vegetables</p>`
);

// 5. SEO Overview Text
const oldTextRegex = /<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>/s;
const seoText = `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automatic Vegetable Drying Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity vegetable washing, slicing, blanching, and continuous hot air dehydration. Engineered to meet global food safety standards, our robust production line seamlessly processes fresh vegetables into premium-grade dried products with perfectly preserved nutrients.</p>
              <p>From automated multi-stage washing and precision slicing to efficient continuous belt drying and optical inspection, our machinery ensures absolute zero contamination. Experience maximum flavor retention, vibrant natural color, and vastly extended shelf life. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>`;
content = content.replace(oldTextRegex, seoText);

fs.writeFileSync(filePath, content);
console.log("Successfully updated Fully Automatic Vegetable Drying Plant!");
