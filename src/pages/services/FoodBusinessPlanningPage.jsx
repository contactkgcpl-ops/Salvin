import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  FileText, 
  Lightbulb, 
  Calendar, 
  PieChart, 
  Calculator, 
  TrendingUp, 
  Layers, 
  Briefcase, 
  MapPin, 
  Maximize2,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Building2,
  ShieldCheck
} from "lucide-react";

export default function FoodBusinessPlanningPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Food Business Planning & Feasibility Consultancy | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";

  const servicesList = [
    {
      id: "feasibility-study",
      title: "New Food Business Feasibility Study",
      icon: <FileText size={32} className="text-orange-500" />,
      tagline: "Techno-Economic Viability & Market Assessment",
      description: "Starting a food manufacturing business requires detailed market demand analysis, raw material availability mapping, risk assessment, and technological evaluation. Our techno-economic feasibility studies analyze market size, target consumer demographics, competitor positioning, supply chain risks, and regulatory requirements to ensure your capital is deployed in high-margin, viable food processing segments.",
      deliverables: [
        "Raw Material Availability & Seasonality Mapping",
        "Target Market & Demand Forecasting Analysis",
        "Technology Viability & Equipment Matching",
        "Risk Identification & Mitigation Framework"
      ]
    },
    {
      id: "concept-development",
      title: "Project Concept Development",
      icon: <Lightbulb size={32} className="text-orange-500" />,
      tagline: "Hygienic Plant Concepts & Product Portfolio Strategy",
      description: "We translate your food manufacturing vision into structured engineering concepts. From defining product recipe profiles and shelf-life expectations to establishing hygienic cleanroom zoning, material-personnel flow separation, and HACCP-compliant plant conceptualization, our team designs scalable food factory concepts tailored to international standards.",
      deliverables: [
        "Hygienic Factory Concept & Zoning Plans",
        "Product Recipe & Shelf-Life Strategy",
        "Production Process Flowcharting",
        "Scalable Modular Factory Concept Design"
      ]
    },
    {
      id: "project-planning",
      title: "Project Planning",
      icon: <Calendar size={32} className="text-orange-500" />,
      tagline: "Phase-Wise Execution Roadmap & Milestone Scheduling",
      description: "Structured project management is essential to prevent cost overruns and commissioning delays. We create end-to-end master project schedules covering civil design schedules, utility header procurement, equipment delivery timelines, installation sequencing, utility hookups, and trial run validation.",
      deliverables: [
        "Master Project Execution Gantt Chart",
        "Vendor Coordination & Technical Evaluation",
        "Utility Load Header & Civil Timeline Sync",
        "Commissioning & Trial Run Scheduling"
      ]
    },
    {
      id: "dpr-preparation",
      title: "DPR Preparation (Detailed Project Report)",
      icon: <PieChart size={32} className="text-orange-500" />,
      tagline: "Bankable Detailed Project Reports for Funding & Subsidies",
      description: "Our bankable Detailed Project Reports (DPR) are crafted to secure bank financing, financial institution loans, and government subsidies (such as PMKSY - Pradhan Mantri Kisan SAMPADA Yojana, PLI Scheme, and State Industrial Policies). Each DPR features rigorous techno-economic modeling, financial ratios, debt-service coverage, and 10-year P&L projections.",
      deliverables: [
        "10-Year Financial P&L & Cash Flow Forecasts",
        "CAPEX, OPEX & Debt-Service Coverage Ratios (DSCR)",
        "Government Subsidy & Incentive Advisory (PMKSY / MOFPI)",
        "Bankable Document Package for Debt Sanctioning"
      ]
    },
    {
      id: "cost-estimation",
      title: "Project Cost Estimation",
      icon: <Calculator size={32} className="text-orange-500" />,
      tagline: "Precision CAPEX & OPEX Budgetary Estimates",
      description: "Avoid unexpected capital shortages with our itemized budgetary estimation. We provide complete cost breakdowns covering land acquisition, civil construction, PEB structure, specialized hygienic flooring, HVAC & cleanroom installations, process machinery, packaging automation, utility boilers, chillers, and initial working capital.",
      deliverables: [
        "Itemized Machinery & Civil Infrastructure CAPEX",
        "Utility Consumption & Utility Infrastructure Budgeting",
        "Working Capital & Initial Operational Expense Estimation",
        "Contingency & Price Escalation Buffer Management"
      ]
    },
    {
      id: "roi-feasibility",
      title: "ROI & Commercial Feasibility",
      icon: <TrendingUp size={32} className="text-orange-500" />,
      tagline: "Internal Rate of Return (IRR) & Payback Period Modeling",
      description: "Evaluate your investment profitability before spending capital. We model Internal Rate of Return (IRR), Net Present Value (NPV), break-even production volumes, gross profit margins per product line, and payback timelines under various raw material inflation scenarios and capacity utilization rates.",
      deliverables: [
        "Break-Even Analysis & Capacity Sensitivity Matrix",
        "Internal Rate of Return (IRR) & NPV Calculation",
        "Payback Period & Gross Margin Analysis",
        "Product-Wise Profitability & Yield Modeling"
      ]
    },
    {
      id: "capacity-planning",
      title: "Capacity Planning",
      icon: <Layers size={32} className="text-orange-500" />,
      tagline: "Throughput Optimization & Line Load Balancing",
      description: "Proper capacity planning ensures your factory runs without process bottlenecks. We calculate exact hourly, daily, and annual throughput requirements, balance batch processing with continuous thermal or packaging lines, size raw material silos, and design utility headers (steam, air, water, power) to match peak operational loads.",
      deliverables: [
        "Line Balancing & Equipment Capacity Synchronization",
        "Batch vs. Continuous Process Throughput Optimization",
        "Utility Load Balancing (Steam, Power, Compressed Air, Chilled Water)",
        "Raw Material & Finished Goods Buffer Sizing"
      ]
    },
    {
      id: "business-model",
      title: "Business Model Development",
      icon: <Briefcase size={32} className="text-orange-500" />,
      tagline: "Strategic Go-to-Market & Operations Model Strategy",
      description: "Select the most lucrative operating model for your food brand. We advise on own-brand manufacturing vs. contract manufacturing (co-packing), B2B institutional supply vs. D2C retail distribution, export-oriented unit (EOU) structuring, and cost-efficient supply chain models.",
      deliverables: [
        "Contract Manufacturing (Co-Packing) vs. Own Plant Analysis",
        "B2B Institutional & B2C Distribution Channel Strategy",
        "Export-Oriented Manufacturing Structuring",
        "Operational Cost Control & Margin Strategy"
      ]
    },
    {
      id: "site-evaluation",
      title: "Plant Location & Site Evaluation",
      icon: <MapPin size={32} className="text-orange-500" />,
      tagline: "Strategic Site Selection & Environmental Compliance",
      description: "Location determines logistics costs, raw material access, and regulatory compliance. We evaluate industrial park sites based on proximity to agricultural belts, highway connectivity, potable water quality, electrical grid stability, effluent treatment plant (ETP/STP) discharge feasibility, and local pollution control board NOC norms.",
      deliverables: [
        "Techno-Logistical Site Comparison & Scorecard",
        "Water Quality & Effluent Treatment (ETP) Feasibility",
        "Power Grid Substation & Fuel Access Verification",
        "State Pollution Control & Zone NOC Evaluation"
      ]
    },
    {
      id: "brownfield-expansion",
      title: "Expansion / Brownfield Project Consultancy",
      icon: <Maximize2 size={32} className="text-orange-500" />,
      tagline: "Zero-Downtime Factory Modernization & Line Debottlenecking",
      description: "Upgrading an operating factory requires surgical precision to avoid disturbing active production. We specialize in brownfield plant expansion, line debottlenecking, automation retrofits, cleanroom re-zoning, energy recovery systems, and capacity multiplication with zero impact on running operations.",
      deliverables: [
        "Brownfield Line Debottlenecking & Capacity Multiplication",
        "Zero-Downtime Machinery Retrofitting & Integration",
        "Cleanroom & Hygienic Flow Re-Zoning Plans",
        "Energy Audit & Waste Heat Recovery Implementation"
      ]
    }
  ];

  const faqs = [
    {
      question: "Why is a Detailed Project Report (DPR) necessary for a food processing plant?",
      answer: "A bankable Detailed Project Report (DPR) is mandatory for securing bank loans, financial assistance, and government subsidies under schemes like PMKSY (Pradhan Mantri Kisan SAMPADA Yojana) and PLI. It provides financial institutions with clear evidence of techno-economic viability, cash flow projections, and debt repayment capability."
    },
    {
      question: "Can Salvin Industries assist in securing government food processing subsidies?",
      answer: "Yes, our DPR and project consultancy packages include guidance on eligibility and documentation for central and state government subsidies, including MOFPI grants, PMKSY, cold chain subsidies, and state industrial policy incentives."
    },
    {
      question: "What is the difference between greenfield and brownfield food project consultancy?",
      answer: "Greenfield consultancy involves setting up a completely new food factory from ground zero (land selection to commissioning). Brownfield consultancy focuses on expanding, modernizing, or automating an existing operational factory without interrupting ongoing production lines."
    },
    {
      question: "How long does a techno-economic feasibility study take to complete?",
      answer: "A comprehensive techno-economic feasibility study typically takes between 2 to 4 weeks, depending on the number of product categories, technical complexity, and geographical scope."
    },
    {
      question: "Which food processing sectors do you consult for?",
      answer: "We provide consultancy for spices processing, snacks & namkeen, dairy & beverages, bakery & confectionery, frozen foods, ready-to-eat (RTE), sauces & condiments, edible oil refining, and grain milling industries."
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
            SALVIN INDUSTRIAL CONSULTANCY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            FOOD BUSINESS PLANNING &amp; CONSULTANCY
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            End-to-End Strategic Advisory, Techno-Economic Feasibility Studies, Bankable DPR Preparation, Capacity Planning &amp; Factory Site Evaluation for Food Processing Plants in India and Worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Food Experts <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-12 md:py-16">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Food Processing Plant Consultancy &amp; Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Setting up a successful food manufacturing unit requires more than just buying machinery. It demands rigorous <strong>techno-economic feasibility analysis, precise capacity modeling, bankable Detailed Project Reports (DPR), hygienic plant design concepts, and strategic site evaluation</strong>. At <strong>Salvin Industries</strong>, with over 25+ years of industrial engineering excellence, we help food entrepreneurs, corporate food brands, and investors transform food business ideas into highly profitable, compliant, and scalable manufacturing facilities.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                Whether you are planning a greenfield spice processing plant, namkeen factory, dairy unit, beverage bottling line, or expanding an existing brownfield facility, our expert food consultants provide complete A-to-Z guidance from concept to commissioning.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-5/12 flex justify-center items-center">
              <img 
                src="/assets/service/food-business-consultancy.png" 
                alt="Food Processing Plant Consultancy & Services" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10 Services Detailed Grid */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Food Business Planning Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive technical, commercial, and engineering solutions tailored for food processing plants.
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
              Common questions about our Food Business Planning &amp; Consultancy Services.
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
            Ready to Plan Your Next Food Manufacturing Project?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Speak with our industrial consultants today to schedule a techno-economic feasibility assessment or DPR consultation.
          </p>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm sm:text-base font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 tracking-wider uppercase"
          >
            Get In Touch With Our Consultants <span className="text-lg">→</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
