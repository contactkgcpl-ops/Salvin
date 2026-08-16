import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './IndustrialFlourMillingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Wheat Cleaning' },
  { id: 2, title: 'Destoning' },
  { id: 3, title: 'Conditioning' },
  { id: 4, title: 'Roller Milling' },
  { id: 5, title: 'Plansifting' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [

  {
    name: 'Wheat Cleaning & Pre-Cleaning Machine',
    image: '/assets/plants/food/flour-milling-gallery/1_wheat_cleaning.webp',
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Wheat Destoner Machine',
    image: '/assets/plants/food/flour-milling-gallery/2_wheat_destoning.webp',
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Wheat Conditioning System',
    image: '/assets/plants/food/flour-milling-gallery/3_wheat_conditioning.webp',
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Roller Flour Milling System',
    image: '/assets/plants/food/flour-milling-gallery/4_roller_flour_milling.webp',
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Plansifter System',
    image: '/assets/plants/food/flour-milling-gallery/5_plansifter.webp',
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Automatic Flour Packaging Machine',
    image: '/assets/plants/food/flour-milling-gallery/6_automatic_flour_packaging.webp',
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]
/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Complete Industrial Flour Milling Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Complete Industrial Flour Milling Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
    question: "Will the final product taste natural and fresh?",
    answer: "Yes, definitely. Our machines use advanced technology to ensure your product keeps its original color, natural taste, and healthy nutrients."
  },
  {
    question: "Will Salvin Industries install the machines at my factory?",
    answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/assets/plants/food/flour-milling-gallery/1_wheat_cleaning.webp', caption: 'Wheat Cleaning & Pre-Cleaning Machine' },
  { src: '/assets/plants/food/flour-milling-gallery/2_wheat_destoning.webp', caption: 'Wheat Destoner Machine' },
  { src: '/assets/plants/food/flour-milling-gallery/3_wheat_conditioning.webp', caption: 'Wheat Conditioning System' },
  { src: '/assets/plants/food/flour-milling-gallery/4_roller_flour_milling.webp', caption: 'Roller Flour Milling System' },
  { src: '/assets/plants/food/flour-milling-gallery/5_plansifter.webp', caption: 'Plansifter System' },
  { src: '/assets/plants/food/flour-milling-gallery/6_automatic_flour_packaging.webp', caption: 'Automatic Flour Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function IndustrialFlourMillingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Industrial Flour Milling Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for industrial flour milling, integrating cleaning, conditioning, roller milling, and packaging to produce premium quality flour.')
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
    <div className="ifm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="ifm-hero">
        <div className="ifm-hero__overlay" />
        <div className="ifm-hero__bg" style={{ backgroundImage: `url('/assets/core/heroes/hero-banners/industrial_flour_milling_hero.webp')` }} />
        <div className="ifm-hero__content">
          <span className="ifm-hero__badge">
            <span className="ifm-hero__badge-dot" />
            TURNKEY FLOUR MILLING SOLUTION
          </span>
          <h1 className="ifm-hero__title">
            Complete Industrial Flour Milling Plant
          </h1>
          <p className="ifm-hero__subtitle">
            Start Your Own Complete Industrial Flour Milling Plant Business with Salvin Industries' Automatic Turnkey Plant
          </p>
          <div className="ifm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/wheat_flour.pdf"
              download="wheat_flour.pdf"
              className="ifm-btn ifm-btn--primary ifm-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="ifm-btn ifm-btn--primary ifm-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="ifm-section ifm-overview" id="overview" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['overview'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Plant Overview</div>
          <h2 className="ifm-section-title">Complete Industrial Flour Milling <span className="ifm-accent">Plant</span></h2>
          <div className="ifm-overview__grid">
            <div className="ifm-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Complete Industrial Flour Milling Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your food product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="ifm-overview__features">
                {/* Feature 1 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Premium Flour Production</p>
                    <p className="ifm-overview__feature-desc">High-quality Atta, Maida, Sooji and Rava output.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Fully Automated Processing Line</p>
                    <p className="ifm-overview__feature-desc">Reduced labor and increased efficiency.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Advanced Milling Technology</p>
                    <p className="ifm-overview__feature-desc">Maximum flour yield and product consistency.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Complete Turnkey Solution</p>
                    <p className="ifm-overview__feature-desc">Design, manufacturing and installation support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ifm-overview__image ifm-overview__image--photo">
              <img src="/assets/plants/food/flour-milling-gallery/6_automatic_flour_packaging.webp" alt="Industrial Flour Milling Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="ifm-section ifm-process-new" id="process-flow" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['process-flow'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Process Flow</div>
          <h2 className="ifm-section-title">Industrial Flour Milling <span className="ifm-accent">Workflow</span></h2>
          <p className="ifm-section-subtitle">From raw wheat cleaning to premium flour packaging, our continuous processing line guarantees efficiency and quality at every step.</p>

          <div className="ifm-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="ifm-process-card">
                  <div className="ifm-process-card__icon">
                    {step.id === 1 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="ifm-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="ifm-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="ifm-process-arrow">
                    <svg className="ifm-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="ifm-section ifm-seo-content" id="seo-guide" data-animate>
          <div className={`ifm-container ifm-animate ${isVisible['seo-guide'] ? 'ifm-animate--in' : ''}`}>
            <div className="ifm-section-badge">ABOUT THE PLANT</div>
            <h2 className="ifm-section-title">How Does The <span className="ifm-accent">Plant Work?</span></h2>
            <p className="ifm-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="ifm-seo-content__body">
              <div className="ifm-seo-content__block">
                <h3>Why Start a Complete Industrial Flour Milling Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Complete Industrial Flour Milling Plant, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="ifm-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="ifm-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="ifm-section ifm-machinery" id="machinery" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['machinery'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Machinery Used</div>
          <h2 className="ifm-section-title">Core <span className="ifm-accent">Equipment</span></h2>
          <div className="ifm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="ifm-machine-card">
                <div className="ifm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="ifm-machine-card__image" loading="lazy" />
                  <div className="ifm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="ifm-machine-card__content">
                  <h3 className="ifm-machine-card__title">{m.name}</h3>
                  <p className="ifm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="ifm-section ifm-faq-section" id="faq" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['faq'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">FAQs</div>
          <h2 className="ifm-section-title">Frequently Asked <span className="ifm-accent">Questions</span></h2>
          <p className="ifm-section-subtitle">Everything you need to know about our Industrial Flour Milling Plant.</p>

          <div className="ifm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`ifm-faq__item ${isOpen ? 'ifm-faq__item--open' : ''}`}>
                  <button
                    className="ifm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="ifm-faq__question-text">{faq.question}</span>
                    <span className="ifm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="ifm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="ifm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="ifm-faq__answer-wrapper">
                    <div className="ifm-faq__answer-content">
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
      <section className="ifm-section ifm-gallery" id="gallery" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['gallery'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-section-badge">Industrial Gallery</div>
          <h2 className="ifm-section-title">Plant <span className="ifm-accent">Gallery</span></h2>
          <div className="ifm-gallery__showcase">
            <div className="ifm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="ifm-gallery__main-img"
              />
              <div className="ifm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="ifm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`ifm-gallery__thumb ${galleryIndex === i ? 'ifm-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="ifm" isVisible={isVisible['why-salvin']} projectKey="IndustrialFlourMillingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="ifm-section ifm-cta" id="enquiry" data-animate>
        <div className={`ifm-container ifm-animate ${isVisible['enquiry'] ? 'ifm-animate--in' : ''}`}>
          <div className="ifm-cta__box">
            <h2>Ready to Build Your Industrial Flour Milling Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="ifm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Industrial%20Flour%20Milling%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="ifm-btn ifm-btn--primary ifm-btn--lg"
              >
                <svg className="ifm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="ifm-btn ifm-btn--outline ifm-btn--lg">
                <svg className="ifm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="ifm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="ifm-back-nav">
        <NavLink to="/turnkey-project" className="ifm-btn ifm-btn--outline">
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
