const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const filesToUpdate = [
  "FlavoredMilkPlantDetailPage.jsx",
  "CreamProcessingPlantDetailPage.jsx",
  "CarbonatedSoftDrinkPlantDetailPage.jsx",
  "EnergyDrinkProcessingPlantDetailPage.jsx",
  "HealthDrinkPlantDetailPage.jsx",
  "SyrupManufacturingPlantDetailPage.jsx",
  "RTSBeveragePlantDetailPage.jsx",
  "MineralWaterPlantDetailPage.jsx",
  "PackagedDrinkingWaterPlantDetailPage.jsx",
  "CoconutWaterProcessingPlantDetailPage.jsx"
];

for (const filename of filesToUpdate) {
  const filePath = path.join(dir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /\{i\s*<\s*6\s*&&\s*\(\s*<div className="rcp-process-arrow">[\s\S]*?<\/div>\s*\)\}/g;
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated", filename);
  }
}
