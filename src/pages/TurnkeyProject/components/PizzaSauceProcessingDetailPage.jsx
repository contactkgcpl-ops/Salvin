import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PizzaSauceProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Ingredient Feeding & Inspection' },
  { id: 2, title: 'Tomato Dicing / Chopping' },
  { id: 3, title: 'Pulp Refining' },
  { id: 4, title: 'Homogenization & Holding' },
  { id: 5, title: 'Blending & Seasoning' },
  { id: 6, title: 'Filling, Capping & Labelling' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Ingredient Feeding & Inspection Conveyor',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/1_ingredient_feeding.jpg',
    desc: 'Provides inspection and controlled feeding of tomatoes, onions, garlic, herbs, and spices before processing.'
  },
  {
    name: 'Tomato Dicer / Vegetable Chopper',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/2_tomato_dicer.jpg',
    desc: 'Cuts tomatoes and other ingredients into uniform pieces for efficient downstream processing.'
  },
  {
    name: 'Continuous Pulp Refiner',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/3_pulp_refiner.jpg',
    desc: 'Separates seeds and peels while producing smooth refined tomato pulp.'
  },
  {
    name: 'Pizza Sauce Homogenizer & Holding Tank',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/4_homogenizer.jpg',
    desc: 'Ensures uniform texture, consistency, and stable product quality before blending.'
  },
  {
    name: 'Pizza Sauce Blending & Seasoning Tank',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/5_blending_tank.jpg',
    desc: 'Mixes tomato pulp with herbs, spices, salt, sugar, and seasonings to achieve uniform flavor and consistency.'
  },
  {
    name: 'Automatic Pizza Sauce Filling, Capping & Labelling Line',
    image: '/turnkey-brochures/images/pizza-sauce-processing-gallery/6_filling_line.jpg',
    desc: 'Accurately fills, caps, labels, and prepares pizza sauce jars for final distribution.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What production capacities are available for the Pizza Sauce Processing Plant?",
    answer: "Our plants are available in various capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant process different pizza sauce recipes?",
    answer: "Yes. The plant is designed to handle various recipes with adjustable blending and seasoning parameters."
  },
  {
    question: "Does the system include filling, capping, and labelling?",
    answer: "Yes. The plant features an integrated line for automatic filling, capping, and labelling."
  },
  {
    question: "Is the plant suitable for food-grade hygienic production?",
    answer: "Absolutely. The plant uses high-quality food-grade stainless steel components ensuring maximum hygiene and compliance with safety standards."
  },
  {
    question: "Can the plant be customized according to customer requirements?",
    answer: "Yes. We can design and customize the entire line to meet your specific space, capacity, and automation requirements."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/1_ingredient_feeding.jpg', caption: 'Ingredient Feeding & Inspection Conveyor' },
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/2_tomato_dicer.jpg', caption: 'Tomato Dicer / Vegetable Chopper' },
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/3_pulp_refiner.jpg', caption: 'Continuous Pulp Refiner' },
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/4_homogenizer.jpg', caption: 'Pizza Sauce Homogenizer & Holding Tank' },
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/5_blending_tank.jpg', caption: 'Pizza Sauce Blending & Seasoning Tank' },
  { src: '/turnkey-brochures/images/pizza-sauce-processing-gallery/6_filling_line.jpg', caption: 'Automatic Pizza Sauce Filling, Capping & Labelling Line' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function PizzaSauceProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Pizza Sauce Processing Solution | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for ingredient inspection, tomato dicing, pulp refining, homogenization, blending, seasoning, filling, capping, and labelling to produce premium quality pizza sauce.')
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
    <div className="psp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="psp-hero">
        <div className="psp-hero__overlay" />
        <div className="psp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/pizza-sauce-processing-gallery/4_homogenizer.jpg')` }} />
        <div className="psp-hero__content">
          <span className="psp-hero__badge">
            <span className="psp-hero__badge-dot" />
            TURNKEY PIZZA SAUCE PROCESSING SOLUTION
          </span>
          <h1 className="psp-hero__title">
            Complete Pizza Sauce Processing Solution
          </h1>
          <p className="psp-hero__subtitle">
            Advanced turnkey solution for ingredient inspection, tomato dicing, pulp refining, homogenization, blending, seasoning, filling, capping, and labelling to produce premium quality pizza sauce with high efficiency and consistent product quality.
          </p>
          <div className="psp-hero__actions">
            <a href="#enquiry" className="psp-btn psp-btn--primary psp-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="psp-section psp-overview" id="overview" data-animate>
        <div className={`psp-container psp-animate ${isVisible['overview'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-section-badge">Plant Overview</div>
          <h2 className="psp-section-title">Complete Pizza Sauce <span className="psp-accent">Processing Solution</span></h2>
          <div className="psp-overview__grid">
            <div className="psp-overview__text">
              <p>
                The Pizza Sauce Processing Plant is designed for efficient production of high-quality pizza sauce from fresh tomatoes and ingredients through inspection, chopping, refining, homogenization, seasoning, blending, filling, capping, and labelling.
              </p>
              <p>
                The plant ensures superior product consistency, hygienic processing, and reliable operation for food processing industries.
              </p>
              <div className="psp-overview__features">
                {/* Feature 1 */}
                <div className="psp-overview__feature">
                  <div className="psp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="psp-overview__feature-body">
                    <p className="psp-overview__feature-title">Premium Pizza Sauce Production</p>
                    <p className="psp-overview__feature-desc">High-quality sauce processing</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="psp-overview__feature">
                  <div className="psp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="psp-overview__feature-body">
                    <p className="psp-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="psp-overview__feature-desc">Food grade construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="psp-overview__feature">
                  <div className="psp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="psp-overview__feature-body">
                    <p className="psp-overview__feature-title">Uniform Blending & Homogenization</p>
                    <p className="psp-overview__feature-desc">Consistent texture & taste</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="psp-overview__feature">
                  <div className="psp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="psp-overview__feature-body">
                    <p className="psp-overview__feature-title">Fully Integrated Turnkey System</p>
                    <p className="psp-overview__feature-desc">From ingredient feeding to labelling</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="psp-overview__image psp-overview__image--photo">
              <img src="/turnkey-brochures/images/pizza-sauce-processing-gallery/5_blending_tank.jpg" alt="Pizza Sauce Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="psp-section psp-process-new" id="process-flow" data-animate>
        <div className={`psp-container psp-animate ${isVisible['process-flow'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-section-badge">Process Flow</div>
          <h2 className="psp-section-title">Pizza Sauce <span className="psp-accent">Processing Workflow</span></h2>
          <p className="psp-section-subtitle">A streamlined and fully integrated processing workflow designed to produce premium quality pizza sauce with high efficiency and consistent product quality.</p>

          <div className="psp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="psp-process-card">
                  <div className="psp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="psp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="psp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="psp-process-arrow">
                    <svg className="psp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="psp-section psp-machinery" id="machinery" data-animate>
        <div className={`psp-container psp-animate ${isVisible['machinery'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-section-badge">Machinery Used</div>
          <h2 className="psp-section-title">Core <span className="psp-accent">Equipment</span></h2>
          <div className="psp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="psp-machine-card">
                <div className="psp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="psp-machine-card__image" loading="lazy" />
                  <div className="psp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="psp-machine-card__content">
                  <h3 className="psp-machine-card__title">{m.name}</h3>
                  <p className="psp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="psp-section psp-faq-section" id="faq" data-animate>
        <div className={`psp-container psp-animate ${isVisible['faq'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-section-badge">FAQs</div>
          <h2 className="psp-section-title">Frequently Asked <span className="psp-accent">Questions</span></h2>
          <p className="psp-section-subtitle">Everything you need to know about our Pizza Sauce Processing Plant.</p>

          <div className="psp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`psp-faq__item ${isOpen ? 'psp-faq__item--open' : ''}`}>
                  <button
                    className="psp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="psp-faq__question-text">{faq.question}</span>
                    <span className="psp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="psp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="psp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="psp-faq__answer-wrapper">
                    <div className="psp-faq__answer-content">
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
      <section className="psp-section psp-gallery" id="gallery" data-animate>
        <div className={`psp-container psp-animate ${isVisible['gallery'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-section-badge">Industrial Gallery</div>
          <h2 className="psp-section-title">Plant <span className="psp-accent">Gallery</span></h2>
          <div className="psp-gallery__showcase">
            <div className="psp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="psp-gallery__main-img"
              />
              <div className="psp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="psp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`psp-gallery__thumb ${galleryIndex === i ? 'psp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="psp" isVisible={isVisible['why-salvin']} />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="psp-section psp-cta" id="enquiry" data-animate>
        <div className={`psp-container psp-animate ${isVisible['enquiry'] ? 'psp-animate--in' : ''}`}>
          <div className="psp-cta__box">
            <h2>Ready to Build Your Pizza Sauce Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="psp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Pizza%20Sauce%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="psp-btn psp-btn--primary psp-btn--lg"
              >
                <svg className="psp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="psp-btn psp-btn--outline psp-btn--lg">
                <svg className="psp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="psp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="psp-back-nav">
        <NavLink to="/turnkey-project" className="psp-btn psp-btn--outline">
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
