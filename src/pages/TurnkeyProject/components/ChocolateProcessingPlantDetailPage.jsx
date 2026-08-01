import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: "Cocoa Roasting & Grinding" },
  { id: 2, title: "Conching (Smooth Mixing)" },
  { id: 3, title: "Tempering (Shine Control)" },
  { id: 4, title: "Molding (Shaping)" },
  { id: 5, title: "Cooling Tunnel" },
  { id: 6, title: "Foil or Wrapper Packing" }
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: "Cocoa Bean Roaster",
    desc: "Roasts the raw beans to bring out the chocolate flavor.",
    image: "/turnkey-brochures/images/chocolate-gallery/1_cocoa_roaster.webp"
  },
  {
    name: "Cocoa Grinder & Liquor Tank",
    desc: "Grinds the roasted beans into a thick liquid chocolate.",
    image: "/turnkey-brochures/images/chocolate-gallery/2_cocoa_grinder.webp"
  },
  {
    name: "Chocolate Conche",
    desc: "Mixes and refines the chocolate so it melts in your mouth.",
    image: "/turnkey-brochures/images/chocolate-gallery/3_chocolate_conche.webp"
  },
  {
    name: "Tempering Machine",
    desc: "Heats and cools chocolate so it gets a shiny look and hard snap.",
    image: "/turnkey-brochures/images/chocolate-gallery/4_chocolate_mixer.webp"
  },
  {
    name: "Chocolate Molding Line",
    desc: "Pours the liquid chocolate into bar or candy shapes.",
    image: "/turnkey-brochures/images/chocolate-gallery/5_chocolate_moulding.webp"
  },
  {
    name: "Foil Wrapping Machine",
    desc: "Packs the finished chocolate bars in foil or plastic.",
    image: "/turnkey-brochures/images/chocolate-gallery/6_chocolate_wrapping.webp"
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    "question": "What is conching, and why is it important?",
    "answer": "Conching is a crucial mixing process that grinds the chocolate particles down to a microscopic size while heating and aerating the mixture. This is what removes bitterness and gives premium chocolate its incredibly smooth, melt-in-the-mouth texture."
  },
  {
    "question": "Why does chocolate need to be tempered?",
    "answer": "Tempering is the process of precisely heating and cooling liquid chocolate. This aligns the cocoa butter crystals so that the final chocolate bar is shiny, snaps cleanly when broken, and doesn't melt instantly in your hands."
  },
  {
    "question": "Can this plant make both chocolate bars and center-filled chocolates?",
    "answer": "Yes! Our automatic molding lines can be equipped with 'One-Shot' depositors. This amazing technology allows you to inject a liquid center (like caramel or strawberry cream) at the exact same time as the chocolate shell is formed."
  },
  {
    "question": "Does the plant process raw cocoa beans or just cocoa powder?",
    "answer": "Our comprehensive turnkey plants can do both. We can supply bean-to-bar systems (which roast and grind raw cocoa beans into liquor) or compound chocolate systems (which mix readymade cocoa powder, sugar, and fat)."
  }
];

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/chocolate-gallery/1_cocoa_roaster.webp', caption: 'Cocoa Roaster' },
  { src: '/turnkey-brochures/images/chocolate-gallery/2_cocoa_grinder.webp', caption: 'Cocoa Grinder' },
  { src: '/turnkey-brochures/images/chocolate-gallery/3_chocolate_conche.webp', caption: 'Chocolate Conche' },
  { src: '/turnkey-brochures/images/chocolate-gallery/4_chocolate_mixer.webp', caption: 'Chocolate Mixer' },
  { src: '/turnkey-brochures/images/chocolate-gallery/5_chocolate_moulding.webp', caption: 'Chocolate Moulding' },
  { src: '/turnkey-brochures/images/chocolate-gallery/6_chocolate_wrapping.webp', caption: 'Chocolate Wrapping' },
  { src: '/turnkey-brochures/images/chocolate-gallery/6_packaging_system.webp', caption: 'Packaging System' }
];

