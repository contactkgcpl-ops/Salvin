import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PotatoPowderDehydrationDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Potato Washing & Destoning' },
  { id: 2, title: 'Potato Peeling' },
  { id: 3, title: 'Potato Slicing' },
  { id: 4, title: 'Potato Dehydration Drying' },
  { id: 5, title: 'Pulverizing & Sieving' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Potato Washing & Destoning Machine',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/1_washing_destoning.jpg',
    desc: 'Removes soil, stones, dirt, and foreign materials from fresh potatoes using high-pressure washing and destoning technology.'
  },
  {
    name: 'Potato Peeling Machine',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/2_peeling_machine.jpg',
    desc: 'Efficiently removes potato skin with minimal product loss while maintaining product quality.'
  },
  {
    name: 'Potato Slicing Machine',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/3_slicing_machine.jpg',
    desc: 'Produces uniform potato slices for consistent dehydration and powder quality.'
  },
  {
    name: 'Potato Dehydration Dryer',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/4_dehydration_dryer.jpg',
    desc: 'Uses controlled hot air drying technology to remove moisture while preserving product quality and color.'
  },
  {
    name: 'Potato Powder Pulverizer & Vibro Sifter',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/5_pulverizer_sifter.jpg',
    desc: 'Converts dehydrated potato flakes into fine powder and ensures uniform particle size through precision sieving.'
  },
  {
    name: 'Potato Powder Filling & Packaging Machine',
    image: '/turnkey-brochures/images/potato-powder-dehydration-gallery/6_packaging_machine.jpg',
    desc: 'Accurately fills, seals, and packs potato powder into retail and industrial packaging formats.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacities are available for the Potato Powder Dehydration Plant?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Does the plant include washing and peeling systems?",
    answer: "Yes, the turnkey plant includes fully integrated potato washing, destoning, and peeling systems for seamless processing."
  },
  {
    question: "Can the plant produce different powder mesh sizes?",
    answer: "Yes, the pulverizing and vibro-sifting system can be adjusted to produce various mesh sizes of potato powder."
  },
  {
    question: "Is the drying system energy efficient?",
    answer: "Absolutely. The continuous hot air drying system is designed for high thermal efficiency, ensuring consistent moisture removal while minimizing energy consumption."
  },
  {
    question: "Can the packaging machine handle multiple pouch sizes?",
    answer: "Yes, the automatic packaging machine is highly versatile and can be configured to pack various pouch formats and sizes."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/1_washing_destoning.jpg', caption: 'Potato Washing & Destoning Machine' },
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/2_peeling_machine.jpg', caption: 'Potato Peeling Machine' },
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/3_slicing_machine.jpg', caption: 'Potato Slicing Machine' },
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/4_dehydration_dryer.jpg', caption: 'Potato Dehydration Dryer' },
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/5_pulverizer_sifter.jpg', caption: 'Potato Powder Pulverizer & Vibro Sifter' },
  { src: '/turnkey-brochures/images/potato-powder-dehydration-gallery/6_packaging_machine.jpg', caption: 'Potato Powder Filling & Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function PotatoPowderDehydrationDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Potato Powder Dehydration Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for potato washing, peeling, slicing, dehydration, pulverizing, sieving, and packaging to produce premium quality potato powder.')
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
    <div className="ppd-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="ppd-hero">
        <div className="ppd-hero__overlay" />
        <div className="ppd-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/potato-powder-dehydration-gallery/1_washing_destoning.jpg')` }} />
        <div className="ppd-hero__content">
          <span className="ppd-hero__badge">
            <span className="ppd-hero__badge-dot" />
            TURNKEY POTATO PROCESSING SOLUTION
          </span>
          <h1 className="ppd-hero__title">
            Complete Potato Powder Dehydration Plant
          </h1>
          <p className="ppd-hero__subtitle">
            Advanced turnkey solution for potato washing, peeling, slicing, dehydration, pulverizing, sieving, and packaging to produce premium quality potato powder with excellent consistency, color, and shelf life.
          </p>
          <div className="ppd-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/potato_powder_plant.pdf"
              download="potato_powder_plant.pdf"
              className="ppd-btn ppd-btn--primary ppd-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="ppd-btn ppd-btn--primary ppd-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="ppd-section ppd-overview" id="overview" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['overview'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-section-badge">Plant Overview</div>
          <h2 className="ppd-section-title">Complete Potato Powder Dehydration <span className="ppd-accent">Plant</span></h2>
          <div className="ppd-overview__grid">
            <div className="ppd-overview__text">
              <p>
                The Potato Powder Dehydration Plant is designed for efficient conversion of fresh potatoes into premium quality potato powder through washing, destoning, peeling, slicing, dehydration, pulverizing, sieving, and packaging.
              </p>
              <p>
                The plant ensures hygienic processing, controlled moisture removal, consistent particle size, superior product quality, and extended shelf life for food processing industries.
              </p>
              <div className="ppd-overview__features">
                {/* Feature 1 */}
                <div className="ppd-overview__feature">
                  <div className="ppd-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ppd-overview__feature-body">
                    <p className="ppd-overview__feature-title">Premium Potato Powder Production</p>
                    <p className="ppd-overview__feature-desc">Excellent consistency & color</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="ppd-overview__feature">
                  <div className="ppd-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="ppd-overview__feature-body">
                    <p className="ppd-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="ppd-overview__feature-desc">From washing to packaging</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="ppd-overview__feature">
                  <div className="ppd-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="ppd-overview__feature-body">
                    <p className="ppd-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="ppd-overview__feature-desc">Food grade compliance</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="ppd-overview__feature">
                  <div className="ppd-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="ppd-overview__feature-body">
                    <p className="ppd-overview__feature-title">Complete Turnkey Manufacturing Solution</p>
                    <p className="ppd-overview__feature-desc">Ready for industrial scale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ppd-overview__image ppd-overview__image--photo">
              <img src="/turnkey-brochures/images/potato-powder-dehydration-gallery/6_packaging_machine.jpg" alt="Potato Powder Dehydration Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="ppd-section ppd-process-new" id="process-flow" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['process-flow'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-section-badge">Process Flow</div>
          <h2 className="ppd-section-title">Potato Dehydration <span className="ppd-accent">Workflow</span></h2>
          <p className="ppd-section-subtitle">A streamlined and fully integrated processing workflow designed to transform fresh potatoes into premium powder with high efficiency and consistent product quality.</p>

          <div className="ppd-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="ppd-process-card">
                  <div className="ppd-process-card__icon">
                    {step.id === 1 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="ppd-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="ppd-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="ppd-process-arrow">
                    <svg className="ppd-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Complete Potato Powder Dehydration Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Complete Potato Powder Dehydration Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Complete Potato Powder Dehydration Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Complete Potato Powder Dehydration Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Complete Potato Powder Dehydration Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="ppd-section ppd-machinery" id="machinery" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['machinery'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-section-badge">Machinery Used</div>
          <h2 className="ppd-section-title">Core <span className="ppd-accent">Equipment</span></h2>
          <div className="ppd-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="ppd-machine-card">
                <div className="ppd-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="ppd-machine-card__image" loading="lazy" />
                  <div className="ppd-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="ppd-machine-card__content">
                  <h3 className="ppd-machine-card__title">{m.name}</h3>
                  <p className="ppd-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="ppd-section ppd-faq-section" id="faq" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['faq'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-section-badge">FAQs</div>
          <h2 className="ppd-section-title">Frequently Asked <span className="ppd-accent">Questions</span></h2>
          <p className="ppd-section-subtitle">Everything you need to know about our Potato Powder Dehydration Plant.</p>

          <div className="ppd-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`ppd-faq__item ${isOpen ? 'ppd-faq__item--open' : ''}`}>
                  <button
                    className="ppd-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="ppd-faq__question-text">{faq.question}</span>
                    <span className="ppd-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="ppd-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="ppd-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="ppd-faq__answer-wrapper">
                    <div className="ppd-faq__answer-content">
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
      <section className="ppd-section ppd-gallery" id="gallery" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['gallery'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-section-badge">Industrial Gallery</div>
          <h2 className="ppd-section-title">Plant <span className="ppd-accent">Gallery</span></h2>
          <div className="ppd-gallery__showcase">
            <div className="ppd-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="ppd-gallery__main-img"
              />
              <div className="ppd-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="ppd-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`ppd-gallery__thumb ${galleryIndex === i ? 'ppd-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="ppd" isVisible={isVisible['why-salvin']} projectKey="PotatoPowderDehydrationDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="ppd-section ppd-cta" id="enquiry" data-animate>
        <div className={`ppd-container ppd-animate ${isVisible['enquiry'] ? 'ppd-animate--in' : ''}`}>
          <div className="ppd-cta__box">
            <h2>Ready to Build Your Potato Powder Dehydration Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="ppd-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Potato%20Powder%20Dehydration%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="ppd-btn ppd-btn--primary ppd-btn--lg"
              >
                <svg className="ppd-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="ppd-btn ppd-btn--outline ppd-btn--lg">
                <svg className="ppd-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="ppd-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="ppd-back-nav">
        <NavLink to="/turnkey-project" className="ppd-btn ppd-btn--outline">
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
