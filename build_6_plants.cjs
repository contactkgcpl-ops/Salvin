const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const appFile = path.join(__dirname, 'src', 'App.jsx');

const templateSrc = `import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './__ID__.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = __STEPS__

/* ─── Machinery Used ─── */
const MACHINERY_LIST = __MACHINERY__

/* ─── FAQs ─── */
const FAQS = __FAQS__

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = __GALLERY__

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function __COMPONENT_NAME__() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = '__TITLE__ | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', '__DESC__')
  }, [])

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

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="__PREFIX__-page cp-page">
      <section className="cp-hero">
        <div className="cp-hero__overlay" />
        <div className="cp-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/hero-banners/default_hero.jpg')\` }} />
        <div className="cp-hero__content">
          <span className="cp-hero__badge">
            <span className="cp-hero__badge-dot" />
            TURNKEY __TITLE_UPPER__ SOLUTION
          </span>
          <h1 className="cp-hero__title">
            __TITLE__
          </h1>
          <p className="cp-hero__subtitle">
            __DESC__
          </p>
          <div className="cp-hero__actions">
            <a href="#enquiry" className="cp-btn cp-btn--primary cp-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section className="cp-section cp-overview" id="overview" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['overview'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-section-badge">Plant Overview</div>
          <h2 className="cp-section-title">Complete <span className="cp-accent">__TITLE__</span></h2>
          <div className="cp-overview__grid">
            <div className="cp-overview__text">
              <p>
                __DESC__
              </p>
              <div className="cp-overview__features">
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Premium Production</p>
                    <p className="cp-overview__feature-desc">Consistent quality</p>
                  </div>
                </div>
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Hygienic Design</p>
                    <p className="cp-overview__feature-desc">Food grade compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cp-overview__image cp-overview__image--photo">
              <img src="/turnkey-brochures/images/hero-banners/default_hero.jpg" alt="__TITLE__" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="cp-section cp-process-new" id="process-flow" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['process-flow'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-section-badge">Process Flow</div>
          <h2 className="cp-section-title">Processing <span className="cp-accent">Workflow</span></h2>
          <div className="cp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="cp-process-card">
                  <div className="cp-process-card__icon">
                    <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div className="cp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="cp-process-arrow">
                    <svg className="cp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-section cp-machinery" id="machinery" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['machinery'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-section-badge">Machinery Used</div>
          <h2 className="cp-section-title">Core <span className="cp-accent">Equipment</span></h2>
          <div className="cp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="cp-machine-card">
                <div className="cp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="cp-machine-card__image" loading="lazy" />
                  <div className="cp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="cp-machine-card__content">
                  <h3 className="cp-machine-card__title">{m.name}</h3>
                  <p className="cp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-section cp-faq-section" id="faq" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['faq'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-section-badge">FAQs</div>
          <h2 className="cp-section-title">Frequently Asked <span className="cp-accent">Questions</span></h2>
          <div className="cp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={\`cp-faq__item \${isOpen ? 'cp-faq__item--open' : ''}\`}>
                  <button className="cp-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)}>
                    <span className="cp-faq__question-text">{faq.question}</span>
                    <span className="cp-faq__icon-toggle">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  <div className="cp-faq__answer-wrapper">
                    <div className="cp-faq__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cp-section cp-gallery" id="gallery" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['gallery'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-section-badge">Industrial Gallery</div>
          <h2 className="cp-section-title">Plant <span className="cp-accent">Gallery</span></h2>
          <div className="cp-gallery__showcase">
            <div className="cp-gallery__main">
              <img src={GALLERY_IMAGES[galleryIndex]?.src} alt="Gallery" className="cp-gallery__main-img" />
              <div className="cp-gallery__caption">{GALLERY_IMAGES[galleryIndex]?.caption}</div>
            </div>
            <div className="cp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={\`cp-gallery__thumb \${galleryIndex === i ? 'cp-gallery__thumb--active' : ''}\`}
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

      <WhyChooseSalvin prefix="__PREFIX__" isVisible={isVisible['why-salvin']} projectKey="__COMPONENT_NAME__" />

      <section className="cp-section cp-cta" id="enquiry" data-animate>
        <div className={\`cp-container cp-animate \${isVisible['enquiry'] ? 'cp-animate--in' : ''}\`}>
          <div className="cp-cta__box">
            <h2>Ready to Build Your __TITLE__?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="cp-cta__actions">
              <a href="https://wa.me/919898727796" target="_blank" rel="noopener noreferrer" className="cp-btn cp-btn--primary cp-btn--lg">
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="cp-btn cp-btn--outline cp-btn--lg">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <div className="cp-back-nav">
        <NavLink to="/turnkey-project" className="cp-btn cp-btn--outline">
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
`;

