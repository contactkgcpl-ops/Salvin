import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./RedChilliDetailPage.css";
import WhyChooseSalvin from "./WhyChooseSalvin";

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  {
    "id": 1,
    "title": "Garlic Bulb Breaking"
  },
  {
    "id": 2,
    "title": "Pneumatic Garlic Peeling"
  },
  {
    "id": 3,
    "title": "Washing & Sterilization"
  },
  {
    "id": 4,
    "title": "Precision Slicing"
  },
  {
    "id": 5,
    "title": "Multi-Layer Continuous Drying"
  },
  {
    "id": 6,
    "title": "Optical Color Sorting"
  },
  {
    "id": 7,
    "title": "Milling & Bulk Packaging"
  }
];

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    "name": "Automatic Garlic Bulb Breaking & Peeling Machine",
    "image": "/turnkey-brochures/images/garlic-gallery/bulb_breaking.jpg",
    "desc": "High-efficiency machine that gently separates garlic bulbs into individual cloves without damaging the surface."
  },
  {
    "name": "Garlic Peeling & Washing Machine",
    "image": "/turnkey-brochures/images/garlic-gallery/garlic_washing.jpg",
    "desc": "Pneumatic peeling system combined with a high-pressure washing flume to ensure perfectly clean, skin-free garlic cloves."
  },
  {
    "name": "High-Speed Garlic Slicer",
    "image": "/turnkey-brochures/images/garlic-gallery/garlic_slicer.jpg",
    "desc": "Precision slicing equipment that cuts garlic into uniform flakes, ensuring consistent drying and maximum flavor retention."
  },
  {
    "name": "Continuous Belt Dryer for Dehydration",
    "image": "/turnkey-brochures/images/garlic-gallery/belt_dryer.jpg",
    "desc": "Multi-layer hot air drying system that precisely dehydrates garlic flakes while locking in pungency and aroma."
  },
  {
    "name": "Vibratory Sorting & Grading Machine",
    "image": "/turnkey-brochures/images/garlic-gallery/vibratory_sorting.jpg",
    "desc": "Advanced sorting machine that separates dehydrated garlic by size and removes impurities for premium quality output."
  },
  {
    "name": "Automatic Dehydrated Garlic Packaging Machine",
    "image": "/turnkey-brochures/images/garlic-gallery/garlic_packaging.jpg",
    "desc": "Automated weighing and packaging line designed to seal dehydrated garlic in moisture-proof bags for extended shelf life."
  }
];

/* ─── FAQs ─── */
const FAQS = [
  {
    "question": "Does the dehydration process retain the strong garlic aroma?",
    "answer": "Yes. Our continuous multi-layer belt dryers use precise, low-temperature profiles (55°C - 65°C) that perfectly preserve the essential oils, allicin content, and strong natural aroma of the garlic."
  },
  {
    "question": "What forms of dehydrated garlic can this plant produce?",
    "answer": "The processing line can produce dehydrated garlic flakes (slices). With the addition of our milling section, it can also produce minced garlic, granulated garlic, and fine garlic powder."
  },
  {
    "question": "How is the garlic peeled without damaging the clove?",
    "answer": "We utilize advanced pneumatic (air-based) peeling technology. This method uses air friction rather than mechanical abrasion, ensuring 98% peeling efficiency with zero damage to the clove surface."
  },
  {
    "question": "What is the standard production capacity of the plant?",
    "answer": "We offer customizable turnkey solutions ranging from 500 kg/day to 10,000 kg/day of raw garlic processing, tailored to your industrial requirements."
  },
  {
    "question": "Can this plant be used to dehydrate other vegetables like onions?",
    "answer": "With minor adjustments to the peeling and slicing sections, the continuous drying line can effectively process and dehydrate onions, ginger, and other root vegetables."
  }
];

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: "/turnkey-brochures/images/garlic-gallery/bulb_breaking.jpg", caption: "Automatic Garlic Bulb Breaking & Peeling Machine" },
  { src: "/turnkey-brochures/images/garlic-gallery/garlic_washing.jpg", caption: "Garlic Peeling & Washing Machine" },
  { src: "/turnkey-brochures/images/garlic-gallery/garlic_slicer.jpg", caption: "High-Speed Garlic Slicer" },
  { src: "/turnkey-brochures/images/garlic-gallery/belt_dryer.jpg", caption: "Continuous Belt Dryer for Dehydration" },
  { src: "/turnkey-brochures/images/garlic-gallery/vibratory_sorting.jpg", caption: "Vibratory Sorting & Grading Machine" },
  { src: "/turnkey-brochures/images/garlic-gallery/garlic_packaging.jpg", caption: "Automatic Dehydrated Garlic Packaging Machine" }
];

export default function FullyAutomaticDehydratedGarlicPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Fully Automatic Dehydrated Garlic Plant | Turnkey Solutions | Salvin Industries";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", "Salvin Industries provides a Fully Automatic Dehydrated Garlic Plant. Complete industrial machinery for garlic bulb breaking, pneumatic peeling, slicing, and continuous dehydration.");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rcp-page">
                  <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: "url('/turnkey-brochures/images/hero_garlic.png')" }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge"><span className="rcp-hero__badge-dot" />TURNKEY SOLUTION</span>
          <h1 className="rcp-hero__title">Fully Automatic Dehydrated Garlic Plant</h1>
          <p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Dehydrated Garlic</p>
          <div className="rcp-hero__actions"><a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a></div>
        </div>
      </section>

      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["overview"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Processing <span className="rcp-accent">Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automatic Dehydrated Garlic Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity garlic bulb breaking, peeling, slicing, and continuous dehydration. Engineered to meet global food safety standards, our robust production line seamlessly processes raw garlic into premium-grade dehydrated flakes, granules, and powder.</p>
              <p>From automated root cutting and advanced wet peeling to continuous belt drying and vibratory grading, our machinery ensures absolute zero contamination. Experience maximum pungency retention, vibrant natural color, and extended shelf life. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>
              <div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">High Yield</p><p className="rcp-overview__feature-desc">Maximum extraction</p></div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">Hygienic Process</p><p className="rcp-overview__feature-desc">Food-grade contact parts</p></div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">Perfect Output</p><p className="rcp-overview__feature-desc">Advanced refining tech</p></div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">PLC Control</p><p className="rcp-overview__feature-desc">Fully automatic operation</p></div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/garlic-gallery/belt_dryer.jpg" alt="Fully Automatic Dehydrated Garlic Processing Plant Overview" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

            <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["seo-guide"] ? "rcp-animate--in" : ""}`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Garlic Dehydration</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Start a Garlic Dehydration Business?</h3>
               <p>Dehydrated garlic flakes, minced garlic, and garlic powder are essential ingredients in the global food industry, used heavily in spices, sauces, ready-to-eat meals, and snacks. Dehydrating raw garlic extends its shelf life from a few months to over a year, making it highly profitable for export and bulk industrial sales.</p>
               
               <h3>How Does the Dehydration Process Work?</h3>
               <p>The process starts by breaking the raw garlic bulbs into individual cloves. A pneumatic air-peeler then removes the skin without damaging the clove. The peeled cloves are washed, sterilized, and sliced evenly. These slices are fed onto a continuous hot air belt dryer, which slowly removes the moisture. The dried flakes are then sorted by size and packaged.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Our continuous belt drying technology is designed to operate at precise, low temperatures. This is critical because excessive heat destroys the allicin (the compound that gives garlic its strong smell and taste). Our plant ensures that your dehydrated garlic retains its sharp pungency, natural white color, and strong aroma, fetching premium prices in the market.</p>
           </div>
        </div>
      </section>

      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["process-flow"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Workflow</span></h2>
          <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw material into premium-quality packaged product.</p>
          <div className="rcp-process-flow-container">
<React.Fragment key={1}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Garlic Bulb Breaking</div>
  </div>
</React.Fragment>
<React.Fragment key={2}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Pneumatic Garlic Peeling</div>
  </div>
</React.Fragment>
<React.Fragment key={3}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Washing & Sterilization</div>
  </div>
</React.Fragment>
<React.Fragment key={4}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Precision Slicing</div>
  </div>
</React.Fragment>
<React.Fragment key={5}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Multi-Layer Continuous Drying</div>
  </div>
</React.Fragment>
<React.Fragment key={6}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Optical Color Sorting</div>
  </div>
</React.Fragment>
<React.Fragment key={7}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M12 12l9-5" /><path d="M12 12L3 7" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Milling & Bulk Packaging</div>
  </div>
</React.Fragment>
          </div>
        </div>
      </section>

      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["machinery"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Machinery Used</div>
          <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
          <div className="rcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="rcp-machine-card">
                <div className="rcp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, "0")}</div>
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

      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["faq"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our plant.</p>
          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rcp-faq__item ${isOpen ? "rcp-faq__item--open" : ""}`}>
                  <button className="rcp-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)} type="button">
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content"><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rcp-section rcp-gallery" id="gallery" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["gallery"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Industrial Gallery</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
          <div className="rcp-gallery__showcase">
            <div className="rcp-gallery__main">
              <img src={GALLERY_IMAGES[galleryIndex].src} alt={GALLERY_IMAGES[galleryIndex].caption} className="rcp-gallery__main-img" />
              <div className="rcp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="rcp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button key={i} className={`rcp-gallery__thumb ${galleryIndex === i ? "rcp-gallery__thumb--active" : ""}`} onClick={() => setGalleryIndex(i)} type="button">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSalvin prefix="rcp" isVisible={isVisible["why-salvin"]} projectKey="FullyAutomaticDehydratedGarlicPlantDetailPage" />

      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["enquiry"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="rcp-cta__actions">
              <a href={"https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Fully%20Automatic%20Dehydrated%20Garlic%20Plant.%20Please%20share%20details."} target="_blank" rel="noopener noreferrer" className="rcp-btn rcp-btn--primary rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "8px" }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginRight: "8px" }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Contact Us
              </NavLink>
            </div>
            <p className="rcp-cta__phone">Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a></p>
          </div>
        </div>
      </section>

      <div className="rcp-back-nav">
        <NavLink to="/turnkey-projects" className="rcp-btn rcp-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px", marginRight: "6px", verticalAlign: "middle", display: "inline-block" }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  );
}
