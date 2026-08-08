const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287';
const destDir = path.join(__dirname, 'public/turnkey-brochures/images/hair-serum-gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// The 6 new images for Hair Serum (latest batch)
const fileMap = {
    'media__1786109746526.png': '1_raw_material_tank.jpg',
    'media__1786109782791.jpg': '2_serum_mixing_tank.jpg',
    'media__1786109820368.png': '3_inline_homogenizer.jpg',
    'media__1786109837130.png': '4_holding_tank.jpg',
    'media__1786109851901.png': '5_bottle_filling_capping.jpg',
    'media__1786109889975.jpg': '6_labeling_packing.jpg'
};

for (const [srcName, destName] of Object.entries(fileMap)) {
    const srcPath = path.join(sourceDir, srcName);
    const destPath = path.join(destDir, destName);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcName} → ${destName}`);
    } else {
        console.log(`NOT FOUND: ${srcPath}`);
    }
}

// Update HairSerumManufacturingDetailPage.jsx
const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/HairSerumManufacturingDetailPage.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const beforeMain = content.indexOf('export default function');
const machStart = content.indexOf('/* ─── Machinery Used ─── */');

if (machStart === -1 || beforeMain === -1) {
    console.log('ERROR: Could not find injection points in JSX');
    process.exit(1);
}

const newSection = `
/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Raw Material Dispensing System',
    image: '/turnkey-brochures/images/hair-serum-gallery/1_raw_material_tank.jpg',
    desc: 'Precision raw material dispensing tank system with automated controls for accurately measuring and transferring active serum ingredients.'
  },
  {
    name: 'Serum Mixing & Blending Tank',
    image: '/turnkey-brochures/images/hair-serum-gallery/2_serum_mixing_tank.jpg',
    desc: 'Stainless steel serum mixing tank with agitator and PLC control panel for consistent blending of all serum formulation ingredients.'
  },
  {
    name: 'Inline High Shear Homogenizer',
    image: '/turnkey-brochures/images/hair-serum-gallery/3_inline_homogenizer.jpg',
    desc: 'Industrial inline homogenizer that processes the serum blend to achieve a perfectly smooth, transparent, and particle-free final product.'
  },
  {
    name: 'Serum Holding Tank',
    image: '/turnkey-brochures/images/hair-serum-gallery/4_holding_tank.jpg',
    desc: 'Large-capacity polished stainless steel holding tank that stores the finished serum batch under hygienic conditions before filling.'
  },
  {
    name: 'Automatic Bottle Filling & Capping Machine',
    image: '/turnkey-brochures/images/hair-serum-gallery/5_bottle_filling_capping.jpg',
    desc: 'High-speed automatic serum bottle filling and capping machine that accurately fills dropper bottles and seals them at production speed.'
  },
  {
    name: 'Labeling & Carton Packing Line',
    image: '/turnkey-brochures/images/hair-serum-gallery/6_labeling_packing.jpg',
    desc: 'Automated high-speed labeling, carton packing, and conveyor dispatch line for efficiently preparing the finished product for shipping.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Hair Serum Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Hair Serum Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
  },
  {
    question: "How much capacity can this plant handle in one day?",
    answer: "We build turnkey plants according to your needs. You can choose a small-scale plant or a large industrial plant depending on your budget and market demand."
  },
  {
    question: "Is it difficult to run this automatic plant?",
    answer: "Not at all. We design our machines with easy-to-use automatic control panels (PLC). We will also give full training to your workers on how to run the plant safely and easily."
  },
  {
    question: "Will Salvin Industries install the machines at my factory?",
    answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/hair-serum-gallery/1_raw_material_tank.jpg', caption: 'Raw Material Dispensing System' },
  { src: '/turnkey-brochures/images/hair-serum-gallery/2_serum_mixing_tank.jpg', caption: 'Serum Mixing & Blending Tank' },
  { src: '/turnkey-brochures/images/hair-serum-gallery/3_inline_homogenizer.jpg', caption: 'Inline High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/hair-serum-gallery/4_holding_tank.jpg', caption: 'Serum Holding Tank' },
  { src: '/turnkey-brochures/images/hair-serum-gallery/5_bottle_filling_capping.jpg', caption: 'Automatic Bottle Filling & Capping Machine' },
  { src: '/turnkey-brochures/images/hair-serum-gallery/6_labeling_packing.jpg', caption: 'Labeling & Carton Packing Line' }
]

`;

content = content.substring(0, machStart) + newSection + content.substring(beforeMain);

// Fix Plant Overview image
content = content.replace(
    /<img src=\{'\/turnkey-brochures\/images\/[a-zA-Z-]+\/[^']+'\}/g,
    `<img src={'/turnkey-brochures/images/hair-serum-gallery/2_serum_mixing_tank.jpg'}`
);

fs.writeFileSync(jsxPath, content);
console.log('✅ HairSerumManufacturingDetailPage.jsx updated successfully!');
