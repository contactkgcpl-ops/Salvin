const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'CakePlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/cake-gallery/1_batter_mixer.jpg', caption: 'Industrial Cake Batter Rapid Mixer' },
  { src: '/turnkey-brochures/images/cake-gallery/2_batter_depositor.jpg', caption: 'Automatic Cake Batter Depositor' },
  { src: '/turnkey-brochures/images/cake-gallery/3_tunnel_oven.jpg', caption: 'Continuous Tunnel Baking Oven' },
  { src: '/turnkey-brochures/images/cake-gallery/4_cooling_conveyor.jpg', caption: 'Cake Cooling Conveyor System' },
  { src: '/turnkey-brochures/images/cake-gallery/5_cake_decorator.jpg', caption: 'Automatic Cake Decorator Machine' },
  { src: '/turnkey-brochures/images/cake-gallery/6_packaging_machine.jpg', caption: 'Cake Packaging & Robotic Palletizing' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/cake-gallery/1_batter_mixer.jpg',
  '/turnkey-brochures/images/cake-gallery/2_batter_depositor.jpg',
  '/turnkey-brochures/images/cake-gallery/3_tunnel_oven.jpg',
  '/turnkey-brochures/images/cake-gallery/4_cooling_conveyor.jpg',
  '/turnkey-brochures/images/cake-gallery/5_cake_decorator.jpg',
  '/turnkey-brochures/images/cake-gallery/6_packaging_machine.jpg'
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
console.log('Updated CakePlantDetailPage.jsx');
