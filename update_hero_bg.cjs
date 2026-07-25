const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const plants = [
  { file: 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx', oldImg: 'fruit-juice.jpeg', newImg: 'hero_fruit_juice.png' },
  { file: 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx', oldImg: 'jelly.jpeg', newImg: 'hero_jelly.png' },
  { file: 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx', oldImg: 'garlic.jpeg', newImg: 'hero_garlic.png' },
  { file: 'FullyAutomaticVegetableDryingPlantDetailPage.jsx', oldImg: 'vegetable-drying.jpeg', newImg: 'hero_veg_drying.png' },
  { file: 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx', oldImg: 'garam-masala.jpeg', newImg: 'hero_garam_masala.png' },
  { file: 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx', oldImg: 'frozen-vegetable.jpeg', newImg: 'hero_frozen_veg.png' }
];

plants.forEach(p => {
  const filePath = path.join(dir, p.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace ONLY the hero background image, leaving the gallery images untouched
  // The hero background looks like: style={{ backgroundImage: "url('/turnkey-brochures/images/fruit-juice.jpeg')" }}
  const oldBgStr = `style={{ backgroundImage: "url('/turnkey-brochures/images/${p.oldImg}')" }}`;
  const newBgStr = `style={{ backgroundImage: "url('/turnkey-brochures/images/${p.newImg}')" }}`;

  if (content.includes(oldBgStr)) {
    content = content.replace(oldBgStr, newBgStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated hero background image for ${p.file}`);
  } else {
    console.log(`Could not find target background image string in ${p.file}`);
  }
});
