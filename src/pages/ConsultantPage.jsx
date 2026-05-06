import React from "react";
import { NavLink } from "react-router-dom";

const serviceCards = [
  {
    icon: "home",
    title: "Turnkey Project Consultancy",
    text: "End-to-end industrial project planning and execution from initial concept to full commissioning with complete engineering oversight."
  },
  {
    icon: "bolt",
    title: "Product Setup & Development",
    text: "Structured guidance for manufacturing setup and product launch covering process design, equipment selection, and production ramp-up."
  },
  {
    icon: "chip",
    title: "SPM Planning & Design",
    text: "Custom Special Purpose Machine planning aligned with your specific production volumes, workflows, and automation objectives."
  },
  {
    icon: "chart",
    title: "Plant Efficiency & Process Optimisation",
    text: "In-depth production analysis to improve throughput, reduce waste, and eliminate operational losses across your manufacturing floor."
  },
  {
    icon: "flask",
    title: "Complete New Project Execution",
    text: "Full engineering support for greenfield and brownfield projects from concept through to final handover and production validation."
  },
  {
    icon: "users",
    title: "First-Time Founder Support",
    text: "Dedicated step-by-step expert guidance for new industrial business owners entering manufacturing for the first time."
  }
];

const processSteps = [
  ["message", "Requirement Discussion"],
  ["search", "Feasibility Analysis"],
  ["cube", "Engineering Planning"],
  ["coin", "Budget & Process Strategy"],
  ["building", "Plant Design & Execution"],
  ["gear", "Installation & Commissioning"],
  ["life", "Ongoing Support"]
];

const trustPoints = [
  {
    title: "Proven Engineering Expertise",
    text: "25+ years of hands-on industrial experience across food, pharma, chemical, and FMCG sectors."
  },
  {
    title: "Global Execution Capability",
    text: "Successfully delivered projects across 30+ countries with international standards compliance."
  },
  {
    title: "Dedicated Consultation Team",
    text: "Senior engineers and domain specialists assigned to each project for personalised strategic guidance."
  },
  {
    title: "Cost-Optimised Solutions",
    text: "Engineering intelligence that maximises output while minimising capital expenditure and operational cost."
  }
];

const consultBenefits = [
  {
    title: "Free Initial Discussion",
    text: "No-obligation first consultation to understand your project scope and feasibility."
  },
  {
    title: "Expert Engineering Guidance",
    text: "Senior engineers with 20+ years of domain experience dedicated to your project."
  },
  {
    title: "Confidential Project Discussion",
    text: "Complete discretion and NDA-backed confidentiality for all project details shared."
  },
  {
    title: "Global Consultation Support",
    text: "Remote and on-site consultation available across 30+ countries worldwide."
  }
];

function ConsultantIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24"
  };

  const paths = {
    home: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />,
    chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><rect x="7" y="12" width="3" height="4" /><rect x="12" y="9" width="3" height="7" /><rect x="17" y="6" width="3" height="10" /></>,
    flask: <><path d="M9 3h6" /><path d="M10 3v6l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-8V3" /><path d="M8 14h8" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5" /><path d="M12 12v9" /></>,
    coin: <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M9.5 10.5c0-1.3 5-1.3 5 0s-5 1.3-5 3 5 1.3 5 0" /></>,
    building: <><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M4 21h16" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-3v-.8a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L6.6 17l.1-.1A1.7 1.7 0 0 0 7 15a1.7 1.7 0 0 0-1.5-1H5v-3h.5A1.7 1.7 0 0 0 7 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4h3v.8a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.5 1h.1v3h-.1a1.7 1.7 0 0 0-1.5 1Z" /></>,
    life: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="m5.6 5.6 4.3 4.3M18.4 5.6l-4.3 4.3M18.4 18.4l-4.3-4.3M5.6 18.4l4.3-4.3" /></>
  };

  return <svg className="consultant-icon-svg" aria-hidden="true" {...common}>{paths[name]}</svg>;
}

