import React from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaDraftingCompass,
  FaPencilRuler,
  FaHandshake,
  FaTools,
  FaCogs,
  FaTruck,
  FaChartLine,
  FaBoxOpen,
  FaArrowRight
} from "react-icons/fa";

const servicesDataMap = {
  "industrial-consultancy-services": {
    title: "Industrial Consultancy Services",
    subtitle: "Strategic Project Feasibility, Process Engineering & Plant Architecture Consultancy",
    image: "/assets/core/services/service_consultancy.jpg",
    seoDescription: "Leading industrial & food plant consultancy services in India. Expert advisory on project feasibility, DPR preparation, plant layout, capacity planning, and cost investment optimization.",
    icon: <FaDraftingCompass className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Project Feasibility & Planning",
      "Product & Process Consultancy",
      "Plant Concept & Strategy",
      "Capacity Planning",
      "Cost & Investment Planning"
    ],
    details: [
      {
        heading: "1. Project Feasibility & DPR Planning",
        text: "Comprehensive techno-economic feasibility studies, Detailed Project Reports (DPR), market demand assessment, raw material availability, capital expenditure (CAPEX), and operational expenditure (OPEX) calculations."
      },
      {
        heading: "2. Product & Process Consultancy",
        text: "Specialized formulation advisory, process flow design, yield optimization, shelf-life enhancement, and compliance with national and international food safety benchmarks (FSSAI, US-FDA, ISO 22000)."
      },
      {
        heading: "3. Plant Concept & Strategic Layout",
        text: "Architectural concept planning, cleanroom zoning, material-men flow separation, hazardous area classification, and energy-efficient utility placement for zero-contamination operations."
      },
      {
        heading: "4. Capacity & Machinery Selection Advisory",
        text: "Unbiased machinery selection advisory, throughput balancing, bottleneck identification, vendor evaluation, and technology selection tailored to market scale and growth projection."
      },
      {
        heading: "5. Cost & Capital Investment Optimization",
        text: "Strategic advice on plant scalability, phased capital deployment, ROI forecasting, energy heat recovery systems, and lifecycle maintenance cost reduction."
      }
    ]
  },
  "plant-design-engineering-services": {
    title: "Plant Design & Engineering Services",
    subtitle: "Precision 3D CAD/BIM Layout Design, Production Line Engineering & Utility Planning",
    image: "/assets/core/services/service_plant_design.jpg",
    seoDescription: "Complete plant design and process engineering services. 3D CAD layout planning, utility integration, production line engineering, material flow optimization, and technical documentation.",
    icon: <FaPencilRuler className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Plant Layout & Process Flow",
      "Utility Planning",
      "Production Line Design",
      "Material Flow Planning",
      "Engineering & Documentation"
    ],
    details: [
      {
        heading: "1. Plant Layout & Process Flow Design",
        text: "Advanced 2D/3D CAD blueprint drafting for optimal space utilization, ergonomic operator movement, hygiene zoning, and seamless raw material to finished product movement."
      },
      {
        heading: "2. Utility & Piping Engineering",
        text: "Detailed utility routing plans for steam boilers, chilled water circuits, compressed air lines, CIP systems, electrical load calculations, and SS316L sanitary piping design."
      },
      {
        heading: "3. Automated Production Line Design",
        text: "Custom engineering of continuous processing lines, multi-tier conveyorships, raw material handling systems, batching systems, and PLC/SCADA automation framework."
      },
      {
        heading: "4. Material & Logistics Flow Optimization",
        text: "Internal logistics planning, dock management, palletization flow, waste management channels, and compliance with WHO-GMP and cGMP cleanroom engineering standards."
      },
      {
        heading: "5. Comprehensive Engineering Documentation",
        text: "Complete P&ID diagrams, equipment datasheets, utility consumption matrices, structural load specifications, and regulatory submission documentation."
      }
    ]
  },
  "turnkey-project-execution-services": {
    title: "Turnkey Project Execution Services",
    subtitle: "End-to-End Greenfield & Brownfield Plant Setup, Installation & Commissioning",
    image: "/assets/core/services/service_turnkey.jpg",
    seoDescription: "Full turnkey food & industrial project execution services. Greenfield & brownfield plant setup, civil engineering coordination, machinery installation, project management & commissioning.",
    icon: <FaHandshake className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Greenfield & Brownfield Projects",
      "Civil & Infrastructure Coordination",
      "Plant Installation",
      "Project Management",
      "Commissioning & Handover"
    ],
    details: [
      {
        heading: "1. Greenfield & Brownfield Plant Execution",
        text: "Complete end-to-end execution of new manufacturing units (Greenfield) or expansion/modernization of operating facilities (Brownfield) with zero production disruption."
      },
      {
        heading: "2. Civil & Infrastructure Coordination",
        text: "On-site civil engineering oversight, floor load capacity verification, epoxy flooring standards, drainage channels, HVAC cleanroom integration, and structural stability."
      },
      {
        heading: "3. Precision Plant Installation",
        text: "Rigorous mechanical positioning, optical alignment, sanitary pipe welding (orbital TIG), power wiring, utility connections, and safety interlock installation."
      },
      {
        heading: "4. Single-Point Project Management",
        text: "Dedicated project manager oversight, Gantt chart milestone tracking, procurement expediting, quality audits, and transparent client reporting."
      },
      {
        heading: "5. Commissioning, Validation & Handover",
        text: "Water trials, product validation runs, IQ/OQ/PQ documentation, operator training, throughput verification, and complete operational handover."
      }
    ]
  },
  "machinery-equipment-solutions": {
    title: "Machinery & Equipment Solutions",
    subtitle: "High-Performance Stainless Steel Processing Lines & Automated Packaging Machinery",
    image: "/assets/core/services/service_machinery.jpg",
    seoDescription: "Industrial processing machinery and automated packaging equipment solutions. SS304/SS316L processing tanks, filling lines, automated conveyors, and custom equipment integration.",
    icon: <FaTools className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Machinery Selection",
      "Processing Machinery",
      "Filling & Packaging Machinery",
      "Complete Production Lines",
      "Equipment Integration & Installation"
    ],
    details: [
      {
        heading: "1. Strategic Machinery Selection",
        text: "Selecting the ideal equipment specification based on product viscosity, particle size, thermal requirements, production volume, and hygienic standards."
      },
      {
        heading: "2. Hygienic Processing Machinery",
        text: "Fabrication and supply of stainless steel mixing vats, homogenizers, pasteurizers, pulverizers, jacketed cookers, extractors, and spray drying towers."
      },
      {
        heading: "3. Automated Filling & Packaging Machinery",
        text: "Piston fillers, rotary bottle rinsers, cappers, pouch packaging machines, flow-wrappers, linear weighers, vacuum sealers, and automated cartoning units."
      },
      {
        heading: "4. Integrated Complete Production Lines",
        text: "Synchronized processing and packaging modules engineered for automated continuous operation with minimal human contact."
      },
      {
        heading: "5. Retrofit & Line Integration",
        text: "Upgrading existing processing lines with modern PLC controls, servo drives, sensors, inspection systems, and automated sorting mechanisms."
      }
    ]
  },
  "processing-packaging-solutions": {
    title: "Processing & Packaging Solutions",
    subtitle: "Custom Engineering for Powders, Liquids, Granules & Automated Packaging Systems",
    image: "/assets/core/services/service_processing_packaging.jpg",
    seoDescription: "Advanced food processing and automated packaging solutions. Specialized lines for powder grinding, liquid bottling, granule packing, aseptic processing & packaging systems.",
    icon: <FaCogs className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Powder Processing",
      "Liquid Processing",
      "Granule Processing",
      "Filling & Packaging",
      "Automated Production Lines"
    ],
    details: [
      {
        heading: "1. Powder Processing Systems",
        text: "Ultra-fine pulverizing, ribbon blending, sifting, pneumatic conveying, dust collection, and automatic auger pouch packaging lines for spices, flour, and powders."
      },
      {
        heading: "2. Liquid & Beverage Processing",
        text: "Aseptic liquid preparation, pasteurization, de-aeration, syrup blending, CIP washing, hot-fill liquid bottling, and shrink labeling systems."
      },
      {
        heading: "3. Granule & Solid Food Processing",
        text: "Roasting, seasoning, batch frying, extruded snack lines, multi-head weighers, and pouch sealing systems for nuts, namkeen, and grains."
      },
      {
        heading: "4. High-Speed Filling & Sealing",
        text: "Rotary and linear filling systems for pouches, sachets, glass jars, PET bottles, tins, and containers with gas flushing capabilities."
      },
      {
        heading: "5. Industry 4.0 Automated Lines",
        text: "IoT-enabled monitoring, automatic weight checking, vision inspection, pick-and-place robotic arms, and end-of-line case packing automation."
      }
    ]
  },
  "supply-chain-procurement-services": {
    title: "Supply Chain & Procurement Services",
    subtitle: "Strategic Sourcing, Equipment Procurement, Logistics & Material Flow Optimization",
    image: "/assets/core/services/service_supply_chain.jpg",
    seoDescription: "Industrial supply chain and procurement advisory services. Raw material sourcing, vendor evaluation, equipment procurement, packaging material coordination, and logistics planning.",
    icon: <FaTruck className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Raw Material Sourcing",
      "Vendor Development",
      "Equipment Procurement",
      "Packaging Material Coordination",
      "Logistics & Material Flow Planning"
    ],
    details: [
      {
        heading: "1. Strategic Raw Material Sourcing",
        text: "Identifying certified agricultural, chemical, and food ingredient suppliers to ensure consistent quality, price stability, and sustainable supply chains."
      },
      {
        heading: "2. Global Vendor & OEM Development",
        text: "Evaluating machinery manufacturers, inspecting component quality, negotiating commercial terms, and enforcing strict quality acceptance criteria."
      },
      {
        heading: "3. Equipment Procurement Management",
        text: "Turnkey procurement management including factory acceptance tests (FAT), customs clearance support, shipping logistics, and transit insurance."
      },
      {
        heading: "4. Packaging Material Coordination",
        text: "Sourcing multi-layer laminate pouches, barrier films, glass/PET bottles, caps, corrugated master cartons, and eco-friendly packaging alternatives."
      },
      {
        heading: "5. Inbound/Outbound Logistics Planning",
        text: "Cold chain logistics setup, warehouse layout optimization, ERP inventory management integration, and distribution channel planning."
      }
    ]
  },
  "production-process-optimization": {
    title: "Production & Process Optimization Services",
    subtitle: "Maximized Yield, Reduced Downtime, Energy Recovery & Automation Efficiency",
    image: "/assets/core/services/service_optimization.jpg",
    seoDescription: "Industrial production line optimization and process improvement services. Capacity enhancement, OEE improvement, energy audit, waste reduction, and line automation.",
    icon: <FaChartLine className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Production Line Optimization",
      "Process Improvement",
      "Capacity Enhancement",
      "Automation & Efficiency",
      "Cost Optimization"
    ],
    details: [
      {
        heading: "1. Overall Equipment Effectiveness (OEE) Audits",
        text: "In-depth diagnostic audits of active production lines to identify bottlenecks, unplanned downtime causes, speed losses, and quality reject rates."
      },
      {
        heading: "2. Process Improvement & Yield Maximization",
        text: "Optimizing thermal cycles, mixing speeds, batching times, and recovery rates to minimize raw material wastage and maximize finished product yield."
      },
      {
        heading: "3. Capacity Enhancement & Line Debottlenecking",
        text: "Re-engineering workflow synchronization to increase plant output capacity by up to 45% without major capital expenditure."
      },
      {
        heading: "4. Automation & Smart Sensor Upgrade",
        text: "Integrating smart sensors, SCADA dashboards, automatic batch weighers, and PLC logic to eliminate manual operational errors."
      },
      {
        heading: "5. Energy & Utility Cost Reduction",
        text: "Auditing boiler efficiency, condensate recovery, refrigeration loads, power factor correction, and heat exchanger insulation to lower operational costs."
      }
    ]
  },
  "contract-manufacturing-packaging": {
    title: "Contract Manufacturing & Packaging Services",
    subtitle: "Third-Party Private Label Manufacturing, Commercial Scale-Up & Packaging Support",
    image: "/assets/core/services/service_contract_manufacturing.jpg",
    seoDescription: "Contract manufacturing and private label packaging services. Third-party food and industrial production, pouch/jar/bottle packaging, commercial scale-up, and co-packing support.",
    icon: <FaBoxOpen className="w-8 h-8 text-[#ff7a00]" />,
    bullets: [
      "Third-Party Manufacturing",
      "Contract Packaging",
      "Pouch / Sachet / Jar / Bottle Packaging",
      "Product Scale-up",
      "Commercial Production Support"
    ],
    details: [
      {
        heading: "1. Third-Party Private Label Manufacturing",
        text: "Turnkey co-manufacturing solutions for established brands and startups looking to produce high-quality processed foods under strict quality secrecy agreements."
      },
      {
        heading: "2. Custom Contract Packaging Services",
        text: "High-speed multi-track pouch packaging, nitrogen flushing, vacuum sealing, jar filling, and bottle labeling for powders, liquids, and solid food items."
      },
      {
        heading: "3. Versatile Packaging Formats",
        text: "Support for standalone pouches, zipper bags, pillow packs, sachets, glass jars, PET bottles, tin cans, bulk corrugated boxes, and display trays."
      },
      {
        heading: "4. Lab-to-Market Scale-Up Support",
        text: "Assisting food scientists and entrepreneurs in taking benchtop recipes to commercial pilot plant trials and high-throughput production lines."
      },
      {
        heading: "5. Regulatory & Commercial Production Compliance",
        text: "Providing complete batch production records, FSSAI/ISO compliance labels, barcode printing, batch coding, and export-ready packaging."
      }
    ]
  }
};

