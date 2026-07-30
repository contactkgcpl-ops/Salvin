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
    
    // Generate Items
    const items = images.map(img => {
      let caption = img.replace(/^\d+_/, '').replace(/\.jpg$/, '').replace(/\.png$/, '').replace(/_/g, ' ');
      caption = caption.replace(/\b\w/g, c => c.toUpperCase()); // Capitalize
      const src = `/turnkey-brochures/images/${plant.folder}/${img}`;
      return { src, caption };
    });

    if (items.length > 0) {
      // 1. REBUILD ONLY GALLERY_IMAGES
      const galleryString = `const GALLERY_IMAGES = [\n` +
        items.map(i => `  { src: '${i.src}', caption: '${i.caption}' }`).join(',\n') +
        `\n]`;
      content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\];?/, galleryString + ';');

      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fully restored ${items.length} GALLERY_IMAGES for ${plant.file}`);
    }
  } else {
    console.log(`Files or folder missing for ${plant.file}`);
  }
}
