const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', prefix: 'fcm', hero: 'face_cream_hero.png', flow: 'face_cream_flowchart.jpg' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', prefix: 'mcm', hero: 'moisturizing_cream_hero.png', flow: 'moisturizing_cream_flowchart.jpg' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', prefix: 'slm', hero: 'sunscreen_lotion_hero.png', flow: 'sunscreen_lotion_flowchart.jpg' },
  { file: 'HairConditionerManufacturingDetailPage.jsx', prefix: 'hcm', hero: 'hair_conditioner_hero.png', flow: 'hair_conditioner_flowchart.jpg', overviewImg: '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg' },
  { file: 'HairSerumManufacturingDetailPage.jsx', prefix: 'hsm', hero: 'hair_serum_hero.png', flow: 'hair_serum_flowchart.jpg' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', prefix: 'blm', hero: 'baby_lotion_hero.png', flow: 'baby_lotion_flowchart.jpg' },
  { file: 'BodyButterManufacturingDetailPage.jsx', prefix: 'bbm', hero: 'body_butter_hero.png', flow: 'body_butter_flowchart.jpg' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', prefix: 'fsm', hero: 'facial_serum_hero.png', flow: 'facial_serum_flowchart.jpg' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', prefix: 'bspm', hero: 'baby_shampoo_hero.png', flow: 'baby_shampoo_flowchart.jpg' } // wait, baby shampoo uses 'bspm' maybe?
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Fix the Hero background image
  // Find <div className="prefix-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/cosmetic/plant.flow')` }} />
  // and replace plant.flow with plant.hero
  const heroRegex = new RegExp(`className="${plant.prefix}-hero__bg" style=\\{\\{ backgroundImage: \\\`url\\('/turnkey-brochures/images/cosmetic/${plant.flow}'\\)\\\` \\}\\}`);
  const newHeroStr = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.hero}')\` }}`;
  
  if (content.match(heroRegex)) {
      content = content.replace(heroRegex, newHeroStr);
  } else {
      // If the backticks are missing or it's standard quotes
      const heroRegex2 = new RegExp(`className="${plant.prefix}-hero__bg".*?${plant.flow}.*?/>`);
      const newHeroStr2 = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.hero}')\` }} />`;
      content = content.replace(heroRegex2, newHeroStr2);
  }

  // 2. Fix the Plant Overview image
  // Find <div className="prefix-overview__image prefix-overview__image--photo" ...> <img src={'/turnkey-brochures/images/cosmetic/plant.flow'} ... /> </div>
  const overviewImgPath = plant.overviewImg ? plant.overviewImg : `/turnkey-brochures/images/cosmetic/${plant.hero}`;
  const overviewRegex = new RegExp(`className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo"[\\s\\S]*?<img src=\\{'/turnkey-brochures/images/cosmetic/${plant.flow}'\\}`);
  const newOverviewStr = `className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>\n              <img src={'${overviewImgPath}'}`;
  
  if (content.match(overviewRegex)) {
      content = content.replace(overviewRegex, newOverviewStr);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${plant.file}`);
}
