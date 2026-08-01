import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './OatProcessingPlantDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

const PROCESS_STEPS = [
  { id: 1, title: 'Grain Reception' },
  { id: 2, title: 'Cleaning & Sorting' },
  { id: 3, title: 'Malting / Roasting' },
  { id: 4, title: 'Milling & Grinding' },
  { id: 5, title: 'Blending & Mixing' },
  { id: 6, title: 'Spray Drying' },
  { id: 7, title: 'Packaging' },
]

const MACHINERY_LIST = [
  {
    name: 'Grain Cleaning & Grading',
    image: '/turnkey-brochures/images/malted-food-plant/1_cleaning.webp',
    desc: 'High-efficiency vibratory screener to remove impurities and sort grains before malting.'
  },
  {
    name: 'Steeping Tank',
    image: '/turnkey-brochures/images/malted-food-plant/2_steeping.webp',
    desc: 'Stainless steel steeping tank to soak grains and initiate the germination process.'
  },
  {
    name: 'Germination Drum',
    image: '/turnkey-brochures/images/malted-food-plant/3_germination.webp',
    desc: 'Controlled environment drum for uniform germination of grains to develop malt enzymes.'
  },
  {
    name: 'Malt Kiln Dryer',
    image: '/turnkey-brochures/images/malted-food-plant/4_kilning.webp',
    desc: 'Continuous kiln dryer to halt germination and develop characteristic malt flavor and color.'
  },
  {
    name: 'Deculming Machine',
    image: '/turnkey-brochures/images/malted-food-plant/5_deculming.webp',
    desc: 'Specialized machine to separate and remove rootlets from the dried malted grains.'
  },
  {
    name: 'Milling & Grinding Machine',
    image: '/turnkey-brochures/images/malted-food-plant/6_milling.webp',
    desc: 'Heavy-duty mill to grind the malted grains into fine, uniform malt powder.'
  }
]

const FAQS = [
  {
    question: "What is the processing capacity of the Malted Food Plant?",
    answer: "Our plants are available from 200 KG/HR to 5 TON/HR capacities and can be customized based on production requirements."
  },
  {
    question: "Can the plant produce different malted food products?",
    answer: "Yes. The plant is designed to produce chocolate malted drinks, plain malted food powder, cereal-based health drinks, and customised nutritional formulations."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes. We offer semi-automatic and fully automatic solutions with advanced PLC control systems for consistent, low-labour operation."
  },
  {
    question: "Does SALVIN provide installation and support?",
    answer: "Yes. SALVIN provides complete turnkey solutions including installation, commissioning, operator training, and after-sales support."
  },
  {
    question: "Why choose SALVIN for Malted Food Plants?",
    answer: "SALVIN offers food-grade machinery, energy-efficient systems, customized solutions, reliable performance, and complete engineering support from concept to commissioning."
  }
]

const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/malted-food-plant/1_cleaning.webp', caption: 'Grain Cleaning & Grading' },
  { src: '/turnkey-brochures/images/malted-food-plant/2_steeping.webp', caption: 'Steeping Tank' },
  { src: '/turnkey-brochures/images/malted-food-plant/3_germination.webp', caption: 'Germination Drum' },
  { src: '/turnkey-brochures/images/malted-food-plant/4_kilning.webp', caption: 'Malt Kiln Dryer' },
  { src: '/turnkey-brochures/images/malted-food-plant/5_deculming.webp', caption: 'Deculming Machine' },
  { src: '/turnkey-brochures/images/malted-food-plant/6_milling.webp', caption: 'Milling & Grinding Machine' }
]

