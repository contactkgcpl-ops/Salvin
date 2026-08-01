import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './FullyAutomatedRiceProcessingPlantDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Rice Reception' },
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
    name: 'Paddy Pre-Cleaner',
    image: '/turnkey-brochures/images/rice-processing/media__1785502089150.webp',
    desc: 'High-capacity vibrating pre-cleaner that removes oversized and undersized impurities like straw, stones, and dust from raw paddy.'
  },
  {
    name: 'Destoner & Paddy Grader',
    image: '/turnkey-brochures/images/rice-processing/media__1785502097389.webp',
    desc: 'Separates heavy impurities such as stones and glass while simultaneously grading the paddy for uniform husking.'
  },
  {
    name: 'Rubber Roll Husker',
    image: '/turnkey-brochures/images/rice-processing/media__1785502106999.webp',
    desc: 'Advanced rubber roll husker designed to remove the husk from the paddy with minimal grain breakage.'
  },
  {
    name: 'Paddy Separator',
    image: '/turnkey-brochures/images/rice-processing/media__1785502116773.webp',
    desc: 'Precision separator that efficiently distinguishes brown rice from unhusked paddy based on differences in specific gravity.'
  },
  {
    name: 'Rice Length Grader & Color Sorter',
    image: '/turnkey-brochures/images/rice-processing/media__1785502126732.webp',
    desc: 'Optical sorting and length grading machinery to eliminate discolored, broken, or immature grains for premium quality output.'
  },
  {
    name: 'Automatic Bagging Machine',
    image: '/turnkey-brochures/images/rice-processing/media__1785502136873.webp',
    desc: 'Fully automatic weighing and bagging station capable of packing finished rice in bags with precise weight control.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the processing capacity of the Fully Automated Rice Processing Plant?",
    answer: "Our plants are available from 500 KG/HR to 5 TON/HR capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant process different types of ricees?",
    answer: "Yes. The plant is designed to handle various rice varieties while maintaining product quality, color, and consistency."
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
    question: "Why choose SALVIN for Fully Automated Rice Processing Plants?",
    answer: "SALVIN offers food-grade machinery, energy-efficient systems, customized solutions, reliable performance, and complete engineering support."
  }
]

