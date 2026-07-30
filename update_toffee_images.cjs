const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ToffeePlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/toffee-gallery/1_weighing_system.jpg', caption: 'Weighing System & Batch Mixer' },
  { src: '/turnkey-brochures/images/toffee-gallery/2_toffee_cooker.jpg', caption: 'Continuous Toffee Cooker' },
  { src: '/turnkey-brochures/images/toffee-gallery/3_cooling_table.jpg', caption: 'Toffee Cooling Table & Batch Roller' },
  { src: '/turnkey-brochures/images/toffee-gallery/4_rope_sizer.jpg', caption: 'Rope Sizer & Toffee Forming Machine' },
  { src: '/turnkey-brochures/images/toffee-gallery/5_wrap_packaging.jpg', caption: 'Automatic Twist Wrap Packaging Machine' },
  { src: '/turnkey-brochures/images/toffee-gallery/6_carton_packing.jpg', caption: 'Automatic Carton Packing & Robotic Palletizing' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST entirely since I need to change names, desc, and images all together perfectly.
const machineryRegex = /const MACHINERY_LIST = \[([\s\S]*?)\]\n\n\/\* ─── FAQs ─── \*\//;

const newMachineryList = `const MACHINERY_LIST = [
  {
    name: "Weighing System & Batch Mixer",
    desc: "Precision-engineered system for weighing ingredients and batch mixing.",
    image: "/turnkey-brochures/images/toffee-gallery/1_weighing_system.jpg"
  },
  {
    name: "Continuous Toffee Cooker",
    desc: "Precision-engineered system for continuous toffee cooking and vacuum cooling.",
    image: "/turnkey-brochures/images/toffee-gallery/2_toffee_cooker.jpg"
  },
  {
    name: "Toffee Cooling Table & Batch Roller",
    desc: "Precision-engineered system for cooling the toffee mass and batch rolling.",
    image: "/turnkey-brochures/images/toffee-gallery/3_cooling_table.jpg"
  },
  {
    name: "Rope Sizer & Toffee Forming Machine",
    desc: "Precision-engineered system for rope sizing and automatic toffee forming.",
    image: "/turnkey-brochures/images/toffee-gallery/4_rope_sizer.jpg"
  },
  {
    name: "Automatic Twist Wrap Packaging Machine",
    desc: "Precision-engineered system for automatic twist wrapping of toffees.",
    image: "/turnkey-brochures/images/toffee-gallery/5_wrap_packaging.jpg"
  },
  {
    name: "Automatic Carton Packing & Robotic Palletizing",
    desc: "Precision-engineered system for carton packing and robotic palletizing.",
    image: "/turnkey-brochures/images/toffee-gallery/6_carton_packing.jpg"
  }
]

/* ─── FAQs ─── */`;

content = content.replace(machineryRegex, newMachineryList);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated ToffeePlantDetailPage.jsx');
