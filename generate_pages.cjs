const fs = require('fs');
const path = require('path');

const plants = [
  {
    name: 'FullyAutomatedFruitJuiceProcessingPlant',
    title: 'Fully Automated Fruit Juice Processing Plant',
    slug: 'fully-automated-fruit-juice-processing-plant',
    image: 'fruit-juice.jpeg',
    desc: 'Advanced turnkey solution for industrial fruit juice processing, integrating extraction, clarification, pasteurization, and aseptic packaging to produce premium quality juices.',
    steps: ['Washing & Sorting', 'Extraction', 'Filtration', 'Pasteurization', 'Cooling', 'Packaging']
  },
  {
    name: 'FullyAutomaticJellyManufacturingPlant',
    title: 'Fully Automatic Jelly Manufacturing Plant',
    slug: 'fully-automatic-jelly-manufacturing-plant',
    image: 'jelly.jpeg',
    desc: 'Complete automated solution for jelly manufacturing, featuring precise cooking, mixing, depositing, and cooling systems for consistent and high-quality jelly products.',
    steps: ['Ingredient Mixing', 'Cooking & Melting', 'Flavor Dosing', 'Depositing', 'Cooling', 'Demolding & Packing']
  },
  {
    name: 'FullyAutomaticDehydratedGarlicPlant',
    title: 'Fully Automatic Dehydrated Garlic Plant',
    slug: 'fully-automatic-dehydrated-garlic-processing-plant',
    image: 'garlic.jpeg',
    desc: 'End-to-end processing solution for dehydrated garlic, including peeling, slicing, drying, and packing, ensuring maximum flavor retention and extended shelf life.',
    steps: ['Peeling', 'Washing', 'Slicing', 'Dehydration', 'Sorting', 'Packaging']
  },
  {
    name: 'FullyAutomaticVegetableDryingPlant',
    title: 'Fully Automatic Vegetable Drying Plant',
    slug: 'fully-automatic-vegetable-drying-plant',
    image: 'vegetable-drying.jpeg',
    desc: 'High-efficiency vegetable drying line equipped with advanced washing, slicing, blanching, and multi-stage drying technology for premium dehydrated vegetables.',
    steps: ['Washing', 'Slicing/Dicing', 'Blanching', 'Drying', 'Cooling', 'Packaging']
  },
  {
    name: 'FullyAutomatedGaramMasalaProcessingPlant',
    title: 'Fully Automated Garam Masala Processing Plant',
    slug: 'fully-automated-garam-masala-processing-plant',
    image: 'garam-masala.jpeg',
    desc: 'Fully automated processing line for Garam Masala, incorporating roasting, grinding, blending, and automated packaging for authentic aroma and taste.',
    steps: ['Cleaning', 'Roasting', 'Grinding', 'Blending', 'Sifting', 'Packaging']
  },
  {
    name: 'FullyAutomatedFrozenVegetableProcessingPlant',
    title: 'Fully Automated Frozen Vegetable Processing Plant',
    slug: 'fully-automated-frozen-vegetable-processing-plant',
    image: 'frozen-vegetable.jpeg',
    desc: 'State-of-the-art frozen vegetable processing plant featuring IQF technology, blanching, and automated packing for maximum nutrient retention and product quality.',
    steps: ['Washing', 'Blanching', 'Cooling', 'IQF Freezing', 'Weighing', 'Packaging']
  }
];

const componentsDir = path.join(__dirname, 'src/pages/TurnkeyProject/components');

