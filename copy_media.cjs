const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287\\';
const cosmeticDir = 'C:\\Users\\digesh prajapati\\Desktop\\salvinindia\\public\\turnkey-brochures\\images\\cosmetic\\';

const mediaFiles = [
  'media__1786102770185.jpg',
  'media__1786102784457.jpg',
  'media__1786102792936.jpg',
  'media__1786102802431.jpg',
  'media__1786102811456.jpg',
  'media__1786102853286.jpg',
  'media__1786102860711.jpg',
  'media__1786102868612.jpg'
];

// Let's also include some other recent ones if there are 9
const extraFiles = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && f.endsWith('.jpg') && !mediaFiles.includes(f)).sort((a,b) => fs.statSync(path.join(brainDir, b)).mtimeMs - fs.statSync(path.join(brainDir, a)).mtimeMs);

if (extraFiles.length > 0) {
    mediaFiles.push(extraFiles[0]);
}

const targetNames = [
  'face_cream_flowchart.jpg',
  'moisturizing_cream_flowchart.jpg',
  'sunscreen_lotion_flowchart.jpg',
  'hair_conditioner_flowchart.jpg',
  'hair_serum_flowchart.jpg',
  'baby_lotion_flowchart.jpg',
  'body_butter_flowchart.jpg',
  'facial_serum_flowchart.jpg',
  'baby_shampoo_flowchart.jpg'
];

mediaFiles.forEach((file, index) => {
  if (index >= targetNames.length) return;
  const src = path.join(brainDir, file);
  const dest = path.join(cosmeticDir, targetNames[index]);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to ${targetNames[index]}`);
  }
});
