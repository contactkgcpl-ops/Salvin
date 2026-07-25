const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images');

const filesToCopy = [
  { src: 'hero_fruit_juice_1784886496561.png', dest: 'hero_fruit_juice.png' },
  { src: 'hero_jelly_1784886508758.png', dest: 'hero_jelly.png' },
  { src: 'hero_garlic_1784886519443.png', dest: 'hero_garlic.png' },
  { src: 'hero_veg_drying_1784886530688.png', dest: 'hero_veg_drying.png' },
  { src: 'hero_garam_masala_1784886542002.png', dest: 'hero_garam_masala.png' },
  { src: 'hero_frozen_veg_1784886563655.png', dest: 'hero_frozen_veg.png' }
];

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

filesToCopy.forEach(f => {
  const srcPath = path.join(srcDir, f.src);
  const destPath = path.join(destDir, f.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.src} to ${f.dest}`);
  } else {
    console.log(`Source file not found: ${srcPath}`);
  }
});