plants.forEach(plant => {
  const jsxPath = path.join(componentsDir, `${plant.name}DetailPage.jsx`);
  const cssPath = path.join(componentsDir, `${plant.name}DetailPage.css`);

  const jsxContent = `import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './${plant.name}DetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
${plant.steps.map((step, index) => `  { id: ${index + 1}, title: '${step}' }`).join(',\n')}
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Primary Processing Equipment',
    image: '/turnkey-brochures/images/${plant.image}',
    desc: 'Advanced equipment for the initial stages of processing.'
  },
  {
    name: 'Secondary Processing Machine',
    image: '/turnkey-brochures/images/${plant.image}',
    desc: 'High-precision machinery for refining and conditioning the product.'
  },
  {
    name: 'Automatic Packaging System',
    image: '/turnkey-brochures/images/${plant.image}',
    desc: 'Automatically weighs, fills, and seals the final product.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacities are available for the ${plant.title}?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Is the plant fully automated?",
    answer: "Yes, the plant features a fully automated processing line with advanced control systems."
  },
  {
    question: "What is the material of construction?",
    answer: "All food-contact parts are made of high-grade stainless steel (SS 304/316) to ensure hygiene and food safety."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/${plant.image}', caption: '${plant.title} Overview' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function ${plant.name}DetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = '${plant.title} | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', '${plant.desc}')
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
    <div className="ifm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="ifm-hero">
        <div className="ifm-hero__overlay" />
        <div className="ifm-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/${plant.image}')\` }} />
        <div className="ifm-hero__content">
          <span className="ifm-hero__badge">
            <span className="ifm-hero__badge-dot" />
            TURNKEY SOLUTION
          </span>
          <h1 className="ifm-hero__title">
            ${plant.title}
          </h1>
          <p className="ifm-hero__subtitle">
            ${plant.desc}
          </p>
          <div className="ifm-hero__actions">
            <a href="#enquiry" className="ifm-btn ifm-btn--primary ifm-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="ifm-section ifm-overview" id="overview" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['overview'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Plant Overview</div>
          <h2 className="ifm-section-title">${plant.title.replace('Plant', '')} <span className="ifm-accent">Plant</span></h2>
          <div className="ifm-overview__grid">
            <div className="ifm-overview__text">
              <p>
                ${plant.desc}
              </p>
              <div className="ifm-overview__features">
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Premium Quality Production</p>
                    <p className="ifm-overview__feature-desc">Consistent and high-quality output.</p>
                  </div>
                </div>
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="ifm-overview__feature-desc">Reduced labor and increased efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ifm-overview__image-wrapper">
              <img src={\`/turnkey-brochures/images/\${plant.image}\`} alt="${plant.title}" className="ifm-overview__image" />
              <div className="ifm-overview__experience-badge">
                <span className="ifm-overview__experience-number">25+</span>
                <span className="ifm-overview__experience-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="ifm-section ifm-process bg-light" id="process" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['process'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Process Flow</div>
          <h2 className="ifm-section-title">How It <span className="ifm-accent">Works</span></h2>
          <p className="ifm-section-desc">
            A streamlined, fully automated process ensuring maximum yield and quality.
          </p>
          <div className="ifm-process__timeline">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="ifm-process__step">
                <div className="ifm-process__step-number">{step.id}</div>
                <div className="ifm-process__step-content">
                  <h3 className="ifm-process__step-title">{step.title}</h3>
                </div>
                {index < PROCESS_STEPS.length - 1 && <div className="ifm-process__step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY ═══ */}
      <section className="ifm-section ifm-machinery" id="machinery" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['machinery'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Core Machinery</div>
          <h2 className="ifm-section-title">Advanced <span className="ifm-accent">Equipment</span></h2>
          <div className="ifm-machinery__grid">
            {MACHINERY_LIST.map((machine, idx) => (
              <div key={idx} className="ifm-machinery__card">
                <div className="ifm-machinery__card-img-wrapper">
                  <img src={machine.image} alt={machine.name} className="ifm-machinery__card-img" />
                </div>
                <div className="ifm-machinery__card-content">
                  <h3 className="ifm-machinery__card-title">{machine.name}</h3>
                  <p className="ifm-machinery__card-desc">{machine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSalvin />

      {/* ═══ GALLERY & FAQS ═══ */}
      <section className="ifm-section ifm-bottom bg-light" id="gallery-faq" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['gallery-faq'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-bottom__grid">
            
            {/* Gallery */}
            <div className="ifm-gallery-wrapper">
              <div className="ifm-section-badge">Plant Gallery</div>
              <h2 className="ifm-section-title">Visual <span className="ifm-accent">Tour</span></h2>
              <div className="ifm-gallery">
                <img 
                  src={GALLERY_IMAGES[galleryIndex].src} 
                  alt={GALLERY_IMAGES[galleryIndex].caption} 
                  className="ifm-gallery__main-img"
                />
                <div className="ifm-gallery__caption">
                  {GALLERY_IMAGES[galleryIndex].caption}
                </div>
                <div className="ifm-gallery__indicators">
                  {GALLERY_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      className={\`ifm-gallery__indicator \${idx === galleryIndex ? 'active' : ''}\`}
                      onClick={() => setGalleryIndex(idx)}
                      aria-label={\`Go to slide \${idx + 1}\`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="ifm-faq-wrapper">
              <div className="ifm-section-badge">Support</div>
              <h2 className="ifm-section-title">Common <span className="ifm-accent">Questions</span></h2>
              <div className="ifm-faq-list">
                {FAQS.map((faq, idx) => {
                  const isActive = activeFaq === idx
                  return (
                    <div 
                      key={idx} 
                      className={\`ifm-faq-item \${isActive ? 'active' : ''}\`}
                    >
                      <button 
                        className="ifm-faq-question"
                        onClick={() => setActiveFaq(isActive ? null : idx)}
                      >
                        {faq.question}
                        <span className="ifm-faq-icon">{isActive ? '−' : '+'}</span>
                      </button>
                      <div className="ifm-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
`;

  // Use the same CSS as IndustrialFlourMillingDetailPage.css by reading it and writing it,
  // or just import the existing one. Wait, we'll just read IndustrialFlourMillingDetailPage.css and write it to the new name.
  const sourceCssPath = path.join(componentsDir, 'IndustrialFlourMillingDetailPage.css');
  const cssContent = fs.readFileSync(sourceCssPath, 'utf8');

  fs.writeFileSync(jsxPath, jsxContent);
  fs.writeFileSync(cssPath, cssContent);
});

console.log('Created components and CSS.');