/* ─── Gallery Images (Fully Automated Rice Processing Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/rice-processing/media__1785502089150.webp', caption: 'Paddy Pre-Cleaner' },
  { src: '/turnkey-brochures/images/rice-processing/media__1785502097389.webp', caption: 'Destoner & Paddy Grader' },
  { src: '/turnkey-brochures/images/rice-processing/media__1785502106999.webp', caption: 'Rubber Roll Husker' },
  { src: '/turnkey-brochures/images/rice-processing/media__1785502116773.webp', caption: 'Paddy Separator' },
  { src: '/turnkey-brochures/images/rice-processing/media__1785502126732.webp', caption: 'Rice Length Grader & Color Sorter' },
  { src: '/turnkey-brochures/images/rice-processing/media__1785502136873.webp', caption: 'Automatic Bagging Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function FullyAutomatedRiceProcessingPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Fully Automated Rice Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Fully Automated Rice Processing Plant by Salvin Industries. From raw rice receiving to finished powder packaging — automated, food-grade, energy-efficient processing lines from 500 Kg/Hr to 5 Ton/Hr.')
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
    <div className="farpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="farpp-hero">
        <div className="farpp-hero__overlay" />
        <div className="farpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero_rice.webp')` }} />
        <div className="farpp-hero__content">
          <span className="farpp-hero__badge">
            <span className="farpp-hero__badge-dot" />
            TURNKEY RICE PROCESSING SOLUTION
          </span>
          <h1 className="farpp-hero__title">
            Fully Automated Rice Processing Plant
          </h1>
          <p className="farpp-hero__subtitle">
            Complete Turnkey Solution For Cleaning, Drying, Grinding, Pulverizing And Packaging Of Rice
          </p>
          <div className="farpp-hero__actions">
            <NavLink to="/contact" className="farpp-btn farpp-btn--primary farpp-btn--lg">
              Request Information
            </NavLink>

            
            <a href="#enquiry" className="farpp-btn farpp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="farpp-section farpp-overview" id="overview" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['overview'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-section-badge">Plant Overview</div>
          <h2 className="farpp-section-title">Complete Rice <span className="farpp-accent">Processing Solution</span></h2>
          <div className="farpp-overview__grid">
            <div className="farpp-overview__text">
              <p>
                Salvin Industries' Fully Automated Rice Processing Plant is a turnkey industrial solution designed for processors who demand
                consistent quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage
                — from incoming raw rice inspection through final packaged product — in a single, automated, dust-free facility.
              </p>
              <p>
                Each plant is custom-engineered to match your specific capacity requirements, product grades, and market standards.
                Whether you're producing retail packs, bulk institutional supply, or export-grade rice powder, our systems deliver
                the colour retention, pungency preservation, and microbial safety your buyers expect.
              </p>
              <div className="farpp-overview__features">
                {/* Feature 1 */}
                <div className="farpp-overview__feature">
                  <div className="farpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="farpp-overview__feature-body">
                    <p className="farpp-overview__feature-title">High Yield</p>
                    <p className="farpp-overview__feature-desc">Maximum rice powder recovery per batch</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="farpp-overview__feature">
                  <div className="farpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="farpp-overview__feature-body">
                    <p className="farpp-overview__feature-title">Hygienic Process</p>
                    <p className="farpp-overview__feature-desc">Food grade SS304/SS316L construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="farpp-overview__feature">
                  <div className="farpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="farpp-overview__feature-body">
                    <p className="farpp-overview__feature-title">Consistent Quality</p>
                    <p className="farpp-overview__feature-desc">Uniform ASTA colour and SHU output</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="farpp-overview__feature">
                  <div className="farpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="farpp-overview__feature-body">
                    <p className="farpp-overview__feature-title">Energy Efficient</p>
                    <p className="farpp-overview__feature-desc">Optimised power consumption per ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="farpp-overview__image farpp-overview__image--photo">
              <img src="/turnkey-brochures/images/rice-processing/media__1785502116773.webp" alt="Fully Automated Rice Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="farpp-section farpp-process-new" id="process-flow" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['process-flow'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-section-badge">Process Flow</div>
          <h2 className="farpp-section-title">Rice <span className="farpp-accent">Processing Workflow</span></h2>
          <p className="farpp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw ricees into premium-quality rice powder while ensuring maximum efficiency, product consistency and superior output quality.</p>

          <div className="farpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="farpp-process-card">
                  <div className="farpp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="farpp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="farpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="farpp-process-arrow">
                    <svg className="farpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="farpp-section farpp-seo-content" id="seo-guide" data-animate>
          <div className={`farpp-container farpp-animate ${isVisible['seo-guide'] ? 'farpp-animate--in' : ''}`}>
            <div className="farpp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="farpp-section-title">A Simple Guide to <span className="farpp-accent">Fully Automated Rice Processing Plant Processing</span></h2>
            <p className="farpp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="farpp-seo-content__body">
              <div className="farpp-seo-content__block">
                <h3>Why Start a Fully Automated Rice Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Fully Automated Rice Processing Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="farpp-seo-content__block">
                <h3>How Does the Fully Automated Rice Processing Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="farpp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Fully Automated Rice Processing Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>


      {/* ═══ MACHINERY USED ═══ */}
      <section className="farpp-section farpp-machinery" id="machinery" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['machinery'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-section-badge">Machinery Used</div>
          <h2 className="farpp-section-title">Core <span className="farpp-accent">Equipment</span></h2>
          <div className="farpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="farpp-machine-card">
                <div className="farpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="farpp-machine-card__image" loading="lazy" />
                  <div className="farpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="farpp-machine-card__content">
                  <h3 className="farpp-machine-card__title">{m.name}</h3>
                  <p className="farpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="farpp-section farpp-faq-section" id="faq" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['faq'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-section-badge">FAQs</div>
          <h2 className="farpp-section-title">Frequently Asked <span className="farpp-accent">Questions</span></h2>
          <p className="farpp-section-subtitle">Everything you need to know about our Fully Automated Rice Processing Plant.</p>

          <div className="farpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`farpp-faq__item ${isOpen ? 'farpp-faq__item--open' : ''}`}>
                  <button
                    className="farpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="farpp-faq__question-text">{faq.question}</span>
                    <span className="farpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="farpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="farpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="farpp-faq__answer-wrapper">
                    <div className="farpp-faq__answer-content">
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
      <section className="farpp-section farpp-gallery" id="gallery" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['gallery'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-section-badge">Industrial Gallery</div>
          <h2 className="farpp-section-title">Plant <span className="farpp-accent">Gallery</span></h2>
          <div className="farpp-gallery__showcase">
            <div className="farpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="farpp-gallery__main-img"
              />
              <div className="farpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="farpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`farpp-gallery__thumb ${galleryIndex === i ? 'farpp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="FullyAutomatedRiceProcessingPlantDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="farpp-section farpp-cta" id="enquiry" data-animate>
        <div className={`farpp-container farpp-animate ${isVisible['enquiry'] ? 'farpp-animate--in' : ''}`}>
          <div className="farpp-cta__box">
            <h2>Ready to Build Your Fully Automated Rice Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="farpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Red%20Rice%20Processing%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="farpp-btn farpp-btn--primary farpp-btn--lg"
              >
                <svg className="farpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="farpp-btn farpp-btn--outline farpp-btn--lg">
                <svg className="farpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="farpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="farpp-back-nav">
        <NavLink to="/turnkey-project" className="farpp-btn farpp-btn--outline">
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
