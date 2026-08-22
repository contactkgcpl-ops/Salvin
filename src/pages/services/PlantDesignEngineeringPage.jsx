import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function PlantDesignEngineeringPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_plant_design.jpg";

  const subServices = [
    {
      title: "Plant Layout & Process Flow",
      image: "/assets/core/services/service_plant_design.jpg",
      description: "2D and 3D CAD blueprint drafting for space optimization, operator safety, cleanroom zoning, and zero cross-contamination material pathways."
    },
    {
      title: "Utility Planning",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Sanitary SS316L piping design for steam boilers, chilled water circuits, compressed air lines, electrical load distribution, and CIP circuits."
    },
    {
      title: "Production Line Design",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Custom engineering of continuous processing lines, multi-tier conveyorships, raw material handling elevators, dosing hoppers, and PLC automation."
    },
    {
      title: "Material Flow Planning",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Streamlined unidirection personnel and material movement pathways, warehouse staging docks, waste chutes, and cGMP airlock entry systems."
    },
    {
      title: "Engineering & Documentation",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Piping & Instrumentation Diagrams (P&ID), electrical single-line diagrams (SLD), equipment datasheets, and civil load structural specifications."
    }
  ];

  const faqs = [
    {
      question: "Do you provide 3D BIM models of the factory layout before construction?",
      answer: "Yes, we create complete 3D BIM models and 2D CAD floor plans allowing clients to visualize machinery positioning, operator pathways, and utility header routing."
    },
    {
      question: "How do your designs prevent cross-contamination in food and pharma plants?",
      answer: "We incorporate unidirectional material-men movement, pressure-differenced cleanrooms, airlock entry lobbies, and distinct hygiene zoning (high care vs. low care areas)."
    },
    {
      question: "What utility engineering plans do you deliver?",
      answer: "We design complete utility distribution headers including steam boiler piping, chilled water lines, compressed air headers, CIP sanitation circuits, and electrical load distribution."
    },
    {
      question: "Can your team work with our civil architects and contractors?",
      answer: "Yes, we collaborate closely with civil architects, floor epoxy specialists, and HVAC engineers, providing them with load calculations, floor drain positions, and ceiling height specs."
    },
    {
      question: "What engineering documentation is provided for regulatory approval?",
      answer: "We supply P&ID diagrams, structural load specifications, electrical SLD drawings, environmental compliance layouts, and equipment datasheet packages."
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
          <span className="tag mb-4">SALVIN PLANT ENGINEERING</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Plant Design &amp; Engineering Services
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Precision 3D CAD/BIM layout design, production line engineering, sanitary utility routing, and material flow planning for modern manufacturing facilities.
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
            Plant Design &amp; <span>Engineering Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries brings <span className="font-bold">25+ years of engineering mastery</span> in designing world-class processing plants, 3D CAD blueprints, and utility architectures.
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
              Complete Plant Layout &amp; <span>Engineering Solutions</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Custom CAD blueprints, utility routing, and process flow engineering to transform raw space into high-output, compliant manufacturing plants.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Expert Plant Design <span>Engineers in India</span>
            </h2>
            <p className="mb-4">
              A well-engineered plant layout is the foundation of any successful manufacturing business. At Salvin Industries, our multidisciplinary team of mechanical, civil, electrical, and process engineers designs state-of-the-art factory layouts that maximize production throughput while minimizing operational footprint.
            </p>
            <p>
              We ensure every square meter of your factory floor is utilized efficiently, adhering strictly to global sanitary engineering standards, cGMP guidelines, and FSSAI food safety regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Engineering Deliverables</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Plant Layout &amp; Process Flow Design</h3>
                <p>
                  We draft 2D and 3D CAD/BIM blueprints establishing logical equipment placement, raw material receipt bays, processing halls, and finished product docks. Our layouts incorporate hygiene zoning to prevent contamination risks.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Utility &amp; Piping Engineering</h3>
                <p>
                  We design sanitary SS316L utility distribution headers for steam, chilled water, compressed air, nitrogen gas flushing, electrical panels, and automated Clean-In-Place (CIP) sanitation systems.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Automated Production Line Design</h3>
                <p>
                  Custom engineering of continuous processing lines, multi-tier conveyorships, raw material dosing hoppers, and PLC/SCADA control frameworks for seamless line synchronization.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Material &amp; Logistics Flow Planning</h3>
                <p>
                  Designing unidirectional movement pathways for personnel and materials, pallet staging docks, waste management channels, and cGMP airlock entry systems.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Comprehensive Engineering Documentation</h3>
                <p>
                  Delivering Piping &amp; Instrumentation Diagrams (P&amp;ID), electrical single-line diagrams (SLD), equipment datasheets, and civil floor load specifications required for regulatory submissions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Why Salvin is the Leader in <span>Plant Design &amp; Engineering?</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">25+ Years of Engineering Mastery</h3>
                <p>Over two decades of experience designing high-performance processing plants for top food, pharma, and chemical brands.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3D CAD &amp; BIM Visualization</h3>
                <p>Full 3D digital twin models allowing clients to review equipment placement and utility routing prior to civil construction.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Hygienic Cleanroom Standards</h3>
                <p>Expert cleanroom zoning (Class 100k / 10k), air pressure differential planning, and cGMP sanitation compliance.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Industries <span>Served</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices, Powders &amp; Seasoning Plants</li>
              <li>Snacks, Namkeen &amp; Bakery Factories</li>
              <li>Beverages, Sauces &amp; Liquid Bottling Plants</li>
              <li>Pharma Formulations &amp; Cleanrooms</li>
              <li>Specialty Chemical &amp; Cosmetic Facilities</li>
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
