const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/FaceCreamManufacturingDetailPage.jsx');
let jsxCode = fs.readFileSync(jsxPath, 'utf8');

// The replace tool butchered the overview section. Let's fix it by completely replacing the corrupted part.
// The corrupted part is missing the closing divs for feature 4, the overview grid, and the overview image.
// Let's replace the whole Overview section to be safe.

const overviewTargetStart = `{/* ═══ PLANT OVERVIEW ═══ */}`;
const overviewTargetEnd = `{/* ═══ PROCESS FLOW ═══ */}`;

const fixContent = `{/* ═══ PLANT OVERVIEW ═══ */}
      <section className="fcm-section fcm-overview" id="overview" data-animate>
        <div className={\`fcm-container fcm-animate \${isVisible['overview'] ? 'fcm-animate--in' : ''}\`}>
          <div className="fcm-section-badge">Plant Overview</div>
          <h2 className="fcm-section-title">Face Cream <span className="fcm-accent">Manufacturing Plant</span></h2>
          <div className="fcm-overview__grid">
            <div className="fcm-overview__text">
              <p>Capitalize on the growing cosmetics market with our complete turnkey <strong>Face Cream Manufacturing Plant</strong>. Built entirely in-house at Salvin Industries, this automated plant ensures hygienic and fast processing.</p>
              <p>From precise ingredient dosing and high-shear mixing to perfectly sealed containers, our machines maintain the original formula, viscosity, and natural goodness of your cream products.</p>
              <div className="fcm-overview__features">
                {/* Feature 1 */}
                <div className="fcm-overview__feature">
                  <div className="fcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="fcm-overview__feature-body">
                    <p className="fcm-overview__feature-title">High Yield</p>
                    <p className="fcm-overview__feature-desc">Continuous automatic production lines</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="fcm-overview__feature">
                  <div className="fcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="fcm-overview__feature-body">
                    <p className="fcm-overview__feature-title">Hygienic Design</p>
                    <p className="fcm-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="fcm-overview__feature">
                  <div className="fcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="fcm-overview__feature-body">
                    <p className="fcm-overview__feature-title">Precise Control</p>
                    <p className="fcm-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="fcm-overview__feature">
                  <div className="fcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="fcm-overview__feature-body">
                    <p className="fcm-overview__feature-title">Flexible & Scalable</p>
                    <p className="fcm-overview__feature-desc">Adaptable to multiple recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fcm-overview__image fcm-overview__image--photo">
              {GALLERY_IMAGES.length > 0 ? (
                <img src={GALLERY_IMAGES[0].src} alt="Plant Overview" loading="lazy" />
              ) : (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Image coming soon</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}`;

const startIndex = jsxCode.indexOf(overviewTargetStart);
const endIndex = jsxCode.indexOf(overviewTargetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  jsxCode = jsxCode.substring(0, startIndex) + fixContent + jsxCode.substring(endIndex + overviewTargetEnd.length);
  fs.writeFileSync(jsxPath, jsxCode);
  console.log("Fixed Overview!");
} else {
  console.log("Could not find targets");
}
