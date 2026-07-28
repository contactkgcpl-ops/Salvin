import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './MayonnaiseProcessingDetailPage.css'

import eq1 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/1_flour_mixing_dough_preparation.jpg';
import eq2 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/2_dough_sheeting_compound_roller.jpg';
import eq3 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/3_noodle_slitting_waving.jpg';
import eq4 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/4_continuous_steaming.jpg';
import eq5 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/5_continuous_noodle_frying.jpg';
import eq6 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/6_automatic_noodle_packaging.jpg';
import { Blend, Wheat, Layers, Scissors, Droplets, Flame, Package } from 'lucide-react';


/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Flour Mixing' },
  { id: 2, title: 'Dough Preparation' },
  { id: 3, title: 'Sheeting & Rolling' },
  { id: 4, title: 'Slitting & Cutting' },
  { id: 5, title: 'Steaming' },
  { id: 6, title: 'Frying' },
  { id: 7, title: 'Packaging' }
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    name: 'Flour Mixing & Dough Preparation System',
    image: eq1,
    desc: 'Automated dosing and mixing system ensuring precise recipe formulation and consistent dough quality.'
  },
  {
    name: 'Dough Sheeting & Compound Roller System',
    image: eq2,
    desc: 'High-precision rollers creating uniform dough sheets with perfect texture and elasticity.'
  },
  {
    name: 'Noodle Slitting & Waving Machine',
    image: eq3,
    desc: 'Specialized slitting and waving units to cut and shape the noodles into perfect wavy blocks.'
  },
  {
    name: 'Continuous Steaming System',
    image: eq4,
    desc: 'Advanced steaming tunnel providing uniform heat distribution for optimal gelatinization.'
  },
  {
    name: 'Continuous Noodle Frying System',
    image: eq5,
    desc: 'High-efficiency continuous fryer with precise temperature control for consistent moisture removal and texture.'
  },
  {
    name: 'Automatic Noodle Packaging Machine',
    image: eq6,
    desc: 'High-speed automated packaging system ensuring hygienic sealing and long shelf life.'
  }
]

