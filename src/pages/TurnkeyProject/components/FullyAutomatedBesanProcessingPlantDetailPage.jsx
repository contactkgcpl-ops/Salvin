import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './FullyAutomatedBesanProcessingPlantDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Besan Reception' },
  { id: 2, title: 'Cleaning & Sorting' },
  { id: 3, title: 'Drying' },
  { id: 4, title: 'Grinding' },
  { id: 5, title: 'Sieving' },
  { id: 6, title: 'Blending' },
  { id: 7, title: 'Packaging' },
]




/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Chana Dal Cleaning Machine',
    image: '/turnkey-brochures/images/besan-plant/media__1785503129106.webp',
    desc: 'Vibratory screening system used to eliminate dust, fine sand, and other light impurities from raw chana dal.'
  },
  {
    name: 'Destoner / Pre-cleaner',
    image: '/turnkey-brochures/images/besan-plant/media__1785503207619.webp',
    desc: 'Specialized destoning unit designed to remove heavy impurities like stones, mud balls, and glass pieces based on specific gravity.'
  },
  {
    name: 'Gram / Chana Dal Scourer',
    image: '/turnkey-brochures/images/besan-plant/media__1785503235685.webp',
    desc: 'High-speed scouring machine to intensively clean and polish the surface of chana dal prior to grinding.'
  },
  {
    name: 'Pulverizer / Grinding Unit',
    image: '/turnkey-brochures/images/besan-plant/media__1785503280931.webp',
    desc: 'Heavy-duty pulverizer equipped with specialized grinding mechanisms to crush chana dal into fine besan flour with minimum heat generation.'
  },
  {
    name: 'Plansifter',
    image: '/turnkey-brochures/images/besan-plant/media__1785503318739.webp',
    desc: 'Multi-deck sieving machine that ensures uniform particle size and separates coarse granules for re-grinding.'
  },
  {
    name: 'Besan Packaging Station',
    image: '/turnkey-brochures/images/besan-plant/media__1785503338365.webp',
    desc: 'Automatic weighing and bagging system to accurately pack finished besan in various sizes of retail or bulk bags.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the processing capacity of the Fully Automated Besan Processing Plant?",
    answer: "Our plants are available from 500 KG/HR to 5 TON/HR capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant process different types of besanes?",
    answer: "Yes. The plant is designed to handle various besan varieties while maintaining product quality, color, and consistency."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes. We offer semi-automatic and fully automatic solutions with advanced control systems for efficient operation."
  },
  {
    question: "Does SALVIN provide installation and support?",
    answer: "Yes. SALVIN provides complete turnkey solutions including installation, commissioning, operator training, and after-sales support."
  },
  {
    question: "Why choose SALVIN for Fully Automated Besan Processing Plants?",
    answer: "SALVIN offers food-grade machinery, energy-efficient systems, customized solutions, reliable performance, and complete engineering support."
  }
]

