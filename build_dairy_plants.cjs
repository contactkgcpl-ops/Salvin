const fs = require('fs');
const path = require('path');

const template = (plant) => `import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = ${JSON.stringify(plant.processSteps, null, 2)};

/* ─── Machinery Used ─── */
const MACHINERY_LIST = ${JSON.stringify(plant.machineryList, null, 2)};

/* ─── FAQs ─── */
const FAQS = ${JSON.stringify(plant.faqs, null, 2)};

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = ${JSON.stringify(plant.galleryImages, null, 2)};

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function ${plant.componentName}() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
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
        <div className="rcp-hero__bg" style={{ backgroundImage: \`url('\${GALLERY_IMAGES[0].src}')\` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            ${plant.heroTitle}
          </h1>
          <p className="rcp-hero__subtitle">
            ${plant.heroSubtitle}
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
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['overview'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Processing <span className="rcp-accent">Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              ${plant.overviewParagraphs.map(p => `<p>${p}</p>`).join('\n              ')}
              <div className="rcp-overview__features">
                {/* Feature 1 */}
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">High Yield</p>
                    <p className="rcp-overview__feature-desc">Maximum product extraction</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Hygienic Process</p>
                    <p className="rcp-overview__feature-desc">SS316 food-grade contact parts</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Perfect Texture</p>
                    <p className="rcp-overview__feature-desc">Advanced refining tech</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">PLC Control</p>
                    <p className="rcp-overview__feature-desc">Fully automatic operation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src={GALLERY_IMAGES[2].src} alt="${plant.heroTitle} Overview" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEO GUIDE ═══ */}
      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['seo-guide'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Comprehensive Guide</div>
          <h2 className="rcp-section-title" dangerouslySetInnerHTML={{ __html: \`${plant.seoTitle}\` }} />
          <p className="rcp-section-subtitle">${plant.seoSubtitle}</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start This Business?</h3>
              <ul>
                ${plant.seoBlock1.map(li => `<li>${li}</li>`).join('\n                ')}
              </ul>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Do We Make It?</h3>
              <ul>
                ${plant.seoBlock2.map(li => `<li>${li}</li>`).join('\n                ')}
              </ul>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Machine?</h3>
              <ul>
                ${plant.seoBlock3.map(li => `<li>${li}</li>`).join('\n                ')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['process-flow'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Workflow</span></h2>
          <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw materials into premium-quality packaged product.</p>

          <div className="rcp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="rcp-process-card">
                  <div className="rcp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M12 12l9-5" />
                        <path d="M12 12L3 7" />
                      </svg>
                    )}
                  </div>
                  <div className="rcp-process-card__label" style={{ minWidth: '100px' }}>{step.title}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['machinery'] ? 'rcp-animate--in' : ''}\`}>
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

      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['faq'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our ${plant.heroTitle}.</p>

          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={\`rcp-faq__item \${isOpen ? 'rcp-faq__item--open' : ''}\`}>
                  <button
                    className="rcp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      <section className="rcp-section rcp-gallery" id="gallery" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['gallery'] ? 'rcp-animate--in' : ''}\`}>
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
                  className={\`rcp-gallery__thumb \${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}\`}
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

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="${plant.componentName}" />

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['enquiry'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your ${plant.heroTitle}?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="rcp-cta__actions">
              <a
                href={\`https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20${plant.heroTitle}.%20Please%20share%20details.\`}
                target="_blank"
                rel="noopener noreferrer"
                className="rcp-btn rcp-btn--primary rcp-btn--lg"
              >
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
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
        <NavLink to="/turnkey-projects" className="rcp-btn rcp-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
`

