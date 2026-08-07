const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', prefix: 'fcm', img: '2_vacuum_mixer.jpg' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', prefix: 'mcm', img: '2_vacuum_mixer.jpg' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', prefix: 'slm', img: '2_vacuum_mixer.jpg' },
  // HairConditioner is already done
  { file: 'HairSerumManufacturingDetailPage.jsx', prefix: 'hsm', img: '3_high_shear.jpg' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', prefix: 'blm', img: '2_vacuum_mixer.jpg' },
  { file: 'BodyButterManufacturingDetailPage.jsx', prefix: 'bbm', img: '2_vacuum_mixer.jpg' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', prefix: 'fsm', img: '3_high_shear.jpg' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', prefix: 'bspm', img: '4_storage_tank.jpg' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  let filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) {
    const filePathOld = path.join(dir, plant.file.replace('DetailPage', 'PlantDetailPage'));
    if (!fs.existsSync(filePathOld)) continue;
    filePath = filePathOld;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find <img src={'/turnkey-brochures/images/cosmetic/..._hero.png'}
  // and replace it with <img src={'/turnkey-brochures/images/hair-conditioner-gallery/${plant.img}'}
  
  const regex = /<img src=\{'\/turnkey-brochures\/images\/cosmetic\/[^']+'\}/g;
  const newStr = `<img src={'/turnkey-brochures/images/hair-conditioner-gallery/${plant.img}'}`;
  
  if (content.match(regex)) {
      content = content.replace(regex, newStr);
      fs.writeFileSync(filePath, content);
      console.log(`Updated Plant Overview image in ${plant.file}`);
  } else {
      console.log(`Could not find Plant Overview image in ${plant.file}`);
  }
}