/* ─── Gallery Images (Fully Automated Besan Processing Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/besan-plant/media__1785503129106.webp', caption: 'Chana Dal Cleaning Machine' },
  { src: '/turnkey-brochures/images/besan-plant/media__1785503207619.webp', caption: 'Destoner / Pre-cleaner' },
  { src: '/turnkey-brochures/images/besan-plant/media__1785503235685.webp', caption: 'Gram / Chana Dal Scourer' },
  { src: '/turnkey-brochures/images/besan-plant/media__1785503280931.webp', caption: 'Pulverizer / Grinding Unit' },
  { src: '/turnkey-brochures/images/besan-plant/media__1785503318739.webp', caption: 'Plansifter' },
  { src: '/turnkey-brochures/images/besan-plant/media__1785503338365.webp', caption: 'Besan Packaging Station' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function FullyAutomatedBesanProcessingPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Fully Automated Besan Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Fully Automated Besan Processing Plant by Salvin Industries. From raw besan receiving to finished powder packaging — automated, food-grade, energy-efficient processing lines from 500 Kg/Hr to 5 Ton/Hr.')
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
    <div className="fabpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="fabpp-hero">
        <div className="fabpp-hero__overlay" />
        <div className="fabpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero_besan.webp')` }} />
        <div className="fabpp-hero__content">
          <span className="fabpp-hero__badge">
            <span className="fabpp-hero__badge-dot" />
            TURNKEY BESAN PROCESSING SOLUTION
          </span>
          <h1 className="fabpp-hero__title">
            Fully Automated Besan Processing Plant
          </h1>
          <p className="fabpp-hero__subtitle">
            Complete Turnkey Solution For Cleaning, Drying, Grinding, Pulverizing And Packaging Of Besan
          </p>
          <div className="fabpp-hero__actions">
            <NavLink to="/contact" className="fabpp-btn fabpp-btn--primary fabpp-btn--lg">
              Request Information
            </NavLink>

            
            <a href="#enquiry" className="fabpp-btn fabpp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="fabpp-section fabpp-overview" id="overview" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['overview'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-section-badge">Plant Overview</div>
          <h2 className="fabpp-section-title">Complete Besan <span className="fabpp-accent">Processing Solution</span></h2>
          <div className="fabpp-overview__grid">
            <div className="fabpp-overview__text">
              <p>
                Salvin Industries' Fully Automated Besan Processing Plant is a turnkey industrial solution designed for processors who demand
                consistent quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage
                — from incoming raw besan inspection through final packaged product — in a single, automated, dust-free facility.
              </p>
              <p>
                Each plant is custom-engineered to match your specific capacity requirements, product grades, and market standards.
                Whether you're producing retail packs, bulk institutional supply, or export-grade besan powder, our systems deliver
                the colour retention, pungency preservation, and microbial safety your buyers expect.
              </p>
              <div className="fabpp-overview__features">
                {/* Feature 1 */}
                <div className="fabpp-overview__feature">
                  <div className="fabpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="fabpp-overview__feature-body">
                    <p className="fabpp-overview__feature-title">High Yield</p>
                    <p className="fabpp-overview__feature-desc">Maximum besan powder recovery per batch</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="fabpp-overview__feature">
                  <div className="fabpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="fabpp-overview__feature-body">
                    <p className="fabpp-overview__feature-title">Hygienic Process</p>
                    <p className="fabpp-overview__feature-desc">Food grade SS304/SS316L construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="fabpp-overview__feature">
                  <div className="fabpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="fabpp-overview__feature-body">
                    <p className="fabpp-overview__feature-title">Consistent Quality</p>
                    <p className="fabpp-overview__feature-desc">Uniform ASTA colour and SHU output</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="fabpp-overview__feature">
                  <div className="fabpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="fabpp-overview__feature-body">
                    <p className="fabpp-overview__feature-title">Energy Efficient</p>
                    <p className="fabpp-overview__feature-desc">Optimised power consumption per ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fabpp-overview__image fabpp-overview__image--photo">
              <img src="/turnkey-brochures/images/besan-plant/media__1785503280931.webp" alt="Fully Automated Besan Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="fabpp-section fabpp-process-new" id="process-flow" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['process-flow'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-section-badge">Process Flow</div>
          <h2 className="fabpp-section-title">Besan <span className="fabpp-accent">Processing Workflow</span></h2>
          <p className="fabpp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw besanes into premium-quality besan powder while ensuring maximum efficiency, product consistency and superior output quality.</p>

          <div className="fabpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="fabpp-process-card">
                  <div className="fabpp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="fabpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="fabpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="fabpp-process-arrow">
                    <svg className="fabpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="fabpp-section fabpp-seo-content" id="seo-guide" data-animate>
          <div className={`fabpp-container fabpp-animate ${isVisible['seo-guide'] ? 'fabpp-animate--in' : ''}`}>
            <div className="fabpp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="fabpp-section-title">A Simple Guide to <span className="fabpp-accent">Fully Automated Besan Processing Plant Processing</span></h2>
            <p className="fabpp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="fabpp-seo-content__body">
              <div className="fabpp-seo-content__block">
                <h3>Why Start a Fully Automated Besan Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Fully Automated Besan Processing Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="fabpp-seo-content__block">
                <h3>How Does the Fully Automated Besan Processing Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="fabpp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Fully Automated Besan Processing Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>


      {/* ═══ MACHINERY USED ═══ */}
      <section className="fabpp-section fabpp-machinery" id="machinery" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['machinery'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-section-badge">Machinery Used</div>
          <h2 className="fabpp-section-title">Core <span className="fabpp-accent">Equipment</span></h2>
          <div className="fabpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="fabpp-machine-card">
                <div className="fabpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="fabpp-machine-card__image" loading="lazy" />
                  <div className="fabpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="fabpp-machine-card__content">
                  <h3 className="fabpp-machine-card__title">{m.name}</h3>
                  <p className="fabpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="fabpp-section fabpp-faq-section" id="faq" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['faq'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-section-badge">FAQs</div>
          <h2 className="fabpp-section-title">Frequently Asked <span className="fabpp-accent">Questions</span></h2>
          <p className="fabpp-section-subtitle">Everything you need to know about our Fully Automated Besan Processing Plant.</p>

          <div className="fabpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`fabpp-faq__item ${isOpen ? 'fabpp-faq__item--open' : ''}`}>
                  <button
                    className="fabpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="fabpp-faq__question-text">{faq.question}</span>
                    <span className="fabpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="fabpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="fabpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="fabpp-faq__answer-wrapper">
                    <div className="fabpp-faq__answer-content">
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
      <section className="fabpp-section fabpp-gallery" id="gallery" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['gallery'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-section-badge">Industrial Gallery</div>
          <h2 className="fabpp-section-title">Plant <span className="fabpp-accent">Gallery</span></h2>
          <div className="fabpp-gallery__showcase">
            <div className="fabpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="fabpp-gallery__main-img"
              />
              <div className="fabpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="fabpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`fabpp-gallery__thumb ${galleryIndex === i ? 'fabpp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="FullyAutomatedBesanProcessingPlantDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="fabpp-section fabpp-cta" id="enquiry" data-animate>
        <div className={`fabpp-container fabpp-animate ${isVisible['enquiry'] ? 'fabpp-animate--in' : ''}`}>
          <div className="fabpp-cta__box">
            <h2>Ready to Build Your Fully Automated Besan Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="fabpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Red%20Besan%20Processing%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="fabpp-btn fabpp-btn--primary fabpp-btn--lg"
              >
                <svg className="fabpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="fabpp-btn fabpp-btn--outline fabpp-btn--lg">
                <svg className="fabpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="fabpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="fabpp-back-nav">
        <NavLink to="/turnkey-project" className="fabpp-btn fabpp-btn--outline">
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
