const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/FaceWashManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Mixing & Heating Tanks",
    desc: "Stainless steel tanks for initial preparation and heating of raw materials.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_0.jpg"
  },
  {
    name: "Vacuum Emulsifying Mixer",
    desc: "Advanced vacuum emulsifying system with oil and water phase tanks for smooth blending.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_1.jpg"
  },
  {
    name: "Homogenizer & Cooling Tank",
    desc: "High-shear homogenizer combined with a cooling mixing tank for stable emulsion.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_2.jpg"
  },
  {
    name: "Intermediate Storage Tank",
    desc: "Hygienic stainless steel storage tank for holding the processed face wash before filling.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_3.jpg"
  },
  {
    name: "Automatic Tube Filling & Sealing",
    desc: "High-speed automatic filling and sealing machine for precise dosing into tubes.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_4.jpg"
  },
  {
    name: "Packing & Dispatch System",
    desc: "Automated carton packing and dispatch conveying system for final product.",
    image: "/turnkey-brochures/images/cosmetic/face_wash_plant_5.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 0, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_0.jpg', alt: 'Mixing & Heating Tanks' },
  { id: 1, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_1.jpg', alt: 'Vacuum Emulsifying Mixer' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_2.jpg', alt: 'Homogenizer and Cooling Mixing Tank' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_3.jpg', alt: 'Intermediate Storage Tank' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_4.jpg', alt: 'Automatic Tube Filling & Sealing Machine' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/face_wash_plant_5.jpg', alt: 'Packing & Dispatch System' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated FaceWashManufacturingPlantDetailPage.jsx');
