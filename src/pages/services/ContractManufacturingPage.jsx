import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ContractManufacturingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/services/service_contract_manufacturing.jpg";

  const subServices = [
    {
      title: "Third-Party Manufacturing",
      image: "/assets/core/services/service_contract_manufacturing.jpg",
      description: "Private label co-manufacturing solutions in hygienic processing suites for food, spices, condiments, and liquid formulations under strict secrecy."
    },
    {
      title: "Contract Packaging",
      image: "/assets/core/services/service_processing_packaging.jpg",
      description: "Flexible co-packing runs for multi-track pouch packaging, nitrogen gas flushing, vacuum sealing, jar filling, and shrink sleeve labeling."
    },
    {
      title: "Pouch / Sachet / Jar / Bottle Packaging",
      image: "/assets/core/services/service_machinery.jpg",
      description: "Versatile packaging formats: zipper pouches, pillow packs, sachets, glass/PET bottles, tin cans, master corrugated cartons, and display trays."
    },
    {
      title: "Product Scale-up",
      image: "/assets/core/services/service_consultancy.jpg",
      description: "Bridging the gap between laboratory benchtop recipes and commercial mass production, ensuring taste, texture, and shelf-life consistency."
    },
    {
      title: "Commercial Production Support",
      image: "/assets/core/services/service_turnkey.jpg",
      description: "Batch production documentation, FSSAI regulatory compliance labels, barcode printing, lab shelf-life testing, and export packaging."
    }
  ];

  const faqs = [
    {
      question: "Do you sign Non-Disclosure Agreements (NDA) to protect proprietary recipes?",
      answer: "Yes, we sign comprehensive legal NDAs prior to discussing recipe formulations, process parameters, or private label manufacturing contracts."
    },
    {
      question: "What minimum order quantities (MOQ) do you accept for contract packaging?",
      answer: "We offer flexible contract packaging batch sizes accommodating both pilot commercial launches and high-volume commercial production runs."
    },
    {
      question: "Which food safety certifications do your co-manufacturing facilities possess?",
      answer: "Our facilities hold FSSAI licenses, ISO 22000 certifications, HACCP food safety compliance, and cGMP sanitary processing suites."
    },
    {
      question: "Can Salvin assist in acquiring packaging materials for private label brands?",
      answer: "Yes, we provide turnkey packaging material procurement including multi-layer barrier laminate films, printed pouches, PET/glass bottles, and master cartons."
    },
    {
      question: "What testing and batch quality control reports are provided?",
      answer: "Every production lot undergoes moisture testing, microbiological analysis, fill-weight verification, and complete Certificate of Analysis (COA) documentation."
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
          <span className="tag mb-4">SALVIN CONTRACT MANUFACTURING</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Contract Manufacturing &amp; Packaging Services
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl drop-shadow-lg leading-relaxed mb-8">
            Third-party private label co-manufacturing, flexible contract packaging, multi-format pouch/bottle/jar packing, scale-up support, and regulatory compliance.
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
            Contract Manufacturing &amp; <span>Packaging Verticals</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Salvin Industries offers <span className="font-bold">25+ years of co-manufacturing expertise</span>, delivering private label packaging and commercial scale-up for top food brands.
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
              Complete Third-Party Private <span>Label Co-Manufacturing</span>
            </h2>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto">
              Hygienic processing suites, high-speed multi-format packaging lines, strict NDA secrecy, and complete regulatory compliance.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Premier Contract Manufacturing <span>Partner in India</span>
            </h2>
            <p className="mb-4">
              Salvin Industries provides turnkey third-party co-manufacturing and contract packaging services for food brands, FMCG companies, and retail startups. We operate state-of-the-art cGMP processing environments equipped for powder blending, liquid bottling, sauce preparation, and snack packaging.
            </p>
            <p>
              We handle recipe scaling, raw material procurement, high-speed automated packaging, laboratory quality testing, and batch coding under complete brand confidentiality.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Detailed Breakdown of Our <span>Co-Manufacturing Deliverables</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">1. Third-Party Private Label Manufacturing</h3>
                <p>
                  Turnkey co-manufacturing solutions in hygienic processing suites for food, spices, condiments, and liquid formulations under strict non-disclosure secrecy agreements.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">2. Custom Contract Packaging Services</h3>
                <p>
                  Flexible co-packing runs for multi-track pouch packaging, nitrogen gas flushing, vacuum sealing, jar filling, and shrink sleeve labeling across powders, liquids, and solid food products.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">3. Versatile Packaging Formats</h3>
                <p>
                  Support for standalone zipper pouches, pillow packs, single-serve sachets, glass/PET bottles, tin cans, master corrugated cartons, and promotional retail display boxes.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">4. Lab-to-Market Product Scale-Up</h3>
                <p>
                  Assisting food scientists and entrepreneurs in taking benchtop recipes to commercial pilot trials and high-throughput continuous production lines.
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">5. Commercial Production &amp; Quality Support</h3>
                <p>
                  Providing complete batch production records, FSSAI regulatory labels, barcode printing, inkjet batch coding, laboratory shelf-life testing, and export-ready packaging.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Why Choose Salvin for <span>Contract Manufacturing?</span></h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Strict Recipe Confidentiality (NDA)</h3>
                <p>100% legal secrecy protection for your brand recipes, ingredient ratios, and proprietary formulations.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">FSSAI &amp; ISO Certified Facilities</h3>
                <p>Hygienic processing suites conforming strictly to national and international food safety benchmarks.</p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-800 mb-1">Flexible Batch Run Volumes</h3>
                <p>Accommodating both pilot market launches and large-scale commercial retail production.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Contract Packaging Products <span>We Handle</span></h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Spices, Seasoning &amp; Food Powders</li>
              <li>Snacks, Namkeen &amp; Dry Fruits</li>
              <li>Fruit Juices, Syrups &amp; Beverages</li>
              <li>Ketchup, Sauces, Mayonnaise &amp; Pastes</li>
              <li>Nutraceutical Powders &amp; Health Supplements</li>
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
