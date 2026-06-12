import React, { useState, useEffect, useMemo } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { getProjectDetails } from '../data/turnkeyProjectsData'
import './RedChilliDetailPage.css' // Reuse the master layout stylesheet

export default function TurnkeyDetailPage() {
  const { projectSlug } = useParams()
  const [activeStep, setActiveStep] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const details = useMemo(() => getProjectDetails(projectSlug), [projectSlug])

  // Reset active step and gallery index on route change
  useEffect(() => {
    setActiveStep(0)
    setGalleryIndex(0)
  }, [projectSlug])

  // Scroll to top only when navigating to a different project route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectSlug])

  // SEO meta (no scroll — avoids jump on re-renders from scroll animations / gallery)
  useEffect(() => {
    if (!details) return
    document.title = `${details.title} | Turnkey Solutions | Salvin Industries`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `Complete turnkey ${details.title} by Salvin Industries. Automated, food-grade, energy-efficient processing and packaging lines from small to large scale.`
      )
    }
  }, [details, projectSlug])

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
  }, [projectSlug])

  // Auto-rotate gallery
  useEffect(() => {
    if (!details?.gallery?.length) return
    const galleryLength = details.gallery.length
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryLength)
    }, 4000)
    return () => clearInterval(interval)
  }, [projectSlug, details?.gallery?.length])

  if (!details) {
    return (
      <div className="rcp-page" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <div className="rcp-container">
          <h2 className="rcp-section-title">Project Not Found</h2>
          <p className="rcp-section-subtitle" style={{ margin: '20px auto' }}>
            The requested turnkey project detail page could not be located.
          </p>
          <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--primary">
            Back to Project Portfolio
          </NavLink>
        </div>
      </div>
    )
  }

  const hasSteps = details.processSteps && details.processSteps.length > 0
  const activeStepDetail = hasSteps ? details.processSteps[activeStep] : null

  return (
    <div className="rcp-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('${details.heroImage || details.overview.image}')` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            {details.badge}
          </span>
          <h1 className="rcp-hero__title">
            {details.title}
          </h1>
          <p className="rcp-hero__subtitle">
            {details.subtitle}
          </p>
          <div className="rcp-hero__actions">
            {details.pdfFile ? (
              <a
                href={`/turnkey-brochures/pdfs/${details.pdfFile}`}
                download={details.pdfFile}
                className="rcp-btn rcp-btn--primary"
              >
                Download Brochure
              </a>
            ) : (
              <NavLink to="/contact" className="rcp-btn rcp-btn--primary">
                Request Information
              </NavLink>
            )}
            <a href="#enquiry" className="rcp-btn rcp-btn--outline">
              Enquire Now
            </a>
          </div>
          <div className="rcp-hero__stats">
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">{details.stats.capacity}</span>
              <span className="rcp-hero__stat-label">Capacity Options</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">{details.stats.stages}</span>
              <span className="rcp-hero__stat-label">Process Flow</span>
            </div>
            <div className="rcp-hero__stat">
              <span className="rcp-hero__stat-value">{details.stats.retention}</span>
              <span className="rcp-hero__stat-label">Quality Index</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete <span className="rcp-accent">Turnkey Plant</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>{details.overview.p1}</p>
              <p>{details.overview.p2}</p>
              <div className="rcp-overview__highlights">
                {details.overview.highlights.map((hl, i) => (
                  <div key={i} className="rcp-highlight-item">
                    <span className="rcp-highlight-icon">{hl.icon}</span>
                    <div>
                      <strong>{hl.title}</strong>
                      <p>{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rcp-overview__image">
              <img src={details.overview.image} alt={`${details.title} by Salvin Industries`} loading="lazy" />
              <div className="rcp-overview__image-badge">
                <span>Since 2008</span>
                <p>350+ Projects Delivered Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPACITY OPTIONS ═══ */}
      <section className="rcp-section rcp-capacity" id="capacity" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['capacity'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Capacity Options</div>
          <h2 className="rcp-section-title">Choose Your <span className="rcp-accent">Plant Scale</span></h2>
          <p className="rcp-section-subtitle">From startup configurations to industrial-scale processing plants — we scale to your target OEE.</p>
          <div className="rcp-capacity__grid">
            {details.capacities.map((opt, i) => (
              <div key={i} className="rcp-capacity__card" style={{ '--accent': opt.color }}>
                <div className="rcp-capacity__card-top" style={{ background: `linear-gradient(135deg, ${opt.color}, ${opt.color}dd)` }}>
                  <span className="rcp-capacity__value">{opt.capacity}</span>
                  <span className="rcp-capacity__type">{opt.type}</span>
                </div>
                <div className="rcp-capacity__card-body">
                  <p className="rcp-capacity__ideal">
                    <strong>Ideal For:</strong> {opt.ideal}
                  </p>
                  <a href="#enquiry" className="rcp-btn rcp-btn--sm">Get Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEY FEATURES ═══ */}
      <section className="rcp-section rcp-features" id="features" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['features'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Key Features</div>
          <h2 className="rcp-section-title">Engineered <span className="rcp-accent">Advantages</span></h2>
          <div className="rcp-features__grid">
            {details.features.map((feat, i) => (
              <div key={i} className="rcp-feature-card">
                <div className="rcp-feature-card__icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      {hasSteps && (
        <section className="rcp-section rcp-process" id="process-flow" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Complete Process Flow</div>
            <h2 className="rcp-section-title">{details.processSteps.length}-Stage <span className="rcp-accent">Processing Line</span></h2>
            <p className="rcp-section-subtitle">Traceable process sequence engineered for clean product recovery and maximum output quality.</p>

            {/* Process Flow Diagram */}
            <div className="rcp-process-flow-diagram">
              {details.processSteps.map((step, i) => (
                <React.Fragment key={step.id}>
                  <button
                    className={`rcp-flow-node ${activeStep === i ? 'rcp-flow-node--active' : ''}`}
                    onClick={() => setActiveStep(i)}
                    type="button"
                  >
                    <span className="rcp-flow-node__number">{String(step.id).padStart(2, '0')}</span>
                    <span className="rcp-flow-node__icon">{step.icon}</span>
                    <span className="rcp-flow-node__title">{step.title}</span>
                  </button>
                  {i < details.processSteps.length - 1 && (
                    <div className="rcp-flow-arrow">
                      <svg viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Active Step Detail */}
            {activeStepDetail && (
              <div className="rcp-process-detail">
                <div className="rcp-process-detail__number">{String(activeStepDetail.id).padStart(2, '0')}</div>
                <div className="rcp-process-detail__content">
                  <h3>{activeStepDetail.icon} {activeStepDetail.title}</h3>
                  <p>{activeStepDetail.desc}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ MACHINERY USED ═══ */}
      {details.machinery && details.machinery.length > 0 && (
        <section className="rcp-section rcp-machinery" id="machinery" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['machinery'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Machinery Used</div>
            <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
            <div className="rcp-machinery__grid">
              {details.machinery.map((m, i) => (
                <div key={i} className="rcp-machine-card">
                  <div className="rcp-machine-card__image-wrapper">
                    <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                    <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
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
      )}

      {/* ═══ APPLICATIONS ═══ */}
      {details.applications && details.applications.length > 0 && (
        <section className="rcp-section rcp-applications" id="applications" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['applications'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Applications</div>
            <h2 className="rcp-section-title">Industry <span className="rcp-accent">Applications</span></h2>
            <div className="rcp-applications__grid">
              {details.applications.map((app, i) => (
                <div key={i} className="rcp-application-card">
                  <div className="rcp-application-card__icon">{app.icon}</div>
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      {details.gallery && details.gallery.length > 0 && (
        <section className="rcp-section rcp-gallery" id="gallery" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['gallery'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Industrial Gallery</div>
            <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
            <div className="rcp-gallery__showcase">
              <div className="rcp-gallery__main">
                <img
                  src={details.gallery[galleryIndex].src}
                  alt={details.gallery[galleryIndex].caption}
                  className="rcp-gallery__main-img"
                />
                <div className="rcp-gallery__caption">{details.gallery[galleryIndex].caption}</div>
              </div>
              <div className="rcp-gallery__thumbs">
                {details.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`rcp-gallery__thumb ${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}`}
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
      )}

      {/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['enquiry'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your {details.title}?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list, 
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="rcp-cta__actions">
              <a
                href={`https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20${encodeURIComponent(details.title)}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rcp-btn rcp-btn--primary rcp-btn--lg"
              >
                💬 WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                📧 Contact Us
              </NavLink>
            </div>
            <p className="rcp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="rcp-back-nav">
        <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--outline">
          ← Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
