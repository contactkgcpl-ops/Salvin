const fs = require('fs');
const path = require('path');

const plants = [
  {
    name: 'Fully Automatic Mixed Spice Plant',
    component: 'FullyAutomaticMixedSpicePlantDetailPage',
    imageFile: 'mixed_spice_plant.jpg',
    sourceMedia: 'media__1784968843960.jpg',
    slug: '/turnkey-project/fully-automatic-mixed-spice-plant'
  },
  {
    name: 'Fully Automatic Pasteurized Milk Plant',
    component: 'FullyAutomaticPasteurizedMilkPlantDetailPage',
    imageFile: 'pasteurized_milk_plant.jpg',
    sourceMedia: 'media__1784968853406.jpg',
    slug: '/turnkey-project/fully-automatic-pasteurized-milk-plant'
  },
  {
    name: 'Fully Automatic Spice Packaging Line',
    component: 'FullyAutomaticSpicePackagingLineDetailPage',
    imageFile: 'spice_packaging_line.jpg',
    sourceMedia: 'media__1784968863077.jpg',
    slug: '/turnkey-project/fully-automatic-spice-packaging-line'
  },
  {
    name: 'Spice Blending Plant',
    component: 'SpiceBlendingPlantDetailPage',
    imageFile: 'spice_blending_plant.jpg',
    sourceMedia: 'media__1784968875323.jpg',
    slug: '/turnkey-project/spice-blending-plant'
  },
  {
    name: 'Fully Automated Curry Powder Processing Plant',
    component: 'FullyAutomatedCurryPowderProcessingPlantDetailPage',
    imageFile: 'curry_powder_plant.jpg',
    sourceMedia: 'media__1784968884639.jpg',
    slug: '/turnkey-project/fully-automated-curry-powder-processing-plant'
  }
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const publicImagesDir = path.join(__dirname, 'public', 'turnkey-brochures', 'images');
const sourceMediaDir = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\1e8907dc-ea2e-415c-b4f9-1b6eaac125f4';
const dataDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data');

// 1. Copy images
// plants.forEach(p => {
//   const src = path.join(sourceMediaDir, p.sourceMedia);
//   const dest = path.join(publicImagesDir, p.imageFile);
//   if (fs.existsSync(src)) {
//     fs.copyFileSync(src, dest);
//     console.log('Copied ' + p.sourceMedia + ' to ' + p.imageFile);
//   } else {
//     console.log('Error: Source not found for ' + p.sourceMedia);
//   }
// });

// 2. Generate Components and CSS
const refJsxPath = path.join(componentsDir, 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx');
const refCssPath = path.join(componentsDir, 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.css');

let refJsxContent = fs.readFileSync(refJsxPath, 'utf8');
let refCssContent = fs.readFileSync(refCssPath, 'utf8');

plants.forEach(p => {
  let newJsx = refJsxContent.replace(/Fully Automated Garam Masala Processing Plant/g, p.name);
  newJsx = newJsx.replace(/FullyAutomatedGaramMasalaProcessingPlantDetailPage/g, p.component);
  
  // Replace references to garam masala images with the new plant's infographic image
  newJsx = newJsx.replace(/src="\/turnkey-brochures\/images\/hero_garam_masala\.png"/g, 'src="/turnkey-brochures/images/' + p.imageFile + '"');
  newJsx = newJsx.replace(/src="\/turnkey-brochures\/images\/garam-masala-gallery\/spice_roaster\.jpg"/g, 'src="/turnkey-brochures/images/' + p.imageFile + '"');
  newJsx = newJsx.replace(/\/turnkey-brochures\/images\/garam-masala-gallery\/[a-zA-Z0-9_]+\.jpg/g, '/turnkey-brochures/images/' + p.imageFile);
  
  // Update PDF links (if they have one, just leave or remove. The original points to AMC-30_plant.pdf, let's remove the download button if possible, or just leave it for now since they said "same to same")

  const destJsx = path.join(componentsDir, p.component + '.jsx');
  fs.writeFileSync(destJsx, newJsx);

  let newCss = refCssContent.replace(/FullyAutomatedGaramMasalaProcessingPlantDetailPage/g, p.component);
  const destCss = path.join(componentsDir, p.component + '.css');
  fs.writeFileSync(destCss, newCss);

  console.log('Generated ' + p.component);
});

// 3. Update App.jsx
const appPath = path.join(__dirname, 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const imports = plants.map(p => `import ${p.component} from './pages/TurnkeyProject/components/${p.component}';`).join('\n');
const routes = plants.map(p => `        <Route path="${p.slug}" element={<${p.component} />} />`).join('\n');

appContent = appContent.replace(/(import FullyAutomatedGaramMasalaProcessingPlantDetailPage .*?;)/, '$1\n' + imports);
appContent = appContent.replace(/(<Route path="\/turnkey-project\/fully-automated-garam-masala-processing-plant" element={<FullyAutomatedGaramMasalaProcessingPlantDetailPage \/>} \/>)/, '$1\n' + routes);

fs.writeFileSync(appPath, appContent);
console.log('Updated App.jsx');

// 4. Update brochureCatalog.js
const catalogPath = path.join(dataDir, 'brochureCatalog.js');
let catalogContent = fs.readFileSync(catalogPath, 'utf8');

const catalogEntries = plants.map(p => `  ['${p.imageFile}', null, '${p.name}', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '${p.slug}']`).join(',\n');

catalogContent = catalogContent.replace(/(  \['fruit-juice.jpeg',.*?\]\n)\]/, '$1,\n' + catalogEntries + '\n]');
fs.writeFileSync(catalogPath, catalogContent);
console.log('Updated brochureCatalog.js');
