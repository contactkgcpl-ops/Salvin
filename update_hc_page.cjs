const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/TurnkeyProject/components/HairConditionerManufacturingDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace MACHINERY_LIST
const oldMachinery = `const MACHINERY_LIST = [

  {
    name: 'Ingredient Dosing & Mixing System',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/1_ingredient_dosing.webp',
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Syrup Preparation System',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/2_syrup_preparation.webp',
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Hair Conditioner Mass Mixer',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/3_mass_mixer.webp',
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Hair Conditioner Forming Machine',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/4_forming_machine.webp',
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Hair Conditioner Cutting Machine',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/5_cutting_machine.webp',
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Flow Wrapping & Packaging Machine',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/6_flow_wrapping.webp',
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]`;

const newMachinery = `const MACHINERY_LIST = [
  {
    name: 'Weighing & Dosing System',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg',
    desc: 'Automatic weighing and dosing system for precise measurement of raw materials, ensuring perfect batch consistency.'
  },
  {
    name: 'Vacuum Emulsifying Mixer',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg',
    desc: 'Advanced vacuum mixing vessel for perfectly blending and emulsifying the conditioner ingredients without air bubbles.'
  },
  {
    name: 'High Shear Homogenizer',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg',
    desc: 'Heavy-duty high shear homogenizer system designed to create an ultra-smooth and stable emulsion.'
  },
  {
    name: 'Storage Holding Tank',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg',
    desc: 'High-grade stainless steel holding tank to safely store the prepared conditioner before the filling process.'
  },
  {
    name: 'Automatic Bottle Filling & Capping Machine',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg',
    desc: 'Fully automatic rotary filling and capping station to efficiently and hygienically pack the product into bottles.'
  },
  {
    name: 'Automatic Labeling & Carton Packing Machine',
    image: '/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg',
    desc: 'High-speed labeling and carton packaging system for final dispatch, reducing manual labor and errors.'
  }
]`;

// Replace GALLERY_IMAGES
const oldGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/1_ingredient_dosing.webp', caption: 'Ingredient Dosing & Mixing System' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/2_syrup_preparation.webp', caption: 'Syrup Preparation System' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/3_mass_mixer.webp', caption: 'Hair Conditioner Mass Mixer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/4_forming_machine.webp', caption: 'Hair Conditioner Forming Machine' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/5_cutting_machine.webp', caption: 'Hair Conditioner Cutting Machine' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/6_flow_wrapping.webp', caption: 'Flow Wrapping Machine' },
]`;

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg', caption: 'Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg', caption: 'Storage Holding Tank' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg', caption: 'Automatic Bottle Filling & Capping Machine' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg', caption: 'Automatic Labeling & Carton Packing Machine' },
]`;

content = content.replace(oldMachinery, newMachinery);
content = content.replace(oldGallery, newGallery);

fs.writeFileSync(filePath, content);
console.log('Successfully updated Hair Conditioner Detail Page!');
