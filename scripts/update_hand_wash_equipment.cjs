const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/HandWashManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Raw Material Weighing & Mixing System",
    desc: "Stainless steel weighing scale and dosing vessels for precise measurement of hand wash ingredients.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_1.jpg"
  },
  {
    name: "Jacketed Mixing Tank with Agitator",
    desc: "Advanced jacketed mixing tank equipped with a top-mounted agitator for uniform blending and heating.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_2.jpg"
  },
  {
    name: "Inline Homogenizer & Filtration",
    desc: "High-performance inline homogenizer paired with a filtration system for a smooth, lump-free texture.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_3.jpg"
  },
  {
    name: "Intermediate Storage Tank",
    desc: "Hygienic stainless steel intermediate storage tank for holding the finished hand wash prior to filling.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_4.jpg"
  },
  {
    name: "Automatic Bottle Filling & Capping",
    desc: "Automated filling and capping machine specifically designed for precise dispensing into hand wash pump bottles.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_5.jpg"
  },
  {
    name: "Labeling & Carton Packing System",
    desc: "Integrated labeling machine and carton packing system ensuring retail-ready packaging and seamless dispatch.",
    image: "/turnkey-brochures/images/cosmetic/hand_wash_plant_6.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 1, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_1.jpg', alt: 'Raw Material Weighing & Mixing System' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_2.jpg', alt: 'Jacketed Mixing Tank with Agitator' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_3.jpg', alt: 'Inline Homogenizer & Filtration' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_4.jpg', alt: 'Intermediate Storage Tank' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_5.jpg', alt: 'Automatic Bottle Filling & Capping' },
  { id: 6, src: '/turnkey-brochures/images/cosmetic/hand_wash_plant_6.jpg', alt: 'Labeling & Carton Packing System' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated HandWashManufacturingPlantDetailPage.jsx');
