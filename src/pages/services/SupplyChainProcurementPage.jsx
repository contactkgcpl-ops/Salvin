import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SupplyChainProcurementPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_supply_chain.jpg";

  const subServices = [
    {
      title: "Raw Material Sourcing",
      image: "/assets/core/services/service_supply_chain.jpg",
      description: "Sourcing agricultural crops, food ingredients, and raw chemicals from certified suppliers with strict quality and moisture testing."
    },
    {
      title: "Vendor Development",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Rigorous global vendor evaluation and OEM development for specialized mechanical, electrical, and pneumatic sub-assemblies."
    },
    {
      title: "Equipment Procurement",
      image: "/assets/core/services/service_machinery.jpg",
      description: "End-to-end procurement management, Factory Acceptance Testing (FAT), export packing, customs clearance, and transit insurance."
    },
    {
      title: "Packaging Material Coordination",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Sourcing high-barrier laminate film rolls, multi-layer pouches, PET/glass bottles, caps, and corrugated master cartons."
    },
    {
      title: "Logistics & Material Flow Planning",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Cold chain logistics setup, warehouse inventory management (ERP/WMS), dock loading flow, and distribution strategy."
    }
  ];

  const faqs = [
    {
      question: "How does Salvin ensure raw material quality standards during sourcing?",
      answer: "We perform rigorous laboratory audits, moisture testing, pesticide/contaminant analysis, and vendor facility inspections before finalizing raw material supply contracts."
    },
    {
      question: "Do you handle international customs clearance and shipping logistics for imported machinery?",
      answer: "Yes, our procurement division manages complete shipping logistics, port clearance, customs documentation, transit insurance, and factory door delivery."
    },
    {
      question: "Can Salvin assist in sourcing compatible laminate films for high-speed pouch packaging?",
      answer: "Absolutely. We source high-barrier laminate films, multi-layer barrier pouches, PET bottles, and caps tested specifically for seamless performance on automated packaging machines."
    },
    {
      question: "What inventory management systems do you integrate for warehouse logistics?",
      answer: "We design warehouse layouts optimized for ERP and WMS (Warehouse Management System) barcode tracking, FEFO/FIFO inventory flow, and automated pallet storage."
    },
    {
      question: "What commercial benefits do clients gain from Salvin’s vendor network?",
      answer: "Clients leverage our 25+ years of industry procurement volume to negotiate competitive OEM pricing, accelerated delivery schedules, and extended equipment warranties."
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
          <span className="tag mb-4">SALVIN SUPPLY CHAIN &amp; PROCUREMENT</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Supply Chain &amp; Procurement Services
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Strategic raw material sourcing, global vendor development, machinery procurement management, and warehouse logistics planning.
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
            Supply Chain &amp; <span>Procurement Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries leverages <span className="font-bold">25+ years of industrial supply chain expertise</span> to secure top-quality raw materials and equipment for manufacturing plants.
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
              Strategic Industrial Procurement &amp; <span>Logistics Management</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Optimizing raw material supply chains, vendor development, machinery shipping logistics, and warehouse inventory systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Trusted Industrial Supply Chain <span>Partners in India</span>
            </h2>
            <p className="mb-4">
              A resilient supply chain is critical to continuous factory operation. At Salvin Industries, we assist industrial clients in building transparent, cost-effective procurement networks for raw agricultural commodities, processing chemicals, auxiliary equipment, and barrier packaging materials.
            </p>
            <p>
              We eliminate supply bottlenecks, inspect vendor component quality, manage international customs clearance, and optimize warehouse logistics.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Supply Chain Services</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Strategic Raw Material Sourcing</h3>
                <p>
                  Identifying certified agricultural, chemical, and food ingredient suppliers to ensure consistent quality, price stability, and sustainable supply chains.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Global Vendor &amp; OEM Development</h3>
                <p>
                  Evaluating machinery sub-assembly manufacturers, inspecting component quality, negotiating commercial contract terms, and enforcing strict quality acceptance criteria.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Equipment Procurement Management</h3>
                <p>
                  Turnkey procurement management including Factory Acceptance Testing (FAT), customs clearance support, international shipping logistics, and transit insurance.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Packaging Material Coordination</h3>
                <p>
                  Sourcing multi-layer laminate films, barrier pouches, PET/glass bottles, caps, master corrugated boxes, and eco-friendly packaging alternatives.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Logistics &amp; Material Flow Planning</h3>
                <p>
                  Cold chain logistics integration, warehouse layout optimization (FEFO/FIFO), ERP inventory control integration, and outbound distribution planning.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose <span>Salvin Procurement?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Proven Global Vendor Network</h3>
                <p>Established relationships with vetted OEMs and certified raw material suppliers across Asia, Europe, and America.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Cost Reduction &amp; Price Negotiation</h3>
                <p>Leverage our high-volume procurement scale to secure preferential commercial pricing and extended warranties.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Full Logistics &amp; Customs Management</h3>
                <p>Hassle-free shipping, port handling, customs clearance, and transit insurance from factory to site.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Sectors &amp; <span>Industries Served</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Agricultural Commodities &amp; Spice Sourcing</li>
              <li>Food Ingredients &amp; Flavor Procurement</li>
              <li>Industrial Packaging Films &amp; Bottles</li>
              <li>Processing Machinery &amp; Utility Equipment</li>
              <li>Cold Chain &amp; Warehouse Distribution</li>
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
