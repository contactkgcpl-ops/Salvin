import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './HairConditionerManufacturingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  {
    "id": 1,
    "title": "Raw Material"
  },
  {
    "id": 2,
    "title": "Ingredient Weighing & Dosing"
  },
  {
    "id": 3,
    "title": "Batch Mixing"
  },
  {
    "id": 4,
    "title": "Syrup Preparation"
  },
  {
    "id": 5,
    "title": "Hair Conditioner Forming"
  },
  {
    "id": 6,
    "title": "Cooling Tunnel"
  },
  {
    "id": 7,
    "title": "Precision Cutting"
  }
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    "name": "Weighing & Dosing System",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg",
    "desc": "Automatic weighing and dosing system for precise measurement of raw materials, ensuring perfect batch consistency."
  },
  {
    "name": "Vacuum Emulsifying Mixer",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg",
    "desc": "Advanced vacuum mixing vessel for perfectly blending and emulsifying the conditioner ingredients without air bubbles."
  },
  {
    "name": "High Shear Homogenizer",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg",
    "desc": "Heavy-duty high shear homogenizer system designed to create an ultra-smooth and stable emulsion."
  },
  {
    "name": "Storage Holding Tank",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg",
    "desc": "High-grade stainless steel holding tank to safely store the prepared conditioner before the filling process."
  },
  {
    "name": "Automatic Bottle Filling & Capping Machine",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg",
    "desc": "Fully automatic rotary filling and capping station to efficiently and hygienically pack the product into bottles."
  },
  {
    "name": "Automatic Labeling & Carton Packing Machine",
    "image": "/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg",
    "desc": "High-speed labeling and carton packaging system for final dispatch, reducing manual labor and errors."
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    "question": "Do you manufacture all the machines for the Hair Conditioner Manufacturing Plant?",
    "answer": "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Hair Conditioner Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
  },
  {
    "question": "How much capacity can this plant handle in one day?",
    "answer": "We build turnkey plants according to your needs. You can choose a small-scale plant or a large industrial plant depending on your budget and market demand."
  },
  {
    "question": "Is it difficult to run this automatic plant?",
    "answer": "Not at all. We design our machines with easy-to-use automatic control panels (PLC). We will also give full training to your workers on how to run the plant safely and easily."
  },
  {
    "question": "Will the final product taste natural and fresh?",
    "answer": "Yes, definitely. Our machines use advanced technology to ensure your product keeps its original color, natural taste, and healthy nutrients."
  },
  {
    "question": "Will Salvin Industries install the machines at my factory?",
    "answer": "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/1_weighing_dosing.jpg', caption: 'Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg', caption: 'Vacuum Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/3_high_shear.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/4_storage_tank.jpg', caption: 'Storage Holding Tank' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/5_filling_capping.jpg', caption: 'Automatic Bottle Filling & Capping Machine' },
  { src: '/turnkey-brochures/images/hair-conditioner-gallery/6_labeling_packing.jpg', caption: 'Automatic Labeling & Carton Packing Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function HairConditionerManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'Hair Conditioner Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Hair Conditioner Manufacturing Plant by Salvin Industries. Fully automated processing lines for hair conditioner products.')
  }, [])

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

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hcm-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="hcm-hero">
        <div className="hcm-hero__overlay" />
        <div className="hcm-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/cosmetic/hair_conditioner_hero.png')` }} />
        <div className="hcm-hero__content">
          <span className="hcm-hero__badge">
            <span className="hcm-hero__badge-dot" />
            TURNKEY SOLUTION
          </span>
          <h1 className="hcm-hero__title">Hair Conditioner Manufacturing Plant</h1>
          <p className="hcm-hero__subtitle">Start Your Own Hair Conditioner Manufacturing Plant Business with Salvin Industries' Automatic Turnkey Plant</p>
          <div className="hcm-hero__actions">
            <a href="#enquiry" className="hcm-btn hcm-btn--primary hcm-btn--lg">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="hcm-section hcm-overview" id="overview" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['overview'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-section-badge">Plant Overview</div>
          <h2 className="hcm-section-title">Complete Processing <span className="hcm-accent">Solution</span></h2>
          <div className="hcm-overview__grid">
            <div className="hcm-overview__text">
              <p>
                <strong>Salvin Industries' Hair Conditioner Manufacturing Plant</strong> is an advanced industrial turnkey solution engineered to extract premium-grade output with unmatched efficiency. Our comprehensive process guarantees a seamless, hygienic operation that maximizes product yield.
              </p>
              <p>
                Start Your Own Hair Conditioner Manufacturing Plant Business with Salvin Industries' Automatic Turnkey Plant
              </p>
              <div className="hcm-overview__features">
                <div className="hcm-overview__feature">
                  <div className="hcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                  </div>
                  <div className="hcm-overview__feature-body">
                    <p className="hcm-overview__feature-title">High Yield</p>
                    <p className="hcm-overview__feature-desc">Maximum extraction</p>
                  </div>
                </div>
                <div className="hcm-overview__feature">
                  <div className="hcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <div className="hcm-overview__feature-body">
                    <p className="hcm-overview__feature-title">Hygienic Process</p>
                    <p className="hcm-overview__feature-desc">Food-grade contact parts</p>
                  </div>
                </div>
                <div className="hcm-overview__feature">
                  <div className="hcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <div className="hcm-overview__feature-body">
                    <p className="hcm-overview__feature-title">Perfect Output</p>
                    <p className="hcm-overview__feature-desc">Advanced refining tech</p>
                  </div>
                </div>
                <div className="hcm-overview__feature">
                  <div className="hcm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div className="hcm-overview__feature-body">
                    <p className="hcm-overview__feature-title">PLC Control</p>
                    <p className="hcm-overview__feature-desc">Fully automatic operation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hcm-overview__image hcm-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src="/turnkey-brochures/images/hair-conditioner-gallery/2_vacuum_mixer.jpg" alt="Hair Conditioner Manufacturing Plant" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="hcm-section hcm-process-new" id="process-flow" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['process-flow'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-section-badge">Process Flow</div>
          <h2 className="hcm-section-title">Plant <span className="hcm-accent">Workflow</span></h2>
          <p className="hcm-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw material into premium-quality packaged product.</p>
          <div className="hcm-process-flow-container">
            {PROCESS_STEPS.map((step) => (
              <React.Fragment key={step.id}>
                <div className="hcm-process-card">
                  <div className="hcm-process-card__icon">
                    {step.id === 1 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>)}
                    {step.id === 2 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>)}
                    {step.id === 3 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>)}
                    {step.id === 4 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>)}
                    {step.id === 5 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>)}
                    {step.id === 6 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>)}
                    {step.id === 7 && (<svg className="hcm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>)}
                  </div>
                  <div className="hcm-process-card__label" style={{ minWidth: '100px' }}>{step.title}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY ═══ */}
      <section className="hcm-section hcm-machinery" id="machinery" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['machinery'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-section-badge">Machinery Used</div>
          <h2 className="hcm-section-title">Core <span className="hcm-accent">Equipment</span></h2>
          <div className="hcm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="hcm-machine-card">
                <div className="hcm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="hcm-machine-card__image" loading="lazy" />
                  <div className="hcm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="hcm-machine-card__content">
                  <h3 className="hcm-machine-card__title">{m.name}</h3>
                  <p className="hcm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQs ═══ */}
      <section className="hcm-section hcm-faq-section" id="faq" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['faq'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-section-badge">FAQs</div>
          <h2 className="hcm-section-title">Frequently Asked <span className="hcm-accent">Questions</span></h2>
          <p className="hcm-section-subtitle">Everything you need to know about our plant.</p>
          <div className="hcm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`hcm-faq__item ${isOpen ? 'hcm-faq__item--open' : ''}`}>
                  <button className="hcm-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)} type="button">
                    <span className="hcm-faq__question-text">{faq.question}</span>
                    <span className="hcm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="hcm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="hcm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="hcm-faq__answer-wrapper">
                    <div className="hcm-faq__answer-content"><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="hcm-section hcm-gallery" id="gallery" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['gallery'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-section-badge">Industrial Gallery</div>
          <h2 className="hcm-section-title">Plant <span className="hcm-accent">Gallery</span></h2>
          <div className="hcm-gallery__showcase">
            <div className="hcm-gallery__main">
              <img src={GALLERY_IMAGES[galleryIndex].src} alt={GALLERY_IMAGES[galleryIndex].caption} className="hcm-gallery__main-img" />
              <div className="hcm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="hcm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button key={i} className={`hcm-gallery__thumb ${galleryIndex === i ? 'hcm-gallery__thumb--active' : ''}`} onClick={() => setGalleryIndex(i)} type="button">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="hcm" isVisible={isVisible['why-salvin']} projectKey="HairConditionerManufacturingDetailPage" />

      {/* ═══ ENQUIRY CTA ═══ */}
      <section className="hcm-section hcm-cta" id="enquiry" data-animate>
        <div className={`hcm-container hcm-animate ${isVisible['enquiry'] ? 'hcm-animate--in' : ''}`}>
          <div className="hcm-cta__box">
            <h2>Ready to Build Your Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="hcm-cta__actions">
              <a href={`https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Hair%20Conditioner%20Manufacturing%20Plant.%20Please%20share%20details.`} target="_blank" rel="noopener noreferrer" className="hcm-btn hcm-btn--primary hcm-btn--lg">
                <svg className="hcm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="hcm-btn hcm-btn--outline hcm-btn--lg">
                <svg className="hcm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="hcm-cta__phone">Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a></p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="hcm-back-nav">
        <NavLink to="/turnkey-projects" className="hcm-btn hcm-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