const defaultCSS = `.cp-page { width: 100%; }`;

const plants = [
  {
    id: "PetroleumJellyProcessingDetailPage",
    title: "Petroleum Jelly Processing Plant",
    desc: "Complete processing line for high-quality petroleum jelly production with melting, homogenization, filtration, and precision filling.",
    prefix: "pj",
    steps: [
      { id: 1, title: 'Raw Material Melting' },
      { id: 2, title: 'Wax and Oil Heating' },
      { id: 3, title: 'Homogenization & Blending' },
      { id: 4, title: 'Micro Filtration' },
      { id: 5, title: 'Vacuum Deaeration' },
      { id: 6, title: 'Precision Jar Filling' },
      { id: 7, title: 'Cooling Tunnel Settling' },
      { id: 8, title: 'Induction Foil Sealing' },
      { id: 9, title: 'Capping & Labeling' },
      { id: 10, title: 'Final Packaging' }
    ]
  },
  {
    id: "FullyAutomaticYogurtPlantDetailPage",
    title: "Fully Automatic Yogurt Plant",
    desc: "Advanced turnkey solution for high-capacity yogurt production featuring milk reception, standardization, fermentation, and automated cup packaging.",
    prefix: "yog",
    steps: [
      { id: 1, title: "Raw Milk Reception & Inspection" },
      { id: 2, title: "Milk Cooling Tank" },
      { id: 3, title: "Centrifugal Clarifier" },
      { id: 4, title: "Standardization Tank" },
      { id: 5, title: "Homogenizer" },
      { id: 6, title: "Pasteurizer (Plate Heat Exchanger)" },
      { id: 7, title: "Holding Tube" },
      { id: 8, title: "Cooling (Plate Heat Exchanger)" },
      { id: 9, title: "Fermentation Tank (Inoculation)" },
      { id: 10, title: "Incubation / Fermentation Room" },
      { id: 11, title: "Stirring / Breaking Tank" },
      { id: 12, title: "Fruit Preparation System (Optional)" },
      { id: 13, title: "Mixing Tank (Fruit + Yogurt)" },
      { id: 14, title: "Filling Machine" },
      { id: 15, title: "Sealing Machine" },
      { id: 16, title: "Check Weigher" },
      { id: 17, title: "Carton / Cup Packaging" },
      { id: 18, title: "Palletizing (Optional)" }
    ]
  },
  {
    id: "FullyAutomaticUHTMilkPlantDetailPage",
    title: "Fully Automatic UHT Milk Plant",
    desc: "Complete processing line for UHT milk production with advanced aseptic sterilization (135°C), homogenization, and carton packing.",
    prefix: "uht",
    steps: [
      { id: 1, title: "Raw Milk Reception" },
      { id: 2, title: "Milk Reception & Cooling Tank" },
      { id: 3, title: "Clarification" },
      { id: 4, title: "Standardization System" },
      { id: 5, title: "Balance Tank" },
      { id: 6, title: "Preheating System" },
      { id: 7, title: "Homogenizer System" },
      { id: 8, title: "UHT Sterilizer" },
      { id: 9, title: "Aseptic Holding Tank" },
      { id: 10, title: "Flash Cooler" },
      { id: 11, title: "Cold Storage Tank" },
      { id: 12, title: "CIP Cleaning System" },
      { id: 13, title: "Aseptic Filling Machine" },
      { id: 14, title: "Cap Sterilization Tunnel" },
      { id: 15, title: "Online Inspection" },
      { id: 16, title: "Labeling Machine" },
      { id: 17, title: "Shrink Wrapping" },
      { id: 18, title: "Carton Packing Machine" },
      { id: 19, title: "Palletizing & Stretch Wrapping" },
      { id: 20, title: "Finished Product" }
    ]
  },
  {
    id: "FullyAutomaticPasteurizedMilkPlantDetailPage",
    title: "Fully Automatic Pasteurized Milk Plant",
    desc: "Complete pasteurization line designed for efficient milk processing with HTST pasteurizers, high-efficiency separators, and flexible pouch/bottle filling.",
    prefix: "pas",
    steps: [
      { id: 1, title: "Raw Milk Reception & Inspection" },
      { id: 2, title: "Milk Cooling Tank" },
      { id: 3, title: "Centrifugal Clarifier" },
      { id: 4, title: "Standardization Tank" },
      { id: 5, title: "Homogenizer" },
      { id: 6, title: "Pasteurizer" },
      { id: 7, title: "Holding Tube" },
      { id: 8, title: "Cooling" },
      { id: 9, title: "Pasteurized Milk Storage Tank" },
      { id: 10, title: "Milk Filtration System" },
      { id: 11, title: "Final Product Storage Tank" },
      { id: 12, title: "Milk Filling Machine" },
      { id: 13, title: "Cap Sealing Machine" },
      { id: 14, title: "Date Coding Machine" },
      { id: 15, title: "Check Weigher" },
      { id: 16, title: "Shrink Wrapping Machine" },
      { id: 17, title: "Carton Packing" },
      { id: 18, title: "Palletizing (Optional)" }
    ]
  },
  {
    id: "CurdPlantDetailPage",
    title: "Curd Plant",
    desc: "End-to-end curd processing line with advanced inoculation, incubation, and curd setting technologies for consistent texture and taste.",
    prefix: "curd",
    steps: [
      { id: 1, title: "Receiving Tank" },
      { id: 2, title: "Milk Filtration & Pre Heating" },
      { id: 3, title: "Pasteurizer (HTST)" },
      { id: 4, title: "Holding Tank" },
      { id: 5, title: "Cooling Tank" },
      { id: 6, title: "Inoculation Tank" },
      { id: 7, title: "Incubation Tank" },
      { id: 8, title: "Curd Setting Tank" },
      { id: 9, title: "Curd Cutting & Stirring Unit" },
      { id: 10, title: "Whey Drainage System" },
      { id: 11, title: "Curd Cooling System" },
      { id: 12, title: "Cold Storage Tank" },
      { id: 13, title: "Positive Displacement Pump" },
      { id: 14, title: "Curd Filling Machine" },
      { id: 15, title: "Sealing Machine" },
      { id: 16, title: "Check Weigher" },
      { id: 17, title: "Labeling Machine" },
      { id: 18, title: "Date Coding Machine" },
      { id: 19, title: "Packing & Case Packing" },
      { id: 20, title: "Palletizing System" },
      { id: 21, title: "Finished Product Storage" }
    ]
  },
  {
    id: "LassiProcessingPlantDetailPage",
    title: "Fully Automated Lassi Processing Plant",
    desc: "Advanced turnkey plant for Lassi production featuring precise blending, fermentation, flavour dosing, and automated shrink packing.",
    prefix: "lassi",
    steps: [
      { id: 1, title: "Milk Reception" },
      { id: 2, title: "Milk Storage Tank" },
      { id: 3, title: "Milk Clarification" },
      { id: 4, title: "Standardization Tank" },
      { id: 5, title: "Pasteurizer" },
      { id: 6, title: "Homogenizer" },
      { id: 7, title: "Cooling Tank" },
      { id: 8, title: "Fermentation Tank" },
      { id: 9, title: "Sugar Syrup / Ingredient Dosing" },
      { id: 10, title: "Flavour Mixing Tank" },
      { id: 11, title: "Aging Tank" },
      { id: 12, title: "Filtration System" },
      { id: 13, title: "Filling Machine" },
      { id: 14, title: "Capping Machine" },
      { id: 15, title: "Labeling Machine" },
      { id: 16, title: "Check Weigher" },
      { id: 17, title: "Shrink Tunnel (Optional)" },
      { id: 18, title: "Carton / Shrink Packing" },
      { id: 19, title: "Finished Product (Lassi)" }
    ]
  }
];

const getSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-plant$/, '').replace(/detailpage$/, '').replace(/^-|-$/g, '');

const baseMachinery = [
  { name: 'Processing Vessel', image: '/turnkey-brochures/images/coffee-processing-gallery/6_filling_packaging.jpg', desc: 'High-quality SS304/SS316 processing vessel.' },
  { name: 'Homogenizer', image: '/turnkey-brochures/images/coffee-processing-gallery/6_filling_packaging.jpg', desc: 'High-pressure homogenization for smooth texture.' },
  { name: 'Filling Machine', image: '/turnkey-brochures/images/coffee-processing-gallery/6_filling_packaging.jpg', desc: 'Accurate volumetric filling system.' }
];

const baseFaqs = [
  { question: "What capacities are available?", answer: "We offer customizable capacities ranging from pilot scale to industrial scale." },
  { question: "Is the plant fully automatic?", answer: "Yes, our plants feature advanced PLC and SCADA automation." }
];

const baseGallery = [
  { src: '/turnkey-brochures/images/coffee-processing-gallery/6_filling_packaging.jpg', caption: 'Plant Overview' },
  { src: '/turnkey-brochures/images/coffee-processing-gallery/5_blending_machine.jpg', caption: 'Processing Section' }
];

plants.forEach(p => {
  let fileContent = templateSrc
    .replace(/__ID__/g, p.id)
    .replace(/__COMPONENT_NAME__/g, p.id)
    .replace(/__TITLE__/g, p.title)
    .replace(/__TITLE_UPPER__/g, p.title.toUpperCase())
    .replace(/__DESC__/g, p.desc)
    .replace(/__PREFIX__/g, p.prefix)
    .replace(/__STEPS__/g, JSON.stringify(p.steps, null, 2))
    .replace(/__MACHINERY__/g, JSON.stringify(baseMachinery, null, 2))
    .replace(/__FAQS__/g, JSON.stringify(baseFaqs, null, 2))
    .replace(/__GALLERY__/g, JSON.stringify(baseGallery, null, 2));

  fs.writeFileSync(path.join(srcDir, p.id + '.jsx'), fileContent);
  fs.writeFileSync(path.join(srcDir, p.id + '.css'), defaultCSS);
  console.log('Generated ' + p.id);
});

