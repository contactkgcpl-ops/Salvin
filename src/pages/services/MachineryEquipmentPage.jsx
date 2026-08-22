import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MachineryEquipmentPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_machinery.jpg";

  const subServices = [
    {
      title: "Machinery Selection",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Technical selection matching material metallurgy (SS304/SS316L), drive powers, and thermal capacity to your product viscosity and yield targets."
    },
    {
      title: "Processing Machinery",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Custom fabrication of pulverizers, ribbon blenders, high-shear homogenizers, jacketed cooking kettles, pasteurizers, spray dryers, and storage vats."
    },
    {
      title: "Filling & Packaging Machinery",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Automated multi-track pouch packaging, servo auger fillers, liquid bottling lines, multi-head weighers, flow-wrappers, and vacuum sealers."
    },
    {
      title: "Complete Production Lines",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Synchronized processing and packaging production modules engineered for continuous, automated operation with minimal manual intervention."
    },
    {
      title: "Equipment Integration & Installation",
      image: "/assets/core/services/service_plant_design.jpg",
      description: "On-site mechanical installation, laser alignment, utility header piping hookups, PLC/SCADA wiring, and sensor calibration."
    }
  ];

  const faqs = [
    {
      question: "What grades of stainless steel do you use for processing machinery?",
      answer: "We fabricate machinery using high-grade SS304 and SS316L stainless steel with cGMP sanitary surface polishes (Ra < 0.4 µm) to comply with food and pharmaceutical hygiene codes."
    },
    {
      question: "Can your packaging machinery handle liquid, powder, and granule products?",
      answer: "Yes, we manufacture dedicated filling and packaging systems for liquids (piston/rotary fillers), powders (servo auger fillers), and granules (multi-head weighers)."
    },
    {
      question: "Do you supply PLC and SCADA automated control panels?",
      answer: "All our automated machinery features Siemens / Schneider PLC controllers, intuitive touchscreen HMIs, remote telemetry capabilities, and safety interlocks."
    },
    {
      question: "What warranty and spare parts support is provided?",
      answer: "We offer a 12-month comprehensive warranty on all machinery, supported by readily available spare parts and dedicated 24/7 technical field engineers."
    },
    {
      question: "Can Salvin customize machinery dimensions to fit our existing plant ceiling height?",
      answer: "Yes, our in-house design engineering team customizes equipment footprints, elevator heights, and hopper capacities to fit your exact building dimensions."
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
          <span className="tag mb-4">SALVIN MACHINERY &amp; EQUIPMENT</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Machinery &amp; Equipment Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            High-performance stainless steel processing lines, automated filling and packaging machinery, complete line integration, and precision installation.
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
            Industrial Machinery &amp; <span>Equipment Verticals</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries is a leading manufacturer of <span className="font-bold">SS304/SS316L food &amp; industrial machinery</span>, providing continuous processing lines and packaging automation.
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
              Advanced Industrial Processing &amp; <span>Packaging Machinery</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Precision-engineered processing tanks, pulverizers, liquid fillers, multi-track pouch packaging lines, and automated conveyors.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Leading Food &amp; Industrial <span>Machinery Manufacturer</span>
            </h2>
            <p className="mb-4">
              Salvin Industries designs, fabricates, and installs industrial processing and packaging machinery built for 24/7 continuous duty. From micro-pulverizers for spice grinding to multi-head weighers for snack food packing, our machinery is trusted by leading manufacturers across India and 30+ nations.
            </p>
            <p>
              We combine high-grade SS304/SS316L stainless steel metallurgy, orbital welding, and PLC automation to build equipment that delivers high throughput with minimal maintenance.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Machinery Capabilities</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Strategic Machinery Selection</h3>
                <p>
                  Unbiased equipment selection matching drive powers, thermal requirements, and metallurgy (SS304 / SS316L / Hastelloy) to your product viscosity and target output.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Hygienic Processing Machinery</h3>
                <p>
                  Fabrication of pulverizers, ribbon blenders, high-shear homogenizers, jacketed cooking kettles, pasteurizers, spray dryers, and sanitary storage tanks.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Automated Filling &amp; Packaging Machinery</h3>
                <p>
                  Multi-track VFFS pouch packaging machines, servo auger fillers, liquid bottling lines, multi-head weighers, flow-wrappers, and vacuum sealers.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Complete Production Line Integration</h3>
                <p>
                  Connecting raw material cleaning, processing, conveyorships, inspection, and automated case packing into a single continuous automated operation.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Equipment Integration &amp; Installation</h3>
                <p>
                  On-site mechanical installation, laser alignment, utility header piping hookups, PLC/SCADA control wiring, and sensor calibration.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose <span>Salvin Machinery?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">SS304 &amp; SS316L Food Grade Fabrication</h3>
                <p>100% food-grade contact surfaces with cGMP sanitary polishes to prevent bacterial harborages.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">PLC &amp; HMI Automation</h3>
                <p>Intuitive Siemens/Schneider touchscreen interfaces with recipe storage and fault diagnostic logging.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Ready Spare Parts &amp; 24/7 Field Support</h3>
                <p>Dedicated technical support team offering fast field response and genuine replacement spares.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Machinery Categories <span>We Supply</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices Pulverizing, Grinding &amp; Blending Lines</li>
              <li>Snack Frying, Seasoning &amp; Pouch Packaging Lines</li>
              <li>Beverage, Juice &amp; Sauce Bottling Lines</li>
              <li>Pharma Granulation &amp; Liquid Filling Machinery</li>
              <li>Chemical Mixing &amp; Liquid Packaging Systems</li>
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
