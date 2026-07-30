const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChocolateProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/chocolate-gallery/1_cocoa_roaster.jpg', caption: 'Industrial Cocoa Bean Roasting' },
  { src: '/turnkey-brochures/images/chocolate-gallery/2_cocoa_grinder.jpg', caption: 'Cocoa Grinding & Liquor Preparation' },
  { src: '/turnkey-brochures/images/chocolate-gallery/3_chocolate_conche.jpg', caption: 'Chocolate Conche & Refiner Roll' },
  { src: '/turnkey-brochures/images/chocolate-gallery/4_chocolate_mixer.jpg', caption: 'Chocolate Mass Mixing Tank' },
  { src: '/turnkey-brochures/images/chocolate-gallery/5_chocolate_moulding.jpg', caption: 'Automatic Chocolate Moulding Machine' },
  { src: '/turnkey-brochures/images/chocolate-gallery/6_packaging_system.jpg', caption: 'Wrapping, Packing & Palletizing' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/chocolate-gallery/1_cocoa_roaster.jpg',
  '/turnkey-brochures/images/chocolate-gallery/2_cocoa_grinder.jpg',
  '/turnkey-brochures/images/chocolate-gallery/3_chocolate_conche.jpg',
  '/turnkey-brochures/images/chocolate-gallery/4_chocolate_mixer.jpg',
  '/turnkey-brochures/images/chocolate-gallery/5_chocolate_moulding.jpg',
  '/turnkey-brochures/images/chocolate-gallery/6_packaging_system.jpg'
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
console.log('Updated ChocolateProcessingPlantDetailPage.jsx');
