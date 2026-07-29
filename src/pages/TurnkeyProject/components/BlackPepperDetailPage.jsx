import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './BlackPepperDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Cleaning & Destoning' },
  { id: 2, title: 'Manual Sorting' },
  { id: 3, title: 'Roasting / Drying' },
  { id: 4, title: 'Pulverizing' },
  { id: 5, title: 'Sieving' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Black Pepper Cleaning & Destoning Machine',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine1.jpg',
    desc: 'Removes dust, stones, foreign particles, and impurities before processing.'
  },
  {
    name: 'Black Pepper Sorting Conveyor',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine2.jpg',
    desc: 'Allows manual inspection and removal of defective pepper berries.'
  },
  {
    name: 'Black Pepper Roasting / Drying Machine',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine3.jpg',
    desc: 'Reduces moisture content and enhances aroma for better grinding performance.'
  },
  {
    name: 'Black Pepper Pulverizing Machine',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine4.jpg',
    desc: 'Converts roasted black pepper into fine powder with consistent particle size.'
  },
  {
    name: 'Black Pepper Sieving Machine',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine5.jpg',
    desc: 'Separates powder into required mesh grades and ensures uniform fineness.'
  },
  {
    name: 'Black Pepper Powder Packaging Machine',
    image: '/turnkey-brochures/images/black-pepper-gallery/machine6.jpg',
    desc: 'Accurately fills and seals powder into pouches or containers.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the production capacity of the Black Pepper Powder Plant?",
    answer: "Our plants are customizable and available in various capacities depending on your specific production requirements."
  },
  {
    question: "Can the plant produce different powder mesh sizes?",
    answer: "Yes, the integrated sieving machine allows you to produce various mesh sizes tailored to your specifications."
  },
  {
    question: "Is the system fully stainless steel?",
    answer: "Yes, all contact parts and main structures are constructed using food-grade stainless steel for absolute hygiene."
  },
  {
    question: "What packaging options are supported?",
    answer: "The packaging machine supports pouches, jars, and other standard formats depending on your needs."
  },
  {
    question: "Does the plant include dust collection and hygiene features?",
    answer: "Yes, advanced dust collection systems are integrated to maintain a clean and safe operating environment."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine6.jpg', caption: 'Black Pepper Powder Packaging Machine' },
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine1.jpg', caption: 'Black Pepper Cleaning & Destoning Machine' },
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine2.jpg', caption: 'Black Pepper Sorting Conveyor' },
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine3.jpg', caption: 'Black Pepper Roasting / Drying Machine' },
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine4.jpg', caption: 'Black Pepper Pulverizing Machine' },
  { src: '/turnkey-brochures/images/black-pepper-gallery/machine5.jpg', caption: 'Black Pepper Sieving Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function BlackPepperDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Black Pepper Powder Processing Solution | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for cleaning, sorting, roasting, pulverizing, sieving, and packaging black pepper powder with consistent quality and high production efficiency.')
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
    <div className="bpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="bpp-hero">
        <div className="bpp-hero__overlay" />
        <div className="bpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero-banners/black_pepper_hero.png')` }} />
        <div className="bpp-hero__content">
          <span className="bpp-hero__badge">
            <span className="bpp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="bpp-hero__title">
            Complete Black Pepper Powder Processing Solution
          </h1>
          <p className="bpp-hero__subtitle">
            Advanced turnkey solution for cleaning, sorting, roasting, pulverizing, sieving, and packaging black pepper powder with consistent quality and high production efficiency.
          </p>
          <div className="bpp-hero__actions">
            <NavLink to="/contact" className="bpp-btn bpp-btn--primary bpp-btn--lg">
              Request Information
            </NavLink>

            <a href="#enquiry" className="bpp-btn bpp-btn--primary">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="bpp-section bpp-overview" id="overview" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['overview'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-section-badge">Plant Overview</div>
          <h2 className="bpp-section-title">Complete <span className="bpp-accent">Processing Solution</span></h2>
          <div className="bpp-overview__grid">
            <div className="bpp-overview__text">
              <p>
                The Black Pepper Powder Processing Plant is designed for efficient cleaning, grading, roasting, grinding, sieving, and packaging of black pepper. The plant ensures consistent powder quality, hygienic processing, and high production efficiency while preserving the natural aroma and flavor of black pepper.
              </p>
              <div className="bpp-overview__features">
                {/* Feature 1 */}
                <div className="bpp-overview__feature">
                  <div className="bpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="bpp-overview__feature-body">
                    <p className="bpp-overview__feature-title">High Production Efficiency</p>
                    <p className="bpp-overview__feature-desc">Automated workflows from cleaning to packaging maximize output.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="bpp-overview__feature">
                  <div className="bpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="bpp-overview__feature-body">
                    <p className="bpp-overview__feature-title">Uniform Powder Fineness</p>
                    <p className="bpp-overview__feature-desc">Precision pulverizing and sieving ensure perfectly uniform powder.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="bpp-overview__feature">
                  <div className="bpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="bpp-overview__feature-body">
                    <p className="bpp-overview__feature-title">Hygienic Construction</p>
                    <p className="bpp-overview__feature-desc">Built with high-grade stainless steel for complete food safety.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="bpp-overview__feature">
                  <div className="bpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="bpp-overview__feature-body">
                    <p className="bpp-overview__feature-title">Low Maintenance</p>
                    <p className="bpp-overview__feature-desc">Energy-efficient operation with minimal downtime.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bpp-overview__image bpp-overview__image--photo">
              <img src="/turnkey-brochures/images/black-pepper-gallery/machine1.jpg" alt="Black Pepper Powder Processing Plant" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="bpp-section bpp-process-new" id="process-flow" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['process-flow'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-section-badge">Process Flow</div>
          <h2 className="bpp-section-title">Processing <span className="bpp-accent">Workflow</span></h2>
          <p className="bpp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw black pepper into premium powder.</p>

          <div className="bpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="bpp-process-card">
                  <div className="bpp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="bpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="bpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="bpp-process-arrow">
                    <svg className="bpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      
      
        {/* ═══ COMPREHENSIVE GUIDE (SEO) ═══ */}
        <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['seo-guide'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Black Pepper Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Black Pepper Business?</h3>
                <p>The demand for high-quality, hygienically processed Black Pepper is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Black Pepper Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Black Pepper processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="bpp-section bpp-machinery" id="machinery" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['machinery'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-section-badge">Machinery Used</div>
          <h2 className="bpp-section-title">Core <span className="bpp-accent">Equipment</span></h2>
          <div className="bpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="bpp-machine-card">
                <div className="bpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="bpp-machine-card__image" loading="lazy" />
                  <div className="bpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="bpp-machine-card__content">
                  <h3 className="bpp-machine-card__title">{m.name}</h3>
                  <p className="bpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="bpp-section bpp-faq-section" id="faq" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['faq'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-section-badge">FAQs</div>
          <h2 className="bpp-section-title">Frequently Asked <span className="bpp-accent">Questions</span></h2>
          <p className="bpp-section-subtitle">Everything you need to know about our Black Pepper Powder Processing Plant.</p>

          <div className="bpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`bpp-faq__item ${isOpen ? 'bpp-faq__item--open' : ''}`}>
                  <button
                    className="bpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="bpp-faq__question-text">{faq.question}</span>
                    <span className="bpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="bpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="bpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="bpp-faq__answer-wrapper">
                    <div className="bpp-faq__answer-content">
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
      <section className="bpp-section bpp-gallery" id="gallery" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['gallery'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-section-badge">Industrial Gallery</div>
          <h2 className="bpp-section-title">Plant <span className="bpp-accent">Gallery</span></h2>
          <div className="bpp-gallery__showcase">
            <div className="bpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="bpp-gallery__main-img"
              />
              <div className="bpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="bpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`bpp-gallery__thumb ${galleryIndex === i ? 'bpp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="bpp" isVisible={isVisible['why-salvin']} projectKey="BlackPepperDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="bpp-section bpp-cta" id="enquiry" data-animate>
        <div className={`bpp-container bpp-animate ${isVisible['enquiry'] ? 'bpp-animate--in' : ''}`}>
          <div className="bpp-cta__box">
            <h2>Ready to Start Your Black Pepper Powder Manufacturing Business?</h2>
            <p>
              Contact Salvin Industries for a customized Black Pepper Powder Line Plant solution tailored to your production capacity and business requirements.
            </p>
            <div className="bpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Black%20Pepper%20Powder%20Line%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="bpp-btn bpp-btn--primary bpp-btn--lg"
              >
                <svg className="bpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="bpp-btn bpp-btn--outline bpp-btn--lg">
                <svg className="bpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="bpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="bpp-back-nav">
        <NavLink to="/turnkey-project" className="bpp-btn bpp-btn--outline">
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