// Update App.jsx routes and imports
let appContent = fs.readFileSync(appFile, 'utf8');

let importsToAdd = '';
plants.forEach(p => {
  if (!appContent.includes(p.id)) {
    importsToAdd += 'import ' + p.id + ' from "./pages/TurnkeyProject/components/' + p.id + '";\n';
  }
});

let routesToAdd = '';
plants.forEach(p => {
  let routePath = getSlug(p.title);
  if (p.id === 'PetroleumJellyProcessingDetailPage') routePath = 'petroleum-jelly-processing';
  if (!appContent.includes('path="/turnkey-project/' + routePath + '"')) {
    routesToAdd += '        <Route path="/turnkey-project/' + routePath + '" element={<' + p.id + ' />} />\n';
  }
});

if (importsToAdd) {
  // Try to insert after the last turnkey import block
  const anchor = "import FullyAutomatedFrozenVegetableProcessingPlantDetailPage";
  const regex = new RegExp('(.*?' + anchor + '.*?\\n)');
  if (regex.test(appContent)) {
    appContent = appContent.replace(regex, '$1' + importsToAdd);
  } else {
    // fallback
    appContent = appContent.replace("import TurnkeyDetailPage", importsToAdd + '\nimport TurnkeyDetailPage');
  }
}

if (routesToAdd) {
  // Find <Route path="/turnkey-project/fully-automated-frozen-vegetable-processing-plant" and append after it
  const routeAnchor = '<Route path="/turnkey-project/fully-automated-frozen-vegetable-processing-plant"';
  const regex = new RegExp('(.*?' + routeAnchor.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '.*?\\n)');
  if (regex.test(appContent)) {
    appContent = appContent.replace(regex, '$1' + routesToAdd);
  } else {
    console.log("Could not find route anchor");
  }
}

fs.writeFileSync(appFile, appContent);
console.log("App.jsx updated");
