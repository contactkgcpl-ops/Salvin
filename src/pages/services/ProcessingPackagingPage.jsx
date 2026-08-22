import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProcessingPackagingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_processing_packaging.jpg";

  const subServices = [
    {
      title: "Powder Processing",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Ultra-fine pulverizing, ribbon blending, sifting, pneumatic dust collection, and auger pouch packaging lines for spices, flour, and powders."
    },
    {
      title: "Liquid Processing",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Aseptic liquid preparation, homogenizers, pasteurizers, de-aerators, CIP washing systems, and hot-fill bottling machinery."
    },
    {
      title: "Granule Processing",
      image: "/assets/core/services/service_plant_design.jpg",
      description: "Continuous batch fryers, roasters, seasoning drums, cooling conveyors, and multi-head weighers for snacks, nuts, and namkeen."
    },
    {
      title: "Filling & Packaging",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "High-speed multi-track pouch packaging, nitrogen gas flushing, vacuum sealing, PET/glass bottle filling, and jar filling."
    },
    {
      title: "Automated Production Lines",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Industry 4.0 automated lines with SCADA monitoring, automatic weight checking, vision inspection, pick-and-place robotics, and case packing."
    }
  ];

  const faqs = [
    {
      question: "How does nitrogen flushing in packaging machines extend food shelf-life?",
      answer: "Nitrogen gas flushing replaces oxygen inside sealed pouches, preventing lipid oxidation, moisture degradation, and stale odors in snacks, spices, and fried foods."
    },
    {
      question: "What filling speeds can Salvin liquid bottling lines achieve?",
      answer: "Our automated liquid bottling lines achieve speeds from 30 up to 150 bottles per minute depending on container volume and liquid viscosity."
    },
    {
      question: "Can your powder processing equipment handle heat-sensitive spices like chili and turmeric?",
      answer: "Yes, we integrate chilled water jacketed grinding chambers and pneumatic conveying systems to prevent thermal degradation of essential oils and colors."
    },
    {
      question: "What packaging materials are compatible with your vertical form-fill-seal (VFFS) machines?",
      answer: "Our machines process heat-sealable laminated films, PET/Foil/PE, BOPP film, metalized film, and biodegradable packaging films."
    },
    {
      question: "Do you supply Clean-In-Place (CIP) systems for liquid processing lines?",
      answer: "Yes, we supply fully automated multi-tank CIP systems for hygienic washing of tanks, pumps, and piping without disassembling equipment."
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
          <span className="tag mb-4">SALVIN PROCESSING &amp; PACKAGING</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Processing &amp; Packaging Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Custom engineering for powder processing, liquid bottling lines, granule packing, aseptic filling, and Industry 4.0 continuous production.
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
            Processing &amp; Packaging <span>Core Verticals</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries offers over <span className="font-bold">25+ years of specialized packaging expertise</span>, delivering high-speed filling lines and powder/liquid processing systems.
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
              Advanced Food Processing &amp; <span>Packaging Automation</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Automated grinding, liquid preparation, multi-track filling, nitrogen flushing, and high-speed bottling solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Trusted Food Processing &amp; <span>Packaging Specialists</span>
            </h2>
            <p className="mb-4">
              Salvin Industries delivers advanced processing and packaging systems for powders, liquids, pastes, and solid food products. Our continuous lines are engineered to preserve flavor, extend product shelf-life, and maximize packaging output.
            </p>
            <p>
              We integrate precision dosing hoppers, servo-driven augers, nitrogen flushing modules, and automated case packers to deliver zero-leakage, high-precision packaging operations.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Processing &amp; Packaging Systems</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Powder Processing Systems</h3>
                <p>
                  Ultra-fine pulverizers, ribbon blenders, sifting machines, pneumatic dust collectors, and automatic auger pouch packaging lines for spices, flour, and agricultural powders.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Liquid &amp; Beverage Processing</h3>
                <p>
                  Aseptic liquid preparation vessels, pasteurizers, homogenizers, CIP washing systems, and high-speed hot-fill bottle rinsing, filling, and capping machinery.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Granule &amp; Solid Food Processing</h3>
                <p>
                  Continuous batch fryers, roasters, seasoning drums, cooling conveyors, and multi-head weighers for uniform portioning of snacks, nuts, and namkeen.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. High-Speed Filling &amp; Sealing</h3>
                <p>
                  Multi-track VFFS pouch packaging, nitrogen gas flushing, vacuum sealing, PET/glass bottle filling, jar filling, and automated induction capping.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Industry 4.0 Automated Production Lines</h3>
                <p>
                  IoT-enabled SCADA monitoring, automatic weight checkers, vision inspection systems, pick-and-place robotic arms, and end-of-line case packing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose <span>Salvin Processing &amp; Packaging?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Extended Product Shelf-Life</h3>
                <p>Precision nitrogen gas flushing and aseptic liquid handling ensure extended shelf-life without chemical preservatives.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">High Filling Accuracy</h3>
                <p>Servo-driven dosing mechanisms maintain fill weight accuracy within ±0.5% tolerance.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">FSSAI &amp; cGMP Hygiene Compliance</h3>
                <p>All contact surfaces are built with SS316L stainless steel meeting strict food safety benchmarks.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Applications &amp; <span>Industries</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices, Masala &amp; Powder Packaging</li>
              <li>Snacks, Namkeen &amp; Dry Fruit Packing</li>
              <li>Fruit Juices, Bottled Water &amp; Beverage Lines</li>
              <li>Tomato Ketchup, Sauces &amp; Paste Bottling</li>
              <li>Pharma Syrups &amp; Powder Sachet Packaging</li>
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
