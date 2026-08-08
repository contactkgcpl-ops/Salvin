const fs = require('fs');
const file = 'src/pages/TurnkeyProject/components/RedChilliDetailPage.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/red_chilli_hero.webp')\` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY RED CHILLI PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            Red Chilli Processing Plant
          </h1>
          <p className="rcp-hero__subtitle">
            Start Your Own Red Chilli Processing Plant Business with Salvin Industries' Automatic Turnkey Plant
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

const replacement = `      {/* ═══ HERO BANNER ═══ */}
      <section className="w-full relative mt-[85px] lg:mt-[105px]">
        <img 
          src="/turnkey-brochures/images/red_chilli_hero.webp" 
          alt="Red Chilli Processing Plant" 
          className="w-full h-auto block"
        />
      </section>`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Replaced successfully');
