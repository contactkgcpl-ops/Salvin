import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './HairSerumManufacturingDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material' },
  { id: 2, title: 'Ingredient Weighing & Dosing' },
  { id: 3, title: 'Batch Mixing' },
  { id: 4, title: 'Syrup Preparation' },
  { id: 5, title: 'Hair Serum Forming' },
  { id: 6, title: 'Cooling Tunnel' },
  { id: 7, title: 'Precision Cutting' },
]


/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Raw Material Dispensing System',
    image: '/assets/plants/cosmetics/hair-serum-gallery/1_raw_material_tank_new.jpg',

    desc: 'Precision raw material dispensing tank system with automated controls for accurately measuring and transferring active serum ingredients.'
  },
  {
    name: 'Serum Mixing & Blending Tank',
    image: '/assets/plants/cosmetics/hair-serum-gallery/2_serum_mixing_tank.jpg',
    desc: 'Advanced jacketed mixing vessel with slow and high-speed agitation for perfect blending of serum formulations without aeration.'
  },
  {
    name: 'Inline High Shear Homogenizer',
    image: '/assets/plants/cosmetics/hair-serum-gallery/3_inline_homogenizer.jpg',
    desc: 'High-performance homogenizer ensuring ultra-fine droplet size and perfect stability of hair serum emulsions.'
  },
  {
    name: 'Serum Holding Tank',
    image: '/assets/plants/cosmetics/hair-serum-gallery/4_holding_tank.jpg',
    desc: 'Stainless steel 316L holding tank to store the finished serum safely before it is pumped to the filling line.'
  },
  {
    name: 'Precision Liquid Filling Machine',
    image: '/assets/plants/cosmetics/hair-serum-gallery/5_filling_capping.jpg',
    desc: 'Highly accurate automatic liquid filling machine specifically designed to handle viscous hair serums and fill into small bottles.'
  },
  {
    name: 'Automatic Capping & Labeling',
    image: '/assets/plants/cosmetics/hair-serum-gallery/6_labeling_packing.jpg',
    desc: 'Integrated system for automatic placement of dropper caps, secure tightening, and precise application of wrap-around labels.'

  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Hair Serum Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Hair Serum Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
  },
  {
    question: "How much capacity can this plant handle in one day?",
    answer: "We build turnkey plants according to your needs. You can choose a small-scale plant or a large industrial plant depending on your budget and market demand."
  },
  {
    question: "Is it difficult to run this automatic plant?",
    answer: "Not at all. We design our machines with easy-to-use automatic control panels (PLC). We will also give full training to your workers on how to run the plant safely and easily."
  },
  {
    question: "Will Salvin Industries install the machines at my factory?",
    answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/assets/plants/cosmetics/hair-serum-gallery/1_raw_material_tank_new.jpg', caption: 'Raw Material Dispensing System' },
  { src: '/assets/plants/cosmetics/hair-serum-gallery/2_serum_mixing_tank.jpg', caption: 'Serum Mixing & Blending Tank' },
  { src: '/assets/plants/cosmetics/hair-serum-gallery/3_inline_homogenizer.jpg', caption: 'Inline High Shear Homogenizer' },
  { src: '/assets/plants/cosmetics/hair-serum-gallery/4_holding_tank.jpg', caption: 'Serum Holding Tank' },
  { src: '/assets/plants/cosmetics/hair-serum-gallery/5_filling_capping.jpg', caption: 'Precision Liquid Filling Machine' },
  { src: '/assets/plants/cosmetics/hair-serum-gallery/6_labeling_packing.jpg', caption: 'Automatic Capping & Labeling' }

]

