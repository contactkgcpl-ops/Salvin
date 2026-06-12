import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Chilli Receiving', icon: '📦', desc: 'Incoming raw red chillies are weighed, inspected for quality and moisture content, and logged into the batch tracking system before entering the processing line.' },
  { id: 2, title: 'Cleaning', icon: '🧹', desc: 'Multi-stage dry and wet cleaning removes dust, sand, stems, and foreign matter using air classifiers, vibrating screens, and washing drums.' },
  { id: 3, title: 'Destoning', icon: '🪨', desc: 'Precision destoners use gravity separation and air-flow technology to eliminate stones, metal fragments, and heavy impurities from the clean chilli stream.' },
  { id: 4, title: 'Sorting', icon: '🔍', desc: 'Optical color sorters and manual inspection belts classify chillies by grade, color intensity, and size—rejecting defective or discolored units automatically.' },
  { id: 5, title: 'Drying', icon: '☀️', desc: 'Controlled-atmosphere tray or tunnel dryers reduce moisture to the target 8–10% level while preserving color, pungency, and essential oils.' },
  { id: 6, title: 'Crushing', icon: '⚙️', desc: 'Pre-crushing breakers reduce dried whole chillies into coarse flakes, preparing them for the fine grinding stage with uniform particle input.' },
  { id: 7, title: 'Grinding', icon: '🔧', desc: 'Hammer mills and pin mills pulverise chilli flakes into fine powder with cryogenic or ambient temperature control to preserve volatile capsaicin content.' },
  { id: 8, title: 'Sieving', icon: '🔬', desc: 'Vibratory and rotary sifters classify ground powder into consistent mesh sizes (40–120 mesh), removing oversize particles for re-grinding.' },
  { id: 9, title: 'Quality Check', icon: '✅', desc: 'Laboratory testing for moisture, color value (ASTA), pungency (SHU), microbial load, heavy metals, and aflatoxin levels ensures compliance with FSSAI/FDA standards.' },
  { id: 10, title: 'Packaging', icon: '📦', desc: 'Automatic multi-head weighers and FFS machines pack powder into pouches, jars, or bulk bags under nitrogen-flushed or vacuum-sealed conditions.' },
  { id: 11, title: 'Storage', icon: '🏭', desc: 'Finished goods are stored in temperature-controlled warehouses with FIFO inventory management and full batch traceability from intake to dispatch.' },
]

