import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './InstantMixFrozenFoodDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material Receiving' },
  { id: 2, title: 'Ingredient Weighing & Batching' },
  { id: 3, title: 'Mixing & Blending' },
  { id: 4, title: 'Cooking & Processing' },
  { id: 5, title: 'Cooling & Freezing' },
  { id: 6, title: 'Quality Inspection' },
  { id: 7, title: 'Packaging & Dispatch' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Ingredient Weighing & Batching System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/ingredient_weighing_batching_system.jpg',
    desc: 'Accurate weighing and ingredient batching system to ensure consistent mix proportions for every production run.'
  },
  {
    name: 'Mixing & Blending Machine',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/mixing_blending_machine.jpg',
    desc: 'Advanced mixing systems ensuring homogeneous blending of spices, grains, and ingredients for instant mixes.'
  },
  {
    name: 'Cooking & Processing System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/cooking_processing_system.jpg',
    desc: 'Controlled cooking, roasting, or steaming processes tailored for specific product requirements.'
  },
  {
    name: 'Cooling & Freezing Tunnel System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/cooling_freezing_tunnel_system.jpg',
    desc: 'Advanced IQF and rapid freezing technology to preserve freshness, taste, and nutritional quality of frozen foods.'
  },
  {
    name: 'Quality Inspection & Metal Detection System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/quality_inspection_metal_detection_system.jpg',
    desc: 'Rigorous quality checks and metal detection to ensure compliance with stringent food safety and industry standards.'
  },
  {
    name: 'Automatic Filling & Packaging Machine',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/automatic_filling_packaging_machine.jpg',
    desc: 'High-speed automated packaging systems ensuring accuracy, hygiene, and attractive presentation for finished products.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What products can be manufactured using this plant?",
    answer: "Our turnkey plants are versatile and can produce a wide range of instant mixes (like upma, idli, dosa mixes) and frozen foods (like frozen vegetables, snacks, and ready-to-eat meals)."
  },
  {
    question: "What is the production capacity range?",
    answer: "Our processing plants are designed with scalable production capacities tailored to your specific requirements, ranging from pilot-scale operations to fully automated high-volume industrial lines."
  },
  {
    question: "Can the plant handle both Instant Mix and Frozen Food products?",
    answer: "Yes, the facility is engineered with flexible processing lines that seamlessly accommodate the manufacturing and packaging of both dry instant mixes and deep-frozen food products."
  },
  {
    question: "Does SALVIN provide installation and commissioning support?",
    answer: "Absolutely. Salvin Industries offers complete end-to-end turnkey solutions, including plant layout design, equipment supply, on-site installation, automation, commissioning, and operator training."
  },
  {
    question: "Is the plant customizable according to product requirements?",
    answer: "Yes, all our processing plants are highly customizable. We design bespoke solutions tailored to your unique recipe formulations, hygiene standards, and operational goals."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/ingredient_weighing_batching_system.jpg', caption: 'Ingredient Weighing & Batching System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/mixing_blending_machine.jpg', caption: 'Mixing & Blending Machine' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/cooking_processing_system.jpg', caption: 'Cooking & Processing System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/cooling_freezing_tunnel_system.jpg', caption: 'Cooling & Freezing Tunnel System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/quality_inspection_metal_detection_system.jpg', caption: 'Quality Inspection & Metal Detection System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/automatic_filling_packaging_machine.jpg', caption: 'Automatic Filling & Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function InstantMixFrozenFoodDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Instant Mix & Frozen Food Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Instant Mix & Frozen Food Processing Plant by Salvin Industries. Fully automated food-grade processing lines for protein bars, energy bars, and nutrition bars.')
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
    <div className="imff-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="imff-hero">
        <div className="imff-hero__overlay" />
        <div className="imff-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/instant_mix_frozen_food_hero.jpg')` }} />
        <div className="imff-hero__content">
          <span className="imff-hero__badge">
            <span className="imff-hero__badge-dot" />
            TURNKEY INSTANT MIX & FROZEN FOOD PROCESSING SOLUTION
          </span>
          <h1 className="imff-hero__title">
            Instant Mix & Frozen Food Processing Plant
          </h1>
          <p className="imff-hero__subtitle">
            Complete Turnkey solutions for Instant Mix & Frozen Food Processing & Packaging
          </p>
          <div className="imff-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/instant_mix_and_frozen_food.pdf"
              download="instant_mix_and_frozen_food.pdf"
              className="imff-btn imff-btn--primary imff-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="imff-btn imff-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="imff-section imff-overview" id="overview" data-animate>
        <div className={`imff-container imff-animate ${isVisible['overview'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-section-badge">Project Overview</div>
          <h2 className="imff-section-title">Complete Instant Mix & Frozen Food <span className="imff-accent">Manufacturing Solution</span></h2>
          <div className="imff-overview__grid">
            <div className="imff-overview__text">
              <p>
                Salvin Industries is a trusted engineering, consultancy, and turnkey project execution company specializing in Instant Mix and Frozen Food Processing Plants. We offer complete end-to-end solutions, from concept development and process design to machinery selection, installation, automation, and packaging systems, helping businesses build modern and efficient food manufacturing facilities.
              </p>
              <p>
                With extensive industry expertise, we focus on delivering customized solutions that ensure operational efficiency, product consistency, hygiene, and long-term scalability. Our advanced processing technologies and engineering excellence enable manufacturers to achieve superior product quality while optimizing production performance.
              </p>
              <div className="imff-overview__features">
                {/* Feature 1 */}
                <div className="imff-overview__feature">
                  <div className="imff-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="imff-overview__feature-body">
                    <p className="imff-overview__feature-title">Fully Automated</p>
                    <p className="imff-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="imff-overview__feature">
                  <div className="imff-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="imff-overview__feature-body">
                    <p className="imff-overview__feature-title">Hygienic Design</p>
                    <p className="imff-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="imff-overview__feature">
                  <div className="imff-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="imff-overview__feature-body">
                    <p className="imff-overview__feature-title">Precise Control</p>
                    <p className="imff-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="imff-overview__feature">
                  <div className="imff-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="imff-overview__feature-body">
                    <p className="imff-overview__feature-title">Flexible & Scalable</p>
                    <p className="imff-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="imff-overview__image imff-overview__image--brochure">
              <img src="/turnkey-brochures/images/instant-mix-frozen-food-processing-plant/instant-mix-frozen-food-brochure.jpg" alt="Instant Mix & Frozen Food Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS FLOW ═══ */}
      <section className="imff-section imff-process-new" id="process-flow" data-animate>
        <div className={`imff-container imff-animate ${isVisible['process-flow'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-section-badge">Process Flow</div>
          <h2 className="imff-section-title">Manufacturing <span className="imff-accent">Workflow</span></h2>
          <p className="imff-section-subtitle">A highly optimized and fully integrated processing workflow designed to consistently transform premium ingredients into perfectly packaged nutritional bars.</p>

          <div className="imff-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="imff-process-card">
                  <div className="imff-process-card__icon">
                    {step.id === 1 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="imff-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="imff-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="imff-process-arrow">
                    <svg className="imff-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
          <h2 className="rcp-section-title" dangerouslySetInnerHTML={{ __html: `A Simple Guide to <span class='rcp-accent'>Instant Mix Frozen Food Packaging</span>` }} />
          <p className="rcp-section-subtitle">Understanding the packaging process, accuracy, and market impact.</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Instant Mix Frozen Food Business?</h3>
              <p>Instant Mix Frozen Food is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices and food products is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Instant Mix Frozen Food, you can build a highly profitable and recurring FMCG business.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does the Instant Mix Frozen Food Processing Work?</h3>
              <p>The process starts by thoroughly cleaning whole raw materials to remove stones and dust. They are then gently processed or roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty processing system that grinds or refines them into a perfect consistency. This product is perfectly mixed in a ribbon blender or homogenizer before being automatically packed into sealed pouches.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>When processing gets too hot during grinding or refining, products lose their flavor and aroma. Our equipment is equipped with advanced cooling jackets and precise temperature controls. Furthermore, our precision ribbon blenders and homogenizers ensure that every single pouch of Instant Mix Frozen Food has the exact same taste, texture, and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="imff-section imff-machinery" id="machinery" data-animate>
        <div className={`imff-container imff-animate ${isVisible['machinery'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-section-badge">Machinery Included</div>
          <h2 className="imff-section-title">Core <span className="imff-accent">Equipment</span></h2>
          <div className="imff-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="imff-machine-card">
                <div className="imff-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="imff-machine-card__image" loading="lazy" />
                  <div className="imff-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="imff-machine-card__content">
                  <h3 className="imff-machine-card__title">{m.name}</h3>
                  <p className="imff-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="imff" isVisible={isVisible['why-salvin']} projectKey="InstantMixFrozenFoodDetailPage" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="imff-section imff-faq-section" id="faq" data-animate>
        <div className={`imff-container imff-animate ${isVisible['faq'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-section-badge">FAQs</div>
          <h2 className="imff-section-title">Frequently Asked <span className="imff-accent">Questions</span></h2>
          <p className="imff-section-subtitle">Everything you need to know about our Instant Mix & Frozen Food Processing Plant.</p>

          <div className="imff-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`imff-faq__item ${isOpen ? 'imff-faq__item--open' : ''}`}>
                  <button
                    className="imff-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="imff-faq__question-text">{faq.question}</span>
                    <span className="imff-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="imff-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="imff-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="imff-faq__answer-wrapper">
                    <div className="imff-faq__answer-content">
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
      <section className="imff-section imff-gallery" id="gallery" data-animate>
        <div className={`imff-container imff-animate ${isVisible['gallery'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-section-badge">Industrial Gallery</div>
          <h2 className="imff-section-title">Plant <span className="imff-accent">Gallery</span></h2>
          <div className="imff-gallery__showcase">
            <div className="imff-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="imff-gallery__main-img"
              />
              <div className="imff-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="imff-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`imff-gallery__thumb ${galleryIndex === i ? 'imff-gallery__thumb--active' : ''}`}
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

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="imff-section imff-cta" id="enquiry" data-animate>
        <div className={`imff-container imff-animate ${isVisible['enquiry'] ? 'imff-animate--in' : ''}`}>
          <div className="imff-cta__box">
            <h2>Looking to establish a Instant Mix & Frozen Food Processing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="imff-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Protein%20Bar%20Manufacturing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="imff-btn imff-btn--primary imff-btn--lg"
              >
                <svg className="imff-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="imff-btn imff-btn--outline imff-btn--lg">
                <svg className="imff-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="imff-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="imff-back-nav">
        <NavLink to="/turnkey-project" className="imff-btn imff-btn--outline">
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
