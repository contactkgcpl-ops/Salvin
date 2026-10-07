import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  Cpu, 
  Sliders, 
  Terminal, 
  BarChart3, 
  LayoutDashboard, 
  Wifi, 
  Activity, 
  Bot, 
  Box, 
  QrCode, 
  Zap, 
  Wrench, 
  Compass, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function AutomationIndustry40Page() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    document.title = "Food Factory Automation & Industry 4.0 Solutions | Salvin Industries";
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/assets/core/heroes/salvinhero2.webp";
  const introImage = "/assets/core/services/Industry-4.0.webp";

  const servicesList = [
    {
      id: "automation-audit",
      title: "Automation Audit",
      icon: <Cpu size={32} className="text-orange-500" />,
      description: "Comprehensive plant audit evaluating manual bottlenecks, legacy relay panels, motor drives, and sensor gaps to design a customized smart factory automation roadmap.",
      deliverables: [
        "Plant-Wide Manual-to-Auto Gap Assessment",
        "Legacy Panel & Control Hardware Audit",
        "ROI & Payback Modeling per Automation Step",
        "Phased Smart Factory Implementation Plan"
      ]
    },
    {
      id: "manual-to-automation-study",
      title: "Manual-to-Automation Study",
      icon: <Sliders size={32} className="text-orange-500" />,
      description: "Techno-economic feasibility study for transitioning manual batching, weighing, thermal holding, and packing operations into fully automated PLC/SCADA lines.",
      deliverables: [
        "Manual vs. Automatic Production Cost Analysis",
        "Labor Elimination & Speed Gain Calculation",
        "Pneumatic & Servo Motor Retrofit Specs",
        "Safety Interlock & E-Stop Architecture"
      ]
    },
    {
      id: "plc-scada",
      title: "PLC / SCADA Systems",
      icon: <Terminal size={32} className="text-orange-500" />,
      description: "Custom PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi) and centralized SCADA HMI supervision for complete food processing plant control.",
      deliverables: [
        "Multi-Tier PLC Programming & Logic Design",
        "Central SCADA Graphic Mimic HMI Screens",
        "Alarm Management & Fault Diagnostics",
        "Recipe Management & Automatic Dosing"
      ]
    },
    {
      id: "production-monitoring",
      title: "Production Monitoring",
      icon: <BarChart3 size={32} className="text-orange-500" />,
      description: "Real-time line speed, batch cycle time, machine runtime, and production counter tracking to provide shop-floor visibility across all manufacturing shifts.",
      deliverables: [
        "Real-Time Line Speed & Counter Tracking",
        "Batch Cycle Time & Shift Target Dashboards",
        "Operator Down-Time Logging Stations",
        "Automated Shift Report Generation"
      ]
    },
    {
      id: "digital-dashboard",
      title: "Digital Dashboard",
      icon: <LayoutDashboard size={32} className="text-orange-500" />,
      description: "Cloud-connected and local web-based executive dashboards displaying OEE, energy consumption, batch yields, and machine performance KPIs on mobile and desktop.",
      deliverables: [
        "Custom Executive & Plant Manager Dashboards",
        "Real-Time OEE & Yield Metric Visualization",
        "Multi-Plant Remote Performance Monitoring",
        "Role-Based Mobile App & Cloud Access"
      ]
    },
    {
      id: "iot",
      title: "IoT Integration",
      icon: <Wifi size={32} className="text-orange-500" />,
      description: "Connecting legacy machines, chillers, boilers, and packaging lines using industrial IoT gateways, MQTT protocols, and cloud data pipelines.",
      deliverables: [
        "Edge Gateway & Industrial Router Setup",
        "Modbus / OPC-UA / MQTT Data Pipelines",
        "Legacy Machine Sensorization & Cloud Sync",
        "Cybersecure OT / IT Network Segmentation"
      ]
    },
    {
      id: "sensor-based-monitoring",
      title: "Sensor-based Monitoring",
      icon: <Activity size={32} className="text-orange-500" />,
      description: "Precision inline sensing for temperature, pressure, moisture, viscosity, flow rates, level transmitters, and optical color sorting in food processing.",
      deliverables: [
        "Sanitary SS316 RTD & Pressure Transmitter Specs",
        "Inline Moisture & Refractometer Brix Sensors",
        "Radar Level & Electromagnetic Flow Meters",
        "Automated Out-of-Spec Outflow Diversion"
      ]
    },
    {
      id: "ai-based-process-control",
      title: "AI-based Process Control",
      icon: <Bot size={32} className="text-orange-500" />,
      description: "AI and machine learning algorithms that continuously analyze raw material variations (moisture, temperature, load) and auto-adjust machine parameters in real time.",
      deliverables: [
        "Closed-Loop AI Machine Control Algorithms",
        "Raw Material Variability Auto-Compensation",
        "Computer Vision Quality Inspection (Defect Detection)",
        "Adaptive Feed Rate & Temperature Hold Tuning"
      ]
    },
    {
      id: "robotic-packaging",
      title: "Robotic Packaging",
      icon: <Box size={32} className="text-orange-500" />,
      description: "High-speed delta robots, cobots, and articulated robotic arms for automated pick-and-place, pouch sorting, case packing, and end-of-line robotic palletizing.",
      deliverables: [
        "Delta Robot Pick-and-Place Cell Design",
        "Cobot Flexible Case Packing Integration",
        "End-of-Line Multi-Deck Robotic Palletizing",
        "Gripper & Vision Guidance System Setup"
      ]
    },
    {
      id: "traceability",
      title: "Digital Traceability",
      icon: <QrCode size={32} className="text-orange-500" />,
      description: "Barcode, QR code, and RFID-based digital batch tracking from raw ingredient lot receiving to processed batching and final shipping container dispatch.",
      deliverables: [
        "1D / 2D Barcode & RFID Batch Encoding",
        "Genealogy Mapping (Raw Lot to Finished SKU)",
        "Automated Regulatory & Recall Traceability",
        "ERP & MES System Data Synchronization"
      ]
    },
    {
      id: "energy-monitoring",
      title: "Energy Monitoring Systems",
      icon: <Zap size={32} className="text-orange-500" />,
      description: "Smart power meters, steam flow meters, and water meters linked to an EnMS platform to track Specific Energy Consumption (SEC) per batch in real time.",
      deliverables: [
        "Multi-Utility Smart Metering Grid (kWh, Steam, Air, Water)",
        "Real-Time Specific Energy Consumption (SEC) Tracking",
        "Peak Load Shaving & Power Factor Optimization",
        "Energy Loss & Leak Alarm Automation"
      ]
    },
    {
      id: "predictive-maintenance",
      title: "Predictive Maintenance",
      icon: <Wrench size={32} className="text-orange-500" />,
      description: "Vibration sensors, thermal imaging, and motor current signature analysis (MCSA) to detect bearing wear, pump cavitation, and gearbox failures before breakdowns.",
      deliverables: [
        "Wireless Vibration & Temperature Sensor Grid",
        "Bearing & Gearbox Failure Prediction Models",
        "Automated Maintenance Ticket Generation",
        "Unplanned Machine Breakdown Elimination"
      ]
    },
    {
      id: "industry-4-0-roadmap",
      title: "Industry 4.0 Roadmap",
      icon: <Compass size={32} className="text-orange-500" />,
      description: "Strategic step-by-step masterplan for transforming traditional food manufacturing units into fully autonomous, paperless, Industry 4.0 Smart Factories.",
      deliverables: [
        "3-to-5 Year Smart Factory Technology Masterplan",
        "CAPEX Budgeting & ROI Timeline Milestones",
        "Paperless Shop-Floor (MES) System Architecture",
        "Change Management & Workforce Upskilling Plan"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Industry 4.0 automation transform a traditional food factory?",
      answer: "Industry 4.0 connects process machines, sensors, and SCADA control to cloud dashboards. It auto-adjusts process parameters based on raw material variation, tracks real-time OEE, and eliminates human error."
    },
    {
      question: "Can legacy machinery be retrofitted with IoT sensors and PLC controls?",
      answer: "Yes, we specialize in retrofitting legacy food machinery with SS316 sensors, edge gateways, servo drives, and PLC control panels without replacing expensive mechanical structures."
    },
    {
      question: "What is AI-based process control in food grinding and processing?",
      answer: "AI process control monitors motor load, moisture levels, and temperature continuously, auto-tuning feeder speeds and grinding gaps in real time to prevent motor overloads and ensure consistent particle size."
    },
    {
      question: "How do robotic packaging cells improve end-of-line efficiency?",
      answer: "Delta robots and robotic palletizers handle high-speed pick-and-place, case packing, and pallet stacking without breaks, handling delicate pouches and boxes with zero product damage."
    },
    {
      question: "What is predictive maintenance and how does it prevent breakdowns?",
      answer: "Predictive maintenance uses IoT vibration and thermal sensors on critical motors, pumps, and gearboxes to detect early mechanical wear weeks before a breakdown occurs, allowing scheduled maintenance during non-production hours."
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
            SALVIN SMART FACTORY TECH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            AUTOMATION &amp; INDUSTRY 4.0
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            PLC / SCADA Control, IoT Integration, AI Process Control, Robotic Packaging, Digital Dashboards, Predictive Maintenance &amp; Industry 4.0 Smart Factory Roadmaps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              Consult Our Automation Engineers <ArrowRight size={18} />
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
                alt="Automation & Industry 4.0" 
                className="w-full max-w-md md:max-w-full h-auto rounded-none shadow-md object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Automation &amp; Industry 4.0 Solutions
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 text-justify">
                Transforming food manufacturing into a data-driven, highly efficient smart operation is essential for market competitiveness. At <strong>Salvin Industries</strong>, we deliver cutting-edge <strong>automation audits, PLC/SCADA engineering, IoT sensor integration, AI-based process control, robotic packaging, digital dashboards, and predictive maintenance systems</strong>.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                We empower food plant owners to eliminate human manual error, lower energy consumption, achieve 100% digital traceability, and build paperless, autonomous Industry 4.0 factories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 Core Automation Services Grid (3 Columns per Row) */}
      <section className="pb-6 px-4">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Automation &amp; Industry 4.0 Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              PLC/SCADA control, IoT data pipelines, AI process control, and smart factory roadmap development.
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
              Common questions about our Automation &amp; Industry 4.0 Services.
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
            Ready to Automate &amp; Digitalize Your Food Processing Plant?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Speak with our Industry 4.0 automation engineers today to schedule a plant automation audit or SCADA upgrade session.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider inline-block"
          >
            Get In Touch With Our Automation Engineers
          </NavLink>
        </div>
      </section>
    </div>
  );
}