export default function CoreServiceDetailPage() {
  const { serviceSlug } = useParams();
  const data = servicesDataMap[serviceSlug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50 pt-20">
      {/* HERO BANNER SECTION */}
      <section className="relative bg-[#091938] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff7a00] bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              SALVIN CORE SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm font-bold tracking-wide transition shadow-lg hover:shadow-orange-500/25"
              >
                Start Your Project <FaArrowRight className="text-xs" />
              </NavLink>
              <NavLink
                to="/turnkey-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-bold tracking-wide transition backdrop-blur-md"
              >
                Explore Turnkey Projects
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Detailed Service Points & Information */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Highlight Box */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#fff5eb] border border-[#ffecd6] flex items-center justify-center shrink-0">
                    {data.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#091938]">Key Service Highlights</h2>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Comprehensive Industrial Solutions</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {data.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <FaCheckCircle className="text-[#ff7a00] text-base shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-800 leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 space-y-8">
                <h2 className="text-2xl font-extrabold text-[#091938] border-b border-slate-100 pb-4">
                  Detailed Scope of Services &amp; Technical Capabilities
                </h2>

                <div className="space-y-8">
                  {data.details.map((detail, index) => (
                    <div key={index} className="group">
                      <h3 className="text-lg font-bold text-[#091938] mb-2 group-hover:text-[#ff7a00] transition-colors">
                        {detail.heading}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Standards & Compliance */}
              <div className="bg-gradient-to-br from-[#091938] to-[#112d63] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Quality Assurance &amp; Technical Compliance</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every engineering solution delivered by Salvin Industries adheres strictly to global industrial and sanitary engineering standards:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["ISO 9001:2015 Certified", "SS304 & SS316L Food Grade", "FSSAI Compliant", "WHO-GMP Cleanroom Standards", "US-FDA Guidelines", "Industry 4.0 Ready"].map((cert, cIdx) => (
                    <span key={cIdx} className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-xs font-semibold text-white">
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Featured Image & Quick Contact Card */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              {/* Featured Card Image (Same image from homepage card!) */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 group">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-wider block mb-1">
                      Salvin Featured Visual
                    </span>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {data.title} - Active Plant Setup
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-white border-t border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {data.seoDescription}
                  </p>
                </div>
              </div>

              {/* Consultation Inquiry Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/80">
                <h3 className="text-xl font-extrabold text-[#091938] mb-2">Need Expert Technical Guidance?</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Speak directly with our senior industrial engineers to discuss your project feasibility, machinery specifications, or plant layout.
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919825206680"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-[#fff5eb] border border-slate-200 hover:border-[#ffecd6] transition group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#ff7a00] text-white flex items-center justify-center shrink-0">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Hotline</span>
                      <span className="text-sm font-bold text-[#091938] group-hover:text-[#ff7a00] transition-colors">+91 98252 06680</span>
                    </div>
                  </a>
                </div>

                <NavLink
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm font-bold transition shadow-md hover:shadow-orange-500/20"
                >
                  Request Customized Quotation <FaArrowRight className="text-xs" />
                </NavLink>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
