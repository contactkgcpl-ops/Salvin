const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChocolateProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace gallery image and caption
content = content.replace(
  /{ src: '\/turnkey-brochures\/images\/chocolate-gallery\/6_packaging_system\.jpg', caption: 'Wrapping, Packing & Palletizing' }/g,
  `{ src: '/turnkey-brochures/images/chocolate-gallery/6_chocolate_wrapping.jpg', caption: 'Automatic Chocolate Wrapping Machine' }`
);

// Replace machinery list image
content = content.replace(
  /image: "\/turnkey-brochures\/images\/chocolate-gallery\/6_packaging_system\.jpg"/g,
  `image: "/turnkey-brochures/images/chocolate-gallery/6_chocolate_wrapping.jpg"`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated Chocolate Processing Plant 6th image.');