export default function ChocolateProcessingPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'Fully Automatic Chocolate Processing Plant | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey solution for Fully Automatic Chocolate Processing Plant. High efficiency, robust design, and automatic processing.')
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
    if (GALLERY_IMAGES.length > 0) {
      const interval = setInterval(() => {
        setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="rcp-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero_chocolate.webp')`, backgroundColor: '#333' }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY PROCESSING SOLUTION
          </span>
          <h1 className="rcp-hero__title">
            Fully Automatic Chocolate Processing Plant
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
          <h2 className="rcp-section-title">Chocolate Plant <span className="rcp-accent">Overview</span></h2>
          <p className="rcp-section-subtitle">Discover our industrial-grade, fully automatic manufacturing solutions.</p>
          
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>Launch your premium chocolate brand with our <strong>Fully Automatic Chocolate Processing Plant</strong>. Salvin Industries is a trusted manufacturer of high-end commercial chocolate making machinery, providing complete bean-to-bar turnkey solutions.</p>
              <p>Our advanced industrial setup includes cocoa roasters, high-shear conching machines, precision tempering units, and automatic molding lines. Achieve the perfect snap, glossy finish, and smooth texture with our highly efficient, temperature-controlled SS304/SS316 chocolate production equipment.</p>

              <div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
                    <p className="rcp-overview__feature-desc">Perfect processing and refining</p>
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
              {GALLERY_IMAGES.length > 0 ? (
                <img src={GALLERY_IMAGES[0].src} alt="Plant Overview" loading="lazy" />
              ) : (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Image coming soon</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Chocolate Production <span className="rcp-accent">Workflow</span></h2>
          <p className="rcp-section-subtitle">Understanding conching, tempering, and industrial molding.</p>

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
          <h2 className="rcp-section-title">A Comprehensive Guide to <span className="rcp-accent">Commercial Chocolate Processing</span></h2>
          <p className="rcp-section-subtitle">Understanding conching, tempering, and industrial molding.</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Invest in an Industrial Chocolate Plant?</h3>
              <p>Chocolate manufacturing is a prestigious, high-revenue industry. A state-of-the-art, fully automated chocolate processing plant allows you to command the premium confectionery market by producing perfectly tempered, smooth, and visually flawless chocolate bars, pralines, and compound chips at an industrial scale.</p>
            </div>
            <div className="rcp-seo-content__block">
              <h3>Industrial Chocolate Production Workflow</h3>
              <p><strong>1. Cocoa Roasting & Grinding:</strong> Raw cocoa beans are precision-roasted and ground into a rich, fluid chocolate liquor.</p>
              <p><strong>2. High-Shear Conching:</strong> The mixture undergoes intense kneading in a conche, refining particle size and developing a perfectly smooth mouthfeel.</p>
              <p><strong>3. Advanced Tempering:</strong> The chocolate is subjected to strictly controlled heating and cooling cycles to stabilize cocoa butter crystals, ensuring a glossy finish and crisp snap.</p>
              <p><strong>4. Automated Molding & Cooling:</strong> The tempered chocolate is deposited into polycarbonate molds, passed through a cooling tunnel, and rapidly packaged.</p>
            </div>
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides world-class, bean-to-bar turnkey solutions for chocolate manufacturing. Our sophisticated SS316 food-grade machinery offers unparalleled temperature control, essential for perfect tempering and conching. We empower confectionery manufacturers to achieve global quality standards with highly efficient, automated processing lines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['machinery'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Machinery Used</div>
          <h2 className="rcp-section-title">Core Chocolate <span className="rcp-accent">Equipment</span></h2>
          <div className="rcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="rcp-machine-card">
                <div className="rcp-machine-card__image-wrapper">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  ) : (
                    <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                  )}
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
          <h2 className="rcp-section-title">Chocolate Plant <span className="rcp-accent">FAQs</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our Fully Automatic Chocolate Processing Plant.</p>

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
          <h2 className="rcp-section-title">Chocolate Plant <span className="rcp-accent">Gallery</span></h2>
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
                <div className="rcp-gallery__placeholder" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>Images Coming Soon</div>
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
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="ChocolateProcessingPlantDetailPage" />

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['enquiry'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Chocolate Plant?</h2>
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
