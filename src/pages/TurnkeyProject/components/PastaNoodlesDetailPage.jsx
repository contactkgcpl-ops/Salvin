import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PastaNoodlesDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material Feeding' },
  { id: 2, title: 'Mixing & Dough Preparation' },
  { id: 3, title: 'Vacuum Extrusion' },
  { id: 4, title: 'Cutting & Shaping' },
  { id: 5, title: 'Drying Process' },
  { id: 6, title: 'Cooling & Inspection' },
  { id: 7, title: 'Packing & Dispatch' },
]




/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Flour Sifter Conveyor',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine1.jpg',
    desc: 'Automated sifting and conveying system that removes impurities from raw flour before mixing.'
  },
  {
    name: 'Multihead Weigher',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine2.jpg',
    desc: 'High-precision multihead weighing system for accurate portioning of dry ingredients into the mixer.'
  },
  {
    name: 'Vacuum Extruder Press',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine3.jpg',
    desc: 'Industrial vacuum extruder that mixes and kneads the dough under vacuum to ensure bubble-free, high-density pasta shapes.'
  },
  {
    name: 'Pasta Dryer',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine4.jpg',
    desc: 'Multi-stage continuous pasta drying chamber that controls temperature and humidity for perfect moisture reduction.'
  },
  {
    name: 'Cooling Conveyor',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine5.jpg',
    desc: 'Vibratory and belt cooling conveyors designed to rapidly reduce product temperature after drying and prevent condensation before packaging.'
  },
  {
    name: 'Automatic Packing Machine',
    image: '/turnkey-brochures/images/pasta-noodles-gallery/machine6.jpg',
    desc: 'Fully automatic vertical form-fill-seal packaging system equipped with weight checkers for reliable and hygienic packing.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What products can be produced?",
    answer: "Our plant is capable of producing a wide range of products including Macaroni, Penne, Fusilli, Elbow Pasta, Noodles, Instant Noodles, and Specialty Pasta Products."
  },
  {
    question: "What production capacities are available?",
    answer: "We offer Small Scale, Medium Scale, Large Scale, and Fully Automatic Industrial Line capacities customized to your needs."
  },
  {
    question: "Is the line fully automatic?",
    answer: "Yes, our lines feature advanced PLC Automation for fully automatic and highly efficient production with minimal manual intervention."
  },
  {
    question: "What materials are used in construction?",
    answer: "All contact parts and structural components are built using SS304 Food Grade Construction to guarantee hygienic production and low maintenance."
  },
  {
    question: "Do you provide installation and commissioning?",
    answer: "Yes, we provide end-to-end turnkey solutions including manufacturing, global installation, process commissioning, and operator training."
  }
]

