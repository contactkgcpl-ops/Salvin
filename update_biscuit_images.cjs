const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'BiscuitPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/biscuit-gallery/1_dough_mixer.jpg', caption: 'Industrial Dough Mixer & Ingredient Silos' },
  { src: '/turnkey-brochures/images/biscuit-gallery/2_rotary_moulding.jpg', caption: 'Rotary Moulding & Dough Feeding Machine' },
  { src: '/turnkey-brochures/images/biscuit-gallery/3_tunnel_oven.jpg', caption: 'Continuous Tunnel Baking Oven' },
  { src: '/turnkey-brochures/images/biscuit-gallery/4_cooling_conveyor.jpg', caption: 'Cooling Conveyor System' },
  { src: '/turnkey-brochures/images/biscuit-gallery/5_flow_wrap_packaging.jpg', caption: 'Automatic Flow Wrap Packaging Machine' },
  { src: '/turnkey-brochures/images/biscuit-gallery/6_carton_packing.jpg', caption: 'Carton Packing & Robotic Palletizing' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/biscuit-gallery/1_dough_mixer.jpg',
  '/turnkey-brochures/images/biscuit-gallery/2_rotary_moulding.jpg',
  '/turnkey-brochures/images/biscuit-gallery/3_tunnel_oven.jpg',
  '/turnkey-brochures/images/biscuit-gallery/4_cooling_conveyor.jpg',
  '/turnkey-brochures/images/biscuit-gallery/5_flow_wrap_packaging.jpg',
  '/turnkey-brochures/images/biscuit-gallery/6_carton_packing.jpg'
];

let matchCount = 0;
content = content.replace(/image:\s*['"][^'"]*['"]/g, (match) => {
  if (matchCount < 6) {
    const replacement = `image: "${imagePaths[matchCount]}"`;
    matchCount++;
    return replacement;
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated BiscuitPlantDetailPage.jsx');
