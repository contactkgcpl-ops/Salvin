import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './MayonnaiseProcessingDetailPage.css'

import eq1 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/oil_ingredient_dosing.jpg';
import eq2 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_premixing.jpg';
import eq3 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_emulsification.jpg';
import eq4 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/vacuum_homogenizer.jpg';
import eq5 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/quality_inspection.jpg';
import eq6 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/automatic_filling.jpg';


/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material Preparation' },
  { id: 2, title: 'Oil & Ingredient Dosing System' },
  { id: 3, title: 'High Shear Premixing Tank' },
  { id: 4, title: 'High Shear Emulsification System' },
  { id: 5, title: 'Vacuum Homogenizer Mixer' },
  { id: 6, title: 'Quality Inspection & Metal Detection' },
  { id: 7, title: 'Automatic Filling & Packaging' }
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Oil & Ingredient Dosing System',
    image: eq1,
    desc: 'Automated dosing and weighing system ensuring precise recipe formulation for oils, water, and additives.'
  },
  {
    name: 'High Shear Premixing Tank',
    image: eq2,
    desc: 'Pre-emulsification vessel designed to uniformly blend raw ingredients prior to final homogenization.'
  },
  {
    name: 'High Shear Emulsification System',
    image: eq3,
    desc: 'Advanced emulsification technology creating stable droplet sizes for creamy mayonnaise texture.'
  },
  {
    name: 'Vacuum Homogenizer Mixer',
    image: eq4,
    desc: 'Core processing unit operating under vacuum to eliminate aeration and ensure perfect emulsion.'
  },
  {
    name: 'Quality Inspection & Metal Detection System',
    image: eq5,
    desc: 'Inline optical and metal detection systems guaranteeing absolute food safety and jar integrity.'
  },
  {
    name: 'Automatic Filling & Packaging Machine',
    image: eq6,
    desc: 'High-speed rotary or inline filling systems capable of handling various jar and bottle sizes efficiently.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is a Mayonnaise Processing Plant?",
    answer: "A Mayonnaise Processing Plant is an industrial turnkey system comprising mixing, emulsification, homogenization, and filling lines specifically designed to produce stable, creamy mayonnaise and similar sauces."
  },
  {
    question: "What production capacities are available?",
    answer: "We offer completely scalable systems that cater to a wide range of production needs, from pilot-scale batches up to continuous, high-volume industrial operations."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes, our processing solutions feature PLC-based automation for precise recipe control, automated dosing, continuous monitoring, and minimal manual intervention."
  },
  {
    question: "What packaging options are supported?",
    answer: "Our automated filling and packaging machines are highly versatile and can support various packaging options including glass jars, PET bottles, pouches, and bulk pails."
  },
  {
    question: "Does the plant comply with food safety standards?",
    answer: "Absolutely. The entire plant is constructed using high-grade stainless steel with hygienic, easy-to-clean designs that comply with strict international food-grade processing standards."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: eq1, caption: 'Oil & Ingredient Dosing System' },
  { src: eq2, caption: 'High Shear Premixing Tank' },
  { src: eq3, caption: 'High Shear Emulsification System' },
  { src: eq4, caption: 'Vacuum Homogenizer Mixer' },
  { src: eq5, caption: 'Quality Inspection & Metal Detection System' },
  { src: eq6, caption: 'Automatic Filling & Packaging Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function MayonnaiseProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Mayonnaise Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Mayonnaise Processing Plant by Salvin Industries. Fully automated food-grade processing lines for protein bars, energy bars, and nutrition bars.')
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
    <div className="mpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="mpp-hero">
        <div className="mpp-hero__overlay" />
        <div className="mpp-hero__bg" style={{ backgroundImage: `url(${eq6})` }} />
        <div className="mpp-hero__content">
          <span className="mpp-hero__badge">
            <span className="mpp-hero__badge-dot" />
            TURNKEY MAYONNAISE PROCESSING SOLUTION
          </span>
          <h1 className="mpp-hero__title">
            Mayonnaise Processing Plant
          </h1>
          <p className="mpp-hero__subtitle">
            Complete Turnkey Solution For Advanced Ingredient Dosing, Mixing, Forming, Cutting And Packaging Of Nutritional Bars
          </p>
          <div className="mpp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/mayonnaise.pdf"
              download="mayonnaise.pdf"
              className="mpp-btn mpp-btn--primary mpp-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="mpp-btn mpp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="mpp-section mpp-overview" id="overview" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['overview'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Project Overview</div>
          <h2 className="mpp-section-title">Complete Mayonnaise <span className="mpp-accent">Manufacturing Solution</span></h2>
          <div className="mpp-overview__grid">
            <div className="mpp-overview__text">
              <p>
                Salvin Industries' Mayonnaise Processing Plant is a state-of-the-art turnkey industrial solution engineered for food processors demanding high production efficiency, rigorous hygiene standards, and consistent nutritional output. Our fully automated lines cover every stage of production—from precise ingredient handling and mixing to forming, cooling, cutting, and final flow-wrap packaging.
              </p>
              <p>
                Designed with automation at its core, the plant ensures accurate recipe management and uniform product quality while significantly reducing manual intervention and product waste. Whether you are producing protein bars, energy bars, or sports nutrition bars, our flexible recipes capability and scalable capacity allow you to adapt to rapidly evolving market demands.
              </p>
              <div className="mpp-overview__features">
                {/* Feature 1 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Fully Automated</p>
                    <p className="mpp-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Hygienic Design</p>
                    <p className="mpp-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Precise Control</p>
                    <p className="mpp-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Flexible & Scalable</p>
                    <p className="mpp-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mpp-overview__image mpp-overview__image--photo">
              <img src={eq1} alt="Mayonnaise Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS FLOW ═══ */}
      <section className="mpp-section mpp-process-new" id="process-flow" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['process-flow'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Process Flow</div>
          <h2 className="mpp-section-title">Manufacturing <span className="mpp-accent">Workflow</span></h2>
          <p className="mpp-section-subtitle">A highly optimized and fully integrated processing workflow designed to consistently transform premium ingredients into perfectly packaged nutritional bars.</p>

          <div className="mpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="mpp-process-card">
                  <div className="mpp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="mpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="mpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="mpp-process-arrow">
                    <svg className="mpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      <section className="mpp-section mpp-machinery" id="machinery" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['machinery'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Machinery Included</div>
          <h2 className="mpp-section-title">Core <span className="mpp-accent">Equipment</span></h2>
          <div className="mpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="mpp-machine-card">
                <div className="mpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="mpp-machine-card__image" loading="lazy" />
                  <div className="mpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="mpp-machine-card__content">
                  <h3 className="mpp-machine-card__title">{m.name}</h3>
                  <p className="mpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      <section className="mpp-section mpp-gallery" id="gallery" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['gallery'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Industrial Gallery</div>
          <h2 className="mpp-section-title">Plant <span className="mpp-accent">Gallery</span></h2>
          <div className="mpp-gallery__showcase">
            <div className="mpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="mpp-gallery__main-img"
              />
              <div className="mpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="mpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`mpp-gallery__thumb ${galleryIndex === i ? 'mpp-gallery__thumb--active' : ''}`}
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

      {/* ═══ FAQ SECTION ═══ */}
      <section className="mpp-section mpp-faq-section" id="faq" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['faq'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">FAQs</div>
          <h2 className="mpp-section-title">Frequently Asked <span className="mpp-accent">Questions</span></h2>
          <p className="mpp-section-subtitle">Everything you need to know about our Mayonnaise Processing Plant.</p>

          <div className="mpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`mpp-faq__item ${isOpen ? 'mpp-faq__item--open' : ''}`}>
                  <button
                    className="mpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="mpp-faq__question-text">{faq.question}</span>
                    <span className="mpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="mpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="mpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="mpp-faq__answer-wrapper">
                    <div className="mpp-faq__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="mpp-section mpp-cta" id="enquiry" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['enquiry'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-cta__box">
            <h2>Looking to establish a Mayonnaise Processing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="mpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Mayonnaise%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="mpp-btn mpp-btn--primary mpp-btn--lg"
              >
                <svg className="mpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="mpp-btn mpp-btn--outline mpp-btn--lg">
                <svg className="mpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="mpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="mpp-back-nav">
        <NavLink to="/turnkey-project" className="mpp-btn mpp-btn--outline">
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
