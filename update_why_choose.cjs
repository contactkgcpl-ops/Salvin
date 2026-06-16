const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('DetailPage.jsx'));

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find prefix
    const match = content.match(/className="([a-z0-9]+)-hero/);
    if (!match) {
        console.log(`Skipping ${file} - Could not find prefix.`);
        continue;
    }
    const px = match[1];
    
    // Remove existing Why Choose SALVIN or Plant Advantage sections
    content = content.replace(/\{\/\*\s*═══[^═]+ADVANTAGE[^═]+═══\s*\*\/\}\s*/gi, '');
    content = content.replace(/\{\/\*\s*═══[^═]+WHY CHOOSE[^═]+═══\s*\*\/\}\s*/gi, '');
    content = content.replace(/<section[^>]*id="(why-salvin|advantages)"[^>]*>[\s\S]*?<\/section>\s*/gi, '');
    
    // Some pages might not use id="advantages" but something like "plant-advantages"
    content = content.replace(/<section[^>]*className="[^"]*(advantages|why-salvin)[^"]*"[^>]*>[\s\S]*?<\/section>\s*/gi, '');
    
    // Build the new Why Choose SALVIN section
    const whySection = `
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <section className="${px}-section ${px}-why-salvin" id="why-salvin" data-animate>
        <div className={\`${px}-container ${px}-animate \${isVisible['why-salvin'] ? '${px}-animate--in' : ''}\`}>
          <div className="${px}-section-badge">Our Advantage</div>
          <h2 className="${px}-section-title">Why Choose <span className="${px}-accent">SALVIN</span></h2>
          <div className="${px}-why-salvin__grid">
            {/* Card 1 — Turnkey Solutions */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20M4 20V10l8-7 8 7v10M10 20v-6h4v6" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">Turnkey Solutions</p>
                <p className="${px}-why-salvin__desc">End-to-end processing solutions from design and manufacturing to installation and commissioning.</p>
              </div>
            </div>
            {/* Card 2 — Food Grade Design */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">Food Grade Design</p>
                <p className="${px}-why-salvin__desc">SS304/SS316 contact parts with hygienic construction for food-safe processing.</p>
              </div>
            </div>
            {/* Card 3 — Energy Efficient */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">Energy Efficient</p>
                <p className="${px}-why-salvin__desc">Optimized systems designed to reduce power consumption and improve productivity.</p>
              </div>
            </div>
            {/* Card 4 — Low Maintenance */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">Low Maintenance</p>
                <p className="${px}-why-salvin__desc">Robust industrial construction ensuring long service life and minimal maintenance.</p>
              </div>
            </div>
            {/* Card 5 — Automation Ready */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h10" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">Automation Ready</p>
                <p className="${px}-why-salvin__desc">PLC-based automation and intelligent controls for consistent production.</p>
              </div>
            </div>
            {/* Card 6 — After Sales Support */}
            <div className="${px}-why-salvin__card">
              <div className="${px}-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="${px}-why-salvin__title">After Sales Support</p>
                <p className="${px}-why-salvin__desc">Dedicated technical support, spare parts assistance and service guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

`;
    
    // Find the CTA section
    const ctaRegex = new RegExp(`(<section[^>]*className="[^"]*${px}-cta"[^>]*>|\\{\\/\\* ═══ [^═]*CTA[^═]* ═══ \\*\\/\\})`, 'i');
    
    if (content.match(ctaRegex)) {
        content = content.replace(ctaRegex, whySection + '$1');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
        changedFiles++;
    } else {
        console.log(`Could not find CTA section in ${file}. Manual review needed.`);
    }
}
console.log(`Updated ${changedFiles} files.`);
