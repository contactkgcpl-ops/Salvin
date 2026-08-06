const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/ShampooManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Raw Material Weighing & Dosing",
    desc: "Automated dosing system for precise measurement of SLES, CAPB, COCO DI, salt, and fragrance.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_1.jpg"
  },
  {
    name: "Main Mixing Tank",
    desc: "Stainless steel blending vessel equipped with heating capabilities for homogenous mixing.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_2.jpg"
  },
  {
    name: "High Shear Mixer",
    desc: "Advanced high-shear homogenizer to ensure perfect emulsion and smooth product texture.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_3.jpg"
  },
  {
    name: "Storage Tanks",
    desc: "Hygienic intermediate storage tanks for holding the finished shampoo before filling.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_4.jpg"
  },
  {
    name: "Filling & Capping Machine",
    desc: "Automatic high-speed piston filling and capping machine for precise bottling.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_5.jpg"
  },
  {
    name: "Labeling & Packaging Machine",
    desc: "Automated labeling and shrink sleeve packaging system for final product presentation.",
    image: "/turnkey-brochures/images/cosmetic/shampoo_plant_6.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 1, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_1.jpg', alt: 'Raw Material Weighing & Dosing System' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_2.jpg', alt: 'Main Mixing Tank' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_3.jpg', alt: 'High Shear Mixer' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_4.jpg', alt: 'Storage Tanks' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_5.jpg', alt: 'Filling & Capping Machine' },
  { id: 6, src: '/turnkey-brochures/images/cosmetic/shampoo_plant_6.jpg', alt: 'Labeling & Packaging Machine' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated ShampooManufacturingPlantDetailPage.jsx');
