const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components/LiquidSoapManufacturingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const machineryStart = content.indexOf('const MACHINERY_LIST = [');
const machineryEnd = content.indexOf(']', machineryStart) + 1;
const newMachinery = `const MACHINERY_LIST = [
  {
    name: "Raw Material Weighing & Dosing System",
    desc: "Precision dosing system for continuous and accurate feeding of surfactants, salts, and citric acid.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_1.jpg"
  },
  {
    name: "Liquid Soap Mixing Tank",
    desc: "High-capacity stainless steel mixing tank with advanced temperature and agitation control.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_2.jpg"
  },
  {
    name: "Inline Homogenizer & High Shear Mixer",
    desc: "Powerful inline homogenizer and high shear mixer for a completely stable and uniform liquid soap.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_3.jpg"
  },
  {
    name: "Storage Holding Tank",
    desc: "Hygienic holding tank for buffering the finished liquid soap prior to the filling process.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_4.jpg"
  },
  {
    name: "Automatic Bottle Filling & Capping Machine",
    desc: "Automated, high-speed filling line equipped with precision nozzles and capping stations.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_5.jpg"
  },
  {
    name: "Labeling & Shrink Sleeve Packaging Machine",
    desc: "Integrated labeling and shrink tunnel system for automated retail-ready packaging.",
    image: "/turnkey-brochures/images/cosmetic/liquid_soap_plant_6.jpg"
  }
]`;

content = content.substring(0, machineryStart) + newMachinery + content.substring(machineryEnd);

// Replace GALLERY_IMAGES
const galleryStart = content.indexOf('const GALLERY_IMAGES = [');
const galleryEnd = content.indexOf(']', galleryStart) + 1;
const newGallery = `const GALLERY_IMAGES = [
  { id: 1, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_1.jpg', alt: 'Raw Material Weighing & Dosing System' },
  { id: 2, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_2.jpg', alt: 'Liquid Soap Mixing Tank' },
  { id: 3, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_3.jpg', alt: 'Inline Homogenizer & High Shear Mixer' },
  { id: 4, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_4.jpg', alt: 'Storage Holding Tank' },
  { id: 5, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_5.jpg', alt: 'Automatic Bottle Filling & Capping Machine' },
  { id: 6, src: '/turnkey-brochures/images/cosmetic/liquid_soap_plant_6.jpg', alt: 'Labeling & Shrink Sleeve Packaging Machine' }
]`;

content = content.substring(0, galleryStart) + newGallery + content.substring(galleryEnd);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated LiquidSoapManufacturingPlantDetailPage.jsx');
