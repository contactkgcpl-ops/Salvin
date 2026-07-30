const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'BreadPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/bread-gallery/1_dough_mixer.jpg', caption: 'Industrial Dough Mixer & Flour Silo' },
  { src: '/turnkey-brochures/images/bread-gallery/2_dough_divider.jpg', caption: 'Dough Divider & Rounder Station' },
  { src: '/turnkey-brochures/images/bread-gallery/3_bread_moulder.jpg', caption: 'Bread Moulder & Final Proofer' },
  { src: '/turnkey-brochures/images/bread-gallery/4_tunnel_oven.jpg', caption: 'Continuous Tunnel Baking Oven' },
  { src: '/turnkey-brochures/images/bread-gallery/5_cooling_slicer.jpg', caption: 'Cooling Conveyor & Bread Slicer' },
  { src: '/turnkey-brochures/images/bread-gallery/6_carton_packing.jpg', caption: 'Carton Packing & Robotic Palletizing' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/bread-gallery/1_dough_mixer.jpg',
  '/turnkey-brochures/images/bread-gallery/2_dough_divider.jpg',
  '/turnkey-brochures/images/bread-gallery/3_bread_moulder.jpg',
  '/turnkey-brochures/images/bread-gallery/4_tunnel_oven.jpg',
  '/turnkey-brochures/images/bread-gallery/5_cooling_slicer.jpg',
  '/turnkey-brochures/images/bread-gallery/6_carton_packing.jpg'
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
console.log('Updated BreadPlantDetailPage.jsx');
