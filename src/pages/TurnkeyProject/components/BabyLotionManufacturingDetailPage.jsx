import WhyChooseSalvin from './WhyChooseSalvin';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './BabyLotionManufacturingDetailPage.css'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material' },
  { id: 2, title: 'Ingredient Weighing & Dosing' },
  { id: 3, title: 'Batch Mixing' },
  { id: 4, title: 'Syrup Preparation' },
  { id: 5, title: 'Baby Lotion Forming' },
  { id: 6, title: 'Cooling Tunnel' },
  { id: 7, title: 'Precision Cutting' },
]

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [

  {
    name: 'Ingredient Dosing & Mixing System',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/1_weighing_dosing.jpg',
    desc: 'Salvin Industries builds this automatic system. It handles the initial processing stage with high efficiency before moving to the next machine.'
  },
  {
    name: 'Syrup Preparation System',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/2_vacuum_mixer.jpg',
    desc: 'Our heavy-duty machine is designed for maximum yield and perfect product quality automatically.'
  },
  {
    name: 'Baby Lotion Mass Mixer',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/3_high_shear.jpg',
    desc: 'This machine processes your product smoothly. It makes sure the final output is completely consistent without any human touch.'
  },
  {
    name: 'Baby Lotion Forming Machine',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/4_storage_tank.jpg',
    desc: 'We manufacture this machine to handle the core processing. It works continuously while keeping the natural taste and quality safe.'
  },
  {
    name: 'Baby Lotion Cutting Machine',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/5_filling_capping.jpg',
    desc: 'This is a very important machine in the line. It ensures your product is processed hygienically for a long shelf life.'
  },
  {
    name: 'Flow Wrapping & Packaging Machine',
    image: '/assets/plants/cosmetics/hair-conditioner-gallery/6_labeling_packing.jpg',
    desc: 'Salvin Industries provides fully automatic packing machines. They fill your ready product into pouches, bottles, or boxes without any human touch.'
  }
]
/* ─── FAQs ─── */
const FAQS = [
  {
    question: "Do you manufacture all the machines for the Baby Lotion Manufacturing Plant?",
    answer: "Yes! At Salvin Industries, we manufacture the complete range of machines required for a Baby Lotion Manufacturing Plant. From the first processing machine to the final packing machine, we build everything in our factory."
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
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/1_weighing_dosing.jpg', caption: 'Ingredient Dosing & Mixing System' },
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/2_vacuum_mixer.jpg', caption: 'Syrup Preparation System' },
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/3_high_shear.jpg', caption: 'Baby Lotion Mass Mixer' },
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/4_storage_tank.jpg', caption: 'Baby Lotion Forming Machine' },
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/5_filling_capping.jpg', caption: 'Baby Lotion Cutting Machine' },
  { src: '/assets/plants/cosmetics/hair-conditioner-gallery/6_labeling_packing.jpg', caption: 'Flow Wrapping Machine' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function BabyLotionManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // SEO meta
  useEffect(() => {
    document.title = 'Baby Lotion Manufacturing Plant | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Complete turnkey Baby Lotion Manufacturing Plant by Salvin Industries. Fully automated food-grade processing lines for baby lotion products.')
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
    <div className="blm-page">

      {/* ═══ HERO BANNER ═══ */}
      <section className="blm-hero">
        <div className="blm-hero__overlay" />
        <div className="blm-hero__bg" style={{ backgroundImage: `url('/assets/plants/cosmetics/cosmetic/baby_lotion_hero.png')` }} />
        <div className="blm-hero__content">
          <span className="blm-hero__badge">
            <span className="blm-hero__badge-dot" />
            TURNKEY BABY LOTION MANUFACTURING SOLUTION
          </span>
          <h1 className="blm-hero__title">
            Baby Lotion Manufacturing Plant
          </h1>
          <p className="blm-hero__subtitle">
            Start Your Own Baby Lotion Manufacturing Plant Business with Salvin Industries' Automatic Turnkey Plant
          </p>
          <div className="blm-hero__actions">
            <a
              href="/turnkey-brochures/pdfs/baby-lotion.pdf"
              download="baby-lotion.pdf"
              className="blm-btn blm-btn--primary blm-btn--lg"
            >
              Download Brochure
            </a>

            
            <a href="#enquiry" className="blm-btn blm-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="blm-section blm-overview" id="overview" data-animate>
        <div className={`blm-container ${isVisible['overview'] ? 'blm-animate--in' : ''}`}>
          <div className="blm-section-badge">Project Overview</div>
          <h2 className="blm-section-title">Complete Baby Lotion <span className="blm-accent">Manufacturing Solution</span></h2>
          <div className="blm-overview__grid">
            <div className="blm-overview__text">
              <p>
                If you want to start a business in the processing industry, <strong>Salvin Industries</strong> is here to help you. We design, manufacture, and set up the complete <strong>Baby Lotion Manufacturing Plant</strong> for you. Instead of buying different machines from different places, we provide a complete "Turnkey Solution". This means we give you the entire factory setup from start to finish.
              </p>
              <p>
                In this plant, you just need to put your raw materials at the starting line. Our heavy-duty machines will automatically process them step-by-step. Finally, our packing machines will pack your product safely so it lasts for a long time. All our machines are made from high-quality stainless steel (SS304/316) so your product remains 100% safe, hygienic, and ready to sell in the market.
              </p>
              <div className="blm-overview__features">
                <div className="blm-overview__feature">
                  <div className="blm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div className="blm-overview__feature-body">
                    <p className="blm-overview__feature-title">Fully Automated</p>
                    <p className="blm-overview__feature-desc">High production efficiency and consistency</p>
                  </div>
                </div>
                <div className="blm-overview__feature">
                  <div className="blm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="blm-overview__feature-body">
                    <p className="blm-overview__feature-title">Hygienic Design</p>
                    <p className="blm-overview__feature-desc">Food-grade construction compliant with GMP</p>
                  </div>
                </div>
                <div className="blm-overview__feature">
                  <div className="blm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className="blm-overview__feature-body">
                    <p className="blm-overview__feature-title">Precise Control</p>
                    <p className="blm-overview__feature-desc">Accurate dosing, mixing, and uniform cutting</p>
                  </div>
                </div>
                <div className="blm-overview__feature">
                  <div className="blm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="blm-overview__feature-body">
                    <p className="blm-overview__feature-title">Flexible & Scalable</p>
                    <p className="blm-overview__feature-desc">Adaptable to multiple bar recipes and capacities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blm-overview__image blm-overview__image--photo" style={{ backgroundColor: '#fff', padding: '10px', display: 'flex', justifyContent: 'center' }}>
              <img src={'/assets/plants/cosmetics/hair-conditioner-gallery/2_vacuum_mixer.jpg'} alt="Plant Overview" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '600px', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

      
      
        {/* ═══ COMPREHENSIVE GUIDE (SEO) ═══ */}
        <section className="blm-section blm-seo-content" id="seo-guide" data-animate>
          <div className={`blm-container blm-animate ${isVisible['seo-guide'] ? 'blm-animate--in' : ''}`}>
            <div className="blm-section-badge">ABOUT THE PLANT</div>
            <h2 className="blm-section-title">How Does The <span className="blm-accent">Plant Work?</span></h2>
            <p className="blm-section-subtitle">A simple explanation of the machinery and process by Salvin Industries.</p>
            <div className="blm-seo-content__body">
              <div className="blm-seo-content__block">
                <h3>Why Start a Baby Lotion Manufacturing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed products is growing rapidly in both domestic and international markets. By setting up an automated Baby Lotion Manufacturing Plant, you can produce large quantities safely. This is a highly profitable business with huge demand, as modern consumers prioritize branded, untouched-by-hand products.</p>
              </div>
              
              <div className="blm-seo-content__block">
                <h3>How Do Salvin Industries' Machines Work?</h3>
                <p>The process is very simple and fully automatic. First, raw materials are fed into the initial processing machines where they are cleaned and prepared. Then, they go into the main processing units that act precisely to refine the product. Finally, the finished product is automatically packed into pouches, boxes, or cans without any human touch.</p>
              </div>
              
              <div className="blm-seo-content__block">
                <h3>Why Choose Salvin Industries for Your Plant?</h3>
                <p>Salvin Industries is a leading manufacturer of food processing machines in India. When you choose us, you don't have to worry about anything. We will build the best quality stainless steel machines for you, deliver them to your factory, and our engineers will install everything. We make sure your plant runs perfectly and your final product is the best in the market.</p>
              </div>
            </div>
          </div>
        </section>

      {/* ═══ MACHINERY USED ═══ */}
      <section className="blm-section blm-machinery" id="machinery" data-animate>
        <div className={`blm-container blm-animate ${isVisible['machinery'] ? 'blm-animate--in' : ''}`}>
          <div className="blm-section-badge">Machinery Included</div>
          <h2 className="blm-section-title">Core <span className="blm-accent">Equipment</span></h2>
          <div className="blm-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="blm-machine-card">
                <div className="blm-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="blm-machine-card__image" loading="lazy" />
                  <div className="blm-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="blm-machine-card__content">
                  <h3 className="blm-machine-card__title">{m.name}</h3>
                  <p className="blm-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="pbm" isVisible={isVisible['why-salvin']} projectKey="BabyLotionManufacturingDetailPage" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="blm-section blm-faq-section" id="faq" data-animate>
        <div className={`blm-container blm-animate ${isVisible['faq'] ? 'blm-animate--in' : ''}`}>
          <div className="blm-section-badge">FAQs</div>
          <h2 className="blm-section-title">Frequently Asked <span className="blm-accent">Questions</span></h2>
          <p className="blm-section-subtitle">Everything you need to know about our Baby Lotion Manufacturing Plant.</p>

          <div className="blm-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`blm-faq__item ${isOpen ? 'blm-faq__item--open' : ''}`}>
                  <button
                    className="blm-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="blm-faq__question-text">{faq.question}</span>
                    <span className="blm-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="blm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="blm-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="blm-faq__answer-wrapper">
                    <div className="blm-faq__answer-content">
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
      <section className="blm-section blm-gallery" id="gallery" data-animate>
        <div className={`blm-container blm-animate ${isVisible['gallery'] ? 'blm-animate--in' : ''}`}>
          <div className="blm-section-badge">Industrial Gallery</div>
          <h2 className="blm-section-title">Plant <span className="blm-accent">Gallery</span></h2>
          <div className="blm-gallery__showcase">
            <div className="blm-gallery__main">
              <img
                src={GALLERY_IMAGES[galleryIndex].src}
                alt={GALLERY_IMAGES[galleryIndex].caption}
                className="blm-gallery__main-img"
              />
              <div className="blm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="blm-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  className={`blm-gallery__thumb ${galleryIndex === i ? 'blm-gallery__thumb--active' : ''}`}
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
      <section className="blm-section blm-cta" id="enquiry" data-animate>
        <div className={`blm-container blm-animate ${isVisible['enquiry'] ? 'blm-animate--in' : ''}`}>
          <div className="blm-cta__box">
            <h2>Looking to establish a Baby Lotion Manufacturing Plant?</h2>
            <p>
              Contact Salvin Industries for complete turnkey solutions covering engineering, processing, automation, packaging, installation and commissioning.
            </p>
            <div className="blm-cta__actions">
              <a
                href="https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Baby%20Lotion%20Manufacturing%20Plant.%20Please%20share%20complete%20details,%20specifications,%20capacity%20options%20and%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="blm-btn blm-btn--primary blm-btn--lg"
              >
                <svg className="blm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="blm-btn blm-btn--outline blm-btn--lg">
                <svg className="blm-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="blm-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="blm-back-nav">
        <NavLink to="/turnkey-project" className="blm-btn blm-btn--outline">
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
