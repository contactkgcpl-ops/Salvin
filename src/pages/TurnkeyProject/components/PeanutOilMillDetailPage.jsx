import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PeanutOilMillDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Peanut Cleaning & Destoning' },
  { id: 2, title: 'Peanut Shelling' },
  { id: 3, title: 'Peanut Roasting' },
  { id: 4, title: 'Oil Expelling' },
  { id: 5, title: 'Oil Filtration' },
  { id: 6, title: 'Oil Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Peanut Cleaning & Destoning System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/1_cleaning_destoning.webp',
    desc: 'Removes dust, stones and foreign impurities before further processing.'
  },
  {
    name: 'Peanut Shelling & Separation System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/2_shelling_separation.webp',
    desc: 'Efficient shell removal and kernel separation for improved oil extraction.'
  },
  {
    name: 'Continuous Peanut Roaster',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/3_peanut_roaster.webp',
    desc: 'Uniform roasting process to enhance flavor and improve oil yield.'
  },
  {
    name: 'Oil Expeller Machine',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/4_oil_expeller.webp',
    desc: 'High-efficiency oil extraction system delivering maximum oil recovery.'
  },
  {
    name: 'Peanut Oil Filtration System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/5_oil_filtration.webp',
    desc: 'Removes impurities and improves clarity for premium edible oil.'
  },
  {
    name: 'Automatic Peanut Oil Packaging Machine',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.webp',
    desc: 'Automated filling, capping, labeling and packing solution.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacities are available for the Peanut Oil Mill Plant?",
    answer: "Our Peanut Oil Mill Plants are available in various capacities, fully customizable from small-scale setups to high-volume industrial processing based on your production requirements."
  },
  {
    question: "What is the average oil recovery percentage?",
    answer: "The average oil recovery percentage typically ranges from 40% to 48%, depending on the quality, moisture content, and variety of the peanuts used."
  },
  {
    question: "Does the plant include roasting and filtration systems?",
    answer: "Yes, our turnkey plant includes a continuous roaster for optimal flavor development and a comprehensive filtration system to ensure clear, pure, and premium edible oil."
  },
  {
    question: "Can the plant produce food-grade edible peanut oil?",
    answer: "Absolutely. Our equipment is manufactured using food-grade materials (SS304/SS316L) to ensure the final product meets the highest food safety and quality standards."
  },
  {
    question: "Is the packaging line fully automatic?",
    answer: "Yes, the plant features a fully automatic packaging line capable of handling multiple bottle and pouch formats for efficient and hygienic filling, sealing, and labeling."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/1_cleaning_destoning.webp', caption: 'Peanut Cleaning & Destoning System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/2_shelling_separation.webp', caption: 'Peanut Shelling & Separation System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/3_peanut_roaster.webp', caption: 'Continuous Peanut Roaster' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/4_oil_expeller.webp', caption: 'Oil Expeller Machine' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/5_oil_filtration.webp', caption: 'Peanut Oil Filtration System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.webp', caption: 'Automatic Peanut Oil Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function PeanutOilMillDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Peanut Oil Mill Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for producing high-quality edible peanut oil with maximum extraction efficiency.')
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
    <div className="pom-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="pom-hero">
        <div className="pom-hero__overlay" />
        <div className="pom-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero-banners/peanut_oil_hero.webp')` }} />
        <div className="pom-hero__content">
          <span className="pom-hero__badge">
            <span className="pom-hero__badge-dot" />
            TURNKEY PEANUT OIL SOLUTION
          </span>
          <h1 className="pom-hero__title">
            Complete Peanut Oil Mill Plant
          </h1>
          <p className="pom-hero__subtitle">
            The Peanut Oil Mill Plant is a complete turnkey solution for producing high-quality edible peanut oil. The plant integrates cleaning, shelling, roasting, oil expelling, filtration and automatic packaging systems to ensure maximum oil recovery, premium quality and efficient production.
          </p>
          <div className="pom-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/peanut_oil.pdf"
              download="peanut_oil.pdf"
              className="pom-btn pom-btn--primary pom-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="pom-btn pom-btn--primary pom-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="pom-section pom-overview" id="overview" data-animate>
        <div className={`pom-container pom-animate ${isVisible['overview'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-section-badge">Plant Overview</div>
          <h2 className="pom-section-title">Complete Peanut Oil Mill <span className="pom-accent">Plant</span></h2>
          <div className="pom-overview__grid">
            <div className="pom-overview__text">
              <p>
                The Peanut Oil Mill Plant is a complete turnkey solution for producing high-quality edible peanut oil. The plant integrates cleaning, shelling, roasting, oil expelling, filtration and automatic packaging systems to ensure maximum oil recovery, premium quality and efficient production.
              </p>
              <div className="pom-overview__features">
                {/* Feature 1 */}
                <div className="pom-overview__feature">
                  <div className="pom-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="pom-overview__feature-body">
                    <p className="pom-overview__feature-title">Premium Peanut Oil Production</p>
                    <p className="pom-overview__feature-desc">Produces high-quality edible peanut oil with maximum extraction efficiency.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="pom-overview__feature">
                  <div className="pom-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="pom-overview__feature-body">
                    <p className="pom-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="pom-overview__feature-desc">Reduces labor requirements while improving productivity.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="pom-overview__feature">
                  <div className="pom-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="pom-overview__feature-body">
                    <p className="pom-overview__feature-title">Advanced Oil Extraction Technology</p>
                    <p className="pom-overview__feature-desc">Optimized oil recovery and consistent product quality.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="pom-overview__feature">
                  <div className="pom-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="pom-overview__feature-body">
                    <p className="pom-overview__feature-title">Complete Turnkey Manufacturing</p>
                    <p className="pom-overview__feature-desc">Design, engineering, installation and commissioning support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pom-overview__image pom-overview__image--photo">
              <img src="/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.webp" alt="Peanut Oil Mill Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="pom-section pom-process-new" id="process-flow" data-animate>
        <div className={`pom-container pom-animate ${isVisible['process-flow'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-section-badge">Process Flow</div>
          <h2 className="pom-section-title">Peanut Oil Mill <span className="pom-accent">Workflow</span></h2>
          <p className="pom-section-subtitle">A complete peanut oil processing line designed to maximize oil yield while maintaining purity, flavor and production efficiency.</p>

          <div className="pom-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="pom-process-card">
                  <div className="pom-process-card__icon">
                    {step.id === 1 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="pom-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="pom-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="pom-process-arrow">
                    <svg className="pom-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Complete Peanut Oil Mill Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Complete Peanut Oil Mill Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Complete Peanut Oil Mill Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Complete Peanut Oil Mill Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Complete Peanut Oil Mill Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="pom-section pom-machinery" id="machinery" data-animate>
        <div className={`pom-container pom-animate ${isVisible['machinery'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-section-badge">Machinery Used</div>
          <h2 className="pom-section-title">Core <span className="pom-accent">Equipment</span></h2>
          <div className="pom-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="pom-machine-card">
                <div className="pom-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="pom-machine-card__image" loading="lazy" />
                  <div className="pom-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="pom-machine-card__content">
                  <h3 className="pom-machine-card__title">{m.name}</h3>
                  <p className="pom-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="pom-section pom-faq-section" id="faq" data-animate>
        <div className={`pom-container pom-animate ${isVisible['faq'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-section-badge">FAQs</div>
          <h2 className="pom-section-title">Frequently Asked <span className="pom-accent">Questions</span></h2>
          <p className="pom-section-subtitle">Everything you need to know about our Peanut Oil Mill Plant.</p>

          <div className="pom-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`pom-faq__item ${isOpen ? 'pom-faq__item--open' : ''}`}>
                  <button
                    className="pom-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="pom-faq__question-text">{faq.question}</span>
                    <span className="pom-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="pom-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="pom-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="pom-faq__answer-wrapper">
                    <div className="pom-faq__answer-content">
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
      <section className="pom-section pom-gallery" id="gallery" data-animate>
        <div className={`pom-container pom-animate ${isVisible['gallery'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-section-badge">Industrial Gallery</div>
          <h2 className="pom-section-title">Plant <span className="pom-accent">Gallery</span></h2>
          <div className="pom-gallery__showcase">
            <div className="pom-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="pom-gallery__main-img"
              />
              <div className="pom-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="pom-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`pom-gallery__thumb ${galleryIndex === i ? 'pom-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="pom" isVisible={isVisible['why-salvin']} projectKey="PeanutOilMillDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="pom-section pom-cta" id="enquiry" data-animate>
        <div className={`pom-container pom-animate ${isVisible['enquiry'] ? 'pom-animate--in' : ''}`}>
          <div className="pom-cta__box">
            <h2>Ready to Build Your Peanut Oil Mill Plant?</h2>
            <p>
              Get a customized peanut oil processing solution engineered for maximum oil recovery, premium product quality and long-term operational efficiency.
            </p>
            <div className="pom-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Peanut%20Oil%20Mill%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="pom-btn pom-btn--primary pom-btn--lg"
              >
                <svg className="pom-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="pom-btn pom-btn--outline pom-btn--lg">
                <svg className="pom-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="pom-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="pom-back-nav">
        <NavLink to="/turnkey-project" className="pom-btn pom-btn--outline">
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
