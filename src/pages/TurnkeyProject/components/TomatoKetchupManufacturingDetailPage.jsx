import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './TomatoKetchupManufacturingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Tomato Washing' },
  { id: 2, title: 'Inspection & Sorting' },
  { id: 3, title: 'Tomato Crushing & Pulping' },
  { id: 4, title: 'Sauce Cooking' },
  { id: 5, title: 'Homogenization & Balance Tank' },
  { id: 6, title: 'Filling & Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Tomato Washing Machine',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/1_tomato_washing.jpg',
    desc: 'Removes dirt, dust, and contaminants from fresh tomatoes before processing.'
  },
  {
    name: 'Tomato Inspection & Sorting Conveyor',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/2_inspection_sorting.jpg',
    desc: 'Allows manual inspection and sorting of tomatoes to ensure only quality produce enters production.'
  },
  {
    name: 'Tomato Crusher Pulper',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/3_crusher_pulper.jpg',
    desc: 'Crushes tomatoes and extracts pulp for further ketchup processing.'
  },
  {
    name: 'Steam Jacketed Sauce Cooking Kettle',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/4_sauce_cooking.jpg',
    desc: 'Cooks tomato pulp with ingredients under controlled temperature conditions to achieve desired consistency.'
  },
  {
    name: 'Tomato Ketchup Homogenizer & Balance Tank',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/5_homogenizer_balance.jpg',
    desc: 'Provides uniform texture and consistency while maintaining continuous product flow.'
  },
  {
    name: 'Tomato Ketchup Filling & Packaging Machine',
    image: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/6_filling_packaging.jpg',
    desc: 'Accurately fills, seals, labels, and packs ketchup bottles for final distribution.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What production capacities are available for the Tomato Ketchup Manufacturing Plant?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Does the plant include washing and sorting systems?",
    answer: "Yes. The plant includes integrated systems for washing and manual inspection to ensure high-quality input."
  },
  {
    question: "Can the plant produce different ketchup formulations?",
    answer: "Yes. The plant is designed to handle various formulations with adjustable cooking and blending parameters."
  },
  {
    question: "Is the system suitable for food-grade hygienic production?",
    answer: "Absolutely. The plant uses high-quality food-grade stainless steel components ensuring maximum hygiene and compliance with safety standards."
  },
  {
    question: "Can the filling machine handle different bottle sizes?",
    answer: "Yes. The automatic filling line can be customized to handle various bottle shapes and sizes."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/1_tomato_washing.jpg', caption: 'Tomato Washing Machine' },
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/2_inspection_sorting.jpg', caption: 'Tomato Inspection & Sorting Conveyor' },
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/3_crusher_pulper.jpg', caption: 'Tomato Crusher Pulper' },
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/4_sauce_cooking.jpg', caption: 'Steam Jacketed Sauce Cooking Kettle' },
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/5_homogenizer_balance.jpg', caption: 'Tomato Ketchup Homogenizer & Balance Tank' },
  { src: '/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/6_filling_packaging.jpg', caption: 'Tomato Ketchup Filling & Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function TomatoKetchupManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Tomato Ketchup Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for tomato washing, inspection, pulping, cooking, homogenization, filling, and packaging to produce premium quality tomato ketchup.')
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
    <div className="tkm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="tkm-hero">
        <div className="tkm-hero__overlay" />
        <div className="tkm-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/4_sauce_cooking.jpg')` }} />
        <div className="tkm-hero__content">
          <span className="tkm-hero__badge">
            <span className="tkm-hero__badge-dot" />
            TURNKEY TOMATO KETCHUP MANUFACTURING SOLUTION
          </span>
          <h1 className="tkm-hero__title">
            Complete Tomato Ketchup Manufacturing Plant
          </h1>
          <p className="tkm-hero__subtitle">
            Advanced turnkey solution for tomato washing, inspection, pulping, cooking, homogenization, filling, and packaging to produce premium quality tomato ketchup with high efficiency and consistent product quality.
          </p>
          <div className="tkm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/tomato_ketchup_plant.pdf"
              download="tomato_ketchup_plant.pdf"
              className="tkm-btn tkm-btn--primary tkm-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="tkm-btn tkm-btn--primary tkm-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="tkm-section tkm-overview" id="overview" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['overview'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-section-badge">Plant Overview</div>
          <h2 className="tkm-section-title">Complete Tomato Ketchup <span className="tkm-accent">Manufacturing Plant</span></h2>
          <div className="tkm-overview__grid">
            <div className="tkm-overview__text">
              <p>
                The Tomato Ketchup Manufacturing Plant is designed for efficient processing of fresh tomatoes into premium quality tomato ketchup through washing, sorting, pulping, cooking, homogenization, and packaging.
              </p>
              <p>
                The plant ensures hygienic production, consistent taste, excellent texture, and high operational efficiency for food processing industries.
              </p>
              <div className="tkm-overview__features">
                {/* Feature 1 */}
                <div className="tkm-overview__feature">
                  <div className="tkm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="tkm-overview__feature-body">
                    <p className="tkm-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="tkm-overview__feature-desc">From washing to packaging</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="tkm-overview__feature">
                  <div className="tkm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="tkm-overview__feature-body">
                    <p className="tkm-overview__feature-title">Premium Quality Ketchup Production</p>
                    <p className="tkm-overview__feature-desc">Consistent taste and texture</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="tkm-overview__feature">
                  <div className="tkm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="tkm-overview__feature-body">
                    <p className="tkm-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="tkm-overview__feature-desc">Food grade compliance</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="tkm-overview__feature">
                  <div className="tkm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="tkm-overview__feature-body">
                    <p className="tkm-overview__feature-title">Integrated Filling & Packaging System</p>
                    <p className="tkm-overview__feature-desc">Automatic bottle filling</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tkm-overview__image tkm-overview__image--photo">
              <img src="/turnkey-brochures/images/tomato-ketchup-manufacturing-gallery/6_filling_packaging.jpg" alt="Tomato Ketchup Manufacturing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="tkm-section tkm-process-new" id="process-flow" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['process-flow'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-section-badge">Process Flow</div>
          <h2 className="tkm-section-title">Tomato Ketchup <span className="tkm-accent">Processing Workflow</span></h2>
          <p className="tkm-section-subtitle">A streamlined and fully integrated processing workflow designed to transform fresh tomatoes into premium ketchup with high efficiency and consistent product quality.</p>

          <div className="tkm-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="tkm-process-card">
                  <div className="tkm-process-card__icon">
                    {step.id === 1 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="tkm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="tkm-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="tkm-process-arrow">
                    <svg className="tkm-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      <section className="tkm-section tkm-machinery" id="machinery" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['machinery'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-section-badge">Machinery Used</div>
          <h2 className="tkm-section-title">Core <span className="tkm-accent">Equipment</span></h2>
          <div className="tkm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="tkm-machine-card">
                <div className="tkm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="tkm-machine-card__image" loading="lazy" />
                  <div className="tkm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="tkm-machine-card__content">
                  <h3 className="tkm-machine-card__title">{m.name}</h3>
                  <p className="tkm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="tkm-section tkm-faq-section" id="faq" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['faq'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-section-badge">FAQs</div>
          <h2 className="tkm-section-title">Frequently Asked <span className="tkm-accent">Questions</span></h2>
          <p className="tkm-section-subtitle">Everything you need to know about our Tomato Ketchup Manufacturing Plant.</p>

          <div className="tkm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`tkm-faq__item ${isOpen ? 'tkm-faq__item--open' : ''}`}>
                  <button
                    className="tkm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="tkm-faq__question-text">{faq.question}</span>
                    <span className="tkm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="tkm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="tkm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="tkm-faq__answer-wrapper">
                    <div className="tkm-faq__answer-content">
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
      <section className="tkm-section tkm-gallery" id="gallery" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['gallery'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-section-badge">Industrial Gallery</div>
          <h2 className="tkm-section-title">Plant <span className="tkm-accent">Gallery</span></h2>
          <div className="tkm-gallery__showcase">
            <div className="tkm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="tkm-gallery__main-img"
              />
              <div className="tkm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="tkm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`tkm-gallery__thumb ${galleryIndex === i ? 'tkm-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="tkm" isVisible={isVisible['why-salvin']} />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="tkm-section tkm-cta" id="enquiry" data-animate>
        <div className={`tkm-container tkm-animate ${isVisible['enquiry'] ? 'tkm-animate--in' : ''}`}>
          <div className="tkm-cta__box">
            <h2>Ready to Build Your Tomato Ketchup Manufacturing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="tkm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Tomato%20Ketchup%20Manufacturing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="tkm-btn tkm-btn--primary tkm-btn--lg"
              >
                <svg className="tkm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="tkm-btn tkm-btn--outline tkm-btn--lg">
                <svg className="tkm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="tkm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="tkm-back-nav">
        <NavLink to="/turnkey-project" className="tkm-btn tkm-btn--outline">
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
