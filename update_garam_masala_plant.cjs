const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'garam-masala-gallery');

const images = [
  { src: 'media__1784889703086.jpg', dest: 'spice_cleaning.jpg', title: 'Raw Spice Cleaning & Destoning Machine' },
  { src: 'media__1784889710546.jpg', dest: 'spice_roaster.jpg', title: 'Automatic Spice Roasting Machine' },
  { src: 'media__1784889719033.jpg', dest: 'hammer_mill.jpg', title: 'Hammer Mill / Pulverizer Grinding Machine' },
  { src: 'media__1784889726958.jpg', dest: 'ribbon_mixer.jpg', title: 'Masala Blending Ribbon Mixer' },
  { src: 'media__1784889736462.jpg', dest: 'vibro_sieving.jpg', title: 'Vibro Sieving & Fine Mesh Screening Machine' },
  { src: 'media__1784889745919.jpg', dest: 'pouch_packing.jpg', title: 'Automatic Garam Masala Pouch Filling & Packing Machine' }
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
const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Gallery
const galleryRegex = /const GALLERY_IMAGES = \[[\s\S]*?\];/;
const newGallery = `const GALLERY_IMAGES = [\n${images.map(img => `  { src: "/turnkey-brochures/images/garam-masala-gallery/${img.dest}", caption: "${img.title}" }`).join(',\n')}\n];`;
content = content.replace(galleryRegex, newGallery);

// 2. Machinery List
const machineryRegex = /const MACHINERY_LIST = \[[\s\S]*?\];/;
const newMachineryList = `const MACHINERY_LIST = [\n${images.map((img, idx) => `  {
    "name": "${img.title}",
    "image": "/turnkey-brochures/images/garam-masala-gallery/${img.dest}",
    "desc": "Industrial-grade equipment engineered for maximum efficiency, aroma retention, and hygiene in the spice processing line."
  }`).join(',\n')}\n];`;
content = content.replace(machineryRegex, newMachineryList);

// 3. Overview Image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/garam-masala.jpeg" alt="[^"]+" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/garam-masala-gallery/spice_roaster.jpg" alt="Fully Automated Garam Masala Processing Plant Overview" loading="lazy" />
            </div>`
);

// 4. Hero Subtitle
content = content.replace(
  /<p className="rcp-hero__subtitle">.*?<\/p>/,
  `<p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Garam Masala</p>`
);

// 5. SEO Overview Text
const oldTextRegex = /<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>/s;
const seoText = `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automated Garam Masala Processing Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity spice cleaning, roasting, pulverizing, and blending. Engineered to meet global food safety standards, our robust production line seamlessly processes raw whole spices into premium-grade, highly aromatic Garam Masala powder.</p>
              <p>From automated destoning and precision temperature-controlled roasting to hammer mill grinding and homogenous ribbon blending, our machinery ensures absolute zero contamination. Experience maximum volatile oil retention, vibrant natural color, and unmatched flavor consistency. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>`;
content = content.replace(oldTextRegex, seoText);

fs.writeFileSync(filePath, content);
console.log("Successfully updated Fully Automated Garam Masala Processing Plant!");
