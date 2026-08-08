const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'HairConditionerManufacturingDetailPage.jsx', img: 'hair_conditioner_hero.png', prefix: 'hcp' },
  { file: 'HairSerumManufacturingDetailPage.jsx', img: 'hair_serum_hero.png', prefix: 'hsp' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', img: 'baby_lotion_hero.png', prefix: 'blm' },
  { file: 'BodyButterManufacturingDetailPage.jsx', img: 'body_butter_hero.png', prefix: 'bbm' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', img: 'facial_serum_hero.png', prefix: 'fsp' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', img: 'baby_shampoo_hero.png', prefix: 'bsp' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${plant.file} (not found)`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the overview image div
  const targetRegex = new RegExp(`<div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo">[\\s\\S]*?<img src={GALLERY_IMAGES\\[0\\]\\.src}[\\s\\S]*?</div>\\s*\\)}[\\s\\S]*?</div>`, 'g');
  
  // Alternative regex if the first fails
  const targetRegex2 = new RegExp(`<div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo">[\\s\\S]*?</div>\\s*</div>`, 'm');

  const replacement = `<div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src={'/turnkey-brochures/images/cosmetic/${plant.img}'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>`;

  if (content.match(targetRegex)) {
    content = content.replace(targetRegex, replacement);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${plant.file}`);
  } else if (content.match(targetRegex2)) {
    content = content.replace(targetRegex2, replacement);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${plant.file} (fallback regex)`);
  } else {
    // Try to just replace the img tag directly if the container matches but content slightly differs
    const imgRegex = /<img src=\{GALLERY_IMAGES\[0\]\.src\} alt="Plant Overview" loading="lazy" \/>/g;
    if (content.match(imgRegex)) {
        content = content.replace(imgRegex, `<img src={'/turnkey-brochures/images/cosmetic/${plant.img}'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }} />`);
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${plant.file} (img regex)`);
    } else {
        console.log(`Regex did not match in ${plant.file}`);
    }
  }
}
