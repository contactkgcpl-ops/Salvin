const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

const plants = [
  "Face Cream",
  "Moisturizing Cream",
  "Sunscreen Lotion",
  "Hair Conditioner",
  "Hair Serum",
  "Beard Oil",
  "Shaving Cream",
  "Talcum Powder",
  "Petroleum Jelly",
  "Baby Lotion",
  "Baby Shampoo",
  "Body Butter",
  "Facial Serum"
];

plants.forEach(plant => {
  const componentPrefix = plant.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const componentName = `${componentPrefix}ManufacturingDetailPage`;
  const urlPlantName = encodeURIComponent(plant);
  
  const jsxOutputPath = path.join(outputDir, `${componentName}.jsx`);
  if (fs.existsSync(jsxOutputPath)) {
    let newJsx = fs.readFileSync(jsxOutputPath, 'utf8');
    
    // Fix uppercase
    newJsx = newJsx.replace(/PROTEIN BAR/g, plant.toUpperCase());
    
    // Fix whatsapp url
    newJsx = newJsx.replace(/Protein%20Bar/g, urlPlantName);
    
    // Fix meta description
    newJsx = newJsx.replace(/protein bars, energy bars, and nutrition bars/g, `${plant.toLowerCase()} products`);
    
    fs.writeFileSync(jsxOutputPath, newJsx);
  }
});
console.log("Fixes applied!");