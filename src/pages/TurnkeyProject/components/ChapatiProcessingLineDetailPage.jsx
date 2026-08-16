import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './OatProcessingPlantDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

const PROCESS_STEPS = [
  { id: 1, title: 'Flour Sifting' },
  { id: 2, title: 'Dough Mixing' },
  { id: 3, title: 'Resting / Proofing' },
  { id: 4, title: 'Sheeting & Rolling' },
  { id: 5, title: 'Cutting & Portioning' },
  { id: 6, title: 'Baking / Roasting' },
  { id: 7, title: 'Cooling & Packaging' },
]

const MACHINERY_LIST = [

  {
    name: 'Flour Sifter',
    image: '/assets/plants/food/chapati-line/1_sifter.webp',
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Dough Mixer',
    image: '/assets/plants/food/chapati-line/2_mixer.webp',
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Dough Kneader',
    image: '/assets/plants/food/chapati-line/3_kneader.webp',
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Dough Divider & Portioning Machine',
    image: '/assets/plants/food/chapati-line/4_divider.webp',
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Continuous Baking Oven',
    image: '/assets/plants/food/chapati-line/5_oven.webp',
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Chapati Packing Machine',
    image: '/assets/plants/food/chapati-line/6_packing.webp',
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Chapati Processing Line?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Chapati Processing Line. From the first processing machine to the final packing machine, we build everything in our factory."
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

const GALLERY_IMAGES = [
  { src: '/assets/plants/food/chapati-line/1_sifter.webp', caption: 'Flour Sifter' },
  { src: '/assets/plants/food/chapati-line/2_mixer.webp', caption: 'Dough Mixer' },
  { src: '/assets/plants/food/chapati-line/3_kneader.webp', caption: 'Dough Kneader' },
  { src: '/assets/plants/food/chapati-line/4_divider.webp', caption: 'Dough Divider & Portioning Machine' },
  { src: '/assets/plants/food/chapati-line/5_oven.webp', caption: 'Continuous Baking Oven' },
  { src: '/assets/plants/food/chapati-line/6_packing.webp', caption: 'Chapati Packing Machine' }
]

export default function ChapatiProcessingLineDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => {
    document.title = 'Chapati Processing Line | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Chapati Processing Line by Salvin Industries. From dough mixing and sheeting to baking and packaging — automated, food-grade, high-speed chapati lines from 1,000 to 20,000 chapatis/hour.')
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
        <div className="opp-hero__bg" style={{ backgroundImage: `url('/assets/plants/food/hero_chapati_line.webp')` }} />
        <div className="opp-hero__content">
          <span className="opp-hero__badge"><span className="opp-hero__badge-dot" />TURNKEY CHAPATI PROCESSING SOLUTION</span>
          <h1 className="opp-hero__title">Chapati Processing Line</h1>
          <p className="opp-hero__subtitle">
            Start Your Own Chapati Processing Line Business with Salvin Industries' Automatic Turnkey Plant
          </p>
          <div className="opp-hero__actions">
            <NavLink to="/contact" className="opp-btn opp-btn--primary opp-btn--lg">Request Information</NavLink>
            <a href="#enquiry" className="opp-btn opp-btn--outline">Enquire Now</a>
          </div>
        </div>
      </section>

      <section className="opp-section opp-overview" id="overview" data-animate>
        <div className={`opp-container opp-animate ${isVisible['overview'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Plant Overview</div>
          <h2 className="opp-section-title">Complete Chapati <span className="opp-accent">Processing Solution</span></h2>
          <div className="opp-overview__grid">
            <div className="opp-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Chapati Processing Line</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your food product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="opp-overview__features">
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">High Throughput</p><p className="opp-overview__feature-desc">Up to 20,000 chapatis per hour</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Hygienic Process</p><p className="opp-overview__feature-desc">Food grade SS304/SS316L construction</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Consistent Quality</p><p className="opp-overview__feature-desc">Uniform size, thickness, softness and colour</p></div>
                </div>
                <div className="opp-overview__feature">
                  <div className="opp-overview__feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
                  <div className="opp-overview__feature-body"><p className="opp-overview__feature-title">Energy Efficient</p><p className="opp-overview__feature-desc">Optimised fuel and power per 1,000 chapatis</p></div>
                </div>
              </div>
            </div>
            <div className="opp-overview__image opp-overview__image--photo">
              <img src="/assets/plants/food/chapati-line/5_oven.webp" alt="Chapati Processing Line by Salvin Industries" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="opp-section opp-process-new" id="process-flow" data-animate>
        <div className={`opp-container opp-animate ${isVisible['process-flow'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-section-badge">Process Flow</div>
          <h2 className="opp-section-title">Chapati <span className="opp-accent">Processing Workflow</span></h2>
          <p className="opp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw flour into premium-quality soft chapatis while ensuring maximum efficiency, product consistency and superior output quality.</p>
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
            <div className="opp-section-badge">ABOUT THE PLANT</div>
            <h2 className="opp-section-title">How Does The <span className="opp-accent">Plant Work?</span></h2>
            <p className="opp-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="opp-seo-content__body">
              <div className="opp-seo-content__block">
                <h3>Why Start a Chapati Processing Line Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Chapati Processing Line, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="opp-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="opp-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
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
          <p className="opp-section-subtitle">Everything you need to know about our Chapati Processing Line.</p>
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

      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="ChapatiProcessingLineDetailPage" />

      <section className="opp-section opp-cta" id="enquiry" data-animate>
        <div className={`opp-container opp-animate ${isVisible['enquiry'] ? 'opp-animate--in' : ''}`}>
          <div className="opp-cta__box">
            <h2>Ready to Build Your Chapati Processing Line?</h2>
            <p>Get a customised project proposal with capacity recommendations, line layout, equipment list, timeline, and investment estimate — all tailored to your specific requirements.</p>
            <div className="opp-cta__actions">
              <a href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Chapati%20Processing%20Line.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="opp-btn opp-btn--primary opp-btn--lg">
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
