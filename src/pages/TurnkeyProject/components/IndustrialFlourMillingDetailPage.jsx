import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './IndustrialFlourMillingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Wheat Cleaning' },
  { id: 2, title: 'Destoning' },
  { id: 3, title: 'Conditioning' },
  { id: 4, title: 'Roller Milling' },
  { id: 5, title: 'Plansifting' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Wheat Cleaning & Pre-Cleaning Machine',
    image: '/turnkey-brochures/images/flour-milling-gallery/1_wheat_cleaning.webp',
    desc: 'Removes impurities and foreign materials from raw wheat to ensure high-quality milling.'
  },
  {
    name: 'Wheat Destoner Machine',
    image: '/turnkey-brochures/images/flour-milling-gallery/2_wheat_destoning.webp',
    desc: 'Separates stones, mud balls, and heavy particles using advanced gravity separation.'
  },
  {
    name: 'Wheat Conditioning System',
    image: '/turnkey-brochures/images/flour-milling-gallery/3_wheat_conditioning.webp',
    desc: 'Optimizes moisture content in wheat kernels to ensure maximum flour yield and bran separation.'
  },
  {
    name: 'Roller Flour Milling System',
    image: '/turnkey-brochures/images/flour-milling-gallery/4_roller_flour_milling.webp',
    desc: 'High-precision roller mills crush and grind conditioned wheat into fine flour with consistent quality.'
  },
  {
    name: 'Plansifter System',
    image: '/turnkey-brochures/images/flour-milling-gallery/5_plansifter.webp',
    desc: 'Efficiently sifts and grades the milled flour into different categories based on particle size.'
  },
  {
    name: 'Automatic Flour Packaging Machine',
    image: '/turnkey-brochures/images/flour-milling-gallery/6_automatic_flour_packaging.webp',
    desc: 'Automatically weighs, fills, and seals flour into consumer and bulk packaging.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacities are available for the Industrial Flour Milling Plant?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant produce Atta, Maida and Sooji simultaneously?",
    answer: "Yes, our advanced milling and plansifting systems allow for simultaneous extraction of different flour grades."
  },
  {
    question: "Is automatic wheat conditioning included?",
    answer: "Yes, the plant features a fully automated wheat conditioning system with precision moisture control."
  },
  {
    question: "What is the flour extraction efficiency?",
    answer: "Our roller milling and sifting technologies ensure maximum flour extraction rates with minimal product loss."
  },
  {
    question: "Can the plant be customized for different wheat varieties?",
    answer: "Absolutely. The milling process can be adjusted and customized to process hard, soft, or mixed wheat varieties."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/flour-milling-gallery/1_wheat_cleaning.webp', caption: 'Wheat Cleaning & Pre-Cleaning Machine' },
  { src: '/turnkey-brochures/images/flour-milling-gallery/2_wheat_destoning.webp', caption: 'Wheat Destoner Machine' },
  { src: '/turnkey-brochures/images/flour-milling-gallery/3_wheat_conditioning.webp', caption: 'Wheat Conditioning System' },
  { src: '/turnkey-brochures/images/flour-milling-gallery/4_roller_flour_milling.webp', caption: 'Roller Flour Milling System' },
  { src: '/turnkey-brochures/images/flour-milling-gallery/5_plansifter.webp', caption: 'Plansifter System' },
  { src: '/turnkey-brochures/images/flour-milling-gallery/6_automatic_flour_packaging.webp', caption: 'Automatic Flour Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function IndustrialFlourMillingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Industrial Flour Milling Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for industrial flour milling, integrating cleaning, conditioning, roller milling, and packaging to produce premium quality flour.')
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
    <div className="ifm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="ifm-hero">
        <div className="ifm-hero__overlay" />
        <div className="ifm-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero-banners/industrial_flour_milling_hero.webp')` }} />
        <div className="ifm-hero__content">
          <span className="ifm-hero__badge">
            <span className="ifm-hero__badge-dot" />
            TURNKEY FLOUR MILLING SOLUTION
          </span>
          <h1 className="ifm-hero__title">
            Complete Industrial Flour Milling Plant
          </h1>
          <p className="ifm-hero__subtitle">
            Our Industrial Flour Milling Plant is engineered for efficient wheat processing and premium flour production. The plant integrates cleaning, conditioning, roller milling, plansifting, grading and automatic packaging systems to deliver consistent flour quality with high extraction rates.
          </p>
          <div className="ifm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/wheat_flour.pdf"
              download="wheat_flour.pdf"
              className="ifm-btn ifm-btn--primary ifm-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="ifm-btn ifm-btn--primary ifm-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="ifm-section ifm-overview" id="overview" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['overview'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Plant Overview</div>
          <h2 className="ifm-section-title">Complete Industrial Flour Milling <span className="ifm-accent">Plant</span></h2>
          <div className="ifm-overview__grid">
            <div className="ifm-overview__text">
              <p>
                Our Industrial Flour Milling Plant is engineered for efficient wheat processing and premium flour production. The plant integrates cleaning, conditioning, roller milling, plansifting, grading and automatic packaging systems to deliver consistent flour quality with high extraction rates.
              </p>
              <div className="ifm-overview__features">
                {/* Feature 1 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Premium Flour Production</p>
                    <p className="ifm-overview__feature-desc">High-quality Atta, Maida, Sooji and Rava output.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="ifm-overview__feature-desc">Reduced labor and increased efficiency.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Advanced Milling Technology</p>
                    <p className="ifm-overview__feature-desc">Maximum flour yield and product consistency.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Complete Turnkey Solution</p>
                    <p className="ifm-overview__feature-desc">Design, manufacturing and installation support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ifm-overview__image ifm-overview__image--photo">
              <img src="/turnkey-brochures/images/flour-milling-gallery/6_automatic_flour_packaging.webp" alt="Industrial Flour Milling Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="ifm-section ifm-process-new" id="process-flow" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['process-flow'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Process Flow</div>
          <h2 className="ifm-section-title">Industrial Flour Milling <span className="ifm-accent">Workflow</span></h2>
          <p className="ifm-section-subtitle">From raw wheat cleaning to premium flour packaging, our continuous processing line guarantees efficiency and quality at every step.</p>

          <div className="ifm-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="ifm-process-card">
                  <div className="ifm-process-card__icon">
                    {step.id === 1 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="ifm-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="ifm-process-arrow">
                    <svg className="ifm-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Complete Industrial Flour Milling Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Complete Industrial Flour Milling Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Complete Industrial Flour Milling Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Complete Industrial Flour Milling Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Complete Industrial Flour Milling Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="ifm-section ifm-machinery" id="machinery" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['machinery'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Machinery Used</div>
          <h2 className="ifm-section-title">Core <span className="ifm-accent">Equipment</span></h2>
          <div className="ifm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="ifm-machine-card">
                <div className="ifm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="ifm-machine-card__image" loading="lazy" />
                  <div className="ifm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="ifm-machine-card__content">
                  <h3 className="ifm-machine-card__title">{m.name}</h3>
                  <p className="ifm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="ifm-section ifm-faq-section" id="faq" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['faq'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">FAQs</div>
          <h2 className="ifm-section-title">Frequently Asked <span className="ifm-accent">Questions</span></h2>
          <p className="ifm-section-subtitle">Everything you need to know about our Industrial Flour Milling Plant.</p>

          <div className="ifm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`ifm-faq__item ${isOpen ? 'ifm-faq__item--open' : ''}`}>
                  <button
                    className="ifm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="ifm-faq__question-text">{faq.question}</span>
                    <span className="ifm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="ifm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="ifm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="ifm-faq__answer-wrapper">
                    <div className="ifm-faq__answer-content">
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
      <section className="ifm-section ifm-gallery" id="gallery" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['gallery'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Industrial Gallery</div>
          <h2 className="ifm-section-title">Plant <span className="ifm-accent">Gallery</span></h2>
          <div className="ifm-gallery__showcase">
            <div className="ifm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="ifm-gallery__main-img"
              />
              <div className="ifm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="ifm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`ifm-gallery__thumb ${galleryIndex === i ? 'ifm-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="ifm" isVisible={isVisible['why-salvin']} projectKey="IndustrialFlourMillingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="ifm-section ifm-cta" id="enquiry" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['enquiry'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-cta__box">
            <h2>Ready to Build Your Industrial Flour Milling Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="ifm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Industrial%20Flour%20Milling%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="ifm-btn ifm-btn--primary ifm-btn--lg"
              >
                <svg className="ifm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="ifm-btn ifm-btn--outline ifm-btn--lg">
                <svg className="ifm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="ifm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="ifm-back-nav">
        <NavLink to="/turnkey-project" className="ifm-btn ifm-btn--outline">
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
