import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './JackfruitDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Jackfruit Reception' },
  { id: 2, title: 'Washing & Latex Removal' },
  { id: 3, title: 'Cutting & Preparation' },
  { id: 4, title: 'Blanching' },
  { id: 5, title: 'Can Filling & Syrup Dosing' },
  { id: 6, title: 'Retort Sterilization' },
  { id: 7, title: 'Packing & Dispatch' },
]




/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Latex Spray Washer',
    image: '/turnkey-brochures/images/jackfruit-gallery/latex_spray_washer.jpg',
    desc: 'Conveyor wash cabin with high-pressure fan sprayers designed to eliminate sticky latex, dirt, and impurities from raw incoming jackfruits.'
  },
  {
    name: 'Retort Autoclave Sterilizer',
    image: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave_sterilizer.jpg',
    desc: 'Horizontal steam autoclave sterilizer with PLC record loggers that processes sealed cans under high pressure to achieve commercial sterility.'
  },
  {
    name: 'Automatic Can Seamer',
    image: '/turnkey-brochures/images/jackfruit-gallery/automatic_can_seamer.jpg',
    desc: 'Heavy-duty automatic can seamer applying double-seam vacuum lids to ensure a hermetic seal for maximum shelf life.'
  },
  {
    name: 'Can Rotary Filler',
    image: '/turnkey-brochures/images/jackfruit-gallery/can_rotary_filler.jpg',
    desc: 'Sanitary volumetric rotary filler designed for precise placement of jackfruit bulbs and controlled syrup/brine dosing into standard tin cans.'
  },
  {
    name: 'Syrup Prep Vessel',
    image: '/turnkey-brochures/images/jackfruit-gallery/syrup_prep_vessel.jpg',
    desc: 'Stainless-steel jacketed mixing vessel equipped with agitators for precise preparation, heating, and holding of sugar syrup or brine solutions prior to dosing.'
  },
  {
    name: 'Continuous Belt Blancher',
    image: '/turnkey-brochures/images/jackfruit-gallery/continuous_belt_blancher.jpg',
    desc: 'Hot-water continuous belt blanching chamber that softens jackfruit fibers, deactivates coloring enzymes, and preserves texture.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What products can be packed in this line?",
    answer: "This line is designed for jackfruit bulbs packed in brine, syrup, or other approved preservation media."
  },
  {
    question: "What is the production capacity of the plant?",
    answer: "Capacity can be customized from small-scale to fully automatic industrial production requirements."
  },
  {
    question: "Why is retort sterilization required?",
    answer: "Retort sterilization ensures commercial sterility, longer shelf life, and food safety compliance."
  },
  {
    question: "What type of packaging is supported?",
    answer: "The line supports metal cans of various sizes with automatic filling and seaming systems."
  },
  {
    question: "Is the plant supplied as a complete turnkey solution?",
    answer: "Yes, Salvin provides engineering, manufacturing, installation, commissioning, and operator training."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/jackfruit-gallery/latex_spray_washer.jpg', caption: 'Latex Spray Washer' },
  { src: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave_sterilizer.jpg', caption: 'Retort Autoclave Sterilizer' },
  { src: '/turnkey-brochures/images/jackfruit-gallery/automatic_can_seamer.jpg', caption: 'Automatic Can Seamer' },
  { src: '/turnkey-brochures/images/jackfruit-gallery/can_rotary_filler.jpg', caption: 'Can Rotary Filler' },
  { src: '/turnkey-brochures/images/jackfruit-gallery/syrup_prep_vessel.jpg', caption: 'Syrup Prep Vessel' },
  { src: '/turnkey-brochures/images/jackfruit-gallery/continuous_belt_blancher.jpg', caption: 'Continuous Belt Blancher' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function JackfruitDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Jackfruit Canning & Retort Line | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Jackfruit Canning & Retort Line by Salvin Industries. From raw fruit reception to retort sterilization — automated, food-grade processing lines.')
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
    <div className="jcp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="jcp-hero">
        <div className="jcp-hero__overlay" />
        <div className="jcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/jackfruit-gallery/retort_autoclave_sterilizer.jpg')` }} />
        <div className="jcp-hero__content">
          <span className="jcp-hero__badge">
            <span className="jcp-hero__badge-dot" />
            TURNKEY JACKFRUIT PROCESSING SOLUTION
          </span>
          <h1 className="jcp-hero__title">
            Jackfruit Canning & Retort Line
          </h1>
          <p className="jcp-hero__subtitle">
            Complete Turnkey Solution For Peeling, Slicing, Syrup Staging, Can Filling, Seaming And Retort Sterilization
          </p>
          <div className="jcp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/jecked_fruit_canned_line.pdf"
              download="jecked_fruit_canned_line.pdf"
              className="jcp-btn jcp-btn--primary jcp-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="jcp-btn jcp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="jcp-section jcp-overview" id="overview" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['overview'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-section-badge">Plant Overview</div>
          <h2 className="jcp-section-title">Complete Jackfruit <span className="jcp-accent">Canning Solution</span></h2>
          <div className="jcp-overview__grid">
            <div className="jcp-overview__text">
              <p>
                Salvin Industries' Jackfruit Canning & Retort Line is a heavy-duty turnkey plant designed for processing tropical jackfruit bulbs. From fruit prep and de-seeding to automated blanching, syrup dosing, vacuum can seaming, and retort sterilization, our line provides a complete packaging path.
              </p>
              <p>
                Jackfruit processing requires specialized handling due to sticky latex and fragile bulb textures. Our custom washers, mechanical blanchers, and pressure autoclaves handle these challenges without losing crop structure. All machinery complies with international FDA retort guidelines, ensuring maximum shelf life and product safety.
              </p>
              <div className="jcp-overview__features">
                {/* Feature 1 */}
                <div className="jcp-overview__feature">
                  <div className="jcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="jcp-overview__feature-body">
                    <p className="jcp-overview__feature-title">High Yield</p>
                    <p className="jcp-overview__feature-desc">Optimized prep systems for maximum bulb recovery</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="jcp-overview__feature">
                  <div className="jcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="jcp-overview__feature-body">
                    <p className="jcp-overview__feature-title">Hygienic Process</p>
                    <p className="jcp-overview__feature-desc">Food grade SS304/SS316L construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="jcp-overview__feature">
                  <div className="jcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="jcp-overview__feature-body">
                    <p className="jcp-overview__feature-title">FDA Compliant</p>
                    <p className="jcp-overview__feature-desc">Retort systems meet international safety standards</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="jcp-overview__feature">
                  <div className="jcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="jcp-overview__feature-body">
                    <p className="jcp-overview__feature-title">Versatile Production</p>
                    <p className="jcp-overview__feature-desc">Process sweet jackfruit or raw vegan meat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="jcp-overview__image jcp-overview__image--photo">
              <img src="/turnkey-brochures/images/jackfruit-gallery/retort_autoclave_sterilizer.jpg" alt="Jackfruit Canning Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="jcp-section jcp-process-new" id="process-flow" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['process-flow'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-section-badge">Process Flow</div>
          <h2 className="jcp-section-title">Jackfruit Canning <span className="jcp-accent">Workflow</span></h2>
          <p className="jcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw jackfruits into premium canned products while ensuring maximum efficiency, product consistency and superior food safety.</p>

          <div className="jcp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="jcp-process-card">
                  <div className="jcp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="jcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="jcp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="jcp-process-arrow">
                    <svg className="jcp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
          <h2 className="rcp-section-title" dangerouslySetInnerHTML={{ __html: `A Simple Guide to <span class='rcp-accent'>Jackfruit Packaging</span>` }} />
          <p className="rcp-section-subtitle">Understanding the packaging process, accuracy, and market impact.</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Jackfruit Business?</h3>
              <p>Jackfruit is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices and food products is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Jackfruit, you can build a highly profitable and recurring FMCG business.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does the Jackfruit Processing Work?</h3>
              <p>The process starts by thoroughly cleaning whole raw materials to remove stones and dust. They are then gently processed or roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty processing system that grinds or refines them into a perfect consistency. This product is perfectly mixed in a ribbon blender or homogenizer before being automatically packed into sealed pouches.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>When processing gets too hot during grinding or refining, products lose their flavor and aroma. Our equipment is equipped with advanced cooling jackets and precise temperature controls. Furthermore, our precision ribbon blenders and homogenizers ensure that every single pouch of Jackfruit has the exact same taste, texture, and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="jcp-section jcp-machinery" id="machinery" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['machinery'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-section-badge">Machinery Used</div>
          <h2 className="jcp-section-title">Core <span className="jcp-accent">Equipment</span></h2>
          <div className="jcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="jcp-machine-card">
                <div className="jcp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="jcp-machine-card__image" loading="lazy" />
                  <div className="jcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="jcp-machine-card__content">
                  <h3 className="jcp-machine-card__title">{m.name}</h3>
                  <p className="jcp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="jcp-section jcp-faq-section" id="faq" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['faq'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-section-badge">FAQs</div>
          <h2 className="jcp-section-title">Frequently Asked <span className="jcp-accent">Questions</span></h2>
          <p className="jcp-section-subtitle">Everything you need to know about our Jackfruit Canning & Retort Line.</p>

          <div className="jcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`jcp-faq__item ${isOpen ? 'jcp-faq__item--open' : ''}`}>
                  <button
                    className="jcp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="jcp-faq__question-text">{faq.question}</span>
                    <span className="jcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="jcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="jcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="jcp-faq__answer-wrapper">
                    <div className="jcp-faq__answer-content">
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
      <section className="jcp-section jcp-gallery" id="gallery" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['gallery'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-section-badge">Industrial Gallery</div>
          <h2 className="jcp-section-title">Plant <span className="jcp-accent">Gallery</span></h2>
          <div className="jcp-gallery__showcase">
            <div className="jcp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="jcp-gallery__main-img"
              />
              <div className="jcp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="jcp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`jcp-gallery__thumb ${galleryIndex === i ? 'jcp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="jcp" isVisible={isVisible['why-salvin']} projectKey="JackfruitDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="jcp-section jcp-cta" id="enquiry" data-animate>
        <div className={`jcp-container jcp-animate ${isVisible['enquiry'] ? 'jcp-animate--in' : ''}`}>
          <div className="jcp-cta__box">
            <h2>Ready to Build Your Jackfruit Canning & Retort Line?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="jcp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Jackfruit%20Canning%20and%20Retort%20Line.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="jcp-btn jcp-btn--primary jcp-btn--lg"
              >
                <svg className="jcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="jcp-btn jcp-btn--outline jcp-btn--lg">
                <svg className="jcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="jcp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="jcp-back-nav">
        <NavLink to="/turnkey-project" className="jcp-btn jcp-btn--outline">
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
