const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287';
const destDir = path.join(__dirname, 'public/turnkey-brochures/images/moisturizing-cream-gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// The 6 new images uploaded for Moisturizing Cream
const fileMap = {
    'media__1786109238784.jpg': '1_ingredient_dosing.jpg',
    'media__1786109248051.jpg': '2_vacuum_mixer.jpg',
    'media__1786109258515.jpg': '3_high_shear.jpg',
    'media__1786109267774.jpg': '4_storage_tank.jpg',
    'media__1786109278110.jpg': '5_jar_filling.jpg',
    'media__1786109291817.jpg': '6_labeling_packing.jpg'
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

// Update MoisturizingCreamManufacturingDetailPage.jsx
const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/MoisturizingCreamManufacturingDetailPage.jsx');
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
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/1_ingredient_dosing.jpg',
    desc: 'Precise automatic weighing and multi-head dosing system for raw materials, ensuring perfect formulation every batch.'
  },
  {
    name: 'Vacuum Emulsifying Mixer',
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/2_vacuum_mixer.jpg',
    desc: 'Advanced vacuum emulsifying mixer that blends oil and water phases to create a perfectly stable and smooth cream emulsion.'
  },
  {
    name: 'High Shear Homogenizer & Cream Processing System',
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/3_high_shear.jpg',
    desc: 'High shear homogenizer with inline pump that processes the cream to achieve consistent texture and uniform particle size.'
  },
  {
    name: 'Cream Holding Tank',
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/4_storage_tank.jpg',
    desc: 'Hygienic stainless steel holding tank that stores the finished cream safely before the filling process begins.'
  },
  {
    name: 'Automatic Jar Filling & Capping Machine',
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/5_jar_filling.jpg',
    desc: 'Fully automatic rotary jar filling and capping machine for precise, hygienic, and high-speed packaging of moisturizing cream.'
  },
  {
    name: 'Labeling & Carton Packing Machine',
    image: '/turnkey-brochures/images/moisturizing-cream-gallery/6_labeling_packing.jpg',
    desc: 'High-speed automated labeling, carton packing, and palletizing line for efficient final dispatch of finished product.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Moisturizing Cream Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Moisturizing Cream Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/1_ingredient_dosing.jpg', caption: 'Ingredient Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/4_storage_tank.jpg', caption: 'Cream Holding Tank' },
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/5_jar_filling.jpg', caption: 'Automatic Jar Filling & Capping Machine' },
  { src: '/turnkey-brochures/images/moisturizing-cream-gallery/6_labeling_packing.jpg', caption: 'Labeling & Carton Packing Machine' }
]

`;

content = content.substring(0, machStart) + newSection + content.substring(beforeMain);

// Fix Plant Overview image
content = content.replace(
    /<img src=\{'\/turnkey-brochures\/images\/[a-zA-Z-]+\/[^']+'\}/g,
    `<img src={'/turnkey-brochures/images/moisturizing-cream-gallery/2_vacuum_mixer.jpg'}`
);

fs.writeFileSync(jsxPath, content);
console.log('✅ MoisturizingCreamManufacturingDetailPage.jsx updated successfully!');
