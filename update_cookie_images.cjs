const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'CookiePlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/cookie-gallery/1_dough_mixer.jpg', caption: 'Industrial Dough Mixer & Extruder Feed' },
  { src: '/turnkey-brochures/images/cookie-gallery/2_cookie_extruder.jpg', caption: 'Rotary Cookie Dropper & Extruder' },
  { src: '/turnkey-brochures/images/cookie-gallery/3_tunnel_oven.jpg', caption: 'Continuous Tunnel Baking Oven' },
  { src: '/turnkey-brochures/images/cookie-gallery/4_cooling_conveyor.jpg', caption: 'Cooling Conveyor System' },
  { src: '/turnkey-brochures/images/cookie-gallery/5_flow_wrapper.jpg', caption: 'Automatic Flow Wrapping Machine' },
  { src: '/turnkey-brochures/images/cookie-gallery/6_carton_sealer.jpg', caption: 'Carton Sealing & Dispatch' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/cookie-gallery/1_dough_mixer.jpg',
  '/turnkey-brochures/images/cookie-gallery/2_cookie_extruder.jpg',
  '/turnkey-brochures/images/cookie-gallery/3_tunnel_oven.jpg',
  '/turnkey-brochures/images/cookie-gallery/4_cooling_conveyor.jpg',
  '/turnkey-brochures/images/cookie-gallery/5_flow_wrapper.jpg',
  '/turnkey-brochures/images/cookie-gallery/6_carton_sealer.jpg'
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
console.log('Updated CookiePlantDetailPage.jsx');
