import React, { useState, useEffect, useMemo } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { getProjectDetails } from '../data/turnkeyProjectsData'
import './RedChilliDetailPage.css' // Reuse the master layout stylesheet

/* Helper to dynamically resolve clean SVG icons for process stages without emojis */
function getStepIcon(title, id) {
  const t = (title || '').toLowerCase()
  if (t.includes('receiving') || t.includes('feeding') || t.includes('intake') || t.includes('ingestion')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  if (t.includes('washing') || t.includes('cleaning') || t.includes('destoning') || t.includes('bubble') || t.includes('aspiration') || t.includes('separation')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
      </svg>
    )
  }
  if (t.includes('drying') || t.includes('dry') || t.includes('roasting') || t.includes('curing') || t.includes('boiler')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  }
  if (t.includes('crushing') || t.includes('crush') || t.includes('cutting') || t.includes('cut') || t.includes('peeling') || t.includes('peel') || t.includes('slicing') || t.includes('slice')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12h12M6 8h12M6 16h12" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    )
  }
  if (t.includes('grinding') || t.includes('grind') || t.includes('milling') || t.includes('mill') || t.includes('pulveris') || t.includes('refining')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  }
  if (t.includes('sieving') || t.includes('sieve') || t.includes('sifting') || t.includes('filtration') || t.includes('filter') || t.includes('clarif') || t.includes('separa') || t.includes('de-seeding') || t.includes('centrifug')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
    )
  }
  if (t.includes('blend') || t.includes('homogen') || t.includes('mix') || t.includes('dissolut') || t.includes('pulp')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
        <path d="M12 4v10" />
        <path d="M9 11l3 3 3-3" />
      </svg>
    )
  }
  if (t.includes('pack') || t.includes('bag') || t.includes('fill') || t.includes('seam') || t.includes('cap') || t.includes('label') || t.includes('dosing') || t.includes('wrapping')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 7v10l9 5 9-5V7" />
      </svg>
    )
  }
  if (t.includes('pasteur') || t.includes('retort') || t.includes('autoclave') || t.includes('steril')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M9 12h6" />
      </svg>
    )
  }
  if (t.includes('storage') || t.includes('warehous') || t.includes('cool') || t.includes('temper') || t.includes('settl')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  // Generic fallback based on ID
  const fallbackIcons = [
    <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22v-9m-9 0h18M12 2l9 5-9 5-9-5 9-5z" />
    </svg>,
    <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82" />
    </svg>
  ]
  return fallbackIcons[id % fallbackIcons.length]
}

/* Helper to resolve dynamic FAQs when not explicitly defined in data layer */
function getFAQsForProject(details) {
  if (details.faqs && details.faqs.length > 0) {
    return details.faqs
  }
  const title = details.title
  const isLiquidOrPaste = title.toLowerCase().includes('juice') || title.toLowerCase().includes('honey') || title.toLowerCase().includes('paste') || title.toLowerCase().includes('sauce') || title.toLowerCase().includes('ketchup') || title.toLowerCase().includes('jelly') || title.toLowerCase().includes('oil')

  return [
    {
      question: `What is the processing capacity of the ${title}?`,
      answer: `Our plants are available in custom configurations from ${isLiquidOrPaste ? '500 Ltr/Hr to 5,000 Ltr/Hr' : '500 Kg/Hr to 5 Ton/Hr'} capacities to match your target production requirements.`
    },
    {
      question: `Can the plant process different varieties or grades of raw material?`,
      answer: `Yes. The system is engineered with adjustable settings and variable speed drives to handle diverse product grades while maintaining consistent color, flavor, and texture.`
    },
    {
      question: `Is the plant fully automatic?`,
      answer: `Yes. We offer semi-automatic and fully automatic turnkey solutions featuring centralized PLC automation and touch-screen HMI control systems.`
    },
    {
      question: `Does SALVIN provide installation and training support?`,
      answer: `Yes. SALVIN provides complete turnkey services including site planning, machinery manufacture, installation, dry runs, commissioning, and on-site operator training.`
    },
    {
      question: `Why choose SALVIN for the ${title}?`,
      answer: `SALVIN is a trusted name offering food-grade SS304/SS316L construction, energy-efficient thermal loops, modular expansion designs, and dedicated engineering support.`
    }
  ]
}

