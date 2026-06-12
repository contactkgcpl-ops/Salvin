import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './BeetrootJuiceDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Beetroot Receiving', icon: '📦', desc: 'Incoming raw beetroots are weighed, quality-checked, and logged into the batch tracking system for full traceability.' },
  { id: 2, title: 'Washing', icon: '🧼', desc: 'Multi-stage rotary washing drums and high-pressure sprayers remove soil, clay, and sand from the beetroot skin.' },
  { id: 3, title: 'Sorting', icon: '🔍', desc: 'Inspection belts and color sorting rollers identify and reject damaged, under-ripe, or defective beetroots.' },
  { id: 4, title: 'Peeling', icon: '🥔', desc: 'Steam or abrasive peeling systems efficiently remove outer skin layers with minimal product loss.' },
  { id: 5, title: 'Cutting', icon: '🔪', desc: 'Precision slicing and dicing machines cut beetroots into uniform sizes to optimize the subsequent juice extraction yield.' },
  { id: 6, title: 'Crushing', icon: '⚙️', desc: 'Industrial crushers disintegrate sliced beetroots into a fine pulp slurry, maximizing cell rupture and juice release.' },
  { id: 7, title: 'Juice Extraction', icon: '🧃', desc: 'Heavy-duty continuous screw presses or belt presses extract raw juice from the crushed beetroot pulp.' },
  { id: 8, title: 'Filtration', icon: '🔬', desc: 'Rotary drum vacuum filters or decanter centrifuges clarify raw juice, removing insoluble fibres and sediment.' },
  { id: 9, title: 'Pasteurization', icon: '🔥', desc: 'Plate heat exchangers pasteurize the clarified juice at precise temperature profiles to ensure safety while preserving nutrients.' },
  { id: 10, title: 'Filling', icon: '🍾', desc: 'High-speed aseptic filling systems deposit pasteurized juice into glass/PET bottles or liquid carton packaging.' },
  { id: 11, title: 'Packaging', icon: '📦', desc: 'Automatic capping, labeling, shrink-wrapping, and carton packing prepare the juice for shipping and cold storage.' },
]

/* ─── Capacity Options ─── */
const CAPACITY_OPTIONS = [
  { capacity: '500 Ltr/Hr', type: 'Small Scale', ideal: 'Startups & Boutique Juice Brands', color: '#f47c20' },
  { capacity: '1,000 Ltr/Hr', type: 'Medium Scale', ideal: 'Regional Juice Distributors', color: '#dc6e19' },
  { capacity: '2,000 Ltr/Hr', type: 'Large Scale', ideal: 'National Processing Plants', color: '#c45a10' },
  { capacity: '5,000 Ltr/Hr', type: 'Industrial Scale', ideal: 'Mass Production & Exports', color: '#a34a0d' },
]

/* ─── Key Features ─── */
const KEY_FEATURES = [
  { title: 'Food-Grade Hygiene', desc: 'All contact surfaces are SS304/SS316L stainless steel with CIP (Clean-In-Place) systems for zero-contamination processing.', icon: '🛡️' },
  { title: 'Cold Press Yield', desc: 'Advanced extraction technology ensures maximum juice yield with low temperature operation to preserve nutrients.', icon: '🧃' },
  { title: 'Dust-Free & Sealed', desc: 'Completely enclosed processing and piping protect the juice from atmospheric contamination and oxidation.', icon: '💨' },
  { title: 'Modular Design', desc: 'Scalable modular architecture allows capacity expansion from 500 Ltr/Hr to 5,000 Ltr/Hr without structural rebuilds.', icon: '🧱' },
  { title: 'PLC Automation', desc: 'Siemens/Allen-Bradley PLC with SCADA HMI provides real-time monitoring, recipe management, and process logging.', icon: '🤖' },
  { title: 'Nutrient Retention', desc: 'Gentle heating and de-aeration systems maintain natural enzymes, vitamins, and the rich beetroot color.', icon: '🧪' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Beetroot Washing Machine',
    image: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png',
    desc: 'Heavy-duty rotary drum and spray washer designed to remove soil, mud, and external debris from raw harvested beetroots.'
  },
  {
    name: 'Sorting Conveyor',
    image: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.png',
    desc: 'Ergonomic conveyor belt with speed control for inspecting and grading beetroots, rejecting damaged or irregular roots.'
  },
  {
    name: 'Beetroot Crusher',
    image: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.png',
    desc: 'High-speed disintegration mill that crushes whole peeled beetroots into a fine pulp slurry to facilitate extraction.'
  },
  {
    name: 'Juice Extractor',
    image: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.jpg',
    desc: 'Continuous screw press system designed to extract juice from pulp efficiently under gentle pressure.'
  },
  {
    name: 'Filtration System',
    image: '/turnkey-brochures/images/beetroot-gallery/filtration-system.jpg',
    desc: 'Clarity filtration or centrifugal separator system that removes solid particulate matter and fibre from beetroot juice.'
  },
  {
    name: 'Bottle Filling & Packaging Machine',
    image: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.jpg',
    desc: 'Fully automatic rotary hot-fill bottling or aseptic carton packaging line equipped with capping and labeling attachments.'
  }
]

