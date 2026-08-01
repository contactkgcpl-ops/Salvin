const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIRS_TO_SCAN = ['public', 'src'];
const EXTENSIONS_TO_CONVERT = ['.png', '.jpg', '.jpeg'];
const FILE_EXTS_TO_UPDATE = ['.js', '.jsx', '.css', '.json'];

// Helper to recursively get all files
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function run() {
  console.log('Starting image conversion to WebP...');
  
  let allFiles = [];
  DIRS_TO_SCAN.forEach(dir => {
    allFiles = allFiles.concat(getFiles(path.join(__dirname, dir)));
  });

  const imagesToConvert = allFiles.filter(f => 
    EXTENSIONS_TO_CONVERT.includes(path.extname(f).toLowerCase())
  );

  console.log(`Found ${imagesToConvert.length} images to convert.`);

  // Mapping from old filename to new filename (relative to their own paths in code)
  const replacements = [];

  for (const imgPath of imagesToConvert) {
    const ext = path.extname(imgPath);
    const basename = path.basename(imgPath, ext);
    const dir = path.dirname(imgPath);
    const newPath = path.join(dir, `${basename}.webp`);
    
    try {
      // Resize to a reasonable max width if it's too large to reduce size further, and convert to webp
      await sharp(imgPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(newPath);
        
      // Delete old file
      fs.unlinkSync(imgPath);
      
      const oldName = path.basename(imgPath);
      const newName = `${basename}.webp`;
      replacements.push({ old: oldName, new: newName, oldExt: ext.toLowerCase() });
      console.log(`Converted: ${oldName} -> ${newName}`);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err.message);
    }
  }

  console.log('Images converted. Now updating source code references...');

  const codeFiles = allFiles.filter(f => 
    FILE_EXTS_TO_UPDATE.includes(path.extname(f).toLowerCase())
  );

  for (const codeFile of codeFiles) {
    let content = fs.readFileSync(codeFile, 'utf8');
    let originalContent = content;
    
    for (const { old, new: newName, oldExt } of replacements) {
      // Escape for regex
      const escapedOld = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedOld, 'g');
      content = content.replace(regex, newName);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(codeFile, content, 'utf8');
      console.log(`Updated references in: ${path.relative(__dirname, codeFile)}`);
    }
  }

  console.log('Conversion and updates completed successfully!');
}

run();