const plants = [
  {
    componentName: "PasteurizedMilkPlantDetailPage",
    heroTitle: "Fully Automatic Pasteurized Milk Plant",
    heroSubtitle: "Advanced turnkey milk pasteurization and homogenization plant for fresh, safe, and longer shelf-life dairy products.",
    processSteps: [
      { id: 1, title: "Raw Milk Reception" },
      { id: 2, title: "Clarification" },
      { id: 3, title: "Standardization" },
      { id: 4, title: "Homogenization" },
      { id: 5, title: "Pasteurization" },
      { id: 6, title: "Cooling & Storage" },
      { id: 7, title: "Pouch/Bottle Filling" }
    ],
    machineryList: [
      { name: "Milk Reception System", desc: "For weighing and receiving raw milk.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Milk Clarifier", desc: "Removes impurities and somatic cells.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Cream Separator", desc: "Standardizes fat content in milk.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "High-Pressure Homogenizer", desc: "Prevents cream separation for smooth texture.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Pasteurizer (HTST)", desc: "Heat treats milk to eliminate pathogens.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Automatic Pouch Packing", desc: "High-speed hygienic pouch filling.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "What capacity can this milk plant handle?", answer: "Our Fully Automatic Pasteurized Milk Plants are customizable, handling capacities from 500 LPH to 10,000+ LPH." },
      { question: "Does the system maintain the natural flavor of milk?", answer: "Yes, our precise HTST pasteurization ensures maximum pathogen kill while preserving the natural taste and nutritional value of the milk." },
      { question: "Is the homogenizer necessary?", answer: "Yes, homogenization breaks down fat globules, preventing cream from rising to the top and ensuring a consistent, rich texture." },
      { question: "How is the plant cleaned?", answer: "It includes an integrated CIP (Clean-In-Place) system for automated, thorough cleaning without dismantling equipment." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Milk Reception & Chilling" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Standardization & Pasteurization" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Milk Homogenization" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Pasteurized Milk Storage" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Automatic Milk Filling" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Crate Packing & Dispatch" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automatic Pasteurized Milk Plant</strong> offers a state-of-the-art solution for processing raw farm milk into safe, consumer-ready packaged milk. Pasteurized milk is a daily essential, guaranteeing a continuous, high-volume market demand.",
      "The process begins with receiving and chilling raw milk. It is then clarified, standardized to the exact fat requirement (Full Cream, Toned, or Double Toned), and homogenized. Our advanced HTST (High Temperature Short Time) pasteurization ensures all harmful bacteria are eliminated.",
      "Finally, the pasteurized milk is rapidly cooled and sent to the hygienic automatic pouch or bottle filling stations. The complete end-to-end process is PLC controlled for ultimate efficiency and product safety."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Pasteurized Milk Production</span>",
    seoSubtitle: "How to set up a high-quality fresh milk processing line.",
    seoBlock1: [
      "<strong>Daily Necessity:</strong> Milk is a staple diet consumed every day, ensuring consistent business.",
      "<strong>Health & Safety:</strong> Pasteurized milk is safer and lasts longer than raw milk, preferred by consumers.",
      "<strong>Multiple Products:</strong> You can produce Full Cream, Toned, and Double Toned milk from the same plant."
    ],
    seoBlock2: [
      "<strong>Step 1: Collection & Chilling.</strong> Raw milk is collected and quickly cooled to maintain freshness.",
      "<strong>Step 2: Processing.</strong> The milk is cleaned (clarified) and pasteurized to kill harmful germs.",
      "<strong>Step 3: Packaging.</strong> Automatic machines pack the milk into hygienic pouches or bottles."
    ],
    seoBlock3: [
      "<strong>Maximum Freshness:</strong> Our precise cooling systems ensure the milk stays fresh longer.",
      "<strong>Energy Efficient:</strong> Our regenerative heating system saves up to 80% on steam and cooling energy.",
      "<strong>Sanitary Design:</strong> Complete SS316 food-grade construction ensures 100% hygiene."
    ]
  },
  {
    componentName: "ButtermilkProcessingPlantDetailPage",
    heroTitle: "Fully Automated Buttermilk Processing Plant",
    heroSubtitle: "Complete processing line for refreshing, spiced, and packaged buttermilk (Chaas).",
    processSteps: [
      { id: 1, title: "Curd (Dahi) Making" },
      { id: 2, title: "Water Addition" },
      { id: 3, title: "Spice/Flavor Mixing" },
      { id: 4, title: "Blending" },
      { id: 5, title: "Pasteurization" },
      { id: 6, title: "Cooling" },
      { id: 7, title: "Pouch/Cup Filling" }
    ],
    machineryList: [
      { name: "Incubation Tank", desc: "For fermenting milk into curd.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Water & Curd Blending Tank", desc: "Precision blending of curd and water.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Spice Doser", desc: "Automated dosing of Jeera and spices.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Inline Homogenizer", desc: "Ensures spices and water do not separate.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Chiller System", desc: "Rapid cooling of the final buttermilk.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Automatic Pouch FFS Machine", desc: "Form, fill, and seal pouches.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "Can we use the same plant for plain and spiced buttermilk?", answer: "Yes, our automated dosing systems allow you to seamlessly switch between plain and spiced (Jeera/Masala) Chaas." },
      { question: "How do you prevent spice settling?", answer: "We use continuous agitation tanks and specialized stabilizers/homogenization to keep the spices evenly suspended." },
      { question: "What is the shelf life of the packed buttermilk?", answer: "Properly processed and packed buttermilk in our plant can achieve a shelf life of up to 15-20 days under refrigeration." },
      { question: "Do you supply pouch packing machines?", answer: "Yes, we integrate high-speed pouch FFS (Form, Fill, Seal) machines or bottle fillers directly into the line." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Curd Incubation" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Blending & Mixing" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Spice Dosing Unit" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Chilling Plant" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Pouch Packaging" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Cold Storage" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automated Buttermilk (Chaas) Processing Plant</strong> is optimized for producing high-quality, refreshing summer beverages. Buttermilk is a highly popular, traditional, and healthy drink with massive market potential.",
      "The process starts with perfectly fermented curd (Dahi). It is transferred to blending tanks where purified water and specific spices (like roasted cumin and salt) are added. The mixture is intensely blended to prevent any water separation.",
      "Our automated lines ensure that the final Chaas is chilled precisely and packed into leak-proof pouches or bottles, preserving its refreshing taste and extending its shelf life."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Buttermilk (Chaas) Production</span>",
    seoSubtitle: "How to mass-produce refreshing spiced buttermilk.",
    seoBlock1: [
      "<strong>High Summer Demand:</strong> Chaas is the most consumed cooling drink during hot weather.",
      "<strong>Low Production Cost:</strong> With curd and water as main ingredients, profit margins are excellent.",
      "<strong>Healthy Alternative:</strong> Consumers prefer Chaas over sugary carbonated drinks."
    ],
    seoBlock2: [
      "<strong>Step 1: Fermentation.</strong> Milk is converted into high-quality curd.",
      "<strong>Step 2: Mixing & Spicing.</strong> Water, salt, and spices are blended smoothly.",
      "<strong>Step 3: Packaging.</strong> The chilled drink is packed into attractive pouches or bottles."
    ],
    seoBlock3: [
      "<strong>Perfect Consistency:</strong> Our blenders ensure water and curd do not separate.",
      "<strong>Hygienic Automation:</strong> Fully closed pipelines prevent contamination.",
      "<strong>Versatile Output:</strong> Easily switch between Lassi and Buttermilk production."
    ]
  },
  {
    componentName: "PaneerProcessingPlantDetailPage",
    heroTitle: "Fully Automated Paneer Processing Plant",
    heroSubtitle: "Modern production line for soft, hygienic, and uniform paneer (cottage cheese).",
    processSteps: [
      { id: 1, title: "Milk Standardization" },
      { id: 2, title: "Heating & Coagulation" },
      { id: 3, title: "Whey Draining" },
      { id: 4, title: "Hooping & Pressing" },
      { id: 5, title: "Cooling & Chilling" },
      { id: 6, title: "Cutting" },
      { id: 7, title: "Vacuum Packing" }
    ],
    machineryList: [
      { name: "Paneer Vat (Coagulation Tank)", desc: "For precise heating and acid dosing.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Paneer Hoops", desc: "SS304 moulds for shaping paneer blocks.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Pneumatic Paneer Press", desc: "Applies uniform pressure to expel whey.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Chilling Vat", desc: "Rapidly cools paneer blocks to set the texture.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Paneer Cutting Machine", desc: "Cuts blocks into exact desired sizes.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Vacuum Packaging Machine", desc: "Seals paneer for extended shelf life.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "How do you ensure soft paneer?", answer: "By precisely controlling the coagulation temperature and the concentration of the coagulant (citric acid), we achieve the perfect moisture retention for soft paneer." },
      { question: "What is the yield of paneer?", answer: "Typically, 100 liters of buffalo milk (6% fat) yields about 20-22 kg of paneer." },
      { question: "Can the whey be recovered?", answer: "Yes, our system effectively drains and collects whey, which can be further processed for whey beverages or protein powder." },
      { question: "How long does vacuum packed paneer last?", answer: "Vacuum packed paneer stored at 4°C can easily last up to 21-30 days." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Milk Heating & Coagulation" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Whey Draining" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Pneumatic Pressing" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Chilling Vat" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Automatic Cutting" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Vacuum Packaging" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automated Paneer Processing Plant</strong> delivers high-yield, perfectly textured paneer (Indian Cottage Cheese) with maximum hygiene. Paneer is a premium dairy product with ever-growing demand in retail and HORECA sectors.",
      "The process involves heating standardized milk to around 90°C, followed by precise coagulation using citric acid or sour whey. Our specialized Paneer Vats ensure gentle mixing to prevent shattering of the delicate curd.",
      "The curd is then transferred to hoops and pressed using our advanced pneumatic presses to expel excess whey. Finally, the paneer blocks are chilled in cold water, automatically cut to size, and vacuum-packed for a long shelf life."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Paneer Production</span>",
    seoSubtitle: "How to make soft, hygienic commercial paneer.",
    seoBlock1: [
      "<strong>High Value Product:</strong> Paneer fetches premium prices in the dairy market.",
      "<strong>Massive Demand:</strong> Used daily in Indian households, restaurants, and catering.",
      "<strong>Great ROI:</strong> High yield and profit margins make it a lucrative business."
    ],
    seoBlock2: [
      "<strong>Step 1: Curdling.</strong> Hot milk is carefully curdled to separate solids from whey.",
      "<strong>Step 2: Pressing.</strong> The solids are pressed into solid blocks using pneumatic machines.",
      "<strong>Step 3: Vacuum Packing.</strong> The blocks are chilled, cut, and sealed in air-tight packs."
    ],
    seoBlock3: [
      "<strong>Uniform Texture:</strong> Our pneumatic presses ensure perfectly even blocks.",
      "<strong>Maximum Yield:</strong> Minimal fat loss in whey means more paneer per liter of milk.",
      "<strong>High Hygiene:</strong> No human touch required during the critical forming steps."
    ]
  },
  {
    componentName: "CheesePlantDetailPage",
    heroTitle: "Fully Automatic Cheese Plant",
    heroSubtitle: "Advanced cheese making equipment for Cheddar, Mozzarella, and Processed Cheese.",
    processSteps: [
      { id: 1, title: "Milk Pasteurization" },
      { id: 2, title: "Culture Addition" },
      { id: 3, title: "Renneting & Coagulation" },
      { id: 4, title: "Curd Cutting & Cooking" },
      { id: 5, title: "Whey Separation" },
      { id: 6, title: "Pressing / Stretching" },
      { id: 7, title: "Brining & Aging" }
    ],
    machineryList: [
      { name: "Cheese Vat", desc: "Double-jacketed vat with special cutting knives.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Curd Mill", desc: "Milling cheddar curd for salting.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Mozzarella Cooker-Stretcher", desc: "Provides the elastic texture for pizza cheese.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Cheese Press", desc: "Applies high pressure for hard cheese blocks.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Brine Tanks", desc: "For salting and flavor development.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Vacuum Sealer", desc: "Protects cheese during aging.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "Can we make both Cheddar and Mozzarella?", answer: "Yes, our modular plants can be equipped with add-ons like a cooker-stretcher to produce both hard cheeses and stretchy pasta filata (Mozzarella) cheeses." },
      { question: "How do you control the moisture in the cheese?", answer: "Moisture is controlled through precise cutting of the curd in our automated Cheese Vats and varying the cooking temperature and pressing time." },
      { question: "Do you supply cold rooms for aging?", answer: "Yes, we provide complete turnkey solutions including temperature and humidity-controlled ripening rooms." },
      { question: "Is the plant suitable for processed cheese?", answer: "Absolutely, we also supply processed cheese kettles and packaging lines." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Cheese Vat Processing" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Curd Cutting" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Whey Draining" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Mozzarella Stretching" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Cheese Pressing" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Cheese Ripening Room" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automatic Cheese Plant</strong> provides European-standard technology for manufacturing a wide variety of cheeses, from pizza Mozzarella to aged Cheddar. The fast-food boom has skyrocketed the demand for quality cheese globally.",
      "The art of cheese making is perfected with our advanced Cheese Vats equipped with planetary cutting knives that ensure uniform curd size without fat loss. Following coagulation with rennet and culture, the curd is cooked and separated from the whey.",
      "For Mozzarella, the curd passes through a specialized cooker-stretcher. For Cheddar, it is milled, salted, and pressed. The final blocks are brined and vacuum-sealed, ready for the market or the ripening chamber."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Cheese Production</span>",
    seoSubtitle: "How to manufacture premium Mozzarella and Cheddar.",
    seoBlock1: [
      "<strong>Fast Food Boom:</strong> Pizzas and burgers demand massive quantities of cheese daily.",
      "<strong>Premium Product:</strong> Cheese commands a very high market price and excellent margins.",
      "<strong>Export Potential:</strong> Quality cheese has great export value."
    ],
    seoBlock2: [
      "<strong>Step 1: Coagulation.</strong> Milk is treated with culture and rennet to form a solid gel.",
      "<strong>Step 2: Cutting & Cooking.</strong> The gel is cut into small cubes and gently cooked.",
      "<strong>Step 3: Pressing & Aging.</strong> Curds are pressed into blocks and aged to develop flavor."
    ],
    seoBlock3: [
      "<strong>Versatile Vats:</strong> Make multiple types of cheese with our programmable vats.",
      "<strong>Minimal Fat Loss:</strong> Specially designed knives ensure higher cheese yield.",
      "<strong>Complete Turnkey:</strong> We provide everything from vats to ripening cold rooms."
    ]
  },
  {
    componentName: "GheePlantDetailPage",
    heroTitle: "Fully Automatic Ghee Plant",
    heroSubtitle: "Traditional flavor meets modern technology for continuous, pure ghee production.",
    processSteps: [
      { id: 1, title: "Cream/Butter Melting" },
      { id: 2, title: "Pre-Heating" },
      { id: 3, title: "Ghee Boiling" },
      { id: 4, title: "Moisture Evaporation" },
      { id: 5, title: "Clarification" },
      { id: 6, title: "Cooling & Granulation" },
      { id: 7, title: "Tin/Jar Filling" }
    ],
    machineryList: [
      { name: "Butter Melting Vat", desc: "Melts white butter or cream efficiently.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Ghee Boiler", desc: "Steam jacketed kettle with agitator for boiling.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Ghee Clarifier", desc: "Centrifugal separation of burnt solids (Ghee residue).", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Ghee Settling Tank", desc: "Allows fine particles to settle for crystal clear ghee.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Granulation Tank", desc: "Controlled cooling to develop traditional 'Danedar' texture.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Automatic Filling Line", desc: "Fills hot ghee into tins or PET jars.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "How do you achieve the 'Danedar' (granular) texture?", answer: "The granular texture is achieved by carefully controlling the cooling rate in our specialized granulation tanks before packing." },
      { question: "Can the plant process both cream and butter into ghee?", answer: "Yes, our ghee boilers are designed to handle both direct cream (creamery method) and white butter methods." },
      { question: "How is the burnt residue separated?", answer: "We use advanced centrifugal Ghee Clarifiers that instantly remove all solid residues, yielding perfectly clear, golden ghee." },
      { question: "What heating source is required?", answer: "Our ghee boilers use industrial steam or thermic fluid heaters to provide the high, even temperatures required for proper cooking." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Butter Melting" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Ghee Boiling Kettle" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Ghee Clarifier" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Granulation Tank" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Tin Filling Machine" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Jar Capping & Sealing" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automatic Ghee Plant</strong> combines the authentic, traditional aroma of Indian Ghee with highly efficient, sanitary modern engineering. Pure ghee is a high-value staple with massive domestic and export demand.",
      "The production starts by melting cream or white butter in our specialized vats. The liquid is then transferred to the Ghee Boiler, where it is slowly cooked using steam to evaporate all moisture and develop the rich, nutty flavor.",
      "The cooked ghee is passed through a high-speed centrifugal clarifier to remove all burnt non-fat solids instantly. Finally, it undergoes a controlled cooling process to develop the much-loved granular ('Danedar') texture before being automatically packed."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Ghee Production</span>",
    seoSubtitle: "How to manufacture pure, authentic 'Danedar' Ghee.",
    seoBlock1: [
      "<strong>Cultural Staple:</strong> Ghee is essential in Indian cooking, sweets, and religious rituals.",
      "<strong>High Shelf Life:</strong> Pure ghee has an excellent shelf life without refrigeration.",
      "<strong>Export Demand:</strong> The global market for clarified butter is expanding rapidly."
    ],
    seoBlock2: [
      "<strong>Step 1: Boiling.</strong> Butter or cream is heated slowly to evaporate all water content.",
      "<strong>Step 2: Clarification.</strong> The burnt milk solids are removed using a centrifuge machine.",
      "<strong>Step 3: Granulation & Packing.</strong> The clear ghee is cooled carefully to form granules, then packed."
    ],
    seoBlock3: [
      "<strong>Authentic Taste:</strong> Our kettles are designed to perfectly cook the ghee without burning.",
      "<strong>Crystal Clear Ghee:</strong> Centrifugal clarifiers guarantee zero residue in the final product.",
      "<strong>Energy Efficient:</strong> Heavily insulated steam jackets minimize heat loss."
    ]
  },
  {
    componentName: "ButterProcessingPlantDetailPage",
    heroTitle: "Fully Automated Butter Processing Plant",
    heroSubtitle: "Continuous churning systems for high-quality table butter and white butter.",
    processSteps: [
      { id: 1, title: "Cream Separation" },
      { id: 2, title: "Cream Pasteurization" },
      { id: 3, title: "Aging & Ripening" },
      { id: 4, title: "Butter Churning" },
      { id: 5, title: "Buttermilk Draining" },
      { id: 6, title: "Salting & Working" },
      { id: 7, title: "Block/Foil Packing" }
    ],
    machineryList: [
      { name: "Cream Separator", desc: "Extracts fat from raw milk.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Cream Aging Vat", desc: "Cools and ages cream to crystallize fat.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Continuous Butter Churn", desc: "Turns cream into butter granules continuously.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Butter Trolley/Pump", desc: "Transfers the heavy butter mass.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Butter Extruder", desc: "Forms butter into continuous shapes.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Foil Wrapping Machine", desc: "Wraps 100g/500g butter blocks in foil.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "What is the difference between batch and continuous churning?", answer: "Batch churns process a fixed amount at a time, ideal for smaller plants. Continuous churns process cream non-stop into butter, perfect for high-volume commercial production." },
      { question: "How do you make salted yellow butter?", answer: "We add precise salt dosing and natural coloring (annatto) during the 'working' phase in the churn to produce standard table butter." },
      { question: "Can the remaining buttermilk be used?", answer: "Yes, the sweet buttermilk drained during churning is a valuable byproduct that can be dried into powder or used in other beverages." },
      { question: "How is the butter packed?", answer: "We supply automatic extrusion and foil-wrapping machines that precisely portion and pack the butter." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Cream Separation" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Cream Aging Vats" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Butter Churning" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Butter Extrusion" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Foil Wrapping" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Carton Packaging" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automated Butter Processing Plant</strong> is engineered to convert fresh cream into premium, spreadable table butter or white cooking butter with maximum efficiency.",
      "The process begins with separating high-fat cream from milk. The cream is pasteurized, cooled, and aged in special vats to ensure the fat crystallizes properly. It is then pumped into a butter churn (batch or continuous).",
      "During churning, the cream phase-inverts into solid butter granules and liquid buttermilk. The buttermilk is drained, and the butter is 'worked' (kneaded) with salt to achieve a smooth, moisture-controlled texture before being automatically wrapped in foil."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Butter Production</span>",
    seoSubtitle: "How to mass-produce smooth, delicious table butter.",
    seoBlock1: [
      "<strong>High Value Fat:</strong> Butter is one of the most profitable dairy derivatives.",
      "<strong>Bakery Demand:</strong> Massive demand from the commercial baking and confectionery sectors.",
      "<strong>Long Shelf Life:</strong> Frozen butter blocks can be stored for months."
    ],
    seoBlock2: [
      "<strong>Step 1: Cream Aging.</strong> Cream is chilled overnight to solidify the fat droplets.",
      "<strong>Step 2: Churning.</strong> The cream is beaten until the fat clumps together into butter.",
      "<strong>Step 3: Kneading & Packing.</strong> The butter is squeezed to remove water, salted, and wrapped."
    ],
    seoBlock3: [
      "<strong>Continuous Production:</strong> Our continuous churns save time and labor.",
      "<strong>Perfect Moisture Control:</strong> Ensure your butter meets strict legal moisture limits (max 16%).",
      "<strong>Hygienic Wrapping:</strong> Touch-free automated foil wrapping guarantees safety."
    ]
  },
  {
    componentName: "IceCreamProcessingPlantDetailPage",
    heroTitle: "Fully Automatic Ice Cream Processing Plant",
    heroSubtitle: "Complete mix preparation, aging, continuous freezing, and packaging solutions for premium ice cream.",
    processSteps: [
      { id: 1, title: "Mix Preparation" },
      { id: 2, title: "Homogenization" },
      { id: 3, title: "Pasteurization" },
      { id: 4, title: "Aging" },
      { id: 5, title: "Continuous Freezing" },
      { id: 6, title: "Fruit/Nut Feeding" },
      { id: 7, title: "Filling & Hardening" }
    ],
    machineryList: [
      { name: "Ice Cream Mix Plant", desc: "Skid-mounted mixing, heating, and homogenizing unit.", image: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg" },
      { name: "Aging Vats", desc: "Chilled tanks to let the mix rest and hydrate.", image: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg" },
      { name: "Continuous Freezer", desc: "Whips air (overrun) and freezes the mix instantly.", image: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg" },
      { name: "Fruit Feeder", desc: "Injects nuts, choco chips, and fruits into the frozen mix.", image: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg" },
      { name: "Rotary Cone/Cup Filler", desc: "Automatically fills and caps cones and cups.", image: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg" },
      { name: "Hardening Tunnel", desc: "Deep freezes the product at -30°C to lock the texture.", image: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg" }
    ],
    faqs: [
      { question: "What is 'overrun' and can you control it?", answer: "Overrun is the air whipped into ice cream, which gives it a soft texture. Our Continuous Freezers allow you to precisely control overrun from 30% up to 120%." },
      { question: "How do you add nuts and chocolate chips?", answer: "We use a specialized inline Fruit Feeder that gently folds solid inclusions into the semi-frozen ice cream without crushing them." },
      { question: "Do you supply stick ice cream (candy) machines?", answer: "Yes, we supply fully automatic rotary and linear stick lines with brine freezing for ice candies and chocobars." },
      { question: "Why is the aging vat necessary?", answer: "Aging the mix at 4°C for 4-12 hours allows the stabilizers to hydrate and fat to crystallize, resulting in a much smoother final ice cream." }
    ],
    galleryImages: [
      { src: "/turnkey-brochures/images/lassi-gallery/1_reception.jpg", caption: "Mix Preparation Unit" },
      { src: "/turnkey-brochures/images/lassi-gallery/2_pasteurization.jpg", caption: "Ice Cream Aging Vats" },
      { src: "/turnkey-brochures/images/lassi-gallery/3_blending.jpg", caption: "Continuous Freezing" },
      { src: "/turnkey-brochures/images/lassi-gallery/4_cooling.jpg", caption: "Fruit & Nut Feeding" },
      { src: "/turnkey-brochures/images/lassi-gallery/5_filling.jpg", caption: "Cup & Cone Filling" },
      { src: "/turnkey-brochures/images/lassi-gallery/6_packing.jpg", caption: "Hardening Tunnel" }
    ],
    overviewParagraphs: [
      "<strong>Salvin Industries' Fully Automatic Ice Cream Processing Plant</strong> offers world-class equipment to create smooth, creamy, and delightful ice cream products. The dessert market is highly lucrative and rapidly expanding.",
      "The process starts with preparing the 'Mix'—blending milk, cream, sugar, and stabilizers. This mix is homogenized for a silky texture and pasteurized for safety. It is then cooled and 'aged' in special vats to enhance the texture.",
      "The aged mix is pumped into a Continuous Freezer, where it is simultaneously frozen and whipped with air. Inclusions like nuts are added, and the soft ice cream is filled into cups, cones, or family packs, before passing through a -30°C Hardening Tunnel to lock in the shape and creaminess."
    ],
    seoTitle: "A Simple Guide to <span className='rcp-accent'>Ice Cream Production</span>",
    seoSubtitle: "How to manufacture commercial premium ice cream.",
    seoBlock1: [
      "<strong>High Profit Margins:</strong> 'Overrun' (adding air) significantly increases volume and profitability.",
      "<strong>Endless Varieties:</strong> You can create thousands of flavors, cups, cones, and sticks.",
      "<strong>All-Season Demand:</strong> Ice cream is no longer just a summer treat; it's consumed year-round."
    ],
    seoBlock2: [
      "<strong>Step 1: Mix Preparation.</strong> Ingredients are blended, heated, and homogenized into a liquid base.",
      "<strong>Step 2: Freezing & Whipping.</strong> The base is chilled rapidly while air is whipped in for softness.",
      "<strong>Step 3: Hardening.</strong> Packed ice cream is deep-frozen to maintain its smooth texture."
    ],
    seoBlock3: [
      "<strong>Precision Overrun:</strong> Our freezers guarantee exact air incorporation for consistent texture.",
      "<strong>Compact Skid Mounts:</strong> Mix plants are pre-assembled on skids for easy installation.",
      "<strong>Versatile Filling Lines:</strong> Rotary fillers handle multiple packaging formats on a single machine."
    ]
  }
];

plants.forEach(plant => {
  const content = template(plant);
  const p = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', plant.componentName + '.jsx');
  fs.writeFileSync(p, content);
  console.log('Created: ' + p);
});
