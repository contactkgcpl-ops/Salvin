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

    // Extract the GALLERY_IMAGES block
    const galleryMatch = content.match(/const GALLERY_IMAGES = \[([\s\S]*?)\]/);
    if (galleryMatch) {
      // Find all src: '...' inside the gallery block
      const srcMatches = [...galleryMatch[1].matchAll(/src:\s*['"`](.*?)['"`]/g)];
      const imagePaths = srcMatches.map(m => m[1]);

      if (imagePaths.length >= 6) {
        // Extract the MACHINERY_LIST block
        const machineryMatch = content.match(/const MACHINERY_LIST = \[([\s\S]*?)\];/);
        if (machineryMatch) {
          let newMachineryBlock = machineryMatch[1];
          // Replace each image: "..." with the correct one
          // We will find all image: "..." and replace them one by one
          let index = 0;
          newMachineryBlock = newMachineryBlock.replace(/image:\s*['"`].*?['"`]/g, (match) => {
            const replacement = `image: "${imagePaths[index]}"`;
            index++;
            return replacement;
          });

          content = content.replace(/const MACHINERY_LIST = \[([\s\S]*?)\];/, `const MACHINERY_LIST = [${newMachineryBlock}];`);
          fs.writeFileSync(filePath, content, 'utf-8');
          console.log(`Fixed images in ${file}`);
        } else {
           console.log(`MACHINERY_LIST not found in ${file}`);
        }
      } else {
        console.log(`Not enough images in GALLERY_IMAGES for ${file}`);
      }
    } else {
      console.log(`GALLERY_IMAGES not found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}