function SectionHeader({ eyebrow, title, accent, text }) {
  return (
    <div className="consultant-section-header">
      <span className="consultant-eyebrow">+ {eyebrow}</span>
      <h2>{title} <span>{accent}</span></h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ConsultantHero() {
  return (
    <section className="consultant-hero">
      <div className="consultant-hero-content">
        <span className="consultant-hero-badge">+ INDUSTRIAL PROJECT CONSULTANCY</span>
        <h1>From Idea To Industrial Execution</h1>
        <p>
          Salvin Industries helps entrepreneurs, manufacturers, and growing industries plan, design,
          optimize, and execute industrial projects with expert consultation and engineering support.
        </p>
        <div className="consultant-hero-actions">
          <NavLink to="/contact" className="consultant-btn consultant-btn-primary">BOOK CONSULTATION</NavLink>
          <NavLink to="/contact" className="consultant-btn consultant-btn-outline">DISCUSS YOUR PROJECT</NavLink>
        </div>
      </div>
    </section>
  );
}

function AdvisorySection() {
  return (
    <section className="consultant-advisory">
      <div className="consultant-container consultant-narrow">
        <SectionHeader eyebrow="INDUSTRIAL CONSULTANCY" title="Engineering and technical advisory" />
        <div className="consultant-copy-stack">
          <p>
            Salvin Industries provides complete industrial consultancy services for entrepreneurs,
            manufacturers, and growing businesses looking to establish or optimize industrial operations.
            Our consultancy approach focuses on practical engineering, operational efficiency, process
            planning, and scalable manufacturing solutions tailored to modern industry requirements.
          </p>
          <p>
            From turnkey project consultancy and product setup planning to automation integration and
            plant optimization, our engineering team helps businesses make informed technical and
            operational decisions. We combine industry expertise with execution experience to create
            efficient, cost-effective, and production-focused industrial systems.
          </p>
          <p>
            Our consultancy services also support first-time industrial entrepreneurs with strategic guidance
            throughout the project lifecycle - including feasibility planning, workflow design, machinery
            selection, production strategy, installation planning, and commissioning support.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="consultant-services">
      <div className="consultant-container">
        <SectionHeader
          eyebrow="WHAT WE OFFER"
          title="Consulting"
          accent="Services"
          text="Comprehensive industrial consultancy tailored to your project scale, complexity, and industry requirements."
        />
        <div className="consultant-service-grid">
          {serviceCards.map((service, index) => (
            <article className="consultant-service-card" key={service.title}>
              <div className="consultant-card-top">
                <span className="consultant-card-icon"><ConsultantIcon name={service.icon} /></span>
                <span className="consultant-card-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <NavLink to="/contact">Explore Service &gt;</NavLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="consultant-process">
      <div className="consultant-container">
        <SectionHeader
          eyebrow="OUR APPROACH"
          title="How"
          accent="Consultation Works"
          text="A structured, proven seven-step methodology that takes your industrial project from initial discussion to full operational success."
        />
        <div className="consultant-process-row">
          {processSteps.map(([icon, label], index) => (
            <div className="consultant-process-step" key={label}>
              <div className="consultant-process-icon">
                <ConsultantIcon name={icon} />
                <span>{index + 1}</span>
              </div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="consultant-trust">
      <div className="consultant-container consultant-trust-inner">
        <SectionHeader
          eyebrow="WHY SALVIN INDUSTRIES"
          title="Trusted By Industries Across The Globel"
          text="A structured, proven seven-step methodology that takes your industrial project from initial discussion to full operational success."
        />
        <div className="consultant-trust-list">
          {trustPoints.map((point) => (
            <div className="consultant-trust-item" key={point.title}>
              <span><ConsultantIcon name="gear" /></span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationForm() {
  return (
    <section className="consultant-request">
      <div className="consultant-container">
        <SectionHeader
          eyebrow="GET STARTED"
          title="Request a"
          accent="Consultation"
          text="Fill in your project requirements and our engineering experts will respond within 24 hours."
        />
        <div className="consultant-request-grid">
          <form className="consultant-form">
            <label>
              COMPANY NAME
              <input type="text" placeholder="Your company" />
            </label>
            <label>
              EMAIL ADDRESS *
              <input type="email" placeholder="email@company.com" />
            </label>
            <label>
              PHONE NUMBER *
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </label>
            <label>
              REQUIREMENT DETAILS *
              <textarea rows="6" placeholder="Describe your project requirements, current situation, and what you're looking to achieve..." />
            </label>
            <button type="button" className="consultant-submit">
              <span>!</span> Request Consultation
            </button>
          </form>
          <aside className="consultant-benefits">
            <div className="consultant-response-box">
              <span>24h</span>
              <div>
                <h3>Response Within 24 Hours</h3>
                <p>Our team will contact you promptly</p>
              </div>
            </div>
            <h2>Why Consult With Salvin?</h2>
            <p className="consultant-benefit-intro">
              We treat every consultation as a long-term engineering partnership, not just a project.
            </p>
            <div className="consultant-benefit-list">
              {consultBenefits.map((benefit) => (
                <div className="consultant-benefit-item" key={benefit.title}>
                  <span>OK</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function ConsultantPage() {
  return (
    <main className="consultant-page">
      <ConsultantHero />
      <AdvisorySection />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <ConsultationForm />
    </main>
  );
}
