const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'WaferPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/wafer-gallery/1_batter_mixer.jpg', caption: 'Wafer Batter Preparation & Mixing' },
  { src: '/turnkey-brochures/images/wafer-gallery/2_wafer_baking.jpg', caption: 'Automatic Wafer Baking Machine' },
  { src: '/turnkey-brochures/images/wafer-gallery/3_cream_spreading.jpg', caption: 'Wafer Cream Spreading System' },
  { src: '/turnkey-brochures/images/wafer-gallery/4_block_laminating.jpg', caption: 'Wafer Block Laminating & Cutting' },
  { src: '/turnkey-brochures/images/wafer-gallery/5_flow_wrapper.jpg', caption: 'Automatic Flow Wrapper Packaging' },
  { src: '/turnkey-brochures/images/wafer-gallery/6_carton_packing.jpg', caption: 'Carton Packing & Case Sealing Dispatch' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/wafer-gallery/1_batter_mixer.jpg',
  '/turnkey-brochures/images/wafer-gallery/2_wafer_baking.jpg',
  '/turnkey-brochures/images/wafer-gallery/3_cream_spreading.jpg',
  '/turnkey-brochures/images/wafer-gallery/4_block_laminating.jpg',
  '/turnkey-brochures/images/wafer-gallery/5_flow_wrapper.jpg',
  '/turnkey-brochures/images/wafer-gallery/6_carton_packing.jpg'
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
console.log('Updated WaferPlantDetailPage.jsx');
