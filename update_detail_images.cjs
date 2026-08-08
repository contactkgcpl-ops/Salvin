const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', hero: 'face_cream_hero.png', flow: 'face_cream_flowchart.jpg' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', hero: 'moisturizing_cream_hero.png', flow: 'moisturizing_cream_flowchart.jpg' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', hero: 'sunscreen_lotion_hero.png', flow: 'sunscreen_lotion_flowchart.jpg' },
  { file: 'HairConditionerManufacturingDetailPage.jsx', hero: 'hair_conditioner_hero.png', flow: 'hair_conditioner_flowchart.jpg' },
  { file: 'HairSerumManufacturingDetailPage.jsx', hero: 'hair_serum_hero.png', flow: 'hair_serum_flowchart.jpg' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', hero: 'baby_lotion_hero.png', flow: 'baby_lotion_flowchart.jpg' },
  { file: 'BodyButterManufacturingDetailPage.jsx', hero: 'body_butter_hero.png', flow: 'body_butter_flowchart.jpg' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', hero: 'facial_serum_hero.png', flow: 'facial_serum_flowchart.jpg' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', hero: 'baby_shampoo_hero.png', flow: 'baby_shampoo_flowchart.jpg' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the .png references with the new .jpg references
  content = content.split(plant.hero).join(plant.flow);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${plant.file}`);
}
