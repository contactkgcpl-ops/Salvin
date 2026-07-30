const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'AloeVeraJuiceProcessingPlantDetailPage.jsx', folder: 'aloe-vera-gallery' },
  { file: 'BiscuitPlantDetailPage.jsx', folder: 'biscuit-gallery' },
  { file: 'CookiePlantDetailPage.jsx', folder: 'cookie-gallery' },
  { file: 'BreadPlantDetailPage.jsx', folder: 'bread-gallery' },
  { file: 'CakePlantDetailPage.jsx', folder: 'cake-gallery' },
  { file: 'WaferPlantDetailPage.jsx', folder: 'wafer-gallery' },
  { file: 'ChocolateProcessingPlantDetailPage.jsx', folder: 'chocolate-gallery' },
  { file: 'ToffeePlantDetailPage.jsx', folder: 'toffee-gallery' }
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const publicDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images');

for (const plant of plants) {
  const filePath = path.join(componentsDir, plant.file);
  const galleryPath = path.join(publicDir, plant.folder);
  
  if (fs.existsSync(filePath) && fs.existsSync(galleryPath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Read images from the public folder
    const images = fs.readdirSync(galleryPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    
    // Sort images by number if they start with numbers
    images.sort((a, b) => parseInt(a) - parseInt(b));
    
    const srcPaths = images.map(img => `/turnkey-brochures/images/${plant.folder}/${img}`);

    // Update MACHINERY_LIST images
    const machineryRegex = /const MACHINERY_LIST = \[([\s\S]*?)\];/;
    const match = content.match(machineryRegex);
    if (match) {
        let newBlock = match[1];
        let index = 0;
        
        // Replace each 'image: "..."' with the correct sequential image from the filesystem
        newBlock = newBlock.replace(/image:\s*['"`].*?['"`]/g, () => {
            if (index < srcPaths.length) {
                const replacement = `image: "${srcPaths[index]}"`;
                index++;
                return replacement;
            }
            return `image: ""`; // fallback
        });
        
        content = content.replace(machineryRegex, `const MACHINERY_LIST = [${newBlock}];`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Successfully fixed broken image links in ${plant.file}`);
    }
  } else {
    console.log(`Files or folder missing for ${plant.file}`);
  }
}
