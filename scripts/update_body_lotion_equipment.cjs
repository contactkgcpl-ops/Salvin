const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/BodyLotionManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Raw Material Weighing & Dosing System",
    desc: "Automated weighing controller and hopper system for precise dispensing of raw materials.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_1.jpg"
  },
  {
    name: "Vacuum Emulsifying Mixing Vessel",
    desc: "Advanced vacuum emulsifying mixer equipped with heating and homogenization capabilities.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_2.jpg"
  },
  {
    name: "High Shear Mixer / Homogenizer",
    desc: "High shear mixer ensuring a perfectly smooth and stable emulsion for body lotions.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_3.jpg"
  },
  {
    name: "Storage Holding Tank",
    desc: "Hygienic stainless steel storage holding tank to maintain product temperature and consistency.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_4.jpg"
  },
  {
    name: "Automatic Bottle Filling & Capping Machine",
    desc: "High-speed automated system for precise filling and secure capping of lotion bottles.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_5.jpg"
  },
  {
    name: "Labeling & Packaging Machine",
    desc: "Automated labeling and shrink sleeve packaging machine for final retail presentation.",
    image: "/turnkey-brochures/images/cosmetic/body_lotion_plant_6.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 1, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_1.jpg', alt: 'Raw Material Weighing & Dosing System' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_2.jpg', alt: 'Vacuum Emulsifying Mixing Vessel' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_3.jpg', alt: 'Homogenizer / High Shear Mixer' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_4.jpg', alt: 'Storage Holding Tank' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_5.jpg', alt: 'Automatic Bottle Filling & Capping Machine' },
  { id: 6, src: '/turnkey-brochures/images/cosmetic/body_lotion_plant_6.jpg', alt: 'Labeling & Packaging Machine' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated BodyLotionManufacturingPlantDetailPage.jsx');
