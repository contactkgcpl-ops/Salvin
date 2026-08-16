import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './CoffeeProcessingDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Coffee Bean Cleaning' },
  { id: 2, title: 'Coffee Bean Roasting' },
  { id: 3, title: 'Coffee Bean Cooling' },
  { id: 4, title: 'Coffee Grinding' },
  { id: 5, title: 'Coffee Powder Blending' },
  { id: 6, title: 'Packaging' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [

  {
    name: 'Coffee Bean Cleaning Machine',
    image: '/assets/plants/beverages/coffee-processing-gallery/1_cleaning_machine.webp',
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Coffee Bean Roasting Machine',
    image: '/assets/plants/beverages/coffee-processing-gallery/2_roasting_machine.webp',
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Coffee Bean Cooling Conveyor',
    image: '/assets/plants/beverages/coffee-processing-gallery/3_cooling_conveyor.webp',
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Coffee Powder Grinding Machine',
    image: '/assets/plants/beverages/coffee-processing-gallery/4_grinding_machine.webp',
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Coffee Powder Blending Machine',
    image: '/assets/plants/beverages/coffee-processing-gallery/5_blending_machine.webp',
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Coffee Powder Filling & Packaging Machine',
    image: '/assets/plants/beverages/coffee-processing-gallery/6_filling_packaging.webp',
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]
/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Complete Coffee Processing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Complete Coffee Processing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
  { src: '/assets/plants/beverages/coffee-processing-gallery/1_cleaning_machine.webp', caption: 'Coffee Bean Cleaning Machine' },
  { src: '/assets/plants/beverages/coffee-processing-gallery/2_roasting_machine.webp', caption: 'Coffee Bean Roasting Machine' },
  { src: '/assets/plants/beverages/coffee-processing-gallery/3_cooling_conveyor.webp', caption: 'Coffee Bean Cooling Conveyor' },
  { src: '/assets/plants/beverages/coffee-processing-gallery/4_grinding_machine.webp', caption: 'Coffee Powder Grinding Machine' },
  { src: '/assets/plants/beverages/coffee-processing-gallery/5_blending_machine.webp', caption: 'Coffee Powder Blending Machine' },
  { src: '/assets/plants/beverages/coffee-processing-gallery/6_filling_packaging.webp', caption: 'Coffee Powder Filling & Packaging Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function CoffeeProcessingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Complete Coffee Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Advanced turnkey solution for coffee bean cleaning, roasting, cooling, grinding, blending, storage, and packaging to produce premium quality coffee powder.')
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
    <div className="cp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="cp-hero">
        <div className="cp-hero__overlay" />
        <div className="cp-hero__bg" style={{ backgroundImage: `url('/assets/plants/beverages/coffee-processing-gallery/2_roasting_machine.webp')` }} />
        <div className="cp-hero__content">
          <span className="cp-hero__badge">
            <span className="cp-hero__badge-dot" />
            TURNKEY COFFEE PROCESSING SOLUTION
          </span>
          <h1 className="cp-hero__title">
            Complete Coffee Processing Plant
          </h1>
          <p className="cp-hero__subtitle">
            Start Your Own Complete Coffee Processing Plant Business with Salvin Industries' Automatic Turnkey Plant
          </p>
          <div className="cp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/instant_coffee_processing.pdf"
              download="instant_coffee_processing.pdf"
              className="cp-btn cp-btn--primary cp-btn--lg"
            >
              Download Brochure
            </a>

            <a href="#enquiry" className="cp-btn cp-btn--primary cp-btn--lg">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="cp-section cp-overview" id="overview" data-animate>
        <div className={`cp-container cp-animate ${isVisible['overview'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-section-badge">Plant Overview</div>
          <h2 className="cp-section-title">Complete Coffee Processing <span className="cp-accent">Plant</span></h2>
          <div className="cp-overview__grid">
            <div className="cp-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Complete Coffee Processing Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your food product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="cp-overview__features">
                {/* Feature 1 */}
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Premium Coffee Powder Production</p>
                    <p className="cp-overview__feature-desc">Consistent flavor and aroma</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Uniform Roasting & Grinding</p>
                    <p className="cp-overview__feature-desc">Perfect roast characteristics</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Stainless Steel Hygienic Design</p>
                    <p className="cp-overview__feature-desc">Food grade compliance</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="cp-overview__feature">
                  <div className="cp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="cp-overview__feature-body">
                    <p className="cp-overview__feature-title">Fully Integrated Turnkey System</p>
                    <p className="cp-overview__feature-desc">From cleaning to packaging</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cp-overview__image cp-overview__image--photo">
              <img src="/assets/plants/beverages/coffee-processing-gallery/6_filling_packaging.webp" alt="Coffee Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="cp-section cp-process-new" id="process-flow" data-animate>
        <div className={`cp-container cp-animate ${isVisible['process-flow'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-section-badge">Process Flow</div>
          <h2 className="cp-section-title">Coffee <span className="cp-accent">Processing Workflow</span></h2>
          <p className="cp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw coffee beans into premium coffee powder with high efficiency and consistent product quality.</p>

          <div className="cp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="cp-process-card">
                  <div className="cp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="cp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  <div className="cp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="cp-process-arrow">
                    <svg className="cp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="cp-section cp-seo-content" id="seo-guide" data-animate>
          <div className={`cp-container cp-animate ${isVisible['seo-guide'] ? 'cp-animate--in' : ''}`}>
            <div className="cp-section-badge">ABOUT THE PLANT</div>
            <h2 className="cp-section-title">How Does The <span className="cp-accent">Plant Work?</span></h2>
            <p className="cp-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="cp-seo-content__body">
              <div className="cp-seo-content__block">
                <h3>Why Start a Complete Coffee Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Complete Coffee Processing Plant, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="cp-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="cp-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="cp-section cp-machinery" id="machinery" data-animate>
        <div className={`cp-container cp-animate ${isVisible['machinery'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-section-badge">Machinery Used</div>
          <h2 className="cp-section-title">Core <span className="cp-accent">Equipment</span></h2>
          <div className="cp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="cp-machine-card">
                <div className="cp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="cp-machine-card__image" loading="lazy" />
                  <div className="cp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="cp-machine-card__content">
                  <h3 className="cp-machine-card__title">{m.name}</h3>
                  <p className="cp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="cp-section cp-faq-section" id="faq" data-animate>
        <div className={`cp-container cp-animate ${isVisible['faq'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-section-badge">FAQs</div>
          <h2 className="cp-section-title">Frequently Asked <span className="cp-accent">Questions</span></h2>
          <p className="cp-section-subtitle">Everything you need to know about our Coffee Processing Plant.</p>

          <div className="cp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`cp-faq__item ${isOpen ? 'cp-faq__item--open' : ''}`}>
                  <button
                    className="cp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="cp-faq__question-text">{faq.question}</span>
                    <span className="cp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="cp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="cp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="cp-faq__answer-wrapper">
                    <div className="cp-faq__answer-content">
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
      <section className="cp-section cp-gallery" id="gallery" data-animate>
        <div className={`cp-container cp-animate ${isVisible['gallery'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-section-badge">Industrial Gallery</div>
          <h2 className="cp-section-title">Plant <span className="cp-accent">Gallery</span></h2>
          <div className="cp-gallery__showcase">
            <div className="cp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="cp-gallery__main-img"
              />
              <div className="cp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="cp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`cp-gallery__thumb ${galleryIndex === i ? 'cp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="cp" isVisible={isVisible['why-salvin']} projectKey="CoffeeProcessingDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="cp-section cp-cta" id="enquiry" data-animate>
        <div className={`cp-container cp-animate ${isVisible['enquiry'] ? 'cp-animate--in' : ''}`}>
          <div className="cp-cta__box">
            <h2>Ready to Build Your Coffee Processing Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="cp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Coffee%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="cp-btn cp-btn--primary cp-btn--lg"
              >
                <svg className="cp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="cp-btn cp-btn--outline cp-btn--lg">
                <svg className="cp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="cp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="cp-back-nav">
        <NavLink to="/turnkey-project" className="cp-btn cp-btn--outline">
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
