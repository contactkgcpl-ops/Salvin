import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './GreenTeaProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Fresh Tea Leaf Sorting' },
  { id: 2, title: 'Tea Leaf Withering' },
  { id: 3, title: 'Tea Leaf Fixation / Steaming' },
  { id: 4, title: 'Tea Leaf Rolling' },
  { id: 5, title: 'Tea Leaf Drying' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Fresh Tea Leaf Sorting Conveyor',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/1_sorting_conveyor.jpg',
    desc: 'Separates leaves, stems, dust, and impurities to ensure high-quality tea processing.'
  },
  {
    name: 'Tea Leaf Withering Machine',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/2_withering_machine.jpg',
    desc: 'Reduces moisture content in fresh tea leaves and prepares them for further processing.'
  },
  {
    name: 'Tea Leaf Fixation / Steaming Machine',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/3_steaming_machine.jpg',
    desc: 'Uses controlled steam treatment to deactivate enzymes and preserve natural green color and flavor.'
  },
  {
    name: 'Tea Leaf Rolling Machine',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/4_rolling_machine.jpg',
    desc: 'Rolls tea leaves to develop shape, texture, and enhance flavor extraction characteristics.'
  },
  {
    name: 'Tea Leaf Drying Machine',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/5_drying_machine.jpg',
    desc: 'Removes remaining moisture using controlled hot air drying while preserving aroma and shelf life.'
  },
  {
    name: 'Green Tea Packaging Machine',
    image: '/turnkey-brochures/images/green-tea-processing-gallery/6_packaging_machine.jpg',
    desc: 'Accurately fills, seals, and packs green tea into pouches for retail and commercial distribution.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacities are available for the Green Tea Processing Plant?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Does the plant preserve the natural green color of tea leaves?",
    answer: "Yes, the steaming machine uses controlled high-temperature steam to deactivate enzymes, preserving the natural green color and flavor."
  },
  {
    question: "Is the steaming process included in the system?",
    answer: "Yes, the plant includes an integrated continuous steaming machine specifically designed for green tea production."
  },
  {
    question: "Can the drying parameters be adjusted for different tea varieties?",
    answer: "Yes, the drying machine features adjustable temperature and conveyor speed settings to accommodate different tea varieties."
  },
  {
    question: "Can the packaging system handle different pouch sizes and formats?",
    answer: "Yes, the automatic packaging line can be customized to handle various pouch sizes and packaging formats according to your needs."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/1_sorting_conveyor.jpg', caption: 'Fresh Tea Leaf Sorting Conveyor' },
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/2_withering_machine.jpg', caption: 'Tea Leaf Withering Machine' },
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/3_steaming_machine.jpg', caption: 'Tea Leaf Fixation / Steaming Machine' },
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/4_rolling_machine.jpg', caption: 'Tea Leaf Rolling Machine' },
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/5_drying_machine.jpg', caption: 'Tea Leaf Drying Machine' },
  { src: '/turnkey-brochures/images/green-tea-processing-gallery/6_packaging_machine.jpg', caption: 'Green Tea Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function GreenTeaProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Green Tea Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for green tea leaf sorting, withering, steaming, rolling, drying, and packaging to produce premium quality green tea.')
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
    <div className="gtp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="gtp-hero">
        <div className="gtp-hero__overlay" />
        <div className="gtp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/green-tea-processing-gallery/2_withering_machine.jpg')` }} />
        <div className="gtp-hero__content">
          <span className="gtp-hero__badge">
            <span className="gtp-hero__badge-dot" />
            TURNKEY GREEN TEA PROCESSING SOLUTION
          </span>
          <h1 className="gtp-hero__title">
            Complete Green Tea Processing Plant
          </h1>
          <p className="gtp-hero__subtitle">
            Advanced turnkey solution for green tea leaf sorting, withering, steaming, rolling, drying, and packaging to produce premium quality green tea with excellent aroma, color retention, and shelf life.
          </p>
          <div className="gtp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/instant_coffee_processing.pdf"
              download="instant_coffee_processing.pdf"
              className="gtp-btn gtp-btn--primary gtp-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="gtp-btn gtp-btn--primary gtp-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="gtp-section gtp-overview" id="overview" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['overview'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-section-badge">Plant Overview</div>
          <h2 className="gtp-section-title">Complete Green Tea Processing <span className="gtp-accent">Plant</span></h2>
          <div className="gtp-overview__grid">
            <div className="gtp-overview__text">
              <p>
                The Green Tea Processing Plant is designed for efficient processing of fresh tea leaves into premium quality green tea through sorting, withering, fixation (steaming), rolling, drying, and packaging.
              </p>
              <p>
                The plant ensures superior flavor retention, natural green color preservation, hygienic processing, and reliable operation for commercial tea manufacturers.
              </p>
              <div className="gtp-overview__features">
                {/* Feature 1 */}
                <div className="gtp-overview__feature">
                  <div className="gtp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="gtp-overview__feature-body">
                    <p className="gtp-overview__feature-title">Premium Green Tea Production</p>
                    <p className="gtp-overview__feature-desc">Excellent aroma & color</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="gtp-overview__feature">
                  <div className="gtp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="gtp-overview__feature-body">
                    <p className="gtp-overview__feature-title">Controlled Processing & Drying</p>
                    <p className="gtp-overview__feature-desc">Preserves natural characteristics</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="gtp-overview__feature">
                  <div className="gtp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="gtp-overview__feature-body">
                    <p className="gtp-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="gtp-overview__feature-desc">Food grade compliance</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="gtp-overview__feature">
                  <div className="gtp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="gtp-overview__feature-body">
                    <p className="gtp-overview__feature-title">Fully Integrated Turnkey System</p>
                    <p className="gtp-overview__feature-desc">From sorting to packaging</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gtp-overview__image gtp-overview__image--photo">
              <img src="/turnkey-brochures/images/green-tea-processing-gallery/6_packaging_machine.jpg" alt="Green Tea Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="gtp-section gtp-process-new" id="process-flow" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['process-flow'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-section-badge">Process Flow</div>
          <h2 className="gtp-section-title">Green Tea <span className="gtp-accent">Processing Workflow</span></h2>
          <p className="gtp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform fresh tea leaves into premium green tea with high efficiency and consistent product quality.</p>

          <div className="gtp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="gtp-process-card">
                  <div className="gtp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="gtp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="gtp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="gtp-process-arrow">
                    <svg className="gtp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      
      {/* ═══ SEO GUIDE ═══ */}
      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['seo-guide'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">COMPREHENSIVE GUIDE</div>
          <h2 className="rcp-section-title" dangerouslySetInnerHTML={{ __html: `A Simple Guide to <span class='rcp-accent'>Green Tea Packaging</span>` }} />
          <p className="rcp-section-subtitle">Understanding the packaging process, accuracy, and market impact.</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Green Tea Business?</h3>
              <p>Green Tea is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices and food products is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Green Tea, you can build a highly profitable and recurring FMCG business.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does the Green Tea Processing Work?</h3>
              <p>The process starts by thoroughly cleaning whole raw materials to remove stones and dust. They are then gently processed or roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty processing system that grinds or refines them into a perfect consistency. This product is perfectly mixed in a ribbon blender or homogenizer before being automatically packed into sealed pouches.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>When processing gets too hot during grinding or refining, products lose their flavor and aroma. Our equipment is equipped with advanced cooling jackets and precise temperature controls. Furthermore, our precision ribbon blenders and homogenizers ensure that every single pouch of Green Tea has the exact same taste, texture, and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="gtp-section gtp-machinery" id="machinery" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['machinery'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-section-badge">Machinery Used</div>
          <h2 className="gtp-section-title">Core <span className="gtp-accent">Equipment</span></h2>
          <div className="gtp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="gtp-machine-card">
                <div className="gtp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="gtp-machine-card__image" loading="lazy" />
                  <div className="gtp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="gtp-machine-card__content">
                  <h3 className="gtp-machine-card__title">{m.name}</h3>
                  <p className="gtp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="gtp-section gtp-faq-section" id="faq" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['faq'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-section-badge">FAQs</div>
          <h2 className="gtp-section-title">Frequently Asked <span className="gtp-accent">Questions</span></h2>
          <p className="gtp-section-subtitle">Everything you need to know about our Green Tea Processing Plant.</p>

          <div className="gtp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`gtp-faq__item ${isOpen ? 'gtp-faq__item--open' : ''}`}>
                  <button
                    className="gtp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="gtp-faq__question-text">{faq.question}</span>
                    <span className="gtp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="gtp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="gtp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="gtp-faq__answer-wrapper">
                    <div className="gtp-faq__answer-content">
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
      <section className="gtp-section gtp-gallery" id="gallery" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['gallery'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-section-badge">Industrial Gallery</div>
          <h2 className="gtp-section-title">Plant <span className="gtp-accent">Gallery</span></h2>
          <div className="gtp-gallery__showcase">
            <div className="gtp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="gtp-gallery__main-img"
              />
              <div className="gtp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="gtp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`gtp-gallery__thumb ${galleryIndex === i ? 'gtp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="gtp" isVisible={isVisible['why-salvin']} projectKey="GreenTeaProcessingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="gtp-section gtp-cta" id="enquiry" data-animate>
        <div className={`gtp-container gtp-animate ${isVisible['enquiry'] ? 'gtp-animate--in' : ''}`}>
          <div className="gtp-cta__box">
            <h2>Ready to Build Your Green Tea Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="gtp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Green%20Tea%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="gtp-btn gtp-btn--primary gtp-btn--lg"
              >
                <svg className="gtp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="gtp-btn gtp-btn--outline gtp-btn--lg">
                <svg className="gtp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="gtp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="gtp-back-nav">
        <NavLink to="/turnkey-project" className="gtp-btn gtp-btn--outline">
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
