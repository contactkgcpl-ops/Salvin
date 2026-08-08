const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287\\';
const galleryDir = 'C:\\Users\\digesh prajapati\\Desktop\\salvinindia\\public\\turnkey-brochures\\images\\hair-conditioner-gallery\\';

if (!fs.existsSync(galleryDir)){
    fs.mkdirSync(galleryDir, { recursive: true });
}

const mediaFiles = [
  'media__1786105648356.jpg',
  'media__1786105659607.jpg',
  'media__1786105675469.jpg',
  'media__1786105687536.jpg',
  'media__1786105701315.jpg',
  'media__1786105715470.jpg'
];

const targetNames = [
  '1_weighing_dosing.jpg',
  '2_vacuum_mixer.jpg',
  '3_high_shear.jpg',
  '4_storage_tank.jpg',
  '5_filling_capping.jpg',
  '6_labeling_packing.jpg'
];

mediaFiles.forEach((file, index) => {
  const src = path.join(brainDir, file);
  const dest = path.join(galleryDir, targetNames[index]);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to ${targetNames[index]}`);
  }
});
