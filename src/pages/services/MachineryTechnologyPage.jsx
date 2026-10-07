import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  Cpu, 
  FileText, 
  Sliders, 
  Search, 
  ShieldCheck, 
  DollarSign, 
  GitMerge, 
  HardHat, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";

export default function MachineryTechnologyPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Machinery & Technology Consultancy | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/service_machinery.webp";

  const servicesList = [
    {
      id: "machinery-selection",
      title: "Machinery Selection",
      icon: <Cpu size={32} className="text-orange-500" />,
      description: "Expert guidance in selecting high-efficiency, hygienic, and scalable food processing machinery matched to your exact throughput requirements and raw material characteristics.",
      deliverables: [
        "Capacity & Throughput Matched Machinery Selection",
        "Energy-Efficient & Hygienic Design Verification",
        "Single Machine vs. Automated Line Evaluation",
        "cGMP & Food Grade Material Compliance"
      ]
    },
    {
      id: "equipment-specification",
      title: "Equipment Specification",
      icon: <FileText size={32} className="text-orange-500" />,
      description: "Preparation of detailed technical equipment datasheets, SS304/SS316 material grade requirements, motor ratings, PLC control specs, and sanitary finish standards.",
      deliverables: [
        "Itemized Machinery Technical Datasheets",
        "Sanitary SS304 / SS316 Material Specifications",
        "PLC, HMI & Electrical Control System Specs",
        "Utility Consumption & Utility Interface Specs"
      ]
    },
    {
      id: "technical-comparison",
      title: "Technical Comparison",
      icon: <Sliders size={32} className="text-orange-500" />,
      description: "Side-by-side technical evaluation of machinery quotes from multiple OEM manufacturers, comparing performance guarantees, power efficiency, and build quality.",
      deliverables: [
        "Vendor Technical Comparison Matrix",
        "Power, Utility & Yield Efficiency Scorecard",
        "Wear & Tear Component Life Expectancy Analysis",
        "CAPEX vs. Long-Term OPEX Comparison"
      ]
    },
    {
      id: "vendor-identification",
      title: "Vendor Identification",
      icon: <Search size={32} className="text-orange-500" />,
      description: "Sourcing reliable domestic and international machinery manufacturers with proven track records in specialized food processing and packaging machinery.",
      deliverables: [
        "Global & Indian Machinery OEM Shortlisting",
        "Tier-1 vs. Tier-2 Manufacturer Scouting",
        "Specialized Machine OEM Capability Audit",
        "Verified Supply Chain & Spare Parts Mapping"
      ]
    },
    {
      id: "vendor-evaluation",
      title: "Vendor Evaluation",
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      description: "On-site factory audits of OEM workshops to inspect fabrication quality, welding finish, testing capabilities, components quality, and compliance standards.",
      deliverables: [
        "OEM Workshop Technical Quality Audit",
        "TIG Welding & Surface Polish Inspection",
        "Sub-component & Motor Brand Verification",
        "Vendor Reliability & Financial Stability Check"
      ]
    },
    {
      id: "machinery-cost-negotiation",
      title: "Machinery Cost Negotiation",
      icon: <DollarSign size={32} className="text-orange-500" />,
      description: "Strategic commercial negotiation on machinery prices, payment terms, spare parts packages, extended warranties, and commissioning support.",
      deliverables: [
        "Optimal Price & Discount Negotiation",
        "Milestone-Based Payment Term Structuring",
        "Wear-and-Tear Spare Kit Inclusion",
        "Warranty & Service Level Agreement (SLA) Sync"
      ]
    },
    {
      id: "line-integration",
      title: "Line Integration",
      icon: <GitMerge size={32} className="text-orange-500" />,
      description: "Seamless synchronization of multi-vendor machines into a unified, continuous processing line with automated interlocks, conveyors, and central PLC control.",
      deliverables: [
        "Multi-Vendor Machinery Interlocking",
        "Conveyor & Accumulation Table Speed Sync",
        "Central PLC & SCADA Data Integration",
        "Line Bottleneck & Buffer Station Sizing"
      ]
    },
    {
      id: "installation-supervision",
      title: "Installation Supervision",
      icon: <HardHat size={32} className="text-orange-500" />,
      description: "On-site technical supervision during machinery uncrating, foundation anchoring, leveling, utility pipe hookups, and electrical panel wiring.",
      deliverables: [
        "On-Site Machinery Leveling & Alignment",
        "Sanitary Pipe Header & Electrical Wiring Audit",
        "Safety Interlock & E-Stop Verification",
        "Pre-Commissioning Mechanical Checklists"
      ]
    },
    {
      id: "trial-commissioning",
      title: "Trial & Commissioning",
      icon: <CheckCircle2 size={32} className="text-orange-500" />,
      description: "Rigorous dry runs, water trials, and live raw material test runs to validate machine speeds, seal integrity, thermal hold times, and product quality.",
      deliverables: [
        "No-Load & Full-Load Trial Run Protocols",
        "Raw Material Yield & Wastage Optimization",
        "Operator Safety & Emergency Stop Validation",
        "Standard Operating Procedure (SOP) Handover"
      ]
    },
    {
      id: "production-capacity-validation",
      title: "Production Capacity Validation",
      icon: <TrendingUp size={32} className="text-orange-500" />,
      description: "Performance guarantee testing to verify hourly output capacities, energy consumption per ton, product consistency, and overall equipment effectiveness (OEE).",
      deliverables: [
        "Contractual OEE & Capacity Verification Test",
        "Specific Utility & Power Consumption Audit",
        "Finished Product Quality & Moisture Testing",
        "Formal Plant Handover & Acceptance Sign-off"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do you help us select the right machinery for our food product?",
      answer: "We evaluate your raw material physical properties, required hourly output, desired shelf life, and budget. Based on 25+ years of engineering experience, we specify the ideal machine metallurgy, drive power, heating system, and automation level."
    },
    {
      question: "Why is vendor evaluation necessary before placing equipment orders?",
      answer: "Vendor evaluation ensures the OEM manufacturer uses genuine SS304/SS316 food-grade materials, reputed motor and electrical brands (Siemens, Schneider, ABB), and high-quality sanitary welding, protecting your investment from premature breakdowns."
    },
    {
      question: "Can Salvin Industries integrate machinery purchased from multiple different manufacturers?",
      answer: "Yes, we specialize in multi-vendor line integration. We design transfer conveyors, line speed matching logic, buffer tables, and central PLC interlocks so machines from different suppliers run seamlessly as one continuous line."
    },
    {
      question: "What is included during trial and commissioning supervision?",
      answer: "Our engineers conduct mechanical dry runs, utility leak checks, water trials, and live raw material trials to fine-tune temperature controls, line speeds, packaging seals, and product yields before final handover."
    },
    {
      question: "Do you assist in machinery price negotiations?",
      answer: "Yes, our technical procurement team assists clients in evaluating OEM cost structures, negotiating fair pricing, securing essential spare parts kits, and structuring milestone payment terms."
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
            SALVIN MACHINERY ADVISORY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            MACHINERY &amp; TECHNOLOGY CONSULTANCY
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Expert Equipment Selection, Technical Vendor Evaluation, Cost Negotiation, Multi-Vendor Line Integration, Installation Supervision &amp; Production Capacity Validation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Machinery Experts <ArrowRight size={18} />
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
                alt="Machinery & Technology Consultancy" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Machinery &amp; Technology Consultancy Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Choosing the right processing and packaging machinery is the single most critical decision in setting up a food factory. At <strong>Salvin Industries</strong>, we offer unbiased <strong>machinery selection, equipment technical specification, vendor evaluation, price negotiation, line integration, and commissioning supervision</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                We protect your capital investment by ensuring you acquire durable, food-grade SS304/SS316 machines with optimal power efficiency, reliable automation, and verified production throughput.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Core Machinery Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Machinery &amp; Technology Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              End-to-end technical procurement, vendor auditing, line integration, and commissioning support.
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
              Common questions about our Machinery &amp; Technology Consultancy Services.
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
      <section className="py-16 bg-gradient-to-r from-[#091938] via-[#112a55] to-[#091938] text-white text-center px-4 shadow-xl">
        <div className="content-container max-w-4xl mx-auto">
          <span className="text-[#ff7a00] text-xs font-bold uppercase tracking-widest block mb-3">
            Tailored Industrial Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Need Expert Advice on Machinery Procurement?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact our technical team today to schedule an equipment specification review or OEM vendor evaluation.
          </p>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 tracking-wider uppercase"
          >
            Get In Touch With Our Machinery Consultants <span className="text-lg">→</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
