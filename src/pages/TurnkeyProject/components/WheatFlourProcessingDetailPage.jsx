import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './WheatFlourProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Wheat Cleaning & Destoning' },
  { id: 2, title: 'Wheat Conditioning & Tempering' },
  { id: 3, title: 'Roller Flour Milling' },
  { id: 4, title: 'Plansifter & Flour Grading' },
  { id: 5, title: 'Flour Storage & Blending' },
  { id: 6, title: 'Automatic Flour Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Wheat Cleaning & Destoning System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/1_cleaning.jpg',
    desc: 'Removes dust, stones, husk and foreign impurities to improve flour quality and milling efficiency.'
  },
  {
    name: 'Wheat Conditioning & Tempering System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/2_conditioning.jpg',
    desc: 'Optimizes wheat moisture content before milling for better flour extraction and product quality.'
  },
  {
    name: 'Roller Flour Milling System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/3_milling.jpg',
    desc: 'Performs efficient grinding and flour extraction through advanced roller milling technology.'
  },
  {
    name: 'Plansifter & Flour Grading System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/4_plansifter.jpg',
    desc: 'Separates and grades flour into different products including Maida, Atta, Sooji and Bran.'
  },
  {
    name: 'Flour Storage & Blending System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/5_storage.jpg',
    desc: 'Provides controlled storage, blending and product standardization before packaging.'
  },
  {
    name: 'Automatic Flour Packaging System',
    image: '/turnkey-brochures/images/wheat-flour-gallery/6_packaging.jpg',
    desc: 'Automates weighing, filling, sealing and packing for accurate and efficient flour packaging.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What products can be produced in this flour plant?",
    answer: "The plant can produce Atta, Maida, Sooji, Daliya and Bran with customizable production ratios."
  },
  {
    question: "Can the plant handle different wheat varieties?",
    answer: "Yes. The system is designed to process various wheat types while maintaining consistent flour quality."
  },
  {
    question: "Is the plant available in different capacities?",
    answer: "Yes. Plants can be customized from small commercial units to large industrial flour mills."
  },
  {
    question: "Does the plant include automatic packaging?",
    answer: "Yes. Automated weighing, filling, sealing and bagging systems can be integrated."
  },
  {
    question: "Do you provide turnkey installation services?",
    answer: "Yes. Complete engineering, manufacturing, installation, commissioning and training support are provided."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/wheat-flour-gallery/1_cleaning.jpg', caption: 'Wheat Cleaning & Destoning System' },
  { src: '/turnkey-brochures/images/wheat-flour-gallery/2_conditioning.jpg', caption: 'Wheat Conditioning & Tempering System' },
  { src: '/turnkey-brochures/images/wheat-flour-gallery/3_milling.jpg', caption: 'Roller Flour Milling System' },
  { src: '/turnkey-brochures/images/wheat-flour-gallery/4_plansifter.jpg', caption: 'Plansifter & Flour Grading System' },
  { src: '/turnkey-brochures/images/wheat-flour-gallery/5_storage.jpg', caption: 'Flour Storage & Blending System' },
  { src: '/turnkey-brochures/images/wheat-flour-gallery/6_packaging.jpg', caption: 'Automatic Flour Packaging System' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function WheatFlourProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Wheat Flour Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'The Wheat Flour Processing Plant is a complete turnkey solution for producing premium-quality wheat flour products.')
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
    <div className="wfp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="wfp-hero">
        <div className="wfp-hero__overlay" />
        <div className="wfp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/wheat-flour-gallery/6_packaging.jpg')` }} />
        <div className="wfp-hero__content">
          <span className="wfp-hero__badge">
            <span className="wfp-hero__badge-dot" />
            TURNKEY WHEAT FLOUR SOLUTION
          </span>
          <h1 className="wfp-hero__title">
            Complete Wheat Flour Processing Plant
          </h1>
          <p className="wfp-hero__subtitle">
            The Wheat Flour Processing Plant is a complete turnkey solution for producing premium-quality wheat flour products. The plant integrates cleaning, conditioning, milling, grading, blending, storage, and automated packaging systems to ensure maximum flour yield, consistent quality, and efficient production.
          </p>
          <div className="wfp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/wheat_flour.pdf"
              download="wheat_flour.pdf"
              className="wfp-btn wfp-btn--primary wfp-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="wfp-btn wfp-btn--primary wfp-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="wfp-section wfp-overview" id="overview" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['overview'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-section-badge">Plant Overview</div>
          <h2 className="wfp-section-title">Complete Wheat Flour Processing <span className="wfp-accent">Plant</span></h2>
          <div className="wfp-overview__grid">
            <div className="wfp-overview__text">
              <p>
                The Wheat Flour Processing Plant is a complete turnkey solution for producing premium-quality wheat flour products. The plant integrates cleaning, conditioning, milling, grading, blending, storage, and automated packaging systems to ensure maximum flour yield, consistent quality, and efficient production.
              </p>
              <div className="wfp-overview__features">
                {/* Feature 1 */}
                <div className="wfp-overview__feature">
                  <div className="wfp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="wfp-overview__feature-body">
                    <p className="wfp-overview__feature-title">Premium Flour Production</p>
                    <p className="wfp-overview__feature-desc">Produces high-quality flour with excellent consistency and purity.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="wfp-overview__feature">
                  <div className="wfp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="wfp-overview__feature-body">
                    <p className="wfp-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="wfp-overview__feature-desc">Reduces manual intervention while improving production efficiency.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="wfp-overview__feature">
                  <div className="wfp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="wfp-overview__feature-body">
                    <p className="wfp-overview__feature-title">Multi-Product Flour Manufacturing</p>
                    <p className="wfp-overview__feature-desc">Capable of producing Maida, Atta, Sooji, Daliya and Bran.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="wfp-overview__feature">
                  <div className="wfp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="wfp-overview__feature-body">
                    <p className="wfp-overview__feature-title">Complete Turnkey Manufacturing</p>
                    <p className="wfp-overview__feature-desc">Design, engineering, installation and commissioning support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wfp-overview__image wfp-overview__image--photo">
              <img src="/turnkey-brochures/images/wheat-flour-gallery/6_packaging.jpg" alt="Wheat Flour Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="wfp-section wfp-process-new" id="process-flow" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['process-flow'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-section-badge">Process Flow</div>
          <h2 className="wfp-section-title">Wheat Flour Processing <span className="wfp-accent">Workflow</span></h2>
          <p className="wfp-section-subtitle">A complete production process covering wheat cleaning, conditioning, milling, grading, blending and packaging.</p>

          <div className="wfp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="wfp-process-card">
                  <div className="wfp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="wfp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="wfp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="wfp-process-arrow">
                    <svg className="wfp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      <section className="wfp-section wfp-machinery" id="machinery" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['machinery'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-section-badge">Machinery Used</div>
          <h2 className="wfp-section-title">Core <span className="wfp-accent">Equipment</span></h2>
          <div className="wfp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="wfp-machine-card">
                <div className="wfp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="wfp-machine-card__image" loading="lazy" />
                  <div className="wfp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="wfp-machine-card__content">
                  <h3 className="wfp-machine-card__title">{m.name}</h3>
                  <p className="wfp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="wfp-section wfp-faq-section" id="faq" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['faq'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-section-badge">FAQs</div>
          <h2 className="wfp-section-title">Frequently Asked <span className="wfp-accent">Questions</span></h2>
          <p className="wfp-section-subtitle">Everything you need to know about our Wheat Flour Processing Plant.</p>

          <div className="wfp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`wfp-faq__item ${isOpen ? 'wfp-faq__item--open' : ''}`}>
                  <button
                    className="wfp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="wfp-faq__question-text">{faq.question}</span>
                    <span className="wfp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="wfp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="wfp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="wfp-faq__answer-wrapper">
                    <div className="wfp-faq__answer-content">
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
      <section className="wfp-section wfp-gallery" id="gallery" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['gallery'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-section-badge">Industrial Gallery</div>
          <h2 className="wfp-section-title">Wheat Flour Processing Plant <span className="wfp-accent">Gallery</span></h2>
          <div className="wfp-gallery__showcase">
            <div className="wfp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="wfp-gallery__main-img"
              />
              <div className="wfp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="wfp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`wfp-gallery__thumb ${galleryIndex === i ? 'wfp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="wfp" isVisible={isVisible['why-salvin']} />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="wfp-section wfp-cta" id="enquiry" data-animate>
        <div className={`wfp-container wfp-animate ${isVisible['enquiry'] ? 'wfp-animate--in' : ''}`}>
          <div className="wfp-cta__box">
            <h2>Ready to Build Your Wheat Flour Processing Plant?</h2>
            <p>
              Get a customized wheat flour processing solution designed for maximum efficiency, premium flour quality and long-term operational reliability.
            </p>
            <div className="wfp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Wheat%20Flour%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="wfp-btn wfp-btn--primary wfp-btn--lg"
              >
                <svg className="wfp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="wfp-btn wfp-btn--outline wfp-btn--lg">
                <svg className="wfp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="wfp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="wfp-back-nav">
        <NavLink to="/turnkey-project" className="wfp-btn wfp-btn--outline">
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
