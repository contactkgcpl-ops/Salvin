const fs = require('fs');
const path = require('path');

const plants = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': 'hero_aloe_vera.png',
  'BiscuitPlantDetailPage.jsx': 'hero_biscuit.png',
  'CookiePlantDetailPage.jsx': 'hero_cookie.png',
  'BreadPlantDetailPage.jsx': 'hero_bread.png',
  'CakePlantDetailPage.jsx': 'hero_cake.png',
  'WaferPlantDetailPage.jsx': 'hero_wafer.png',
  'ChocolateProcessingPlantDetailPage.jsx': 'hero_chocolate.png',
  'ToffeePlantDetailPage.jsx': 'hero_toffee.png'
};

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [filename, imgName] of Object.entries(plants)) {
  const filePath = path.join(componentsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // We want to replace ONLY the hero section background image.
  // The hero section background div looks like this:
  // <div className="rcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/...jpg')`, backgroundColor: '#333' }} />
  // We use a regex that matches `className="rcp-hero__bg"` and the subsequent `url(...)`
  
  content = content.replace(/(className="rcp-hero__bg"\s+style={{[^}]*backgroundImage:\s*`)url\([^)]+\)/, `$1url('/turnkey-brochures/images/${imgName}')`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated hero image in ${filename}`);
}
