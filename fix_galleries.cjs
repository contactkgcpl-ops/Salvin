const fs = require('fs');
const path = require('path');

const plants = [
  'FaceCreamManufacturingDetailPage.jsx',
  'MoisturizingCreamManufacturingDetailPage.jsx',
  'SunscreenLotionManufacturingDetailPage.jsx',
  'HairSerumManufacturingDetailPage.jsx',
  'BabyLotionManufacturingDetailPage.jsx',
  'BodyButterManufacturingDetailPage.jsx',
  'FacialSerumManufacturingDetailPage.jsx',
  'BabyShampooManufacturingDetailPage.jsx'
];

const newImages = [
  '/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg',
  '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg',
  '/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg',
  '/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg',
  '/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg',
  '/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg'
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (let file of plants) {
  let filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    const filePathOld = path.join(dir, file.replace('DetailPage', 'PlantDetailPage'));
    if (!fs.existsSync(filePathOld)) continue;
    filePath = filePathOld;
    file = file.replace('DetailPage', 'PlantDetailPage');
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace MACHINERY_LIST images
  // It looks like: image: '/turnkey-brochures/images/...',
  let machCount = 0;
  content = content.replace(/image:\s*'\/turnkey-brochures\/images\/[^']+'/g, (match) => {
    const rep = `image: '${newImages[machCount % 6]}'`;
    machCount++;
    return rep;
  });

  // Replace GALLERY_IMAGES images
  // It looks like: { src: '/turnkey-brochures/images/...', caption: '...' }
  let galCount = 0;
  content = content.replace(/src:\s*'\/turnkey-brochures\/images\/[^']+'/g, (match) => {
    const rep = `src: '${newImages[galCount % 6]}'`;
    galCount++;
    return rep;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated Machinery and Gallery images in ${file}`);
}
