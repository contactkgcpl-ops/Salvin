const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const plants = [
  { file: 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx', heroImg: 'hero_fruit_juice.png' },
  { file: 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx', heroImg: 'hero_jelly.png' },
  { file: 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx', heroImg: 'hero_garlic.png' },
  { file: 'FullyAutomaticVegetableDryingPlantDetailPage.jsx', heroImg: 'hero_veg_drying.png' },
  { file: 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx', heroImg: 'hero_garam_masala.png' },
  { file: 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx', heroImg: 'hero_frozen_veg.png' }
];

plants.forEach(p => {
  const filePath = path.join(dir, p.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title and desc from the existing hero block
  const titleMatch = content.match(/<h1 className="rcp-hero__title">([^<]+)<\/h1>/);
  const descMatch = content.match(/<p className="rcp-hero__subtitle">([^<]+)<\/p>/);

  if (!titleMatch || !descMatch) {
    console.log(`Could not find title or desc in ${p.file}`);
    return;
  }

  const title = titleMatch[1];
  const desc = descMatch[1];

  const newHeroBlock = `      <section className="rcp-hero-alt" style={{ display: 'flex', flexDirection: 'column', width: '100%', background: '#f8fafc' }}>
        <div className="rcp-hero-alt__image" style={{ width: '100%', height: 'auto', maxHeight: '550px', overflow: 'hidden' }}>
          <img src="/turnkey-brochures/images/${p.heroImg}" alt="${title}" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="rcp-hero-alt__content" style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="rcp-hero__badge" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>
            <span className="rcp-hero__badge-dot" />TURNKEY SOLUTION
          </span>
          <h1 className="rcp-hero__title" style={{ color: '#0f172a', marginBottom: '20px', fontSize: '2.5rem' }}>${title}</h1>
          <p className="rcp-hero__subtitle" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px' }}>${desc}</p>
          <div className="rcp-hero__actions" style={{ justifyContent: 'center' }}>
            <a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a>
          </div>
        </div>
      </section>`;

  // Replace the old hero block
  const heroRegex = /<section className="rcp-hero">[\s\S]*?<\/section>/;
  content = content.replace(heroRegex, newHeroBlock);

  fs.writeFileSync(filePath, content);
  console.log(`Updated hero section for ${p.file}`);
});