/* ─── FAQs ─── */
const FAQS = [
  {
    question: "What capacity ranges are available?",
    answer: "We offer highly scalable instant noodle processing lines designed to meet diverse production requirements, from medium-scale operations to high-volume industrial output."
  },
  {
    question: "Is the line fully automatic?",
    answer: "Yes, our processing lines feature advanced PLC-based automation for precise control, consistent quality, and minimal manual intervention throughout the entire process."
  },
  {
    question: "Can seasoning systems be integrated?",
    answer: "Absolutely. We provide fully integrated, automated seasoning systems tailored to your specific flavor profiles and packaging requirements."
  },
  {
    question: "What packaging options are supported?",
    answer: "Our automated filling and packaging machines support various options, including pillow packs, cup noodles, and multi-pack configurations with optional nitrogen flushing."
  },
  {
    question: "Do you provide installation and commissioning?",
    answer: "Yes, Salvin Industries offers complete turnkey solutions, including on-site installation, commissioning, and comprehensive operator training by our expert engineers."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: eq1, caption: 'Flour Mixing & Dough Preparation System' },
  { src: eq2, caption: 'Dough Sheeting & Compound Roller System' },
  { src: eq3, caption: 'Noodle Slitting & Waving Machine' },
  { src: eq4, caption: 'Continuous Steaming System' },
  { src: eq5, caption: 'Continuous Noodle Frying System' },
  { src: eq6, caption: 'Automatic Noodle Packaging Machine' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function InstantNoodlesDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Instant Noodles Processing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Instant Noodles Processing Plant by Salvin Industries. Fully automated food-grade processing lines for high-efficiency noodle production.')
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
    <div className="mpp-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="mpp-hero">
        <div className="mpp-hero__overlay" style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.6) 100%)' }} />
        <div className="mpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/instant-noodles-plant/instant_noodles_hero_banner.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="mpp-hero__content">
          <span className="mpp-hero__badge">
            <span className="mpp-hero__badge-dot" />
            TURNKEY NOODLE PROCESSING SOLUTION
          </span>
          <h1 className="mpp-hero__title">
            Instant Noodles Processing Plant
          </h1>
          <p className="mpp-hero__subtitle">
            Complete Turnkey Solution For Advanced Dough Preparation, Sheeting, Slitting, Steaming, Frying, And Packaging Of Instant Noodles
          </p>
          <div className="mpp-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/Instant noodles.pdf"
              download="Instant noodles.pdf"
              className="mpp-btn mpp-btn--primary mpp-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="mpp-btn mpp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="mpp-section mpp-overview" id="overview" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['overview'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Project Overview</div>
          <h2 className="mpp-section-title">Complete Noodle <span className="mpp-accent">Manufacturing Solution</span></h2>
          <div className="mpp-overview__grid">
            <div className="mpp-overview__text">
              <p>
                Salvin Industries' Instant Noodles Processing Plant is a state-of-the-art turnkey industrial solution engineered for food processors demanding high production efficiency, rigorous hygiene standards, and consistent noodle quality. Our fully automated lines cover every stage of production—from precise flour mixing and dough preparation to slitting, steaming, continuous frying, cooling, and final packaging.
              </p>
              <p>
                Designed with automation at its core, the plant ensures accurate recipe management and uniform product quality while significantly reducing manual intervention and product waste. Whether you are producing classic wavy noodles or specialized varieties, our flexible recipes capability and scalable capacity allow you to adapt to rapidly evolving market demands.
              </p>
              <div className="mpp-overview__features">
                {/* Feature 1 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Fully Automated</p>
                    <p className="mpp-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Hygienic Design</p>
                    <p className="mpp-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Precise Control</p>
                    <p className="mpp-overview__feature-desc">Accurate mixing, optimal steaming, and uniform frying</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="mpp-overview__feature">
                  <div className="mpp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="mpp-overview__feature-body">
                    <p className="mpp-overview__feature-title">Flexible & Scalable</p>
                    <p className="mpp-overview__feature-desc">Adaptable to multiple noodle recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mpp-overview__image mpp-overview__image--photo">
              <img src={eq1} alt="Instant Noodles Processing Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ PROCESS FLOW ═══ */}
      <section className="mpp-section mpp-process-new" id="process-flow" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['process-flow'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Process Flow</div>
          <h2 className="mpp-section-title">Manufacturing <span className="mpp-accent">Workflow</span></h2>
          <p className="mpp-section-subtitle">A highly optimized and fully integrated processing workflow designed to consistently transform premium flour into perfectly packaged instant noodles.</p>

          <div className="mpp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="mpp-process-card">
                  <div className="mpp-process-card__icon">
                    {step.id === 1 && <Blend className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 2 && <Wheat className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 3 && <Layers className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 4 && <Scissors className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 5 && <Droplets className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 6 && <Flame className="mpp-process-card__icon-svg" strokeWidth={2} />}
                    {step.id === 7 && <Package className="mpp-process-card__icon-svg" strokeWidth={2} />}
                  </div>
                  <div className="mpp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="mpp-process-arrow">
                    <svg className="mpp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
          <h2 className="rcp-section-title" dangerouslySetInnerHTML={{ __html: `A Simple Guide to <span class='rcp-accent'>Instant Noodles Packaging</span>` }} />
          <p className="rcp-section-subtitle">Understanding the packaging process, accuracy, and market impact.</p>
          <div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Instant Noodles Business?</h3>
              <p>Instant Noodles is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices and food products is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Instant Noodles, you can build a highly profitable and recurring FMCG business.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does the Instant Noodles Processing Work?</h3>
              <p>The process starts by thoroughly cleaning whole raw materials to remove stones and dust. They are then gently processed or roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty processing system that grinds or refines them into a perfect consistency. This product is perfectly mixed in a ribbon blender or homogenizer before being automatically packed into sealed pouches.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>When processing gets too hot during grinding or refining, products lose their flavor and aroma. Our equipment is equipped with advanced cooling jackets and precise temperature controls. Furthermore, our precision ribbon blenders and homogenizers ensure that every single pouch of Instant Noodles has the exact same taste, texture, and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="mpp-section mpp-machinery" id="machinery" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['machinery'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Machinery Included</div>
          <h2 className="mpp-section-title">Core <span className="mpp-accent">Equipment</span></h2>
          <div className="mpp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="mpp-machine-card">
                <div className="mpp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="mpp-machine-card__image" loading="lazy" />
                  <div className="mpp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="mpp-machine-card__content">
                  <h3 className="mpp-machine-card__title">{m.name}</h3>
                  <p className="mpp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      <section className="mpp-section mpp-gallery" id="gallery" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['gallery'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">Industrial Gallery</div>
          <h2 className="mpp-section-title">Plant <span className="mpp-accent">Gallery</span></h2>
          <div className="mpp-gallery__showcase">
            <div className="mpp-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="mpp-gallery__main-img"
              />
              <div className="mpp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="mpp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`mpp-gallery__thumb ${galleryIndex === i ? 'mpp-gallery__thumb--active' : ''}`}
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
      <WhyChooseSalvin prefix="mpp" isVisible={isVisible['why-salvin']} projectKey="InstantNoodlesDetailPage" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="mpp-section mpp-faq-section" id="faq" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['faq'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-section-badge">FAQs</div>
          <h2 className="mpp-section-title">Frequently Asked <span className="mpp-accent">Questions</span></h2>
          <p className="mpp-section-subtitle">Everything you need to know about our Instant Noodles Processing Plant.</p>

          <div className="mpp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`mpp-faq__item ${isOpen ? 'mpp-faq__item--open' : ''}`}>
                  <button
                    className="mpp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="mpp-faq__question-text">{faq.question}</span>
                    <span className="mpp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="mpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="mpp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="mpp-faq__answer-wrapper">
                    <div className="mpp-faq__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="mpp-section mpp-cta" id="enquiry" data-animate>
        <div className={`mpp-container mpp-animate ${isVisible['enquiry'] ? 'mpp-animate--in' : ''}`}>
          <div className="mpp-cta__box">
            <h2>Looking to establish an Instant Noodles Processing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="mpp-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Instant%20Noodles%20Processing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="mpp-btn mpp-btn--primary mpp-btn--lg"
              >
                <svg className="mpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="mpp-btn mpp-btn--outline mpp-btn--lg">
                <svg className="mpp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="mpp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="mpp-back-nav">
        <NavLink to="/turnkey-project" className="mpp-btn mpp-btn--outline">
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
