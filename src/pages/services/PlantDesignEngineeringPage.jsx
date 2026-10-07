import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  Layout, 
  GitCommit, 
  Truck, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Droplets, 
  Layers, 
  Building2, 
  Box, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function PlantDesignEngineeringPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Food Plant Design & Process Engineering Services | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/service_plant_design.webp";

  const servicesList = [
    {
      id: "factory-layout-design",
      title: "Factory Layout Design",
      icon: <Layout size={32} className="text-orange-500" />,
      description: "We create optimized 2D and 3D factory blueprints that maximize production footprint efficiency, ensure strict regulatory compliance, and accommodate future expansion without disturbing running operations.",
      deliverables: [
        "2D CAD Floor Plans & Footprint Maps",
        "Equipment Spacing & Maintenance Clearances",
        "Future Line Expansion Space Allocation",
        "cGMP & FSSAI Compliant Architectural Layouts"
      ]
    },
    {
      id: "process-flow-design",
      title: "Process Flow Design",
      icon: <GitCommit size={32} className="text-orange-500" />,
      description: "We map out end-to-end raw material receiving, washing, grinding, thermal processing, cooling, and packaging sequences to prevent backtracking and line bottlenecks.",
      deliverables: [
        "Process Flowcharting & P&ID Mapping",
        "Raw Material to Packaging Transition Modeling",
        "Line Bottleneck Elimination & Yield Optimization",
        "Hygienic Process Interlock Specifications"
      ]
    },
    {
      id: "material-flow",
      title: "Material Flow",
      icon: <Truck size={32} className="text-orange-500" />,
      description: "Our material flow engineering establishes strict unidirectional pathways for raw ingredients, packaging materials, and finished goods to eliminate cross-contamination risks.",
      deliverables: [
        "Raw Ingredient Intake & Staging Pathways",
        "Finished Goods Dock & Dispatch Logistics Flow",
        "Packaging Material Entry & De-nesting Routes",
        "Waste & Scrap Segregated Removal Routes"
      ]
    },
    {
      id: "manpower-flow",
      title: "Manpower Flow",
      icon: <Users size={32} className="text-orange-500" />,
      description: "We design dedicated worker entry zones, change rooms, apron washing stations, and sanitization airlocks to control human movement and maintain strict plant hygiene.",
      deliverables: [
        "Personnel Change Room & Gowning Station Layouts",
        "Sanitization Airlock & Hand Wash Footprint",
        "High-Care vs. Low-Care Worker Access Zoning",
        "Emergency Evacuation & Fire Exit Pathway Planning"
      ]
    },
    {
      id: "hygienic-zoning",
      title: "Hygienic Zoning",
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      description: "We establish strict cleanroom environmental zoning (Black, Grey, White / High-Risk, Low-Risk) with air pressure differentials, HEPA filtration lobbies, and hygienic wall panels.",
      deliverables: [
        "High-Care & Ready-to-Eat (RTE) Cleanroom Zoning",
        "Air Pressure Cascade & Airlock Differentials",
        "Hygienic Sandwich Panel & Coved Wall Specifications",
        "FSSAI, ISO 22000 & USFDA Hygiene Compliance"
      ]
    },
    {
      id: "equipment-layout",
      title: "Equipment Layout",
      icon: <Cpu size={32} className="text-orange-500" />,
      description: "Detailed positioning of process equipment, conveyors, filling heads, and packaging lines engineered for optimal operator accessibility, safety, and rapid CIP cleaning.",
      deliverables: [
        "Machinery Mounting & Foundation Anchor Drawings",
        "Ergonomic Operator Platform & Mezzanine Designs",
        "Maintenance & CIP Spray Ball Clearances",
        "Vibration Isolation & Structural Load Specs"
      ]
    },
    {
      id: "utility-planning",
      title: "Utility Planning",
      icon: <Wrench size={32} className="text-orange-500" />,
      description: "Comprehensive utility engineering covering total electrical load calculations, sanitary SS316 piping headers, utility consumption balancing, and central plant sizing.",
      deliverables: [
        "Utility Load Calculations (kW, Steam TPH, Air CFM)",
        "Central Utility Plant Room Footprint Design",
        "Electrical Substation & Panel Distribution Specs",
        "Sanitary Utility Riser & Pipe Rack Detailing"
      ]
    },
    {
      id: "steam-water-air-refrigeration",
      title: "Steam / Water / Air / Refrigeration Planning",
      icon: <Droplets size={32} className="text-orange-500" />,
      description: "Engineering design for steam boilers, chilled water circulation, food-grade oil-free compressed air headers, glycol chilling systems, and RO water purification lines.",
      deliverables: [
        "SS316L Sanitary Steam & Condensate Piping",
        "Chilled Glycol & Cold Room Cooling Header Schemes",
        "Oil-Free Compressed Air Header & Dryer System",
        "RO & Potable Water Purification Distribution"
      ]
    },
    {
      id: "drainage-waste-management",
      title: "Drainage & Waste Management",
      icon: <Layers size={32} className="text-orange-500" />,
      description: "Design of self-cleaning SS304/SS316 floor trench drains, slot channels, grease traps, solids catch baskets, and Effluent Treatment Plant (ETP/STP) discharge connections.",
      deliverables: [
        "Stainless Steel Floor Drain & Trench Channel Schemes",
        "Fat, Oil & Grease (FOG) Trap Specifications",
        "Solids Separation & Washdown Trench Slopes",
        "ETP / STP Intake Flow Coordination Plans"
      ]
    },
    {
      id: "peb-civil-coordination",
      title: "PEB / Civil Coordination",
      icon: <Building2 size={32} className="text-orange-500" />,
      description: "Seamless integration of food machinery loads with PEB structural steel design, heavy machine foundation pads, epoxy flooring specifications, and ceiling truss loads.",
      deliverables: [
        "Civil Structural Anchor & Machine Pit Specifications",
        "PEB Column Spacing & Overhead Crane Load Sync",
        "Hygienic Epoxy / Polyurethane Flooring Specs",
        "Ceiling Height & Truss Load Alignment Drawings"
      ]
    },
    {
      id: "2d-3d-plant-design",
      title: "2D & 3D Plant Design",
      icon: <Box size={32} className="text-orange-500" />,
      description: "Photorealistic 3D BIM models and precision 2D CAD engineering blueprints that enable virtual plant walkthroughs, clash detection, and accurate civil execution.",
      deliverables: [
        "Full 3D Virtual Plant BIM Models & Walkthroughs",
        "2D CAD Equipment, Civil & Utility Blueprints",
        "Pipe & Duct Collision & Clash Detection Analysis",
        "As-Built Engineering Drawing Documentation"
      ]
    }
  ];

  const faqs = [
    {
      question: "Why is hygienic zoning essential for a food processing factory?",
      answer: "Hygienic zoning separates raw material handling areas (low care) from processed and ready-to-eat packaging zones (high care). By controlling personnel entry, air pressure differentials, and material movement between zones, cross-contamination is completely prevented."
    },
    {
      question: "Do you provide 3D BIM models of the factory layout before civil construction?",
      answer: "Yes, we create full 3D BIM models and 2D CAD floor plans, allowing factory owners to visualize equipment placement, operator walkways, and pipe header routings before spending capital on construction."
    },
    {
      question: "What utility engineering plans are included in your plant design?",
      answer: "We deliver complete utility distribution schemes including sanitary steam boiler piping, chilled water/glycol loops, oil-free compressed air headers, electrical single-line diagrams, and water treatment (RO) lines."
    },
    {
      question: "How do you coordinate with our civil contractors and PEB building suppliers?",
      answer: "We provide civil architects and PEB structural engineers with exact machinery weight loads, foundation pit dimensions, floor drainage slopes, ceiling height clearances, and column spacing requirements."
    },
    {
      question: "What standards do your food plant layouts comply with?",
      answer: "Our designs adhere to cGMP, FSSAI, ISO 22000, HACCP, and international food safety norms (including USFDA and EU sanitary guidelines)."
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
            SALVIN ENGINEERING &amp; DESIGN
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            FOOD PLANT DESIGN &amp; ENGINEERING
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive Factory Layouts, cGMP Hygienic Zoning, 2D/3D BIM Blueprinting, Process &amp; Material Flow Optimization, and Sanitary Utility Engineering for Modern Food Processing Plants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Design Engineers <ArrowRight size={18} />
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
                alt="Food Plant Design & Engineering" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Food Plant Design &amp; Engineering Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Designing a modern food manufacturing factory requires precision engineering, strict hygiene control, and efficient space utilization. At <strong>Salvin Industries</strong>, we provide end-to-end <strong>food plant design, 2D/3D CAD layout engineering, process and material flow optimization, hygienic cleanroom zoning, and utility distribution planning</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                Our design solutions eliminate cross-contamination, streamline raw material to finished product logistics, reduce energy wastage, and ensure full compliance with FSSAI, cGMP, HACCP, and global sanitary standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Core Plant Design Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Food Plant Design &amp; Engineering Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Precision engineering, layout design, and utility planning for high-efficiency food processing facilities.
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
              Common questions about our Food Plant Design &amp; Engineering Services.
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
            Ready to Design Your Next Food Processing Factory?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Speak with our plant design engineers today to schedule a 2D/3D layout assessment or utility planning session.
          </p>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 tracking-wider uppercase"
          >
            Get In Touch With Our Design Engineers <span className="text-lg">→</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
