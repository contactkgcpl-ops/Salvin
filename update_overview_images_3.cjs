const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'HairConditionerManufacturingDetailPage.jsx', img: 'hair_conditioner_hero.png', prefix: 'hcm' },
  { file: 'HairSerumManufacturingDetailPage.jsx', img: 'hair_serum_hero.png', prefix: 'hsm' },
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

  // Match the entire div block `<div className="prefix-overview__image prefix-overview__image--photo"> ... </div>`
  const targetRegex = new RegExp(`<div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo">[\\s\\S]*?</div>\\s*</div>`, 'm');

  const replacement = `<div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src={'/turnkey-brochures/images/cosmetic/${plant.img}'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>
          </div>`;

  if (content.match(targetRegex)) {
    content = content.replace(targetRegex, replacement);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${plant.file}`);
  } else {
    console.log(`Regex did not match in ${plant.file}`);
    // console.log(content.substring(content.indexOf('overview__image'), content.indexOf('overview__image') + 200));
  }
}
