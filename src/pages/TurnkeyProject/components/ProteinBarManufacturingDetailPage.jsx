import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './ProteinBarManufacturingDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material' },
  { id: 2, title: 'Ingredient Weighing & Dosing' },
  { id: 3, title: 'Batch Mixing' },
  { id: 4, title: 'Syrup Preparation' },
  { id: 5, title: 'Protein Bar Forming' },
  { id: 6, title: 'Cooling Tunnel' },
  { id: 7, title: 'Precision Cutting' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Ingredient Dosing & Mixing System',
    image: '/turnkey-brochures/images/protein-bar-gallery/1_ingredient_dosing.jpg',
    desc: 'Fully automated multi-ingredient dosing system that ensures accurate weighing and homogeneous mixing of dry powders, oats, and functional ingredients.'
  },
  {
    name: 'Syrup Preparation System',
    image: '/turnkey-brochures/images/protein-bar-gallery/2_syrup_preparation.jpg',
    desc: 'Advanced temperature-controlled kettles designed to precisely prepare binding syrups, ensuring consistent viscosity and perfect texture for bar binding.'
  },
  {
    name: 'Protein Bar Mass Mixer',
    image: '/turnkey-brochures/images/protein-bar-gallery/3_mass_mixer.jpg',
    desc: 'Heavy-duty continuous mass mixer that uniformly blends dry ingredients with prepared syrups to create a consistent, workable protein bar dough.'
  },
  {
    name: 'Protein Bar Forming Machine',
    image: '/turnkey-brochures/images/protein-bar-gallery/4_forming_machine.jpg',
    desc: 'Precision forming extruder and slab roller unit that continuously shapes the mixed mass into uniform slabs with highly accurate thickness control.'
  },
  {
    name: 'Protein Bar Cutting Machine',
    image: '/turnkey-brochures/images/protein-bar-gallery/5_cutting_machine.jpg',
    desc: 'High-speed ultrasonic or guillotine cutting system delivering exact portion control, clean cuts, and minimal product wastage across continuous operation.'
  },
  {
    name: 'Flow Wrapping & Packaging Machine',
    image: '/turnkey-brochures/images/protein-bar-gallery/6_flow_wrapping.jpg',
    desc: 'Fully automatic horizontal form-fill-seal flow wrapper providing hygienic, airtight packaging to maximize shelf life and maintain product freshness.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the production capacity of the Protein Bar Manufacturing Plant?",
    answer: "Our turnkey plants are available in various capacities, ranging from small-batch pilot lines to fully automated high-speed production systems exceeding 10,000 bars per hour."
  },
  {
    question: "Can the plant handle different types of bar recipes?",
    answer: "Yes. The equipment is highly versatile and designed to process a wide range of formulations including protein bars, energy bars, granola bars, and cereal bars with varying viscosities and ingredient profiles."
  },
  {
    question: "Is the dosing and mixing process fully automated?",
    answer: "Yes, our plants integrate advanced PLC-based control systems for precise automated ingredient weighing, dosing, and mixing, which eliminates human error and guarantees batch-to-batch consistency."
  },
  {
    question: "What sanitation standards does the equipment meet?",
    answer: "All our machinery is constructed using food-grade SS304/SS316L stainless steel, featuring hygienic designs with easy-to-clean components that comply with stringent global food safety and GMP standards."
  },
  {
    question: "Does Salvin provide installation and operator training?",
    answer: "Absolutely. Salvin offers complete turnkey support including plant layout design, equipment installation, commissioning, and comprehensive on-site training for your operators and maintenance personnel."
  },
  {
    question: "Can chocolate enrobing be integrated into the line?",
    answer: "Yes, an optional chocolate enrobing and cooling section can be seamlessly integrated into the continuous production line to coat bars before final packaging."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/protein-bar-gallery/1_ingredient_dosing.jpg', caption: 'Ingredient Dosing & Mixing System' },
  { src: '/turnkey-brochures/images/protein-bar-gallery/2_syrup_preparation.jpg', caption: 'Syrup Preparation System' },
  { src: '/turnkey-brochures/images/protein-bar-gallery/3_mass_mixer.jpg', caption: 'Protein Bar Mass Mixer' },
  { src: '/turnkey-brochures/images/protein-bar-gallery/4_forming_machine.jpg', caption: 'Protein Bar Forming Machine' },
  { src: '/turnkey-brochures/images/protein-bar-gallery/5_cutting_machine.jpg', caption: 'Protein Bar Cutting Machine' },
  { src: '/turnkey-brochures/images/protein-bar-gallery/6_flow_wrapping.jpg', caption: 'Flow Wrapping Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function ProteinBarManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Protein Bar Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Protein Bar Manufacturing Plant by Salvin Industries. Fully automated food-grade processing lines for protein bars, energy bars, and nutrition bars.')
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
    <div className="pbm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="pbm-hero">
        <div className="pbm-hero__overlay" />
        <div className="pbm-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/protein-bar-gallery/1_ingredient_dosing.jpg')` }} />
        <div className="pbm-hero__content">
          <span className="pbm-hero__badge">
            <span className="pbm-hero__badge-dot" />
            TURNKEY PROTEIN BAR MANUFACTURING SOLUTION
          </span>
          <h1 className="pbm-hero__title">
            Protein Bar Manufacturing Plant
          </h1>
          <p className="pbm-hero__subtitle">
            Complete Turnkey Solution For Advanced Ingredient Dosing, Mixing, Forming, Cutting And Packaging Of Nutritional Bars
          </p>
          <div className="pbm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/protein_bar.pdf"
              download="protein_bar.pdf"
              className="pbm-btn pbm-btn--primary pbm-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="pbm-btn pbm-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="pbm-section pbm-overview" id="overview" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['overview'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-section-badge">Project Overview</div>
          <h2 className="pbm-section-title">Complete Protein Bar <span className="pbm-accent">Manufacturing Solution</span></h2>
          <div className="pbm-overview__grid">
            <div className="pbm-overview__text">
              <p>
                Salvin Industries' Protein Bar Manufacturing Plant is a state-of-the-art turnkey industrial solution engineered for food processors demanding high production efficiency, rigorous hygiene standards, and consistent nutritional output. Our fully automated lines cover every stage of production—from precise ingredient handling and mixing to forming, cooling, cutting, and final flow-wrap packaging.
              </p>
              <p>
                Designed with automation at its core, the plant ensures accurate recipe management and uniform product quality while significantly reducing manual intervention and product waste. Whether you are producing protein bars, energy bars, or sports nutrition bars, our flexible recipes capability and scalable capacity allow you to adapt to rapidly evolving market demands.
              </p>
              <div className="pbm-overview__features">
                {/* Feature 1 */}
                <div className="pbm-overview__feature">
                  <div className="pbm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="pbm-overview__feature-body">
                    <p className="pbm-overview__feature-title">Fully Automated</p>
                    <p className="pbm-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="pbm-overview__feature">
                  <div className="pbm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="pbm-overview__feature-body">
                    <p className="pbm-overview__feature-title">Hygienic Design</p>
                    <p className="pbm-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="pbm-overview__feature">
                  <div className="pbm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="pbm-overview__feature-body">
                    <p className="pbm-overview__feature-title">Precise Control</p>
                    <p className="pbm-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="pbm-overview__feature">
                  <div className="pbm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="pbm-overview__feature-body">
                    <p className="pbm-overview__feature-title">Flexible & Scalable</p>
                    <p className="pbm-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pbm-overview__image pbm-overview__image--photo">
              <img src="/turnkey-brochures/images/protein-bar-gallery/4_forming_machine.jpg" alt="Protein Bar Manufacturing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS FLOW ═══ */}
      <section className="pbm-section pbm-process-new" id="process-flow" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['process-flow'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-section-badge">Process Flow</div>
          <h2 className="pbm-section-title">Manufacturing <span className="pbm-accent">Workflow</span></h2>
          <p className="pbm-section-subtitle">A highly optimized and fully integrated processing workflow designed to consistently transform premium ingredients into perfectly packaged nutritional bars.</p>

          <div className="pbm-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="pbm-process-card">
                  <div className="pbm-process-card__icon">
                    {step.id === 1 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="pbm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="pbm-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="pbm-process-arrow">
                    <svg className="pbm-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      <section className="pbm-section pbm-machinery" id="machinery" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['machinery'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-section-badge">Machinery Included</div>
          <h2 className="pbm-section-title">Core <span className="pbm-accent">Equipment</span></h2>
          <div className="pbm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="pbm-machine-card">
                <div className="pbm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="pbm-machine-card__image" loading="lazy" />
                  <div className="pbm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="pbm-machine-card__content">
                  <h3 className="pbm-machine-card__title">{m.name}</h3>
                  <p className="pbm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="pbm" isVisible={isVisible['why-salvin']} projectKey="ProteinBarManufacturingDetailPage" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="pbm-section pbm-faq-section" id="faq" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['faq'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-section-badge">FAQs</div>
          <h2 className="pbm-section-title">Frequently Asked <span className="pbm-accent">Questions</span></h2>
          <p className="pbm-section-subtitle">Everything you need to know about our Protein Bar Manufacturing Plant.</p>

          <div className="pbm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`pbm-faq__item ${isOpen ? 'pbm-faq__item--open' : ''}`}>
                  <button
                    className="pbm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="pbm-faq__question-text">{faq.question}</span>
                    <span className="pbm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="pbm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="pbm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="pbm-faq__answer-wrapper">
                    <div className="pbm-faq__answer-content">
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
      <section className="pbm-section pbm-gallery" id="gallery" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['gallery'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-section-badge">Industrial Gallery</div>
          <h2 className="pbm-section-title">Plant <span className="pbm-accent">Gallery</span></h2>
          <div className="pbm-gallery__showcase">
            <div className="pbm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="pbm-gallery__main-img"
              />
              <div className="pbm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="pbm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`pbm-gallery__thumb ${galleryIndex === i ? 'pbm-gallery__thumb--active' : ''}`}
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
      <section className="pbm-section pbm-cta" id="enquiry" data-animate>
        <div className={`pbm-container pbm-animate ${isVisible['enquiry'] ? 'pbm-animate--in' : ''}`}>
          <div className="pbm-cta__box">
            <h2>Looking to establish a Protein Bar Manufacturing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="pbm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Protein%20Bar%20Manufacturing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="pbm-btn pbm-btn--primary pbm-btn--lg"
              >
                <svg className="pbm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="pbm-btn pbm-btn--outline pbm-btn--lg">
                <svg className="pbm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="pbm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="pbm-back-nav">
        <NavLink to="/turnkey-project" className="pbm-btn pbm-btn--outline">
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
