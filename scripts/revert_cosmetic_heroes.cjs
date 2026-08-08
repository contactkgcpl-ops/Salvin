const fs = require('fs');
const path = require('path');

const plants = [
    { comp: 'FaceWashManufacturingPlantDetailPage', img: 'face_wash_hero.png', title: 'Face Wash Manufacturing Plant' },
    { comp: 'ShampooManufacturingPlantDetailPage', img: 'shampoo_hero.png', title: 'Shampoo Manufacturing Plant' },
    { comp: 'HairOilManufacturingPlantDetailPage', img: 'hair_oil_hero.png', title: 'Hair Oil Manufacturing Plant' },
    { comp: 'BodyLotionManufacturingPlantDetailPage', img: 'body_lotion_hero.png', title: 'Body Lotion Manufacturing Plant' },
    { comp: 'HandWashManufacturingPlantDetailPage', img: 'hand_wash_hero.png', title: 'Hand Wash Manufacturing Plant' },
    { comp: 'LiquidSoapManufacturingPlantDetailPage', img: 'liquid_soap_hero.png', title: 'Liquid Soap Manufacturing Plant' },
    { comp: 'HandSanitizerManufacturingPlantDetailPage', img: 'hand_sanitizer_hero.png', title: 'Hand Sanitizer Manufacturing Plant' }
];

plants.forEach(plant => {
    const filePath = path.join(__dirname, '../src/pages/TurnkeyProject/components', plant.comp + '.jsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const heroStart = content.indexOf('{/* ═══ HERO BANNER ═══ */}');
        const heroEnd = content.indexOf('</section>', heroStart) + '</section>'.length;
        
        if (heroStart !== -1 && heroEnd !== -1) {
            const newHero = `{/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/cosmetic/\${plant.img}')\`, backgroundColor: '#333' }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            \${plant.title}
          </h1>
          <p className="rcp-hero__subtitle">
            Advanced turnkey solution to produce premium quality products with high efficiency and consistent product quality.
          </p>
          <div className="rcp-hero__actions">
            <NavLink to="/contact" className="rcp-btn rcp-btn--primary rcp-btn--lg">
              Request Information
            </NavLink>
            <a href="#enquiry" className="rcp-btn rcp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>`;
            
            // Replace ${plant.img} and ${plant.title} literally since it's a template string in JS
            const finalHero = newHero.replace(/\$\{plant\.img\}/g, plant.img).replace(/\$\{plant\.title\}/g, plant.title);
            
            content = content.substring(0, heroStart) + finalHero + content.substring(heroEnd);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + plant.comp + '.jsx');
        } else {
            console.log('Hero section not found in ' + plant.comp + '.jsx');
        }
    } else {
        console.log('File not found: ' + plant.comp + '.jsx');
    }
});
