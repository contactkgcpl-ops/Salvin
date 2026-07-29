import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./RedChilliDetailPage.css";
import WhyChooseSalvin from "./WhyChooseSalvin";

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = [
  { id: "1", title: "Raw Material Receiving & Inspection" },
  { id: "2", title: "Cleaning System" },
  { id: "3", title: "Sorting & Grading" },
  { id: "4", title: "Drying System" },
  { id: "5", title: "Destoning System" },
  { id: "6", title: "Roasting (If Required)" },
  { id: "7", title: "Cooling Conveyor" },
  { id: "8", title: "Grinding (Pulverizing) System" },
  { id: "9", title: "Sifting / Screening System" },
  { id: "10", title: "Weighing & Batching System" },
  { id: "11", title: "Ribbon Blender (Mixing)" },
  { id: "12", title: "Metal Detection System" },
  { id: "13", title: "Finished Product Holding Bin" },
  { id: "14", title: "Automatic Filling Machine" },
  { id: "15", title: "Capping / Sealing Machine" },
  { id: "16", title: "Labeling Machine" },
  { id: "17", title: "Check Weigher" },
  { id: "18", title: "Carton Sealing / Case Packer" },
  { id: "19", title: "Final Packing & Dispatch" }
];

/* ─── Machinery Used ─── */
const MACHINERY_LIST = [
  { name: "Cleaning & Destoning", desc: "Raw spice cleaning and destoning machine to remove impurities and foreign materials.", image: "/turnkey-brochures/images/mixed-spice-gallery/cleaning_destoning.jpg" },
  { name: "Spice Roasting", desc: "Automatic spice roasting machine for consistent flavor development.", image: "/turnkey-brochures/images/mixed-spice-gallery/spice_roasting.jpg" },
  { name: "Grinding System", desc: "Hammer mill pulverizer grinding machine for perfect particle size reduction.", image: "/turnkey-brochures/images/mixed-spice-gallery/hammer_mill.jpg" },
  { name: "Ribbon Blending", desc: "Industrial ribbon blender & spice mixing machine for homogeneous spice blends.", image: "/turnkey-brochures/images/mixed-spice-gallery/ribbon_blender.jpg" },
  { name: "Vibro Sieving", desc: "Vibro sieving and fine mesh screening machine to ensure uniform product.", image: "/turnkey-brochures/images/mixed-spice-gallery/vibro_sieving.jpg" },
  { name: "Weighing & Packing", desc: "Automatic spice weighing, packing and sealing machine for perfect packaging.", image: "/turnkey-brochures/images/mixed-spice-gallery/weighing_packing.jpg" }
];

/* ─── FAQs ─── */
const FAQS = [
  { question: "What is the production capacity of the Fully Automatic Mixed Spice Plant?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "What materials are used in the construction of the mixed spice plant?", answer: "All product contact parts are manufactured using high-grade stainless steel (SS 304 / SS 316) to ensure strict hygiene and food safety compliance." },
  { question: "Can the plant handle different types of spices?", answer: "Yes, our versatile systems are designed to process, grind, and blend a wide variety of whole and powdered spices with minimal changeover time." }
];

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: "/turnkey-brochures/images/mixed-spice-gallery/cleaning_destoning.jpg", caption: "Raw Spice Cleaning & Destoning Machine" },
  { src: "/turnkey-brochures/images/mixed-spice-gallery/spice_roasting.jpg", caption: "Automatic Spice Roasting Machine" },
  { src: "/turnkey-brochures/images/mixed-spice-gallery/hammer_mill.jpg", caption: "Hammer Mill / Pulverizer Grinding Machine" },
  { src: "/turnkey-brochures/images/mixed-spice-gallery/ribbon_blender.jpg", caption: "Ribbon Blender & Spice Mixing Machine" },
  { src: "/turnkey-brochures/images/mixed-spice-gallery/vibro_sieving.jpg", caption: "Vibro Sieving & Fine Mesh Screening Machine" },
  { src: "/turnkey-brochures/images/mixed-spice-gallery/weighing_packing.jpg", caption: "Automatic Spice Weighing, Packing & Sealing Machine" }
];

export default function FullyAutomaticMixedSpicePlantDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Fully Automatic Mixed Spice Plant | Turnkey Solutions | Salvin Industries";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", "Explore the Fully Automatic Mixed Spice Plant by Salvin Industries. Turnkey spice processing line featuring automatic batching, roasting, cryogenic grinding, and ribbon blending.");
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
        <div className="rcp-hero__bg" style={{ backgroundImage: "url('/turnkey-brochures/images/hero_garam_masala.png')" }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge"><span className="rcp-hero__badge-dot" />TURNKEY SOLUTION</span>
          <h1 className="rcp-hero__title">Fully Automatic Mixed Spice Plant</h1>
          <p className="rcp-hero__subtitle">State-of-the-art turnkey solution for processing, blending, and packaging mixed spices efficiently.</p>
          <div className="rcp-hero__actions"><a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a></div>
        </div>
      </section>

      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["overview"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete <span className="rcp-accent">Mixed Spice Processing</span> Solution</h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p><strong>Salvin Industries' Fully Automatic Mixed Spice Processing Plant</strong> is an advanced turnkey solution designed to handle a variety of spices efficiently. From pre-cleaning and sorting to precision grinding and hygienic blending, our fully automated system ensures maximum product yield and zero flavor loss.</p>
              <p>Built with food-grade SS304/316 stainless steel, this plant features PLC-controlled automation to reduce manual labor and ensure every batch meets the highest global food safety standards. It is the perfect choice for scaling up mixed spice production with consistent quality.</p>
              <div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">High Yield</p><p className="rcp-overview__feature-desc">Maximum product yield</p></div>
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
              <img src="/turnkey-brochures/images/mixed-spice-gallery/ribbon_blender.jpg" alt="Fully Automatic Mixed Spice Plant Overview" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["seo-guide"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-section-badge">Comprehensive Guide</div>
          <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Mixed Spice Processing</span></h2>
          <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
          <div className="rcp-seo-content__body">
            <h3>Why Start a Garam Masala Business?</h3>
            <p>Garam Masala is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Garam Masala, you can build a highly profitable and recurring FMCG business.</p>

            <h3>How Does the Masala Processing Work?</h3>
            <p>The process starts by thoroughly cleaning whole raw spices (like cumin, cardamom, and black pepper) to remove stones and dust. The spices are then gently roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty pulverizer that grinds them into a fine powder. This powder is perfectly mixed in a ribbon blender before being automatically packed into sealed pouches.</p>

            <h3>The Salvin Industries Advantage</h3>
            <p>When spices get too hot during grinding, they lose their flavor and aroma. Our pulverizers are equipped with advanced cooling jackets to grind spices at low temperatures. Furthermore, our precision ribbon blenders ensure that every single pouch of Garam Masala has the exact same taste and proportion of spices.</p>
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
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Raw Spice Cleaning & Destoning</div>
              </div>
            </React.Fragment>
            <React.Fragment key={2}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Automated Proportionate Batching</div>
              </div>
            </React.Fragment>
            <React.Fragment key={3}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Continuous Spice Roasting</div>
              </div>
            </React.Fragment>
            <React.Fragment key={4}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Cooling & Conditioning</div>
              </div>
            </React.Fragment>
            <React.Fragment key={5}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Low-Temperature Grinding</div>
              </div>
            </React.Fragment>
            <React.Fragment key={6}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Homogeneous Ribbon Blending</div>
              </div>
            </React.Fragment>
            <React.Fragment key={7}>
              <div className="rcp-process-card">
                <div className="rcp-process-card__icon">
                  <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M12 12l9-5" /><path d="M12 12L3 7" /></svg>
                </div>
                <div className="rcp-process-card__label" style={{ minWidth: "100px" }}>Automated Form-Fill-Seal Packaging</div>
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

      <WhyChooseSalvin prefix="rcp" isVisible={isVisible["why-salvin"]} projectKey="FullyAutomaticMixedSpicePlantDetailPage" />

      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible["enquiry"] ? "rcp-animate--in" : ""}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="rcp-cta__actions">
              <a href={"https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20Fully%20Automated%20Garam%20Masala%20Processing%20Plant.%20Please%20share%20details."} target="_blank" rel="noopener noreferrer" className="rcp-btn rcp-btn--primary rcp-btn--lg">
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
            <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Fully Automatic Mixed Spice Plant Processing</span></h2>
            <p className="rcp-section-subtitle">Understanding the processing workflow, accuracy, and market impact.</p>
            <div className="rcp-seo-content__body">
              <div className="rcp-seo-content__block">
                <h3>Why Start a Fully Automatic Mixed Spice Plant Business?</h3>
                <p>The demand for high-quality, hygienically processed Fully Automatic Mixed Spice Plant is growing rapidly in both domestic and international markets. Setting up an automated, high-capacity industrial plant ensures a highly profitable, recurring FMCG business with excellent ROI. Modern consumers prioritize branded, untouched-by-hand products, making industrial automation the key to market success.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>How Does the Fully Automatic Mixed Spice Plant Processing Work?</h3>
                <p>The manufacturing process is a fully synchronized industrial workflow. It begins with the automated intake and thorough cleaning of raw materials to remove any impurities. The product is then conveyed into the primary processing unit (such as grinding, blending, roasting, or extraction, depending on the product). Advanced thermal controls ensure that essential flavors, colors, and nutrients are perfectly preserved. Finally, the processed product is fed directly into high-speed automatic packaging lines to be sealed hygienically into pouches, jars, or bottles.</p>
              </div>
              
              <div className="rcp-seo-content__block">
                <h3>The Salvin Industries Advantage</h3>
                <p>Salvin Industries provides end-to-end turnkey solutions for Fully Automatic Mixed Spice Plant processing. Our machinery is constructed with premium SS304/SS316 food-grade stainless steel to meet global hygiene standards. Integrated with advanced PLC/SCADA control panels, our plants offer one-touch automation, reducing labor costs and eliminating human error. We handle everything—from factory layout design to machine manufacturing, installation, and global commissioning.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
