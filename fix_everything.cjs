const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'FaceCreamManufacturingDetailPage.jsx', prefix: 'fcm', hero: 'face_cream_hero.png', flow: 'face_cream_flowchart.jpg' },
  { file: 'MoisturizingCreamManufacturingDetailPage.jsx', prefix: 'mcm', hero: 'moisturizing_cream_hero.png', flow: 'moisturizing_cream_flowchart.jpg' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', prefix: 'slm', hero: 'sunscreen_lotion_hero.png', flow: 'sunscreen_lotion_flowchart.jpg' },
  { file: 'HairConditionerManufacturingDetailPage.jsx', prefix: 'hcm', hero: 'hair_conditioner_hero.png', flow: 'hair_conditioner_flowchart.jpg' },
  { file: 'HairSerumManufacturingDetailPage.jsx', prefix: 'hsm', hero: 'hair_serum_hero.png', flow: 'hair_serum_flowchart.jpg' },
  { file: 'BabyLotionManufacturingDetailPage.jsx', prefix: 'blm', hero: 'baby_lotion_hero.png', flow: 'baby_lotion_flowchart.jpg' },
  { file: 'BodyButterManufacturingDetailPage.jsx', prefix: 'bbm', hero: 'body_butter_hero.png', flow: 'body_butter_flowchart.jpg' },
  { file: 'FacialSerumManufacturingDetailPage.jsx', prefix: 'fsm', hero: 'facial_serum_hero.png', flow: 'facial_serum_flowchart.jpg' },
  { file: 'BabyShampooManufacturingDetailPage.jsx', prefix: 'bspm', hero: 'baby_shampoo_hero.png', flow: 'baby_shampoo_flowchart.jpg' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) {
    // maybe old suffix
    const filePathOld = path.join(dir, plant.file.replace('DetailPage', 'PlantDetailPage'));
    if (!fs.existsSync(filePathOld)) continue;
    plant.file = plant.file.replace('DetailPage', 'PlantDetailPage');
  }
  
  let content = fs.readFileSync(path.join(dir, plant.file), 'utf8');
  
  // Revert Hero background to flowchart
  const heroRegex = new RegExp(`className="${plant.prefix}-hero__bg" style=\\{\\{ backgroundImage: \\\`url\\('/turnkey-brochures/images/cosmetic/${plant.hero}'\\)\\\` \\}\\}`);
  const newHeroStr = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.flow}')\` }}`;
  
  if (content.match(heroRegex)) {
      content = content.replace(heroRegex, newHeroStr);
  } else {
      const heroRegex2 = new RegExp(`className="${plant.prefix}-hero__bg".*?${plant.hero}.*?/>`);
      const newHeroStr2 = `className="${plant.prefix}-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/${plant.flow}')\` }} />`;
      content = content.replace(heroRegex2, newHeroStr2);
  }
  
  fs.writeFileSync(path.join(dir, plant.file), content);
  console.log(`Reverted Hero in ${plant.file}`);
}

// Now Fix HairConditioner completely
const hcPath = path.join(dir, 'HairConditionerManufacturingDetailPage.jsx');
let hcCode = fs.readFileSync(hcPath, 'utf8');

// Fix broken Gallery section by finding export default and injecting before it if it's broken
if (!hcCode.includes('const GALLERY_IMAGES = [')) {
    const mainCompIdx = hcCode.indexOf('export default function HairConditionerManufacturingDetailPage');
    const galleryInject = `
/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg', caption: 'Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg', caption: 'Storage Holding Tank' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg', caption: 'Automatic Bottle Filling & Capping Machine' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg', caption: 'Automatic Labeling & Carton Packing Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
`;
    hcCode = hcCode.substring(0, mainCompIdx) + galleryInject + hcCode.substring(mainCompIdx);
} else {
    // If it exists but is webp, replace it
    hcCode = hcCode.replace(/1_ingredient_dosing\.webp/g, '1_weighing_dosing.jpg');
    hcCode = hcCode.replace(/2_syrup_preparation\.webp/g, '2_vacuum_mixer.jpg');
    hcCode = hcCode.replace(/3_mass_mixer\.webp/g, '3_high_shear.jpg');
    hcCode = hcCode.replace(/4_forming_machine\.webp/g, '4_storage_tank.jpg');
    hcCode = hcCode.replace(/5_cutting_machine\.webp/g, '5_filling_capping.jpg');
    hcCode = hcCode.replace(/6_flow_wrapping\.webp/g, '6_labeling_packing.jpg');
    
    // update captions
    hcCode = hcCode.replace(/Ingredient Dosing & Mixing System/g, 'Weighing & Dosing System');
    hcCode = hcCode.replace(/Syrup Preparation System/g, 'Vacuum Emulsifying Mixer');
    hcCode = hcCode.replace(/Hair Conditioner Mass Mixer/g, 'High Shear Homogenizer');
    hcCode = hcCode.replace(/Hair Conditioner Forming Machine/g, 'Storage Holding Tank');
    hcCode = hcCode.replace(/Hair Conditioner Cutting Machine/g, 'Automatic Bottle Filling & Capping Machine');
    hcCode = hcCode.replace(/Flow Wrapping Machine/g, 'Automatic Labeling & Carton Packing Machine');
    hcCode = hcCode.replace(/Flow Wrapping & Packaging Machine/g, 'Automatic Labeling & Carton Packing Machine');
}

fs.writeFileSync(hcPath, hcCode);
console.log('Fixed HairConditioner!');
