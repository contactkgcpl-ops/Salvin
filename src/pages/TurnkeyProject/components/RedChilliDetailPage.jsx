import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Chilli Reception' },
  { id: 2, title: 'Cleaning & Sorting' },
  { id: 3, title: 'Drying' },
  { id: 4, title: 'Grinding' },
  { id: 5, title: 'Sieving' },
  { id: 6, title: 'Blending' },
  { id: 7, title: 'Packaging' },
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

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the processing capacity of the Red Chilli Processing Plant?",
    answer: "Our plants are available from 500 KG/HR to 5 TON/HR capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant process different types of red chillies?",
    answer: "Yes. The plant is designed to handle various chilli varieties while maintaining product quality, color, and consistency."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes. We offer semi-automatic and fully automatic solutions with advanced control systems for efficient operation."
  },
  {
    question: "Does SALVIN provide installation and support?",
    answer: "Yes. SALVIN provides complete turnkey solutions including installation, commissioning, operator training, and after-sales support."
  },
  {
    question: "Why choose SALVIN for Red Chilli Processing Plants?",
    answer: "SALVIN offers food-grade machinery, energy-efficient systems, customized solutions, reliable performance, and complete engineering support."
  }
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
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

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
                    <p className="rcp-overview__feature-desc">Maximum chilli powder recovery per batch</p>
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
                    <p className="rcp-overview__feature-desc">Food grade SS304/SS316L construction</p>
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
                    <p className="rcp-overview__feature-title">Consistent Quality</p>
                    <p className="rcp-overview__feature-desc">Uniform ASTA colour and SHU output</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Energy Efficient</p>
                    <p className="rcp-overview__feature-desc">Optimised power consumption per ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png" alt="Red Chilli Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Red Chilli <span className="rcp-accent">Processing Workflow</span></h2>
          <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw red chillies into premium-quality chilli powder while ensuring maximum efficiency, product consistency and superior output quality.</p>

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
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="rcp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="rcp-process-arrow">
                    <svg className="rcp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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


      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['faq'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our Red Chilli Processing Plant.</p>

          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rcp-faq__item ${isOpen ? 'rcp-faq__item--open' : ''}`}>
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


      
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="RedChilliDetailPage" />

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
        <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--outline">
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
