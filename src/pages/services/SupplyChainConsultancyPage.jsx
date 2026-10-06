import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  ShoppingBag, 
  Users, 
  ShieldCheck, 
  Boxes, 
  Warehouse, 
  Snowflake, 
  Truck, 
  Network, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function SupplyChainConsultancyPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/supply_chain_consultancy.jpg";

  const servicesList = [
    {
      id: "raw-material-procurement-strategy",
      title: "Raw Material Procurement Strategy",
      icon: <ShoppingBag size={32} className="text-orange-500" />,
      description: "Developing strategic sourcing models for agricultural raw materials, spices, grains, and specialty food ingredients to ensure seasonal availability, price stability, and quality consistency.",
      deliverables: [
        "Agricultural Seasonality & Crop Harvesting Maps",
        "Direct Farmer & Mandi Procurement Strategies",
        "Raw Material Spec Sheets & Quality Control Criteria",
        "Buffer Stock & Price Hedging Advisory"
      ]
    },
    {
      id: "vendor-development",
      title: "Vendor Development",
      icon: <Users size={32} className="text-orange-500" />,
      description: "Building a robust network of qualified ingredient, primary packaging, and secondary packaging suppliers through vendor onboarding, capability building, and contract alignment.",
      deliverables: [
        "Ingredient & Packaging Vendor Scouting Matrix",
        "Supplier Onboarding & Qualification Protocols",
        "Long-Term Service Level Agreement (SLA) Contracts",
        "Secondary Backup Supplier Development"
      ]
    },
    {
      id: "supplier-evaluation",
      title: "Supplier Evaluation",
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      description: "Periodic auditing and scorecard rating of ingredient and packaging suppliers on quality consistency, on-time delivery, price competitiveness, and food safety compliance.",
      deliverables: [
        "Supplier Quality & On-Time Delivery Scorecards",
        "Raw Material Defect & Rejection Rate Audits",
        "Supplier cGMP & Traceability Audits",
        "Vendor Ranking & Risk Mitigation Reports"
      ]
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      icon: <Boxes size={32} className="text-orange-500" />,
      description: "Implementing FIFO/FEFO inventory control systems, safety stock calculations, economic order quantities (EOQ), and real-time ERP warehouse tracking.",
      deliverables: [
        "First-Expired, First-Out (FEFO) Rotation Protocols",
        "Min-Max & Safety Stock Level Algorithms",
        "Deadstock & Perishable Expiry Elimination Plan",
        "Barcode / RFID Inventory ERP Integration"
      ]
    },
    {
      id: "warehouse-design",
      title: "Warehouse Design",
      icon: <Warehouse size={32} className="text-orange-500" />,
      description: "Designing ambient, temperature-controlled, and high-density racking warehouse layouts optimized for fast pallet movement, fork-lift access, and cGMP compliance.",
      deliverables: [
        "High-Density Selective & Drive-In Racking Layouts",
        "Dock Leveler & Loading Bay Flow Schemes",
        "Pallet Staging & Aisle Space Optimization",
        "cGMP Pest & Dust Containment Design"
      ]
    },
    {
      id: "cold-chain-planning",
      title: "Cold Chain Planning",
      icon: <Snowflake size={32} className="text-orange-500" />,
      description: "Engineering refrigerated cold rooms, blast freezers, reefer truck logistics, and real-time IoT temperature logging for perishable food products.",
      deliverables: [
        "Cold Room & Blast Freezer Capacity Calculations",
        "Reefer Van Fleet Sizing & Temperature Mapping",
        "IoT GPS & Thermal Sensor Loggers Setup",
        "Thermal Break & Cold Chain Compliance Audits"
      ]
    },
    {
      id: "logistics-optimization",
      title: "Logistics Optimization",
      icon: <Truck size={32} className="text-orange-500" />,
      description: "Optimizing primary and secondary freight transportation routes, vehicle load factor fill rates, 3PL logistics provider selection, and freight cost per case.",
      deliverables: [
        "Transport Route Optimization & Mileage Savings",
        "Vehicle Full-Truck-Load (FTL) Factor Maximization",
        "3PL / 4PL Logistics Operator SLA Negotiation",
        "Freight-per-Kg & Cost-per-Case Reduction"
      ]
    },
    {
      id: "distribution-network",
      title: "Distribution Network",
      icon: <Network size={32} className="text-orange-500" />,
      description: "Designing multi-echelon distribution networks, Mother Warehouse / C&F / Depot location strategies, and last-mile delivery fulfillment.",
      deliverables: [
        "Multi-Tier Depot & C&F Location Planning",
        "Regional Hub & Last-Mile Delivery Mapping",
        "Channel Partner Margins & SLA Structuring",
        "Omnichannel & D2C Fulfillment Architecture"
      ]
    },
    {
      id: "demand-planning",
      title: "Demand Planning",
      icon: <TrendingUp size={32} className="text-orange-500" />,
      description: "Statistical sales forecasting, S&OP (Sales and Operations Planning) alignment, and promotional demand spike modeling to prevent stockouts and overstocking.",
      deliverables: [
        "Sales & Operations Planning (S&OP) Process Setup",
        "SKU-Level Demand Forecasting Algorithms",
        "Promotional & Seasonal Demand Spike Models",
        "Forecast Accuracy Improvement Tracking"
      ]
    },
    {
      id: "purchase-cost-optimization",
      title: "Purchase Cost Optimization",
      icon: <DollarSign size={32} className="text-orange-500" />,
      description: "Consolidated bulk buying, commodity price tracking, packaging material redesign, and strategic negotiation to lower total procurement costs.",
      deliverables: [
        "Raw Material Sourcing Cost-per-Kg Reduction",
        "Packaging Material Specification Rationalization",
        "Volume Discount & Annual Contract Structuring",
        "Total Cost of Ownership (TCO) Savings Matrix"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does raw material procurement strategy reduce food factory operating costs?",
      answer: "By mapping seasonal harvesting windows, establishing direct farmer/mandi sourcing, and locking in bulk contracts, we stabilize ingredient purchase prices and protect margin volatility."
    },
    {
      question: "Why is FEFO inventory management critical for food processing companies?",
      answer: "First-Expired, First-Out (FEFO) ensures ingredients and finished goods with shorter shelf lives are dispatched first, preventing product expiry losses and food spoilage in warehouses."
    },
    {
      question: "What cold chain monitoring systems do you recommend for perishable foods?",
      answer: "We design cold rooms and reefer logistics equipped with real-time IoT temperature sensors and GPS trackers that alert managers immediately if temperature thresholds are breached."
    },
    {
      question: "Can Salvin Industries help us select and negotiate with 3PL logistics providers?",
      answer: "Yes, we evaluate 3PL logistics operators based on fleet age, cold storage capability, freight rates, and on-time delivery records, negotiating favorable SLAs for your brand."
    },
    {
      question: "How do you improve demand forecasting accuracy for seasonal food products?",
      answer: "We implement Sales & Operations Planning (S&OP) frameworks that combine historical sales trends, market growth data, and promotional calendars to reduce stockouts and excess inventory."
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
            SALVIN SUPPLY CHAIN &amp; LOGISTICS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            SUPPLY CHAIN CONSULTANCY
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Strategic Raw Material Sourcing, Vendor Development, Inventory Control, cGMP Warehouse Design, Cold Chain Logistics, Demand Planning &amp; Purchase Cost Optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Supply Chain Experts <ArrowRight size={18} />
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
                alt="Supply Chain Consultancy" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Supply Chain &amp; Procurement Consultancy Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                A resilient and cost-effective supply chain is the backbone of a successful food processing enterprise. At <strong>Salvin Industries</strong>, we offer end-to-end <strong>raw material procurement strategies, vendor development, FEFO inventory control, cGMP warehouse design, cold chain planning, and logistics cost optimization</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                We help food brands, processing plants, and food distributors streamline raw material supply, eliminate expiry wastage, optimize freight costs per case, and build scalable distribution networks across India and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Core Supply Chain Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Supply Chain Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Strategic procurement, warehouse design, cold chain logistics, and demand planning.
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
              Common questions about our Supply Chain Consultancy Services.
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
      <section className="py-16 bg-[#0b1c2c] text-white text-center px-4 border-t-4 border-orange-500 shadow-xl">
        <div className="content-container">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Ready to Optimize Your Food Supply Chain &amp; Logistics?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Speak with our supply chain consultants today to schedule a warehouse audit or procurement cost reduction assessment.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Supply Chain Consultants
          </NavLink>
        </div>
      </section>
    </div>
  );
}
