import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  {
    "id": 1,
    "title": "Mix Preparation"
  },
  {
    "id": 2,
    "title": "Homogenization"
  },
  {
    "id": 3,
    "title": "Pasteurization"
  },
  {
    "id": 4,
    "title": "Aging"
  },
  {
    "id": 5,
    "title": "Continuous Freezing"
  },
  {
    "id": 6,
    "title": "Fruit/Nut Feeding"
  },
  {
    "id": 7,
    "title": "Filling & Hardening"
  }
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    "name": "Raw Milk Reception System",
    "desc": "For receiving, filtering, and chilling raw milk.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/1.jpg"
  },
  {
    "name": "Mix Preparation & Pasteurization",
    "desc": "Skid-mounted mixing, heating, and homogenizing unit.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/2.jpg"
  },
  {
    "name": "Ice Cream Aging Tank",
    "desc": "Chilled tanks to let the mix rest and hydrate.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/3.jpg"
  },
  {
    "name": "Continuous Ice Cream Freezer",
    "desc": "Whips air (overrun) and freezes the mix instantly.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/4.jpg"
  },
  {
    "name": "Automatic Cup & Cone Filling",
    "desc": "Automatically fills and caps cups, cones, and tubs.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/5.jpg"
  },
  {
    "name": "Hardening Tunnel",
    "desc": "Deep freezes the product at -30°C to lock the texture.",
    "image": "/turnkey-brochures/images/ice-cream-gallery/6.jpg"
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    "question": "How much space is required to set up this processing plant?",
    "answer": "The space requirement depends on your production capacity. A basic entry-level plant requires about 1,000 to 1,500 sq. ft., while higher capacity automatic lines may need 3,000+ sq. ft. including cold storage space."
  },
  {
    "question": "Do you provide installation and operator training?",
    "answer": "Yes, absolutely! We provide complete turnkey services. Our engineering team will install the machinery at your site, run trial batches, and provide hands-on training to your staff on how to operate and clean the plant."
  },
  {
    "question": "What are the power and utility requirements?",
    "answer": "You will need a 3-phase commercial electrical connection. Depending on the equipment, you may also need a steam boiler, a chilling plant, and a compressed air setup. We will provide a complete utility layout chart during the planning phase."
  },
  {
    "question": "Are these plants suitable for startups, or only large factories?",
    "answer": "We manufacture plants for all scales! We offer semi-automatic skid-mounted plants which are perfect and budget-friendly for startups, as well as fully-automatic continuous lines for large-scale industrial factories."
  },
  {
    "question": "What is 'overrun' and can you control it?",
    "answer": "Overrun is the air whipped into ice cream, which gives it a soft texture. Our Continuous Freezers allow you to precisely control overrun from 30% up to 120%."
  }
];

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/1.jpg",
    "caption": "Raw Milk Reception System"
  },
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/2.jpg",
    "caption": "Mix Preparation & Pasteurization"
  },
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/3.jpg",
    "caption": "Ice Cream Aging Tank"
  },
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/4.jpg",
    "caption": "Continuous Ice Cream Freezer"
  },
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/5.jpg",
    "caption": "Automatic Cup & Cone Filling"
  },
  {
    "src": "/turnkey-brochures/images/ice-cream-gallery/6.jpg",
    "caption": "Hardening Tunnel & Cold Storage"
  }
]

