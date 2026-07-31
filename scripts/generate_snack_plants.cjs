const fs = require('fs');
const path = require('path');

const plants = [
    { title: 'Fully Automated Namkeen Plant', short: 'Namkeen', comp: 'FullyAutomatedNamkeenPlantDetailPage', prefix: 'fanp' },
    { title: 'Fully Automatic Extruded Snacks Plant', short: 'Extruded Snacks', comp: 'FullyAutomaticExtrudedSnacksPlantDetailPage', prefix: 'faesp' },
    { title: 'Corn Puff Plant', short: 'Corn Puff', comp: 'CornPuffPlantDetailPage', prefix: 'cpp' },
    { title: 'Fully Automated Popcorn Processing Plant', short: 'Popcorn', comp: 'FullyAutomatedPopcornProcessingPlantDetailPage', prefix: 'fappp' },
    { title: 'Fully Automated Rice Processing Plant', short: 'Rice', comp: 'FullyAutomatedRiceProcessingPlantDetailPage', prefix: 'farpp' },
    { title: 'Fully Automated Atta Plant', short: 'Atta', comp: 'FullyAutomatedAttaPlantDetailPage', prefix: 'faap' },
    { title: 'Fully Automated Besan Processing Plant', short: 'Besan', comp: 'FullyAutomatedBesanProcessingPlantDetailPage', prefix: 'fabpp' },
    { title: 'Fully Automated Corn Flour Plant', short: 'Corn Flour', comp: 'FullyAutomatedCornFlourPlantDetailPage', prefix: 'facfp' },
    { title: 'Oat Processing Plant', short: 'Oat', comp: 'OatProcessingPlantDetailPage', prefix: 'opp' }
];

const basePath = path.join(__dirname, '../src/pages/TurnkeyProject/components');

let templateJsx = fs.readFileSync(path.join(basePath, 'RedChilliDetailPage.jsx'), 'utf8');
let templateCss = fs.readFileSync(path.join(basePath, 'RedChilliDetailPage.css'), 'utf8');

plants.forEach(plant => {
    let jsx = templateJsx;
    
    // Replace Component Name and CSS import FIRST so they don't get corrupted
    jsx = jsx.replace(/RedChilliDetailPage\.css/g, plant.comp + '.css');
    jsx = jsx.replace(/RedChilliDetailPage/g, plant.comp);
    
    // Replace prefix FIRST as well
    jsx = jsx.replace(/rcp-/g, plant.prefix + '-');
    
    // Replace Titles exactly
    jsx = jsx.replace(/Red Chilli Processing Plant/g, plant.title);
    jsx = jsx.replace(/RED CHILLI PROCESSING SOLUTION/g, plant.short.toUpperCase() + ' PROCESSING SOLUTION');
    
    // Replace Red Chilli variations
    jsx = jsx.replace(/Red Chilli/g, plant.short);
    jsx = jsx.replace(/red chilli/g, plant.short.toLowerCase());
    
    // Replace Chilli plural
    jsx = jsx.replace(/chillies/g, plant.short.toLowerCase());
    jsx = jsx.replace(/Chillies/g, plant.short);
    
    // Replace Chilli variations
    jsx = jsx.replace(/Chilli/g, plant.short);
    jsx = jsx.replace(/chilli/g, plant.short.toLowerCase());
    
    // Modify CSS
    let css = templateCss;
    css = css.replace(/\.rcp-/g, '.' + plant.prefix + '-');
    
    fs.writeFileSync(path.join(basePath, plant.comp + '.jsx'), jsx, 'utf8');
    fs.writeFileSync(path.join(basePath, plant.comp + '.css'), css, 'utf8');
    
    console.log('Fixed and regenerated ' + plant.comp + ' files.');
});
