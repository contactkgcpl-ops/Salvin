import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './FullyAutomaticExtrudedSnacksPlantDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Extruded Snacks Reception' },
  { id: 2, title: 'Cleaning & Sorting' },
  { id: 3, title: 'Drying' },
  { id: 4, title: 'Grinding' },
  { id: 5, title: 'Sieving' },
  { id: 6, title: 'Blending' },
  { id: 7, title: 'Packaging' },
]




/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Ribbon Blender Mixer',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501004052.webp',
    desc: 'Stainless steel ribbon blender for homogenous mixing of raw flour, grains, and moisture before extrusion.'
  },
  {
    name: 'Bucket Elevator & Hopper',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501050102.webp',
    desc: 'Sanitary bucket elevator system ensuring consistent, automated material feeding into the extruder hopper.'
  },
  {
    name: 'Twin Screw Extruder',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501019282.webp',
    desc: 'Advanced twin screw extrusion technology with precise temperature and pressure control for perfect puffing and shaping.'
  },
  {
    name: 'Vibratory Sifter & Cooler',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501027619.webp',
    desc: 'Vibratory grading conveyor to remove broken pieces and cool down the extruded snacks prior to flavoring.'
  },
  {
    name: 'Rotary Seasoning Drum',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501037572.webp',
    desc: 'Continuous rotary flavoring drum equipped with oil and powder sprayers for uniform coating of extruded snacks.'
  },
  {
    name: 'Automatic Packaging Machine',
    image: '/turnkey-brochures/images/extruded-snacks/media__1785501060641.webp',
    desc: 'Fully automatic vertical form-fill-seal packaging system with multi-head weighers for accurate retail pouch packing.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What is the processing capacity of the Fully Automatic Extruded Snacks Plant?",
    answer: "Our plants are available from 500 KG/HR to 5 TON/HR capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant process different types of extruded snackses?",
    answer: "Yes. The plant is designed to handle various extruded snacks varieties while maintaining product quality, color, and consistency."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes. We offer semi-automatic and fully automatic solutions with advanced control systems for efficient operation."
  },
  {
    question: "Does SALVIN provide installation and support?",
    answer: "Yes. SALVIN provides complete turnkey solutions including installation, commissioning, operator training, and after-sales support."
  },
  {
    question: "Why choose SALVIN for Fully Automatic Extruded Snacks Plants?",
    answer: "SALVIN offers food-grade machinery, energy-efficient systems, customized solutions, reliable performance, and complete engineering support."
  }
]