/* ─── Capacity Options ─── */
const CAPACITY_OPTIONS = [
  { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Startups & Small Processors', color: '#f47c20' },
  { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Distributors', color: '#dc6e19' },
  { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'Export-Grade Facilities', color: '#c45a10' },
  { capacity: '5 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Production Units', color: '#a34a0d' },
]

/* ─── Key Features ─── */
const KEY_FEATURES = [
  { title: 'Food-Grade Hygiene', desc: 'All contact surfaces are SS304/SS316L stainless steel with CIP (Clean-In-Place) systems for zero-contamination processing.', icon: '🛡️' },
  { title: 'Energy Efficient', desc: 'Heat recovery systems, VFD-driven motors, and optimised airflow reduce energy consumption by up to 30% compared to conventional plants.', icon: '⚡' },
  { title: 'Dust-Free Operation', desc: 'Enclosed conveying, cyclone separators, and bag filters maintain a dust-free processing environment meeting OSHA standards.', icon: '💨' },
  { title: 'Modular Design', desc: 'Scalable modular architecture allows capacity expansion from 500 Kg/Hr to 5 Ton/Hr without major structural modifications.', icon: '🧱' },
  { title: 'PLC Automation', desc: 'Siemens/Allen-Bradley PLC with SCADA HMI provides real-time monitoring, recipe management, and data logging for every batch.', icon: '🤖' },
  { title: 'Colour Preservation', desc: 'Cryogenic grinding and controlled drying preserve the vibrant red ASTA colour value, maximising market premium for your output.', icon: '🎨' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Vibrating Screen Cleaner',
    image: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png',
    desc: 'Multi-deck screening system designed to eliminate dust, stalks, sand, and light impurities from raw incoming red chillies, preparing them for downstream processing.'
  },
  {
    name: 'Gravity Destoner',
    image: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.png',
    desc: 'Employs density separation to clean and separate stones, glass, heavy dirt particles, and other solid contaminants from the chilli stream.'
  },
  {
    name: 'Tunnel Dryer',
    image: '/turnkey-brochures/images/red-chilli-gallery/chilli_drying_tunnel.png',
    desc: 'Controlled convective tunnel drying section that gently reduces red chilli moisture levels to 8–10% while preserving ASTA color and SHU pungency.'
  },
  {
    name: 'Hammer Mill Crusher',
    image: '/turnkey-brochures/images/red-chilli-gallery/chilli_grinding_unit.png',
    desc: 'Heavy-duty pre-crusher designed to reduce dried whole chillies into uniform coarse flakes, facilitating high-efficiency fine grinding.'
  },
  {
    name: 'Pin Mill Grinder',
    image: '/turnkey-brochures/images/rotary_sifter.png',
    desc: 'Fine pulverization unit featuring ambient or cryogenic temperature control to grind chilli flakes into consistent mesh powder without losing volatile oils.'
  },
  {
    name: 'Automatic Packaging Machine',
    image: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.png',
    desc: 'Fully automatic vertical form-fill-seal packaging system that packs finished chilli powder under nitrogen gas to prevent oxidation and extend shelf life.'
  }
]

/* ─── Applications ─── */
const APPLICATIONS = [
  { title: 'Spice Manufacturing', desc: 'Large-scale production of retail and bulk red chilli powder for domestic and export markets.', icon: '🌶️' },
  { title: 'Food Processing', desc: 'Ingredient supply for snack seasonings, ready meals, sauces, and instant food formulations.', icon: '🍜' },
  { title: 'Pharmaceutical & Nutraceutical', desc: 'Capsaicin extraction and standardised chilli oleoresin for pharma and supplement industries.', icon: '💊' },
  { title: 'Export & Trading', desc: 'Premium export-grade chilli powder meeting international quality certifications and colour standards.', icon: '🌍' },
  { title: 'Contract Manufacturing', desc: 'White-label and private-label chilli powder processing for brand owners and retailers.', icon: '🏷️' },
  { title: 'Paste & Sauce Production', desc: 'Upstream processing for chilli paste, hot sauce, and condiment manufacturing lines.', icon: '🫙' },
]

/* ─── Gallery Images (Red Chilli Processing Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/1_red_chilli.png', caption: 'Red Chilli Processing Plant — Complete Overview' },
  { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png', caption: 'Red Chilli Cleaning & Destoning Line' },
  { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_drying_tunnel.png', caption: 'Red Chilli Tunnel Drying Section' },
  { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_grinding_unit.png', caption: 'Red Chilli Grinding & Pulverisation Unit' },
  { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.png', caption: 'Red Chilli Optical Color Sorting Machine' },
  { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.png', caption: 'Red Chilli Powder Packaging Station' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function RedChilliDetailPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Red Chilli Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Red Chilli Processing Plant by Salvin Industries. From raw chilli receiving to finished powder packaging — automated, food-grade, energy-efficient processing lines from 500 Kg/Hr to 5 Ton/Hr.')
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rcp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/red_chilli_hero.png')` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY RED CHILLI PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            Red Chilli Processing Plant
          </h1>
          <p className="rcp-hero__subtitle">
            Complete Turnkey Solution For Cleaning, Drying, Grinding, Pulverizing And Packaging Of Red Chilli
          </p>
          <div className="rcp-hero__actions">
            <a
              href="/turnkey-brochures/salvin food powder processing machinaries.pdf"
              download="salvin food powder processing machinaries.pdf"
              className="rcp-btn rcp-btn--primary"
            >
              Download Brochure
            </a>
            <a href="#enquiry" className="rcp-btn rcp-btn--outline">
              Enquire Now
            </a>
          </div>
          <div className="rcp-hero__stats">
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">500 Kg–5 Ton</span>
              <span className="rcp-hero__stat-label">Per Hour Capacity</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">11 Stage</span>
              <span className="rcp-hero__stat-label">Process Flow</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">120+ ASTA</span>
              <span className="rcp-hero__stat-label">Colour Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Chilli <span className="rcp-accent">Processing Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>
                Salvin Industries' Red Chilli Processing Plant is a turnkey industrial solution designed for processors who demand 
                consistent quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage 
                — from incoming raw chilli inspection through final packaged product — in a single, automated, dust-free facility.
              </p>
              <p>
                Each plant is custom-engineered to match your specific capacity requirements, product grades, and market standards. 
                Whether you're producing retail packs, bulk institutional supply, or export-grade chilli powder, our systems deliver 
                the colour retention, pungency preservation, and microbial safety your buyers expect.
              </p>
              <div className="rcp-overview__highlights">
                <div className="rcp-highlight-item">
                  <span className="rcp-highlight-icon">🏭</span>
                  <div>
                    <strong>Turnkey Delivery</strong>
                    <p>Design → Manufacture → Install → Commission → Train</p>
                  </div>
                </div>
                <div className="rcp-highlight-item">
                  <span className="rcp-highlight-icon">📊</span>
                  <div>
                    <strong>OEE Optimised</strong>
                    <p>85%+ Overall Equipment Effectiveness target</p>
                  </div>
                </div>
                <div className="rcp-highlight-item">
                  <span className="rcp-highlight-icon">🌍</span>
                  <div>
                    <strong>Global Standards</strong>
                    <p>FSSAI, FDA, CE, ISO 22000 compliant designs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image">
              <img src="/turnkey-brochures/images/1_red_chilli.png" alt="Red Chilli Processing Plant by Salvin Industries" loading="lazy" />
              <div className="rcp-overview__image-badge">
                <span>Since 2008</span>
                <p>350+ Projects Delivered Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPACITY OPTIONS ═══ */}
      <section className="rcp-section rcp-capacity" id="capacity" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['capacity'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Capacity Options</div>
          <h2 className="rcp-section-title">Choose Your <span className="rcp-accent">Plant Scale</span></h2>
          <p className="rcp-section-subtitle">From startup-scale to industrial mega-plants — we engineer the right capacity for your market and growth trajectory.</p>
          <div className="rcp-capacity__grid">
            {CAPACITY_OPTIONS.map((opt, i) => (
              <div key={i} className="rcp-capacity__card" style={{ '--accent': opt.color }}>
                <div className="rcp-capacity__card-top" style={{ background: `linear-gradient(135deg, ${opt.color}, ${opt.color}dd)` }}>
                  <span className="rcp-capacity__value">{opt.capacity}</span>
                  <span className="rcp-capacity__type">{opt.type}</span>
                </div>
                <div className="rcp-capacity__card-body">
                  <p className="rcp-capacity__ideal">
                    <strong>Ideal For:</strong> {opt.ideal}
                  </p>
                  <a href="#enquiry" className="rcp-btn rcp-btn--sm">Get Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEY FEATURES ═══ */}
      <section className="rcp-section rcp-features" id="features" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['features'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Key Features</div>
          <h2 className="rcp-section-title">Engineered <span className="rcp-accent">Advantages</span></h2>
          <div className="rcp-features__grid">
            {KEY_FEATURES.map((feat, i) => (
              <div key={i} className="rcp-feature-card">
                <div className="rcp-feature-card__icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process" id="process-flow" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Complete Process Flow</div>
          <h2 className="rcp-section-title">11-Stage <span className="rcp-accent">Processing Line</span></h2>
          <p className="rcp-section-subtitle">Each stage is engineered for maximum efficiency, minimal product loss, and full traceability.</p>

          {/* Process Flow Diagram */}
          <div className="rcp-process-flow-diagram">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <button
                  className={`rcp-flow-node ${activeStep === i ? 'rcp-flow-node--active' : ''}`}
                  onClick={() => setActiveStep(i)}
                  type="button"
                >
                  <span className="rcp-flow-node__number">{String(step.id).padStart(2, '0')}</span>
                  <span className="rcp-flow-node__icon">{step.icon}</span>
                  <span className="rcp-flow-node__title">{step.title}</span>
                </button>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="rcp-flow-arrow">
                    <svg viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Step Detail */}
          <div className="rcp-process-detail">
            <div className="rcp-process-detail__number">{String(PROCESS_STEPS[activeStep].id).padStart(2, '0')}</div>
            <div className="rcp-process-detail__content">
              <h3>{PROCESS_STEPS[activeStep].icon} {PROCESS_STEPS[activeStep].title}</h3>
              <p>{PROCESS_STEPS[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['machinery'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Machinery Used</div>
          <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
          <div className="rcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="rcp-machine-card">
                <div className="rcp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="rcp-machine-card__content">
                  <h3 className="rcp-machine-card__title">{m.name}</h3>
                  <p className="rcp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ APPLICATIONS ═══ */}
      <section className="rcp-section rcp-applications" id="applications" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['applications'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Applications</div>
          <h2 className="rcp-section-title">Industry <span className="rcp-accent">Applications</span></h2>
          <div className="rcp-applications__grid">
            {APPLICATIONS.map((app, i) => (
              <div key={i} className="rcp-application-card">
                <div className="rcp-application-card__icon">{app.icon}</div>
                <h3>{app.title}</h3>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      <section className="rcp-section rcp-gallery" id="gallery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['gallery'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Industrial Gallery</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
          <div className="rcp-gallery__showcase">
            <div className="rcp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="rcp-gallery__main-img"
              />
              <div className="rcp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="rcp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`rcp-gallery__thumb ${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}`}
                  onClick={() => setGalleryIndex(i)}
                  type="button"
                >
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['enquiry'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Red Chilli Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list, 
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="rcp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Red%20Chilli%20Processing%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="rcp-btn rcp-btn--primary rcp-btn--lg"
              >
                💬 WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                📧 Contact Us
              </NavLink>
            </div>
            <p className="rcp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="rcp-back-nav">
        <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--outline">
          ← Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
