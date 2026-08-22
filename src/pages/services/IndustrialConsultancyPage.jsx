import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function IndustrialConsultancyPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_consultancy.jpg";

  const subServices = [
    {
      title: "Project Feasibility & Planning",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Comprehensive techno-economic feasibility studies, DPR preparation, utility sizing, CAPEX/OPEX planning, and market demand assessment before capital deployment."
    },
    {
      title: "Product & Process Consultancy",
      image: "/assets/core/services/service_plant_design.jpg",
      description: "Expert recipe scaling, process flow design, yield optimization, thermal processing cycles, shelf-life stability, and FSSAI/US-FDA food safety compliance."
    },
    {
      title: "Plant Concept & Strategy",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Architectural concept planning, cleanroom zoning, material-personnel flow separation, hazardous area classification, and hygienic plant design."
    },
    {
      title: "Capacity Planning",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Accurate throughput calculation, load balancing, bottleneck elimination, and utility header sizing for steam boilers, air compressors, and chillers."
    },
    {
      title: "Cost & Investment Planning",
      image: "/assets/core/services/service_optimization.jpg",
      description: "Phased capital investment roadmap, machinery ROI forecasting, maintenance cost modeling, and raw material yield maximization to boost long-term margins."
    }
  ];

  const faqs = [
    {
      question: "What is included in a Detailed Project Report (DPR) by Salvin Industries?",
      answer: "Our DPR includes complete financial modeling, CAPEX/OPEX estimates, utility load requirements (power, water, steam), machinery selection, floor plan layouts, raw material sourcing strategies, and ROI projections."
    },
    {
      question: "Do you provide consultancy for regulatory and FSSAI approvals?",
      answer: "Yes, we assist in obtaining FSSAI food safety licenses, central/state pollution control board NOCs, ISO 22000 certifications, and label compliance verification."
    },
    {
      question: "Can Salvin assist with existing factory expansion and modernization?",
      answer: "Absolutely. We specialize in brownfield plant expansion, line debottlenecking, automation upgrades, and workflow re-engineering with zero production downtime."
    },
    {
      question: "Which industries do your consultancy services cater to?",
      answer: "We consult for spices processing, snacks & namkeen, dairy & beverages, frozen foods, pharmaceuticals, specialty chemicals, cosmetics, and agricultural export units."
    },
    {
      question: "What is the typical timeframe for completing an industrial feasibility study?",
      answer: "A complete techno-economic feasibility study and preliminary plant layout design takes between 2 to 4 weeks depending on project scale and complexity."
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
          <span className="tag mb-4">SALVIN INDUSTRIAL CONSULTANCY</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Industrial Consultancy Services
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Expert techno-economic feasibility reports, process engineering, 3D plant layout planning, and strategic advisory for manufacturing units across India.
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
            Industrial Consultancy <span>Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries offers over <span className="font-bold">25+ years of hands-on expertise</span> in industrial plant planning, detailed project engineering, and process optimization.
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
              Complete Industrial Plant <span>Setup &amp; Consultancy</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Strategic guidance from India’s leading industrial consultants to plan, engineer, and execute high-throughput manufacturing plants.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Trusted Industrial Plant <span>Consultants in India</span>
            </h2>
            <p className="mb-4">
              Salvin Industries is a premier industrial plant consultancy based in Ahmedabad, Gujarat, serving manufacturing enterprises across India and global markets. We specialize in end-to-end technical advisory for setting up greenfield food processing units, chemical processing plants, pharmaceutical formulations, and FMCG manufacturing facilities.
            </p>
            <p>
              Our consultancy team bridges the gap between commercial vision and ground-level execution. From initial land evaluation and raw material supply chain mapping to detailed engineering drawings and government approvals, we provide practical, cost-effective solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Consultancy Offerings</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Project Feasibility &amp; Planning</h3>
                <p>
                  Before making capital commitments, we prepare comprehensive Detailed Project Reports (DPR) detailing land requirements, civil infrastructure costs, power and water consumption matrices, machinery selection, raw material availability, and financial ROI models.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Product &amp; Process Consultancy</h3>
                <p>
                  We assist manufacturers in process flow design, recipe scaling, moisture control, thermal processing cycles, and shelf-life extension while ensuring compliance with national and international food safety benchmarks (FSSAI, ISO 22000, US-FDA).
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Plant Concept &amp; Strategy</h3>
                <p>
                  Our architectural planners design cleanroom zoning, material-and-personnel flow separation, hygiene boundaries, and hazardous area classifications to eliminate cross-contamination and satisfy WHO-GMP standards.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Capacity Planning &amp; Bottleneck Analysis</h3>
                <p>
                  We perform throughput load balancing across production equipment, size utility supply lines (steam boilers, chillers, compressed air headers), and eliminate operational bottlenecks to ensure continuous plant output.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Cost &amp; Investment Optimization</h3>
                <p>
                  We structure phased capital expenditure (CAPEX) models, equipment depreciation forecasting, maintenance schedules, and energy recovery systems to maximize gross margins and operational profitability.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Why Choose Salvin Industries for <span>Industrial Consultancy?</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">25+ Years of Engineering Mastery</h3>
                <p>With over two decades of industry leadership, our senior consultants have successfully planned 500+ manufacturing facilities across 30+ nations.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Customized Techno-Economic Solutions</h3>
                <p>Every consultancy plan is tailor-made for your specific land size, production target, budget constraints, and expansion roadmaps.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Unbiased Equipment &amp; Vendor Selection</h3>
                <p>We provide objective machinery selection advice, negotiating commercial terms with global OEMs to ensure top-tier equipment quality.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Regulatory &amp; FSSAI License Guidance</h3>
                <p>Complete support in securing FSSAI food safety licenses, environmental NOCs, ISO 9001:2015 certifications, and label regulatory compliances.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Industries &amp; Verticals <span>We Serve</span></h2>
            <p className="mb-4">Our industrial consultancy services cover a diverse array of manufacturing sectors:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices, Masala Grinding &amp; Blending Plants</li>
              <li>Snacks, Namkeen &amp; Extruded Food Units</li>
              <li>Beverage, Bottled Water &amp; Dairy Processing</li>
              <li>Pharmaceutical Formulations &amp; API Synthesis</li>
              <li>Specialty Chemicals &amp; Cosmetic Production</li>
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
