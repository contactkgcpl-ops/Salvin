const fs = require('fs');
const path = require('path');

const plants = [
  'BabyLotionManufacturingDetailPage.jsx',
  'BodyButterManufacturingDetailPage.jsx',
  'SunscreenLotionManufacturingDetailPage.jsx'
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const file of plants) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the missing div
  content = content.replace(/<\/div>\n      <\/section>/g, '</div>\n        </div>\n      </section>');
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
