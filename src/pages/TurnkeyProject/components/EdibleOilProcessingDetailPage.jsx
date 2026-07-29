import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './EdibleOilProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Seed Cleaning & Destoning' },
  { id: 2, title: 'Seed Cracking & Conditioning' },
  { id: 3, title: 'Oil Extraction' },
  { id: 4, title: 'Crude Oil Filtration' },
  { id: 5, title: 'Oil Refining' },
  { id: 6, title: 'Oil Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Seed Cleaning & Destoning System',
    image: '/turnkey-brochures/images/edible-oil-gallery/1_cleaning_destoning.jpg',
    desc: 'Removes dust, stones and foreign impurities to improve oil yield and processing efficiency.'
  },
  {
    name: 'Seed Cracking & Conditioning System',
    image: '/turnkey-brochures/images/edible-oil-gallery/2_cracking_conditioning.jpg',
    desc: 'Prepares seeds for efficient oil extraction through controlled cracking and steam conditioning.'
  },
  {
    name: 'Oil Expeller Machine',
    image: '/turnkey-brochures/images/edible-oil-gallery/3_oil_expeller.jpg',
    desc: 'Extracts crude oil efficiently while generating high-quality oil cake by-product.'
  },
  {
    name: 'Crude Oil Filtration System',
    image: '/turnkey-brochures/images/edible-oil-gallery/4_crude_oil_filtration.jpg',
    desc: 'Removes suspended particles and impurities to produce cleaner crude oil.'
  },
  {
    name: 'Edible Oil Refining Plant',
    image: '/turnkey-brochures/images/edible-oil-gallery/5_refining_plant.jpg',
    desc: 'Performs neutralization, bleaching and deodorization for premium refined edible oil.'
  },
  {
    name: 'Automatic Oil Filling & Packaging System',
    image: '/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg',
    desc: 'Automates filling, capping, labeling and carton packing for final dispatch.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What types of edible oils can be processed in this plant?",
    answer: "The plant can process sunflower, soybean, groundnut, cottonseed, mustard and several other oil-bearing seeds."
  },
  {
    question: "Does the plant include refining equipment?",
    answer: "Yes. The complete plant includes refining systems for neutralization, bleaching and deodorization."
  },
  {
    question: "Can the plant be customized for different capacities?",
    answer: "Yes. Capacities can be customized from small-scale operations to large industrial production facilities."
  },
  {
    question: "Is automatic packaging included?",
    answer: "Yes. Automated filling, capping, labeling and packing systems can be integrated."
  },
  {
    question: "Do you provide turnkey installation?",
    answer: "Yes. Complete engineering, manufacturing, installation and commissioning services are provided."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/edible-oil-gallery/1_cleaning_destoning.jpg', caption: 'Seed Cleaning & Destoning' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/2_cracking_conditioning.jpg', caption: 'Seed Cracking & Conditioning' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/3_oil_expeller.jpg', caption: 'Oil Expeller' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/4_crude_oil_filtration.jpg', caption: 'Crude Oil Filtration' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/5_refining_plant.jpg', caption: 'Edible Oil Refining Plant' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg', caption: 'Oil Packaging System' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function EdibleOilProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Edible Oil Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'The Edible Oil Processing Plant is a complete turnkey solution for producing high-quality refined edible oils from various oilseeds.')
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
    <div className="eop-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="eop-hero">
        <div className="eop-hero__overlay" />
        <div className="eop-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg')` }} />
        <div className="eop-hero__content">
          <span className="eop-hero__badge">
            <span className="eop-hero__badge-dot" />
            TURNKEY EDIBLE OIL SOLUTION
          </span>
          <h1 className="eop-hero__title">
            Complete Edible Oil Processing Plant
          </h1>
          <p className="eop-hero__subtitle">
            The Edible Oil Processing Plant is a complete turnkey solution for producing high-quality refined edible oils from various oilseeds. The plant integrates seed cleaning, conditioning, oil extraction, filtration, refining, and automated packaging systems to ensure maximum oil recovery, superior purity, and consistent product quality.
          </p>
          <div className="eop-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/peanut_oil.pdf"
              download="peanut_oil.pdf"
              className="eop-btn eop-btn--primary eop-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="eop-btn eop-btn--primary eop-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="eop-section eop-overview" id="overview" data-animate>
        <div className={`eop-container eop-animate ${isVisible['overview'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-section-badge">Plant Overview</div>
          <h2 className="eop-section-title">Complete Edible Oil Processing <span className="eop-accent">Plant</span></h2>
          <div className="eop-overview__grid">
            <div className="eop-overview__text">
              <p>
                The Edible Oil Processing Plant is a complete turnkey solution for producing high-quality refined edible oils from various oilseeds. The plant integrates seed cleaning, conditioning, oil extraction, filtration, refining, and automated packaging systems to ensure maximum oil recovery, superior purity, and consistent product quality.
              </p>
              <div className="eop-overview__features">
                {/* Feature 1 */}
                <div className="eop-overview__feature">
                  <div className="eop-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="eop-overview__feature-body">
                    <p className="eop-overview__feature-title">Premium Edible Oil Production</p>
                    <p className="eop-overview__feature-desc">Produces refined edible oils with high purity and superior market value.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="eop-overview__feature">
                  <div className="eop-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="eop-overview__feature-body">
                    <p className="eop-overview__feature-title">Advanced Extraction & Refining</p>
                    <p className="eop-overview__feature-desc">Integrated extraction and refining technologies for maximum efficiency.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="eop-overview__feature">
                  <div className="eop-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="eop-overview__feature-body">
                    <p className="eop-overview__feature-title">Multi-Oil Processing Capability</p>
                    <p className="eop-overview__feature-desc">Suitable for sunflower, soybean, groundnut, cottonseed and other oilseeds.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="eop-overview__feature">
                  <div className="eop-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="eop-overview__feature-body">
                    <p className="eop-overview__feature-title">Complete Turnkey Manufacturing</p>
                    <p className="eop-overview__feature-desc">Design, engineering, installation and commissioning support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eop-overview__image eop-overview__image--photo">
              <img src="/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg" alt="Edible Oil Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="eop-section eop-process-new" id="process-flow" data-animate>
        <div className={`eop-container eop-animate ${isVisible['process-flow'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-section-badge">Process Flow</div>
          <h2 className="eop-section-title">Edible Oil Processing <span className="eop-accent">Workflow</span></h2>
          <p className="eop-section-subtitle">A complete production process covering seed preparation, oil extraction, purification, refining and final packaging.</p>

          <div className="eop-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="eop-process-card">
                  <div className="eop-process-card__icon">
                    {step.id === 1 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="eop-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="eop-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="eop-process-arrow">
                    <svg className="eop-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Complete Edible Oil Processing Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Complete Edible Oil Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Complete Edible Oil Processing Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Complete Edible Oil Processing Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Complete Edible Oil Processing Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="eop-section eop-machinery" id="machinery" data-animate>
        <div className={`eop-container eop-animate ${isVisible['machinery'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-section-badge">Machinery Used</div>
          <h2 className="eop-section-title">Core <span className="eop-accent">Equipment</span></h2>
          <div className="eop-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="eop-machine-card">
                <div className="eop-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="eop-machine-card__image" loading="lazy" />
                  <div className="eop-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="eop-machine-card__content">
                  <h3 className="eop-machine-card__title">{m.name}</h3>
                  <p className="eop-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="eop-section eop-faq-section" id="faq" data-animate>
        <div className={`eop-container eop-animate ${isVisible['faq'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-section-badge">FAQs</div>
          <h2 className="eop-section-title">Frequently Asked <span className="eop-accent">Questions</span></h2>
          <p className="eop-section-subtitle">Everything you need to know about our Edible Oil Processing Plant.</p>

          <div className="eop-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`eop-faq__item ${isOpen ? 'eop-faq__item--open' : ''}`}>
                  <button
                    className="eop-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="eop-faq__question-text">{faq.question}</span>
                    <span className="eop-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="eop-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="eop-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="eop-faq__answer-wrapper">
                    <div className="eop-faq__answer-content">
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
      <section className="eop-section eop-gallery" id="gallery" data-animate>
        <div className={`eop-container eop-animate ${isVisible['gallery'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-section-badge">Industrial Gallery</div>
          <h2 className="eop-section-title">Edible Oil Processing Plant <span className="eop-accent">Gallery</span></h2>
          <div className="eop-gallery__showcase">
            <div className="eop-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="eop-gallery__main-img"
              />
              <div className="eop-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="eop-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`eop-gallery__thumb ${galleryIndex === i ? 'eop-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="eop" isVisible={isVisible['why-salvin']} projectKey="EdibleOilProcessingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="eop-section eop-cta" id="enquiry" data-animate>
        <div className={`eop-container eop-animate ${isVisible['enquiry'] ? 'eop-animate--in' : ''}`}>
          <div className="eop-cta__box">
            <h2>Ready to Build Your Edible Oil Processing Plant?</h2>
            <p>
              Get a customized edible oil processing solution designed for maximum efficiency, superior oil quality and long-term operational reliability.
            </p>
            <div className="eop-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Edible%20Oil%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="eop-btn eop-btn--primary eop-btn--lg"
              >
                <svg className="eop-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="eop-btn eop-btn--outline eop-btn--lg">
                <svg className="eop-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="eop-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="eop-back-nav">
        <NavLink to="/turnkey-project" className="eop-btn eop-btn--outline">
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
