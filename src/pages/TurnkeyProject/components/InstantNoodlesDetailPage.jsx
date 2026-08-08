import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './MayonnaiseProcessingDetailPage.css'

import eq1 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/1_flour_mixing_dough_preparation.webp';
import eq2 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/2_dough_sheeting_compound_roller.webp';
import eq3 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/3_noodle_slitting_waving.webp';
import eq4 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/4_continuous_steaming.webp';
import eq5 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/5_continuous_noodle_frying.webp';
import eq6 from '../../../assets/turnkey-brochures/images/instant-noodles-gallery/6_automatic_noodle_packaging.webp';
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
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Dough Sheeting & Compound Roller System',
    image: eq2,
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Noodle Slitting & Waving Machine',
    image: eq3,
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Continuous Steaming System',
    image: eq4,
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Continuous Noodle Frying System',
    image: eq5,
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Automatic Noodle Packaging Machine',
    image: eq6,
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]
/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Instant Noodles Processing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Instant Noodles Processing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
        <div className="mpp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/instant-noodles-plant/instant_noodles_hero_banner.webp')`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="mpp-hero__content">
          <span className="mpp-hero__badge">
            <span className="mpp-hero__badge-dot" />
            TURNKEY NOODLE PROCESSING SOLUTION
          </span>
          <h1 className="mpp-hero__title">
            Instant Noodles Processing Plant
          </h1>
          <p className="mpp-hero__subtitle">
            Start Your Own Instant Noodles Processing Plant Business with Salvin Industries' Automatic Turnkey Plant
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
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Instant Noodles Processing Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your food product remains 100% safe, hygienic, and ready to sell in the market.
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

      
      
        {/* ═══ COMPREHENSIVE GUIDE (SEO) ═══ */}
        <section className="mpp-section mpp-seo-content" id="seo-guide" data-animate>
          <div className={`mpp-container mpp-animate ${isVisible['seo-guide'] ? 'mpp-animate--in' : ''}`}>
            <div className="mpp-section-badge">ABOUT THE PLANT</div>
            <h2 className="mpp-section-title">How Does The <span className="mpp-accent">Plant Work?</span></h2>
            <p className="mpp-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="mpp-seo-content__body">
              <div className="mpp-seo-content__block">
                <h3>Why Start a Instant Noodles Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Instant Noodles Processing Plant, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="mpp-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="mpp-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
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
