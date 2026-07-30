const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'AloeVeraJuiceProcessingPlantDetailPage.jsx',
  'BiscuitPlantDetailPage.jsx',
  'CookiePlantDetailPage.jsx',
  'BreadPlantDetailPage.jsx',
  'CakePlantDetailPage.jsx',
  'WaferPlantDetailPage.jsx',
  'ChocolateProcessingPlantDetailPage.jsx',
  'ToffeePlantDetailPage.jsx'
];

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const file of filesToUpdate) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Remove the image wrapper from machinery mapping
    const regex = /<div className="rcp-machine-card__image-wrapper">[\s\S]*?<\/div>\s*<div className="rcp-machine-card__content">/g;
    
    const newContent = content.replace(regex, '<div className="rcp-machine-card__content">');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`Removed machinery images from ${file}`);
    } else {
      console.log(`No machinery image wrapper found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}
