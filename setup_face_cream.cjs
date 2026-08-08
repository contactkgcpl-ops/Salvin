const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287';
const destDir = path.join(__dirname, 'public/turnkey-brochures/images/face-cream-gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// The 6 new images for Face Cream (latest batch)
const fileMap = {
    'media__1786109508783.jpg': '1_ingredient_dosing.jpg',
    'media__1786109517619.jpg': '2_vacuum_mixer.jpg',
    'media__1786109528021.jpg': '3_high_shear.jpg',
    'media__1786109537122.jpg': '4_holding_tank.jpg',
    'media__1786109546794.jpg': '5_filling_sealing.jpg',
    'media__1786109557467.jpg': '6_labeling_packing.jpg'
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

// Update FaceCreamManufacturingDetailPage.jsx
const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/FaceCreamManufacturingDetailPage.jsx');
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
    name: 'Ingredient Weighing & Dosing System',
    image: '/turnkey-brochures/images/face-cream-gallery/1_ingredient_dosing.jpg',
    desc: 'Multi-tank automatic dosing system with precision digital weighing for accurate formulation of all face cream ingredients.'
  },
  {
    name: 'Vacuum Emulsifying Mixer',
    image: '/turnkey-brochures/images/face-cream-gallery/2_vacuum_mixer.jpg',
    desc: 'Industrial-grade vacuum emulsifying mixer that combines oil and water phases under vacuum to create a smooth, stable face cream emulsion.'
  },
  {
    name: 'High Shear Homogenizer',
    image: '/turnkey-brochures/images/face-cream-gallery/3_high_shear.jpg',
    desc: 'Powerful high shear homogenizer with cream processing tank that refines the emulsion to a perfectly uniform and smooth texture.'
  },
  {
    name: 'Cream Holding Tank',
    image: '/turnkey-brochures/images/face-cream-gallery/4_holding_tank.jpg',
    desc: 'Large-capacity hygienic SS holding tank that stores the finished face cream batch safely at controlled temperature before filling.'
  },
  {
    name: 'Automatic Cream Filling & Sealing Machine',
    image: '/turnkey-brochures/images/face-cream-gallery/5_filling_sealing.jpg',
    desc: 'High-speed automatic cream filling and sealing machine that precisely fills face cream jars and seals them at production-line speed.'
  },
  {
    name: 'Labeling & Carton Packing Line',
    image: '/turnkey-brochures/images/face-cream-gallery/6_labeling_packing.jpg',
    desc: 'Fully automated labeling machine, carton packing station, and case sealer that prepares the finished product for dispatch.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Face Cream Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Face Cream Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
  { src: '/turnkey-brochures/images/face-cream-gallery/1_ingredient_dosing.jpg', caption: 'Ingredient Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/face-cream-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/face-cream-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/face-cream-gallery/4_holding_tank.jpg', caption: 'Cream Holding Tank' },
  { src: '/turnkey-brochures/images/face-cream-gallery/5_filling_sealing.jpg', caption: 'Automatic Cream Filling & Sealing Machine' },
  { src: '/turnkey-brochures/images/face-cream-gallery/6_labeling_packing.jpg', caption: 'Labeling & Carton Packing Line' }
]

`;

content = content.substring(0, machStart) + newSection + content.substring(beforeMain);

// Fix Plant Overview image
content = content.replace(
    /<img src=\{'\/turnkey-brochures\/images\/[a-zA-Z-]+\/[^']+'\}/g,
    `<img src={'/turnkey-brochures/images/face-cream-gallery/2_vacuum_mixer.jpg'}`
);

fs.writeFileSync(jsxPath, content);
console.log('✅ FaceCreamManufacturingDetailPage.jsx updated successfully!');
