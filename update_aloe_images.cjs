const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'AloeVeraJuiceProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newGallery = `const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/aloe-vera-gallery/1_leaf_washing.jpg', caption: 'Aloe Vera Leaf Washing Machine' },
  { src: '/turnkey-brochures/images/aloe-vera-gallery/2_manual_sorting.jpg', caption: 'Manual Sorting and Inspection Conveyor' },
  { src: '/turnkey-brochures/images/aloe-vera-gallery/3_automatic_slicing.jpg', caption: 'Automatic Slicing / Trimming Machine' },
  { src: '/turnkey-brochures/images/aloe-vera-gallery/4_gel_filleting.jpg', caption: 'Gel Filleting / Processing Machine' },
  { src: '/turnkey-brochures/images/aloe-vera-gallery/5_juice_extraction.jpg', caption: 'Juice Extraction and Filtration' },
  { src: '/turnkey-brochures/images/aloe-vera-gallery/6_incline_conveyor.jpg', caption: 'Incline Conveyor and Processing Line' }
]`;

content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, newGallery);

// Now replace MACHINERY_LIST images
const imagePaths = [
  '/turnkey-brochures/images/aloe-vera-gallery/1_leaf_washing.jpg',
  '/turnkey-brochures/images/aloe-vera-gallery/2_manual_sorting.jpg',
  '/turnkey-brochures/images/aloe-vera-gallery/3_automatic_slicing.jpg',
  '/turnkey-brochures/images/aloe-vera-gallery/4_gel_filleting.jpg',
  '/turnkey-brochures/images/aloe-vera-gallery/5_juice_extraction.jpg',
  '/turnkey-brochures/images/aloe-vera-gallery/6_incline_conveyor.jpg'
];

let matchCount = 0;
content = content.replace(/image:\s*['"][^'"]*['"]/g, (match) => {
  if (matchCount < 6) {
    const replacement = `image: "${imagePaths[matchCount]}"`;
    matchCount++;
    return replacement;
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated AloeVeraJuiceProcessingPlantDetailPage.jsx');