/* ─── Gallery Images (Fully Automatic Extruded Snacks Plant only) ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501004052.webp', caption: 'Ribbon Blender Mixer' },
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501050102.webp', caption: 'Material Feeding Elevator' },
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501019282.webp', caption: 'Twin Screw Extruder Unit' },
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501027619.webp', caption: 'Vibratory Sifter & Cooling Conveyor' },
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501037572.webp', caption: 'Continuous Rotary Seasoning Drum' },
  { src: '/turnkey-brochures/images/extruded-snacks/media__1785501060641.webp', caption: 'Automatic Pouch Packing Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function FullyAutomaticExtrudedSnacksPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta (separate from scroll to avoid coupling with re-renders)
  useEffect(() => {
    document.title = 'Fully Automatic Extruded Snacks Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Fully Automatic Extruded Snacks Plant by Salvin Industries. From raw extruded snacks receiving to finished powder packaging — automated, food-grade, energy-efficient processing lines from 500 Kg/Hr to 5 Ton/Hr.')
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
    <div className="faesp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="faesp-hero">
        <div className="faesp-hero__overlay" />
        <div className="faesp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero_extruded_snacks.webp')` }} />
        <div className="faesp-hero__content">
          <span className="faesp-hero__badge">
            <span className="faesp-hero__badge-dot" />
            TURNKEY EXTRUDED SNACKS PROCESSING SOLUTION
          </span>
          <h1 className="faesp-hero__title">
            Fully Automatic Extruded Snacks Plant
          </h1>
          <p className="faesp-hero__subtitle">
            Complete Turnkey Solution For Cleaning, Drying, Grinding, Pulverizing And Packaging Of Extruded Snacks
          </p>
          <div className="faesp-hero__actions">
            <NavLink to="/contact" className="faesp-btn faesp-btn--primary faesp-btn--lg">
              Request Information
            </NavLink>

            
            <a href="#enquiry" className="faesp-btn faesp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="faesp-section faesp-overview" id="overview" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['overview'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-section-badge">Plant Overview</div>
          <h2 className="faesp-section-title">Complete Extruded Snacks <span className="faesp-accent">Processing Solution</span></h2>
          <div className="faesp-overview__grid">
            <div className="faesp-overview__text">
              <p>
                Salvin Industries' Fully Automatic Extruded Snacks Plant is a turnkey industrial solution designed for processors who demand
                consistent quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage
                — from incoming raw extruded snacks inspection through final packaged product — in a single, automated, dust-free facility.
              </p>
              <p>
                Each plant is custom-engineered to match your specific capacity requirements, product grades, and market standards.
                Whether you're producing retail packs, bulk institutional supply, or export-grade extruded snacks powder, our systems deliver
                the colour retention, pungency preservation, and microbial safety your buyers expect.
              </p>
              <div className="faesp-overview__features">
                {/* Feature 1 */}
                <div className="faesp-overview__feature">
                  <div className="faesp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="faesp-overview__feature-body">
                    <p className="faesp-overview__feature-title">High Yield</p>
                    <p className="faesp-overview__feature-desc">Maximum extruded snacks powder recovery per batch</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="faesp-overview__feature">
                  <div className="faesp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="faesp-overview__feature-body">
                    <p className="faesp-overview__feature-title">Hygienic Process</p>
                    <p className="faesp-overview__feature-desc">Food grade SS304/SS316L construction</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="faesp-overview__feature">
                  <div className="faesp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="faesp-overview__feature-body">
                    <p className="faesp-overview__feature-title">Consistent Quality</p>
                    <p className="faesp-overview__feature-desc">Uniform ASTA colour and SHU output</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="faesp-overview__feature">
                  <div className="faesp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="faesp-overview__feature-body">
                    <p className="faesp-overview__feature-title">Energy Efficient</p>
                    <p className="faesp-overview__feature-desc">Optimised power consumption per ton</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faesp-overview__image faesp-overview__image--photo">
              <img src="/turnkey-brochures/images/extruded-snacks/media__1785501019282.webp" alt="Fully Automatic Extruded Snacks Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>





      {/* ═══ PROCESS FLOW ═══ */}
      <section className="faesp-section faesp-process-new" id="process-flow" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['process-flow'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-section-badge">Process Flow</div>
          <h2 className="faesp-section-title">Extruded Snacks <span className="faesp-accent">Processing Workflow</span></h2>
          <p className="faesp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw extruded snackses into premium-quality extruded snacks powder while ensuring maximum efficiency, product consistency and superior output quality.</p>

          <div className="faesp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="faesp-process-card">
                  <div className="faesp-process-card__icon">
                    {step.id === 1 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {step.id === 2 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
                      </svg>
                    )}
                    {step.id === 3 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                    {step.id === 4 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    {step.id === 5 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                        <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
                      </svg>
                    )}
                    {step.id === 6 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
                        <path d="M12 4v10" />
                        <path d="M9 11l3 3 3-3" />
                      </svg>
                    )}
                    {step.id === 7 && (
                      <svg className="faesp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
                        <path d="M3 7v10l9 5 9-5V7" />
                      </svg>
                    )}
                  </div>
                  <div className="faesp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="faesp-process-arrow">
                    <svg className="faesp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
        <section className="faesp-section faesp-seo-content" id="seo-guide" data-animate>
          <div className={`faesp-container faesp-animate ${isVisible['seo-guide'] ? 'faesp-animate--in' : ''}`}>
            <div className="faesp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="faesp-section-title">A Simple Guide to <span className="faesp-accent">Fully Automatic Extruded Snacks Plant Processing</span></h2>
            <p className="faesp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="faesp-seo-content__body">
              <div className="faesp-seo-content__block">
                <h3>Why Start a Fully Automatic Extruded Snacks Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Fully Automatic Extruded Snacks Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="faesp-seo-content__block">
                <h3>How Does the Fully Automatic Extruded Snacks Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="faesp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Fully Automatic Extruded Snacks Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>


      {/* ═══ MACHINERY USED ═══ */}
      <section className="faesp-section faesp-machinery" id="machinery" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['machinery'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-section-badge">Machinery Used</div>
          <h2 className="faesp-section-title">Core <span className="faesp-accent">Equipment</span></h2>
          <div className="faesp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="faesp-machine-card">
                <div className="faesp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="faesp-machine-card__image" loading="lazy" />
                  <div className="faesp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="faesp-machine-card__content">
                  <h3 className="faesp-machine-card__title">{m.name}</h3>
                  <p className="faesp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ FAQ SECTION ═══ */}
      <section className="faesp-section faesp-faq-section" id="faq" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['faq'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-section-badge">FAQs</div>
          <h2 className="faesp-section-title">Frequently Asked <span className="faesp-accent">Questions</span></h2>
          <p className="faesp-section-subtitle">Everything you need to know about our Fully Automatic Extruded Snacks Plant.</p>

          <div className="faesp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`faesp-faq__item ${isOpen ? 'faesp-faq__item--open' : ''}`}>
                  <button
                    className="faesp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="faesp-faq__question-text">{faq.question}</span>
                    <span className="faesp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="faesp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="faesp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="faesp-faq__answer-wrapper">
                    <div className="faesp-faq__answer-content">
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
      <section className="faesp-section faesp-gallery" id="gallery" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['gallery'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-section-badge">Industrial Gallery</div>
          <h2 className="faesp-section-title">Plant <span className="faesp-accent">Gallery</span></h2>
          <div className="faesp-gallery__showcase">
            <div className="faesp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="faesp-gallery__main-img"
              />
              <div className="faesp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="faesp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`faesp-gallery__thumb ${galleryIndex === i ? 'faesp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="FullyAutomaticExtrudedSnacksPlantDetailPage" />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="faesp-section faesp-cta" id="enquiry" data-animate>
        <div className={`faesp-container faesp-animate ${isVisible['enquiry'] ? 'faesp-animate--in' : ''}`}>
          <div className="faesp-cta__box">
            <h2>Ready to Build Your Fully Automatic Extruded Snacks Plant?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="faesp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Red%20Extruded Snacks%20Processing%20Plant.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="faesp-btn faesp-btn--primary faesp-btn--lg"
              >
                <svg className="faesp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="faesp-btn faesp-btn--outline faesp-btn--lg">
                <svg className="faesp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="faesp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="faesp-back-nav">
        <NavLink to="/turnkey-project" className="faesp-btn faesp-btn--outline">
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
