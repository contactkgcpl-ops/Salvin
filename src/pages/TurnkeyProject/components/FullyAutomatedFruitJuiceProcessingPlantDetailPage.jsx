import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./RedChilliDetailPage.css";
import WhyChooseSalvin from "./WhyChooseSalvin";

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  {
    "id": 1,
    "title": "Fruit Receiving & Washing"
  },
  {
    "id": 2,
    "title": "Sorting & Inspection"
  },
  {
    "id": 3,
    "title": "Crushing & Pulping"
  },
  {
    "id": 4,
    "title": "Enzymatic Treatment & Filtration"
  },
  {
    "id": 5,
    "title": "Homogenization & Pasteurization"
  },
  {
    "id": 6,
    "title": "Deaeration & Cooling"
  },
  {
    "id": 7,
    "title": "Aseptic Filling & Packaging"
  }
];

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  {
    "name": "High-Capacity Washing & Sorting Machine",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/washing_sorting.jpg",
    "desc": "High-capacity washing flume ensuring complete removal of dirt, pesticides, and microbial contaminants from raw fruits."
  },
  {
    "name": "Advanced Pulping & Juice Extraction",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/pulping_extraction.jpg",
    "desc": "Robust stainless steel extraction unit engineered for maximum juice yield while efficiently separating seeds and skins."
  },
  {
    "name": "Automated Filtration & Clarification System",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/filtration_clarification.jpg",
    "desc": "Advanced micro-filtration machinery designed to produce clear, pulp-free juice with perfect consistency."
  },
  {
    "name": "Continuous Pasteurization & Mixing Tank",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/pasteurization_mixing.jpg",
    "desc": "High-efficiency thermal processing equipment ensuring the elimination of pathogens while preserving the fruit's natural vitamins and aroma."
  },
  {
    "name": "High-Speed Rotary Filling Line",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/automatic_filling.jpg",
    "desc": "Highly automated bottling and capping system that guarantees a sterile packaging environment for extended shelf life."
  },
  {
    "name": "Automated Labeling & Packaging",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/labeling_packaging.jpg",
    "desc": "End-of-line packaging automation including high-speed labelers and case packers to prepare the juice for distribution."
  }
];

/* ─── FAQs ─── */
const FAQS = [
  {
    "question": "What is the production capacity of the Fruit Juice Processing Plant?",
    "answer": "Our turnkey juice processing plants are fully customizable, with industrial capacities ranging from 1,000 liters per hour (LPH) up to 20,000 LPH based on client requirements."
  },
  {
    "question": "Does the plant support aseptic packaging for long shelf life?",
    "answer": "Yes, our fruit juice machinery integrates seamlessly with aseptic packaging lines, including PET bottles, Tetra Pak, and aseptic pouches, ensuring zero contamination."
  },
  {
    "question": "Can the same plant process multiple types of fruits?",
    "answer": "Absolutely. The production line is designed with modular extraction systems capable of processing apples, mangoes, oranges, berries, and mixed fruits with minimal changeover time."
  },
  {
    "question": "How is the natural flavor and color of the juice maintained?",
    "answer": "We utilize advanced deaeration technology to prevent oxidation, combined with rapid tubular pasteurization that perfectly preserves the natural flavor, color, and nutritional profile."
  },
  {
    "question": "Do you provide complete installation and commissioning services?",
    "answer": "Yes, Salvin Industries provides end-to-end turnkey services, from 3D factory layout and equipment manufacturing to on-site installation, commissioning, and operator training."
  }
];

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: "/turnkey-brochures/images/fruit-juice-gallery/washing_sorting.jpg", caption: "High-Capacity Fruit Washing & Sorting Machine" },
  { src: "/turnkey-brochures/images/fruit-juice-gallery/pulping_extraction.jpg", caption: "Advanced Industrial Pulping & Juice Extraction" },
  { src: "/turnkey-brochures/images/fruit-juice-gallery/filtration_clarification.jpg", caption: "Automated Filtration System & Clarification Tanks" },
  { src: "/turnkey-brochures/images/fruit-juice-gallery/pasteurization_mixing.jpg", caption: "Continuous Pasteurization & Mixing Tank" },
  { src: "/turnkey-brochures/images/fruit-juice-gallery/automatic_filling.jpg", caption: "High-Speed Rotary Filling & Capping Line" },
  { src: "/turnkey-brochures/images/fruit-juice-gallery/labeling_packaging.jpg", caption: "Automated Labeling & End-of-Line Packaging" }
];

