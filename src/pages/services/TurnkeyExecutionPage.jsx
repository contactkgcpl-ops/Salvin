import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TurnkeyExecutionPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/heroes/turnkey_hiro.jpg";

  const subServices = [
    {
      title: "Greenfield & Brownfield Projects",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "End-to-end execution of new manufacturing units from ground zero (Greenfield) or expansion/modernization of active units (Brownfield)."
    },
    {
      title: "Civil & Infrastructure Coordination",
      image: "/assets/core/services/service_plant_design.jpg",
      description: "On-site civil oversight, heavy machinery foundation design, industrial epoxy flooring, drainage channels, and cleanroom HVAC integration."
    },
    {
      title: "Plant Installation",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Precision mechanical positioning, optical alignment, sanitary SS316L orbital TIG welding, electrical power cabling, and safety interlocks."
    },
    {
      title: "Project Management",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Single-point project management, Gantt chart scheduling, procurement expediting, factory acceptance testing (FAT), and site safety audits."
    },
    {
      title: "Commissioning & Handover",
      image: "/assets/core/services/service_optimization.jpg",
      description: "Dry runs, water trials, commercial product validation, IQ/OQ/PQ documentation, operator SOP training, and final operational handover."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between Greenfield and Brownfield turnkey execution?",
      answer: "Greenfield projects start from an empty plot of land with complete civil construction, while Brownfield projects involve expanding or modernizing an existing factory facility without stopping active production."
    },
    {
      question: "What validation protocols are provided upon turnkey plant completion?",
      answer: "We provide complete IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification) protocol documentation required for GMP and regulatory audits."
    },
    {
      question: "How long does a typical turnkey food or industrial plant project take?",
      answer: "Turnkey project execution generally takes between 3 to 8 months from civil foundation coordination to final commercial product trials, depending on plant scale."
    },
    {
      question: "Does Salvin provide post-commissioning technical support and training?",
      answer: "Yes, we provide hands-on operator training, detailed SOP manuals, and 24/7 technical support along with Annual Maintenance Contracts (AMC)."
    },
    {
      question: "Do you supply the processing machinery as part of the turnkey contract?",
      answer: "Yes, as a leading machinery manufacturer and turnkey contractor, we manufacture and supply all core processing machinery, conveyorships, and packaging automation."
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
          <span className="tag mb-4">SALVIN TURNKEY PROJECTS</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
            Turnkey Projects
          </h1>
          <p className="text-base md:text-xl font-semibold text-gray-200 max-w-4xl drop-shadow-lg leading-relaxed mb-8">
            Food | Pharmaceutical | API | Cosmetics | Oil | Confectionery | Snacks
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
            Turnkey Project Execution <span>Core Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries offers over <span className="font-bold">25+ years of turnkey project leadership</span>, delivering 500+ successful manufacturing facilities globally.
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
              Complete Turnkey Manufacturing <span>Plant Execution</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Single-point accountability from architectural layout to commercial production trials and operational handover.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Top Turnkey Project <span>Contractors in India</span>
            </h2>
            <p className="mb-4">
              Salvin Industries is a recognized turnkey project contractor for food processing, spices grinding, beverage bottling, pharmaceutical, and chemical manufacturing plants. We manage every phase of industrial project delivery—eliminating contractor friction and cost overruns.
            </p>
            <p>
              Our turnkey execution teams handle civil infrastructure coordination, utility piping installation, machinery positioning, electrical wiring, and final commissioning trials under one roof.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Turnkey Deliverables</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Greenfield &amp; Brownfield Project Execution</h3>
                <p>
                  Execution of new plant setups on empty plots (Greenfield) or expanding operational capacity within operating facilities (Brownfield) with zero production disruption.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Civil &amp; Infrastructure Coordination</h3>
                <p>
                  On-site civil oversight including heavy equipment foundation pads, anti-bacterial epoxy flooring, drainage channels, HVAC cleanroom integration, and structural stability.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Precision Plant Installation</h3>
                <p>
                  Mechanical machinery positioning, optical laser alignment, sanitary orbital TIG welding for SS316L piping headers, power wiring, and safety interlock integration.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Single-Point Project Management</h3>
                <p>
                  Dedicated project manager oversight, Gantt milestone tracking, procurement expediting, factory acceptance testing (FAT), and site safety audits.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Commissioning, Validation &amp; Handover</h3>
                <p>
                  Rigorous dry runs, water trials, commercial validation, IQ/OQ/PQ protocol documentation, operator training, throughput verification, and operational handover.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose Salvin for <span>Turnkey Projects?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">25+ Years of Turnkey Experience</h3>
                <p>Over 500+ successful turnkey plant executions across India, Africa, Middle East, and Asia.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Single-Point Accountability</h3>
                <p>No multi-vendor conflicts; we take complete responsibility for design, fabrication, installation, and commissioning.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Guaranteed Plant Capacity</h3>
                <p>We commit to verified throughput rates and yield efficiencies prior to final handover.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Turnkey Verticals <span>We Execute</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices Processing &amp; Grinding Turnkey Lines</li>
              <li>Snacks, Namkeen &amp; Potato Chips Manufacturing</li>
              <li>Fruit Juice, Sauce &amp; Beverage Bottling Plants</li>
              <li>Pharma Formulation &amp; Cleanroom Facilities</li>
              <li>Chemical &amp; API Processing Units</li>
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
