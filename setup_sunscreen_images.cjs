const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287';
const destDir = path.join(__dirname, 'public/turnkey-brochures/images/sunscreen-lotion-gallery');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Map the newly uploaded 6 images
const fileMap = {
    'media__1786108649633.jpg': '1_ingredient_dosing.jpg',
    'media__1786108660293.jpg': '2_vacuum_mixer.jpg',
    'media__1786108671684.jpg': '3_high_shear.jpg',
    'media__1786108680907.jpg': '4_storage_tank.jpg',
    'media__1786108691854.jpg': '5_tube_filling.jpg',
    'media__1786108703232.jpg': '6_labeling_packing.jpg'
};

for (const [srcName, destName] of Object.entries(fileMap)) {
    const srcPath = path.join(sourceDir, srcName);
    const destPath = path.join(destDir, destName);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcName} to ${destName}`);
    } else {
        console.log(`Source file not found: ${srcPath}`);
    }
}

// Now update the SunscreenLotionManufacturingDetailPage.jsx component
const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/SunscreenLotionManufacturingDetailPage.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const galleryStart = content.indexOf('const GALLERY_IMAGES');
if (galleryStart !== -1) {
    const beforeMain = content.indexOf('export default function');
    const machStart = content.indexOf('/* ─── Machinery Used ─── */');
    
    const newMachineryAndGallery = `
/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Ingredient Weighing & Dosing System',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/1_ingredient_dosing.jpg',
    desc: 'Automatic weighing and dosing system for precise measurement of raw materials, ensuring perfect batch consistency.'
  },
  {
    name: 'Vacuum Emulsifying Mixer',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/2_vacuum_mixer.jpg',
    desc: 'Advanced vacuum mixing vessel for perfectly blending and emulsifying the sunscreen ingredients without air bubbles.'
  },
  {
    name: 'High Shear Homogenizer',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/3_high_shear.jpg',
    desc: 'Heavy-duty high shear homogenizer system designed to create an ultra-smooth and stable emulsion.'
  },
  {
    name: 'Storage Holding Tank',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/4_storage_tank.jpg',
    desc: 'High-grade stainless steel holding tank to safely store the prepared sunscreen lotion before the filling process.'
  },
  {
    name: 'Automatic Tube Filling & Sealing Machine',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/5_tube_filling.jpg',
    desc: 'Fully automatic rotary tube filling and sealing station to efficiently and hygienically pack the product into tubes.'
  },
  {
    name: 'Automatic Labeling & Carton Packing Machine',
    image: '/turnkey-brochures/images/sunscreen-lotion-gallery/6_labeling_packing.jpg',
    desc: 'High-speed labeling and carton packaging system for final dispatch, reducing manual labor and errors.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Sunscreen Lotion Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Sunscreen Lotion Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
    question: "Will the final product taste natural and fresh?",
    answer: "Yes, definitely. Our machines use advanced technology to ensure your product keeps its original color, natural taste, and healthy nutrients."
  },
  {
    question: "Will Salvin Industries install the machines at my factory?",
    answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/1_ingredient_dosing.jpg', caption: 'Ingredient Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/4_storage_tank.jpg', caption: 'Storage Holding Tank' },
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/5_tube_filling.jpg', caption: 'Automatic Tube Filling & Sealing Machine' },
  { src: '/turnkey-brochures/images/sunscreen-lotion-gallery/6_labeling_packing.jpg', caption: 'Automatic Labeling & Carton Packing Machine' }
]

`;
    if (machStart !== -1) {
        content = content.substring(0, machStart) + newMachineryAndGallery + content.substring(beforeMain);
    }
    
    // Plant Overview Image
    const overviewImgRegex = /<img src=\{'\/turnkey-brochures\/images\/[a-zA-Z-]+\/[^']+'\}/g;
    content = content.replace(overviewImgRegex, `<img src={'/turnkey-brochures/images/sunscreen-lotion-gallery/2_vacuum_mixer.jpg'}`);
    
    fs.writeFileSync(jsxPath, content);
    console.log("Updated SunscreenLotionManufacturingDetailPage.jsx successfully.");
} else {
    console.log("Could not find gallery start in JSX");
}
