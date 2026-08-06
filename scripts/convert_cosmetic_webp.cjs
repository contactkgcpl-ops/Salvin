const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '../public/turnkey-brochures/images/cosmetic');

async function processImages() {
  const files = fs.readdirSync(imgDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const inputPath = path.join(imgDir, file);
      const outputPath = path.join(imgDir, `${base}.webp`);
      
      console.log(`Converting ${file} to webp...`);
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      fs.unlinkSync(inputPath);
    }
  }

  // Update JSX files
  const componentsDir = path.join(__dirname, '../src/pages/TurnkeyProject/components');
  const dataDir = path.join(__dirname, '../src/pages/TurnkeyProject/data');
  
  const filesToUpdate = [
    path.join(componentsDir, 'FaceWashManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'ShampooManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'HairOilManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'BodyLotionManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'HandWashManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'LiquidSoapManufacturingPlantDetailPage.jsx'),
    path.join(componentsDir, 'HandSanitizerManufacturingPlantDetailPage.jsx'),
    path.join(dataDir, 'brochureCatalog.js'),
    path.join(dataDir, 'turnkeyProjectsData.js')
  ];

  for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // We know these images are all in /turnkey-brochures/images/cosmetic/
      // So we can globally replace `.jpg` and `.png` in lines that contain cosmetic
      content = content.replace(/(\/turnkey-brochures\/images\/cosmetic\/.*?)\.(jpg|png)/g, '$1.webp');
      // Also for brochureCatalog which has 'cosmetic/...'
      content = content.replace(/('cosmetic\/.*?)\.(jpg|png)'/g, '$1.webp\'');
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in ${path.basename(file)}`);
    }
  }
}

processImages().then(() => console.log('Done')).catch(console.error);
