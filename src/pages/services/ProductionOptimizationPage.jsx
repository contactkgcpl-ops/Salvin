import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProductionOptimizationPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_optimization.jpg";

  const subServices = [
    {
      title: "Production Line Optimization",
      image: "/assets/core/services/service_optimization.jpg",
      description: "Diagnostic OEE audits analyzing line speed, equipment availability, quality reject rates, and micro-stoppages to maximize daily plant output."
    },
    {
      title: "Process Improvement",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Optimizing thermal cycles, mixing speeds, grinding fineness, and ingredient dosing accuracy to minimize raw material wastage and maintain uniform quality."
    },
    {
      title: "Capacity Enhancement",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Debottlenecking existing plant infrastructure to increase hourly output by up to 45% without major capital expenditure."
    },
    {
      title: "Automation & Efficiency",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Integrating smart PLC/SCADA controllers, automatic weight checkers, vision inspection, pick-and-place robotics, and telemetry dashboards."
    },
    {
      title: "Cost Optimization",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Auditing steam boiler efficiency, condensate recovery, refrigeration loads, power factor correction, and VFD motor drives to lower utility bills."
    }
  ];

  const faqs = [
    {
      question: "What is an Overall Equipment Effectiveness (OEE) audit and how does it help?",
      answer: "An OEE audit measures Availability, Performance Rate, and Quality Yield. It identifies hidden line bottlenecks, unplanned downtime causes, and speed losses to boost plant efficiency."
    },
    {
      question: "Can Salvin increase our existing plant output without buying expensive new machines?",
      answer: "Yes, through process debottlenecking, conveyor speed synchronization, buffer staging adjustments, and automated dosing upgrades, we frequently increase plant throughput by 20% to 45%."
    },
    {
      question: "What energy cost reduction solutions do you implement?",
      answer: "We audit steam boiler condensate recovery, heat exchanger thermal insulation, air compressor leakages, power factor correction, and install VFD motor drives."
    },
    {
      question: "How long does an on-site plant optimization audit take?",
      answer: "An initial diagnostic audit takes 3 to 5 days on-site, followed by a comprehensive optimization report with ROI recommendations within 14 days."
    },
    {
      question: "Do you install automated vision inspection systems for defect detection?",
      answer: "Yes, we integrate high-speed camera vision systems for seal integrity checking, print verification, label alignment, and automatic defect rejection."
    }
  ];

  return (
    <div className="min-w-0 overflow-x-hidden bg-white">
      {/* Full-Width Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-slate-900 pt-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <span className="tag mb-4">SALVIN PRODUCTION OPTIMIZATION</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Production &amp; Process Optimization Services
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Diagnostic OEE audits, process yield enhancement, capacity debottlenecking, Industry 4.0 automation upgrades, and industrial energy cost reduction.
          </p>

          <div>
            <NavLink
              to="/contact"
              className="bg-[#ff7a00] hover:bg-[#e56d00] text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all text-base md:text-lg uppercase tracking-wide inline-block"
            >
              Consult Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* Advisory Sub-Services 5-Column Grid */}
      <section className="py-20 px-4 max-w-[1400px] mx-auto bg-white">
        <div className="text-center mb-12">
          <span className="tag">CORE SOLUTIONS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 mb-4">
            Production &amp; Process <span>Optimization Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries applies <span className="font-bold">25+ years of operational engineering expertise</span> to audit, automate, and optimize manufacturing plant performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {subServices.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white group cursor-pointer border border-gray-100 rounded-xl overflow-hidden p-4 shadow-sm hover:shadow-md transition-all">
              <div className="overflow-hidden mb-4 h-36 border border-gray-100 rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[17px] font-bold text-slate-800 mb-2 leading-snug transition-colors duration-300 group-hover:text-[#ff7a00]">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] mb-4 flex-grow leading-relaxed">
                {service.description}
              </p>
              <NavLink
                to="/contact"
                className="text-[#ff7a00] font-bold text-xs tracking-widest uppercase hover:text-[#e56d00] transition-colors mt-auto inline-block underline underline-offset-4"
              >
                INQUIRE NOW
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Full SEO Content Section */}
      <div className="w-full bg-[#f6f3f0] mt-6">
        <section className="py-16 px-4 max-w-[1200px] mx-auto text-gray-700 space-y-12 text-[15px] leading-relaxed">
          
          <div className="text-center pb-8 mb-4 border-b border-gray-300/60">
            <span className="tag">TECHNICAL OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 mb-4">
              Comprehensive Plant Optimization &amp; <span>Yield Maximization</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Diagnostic OEE audits, automation retrofitting, waste reduction, and thermal energy recovery for operating industrial facilities.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Industrial Optimization <span>Experts in India</span>
            </h2>
            <p className="mb-4">
              In today's competitive manufacturing landscape, operational efficiency directly dictates profitability. Salvin Industries offers comprehensive plant optimization services designed to eliminate production bottlenecks, reduce raw material giveaway, lower energy bills, and upgrade manual lines with Industry 4.0 automation.
            </p>
            <p>
              Our senior process engineers conduct in-depth on-site audits, analyzing equipment cycle times, thermal losses, operator movements, and quality reject rates.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Optimization Capabilities</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Production Line Optimization (OEE Audits)</h3>
                <p>
                  Diagnostic audits of active production lines analyzing Overall Equipment Effectiveness (Availability, Performance, Quality), reducing micro-stoppages, and harmonizing line speed between processing and packaging modules.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Process Improvement &amp; Yield Maximization</h3>
                <p>
                  Fine-tuning thermal processing cycles, mixing times, grinding fineness, and ingredient dosing accuracy to minimize raw material wastage and maintain uniform quality batch after batch.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Capacity Enhancement &amp; Debottlenecking</h3>
                <p>
                  Re-engineering workflow synchronization to increase plant output capacity by up to 45% without incurring major capital expenditure on new machinery.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Automation &amp; Smart Sensor Upgrade</h3>
                <p>
                  Integrating smart PLC/SCADA controllers, automatic weight checkers, vision inspection systems, pick-and-place robotic arms, and telemetry dashboards to eliminate human operational errors.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Energy &amp; Utility Cost Reduction</h3>
                <p>
                  Auditing steam boiler condensate recovery, refrigeration loads, power factor correction, and heat exchanger insulation to significantly lower monthly utility bills.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose <span>Salvin Optimization Services?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Guaranteed Output Increase</h3>
                <p>We commit to measurable capacity improvements and payback ROI timelines prior to audit implementation.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Industry 4.0 Telemetry</h3>
                <p>Real-time SCADA dashboards monitoring machine status, energy consumption, and batch output metrics.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Zero Downtime Implementation</h3>
                <p>Optimization upgrades and sensor retrofits are scheduled during planned maintenance windows to avoid stopping production.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Sectors &amp; <span>Industries Served</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices &amp; Food Powder Processing Lines</li>
              <li>Snack Frying &amp; Packaging Automation</li>
              <li>Beverage &amp; Liquid Bottling Plants</li>
              <li>Pharma Formulations &amp; Packaging Lines</li>
              <li>Chemical Synthesis &amp; Liquid Filling Facilities</li>
            </ul>
          </div>

          {/* FAQ Accordion Section */}
          <div>
            <span className="tag">FAQ</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-2 mb-6 border-t border-gray-300/60 pt-6">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-slate-800 hover:text-[#ff7a00] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl font-bold ml-4">{openFAQIndex === index ? "−" : "+"}</span>
                  </button>
                  {openFAQIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
