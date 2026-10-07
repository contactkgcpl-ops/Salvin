import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  TrendingUp, 
  Percent, 
  Trash2, 
  BarChart3, 
  Zap, 
  Timer, 
  Users, 
  Scale, 
  FileText, 
  Flame, 
  DollarSign, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function ProductionOperationalExcellencePage() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Production & Operational Excellence Consultancy | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/Production Process Optimisation Wheel.png";

  const servicesList = [
    {
      id: "production-process-optimization",
      title: "Production Process Optimization",
      icon: <TrendingUp size={32} className="text-orange-500" />,
      description: "Streamlining continuous and batch manufacturing lines to eliminate thermal, mechanical, and material transfer inefficiencies for maximum throughput.",
      deliverables: [
        "End-to-End Line Speed & Bottleneck Analysis",
        "Thermal & Mechanical Process Optimization",
        "Batch Cycle Time Reduction",
        "Standardized Manufacturing Process Flow"
      ]
    },
    {
      id: "yield-improvement",
      title: "Yield Improvement",
      icon: <Percent size={32} className="text-orange-500" />,
      description: "Maximizing raw material conversion efficiency, reducing product give-away, and optimizing recipe yields to extract maximum salable product per batch.",
      deliverables: [
        "Raw Material Mass Balance & Yield Audit",
        "Overfill & Product Give-Away Reduction",
        "Moisture & Ingredient Loss Minimization",
        "Batch Yield Tracking & Reconciliation Systems"
      ]
    },
    {
      id: "waste-reduction",
      title: "Waste Reduction",
      icon: <Trash2 size={32} className="text-orange-500" />,
      description: "Implementing lean manufacturing principles to eliminate raw ingredient scrap, packaging material rejection, and process liquid waste.",
      deliverables: [
        "Scrap & Package Defect Reduction Framework",
        "Clean-in-Place (CIP) Effluent Minimization",
        "Trim & Rework Recycling Protocols",
        "Zero-Waste-to-Landfill Manufacturing Audit"
      ]
    },
    {
      id: "production-loss-analysis",
      title: "Production Loss Analysis",
      icon: <BarChart3 size={32} className="text-orange-500" />,
      description: "Systematic categorization and root-cause analysis of speed losses, quality defects, startup scrap, and changeover losses using Pareto modeling.",
      deliverables: [
        "Pareto Loss Tree & Categorization Matrix",
        "Startup & Changeover Scrap Mapping",
        "Speed Loss & Micro-Stoppage Identification",
        "Loss Elimination Action Plan"
      ]
    },
    {
      id: "oee-improvement",
      title: "OEE Improvement",
      icon: <Zap size={32} className="text-orange-500" />,
      description: "Measuring and multiplying Overall Equipment Effectiveness (OEE) across Availability, Performance, and Quality metrics to maximize plant ROI.",
      deliverables: [
        "Automated OEE Calculation & Dashboard Setup",
        "Availability, Performance & Quality Metric Sync",
        "Six Big Losses Elimination Strategy",
        "OEE Benchmark Target Tracking"
      ]
    },
    {
      id: "downtime-reduction",
      title: "Downtime Reduction",
      icon: <Timer size={32} className="text-orange-500" />,
      description: "Reducing unplanned machine breakdowns, expediting SMED changeovers, and eliminating micro-stoppages to keep lines running continuously.",
      deliverables: [
        "Unplanned Breakdown Root Cause Elimination",
        "Single-Minute Exchange of Die (SMED) Changeover",
        "Micro-Stoppage Sensor & Conveyor Fixes",
        "Mean Time Between Failures (MTBF) Gains"
      ]
    },
    {
      id: "manpower-optimization",
      title: "Manpower Optimization",
      icon: <Users size={32} className="text-orange-500" />,
      description: "Optimizing line staffing, labor ergonomics, and automated material handling to reduce labor cost per ton of finished product.",
      deliverables: [
        "Line Staffing & Time-Motion Study Audit",
        "Ergonomic Workstation & Material Staging Design",
        "Cross-Functional Skill Matrix & Shift Planning",
        "Labor Cost-per-Kg Reduction Strategy"
      ]
    },
    {
      id: "line-balancing",
      title: "Line Balancing",
      icon: <Scale size={32} className="text-orange-500" />,
      description: "Synchronizing processing, filling, sealing, casing, and palletizing speeds to create a continuous, unblocked production flow.",
      deliverables: [
        "Equipment Speed Synchronization Matrix",
        "In-Line Accumulation & Buffer Zone Sizing",
        "Conveyor Acceleration & Deceleration Tuning",
        "Zero-Bottleneck Line Flow Optimization"
      ]
    },
    {
      id: "sop-development",
      title: "SOP Development",
      icon: <FileText size={32} className="text-orange-500" />,
      description: "Drafting visual, step-by-step Standard Operating Procedures (SOPs) for machine startup, operation, changeover, sanitation, and troubleshooting.",
      deliverables: [
        "Visual Operator Work Instructions (SOPs)",
        "Machine Startup & Shutdown Checklists",
        "Product Changeover & Washdown SOPs",
        "Troubleshooting & Parameter Target Cards"
      ]
    },
    {
      id: "productivity-improvement",
      title: "Productivity Improvement",
      icon: <Flame size={32} className="text-orange-500" />,
      description: "Multiplying daily tons-per-hour output by implementing Kaizen continuous improvement, visual factory management, and shift target boards.",
      deliverables: [
        "Hourly Output Target Boards & Visual Factory",
        "Daily Shift Performance & Kaizen Audits",
        "Operator Accountability & KPI Dashboards",
        "Plant Capacity Expansion Without New CAPEX"
      ]
    },
    {
      id: "cost-reduction",
      title: "Cost Reduction",
      icon: <DollarSign size={32} className="text-orange-500" />,
      description: "Identifying and removing operational waste, excessive utility consumption, raw material over-dosing, and high maintenance costs.",
      deliverables: [
        "COGS (Cost of Goods Sold) Reduction Plan",
        "Raw Material & Packaging Over-Specification Audit",
        "Consumable & Maintenance Parts Optimization",
        "Operational Margin Improvement Scorecard"
      ]
    },
    {
      id: "energy-optimization",
      title: "Energy Optimization",
      icon: <Cpu size={32} className="text-orange-500" />,
      description: "Auditing thermal, electrical, boiler steam, compressed air, and refrigeration loads to reduce kWh and fuel consumption per ton produced.",
      deliverables: [
        "Steam Boiler & Condensate Heat Recovery",
        "Compressed Air Leak & Pressure Optimization",
        "Refrigeration & Chilled Glycol Efficiency Audit",
        "Specific Energy Consumption (SEC) Benchmark"
      ]
    },
    {
      id: "preventive-maintenance-system",
      title: "Preventive Maintenance System",
      icon: <Wrench size={32} className="text-orange-500" />,
      description: "Building structured Autonomous (AM) and Preventive Maintenance (PM) schedules to prevent catastrophic machine failures and extend asset life.",
      deliverables: [
        "Scheduled Maintenance Task Checklists",
        "Autonomous Operator Cleaning & Lubrication SOPs",
        "Critical Spare Parts Reorder Inventory System",
        "Mean Time to Repair (MTTR) Reduction Framework"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does production process optimization increase factory output without purchasing new machinery?",
      answer: "By analyzing line bottlenecks, balancing machine speeds, eliminating micro-stoppages, and optimizing thermal hold cycles, we unlock hidden capacity in your existing equipment to increase daily tonnage."
    },
    {
      question: "What is OEE and how do you help improve it?",
      answer: "Overall Equipment Effectiveness (OEE) evaluates Availability, Performance, and Quality. We set up real-time OEE tracking and eliminate the 'Six Big Losses' (breakdowns, setup delays, micro-stops, slow speed, startup scrap, and defect rejections)."
    },
    {
      question: "Can your team help reduce raw material yield loss and giveaway?",
      answer: "Yes, we conduct mass-balance audits across raw material receiving, processing, and filling to minimize overfilling, reduce moisture loss, and recover usable rework trim."
    },
    {
      question: "How do visual SOPs improve operator productivity and safety?",
      answer: "Visual SOPs provide step-by-step instructions directly at machine stations, eliminating operator error during startup, product changeover, and washdowns, leading to faster changeovers and consistent product quality."
    },
    {
      question: "What energy optimization strategies do you implement in food plants?",
      answer: "We audit steam boiler condensate recovery, compressed air pressure levels, motor VFD controls, and refrigeration glycol loops to lower energy consumption (kWh and fuel) per unit of output."
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
            SALVIN OPERATIONAL EXCELLENCE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            PRODUCTION &amp; OPERATIONAL EXCELLENCE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Process Optimization, Yield Improvement, Waste &amp; Downtime Reduction, OEE Multiplication, Manpower Balancing, SOP Development &amp; Preventive Maintenance Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Operations Experts <ArrowRight size={18} />
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
                alt="Production & Operational Excellence" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Production &amp; Operational Excellence Services
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Achieving peak productivity and profitability requires continuous operational refinement. At <strong>Salvin Industries</strong>, we provide end-to-end <strong>production process optimization, yield improvement, waste &amp; downtime reduction, OEE multiplication, line balancing, visual SOP development, and preventive maintenance systems</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                Our operations engineers help food processing factories eliminate line bottlenecks, reduce energy consumption, lower manufacturing costs per ton, and maximize plant output without incurring new capital expenditure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 Core Operations Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Production &amp; Operational Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Process optimization, yield maximization, downtime reduction, and preventive maintenance.
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
              Common questions about our Production &amp; Operational Excellence Services.
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
            Ready to Multiply Your Factory's Output &amp; Efficiency?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Contact our operational excellence consultants today to schedule a line bottleneck audit or OEE improvement study.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Operations Consultants
          </NavLink>
        </div>
      </section>
    </div>
  );
}