/* ─── Gallery Images (Pasta & Noodles Processing Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/hero.jpg', caption: 'Pasta & Noodles Production Plant — Complete Overview' },
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/machine1.jpg', caption: 'Flour Sifter Conveyor' },
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/machine2.jpg', caption: 'Multihead Weigher' },
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/machine3.jpg', caption: 'Vacuum Extruder Press' },
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/machine4.jpg', caption: 'Pasta Dryer' },
  { src: '/turnkey-brochures/images/pasta-noodles-gallery/machine6.jpg', caption: 'Automatic Packing Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function PastaNoodlesDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Pasta & Noodles Production Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Pasta & Noodles Production Plant by Salvin Industries. From raw pasta receiving to finished packaging — automated, food-grade processing lines.')
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
    <div className="pnp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="pnp-hero">
        <div className="pnp-hero__overlay" />
        <div className="pnp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero-banners/pasta_noodles_hero.png')` }} />
        <div className="pnp-hero__content">
          <span className="pnp-hero__badge">
            <span className="pnp-hero__badge-dot" />
            TURNKEY PASTA & NOODLES PRODUCTION SOLUTION
          </span>
          <h1 className="pnp-hero__title">
            Pasta & Noodles Production Plant
          </h1>
          <p className="pnp-hero__subtitle">
            Complete Turnkey Solution For Mixing, Extrusion, Drying, Cooling And Packaging Of Pasta & Noodles
          </p>
          <div className="pnp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/noodles_pasta_making_plant.pdf"
              download="noodles_pasta_making_plant.pdf"
              className="pnp-btn pnp-btn--primary pnp-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="pnp-btn pnp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="pnp-section pnp-overview" id="overview" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['overview'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-section-badge">Plant Overview</div>
          <h2 className="pnp-section-title">Complete Pasta & Noodles <span className="pnp-accent">Production Solution</span></h2>
          <div className="pnp-overview__grid">
            <div className="pnp-overview__text">
              <p>
                Salvin Industries' Pasta & Noodles Production Plant is a turnkey industrial solution designed for processors who demand
                consistent quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage
                — from flour mixing and extrusion through drying and final packaged product — in a single, automated, dust-free facility.
              </p>
              <p>
                Each plant is custom-engineered to match your specific capacity requirements, product grades, and market standards.
                Our equipment is perfectly suited for producing Macaroni, Penne Pasta, Fusilli, Elbow Pasta, Noodles, Instant Noodles,
                and Specialty Pasta Products in Small Scale, Medium Scale, Large Scale, or as a Fully Automatic Industrial Line.
              </p>
              <div className="pnp-overview__features">
                {/* Feature 1 */}
                <div className="pnp-overview__feature">
                  <div className="pnp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="pnp-overview__feature-body">
                    <p className="pnp-overview__feature-title">High Production Efficiency</p>
                    <p className="pnp-overview__feature-desc">Maximum output per hour with minimal waste</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="pnp-overview__feature">
                  <div className="pnp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="pnp-overview__feature-body">
                    <p className="pnp-overview__feature-title">Hygienic Processing</p>
                    <p className="pnp-overview__feature-desc">Food grade SS304/SS316L construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="pnp-overview__feature">
                  <div className="pnp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="pnp-overview__feature-body">
                    <p className="pnp-overview__feature-title">Consistent Product Quality</p>
                    <p className="pnp-overview__feature-desc">Uniform shapes and perfect drying results</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="pnp-overview__feature">
                  <div className="pnp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="pnp-overview__feature-body">
                    <p className="pnp-overview__feature-title">Energy Efficient Operation</p>
                    <p className="pnp-overview__feature-desc">Optimised power consumption per ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pnp-overview__image pnp-overview__image--photo">
              <img src="/turnkey-brochures/images/pasta-noodles-gallery/machine3.jpg" alt="Pasta & Noodles Production Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="pnp-section pnp-process-new" id="process-flow" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['process-flow'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-section-badge">Process Flow</div>
          <h2 className="pnp-section-title">Pasta & Noodles <span className="pnp-accent">Processing Workflow</span></h2>
          <p className="pnp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw Pasta & Noodleses into premium-quality pasta powder while ensuring maximum efficiency, product consistency and superior output quality.</p>

          <div className="pnp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="pnp-process-card">
                  <div className="pnp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="pnp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="pnp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="pnp-process-arrow">
                    <svg className="pnp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Pasta & Noodles Production Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Pasta & Noodles Production Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Pasta & Noodles Production Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Pasta & Noodles Production Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Pasta & Noodles Production Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="pnp-section pnp-machinery" id="machinery" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['machinery'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-section-badge">Machinery Used</div>
          <h2 className="pnp-section-title">Core <span className="pnp-accent">Equipment</span></h2>
          <div className="pnp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="pnp-machine-card">
                <div className="pnp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="pnp-machine-card__image" loading="lazy" />
                  <div className="pnp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="pnp-machine-card__content">
                  <h3 className="pnp-machine-card__title">{m.name}</h3>
                  <p className="pnp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="pnp-section pnp-faq-section" id="faq" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['faq'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-section-badge">FAQs</div>
          <h2 className="pnp-section-title">Frequently Asked <span className="pnp-accent">Questions</span></h2>
          <p className="pnp-section-subtitle">Everything you need to know about our Pasta & Noodles Processing Plant.</p>

          <div className="pnp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`pnp-faq__item ${isOpen ? 'pnp-faq__item--open' : ''}`}>
                  <button
                    className="pnp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="pnp-faq__question-text">{faq.question}</span>
                    <span className="pnp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="pnp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="pnp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="pnp-faq__answer-wrapper">
                    <div className="pnp-faq__answer-content">
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
      <section className="pnp-section pnp-gallery" id="gallery" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['gallery'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-section-badge">Industrial Gallery</div>
          <h2 className="pnp-section-title">Plant <span className="pnp-accent">Gallery</span></h2>
          <div className="pnp-gallery__showcase">
            <div className="pnp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="pnp-gallery__main-img"
              />
              <div className="pnp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="pnp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`pnp-gallery__thumb ${galleryIndex === i ? 'pnp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="pnp" isVisible={isVisible['why-salvin']} projectKey="PastaNoodlesDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="pnp-section pnp-cta" id="enquiry" data-animate>
        <div className={`pnp-container pnp-animate ${isVisible['enquiry'] ? 'pnp-animate--in' : ''}`}>
          <div className="pnp-cta__box">
            <h2>Ready to Build Your Pasta & Noodles Production Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="pnp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Pasta%20and%20Noodles%20Production%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="pnp-btn pnp-btn--primary pnp-btn--lg"
              >
                <svg className="pnp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="pnp-btn pnp-btn--outline pnp-btn--lg">
                <svg className="pnp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="pnp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="pnp-back-nav">
        <NavLink to="/turnkey-project" className="pnp-btn pnp-btn--outline">
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
