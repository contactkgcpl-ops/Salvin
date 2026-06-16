import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './CocoaPowderProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Cocoa Bean Roasting' },
  { id: 2, title: 'Cocoa Bean Winnowing' },
  { id: 3, title: 'Cocoa Grinding' },
  { id: 4, title: 'Cocoa Pulverizing' },
  { id: 5, title: 'Vibro Sieving' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Cocoa Bean Roasting Machine',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine4.jpg',
    desc: 'Uniformly roasts cocoa beans to develop rich aroma, flavor, and optimum moisture content.'
  },
  {
    name: 'Cocoa Bean Winnowing Machine',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine3.jpg',
    desc: 'Separates cocoa nibs from shells and removes dust and light impurities.'
  },
  {
    name: 'Cocoa Grinding Machine (Cocoa Liquor Mill)',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine2.jpg',
    desc: 'Converts cocoa nibs into smooth cocoa liquor for further processing.'
  },
  {
    name: 'Cocoa Powder Pulverizer',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/cocoa-powder-pulverizer.jpg',
    desc: 'Pulverizes cocoa cake into fine cocoa powder with consistent particle size.'
  },
  {
    name: 'Vibro Sifter',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/vibro-sifter.jpg',
    desc: 'Classifies cocoa powder into desired mesh sizes and removes oversized particles.'
  },
  {
    name: 'Cocoa Powder Packaging Machine',
    image: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine1.jpg',
    desc: 'Accurately fills, seals, and packs cocoa powder into pouches for final distribution.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacity ranges are available for the Cocoa Powder Processing System?",
    answer: "We provide customized solutions ranging from small scale to fully automated high-capacity industrial plants."
  },
  {
    question: "Can the plant produce different cocoa powder mesh sizes?",
    answer: "Yes, our advanced vibro sifter ensures accurate classification to meet your precise mesh requirements."
  },
  {
    question: "Does the system include roasting and shell separation?",
    answer: "Yes, it is a complete turnkey line featuring efficient roasting and winnowing equipment."
  },
  {
    question: "Is the plant suitable for food-grade production?",
    answer: "Absolutely. All contact parts are made of high-quality stainless steel, ensuring complete hygiene and safety."
  },
  {
    question: "Can the packaging system be customized for different pouch sizes?",
    answer: "Yes, the automatic packaging machine supports multiple pouch and packaging formats tailored to your brand."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine1.jpg', caption: 'Cocoa Powder Packaging Machine' },
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine4.jpg', caption: 'Cocoa Bean Roasting Machine' },
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine3.jpg', caption: 'Cocoa Bean Winnowing Machine' },
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/machine2.jpg', caption: 'Cocoa Grinding Machine' },
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/cocoa-powder-pulverizer.jpg', caption: 'Cocoa Powder Pulverizer' },
  { src: '/turnkey-brochures/images/cocoa-powder-processing-gallery/vibro-sifter.jpg', caption: 'Vibro Sifter' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function CocoaPowderProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Cocoa Powder Processing System | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for cocoa bean roasting, winnowing, grinding, pulverizing, sieving, and packaging to produce premium quality cocoa powder.')
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
    <div className="cpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="cpp-hero">
        <div className="cpp-hero__overlay" />
        <div className="cpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/cocoa-powder-processing-gallery/machine2.jpg')` }} />
        <div className="cpp-hero__content">
          <span className="cpp-hero__badge">
            <span className="cpp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="cpp-hero__title">
            Complete Cocoa Powder Processing System
          </h1>
          <p className="cpp-hero__subtitle">
            Advanced turnkey solution for cocoa bean roasting, winnowing, grinding, pulverizing, sieving, and packaging to produce premium quality cocoa powder with high efficiency and consistent output.
          </p>
          <div className="cpp-hero__actions">
            <a href="#enquiry" className="cpp-btn cpp-btn--primary">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="cpp-section cpp-overview" id="overview" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['overview'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-section-badge">Plant Overview</div>
          <h2 className="cpp-section-title">Complete <span className="cpp-accent">Processing Solution</span></h2>
          <div className="cpp-overview__grid">
            <div className="cpp-overview__text">
              <p>
                The Cocoa Powder Processing System Plant is designed for efficient conversion of cocoa beans into high-quality cocoa powder through roasting, shell separation, grinding, pulverizing, sieving, and packaging. The plant ensures superior product quality, hygienic processing, and reliable operation for food and beverage industries.
              </p>
              <div className="cpp-overview__features">
                {/* Feature 1 */}
                <div className="cpp-overview__feature">
                  <div className="cpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="cpp-overview__feature-body">
                    <p className="cpp-overview__feature-title">Premium Cocoa Powder</p>
                    <p className="cpp-overview__feature-desc">Engineered to produce high-grade powder with rich aroma and color.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="cpp-overview__feature">
                  <div className="cpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="cpp-overview__feature-body">
                    <p className="cpp-overview__feature-title">Uniform Grinding & Sieving</p>
                    <p className="cpp-overview__feature-desc">Integrated milling and vibro sifting ensure precise particle size distribution.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="cpp-overview__feature">
                  <div className="cpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="cpp-overview__feature-body">
                    <p className="cpp-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="cpp-overview__feature-desc">All contact parts made from food-grade material for supreme hygiene.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="cpp-overview__feature">
                  <div className="cpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="cpp-overview__feature-body">
                    <p className="cpp-overview__feature-title">Fully Integrated System</p>
                    <p className="cpp-overview__feature-desc">A seamless turnkey flow from roasting to final automated packaging.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpp-overview__image cpp-overview__image--photo">
              <img src="/turnkey-brochures/images/cocoa-powder-processing-gallery/machine4.jpg" alt="Cocoa Powder Processing System Plant" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="cpp-section cpp-process-new" id="process-flow" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['process-flow'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-section-badge">Process Flow</div>
          <h2 className="cpp-section-title">Processing <span className="cpp-accent">Workflow</span></h2>
          <p className="cpp-section-subtitle">A streamlined and fully integrated processing workflow designed to deliver premium cocoa powder.</p>

          <div className="cpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="cpp-process-card">
                  <div className="cpp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="cpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="cpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="cpp-process-arrow">
                    <svg className="cpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      <section className="cpp-section cpp-machinery" id="machinery" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['machinery'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-section-badge">Machinery Used</div>
          <h2 className="cpp-section-title">Core <span className="cpp-accent">Equipment</span></h2>
          <div className="cpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="cpp-machine-card">
                <div className="cpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="cpp-machine-card__image" loading="lazy" />
                  <div className="cpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="cpp-machine-card__content">
                  <h3 className="cpp-machine-card__title">{m.name}</h3>
                  <p className="cpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="cpp-section cpp-faq-section" id="faq" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['faq'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-section-badge">FAQs</div>
          <h2 className="cpp-section-title">Frequently Asked <span className="cpp-accent">Questions</span></h2>
          <p className="cpp-section-subtitle">Everything you need to know about our Cocoa Powder Processing System Plant.</p>

          <div className="cpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`cpp-faq__item ${isOpen ? 'cpp-faq__item--open' : ''}`}>
                  <button
                    className="cpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="cpp-faq__question-text">{faq.question}</span>
                    <span className="cpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="cpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="cpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="cpp-faq__answer-wrapper">
                    <div className="cpp-faq__answer-content">
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
      <section className="cpp-section cpp-gallery" id="gallery" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['gallery'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-section-badge">Industrial Gallery</div>
          <h2 className="cpp-section-title">Plant <span className="cpp-accent">Gallery</span></h2>
          <div className="cpp-gallery__showcase">
            <div className="cpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="cpp-gallery__main-img"
              />
              <div className="cpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="cpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`cpp-gallery__thumb ${galleryIndex === i ? 'cpp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="cpp" isVisible={isVisible['why-salvin']} />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="cpp-section cpp-cta" id="enquiry" data-animate>
        <div className={`cpp-container cpp-animate ${isVisible['enquiry'] ? 'cpp-animate--in' : ''}`}>
          <div className="cpp-cta__box">
            <h2>Ready to Start Your Cocoa Powder Manufacturing Business?</h2>
            <p>
              Contact Salvin Industries for a customized Cocoa Powder Processing System Plant solution tailored to your production capacity and business requirements.
            </p>
            <div className="cpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Cocoa%20Powder%20Processing%20System%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="cpp-btn cpp-btn--primary cpp-btn--lg"
              >
                <svg className="cpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="cpp-btn cpp-btn--outline cpp-btn--lg">
                <svg className="cpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="cpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="cpp-back-nav">
        <NavLink to="/turnkey-project" className="cpp-btn cpp-btn--outline">
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
