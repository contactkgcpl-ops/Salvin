const fs = require('fs');
const path = require('path');

const plants = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': 'aloe-vera-juice.jpg',
  'BiscuitPlantDetailPage.jsx': 'biscuit-plant.jpg',
  'CookiePlantDetailPage.jsx': 'cookie-plant.jpg',
  'BreadPlantDetailPage.jsx': 'bread-plant.jpg',
  'CakePlantDetailPage.jsx': 'cake-plant.jpg',
  'WaferPlantDetailPage.jsx': 'wafer-plant.jpg',
  'ChocolateProcessingPlantDetailPage.jsx': 'chocolate-plant.jpg',
  'ToffeePlantDetailPage.jsx': 'toffee-plant.jpg'
};

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [filename, imgName] of Object.entries(plants)) {
  const filePath = path.join(componentsDir, filename);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace empty GALLERY_IMAGES
  const galleryString = `const GALLERY_IMAGES = [\n  { src: '/turnkey-brochures/images/${imgName}', caption: 'Plant Overview' }\n]`;
  content = content.replace(/const GALLERY_IMAGES = \[\]/, galleryString);

  // Replace background image in hero
  content = content.replace(/url\([^)]*\)/g, `url('/turnkey-brochures/images/${imgName}')`);
  
  // Update MACHINERY_LIST images (if they have empty string)
  // Just in case, replace image: "" with image: \`/turnkey-brochures/images/${imgName}\`
  content = content.replace(/image:\s*""/g, `image: "/turnkey-brochures/images/${imgName}"`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated images in ${filename}`);
}
