import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './SeedCleaningSortingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Seed Pre-Cleaning' },
  { id: 2, title: 'Manual Inspection Sorting' },
  { id: 3, title: 'Destoning' },
  { id: 4, title: 'Gravity Separation' },
  { id: 5, title: 'Seed Grading' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Seed Pre-Cleaner Machine',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine1.webp',
    desc: 'Removes dust, chaff, light impurities, and oversized contaminants from incoming seeds.'
  },
  {
    name: 'Seed Inspection Sorting Conveyor',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine2.webp',
    desc: 'Provides manual inspection for removal of damaged seeds and foreign materials.'
  },
  {
    name: 'Seed Destoner Machine',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine3.webp',
    desc: 'Separates stones, heavy impurities, and unwanted materials from seeds.'
  },
  {
    name: 'Seed Gravity Separator',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine4.webp',
    desc: 'Separates seeds based on density to improve overall seed quality and germination performance.'
  },
  {
    name: 'Seed Grading Machine',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine5.webp',
    desc: 'Grades seeds into multiple size categories for uniformity and quality control.'
  },
  {
    name: 'Automatic Seed Packaging Machine',
    image: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine6.webp',
    desc: 'Accurately weighs, fills, and seals seeds into bags or pouches for final dispatch.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What types of seeds can be processed in this plant?",
    answer: "The plant is highly versatile and can process a wide variety of seeds including grains, spices, oilseeds, and agricultural seeds."
  },
  {
    question: "What is the production capacity of the Seed Cleaning & Sorting Line?",
    answer: "We offer scalable solutions with capacities tailored to your specific processing requirements."
  },
  {
    question: "Does the plant include grading and density separation?",
    answer: "Yes, advanced gravity separators and grading machines are integrated for precise density and size-based sorting."
  },
  {
    question: "Can the plant be customized for different seed varieties?",
    answer: "Absolutely. Screen sizes, airflow, and processing parameters can be customized for different seed types."
  },
  {
    question: "Does the system support automatic packaging?",
    answer: "Yes, the final stage includes an automatic packaging machine for accurate weighing and sealing into pouches or bags."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine6.webp', caption: 'Automatic Seed Packaging Machine' },
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine1.webp', caption: 'Seed Pre-Cleaner Machine' },
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine2.webp', caption: 'Seed Inspection Sorting Conveyor' },
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine3.webp', caption: 'Seed Destoner Machine' },
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine4.webp', caption: 'Seed Gravity Separator' },
  { src: '/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine5.webp', caption: 'Seed Grading Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function SeedCleaningSortingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Seed Cleaning & Sorting Solution | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for seed pre-cleaning, sorting, destoning, gravity separation, grading, and packaging to ensure premium seed quality and high processing efficiency.')
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
    <div className="scs-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="scs-hero">
        <div className="scs-hero__overlay" />
        <div className="scs-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero-banners/seed_cleaning_hero.webp')` }} />
        <div className="scs-hero__content">
          <span className="scs-hero__badge">
            <span className="scs-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="scs-hero__title">
            Complete Seed Cleaning & Sorting Solution
          </h1>
          <p className="scs-hero__subtitle">
            Advanced turnkey solution for seed pre-cleaning, sorting, destoning, gravity separation, grading, and packaging to ensure premium seed quality and high processing efficiency.
          </p>
          <div className="scs-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/spices_seeds_cleaning_line.pdf"
              download="spices_seeds_cleaning_line.pdf"
              className="scs-btn scs-btn--primary scs-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="scs-btn scs-btn--primary">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="scs-section scs-overview" id="overview" data-animate>
        <div className={`scs-container scs-animate ${isVisible['overview'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-section-badge">Plant Overview</div>
          <h2 className="scs-section-title">Complete <span className="scs-accent">Processing Solution</span></h2>
          <div className="scs-overview__grid">
            <div className="scs-overview__text">
              <p>
                The Seed Cleaning & Sorting Line Plant is designed to efficiently remove impurities, grade seeds by size and density, and deliver premium quality output for agricultural, food processing, and seed production industries. The plant ensures high accuracy, hygienic processing, and maximum product recovery.
              </p>
              <div className="scs-overview__features">
                {/* Feature 1 */}
                <div className="scs-overview__feature">
                  <div className="scs-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="scs-overview__feature-body">
                    <p className="scs-overview__feature-title">High Seed Purity</p>
                    <p className="scs-overview__feature-desc">Advanced multi-stage cleaning removes all foreign materials and impurities.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="scs-overview__feature">
                  <div className="scs-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="scs-overview__feature-body">
                    <p className="scs-overview__feature-title">Accurate Sorting & Grading</p>
                    <p className="scs-overview__feature-desc">Gravity and size-based separation ensures uniform premium output.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="scs-overview__feature">
                  <div className="scs-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="scs-overview__feature-body">
                    <p className="scs-overview__feature-title">Stainless Steel Construction</p>
                    <p className="scs-overview__feature-desc">Durable, hygienic build quality conforming to international standards.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="scs-overview__feature">
                  <div className="scs-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="scs-overview__feature-body">
                    <p className="scs-overview__feature-title">Low Maintenance</p>
                    <p className="scs-overview__feature-desc">Engineered for long-lasting performance with minimal downtime.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scs-overview__image scs-overview__image--photo">
              <img src="/turnkey-brochures/images/seed-cleaning-sorting-gallery/machine1.webp" alt="Seed Cleaning & Sorting Line Plant" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="scs-section scs-process-new" id="process-flow" data-animate>
        <div className={`scs-container scs-animate ${isVisible['process-flow'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-section-badge">Process Flow</div>
          <h2 className="scs-section-title">Processing <span className="scs-accent">Workflow</span></h2>
          <p className="scs-section-subtitle">A streamlined and fully integrated processing workflow designed to deliver premium seed quality.</p>

          <div className="scs-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="scs-process-card">
                  <div className="scs-process-card__icon">
                    {step.id === 1 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="scs-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="scs-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="scs-process-arrow">
                    <svg className="scs-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Seed Cleaning Sorting Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Seed Cleaning Sorting Business?</h3>
                <p>The demand for high-quality, hygienically processed Seed Cleaning Sorting is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Seed Cleaning Sorting Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Seed Cleaning Sorting processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="scs-section scs-machinery" id="machinery" data-animate>
        <div className={`scs-container scs-animate ${isVisible['machinery'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-section-badge">Machinery Used</div>
          <h2 className="scs-section-title">Core <span className="scs-accent">Equipment</span></h2>
          <div className="scs-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="scs-machine-card">
                <div className="scs-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="scs-machine-card__image" loading="lazy" />
                  <div className="scs-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="scs-machine-card__content">
                  <h3 className="scs-machine-card__title">{m.name}</h3>
                  <p className="scs-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="scs-section scs-faq-section" id="faq" data-animate>
        <div className={`scs-container scs-animate ${isVisible['faq'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-section-badge">FAQs</div>
          <h2 className="scs-section-title">Frequently Asked <span className="scs-accent">Questions</span></h2>
          <p className="scs-section-subtitle">Everything you need to know about our Seed Cleaning & Sorting Line Plant.</p>

          <div className="scs-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`scs-faq__item ${isOpen ? 'scs-faq__item--open' : ''}`}>
                  <button
                    className="scs-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="scs-faq__question-text">{faq.question}</span>
                    <span className="scs-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="scs-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="scs-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="scs-faq__answer-wrapper">
                    <div className="scs-faq__answer-content">
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
      <section className="scs-section scs-gallery" id="gallery" data-animate>
        <div className={`scs-container scs-animate ${isVisible['gallery'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-section-badge">Industrial Gallery</div>
          <h2 className="scs-section-title">Plant <span className="scs-accent">Gallery</span></h2>
          <div className="scs-gallery__showcase">
            <div className="scs-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="scs-gallery__main-img"
              />
              <div className="scs-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="scs-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`scs-gallery__thumb ${galleryIndex === i ? 'scs-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="scs" isVisible={isVisible['why-salvin']} projectKey="SeedCleaningSortingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="scs-section scs-cta" id="enquiry" data-animate>
        <div className={`scs-container scs-animate ${isVisible['enquiry'] ? 'scs-animate--in' : ''}`}>
          <div className="scs-cta__box">
            <h2>Ready to Start Your Seed Cleaning & Sorting Business?</h2>
            <p>
              Contact Salvin Industries for a customized Seed Cleaning & Sorting Line Plant solution tailored to your production capacity and business requirements.
            </p>
            <div className="scs-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Seed%20Cleaning%20&%20Sorting%20Line%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="scs-btn scs-btn--primary scs-btn--lg"
              >
                <svg className="scs-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="scs-btn scs-btn--outline scs-btn--lg">
                <svg className="scs-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="scs-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="scs-back-nav">
        <NavLink to="/turnkey-project" className="scs-btn scs-btn--outline">
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
