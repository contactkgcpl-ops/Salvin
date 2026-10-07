import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  Search, 
  ShieldCheck, 
  FileSearch, 
  Layers, 
  DollarSign, 
  FlaskConical, 
  Factory, 
  FileCheck, 
  Tag, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function ContractManufacturingConsultancyPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Contract Manufacturing & Co-Packing Consultancy | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/contract_manufacturing.jpg";

  const servicesList = [
    {
      id: "contract-manufacturer-search",
      title: "Contract Manufacturer Search",
      icon: <Search size={32} className="text-orange-500" />,
      description: "Identifying and shortlisting certified food co-packers, third-party processing units, and white-label manufacturing partners across India and overseas.",
      deliverables: [
        "Verified Food Co-Packer & OEM Shortlist",
        "Regional Location & Logistics Proximity Audit",
        "Processing Technology Capability Matching",
        "Initial Non-Disclosure Agreement (NDA) Execution"
      ]
    },
    {
      id: "vendor-qualification",
      title: "Vendor Qualification",
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      description: "Rigorous screening of co-manufacturing units evaluating regulatory licenses, FSSAI/FDA registration, hygiene standards, and track record.",
      deliverables: [
        "FSSAI, ISO & GFSI License Verification",
        "Financial Stability & Business Reputation Audit",
        "Legal Compliance & Export Registration Check",
        "Vendor Shortlist Scoring Matrix"
      ]
    },
    {
      id: "co-manufacturer-audit",
      title: "Co-manufacturer Audit",
      icon: <FileSearch size={32} className="text-orange-500" />,
      description: "On-site physical technical audits of co-packer facilities inspecting processing lines, cleanrooms, QA/QC testing labs, and warehouse hygiene.",
      deliverables: [
        "On-Site Technical & Hygiene Audit Reports",
        "cGMP & HACCP Compliance Scoring",
        "Equipment Maintenance & Sanitation Check",
        "Corrective Action Plan (CAPA) Requirements"
      ]
    },
    {
      id: "capacity-evaluation",
      title: "Capacity Evaluation",
      icon: <Layers size={32} className="text-orange-500" />,
      description: "Assessing co-packer line capacities, shift availability, Minimum Order Quantities (MOQ), and seasonal production flexibility to support your brand's growth.",
      deliverables: [
        "Available Shift Capacity & Line Speed Audit",
        "Minimum Order Quantity (MOQ) Structuring",
        "Peak Season Production Allocation Plan",
        "Scalability & Batch Turnaround Verification"
      ]
    },
    {
      id: "product-manufacturing-cost",
      title: "Product Manufacturing Cost",
      icon: <DollarSign size={32} className="text-orange-500" />,
      description: "Itemized conversion cost analysis covering raw ingredient yield, processing loss, packaging conversion charges, and co-packing margin negotiations.",
      deliverables: [
        "Per-Unit Conversion Cost-per-Kg Breakdown",
        "Yield Loss & Scrap Allowance Thresholds",
        "Transparent Co-Packing Margin Structuring",
        "Volume-Based Price Discount Schedules"
      ]
    },
    {
      id: "trial-batch-coordination",
      title: "Trial Batch Coordination",
      icon: <FlaskConical size={32} className="text-orange-500" />,
      description: "On-site technical supervision during pilot trial runs and first commercial production batches to ensure recipe adherence, taste consistency, and seal integrity.",
      deliverables: [
        "Pilot Batch Trial Supervision & Protocol",
        "Benchtop vs. Factory Yield Reconciliation",
        "Taste, Texture & Color Profile Matching",
        "Trial Batch Sign-Off & Release Certificate"
      ]
    },
    {
      id: "commercial-production",
      title: "Commercial Production",
      icon: <Factory size={32} className="text-orange-500" />,
      description: "Managing commercial scale-up orders, production scheduling, quality control monitoring, and batch release protocols at third-party manufacturing plants.",
      deliverables: [
        "Commercial Production Master Scheduling",
        "In-Line QA Sampling & Moisture/Seal Checks",
        "Batch Release Documentation & COA Sign-off",
        "On-Time Delivery & Dispatch Tracking"
      ]
    },
    {
      id: "quality-agreement",
      title: "Quality Agreement",
      icon: <FileCheck size={32} className="text-orange-500" />,
      description: "Drafting legally binding Quality Technical Agreements (QTA) defining finished product specifications, rejection criteria, lab testing responsibility, and liability.",
      deliverables: [
        "Finished Goods Technical Specification Sheet",
        "Defect Thresholds & Rejection Liabilities",
        "Lab Testing & Certificate of Analysis (COA) SLA",
        "Product Recall Liability & Indemnity Clauses"
      ]
    },
    {
      id: "private-label-manufacturing",
      title: "Private Label Manufacturing",
      icon: <Tag size={32} className="text-orange-500" />,
      description: "Complete white-label product development, packaging sourcing, branding alignment, and co-packing execution for retail supermarket brands and D2C startups.",
      deliverables: [
        "Turnkey White-Label Recipe & SKU Formulation",
        "Primary & Secondary Packaging Sourcing",
        "Barcode & FSSAI / FDA Label Compliance",
        "End-to-End Co-Packing Operations Setup"
      ]
    }
  ];

  const faqs = [
    {
      question: "Why should a food brand use contract manufacturing instead of building its own plant?",
      answer: "Contract manufacturing eliminates heavy upfront CAPEX civil and machinery costs, speeds up market entry, and allows food brands to scale production flexibly without managing factory operations."
    },
    {
      question: "How do you audit and qualify third-party food co-packers?",
      answer: "Our technical auditors conduct on-site physical facility inspections covering FSSAI/FDA licenses, cGMP cleanroom zoning, machinery sanitation, QC testing labs, and past manufacturing track record."
    },
    {
      question: "What is a Quality Technical Agreement (QTA) and why is it essential?",
      answer: "A Quality Technical Agreement (QTA) is a legal document defining exact product specifications, moisture levels, seal parameters, defect rejection criteria, lab testing responsibilities, and financial liabilities between brand owner and co-packer."
    },
    {
      question: "Can Salvin Industries assist in negotiating co-packing conversion costs and MOQs?",
      answer: "Yes, our technical procurement team analyzes raw material yields, processing energy consumption, and packaging speeds to negotiate transparent conversion rates and flexible MOQs."
    },
    {
      question: "Do you supervise trial batches at the co-packer's facility?",
      answer: "Yes, our food technologists attend pilot trial runs and first commercial batches on-site to verify recipe ratios, taste profiles, moisture controls, and packaging seal integrity."
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
            SALVIN CO-MANUFACTURING ADVISORY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            CONTRACT MANUFACTURING CONSULTANCY
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Co-Packer Search, Technical Facility Audits, Conversion Costing, Quality Technical Agreements, Trial Batch Supervision &amp; Private Label Sourcing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Co-Packing Experts <ArrowRight size={18} />
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
                alt="Contract Manufacturing Consultancy" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Contract Manufacturing &amp; Co-Packing Consultancy
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Outsourcing food production requires stringent quality control, reliable partners, and transparent costing. At <strong>Salvin Industries</strong>, we provide end-to-end <strong>contract manufacturer search, vendor qualification, co-packer facility audits, conversion cost negotiation, trial batch supervision, and Quality Technical Agreements</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                We protect your brand's reputation by ensuring your third-party manufacturing partners comply with FSSAI, cGMP, HACCP, and strict quality specifications while optimizing production costs per SKU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Core Co-Manufacturing Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Contract Manufacturing Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Co-packer identification, facility auditing, commercial costing, and trial batch supervision.
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
              Common questions about our Contract Manufacturing Consultancy Services.
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
            Ready to Find the Right Contract Manufacturing Partner?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Speak with our co-packing consultants today to discuss vendor qualification, technical facility audits, or conversion costing.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Co-Packing Consultants
          </NavLink>
        </div>
      </section>
    </div>
  );
}