export default function IceCreamProcessingPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'Fully Automatic Ice Cream Processing Plant | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey solution for Fully Automatic Ice Cream Processing Plant. High efficiency, robust design, and automatic processing.')
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
    <div className="rcp-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/dairy-heroes/ice-cream.png')` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            Fully Automatic Ice Cream Processing Plant
          </h1>
          <p className="rcp-hero__subtitle">
            Advanced turnkey solution to produce premium quality products with high efficiency and consistent product quality.
          </p>
          <div className="rcp-hero__actions">
            <NavLink to="/contact" className="rcp-btn rcp-btn--primary rcp-btn--lg">
              Request Information
            </NavLink>
            <a href="#enquiry" className="rcp-btn rcp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Commercial Ice Cream <span className="rcp-accent">Manufacturing Plant</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>Start a highly successful business with our <strong>Fully Automatic Ice Cream Processing Plant</strong>. Processed food products are a daily essential in every household, ensuring continuous, high-volume market demand all year round.</p>
              <p>The manufacturing process starts by receiving raw materials and properly cleaning them. Next, the materials are processed, blended, and standardized to get the exact consistency and taste profile you require for the final product.</p>
              <p>Finally, the finished product is rapidly packed into hygienic packaging using our high-speed automated machines. The complete end-to-end process is PLC controlled for ultimate efficiency and product safety.</p>
              <div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">High ROI</p>
                    <p className="rcp-overview__feature-desc">Low production cost, high profit</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">100% Hygienic</p>
                    <p className="rcp-overview__feature-desc">SS304/SS316 food-grade design</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Consistent Quality</p>
                    <p className="rcp-overview__feature-desc">Perfect blending and refining</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">PLC Control</p>
                    <p className="rcp-overview__feature-desc">Fully automatic operation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src={GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES[0].src : ``} alt="Plant Overview" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Workflow</span></h2>
          <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw materials into premium-quality packaged product.</p>

                    <div className="rcp-process-flow-container">
            {Array.from({ length: 7 }).map((_, i) => {
              const fallbacks = ["Receiving", "Washing", "Sorting", "Processing", "Quality Control", "Packaging", "Dispatch"];
              const stepTitle = PROCESS_STEPS[i] ? (PROCESS_STEPS[i].title || PROCESS_STEPS[i].name) : fallbacks[i];
              
              let Icon;
              if (i === 0) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
              else if (i === 1) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>;
              else if (i === 2) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>;
              else if (i === 3) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
              else if (i === 4) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="9" y1="14" x2="15" y2="14"></line><line x1="9" y1="10" x2="15" y2="10"></line></svg>;
              else if (i === 5) Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
              else Icon = <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>;
              return (
                <React.Fragment key={i}>
                  <div className="rcp-process-card">
                    <div className="rcp-process-card__icon">
                      {Icon}
                    </div>
                    <div className="rcp-process-card__label">{stepTitle}</div>
                  </div>
                  {i < 6 && (
                    <div className="rcp-process-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>


      
        {/* ═══ COMPREHENSIVE GUIDE (SEO) ═══ */}
        <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['seo-guide'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Ice Cream Processing Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Ice Cream Processing Business?</h3>
                <p>The demand for high-quality, hygienically processed Ice Cream Processing is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Ice Cream Processing Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Ice Cream Processing processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['machinery'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Machinery Used</div>
          <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
          <div className="rcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="rcp-machine-card">
                <div className="rcp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="rcp-machine-card__content">
                  <h3 className="rcp-machine-card__title">{m.name}</h3>
                  <p className="rcp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['faq'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our Ice Cream Processing Plant Plant.</p>

          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rcp-faq__item ${isOpen ? 'rcp-faq__item--open' : ''}`}>
                  <button
                    className="rcp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content">
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
      <section className="rcp-section rcp-gallery" id="gallery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['gallery'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Industrial Gallery</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
          <div className="rcp-gallery__showcase">
            <div className="rcp-gallery__main">
              {GALLERY_IMAGES.length > 0 ? (
                <>
                  <img
                    src={GALLERY_IMAGES[galleryIndex]?.src}
                    alt={GALLERY_IMAGES[galleryIndex]?.caption}
                    className="rcp-gallery__main-img"
                  />
                  <div className="rcp-gallery__caption">{GALLERY_IMAGES[galleryIndex]?.caption}</div>
                </>
              ) : (
                <div className="rcp-gallery__placeholder">No Images Available</div>
              )}
            </div>
            {GALLERY_IMAGES.length > 1 && (
              <div className="rcp-gallery__thumbs">
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    className={`rcp-gallery__thumb ${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}`}
                    onClick={() => setGalleryIndex(i)}
                    type="button"
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="${componentName}" />

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['enquiry'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Ice Cream Plant?</h2>
            <p>
              Get in touch with our engineering experts today. We provide end-to-end turnkey solutions from factory design to final commissioning and training.
            </p>
            <NavLink to="/contact" className="rcp-btn rcp-btn--primary rcp-btn--lg">
              Contact Our Engineers
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
