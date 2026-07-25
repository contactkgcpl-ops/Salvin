const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const files = [
  'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx',
  'FullyAutomaticJellyManufacturingPlantDetailPage.jsx',
  'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx',
  'FullyAutomaticVegetableDryingPlantDetailPage.jsx',
  'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx',
  'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // I used .join('\\n') which literally outputs \n in the JSX
  // We need to replace `</React.Fragment>\n          \n          <React.Fragment`
  // Wait, I joined with '\\n' inside the literal string! So it is `</React.Fragment>\n<React.Fragment`
  content = content.replace(/<\/React\.Fragment>\\n<React\.Fragment/g, '</React.Fragment>\n<React.Fragment');
  fs.writeFileSync(filePath, content);
});

console.log("Removed literal \\n from all 6 files!");
