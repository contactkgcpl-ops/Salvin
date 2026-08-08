const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/HairOilManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Raw Material Weighing & Oil Storage Tank",
    desc: "Precision weighing system coupled with a high-capacity stainless steel oil storage tank.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_1.jpg"
  },
  {
    name: "Jacketed Oil Mixing Tank",
    desc: "Stainless steel jacketed tank with agitator for heating and homogenous blending of oils and herbs.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_2.jpg"
  },
  {
    name: "Inline Homogenizer & Filtration",
    desc: "Advanced inline homogenizer and filtration system to ensure absolute purity and smooth texture.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_3.jpg"
  },
  {
    name: "Intermediate Storage Tank",
    desc: "Hygienic stainless steel intermediate tank for holding the refined hair oil before filling.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_4.jpg"
  },
  {
    name: "Automatic Bottle Filling & Capping",
    desc: "High-speed automatic liquid filling and capping machine for precise and spill-free bottling.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_5.jpg"
  },
  {
    name: "Labeling & Dispatch System",
    desc: "Automated labeling machine integrated with a carton packing and dispatch conveying system.",
    image: "/turnkey-brochures/images/cosmetic/hair_oil_plant_6.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 1, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_1.jpg', alt: 'Raw Material Weighing & Oil Storage Tank' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_2.jpg', alt: 'Jacketed Oil Mixing Tank with Agitator' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_3.jpg', alt: 'Inline Homogenizer & Filtration System' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_4.jpg', alt: 'Intermediate Storage Tank' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_5.jpg', alt: 'Automatic Bottle Filling & Capping Machine' },
  { id: 6, src: '/turnkey-brochures/images/cosmetic/hair_oil_plant_6.jpg', alt: 'Labeling & Dispatch System' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated HairOilManufacturingPlantDetailPage.jsx');
