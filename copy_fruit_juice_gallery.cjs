const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5';
const destDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'fruit-juice-gallery');

const images = [
  { src: 'media__1784887183549.jpg', dest: 'washing_sorting.jpg' },
  { src: 'media__1784887195113.jpg', dest: 'pulping_extraction.jpg' },
  { src: 'media__1784887205950.jpg', dest: 'filtration_clarification.jpg' },
  { src: 'media__1784887217289.jpg', dest: 'pasteurization_mixing.jpg' },
  { src: 'media__1784887230843.jpg', dest: 'automatic_filling.jpg' },
  { src: 'media__1784887283190.jpg', dest: 'labeling_packaging.jpg' }
];

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

images.forEach(img => {
  const srcPath = path.join(srcDir, img.src);
  const destPath = path.join(destDir, img.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${img.src} to ${img.dest}`);
  } else {
    console.log(`Error: Source file not found ${srcPath}`);
  }
});
