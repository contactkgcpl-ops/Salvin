const fs = require('fs');
const path = require('path');

const plants = [
  { file: 'BabyLotionManufacturingDetailPage.jsx', prefix: 'blm', name: 'Baby Lotion', img: 'baby_lotion_hero.png' },
  { file: 'BodyButterManufacturingDetailPage.jsx', prefix: 'bbm', name: 'Body Butter', img: 'body_butter_hero.png' },
  { file: 'SunscreenLotionManufacturingDetailPage.jsx', prefix: 'slm', name: 'Sunscreen Lotion', img: 'sunscreen_lotion_hero.png' }
];

const dir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

for (const plant of plants) {
  const filePath = path.join(dir, plant.file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the entire overview section from <section className="prefix-section prefix-overview" to </section>
  const regex = new RegExp(`<section className="${plant.prefix}-section ${plant.prefix}-overview"[\\s\\S]*?</section>`, 'm');
  
  const replacement = `<section className="${plant.prefix}-section ${plant.prefix}-overview" id="overview" data-animate>
        <div className={\`${plant.prefix}-container \${isVisible['overview'] ? '${plant.prefix}-animate--in' : ''}\`}>
          <div className="${plant.prefix}-section-badge">Project Overview</div>
          <h2 className="${plant.prefix}-section-title">Complete ${plant.name} <span className="${plant.prefix}-accent">Manufacturing Solution</span></h2>
          <div className="${plant.prefix}-overview__grid">
            <div className="${plant.prefix}-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>${plant.name} Manufacturing Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="${plant.prefix}-overview__features">
                <div className="${plant.prefix}-overview__feature">
                  <div className="${plant.prefix}-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="${plant.prefix}-overview__feature-body">
                    <p className="${plant.prefix}-overview__feature-title">Fully Automated</p>
                    <p className="${plant.prefix}-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                <div className="${plant.prefix}-overview__feature">
                  <div className="${plant.prefix}-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="${plant.prefix}-overview__feature-body">
                    <p className="${plant.prefix}-overview__feature-title">Hygienic Design</p>
                    <p className="${plant.prefix}-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                <div className="${plant.prefix}-overview__feature">
                  <div className="${plant.prefix}-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="${plant.prefix}-overview__feature-body">
                    <p className="${plant.prefix}-overview__feature-title">Precise Control</p>
                    <p className="${plant.prefix}-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                <div className="${plant.prefix}-overview__feature">
                  <div className="${plant.prefix}-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="${plant.prefix}-overview__feature-body">
                    <p className="${plant.prefix}-overview__feature-title">Flexible & Scalable</p>
                    <p className="${plant.prefix}-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="${plant.prefix}-overview__image ${plant.prefix}-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src={'/turnkey-brochures/images/cosmetic/${plant.img}'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>`;

  if (content.match(regex)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content);
    console.log(`Fully Fixed ${plant.file}`);
  } else {
    console.log(`Regex did not match for ${plant.file}`);
  }
}
