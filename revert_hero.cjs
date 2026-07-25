const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const plants = [
  { file: 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx', img: 'fruit-juice.jpeg' },
  { file: 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx', img: 'jelly.jpeg' },
  { file: 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx', img: 'garlic.jpeg' },
  { file: 'FullyAutomaticVegetableDryingPlantDetailPage.jsx', img: 'vegetable-drying.jpeg' },
  { file: 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx', img: 'garam-masala.jpeg' },
  { file: 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx', img: 'frozen-vegetable.jpeg' }
];

plants.forEach(p => {
  const filePath = path.join(dir, p.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title and desc from the existing hero-alt block
  const titleMatch = content.match(/<h1 className="rcp-hero__title"[^>]*>([^<]+)<\/h1>/);
  const descMatch = content.match(/<p className="rcp-hero__subtitle"[^>]*>([^<]+)<\/p>/);

  if (!titleMatch || !descMatch) {
    console.log(`Could not find title or desc in ${p.file}`);
    return;
  }

  const title = titleMatch[1];
  const desc = descMatch[1];

  const oldHeroBlock = `      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: "url('/turnkey-brochures/images/${p.img}')" }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge"><span className="rcp-hero__badge-dot" />TURNKEY SOLUTION</span>
          <h1 className="rcp-hero__title">${title}</h1>
          <p className="rcp-hero__subtitle">${desc}</p>
          <div className="rcp-hero__actions"><a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a></div>
        </div>
      </section>`;

  // Replace the new hero block with the old one
  const heroRegex = /<section className="rcp-hero-alt"[\s\S]*?<\/section>/;
  content = content.replace(heroRegex, oldHeroBlock);

  fs.writeFileSync(filePath, content);
  console.log(`Reverted hero section for ${p.file}`);
});
