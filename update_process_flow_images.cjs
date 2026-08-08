const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', img: 'face_cream_hero.png', prefix: 'fcm' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', img: 'moisturizing_cream_hero.png', prefix: 'mcm' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', img: 'sunscreen_lotion_hero.png', prefix: 'slm' },
  { file: 'HairConditionerManufacturingDetailPage.jsx', img: 'hair_conditioner_hero.png', prefix: 'hcm' },
  { file: 'HairSerumManufacturingDetailPage.jsx', img: 'hair_serum_hero.png', prefix: 'hsm' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', img: 'baby_lotion_hero.png', prefix: 'blm' },
  { file: 'BodyButterManufacturingDetailPage.jsx', img: 'body_butter_hero.png', prefix: 'bbm' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', img: 'facial_serum_hero.png', prefix: 'fsm' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', img: 'baby_shampoo_hero.png', prefix: 'bsm' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${plant.file} (not found)`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the entire fcm-process-flow-container and its contents
  const processFlowRegex = new RegExp(`<div className="${plant.prefix}-process-flow-container">[\\s\\S]*?</div>\\s*</div>\\s*</section>`, 'm');

  const replacement = `<div className="${plant.prefix}-process-flow-container" style={{ display: 'block' }}>
            <div className="${plant.prefix}-process-card" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '0', overflow: 'hidden' }}>
              <img src={'/turnkey-brochures/images/cosmetic/${plant.img}'} alt="Process Flow Infographic" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>`;

  if (content.match(processFlowRegex)) {
    content = content.replace(processFlowRegex, replacement);
    fs.writeFileSync(filePath, content);
    console.log(`Updated Process Flow in ${plant.file}`);
  } else {
    console.log(`Process Flow Regex did not match in ${plant.file}`);
  }
}