/* ─── Applications ─── */
const APPLICATIONS = [
  { title: 'Fruit & Vegetable Juice', desc: 'Production of pure premium beetroot juice, organic blends, and botanical juice formulations.', icon: '🧃' },
  { title: 'Natural Food Coloring', desc: 'Concentrated beetroot extract supply for bakeries, dairy, confectionery, and dessert processing.', icon: '🎨' },
  { title: 'Health Drinks & Wellness', desc: 'Nutritional wellness drinks, antioxidant supplement mixes, and detox juice shots.', icon: '💪' },
  { title: 'Beverage Industry', desc: 'Raw material juice base supply for commercial beverage and carbonated soft drink brands.', icon: '🥤' },
  { title: 'Cosmetics & Pharma', desc: 'Pigments and active nutrient extracts for natural cosmetic brands and dietary supplement firms.', icon: '💄' },
  { title: 'Dehydrated Concentrates', desc: 'Upstream feed line for spray-dryers producing beetroot powder and instant mixes.', icon: '💨' },
]

/* ─── Gallery Images (Beetroot Juice Processing Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png', caption: 'Beetroot Washing Operation' },
  { src: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.png', caption: 'Beetroot Sorting & Inspection' },
  { src: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.png', caption: 'Beetroot Crusher Process' },
  { src: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.jpg', caption: 'Beetroot Juice Extraction' },
  { src: '/turnkey-brochures/images/beetroot-gallery/filtration-system.jpg', caption: 'Juice Clarification & Filtration' },
  { src: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.jpg', caption: 'Automated Bottling & Packaging Line' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function BeetrootJuiceDetailPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Beetroot Juice Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Beetroot Juice Processing Plant by Salvin Industries. From raw beetroot receiving to finished bottle packaging — automated, food-grade, energy-efficient processing lines from 500 Ltr/Hr to 5,000 Ltr/Hr.')
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
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/beetroot_hero.png')` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY BEETROOT JUICE PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            Beetroot Juice Processing Plant
          </h1>
          <p className="rcp-hero__subtitle">
            Complete Turnkey Solution For Cleaning, Washing, Crushing, Juice Extraction, Clarification, Pasteurization and Packaging of Beetroot
          </p>
          <div className="rcp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/fruit_juice_salvin.pdf"
              download="fruit_juice_salvin.pdf"
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
              <span className="rcp-hero__stat-value">500–5,000 Ltr</span>
              <span className="rcp-hero__stat-label">Per Hour Capacity</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">11 Stage</span>
              <span className="rcp-hero__stat-label">Process Flow</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">99.8% Yield</span>
              <span className="rcp-hero__stat-label">Extraction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Beetroot <span className="rcp-accent">Juice Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>
                Salvin Industries' Beetroot Juice Processing Plant is a turnkey industrial solution engineered for processors seeking
                maximum juice yield, high OEE, and strict hygiene compliance. The completely integrated processing line handles the entire
                extraction cycle—from raw beetroot receiving through automated washing, pulping, extraction, pasteurization, and aseptic filling.
              </p>
              <p>
                Each system is custom-designed to respect the delicate nutrients, enzymes, and deep red coloring of beetroot.
                Whether you are manufacturing retail consumer packs, natural color extracts, or bulk beverage ingredients,
                our processing solutions provide the reliability and efficiency required to scale your production.
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
              <img src="/turnkey-brochures/images/3_beetroot.png" alt="Beetroot Juice Processing Plant by Salvin Industries" loading="lazy" />
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
          <p className="rcp-section-subtitle">From startup-scale to industrial juice processing facilities — we build the right capacity for your market demands.</p>
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
          <p className="rcp-section-subtitle">Each stage is engineered for maximum yield, low nutrient loss, and full batch traceability.</p>

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
                      <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            <h2>Ready to Build Your Beetroot Juice Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="rcp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Beetroot%20Juice%20Processing%20Plant.%20Please%20share%20details."
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