export default function TurnkeyDetailPage() {
  const { projectSlug } = useParams()
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  const details = useMemo(() => getProjectDetails(projectSlug), [projectSlug])

  // Reset gallery index on route change
  useEffect(() => {
    setGalleryIndex(0)
    setActiveFaq(null)
  }, [projectSlug])

  // Scroll to top only when navigating to a different project route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectSlug])

  // SEO meta
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

  // Cap process steps at 7 to match Red Chilli master template (7-stage workflow)
  const hasSteps = details.processSteps && details.processSteps.length > 0
  const processSteps = hasSteps ? details.processSteps.slice(0, 7) : []
  const projectFaqs = getFAQsForProject(details)

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
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete <span className="rcp-accent">Processing Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>{details.overview.p1}</p>
              <p>{details.overview.p2}</p>
              <div className="rcp-overview__features">
                {(details.overview.features4 || [
                  { title: 'High Yield', desc: 'Maximum product recovery per batch' },
                  { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L construction' },
                  { title: 'Consistent Quality', desc: 'Uniform product output every cycle' },
                  { title: 'Energy Efficient', desc: 'Optimised power consumption per ton' }
                ]).map((f, i) => (
                  <div key={i} className="rcp-overview__feature">
                    <div className="rcp-overview__feature-icon">
                      {i === 0 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                        </svg>
                      )}
                      {i === 3 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      )}
                    </div>
                    <div className="rcp-overview__feature-body">
                      <p className="rcp-overview__feature-title">{f.title}</p>
                      <p className="rcp-overview__feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src={details.overview.photoImage || details.overview.image} alt={`${details.title} by Salvin Industries`} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS WORKFLOW ═══ */}
      {hasSteps && (
        <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Process Flow</div>
            <h2 className="rcp-section-title">{details.title} <span className="rcp-accent">Processing Workflow</span></h2>
            <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw materials into premium-quality finished products while ensuring maximum efficiency, product consistency and superior output quality.</p>

            <div className="rcp-process-flow-container">
              {processSteps.map((step, i) => (
                <React.Fragment key={step.id}>
                  <div className="rcp-process-card">
                    <div className="rcp-process-card__icon">
                      {getStepIcon(step.title, step.id)}
                    </div>
                    <div className="rcp-process-card__label">{step.title}</div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="rcp-process-arrow">
                      <svg className="rcp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
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

      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['faq'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our {details.title}.</p>

          <div className="rcp-faq__list">
            {projectFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rcp-faq__item ${isOpen ? 'rcp-faq__item--open' : ''}`}>
                  <button
                    className="rcp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content">
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

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <section className="rcp-section rcp-why-salvin" id="why-salvin" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['why-salvin'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Our Advantage</div>
          <h2 className="rcp-section-title">Why Choose <span className="rcp-accent">SALVIN</span></h2>
          <div className="rcp-why-salvin__grid">
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20M4 20V10l8-7 8 7v10M10 20v-6h4v6" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">Turnkey Solutions</p>
                <p className="rcp-why-salvin__desc">End-to-end processing solutions from design and manufacturing to installation and commissioning.</p>
              </div>
            </div>
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">Food Grade Design</p>
                <p className="rcp-why-salvin__desc">SS304/SS316 contact parts with hygienic construction for food-safe processing.</p>
              </div>
            </div>
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">Energy Efficient</p>
                <p className="rcp-why-salvin__desc">Optimized systems designed to reduce power consumption and improve productivity.</p>
              </div>
            </div>
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">Low Maintenance</p>
                <p className="rcp-why-salvin__desc">Robust industrial construction ensuring long service life and minimal maintenance.</p>
              </div>
            </div>
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h10" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">Automation Ready</p>
                <p className="rcp-why-salvin__desc">PLC-based automation and intelligent controls for consistent production.</p>
              </div>
            </div>
            <div className="rcp-why-salvin__card">
              <div className="rcp-why-salvin__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="rcp-why-salvin__title">After Sales Support</p>
                <p className="rcp-why-salvin__desc">Dedicated technical support, spare parts assistance and service guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
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
