import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckSquare, 
  Sparkles, 
  Award, 
  BadgeCheck, 
  ClipboardList, 
  FileSearch, 
  FileText, 
  FolderCheck, 
  Search, 
  GitBranch, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function FoodSafetyQualityPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/food-safety-quality-consultancy.webp";

  const servicesList = [
    {
      id: "fssai-compliance",
      title: "FSSAI Compliance",
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      description: "Complete assistance for FSSAI State and Central licensing, regulatory product category classification, labeling compliance, and legal food safety documentation.",
      deliverables: [
        "FSSAI Central & State License Application",
        "Product Category & Additive Compliance Mapping",
        "Mandatory Front & Back Labeling Compliance Audit",
        "Regulatory Audit Preparation & Filing"
      ]
    },
    {
      id: "haccp",
      title: "HACCP",
      icon: <AlertTriangle size={32} className="text-orange-500" />,
      description: "Implementation of 7 HACCP principles to identify physical, chemical, allergen, and biological hazards across raw material receiving, processing, and packaging.",
      deliverables: [
        "Hazard Identification & Risk Assessment Matrix",
        "Critical Control Point (CCP) Determination",
        "CCP Monitoring & Critical Limit Protocols",
        "Corrective Action & Verification Procedures"
      ]
    },
    {
      id: "gmp",
      title: "GMP (Good Manufacturing Practices)",
      icon: <CheckSquare size={32} className="text-orange-500" />,
      description: "Establishing cGMP protocols for facility hygiene, equipment sanitary design, pest management, air filtration, and cross-contamination prevention.",
      deliverables: [
        "cGMP Facility Audit & Gap Assessment",
        "Equipment Sanitary Design Verification",
        "Integrated Pest Management (IPM) System",
        "Cleanroom & Air Filtration Protocol Sync"
      ]
    },
    {
      id: "ghp",
      title: "GHP (Good Hygiene Practices)",
      icon: <Sparkles size={32} className="text-orange-500" />,
      description: "Designing personnel hygiene protocols, gowning procedures, hand sanitization stations, foot baths, and medical screening compliance for plant staff.",
      deliverables: [
        "Personal Hygiene & Gowning Standard Protocols",
        "Staff Health & Medical Fitness Tracking",
        "Hand Wash & Sanitization Facility Audits",
        "Apron & Footwear Sanitization Rules"
      ]
    },
    {
      id: "iso-22000",
      title: "ISO 22000",
      icon: <Award size={32} className="text-orange-500" />,
      description: "End-to-end consulting for ISO 22000:2018 Food Safety Management System (FSMS) implementation, documentation, management review, and certification audit prep.",
      deliverables: [
        "FSMS ISO 22000 Manual & System Blueprint",
        "PRP & OPRP Identification Framework",
        "Management Review & Key Performance Indicators",
        "Certification Body Audit Pre-Assessment"
      ]
    },
    {
      id: "fssc-22000",
      title: "FSSC 22000",
      icon: <BadgeCheck size={32} className="text-orange-500" />,
      description: "GFSI-recognized FSSC 22000 certification consulting, integrating ISO 22000, sector-specific PRPs, TACCP (Food Defense), and VACCP (Food Fraud) requirements.",
      deliverables: [
        "FSSC 22000 Scheme Implementation Plan",
        "TACCP Threat & Food Defense Vulnerability Plan",
        "VACCP Raw Material Fraud Prevention Plan",
        "GFSI Standard Audit Readiness Certificate"
      ]
    },
    {
      id: "internal-audit",
      title: "Internal Audit",
      icon: <ClipboardList size={32} className="text-orange-500" />,
      description: "Periodic internal food safety audits to evaluate compliance against FSSAI, ISO 22000, and customer quality standards before formal third-party audits.",
      deliverables: [
        "Systematic Internal Audit Schedule & Checklists",
        "Objective Non-Conformity (NC) Identification",
        "Departmental Compliance Scoring Reports",
        "Management Review Action Summary"
      ]
    },
    {
      id: "food-safety-audit",
      title: "Food Safety Audit",
      icon: <FileSearch size={32} className="text-orange-500" />,
      description: "Comprehensive 3rd-party vendor and supplier audits to inspect raw material quality, hygiene levels, storage conditions, and supply chain integrity.",
      deliverables: [
        "Raw Material Supplier Quality Audit Reports",
        "Co-Packer & Third-Party Facility Audits",
        "Hygiene Scorecard & Risk Rating Matrix",
        "Supplier Corrective Action Requirements"
      ]
    },
    {
      id: "sop-ssop",
      title: "SOP / SSOP",
      icon: <FileText size={32} className="text-orange-500" />,
      description: "Drafting customized Standard Operating Procedures (SOP) and Sanitation Standard Operating Procedures (SSOP) for equipment cleaning, CIP cycles, and batching.",
      deliverables: [
        "Equipment Cleaning & CIP Validation SSOPs",
        "Sanitization Chemical Dosing & Contact Time SOPs",
        "Equipment Operating & Calibration Work Instructions",
        "Daily Sanitation Logs & Checklist Templates"
      ]
    },
    {
      id: "quality-documentation",
      title: "Quality Documentation",
      icon: <FolderCheck size={32} className="text-orange-500" />,
      description: "Development of complete Quality Assurance (QA) and Quality Control (QC) documentation, lab testing protocols, raw material specs, and COA formats.",
      deliverables: [
        "QA/QC Manual & Policy Documentation",
        "Certificate of Analysis (COA) Templates",
        "Raw Material & Packaging Specification Sheets",
        "Finished Product Testing Release Protocols"
      ]
    },
    {
      id: "traceability-system",
      title: "Traceability System",
      icon: <Search size={32} className="text-orange-500" />,
      description: "Designing forward and backward batch traceability systems, barcode tracking, mock recall exercises, and rapid ingredient tracking protocols.",
      deliverables: [
        "Forward & Backward Batch Code Mapping",
        "Mock Recall Exercise & Time Target Execution",
        "ERP & Barcode Traceability Architecture",
        "Crisis Management & Product Recall Protocols"
      ]
    },
    {
      id: "capa",
      title: "CAPA (Corrective and Preventive Action)",
      icon: <GitBranch size={32} className="text-orange-500" />,
      description: "Structured root-cause analysis framework using 5-Why and Fishbone diagrams to resolve customer complaints, lab rejections, and process non-conformities.",
      deliverables: [
        "5-Why & Fishbone Root Cause Analysis Templates",
        "CAPA Log & Implementation Tracking System",
        "Preventive Action Effectiveness Audits",
        "Customer Complaint Resolution Reports"
      ]
    },
    {
      id: "food-safety-training",
      title: "Food Safety Training",
      icon: <GraduationCap size={32} className="text-orange-500" />,
      description: "Interactive, certified training programs for factory managers, supervisors, and food handlers on FoSTaC, hygiene practices, allergen control, and HACCP.",
      deliverables: [
        "FSSAI FoSTaC Food Safety Training Sessions",
        "Worker Hygiene & Allergen Management Workshops",
        "HACCP Team & Internal Auditor Training",
        "Training Certificates & Attendance Logs"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do you help our factory secure FSSAI licensing and compliance?",
      answer: "We handle complete FSSAI Central and State licensing applications, product category audits, packaging labeling reviews, and regulatory inspection preparation to ensure zero compliance gaps."
    },
    {
      question: "What is the difference between ISO 22000 and FSSC 22000?",
      answer: "ISO 22000 is a global food safety management standard. FSSC 22000 is a GFSI-recognized scheme that builds upon ISO 22000 by adding sector-specific Prerequisite Programs (PRPs), TACCP (Food Defense), and VACCP (Food Fraud) requirements."
    },
    {
      question: "Why are SOPs and SSOPs critical for food manufacturing units?",
      answer: "Standard Operating Procedures (SOPs) and Sanitation SOPs (SSOPs) ensure every worker follows identical cleaning, sanitization, and equipment operation steps, preventing batch variations and bacterial contamination."
    },
    {
      question: "Can Salvin Industries conduct mock recall exercises for our plant?",
      answer: "Yes, we design and execute mock product recall drills to test how quickly your team can trace raw material lot numbers from finished goods back to suppliers within specified target hours."
    },
    {
      question: "Do you offer certified food safety training for factory staff?",
      answer: "Yes, our certified food safety auditors provide FSSAI FoSTaC training, worker hygiene workshops, allergen control courses, and internal auditor training programs."
    }
  ];

  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      {/* Hero Banner Section */}
      <section 
        className="relative py-24 px-4 bg-slate-900 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('${heroImage}')`
        }}
      >
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            SALVIN QUALITY &amp; COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            FOOD SAFETY &amp; QUALITY CONSULTANCY
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            FSSAI Licensing, HACCP, GMP, GHP, ISO 22000, FSSC 22000, Internal Auditing, SOP/SSOP Drafting, Traceability Systems &amp; Certified Food Safety Training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Safety Experts <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SEO Intro Section (Image Left, Content Right) */}
      <section className="py-12 md:py-16">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Image */}
            <div className="w-full md:w-5/12 flex justify-center items-center">
              <img 
                src={introImage} 
                alt="Food Safety & Quality Consultancy" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Food Safety &amp; Quality Compliance Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Ensuring food safety and strict regulatory compliance is essential for consumer trust and legal operation. At <strong>Salvin Industries</strong>, we provide end-to-end <strong>FSSAI licensing, HACCP implementation, cGMP/GHP system design, ISO 22000, FSSC 22000 certification consulting, and food safety audits</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                Our food safety experts help food processing plants, central kitchens, and packaging units build robust quality systems, pass third-party audits, resolve non-conformities, and achieve global GFSI standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 Core Safety Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Food Safety &amp; Quality Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Regulatory compliance, certification consulting, quality documentation, and safety audits.
            </p>
          </div>

          <div className="food-services-grid">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white rounded-none p-6 md:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 text-justify">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Deliverables &amp; Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <NavLink 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider transition-colors"
                  >
                    Request Consultation <ArrowRight size={14} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-600 text-base">
              Common questions about our Food Safety &amp; Quality Consultancy Services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className="text-orange-500 font-extrabold text-xl">{openFAQIndex === index ? "−" : "+"}</span>
                </button>

                {openFAQIndex === index && (
                  <div className="p-5 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-[#0b1c2c] text-white text-center px-4 border-t-4 border-orange-500 shadow-xl">
        <div className="content-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Need Guidance on Food Safety &amp; Certification?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Contact our food safety consultants today to schedule an audit, FSSAI compliance review, or ISO/FSSC training session.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Safety Experts
          </NavLink>
        </div>
      </section>
    </div>
  );
}
