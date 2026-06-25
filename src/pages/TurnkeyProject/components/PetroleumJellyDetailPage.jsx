import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PetroleumJellyDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Paraffin Wax Melting' },
  { id: 2, title: 'Mineral Oil Dosing' },
  { id: 3, title: 'Homogenization Blending' },
  { id: 4, title: 'Vacuum Deaeration' },
  { id: 5, title: 'Micro Filtration' },
  { id: 6, title: 'Hot Liquid Transfer' },
  { id: 7, title: 'Precision Jar Filling' },
  { id: 8, title: 'Cooling Tunnel Settling' },
  { id: 9, title: 'Induction Foil Sealing' },
  { id: 10, title: 'Capping & Labeling' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Wax Melting Vessel',
    image: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.png',
    desc: 'Steam-jacketed vessel with slow agitator for melting paraffin block bases.'
  },
  {
    name: 'Vacuum Emulsifier Tank',
    image: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.png',
    desc: 'High-shear homogenizing mixer with vacuum pump and contra-rotation scrapers.'
  },
  {
    name: 'Jacketed Filtration Skid',
    image: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.png',
    desc: 'Heated cartridge filter housing to clarify raw molten petroleum jelly.'
  },
  {
    name: 'Molten Jelly Filler',
    image: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.png',
    desc: 'Heat-traced volumetric dosing machine with anti-drip filling nozzles.'
  },
  {
    name: 'Cooling Conveyor Tunnel',
    image: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.png',
    desc: 'Multi-pass insulated tunnel circulating chilled air for jelly setting.'
  },
  {
    name: 'Induction Bottle Sealer',
    image: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.png',
    desc: 'Automatic electromagnetic induction sealer applying lids to jars.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the processing capacity of the Petroleum Jelly Manufacturing Plant?",
    answer: "Our plants are available from 500 Ltr to 3,000 Ltr batch capacities and can be customized based on production requirements."
  },
  {
    question: "Is the plant compliant with GMP standards?",
    answer: "Yes, our lines are engineered to meet FDA and pharmaceutical manufacturing norms with full food-grade and pharma-grade hygiene compliance."
  },
  {
    question: "How does the plant prevent wax crystallization?",
    answer: "Fully insulated and steam-heated jacketed pipelines maintain product temperature and prevent solidifying during transfer."
  },
  {
    question: "Does SALVIN provide installation and support?",
    answer: "Yes. SALVIN provides complete turnkey solutions including installation, commissioning, operator training, and after-sales support."
  },
  {
    question: "Why choose SALVIN for Petroleum Jelly Plants?",
    answer: "SALVIN offers GMP compliant machinery, vacuum deaeration systems, customized solutions, reliable performance, and complete engineering support."
  },
  {
    question: "What heating medium is used for the Wax Melting Vessel?",
    answer: "We offer steam-jacketed or hot water-jacketed heating systems depending on your facility utility availability."
  },
  {
    question: "Does the system support automatic Clean-in-Place (CIP)?",
    answer: "Yes. The homogenization and blending vessels are designed with spray balls to interface directly with automatic CIP systems for rapid product changeovers."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/7_petrolium_jelly.png', caption: 'Petroleum Jelly Plant Layout' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.png', caption: 'Wax Melting Vessel' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.png', caption: 'Vacuum Emulsifier Tank' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.png', caption: 'Jacketed Filtration Skid' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.png', caption: 'Molten Jelly Filler' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.png', caption: 'Cooling Conveyor Tunnel' },
  { src: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.png', caption: 'Induction Bottle Sealer' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function PetroleumJellyDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Petroleum Jelly Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Petroleum Jelly Manufacturing Plant by Salvin Industries. Melting, Blending, Micro-filtration And Jar Filling Lines For Cosmetic and Pharmaceutical Grade Petroleum Jelly.')
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
    <div className="pjp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="pjp-hero">
        <div className="pjp-hero__overlay" />
        <div className="pjp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/petrojelly-gallery/petrojelly_hero.png')` }} />
        <div className="pjp-hero__content">
          <span className="pjp-hero__badge">
            <span className="pjp-hero__badge-dot" />
            TURNKEY CHEMICAL & PHARMA SOLUTION
          </span>
          <h1 className="pjp-hero__title">
            Petroleum Jelly Manufacturing Plant
          </h1>
          <p className="pjp-hero__subtitle">
            Melting, Blending, Micro-filtration And Jar Filling Lines For Cosmetic and Pharmaceutical Grade Petroleum Jelly
          </p>
          <div className="pjp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/petrolium_jelly_plant.pdf"
              download="petrolium_jelly_plant.pdf"
              className="pjp-btn pjp-btn--primary pjp-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="pjp-btn pjp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="pjp-section pjp-overview" id="overview" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['overview'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-section-badge">Plant Overview</div>
          <h2 className="pjp-section-title">Premium <span className="pjp-accent">Petroleum Jelly Plant</span></h2>
          <div className="pjp-overview__grid">
            <div className="pjp-overview__text">
              <p>
                Salvin Industries' Petroleum Jelly Manufacturing Plant is a specialized processing line designed to blend waxes, mineral oils, and petrolatum under precise temperature controls. Engineered for pharmaceutical and cosmetic ointment production, our lines guarantee uniform viscosity, zero aeration, and high sanitary compliance.
              </p>
              <p>
                From wax melters and jacketed homogenization tanks to fine filtration and cooling tunnels, our systems maintain product consistency. Fully insulated lines prevent wax crystallization during transfer, while central SCADA control panels trace batch heating curves for GMP certification.
              </p>
              <div className="pjp-overview__features">
                {/* Feature 1 */}
                <div className="pjp-overview__feature">
                  <div className="pjp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="pjp-overview__feature-body">
                    <p className="pjp-overview__feature-title">GMP Compliant</p>
                    <p className="pjp-overview__feature-desc">Meets FDA and pharmaceutical manufacturing norms</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="pjp-overview__feature">
                  <div className="pjp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  </div>
                  <div className="pjp-overview__feature-body">
                    <p className="pjp-overview__feature-title">Vacuum Deaeration</p>
                    <p className="pjp-overview__feature-desc">Air-free blending yields perfectly smooth jelly</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="pjp-overview__feature">
                  <div className="pjp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div className="pjp-overview__feature-body">
                    <p className="pjp-overview__feature-title">Jacketed Piping</p>
                    <p className="pjp-overview__feature-desc">Heated transfer lines prevent wax solidification</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="pjp-overview__feature">
                  <div className="pjp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <div className="pjp-overview__feature-body">
                    <p className="pjp-overview__feature-title">Precision Filling</p>
                    <p className="pjp-overview__feature-desc">Anti-drip hot nozzles fill jars at exact volumes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pjp-overview__image pjp-overview__image--photo">
              <img src="/turnkey-brochures/images/7_petrolium_jelly.png" alt="Petroleum Jelly Manufacturing Plant Layout" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="pjp-section pjp-process-new" id="process-flow" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['process-flow'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-section-badge">Process Flow</div>
          <h2 className="pjp-section-title">Plant <span className="pjp-accent">Processing Workflow</span></h2>
          <p className="pjp-section-subtitle">A streamlined and fully integrated processing workflow designed to melt, blend, filter, and package petroleum jelly while ensuring maximum efficiency and product consistency.</p>

          <div className="pjp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="pjp-process-card">
                  <div className="pjp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 10a8 8 0 1 1-16 0c0-4.42 3.58-8 8-8s8 3.58 8 8Z" />
                        <path d="M12 2v4M12 14v4M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M2 10h4M14 10h4" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18M18 17V9a2 2 0 0 0-2-2M13 17V5a2 2 0 0 0-2-2M8 17v-3a2 2 0 0 0-2-2" />
                      </svg>
                    )}
                    {step.id === 8 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                    {step.id === 9 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                    {step.id === 10 && (
                      <svg className="pjp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                      </svg>
                    )}
                  </div>
                  <div className="pjp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="pjp-process-arrow">
                    <svg className="pjp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="pjp-section pjp-machinery" id="machinery" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['machinery'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-section-badge">Machinery Used</div>
          <h2 className="pjp-section-title">Core <span className="pjp-accent">Equipment</span></h2>
          <div className="pjp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="pjp-machine-card">
                <div className="pjp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="pjp-machine-card__image" loading="lazy" />
                  <div className="pjp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="pjp-machine-card__content">
                  <h3 className="pjp-machine-card__title">{m.name}</h3>
                  <p className="pjp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="pjp-section pjp-faq-section" id="faq" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['faq'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-section-badge">FAQs</div>
          <h2 className="pjp-section-title">Frequently Asked <span className="pjp-accent">Questions</span></h2>
          <p className="pjp-section-subtitle">Everything you need to know about our Petroleum Jelly Manufacturing Plant.</p>

          <div className="pjp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`pjp-faq__item ${isOpen ? 'pjp-faq__item--open' : ''}`}>
                  <button
                    className="pjp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="pjp-faq__question-text">{faq.question}</span>
                    <span className="pjp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="pjp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="pjp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="pjp-faq__answer-wrapper">
                    <div className="pjp-faq__answer-content">
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
      <section className="pjp-section pjp-gallery" id="gallery" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['gallery'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-section-badge">Industrial Gallery</div>
          <h2 className="pjp-section-title">Plant <span className="pjp-accent">Gallery</span></h2>
          <div className="pjp-gallery__showcase">
            <div className="pjp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="pjp-gallery__main-img"
              />
              <div className="pjp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="pjp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`pjp-gallery__thumb ${galleryIndex === i ? 'pjp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="pjp" isVisible={isVisible['why-salvin']} projectKey="PetroleumJellyDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="pjp-section pjp-cta" id="enquiry" data-animate>
        <div className={`pjp-container pjp-animate ${isVisible['enquiry'] ? 'pjp-animate--in' : ''}`}>
          <div className="pjp-cta__box">
            <h2>Ready to Build Your Petroleum Jelly Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="pjp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Petroleum%20Jelly%20Manufacturing%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="pjp-btn pjp-btn--primary pjp-btn--lg"
              >
                <svg className="pjp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="pjp-btn pjp-btn--outline pjp-btn--lg">
                <svg className="pjp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="pjp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="pjp-back-nav">
        <NavLink to="/turnkey-project" className="pjp-btn pjp-btn--outline">
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

