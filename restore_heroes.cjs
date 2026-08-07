const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', prefix: 'fcm', hero: 'face_cream_hero.png', flow: 'face_cream_flowchart.jpg' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', prefix: 'mcm', hero: 'moisturizing_cream_hero.png', flow: 'moisturizing_cream_flowchart.jpg' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', prefix: 'slm', hero: 'sunscreen_lotion_hero.png', flow: 'sunscreen_lotion_flowchart.jpg' },
  { file: 'HairConditionerManufacturingDetailPage.jsx', prefix: 'hcm', hero: 'hair_conditioner_hero.png', flow: 'hair_conditioner_flowchart.jpg' },
  { file: 'HairSerumManufacturingDetailPage.jsx', prefix: 'hsm', hero: 'hair_serum_hero.png', flow: 'hair_serum_flowchart.jpg' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', prefix: 'blm', hero: 'baby_lotion_hero.png', flow: 'baby_lotion_flowchart.jpg' },
  { file: 'BodyButterManufacturingDetailPage.jsx', prefix: 'bbm', hero: 'body_butter_hero.png', flow: 'body_butter_flowchart.jpg' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', prefix: 'fsm', hero: 'facial_serum_hero.png', flow: 'facial_serum_flowchart.jpg' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', prefix: 'bspm', hero: 'baby_shampoo_hero.png', flow: 'baby_shampoo_flowchart.jpg' }
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
  
  // Revert Hero background FROM flowchart TO hero image
  const heroRegex = new RegExp(`className="${plant.prefix}-hero__bg" style=\\{\\{ backgroundImage: \\\`url\\('/turnkey-brochures/images/cosmetic/${plant.flow}'\\)\\\` \\}\\}`);
  const newHeroStr = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.hero}')\` }}`;
  
  if (content.match(heroRegex)) {
      content = content.replace(heroRegex, newHeroStr);
  } else {
      const heroRegex2 = new RegExp(`className="${plant.prefix}-hero__bg".*?${plant.flow}.*?/>`);
      const newHeroStr2 = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.hero}')\` }} />`;
      content = content.replace(heroRegex2, newHeroStr2);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Restored Hero to ${plant.hero} in ${plant.file}`);
}