export default function MaltedFoodPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => {
    document.title = 'Malted Food Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Malted Food Plant by Salvin Industries. From grain malting to finished powder packaging — automated, food-grade, energy-efficient processing lines from 200 Kg/Hr to 5 Ton/Hr.')
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible((prev) => ({ ...prev, [entry.target.id]: true })) }) },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const interval = setInterval(() => setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="opp-page">
      <section className="opp-hero">
        <div className="opp-hero__overlay" />
        <div className="opp-hero__bg" style={{ backgroundImage: `url('/turnkey-brochures/images/hero_malted_food_plant.webp')` }} />
        <div className="opp-hero__content">
          <span className="opp-hero__badge"><span className="opp-hero__badge-dot" />TURNKEY MALTED FOOD SOLUTION</span>
          <h1 className="opp-hero__title">Malted Food Plant</h1>
          <p className="opp-hero__subtitle">Complete Turnkey Solution For Malting, Milling, Blending, Spray Drying And Packaging Of Malted Food Products</p>
          <div className="opp-hero__actions">
            <NavLink to="/contact" className="opp-btn opp-btn--primary opp-btn--lg">Request Information</NavLink>
            <a href="#enquiry" className="opp-btn opp-btn--outline">Enquire Now</a>
          </div>
        </div>
      </section>

      <section className="opp-section opp-overview" id="overview" data-animate>
        <div className={`opp-container opp-animate ${isVisible['overview'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Plant Overview</div>
          <h2 className="opp-section-title">Complete Malted Food <span className="opp-accent">Processing Solution</span></h2>
          <div className="opp-overview__grid">
            <div className="opp-overview__text">
              <p>Salvin Industries' Malted Food Plant is a turnkey industrial solution designed for manufacturers who demand consistent nutritional quality, high throughput, and full regulatory compliance. Our integrated processing line handles every stage — from raw grain reception through final packaged malted food powder — in a single, automated facility.</p>
              <p>Each plant is custom-engineered to your specific capacity, formulation, and market requirements. Whether producing chocolate malt drinks, plain cereal-based health foods, or specialised therapeutic nutrition products, our systems deliver the flavour, solubility, and microbial safety your consumers expect.</p>
              <div className="opp-overview__features">
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">High Yield</p><p className="opp-overview__feature-desc">Maximum malt extract per batch of grain</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Hygienic Process</p><p className="opp-overview__feature-desc">Food grade SS304/SS316L construction</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Consistent Quality</p><p className="opp-overview__feature-desc">Uniform flavour, colour, and diastatic power</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Energy Efficient</p><p className="opp-overview__feature-desc">Optimised power and steam consumption per ton</p></div>
                </div>
              </div>
            </div>
            <div className="opp-overview__image opp-overview__image--photo">
              <img src="/turnkey-brochures/images/malted-food-plant/3_germination.webp" alt="Malted Food Plant by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="opp-section opp-process-new" id="process-flow" data-animate>
        <div className={`opp-container opp-animate ${isVisible['process-flow'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Process Flow</div>
          <h2 className="opp-section-title">Malted Food <span className="opp-accent">Processing Workflow</span></h2>
          <p className="opp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw cereal grains into premium-quality malted food powder while ensuring maximum efficiency, product consistency and superior output quality.</p>
          <div className="opp-process-flow-container">
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="opp-process-card">
                  <div className="opp-process-card__icon">
                    {step.id === 1 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>)}
                    {step.id === 2 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>)}
                    {step.id === 3 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>)}
                    {step.id === 4 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>)}
                    {step.id === 5 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>)}
                    {step.id === 6 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>)}
                    {step.id === 7 && (<svg className="opp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M3 7v10l9 5 9-5V7" /></svg>)}
                  </div>
                  <div className="opp-process-card__label">{step.title}</div>
                </div>
                {i < PROCESS_STEPS.length - 1 && (<div className="opp-process-arrow"><svg className="opp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></div>)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="opp-section opp-seo-content" id="seo-guide" data-animate>
        <div className={`opp-container opp-animate ${isVisible['seo-guide'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">COMPREHENSIVE GUIDE</div>
          <h2 className="opp-section-title">A Simple Guide to <span className="opp-accent">Malted Food Plant Processing</span></h2>
          <p className="opp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
          <div className="opp-seo-content__body">
            <div className="opp-seo-content__block">
              <h3>Why Start a Malted Food Plant Business?</h3>
              <p>The demand for malted food products — from children's health drinks to sports nutrition — is growing rapidly across domestic and export markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI and strong brand potential.</p>
            </div>
            <div className="opp-seo-content__block">
              <h3>How Does the Malted Food Processing Work?</h3>
              <p>The process begins with cleaning and sorting raw cereal grains, followed by controlled malting or roasting in drum kilns to develop enzymes and flavour. The malted grain is then milled into fine flour, blended with sugar, milk solids, vitamins, and minerals, spray-dried into instant powder, and filled into consumer packaging.</p>
            </div>
            <div className="opp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides end-to-end turnkey solutions for malted food manufacturing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Advanced PLC/SCADA automation ensures recipe repeatability and one-touch operation with minimal human intervention.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="opp-section opp-machinery" id="machinery" data-animate>
        <div className={`opp-container opp-animate ${isVisible['machinery'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Machinery Used</div>
          <h2 className="opp-section-title">Core <span className="opp-accent">Equipment</span></h2>
          <div className="opp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="opp-machine-card">
                <div className="opp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="opp-machine-card__image" loading="lazy" />
                  <div className="opp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="opp-machine-card__content">
                  <h3 className="opp-machine-card__title">{m.name}</h3>
                  <p className="opp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="opp-section opp-faq-section" id="faq" data-animate>
        <div className={`opp-container opp-animate ${isVisible['faq'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">FAQs</div>
          <h2 className="opp-section-title">Frequently Asked <span className="opp-accent">Questions</span></h2>
          <p className="opp-section-subtitle">Everything you need to know about our Malted Food Plant.</p>
          <div className="opp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`opp-faq__item ${isOpen ? 'opp-faq__item--open' : ''}`}>
                  <button className="opp-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)} type="button" aria-expanded={isOpen}>
                    <span className="opp-faq__question-text">{faq.question}</span>
                    <span className="opp-faq__icon-toggle">
                      {isOpen ? (<svg className="opp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>) : (<svg className="opp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                    </span>
                  </button>
                  <div className="opp-faq__answer-wrapper"><div className="opp-faq__answer-content"><p>{faq.answer}</p></div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="opp-section opp-gallery" id="gallery" data-animate>
        <div className={`opp-container opp-animate ${isVisible['gallery'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Industrial Gallery</div>
          <h2 className="opp-section-title">Plant <span className="opp-accent">Gallery</span></h2>
          <div className="opp-gallery__showcase">
            <div className="opp-gallery__main">
              <img src={GALLERY_IMAGES[galleryIndex].src} alt={GALLERY_IMAGES[galleryIndex].caption} className="opp-gallery__main-img" />
              <div className="opp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="opp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button key={i} className={`opp-gallery__thumb ${galleryIndex === i ? 'opp-gallery__thumb--active' : ''}`} onClick={() => setGalleryIndex(i)} type="button">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="MaltedFoodPlantDetailPage" />

      <section className="opp-section opp-cta" id="enquiry" data-animate>
        <div className={`opp-container opp-animate ${isVisible['enquiry'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-cta__box">
            <h2>Ready to Build Your Malted Food Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate — all tailored to your specific requirements.</p>
            <div className="opp-cta__actions">
              <a href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Malted%20Food%20Plant.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="opp-btn opp-btn--primary opp-btn--lg">
                <svg className="opp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="opp-btn opp-btn--outline opp-btn--lg">
                <svg className="opp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Contact Us
              </NavLink>
            </div>
            <p className="opp-cta__phone">Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a></p>
          </div>
        </div>
      </section>

      <div className="opp-back-nav">
        <NavLink to="/turnkey-project" className="opp-btn opp-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
