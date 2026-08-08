const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        console.log(`Converting ${fullPath} to ${newPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);
            
          fs.unlinkSync(fullPath); // Delete old file
        } catch (error) {
          console.error(`Error converting ${fullPath}:`, error);
        }
      }
    }
  }
}

async function updateDataFiles() {
  const filesToUpdate = [
    path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js'),
    path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'brochureCatalog.js')
  ];
  
  for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Update image extensions in the code
      const updatedContent = content
        .replace(/\.png/gi, '.webp')
        .replace(/\.jpg/gi, '.webp')
        .replace(/\.jpeg/gi, '.webp');
        
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Updated references in ${file}`);
    }
  }
}

async function main() {
  console.log('Starting conversion...');
  await processDirectory(targetDir);
  console.log('Conversion complete. Updating references...');
  await updateDataFiles();
  console.log('All done!');
}

main().catch(console.error);
