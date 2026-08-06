const fs = require('fs');
const path = require('path');

const plants = [
    { comp: 'FaceWashManufacturingPlantDetailPage', img: 'face_wash.jpg', title: 'Face Wash Manufacturing Plant' },
    { comp: 'ShampooManufacturingPlantDetailPage', img: 'shampoo.jpg', title: 'Shampoo Manufacturing Plant' },
    { comp: 'HairOilManufacturingPlantDetailPage', img: 'hair_oil.jpg', title: 'Hair Oil Manufacturing Plant' },
    { comp: 'BodyLotionManufacturingPlantDetailPage', img: 'body_lotion.jpg', title: 'Body Lotion Manufacturing Plant' },
    { comp: 'HandWashManufacturingPlantDetailPage', img: 'hand_wash.jpg', title: 'Hand Wash Manufacturing Plant' },
    { comp: 'LiquidSoapManufacturingPlantDetailPage', img: 'liquid_soap.jpg', title: 'Liquid Soap Manufacturing Plant' },
    { comp: 'HandSanitizerManufacturingPlantDetailPage', img: 'hand_sanitizer.jpg', title: 'Hand Sanitizer Manufacturing Plant' }
];

plants.forEach(plant => {
    const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components', plant.comp + '.jsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the hero section block to replace
        const heroStart = content.indexOf('{/* ═══ HERO BANNER ═══ */}');
        const heroEnd = content.indexOf('</section>', heroStart) + '</section>'.length;
        
        if (heroStart !== -1 && heroEnd !== -1) {
            const newHero = `{/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero" style={{ minHeight: 'auto', padding: '60px 0 0 0', backgroundColor: '#fff' }}>
        <img src="/turnkey-brochures/images/cosmetic/${plant.img}" alt="${plant.title}" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </section>`;
            
            content = content.substring(0, heroStart) + newHero + content.substring(heroEnd);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + plant.comp + '.jsx');
        } else {
            console.log('Hero section not found in ' + plant.comp + '.jsx');
        }
    } else {
        console.log('File not found: ' + plant.comp + '.jsx');
    }
});