export default function HairSerumManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Hair Serum Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Hair Serum Manufacturing Plant by Salvin Industries. Fully automated food-grade processing lines for hair serum products.')
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
    <div className="hsm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="hsm-hero">
        <div className="hsm-hero__overlay" />
        <div className="hsm-hero__bg" style={{ backgroundImage: `url('/assets/plants/cosmetics/cosmetic/hair_serum_hero.png')` }} />
        <div className="hsm-hero__content">
          <span className="hsm-hero__badge">
            <span className="hsm-hero__badge-dot" />
            TURNKEY HAIR SERUM MANUFACTURING SOLUTION
          </span>
          <h1 className="hsm-hero__title">
            Hair Serum Manufacturing Plant
          </h1>
          <p className="hsm-hero__subtitle">
            Start Your Own Hair Serum Manufacturing Plant Business with Salvin Industries' Automatic Turnkey Plant
          </p>
          <div className="hsm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/hair-serum.pdf"
              download="hair-serum.pdf"
              className="hsm-btn hsm-btn--primary hsm-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="hsm-btn hsm-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="hsm-section hsm-overview" id="overview" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['overview'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-section-badge">Project Overview</div>
          <h2 className="hsm-section-title">Complete Hair Serum <span className="hsm-accent">Manufacturing Solution</span></h2>
          <div className="hsm-overview__grid">
            <div className="hsm-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Hair Serum Manufacturing Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your food product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="hsm-overview__features">
                {/* Feature 1 */}
                <div className="hsm-overview__feature">
                  <div className="hsm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="hsm-overview__feature-body">
                    <p className="hsm-overview__feature-title">Fully Automated</p>
                    <p className="hsm-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="hsm-overview__feature">
                  <div className="hsm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="hsm-overview__feature-body">
                    <p className="hsm-overview__feature-title">Hygienic Design</p>
                    <p className="hsm-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="hsm-overview__feature">
                  <div className="hsm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="hsm-overview__feature-body">
                    <p className="hsm-overview__feature-title">Precise Control</p>
                    <p className="hsm-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="hsm-overview__feature">
                  <div className="hsm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="hsm-overview__feature-body">
                    <p className="hsm-overview__feature-title">Flexible & Scalable</p>
                    <p className="hsm-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hsm-overview__image hsm-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src={'/assets/plants/cosmetics/hair-serum-gallery/2_serum_mixing_tank.jpg'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS FLOW ═══ */}
      <section className="hsm-section hsm-process-new" id="process-flow" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['process-flow'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-section-badge">Process Flow</div>
          <h2 className="hsm-section-title">Manufacturing <span className="hsm-accent">Workflow</span></h2>
          <p className="hsm-section-subtitle">A highly optimized and fully integrated processing workflow designed to consistently transform premium ingredients into perfectly packaged nutritional bars.</p>

          <div className="hsm-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="hsm-process-card">
                  <div className="hsm-process-card__icon">
                    {step.id === 1 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="hsm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="hsm-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hsm-process-arrow">
                    <svg className="hsm-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="hsm-section hsm-seo-content" id="seo-guide" data-animate>
          <div className={`hsm-container hsm-animate ${isVisible['seo-guide'] ? 'hsm-animate--in' : ''}`}>
            <div className="hsm-section-badge">ABOUT THE PLANT</div>
            <h2 className="hsm-section-title">How Does The <span className="hsm-accent">Plant Work?</span></h2>
            <p className="hsm-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="hsm-seo-content__body">
              <div className="hsm-seo-content__block">
                <h3>Why Start a Hair Serum Manufacturing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Hair Serum Manufacturing Plant, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="hsm-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="hsm-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="hsm-section hsm-machinery" id="machinery" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['machinery'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-section-badge">Machinery Included</div>
          <h2 className="hsm-section-title">Core <span className="hsm-accent">Equipment</span></h2>
          <div className="hsm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="hsm-machine-card">
                <div className="hsm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="hsm-machine-card__image" loading="lazy" />
                  <div className="hsm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="hsm-machine-card__content">
                  <h3 className="hsm-machine-card__title">{m.name}</h3>
                  <p className="hsm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="pbm" isVisible={isVisible['why-salvin']} projectKey="HairSerumManufacturingDetailPage" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="hsm-section hsm-faq-section" id="faq" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['faq'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-section-badge">FAQs</div>
          <h2 className="hsm-section-title">Frequently Asked <span className="hsm-accent">Questions</span></h2>
          <p className="hsm-section-subtitle">Everything you need to know about our Hair Serum Manufacturing Plant.</p>

          <div className="hsm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`hsm-faq__item ${isOpen ? 'hsm-faq__item--open' : ''}`}>
                  <button
                    className="hsm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="hsm-faq__question-text">{faq.question}</span>
                    <span className="hsm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="hsm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="hsm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="hsm-faq__answer-wrapper">
                    <div className="hsm-faq__answer-content">
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
      <section className="hsm-section hsm-gallery" id="gallery" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['gallery'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-section-badge">Industrial Gallery</div>
          <h2 className="hsm-section-title">Plant <span className="hsm-accent">Gallery</span></h2>
          <div className="hsm-gallery__showcase">
            <div className="hsm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="hsm-gallery__main-img"
              />
              <div className="hsm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="hsm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`hsm-gallery__thumb ${galleryIndex === i ? 'hsm-gallery__thumb--active' : ''}`}
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
      <section className="hsm-section hsm-cta" id="enquiry" data-animate>
        <div className={`hsm-container hsm-animate ${isVisible['enquiry'] ? 'hsm-animate--in' : ''}`}>
          <div className="hsm-cta__box">
            <h2>Looking to establish a Hair Serum Manufacturing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="hsm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Hair%20Serum%20Manufacturing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="hsm-btn hsm-btn--primary hsm-btn--lg"
              >
                <svg className="hsm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="hsm-btn hsm-btn--outline hsm-btn--lg">
                <svg className="hsm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="hsm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="hsm-back-nav">
        <NavLink to="/turnkey-project" className="hsm-btn hsm-btn--outline">
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