export default function FullyAutomatedFruitJuiceProcessingPlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Fully Automated Fruit Juice Processing Plant | Turnkey Solutions | Salvin Industries";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", "Discover the Fully Automated Fruit Juice Processing Plant by Salvin Industries. Our industrial turnkey solution provides advanced extraction, pasteurization, and aseptic packaging for premium fruit juice production.");
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
        <div className="rcp-hero__bg" style={{ backgroundImage: "url('/turnkey-brochures/images/hero_fruit_juice.png')" }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge"><span className="rcp-hero__badge-dot" />TURNKEY SOLUTION</span>
          <h1 className="rcp-hero__title">Fully Automated Fruit Juice Processing Plant</h1>
          <p className="rcp-hero__subtitle">Advanced Processing Technology for High-Yield & Premium Quality Fruit Juice</p>
          <div className="rcp-hero__actions"><a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a></div>
        </div>
      </section>

      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["overview"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Processing <span className="rcp-accent">Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automated Fruit Juice Processing Plant</strong> is a state-of-the-art industrial turnkey solution designed for high-capacity fruit extraction, clarification, and pasteurization. Engineered to meet global food safety standards, our robust production line seamlessly processes apples, mangoes, citrus, and mixed fruits into premium-grade, natural juice.</p>
              <p>From automated fruit washing and advanced enzymatic treatment to continuous thermal pasteurization and aseptic packaging, our machinery ensures absolute zero contamination. Experience maximum flavor retention, vibrant natural colors, and extended shelf life. Partner with Salvin Industries for a highly efficient, PLC-controlled processing ecosystem that minimizes waste and maximizes your manufacturing ROI.</p>
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
              <img src="/turnkey-brochures/images/hero_fruit_juice.png" alt="Fully Automated Fruit Juice Processing Plant Overview" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

            <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["seo-guide"] ? "rcp-animate--in" : ""}`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Fruit Juice Manufacturing</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Start a Fruit Juice Business?</h3>
               <p>The demand for packaged, ready-to-drink fruit juices is growing rapidly worldwide. With increasing health awareness, consumers are looking for natural, hygienic, and preservative-free fruit juices. Setting up a fully automated processing plant allows you to tap into this massive market with high-profit margins.</p>
               
               <h3>How Does the Processing Plant Work?</h3>
               <p>The process is completely automated to maintain hygiene. It starts with thoroughly washing the raw fruits to remove dirt and pesticides. The fruits are then crushed, and the pulp is extracted. The extracted juice is filtered and passed through a pasteurization machine, which rapidly heats and cools the juice to kill bacteria without destroying the natural vitamins. Finally, the juice is packed in sterile bottles or pouches.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Our turnkey solutions are built using high-grade stainless steel to ensure 100% food safety. The entire production line is controlled by an advanced PLC system, meaning you need very few workers to operate the massive plant. We ensure maximum juice yield from every fruit, reducing waste and increasing your daily profits.</p>
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
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Fruit Receiving & Washing</div>
  </div>
</React.Fragment>
<React.Fragment key={2}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Sorting & Inspection</div>
  </div>
</React.Fragment>
<React.Fragment key={3}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Crushing & Pulping</div>
  </div>
</React.Fragment>
<React.Fragment key={4}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Enzymatic Treatment & Filtration</div>
  </div>
</React.Fragment>
<React.Fragment key={5}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Homogenization & Pasteurization</div>
  </div>
</React.Fragment>
<React.Fragment key={6}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Deaeration & Cooling</div>
  </div>
</React.Fragment>
<React.Fragment key={7}>
  <div className="rcp-process-card">
    <div className="rcp-process-card__icon">
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M12 12l9-5" /><path d="M12 12L3 7" /></svg>
    </div>
    <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Aseptic Filling & Packaging</div>
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

      <WhyChooseSalvin prefix="rcp" isVisible={isVisible["why-salvin"]} projectKey="FullyAutomatedFruitJuiceProcessingPlantDetailPage" />

      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["enquiry"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="rcp-cta__actions">
              <a href={"https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Fully%20Automated%20Fruit%20Juice%20Processing%20Plant.%20Please%20share%20details."} target="_blank" rel="noopener noreferrer" className="rcp-btn rcp-btn--primary rcp-btn--lg">
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
    
        {/* ═══ COMPREHENSIVE GUIDE (SEO) ═══ */}
        <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['seo-guide'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">COMPREHENSIVE GUIDE</div>
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Fully Automated Fruit Juice Processing Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Fully Automated Fruit Juice Processing Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Fully Automated Fruit Juice Processing Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Fully Automated Fruit Juice Processing Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Fully Automated Fruit Juice Processing Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
