import React from "react";
import { 
  Brain, 
  Sliders, 
  LayoutDashboard, 
  Radio, 
  Database, 
  ArrowRight,
  ArrowDown
} from "lucide-react";
import "./AutomationTechnology.css";

const aiGrindingImage = "/assets/core/heroes/ai_grinding_technology.png";

export default function AIGrindingTechnologyDetailPage() {
  const howItWorksSteps = [
    {
      title: "SENSE",
      description: "Sensors continuously monitor key machine and process parameters such as temperature, feed rate, motor load, vibration and production output."
    },
    {
      title: "ANALYSE",
      description: "The system analyses live machine data against the selected product recipe and defined process limits."
    },
    {
      title: "CONTROL",
      description: "Based on process conditions, the system can help optimize parameters such as feed rate, grinding speed and cooling to maintain consistent grinding conditions."
    },
    {
      title: "MONITOR",
      description: "All important production information is available through a live dashboard, allowing operators and management to monitor machines, batches, production and performance in real time."
    }
  ];

  const flowNodes = [
    { name: "Sensors", icon: <Radio size={52} color="#2563eb" /> },
    { name: "Data", icon: <Database size={52} color="#2563eb" /> },
    { name: "Analysis", icon: <Brain size={52} color="#2563eb" /> },
    { name: "Process Control", icon: <Sliders size={52} color="#2563eb" /> },
    { name: "Live Dashboard", icon: <LayoutDashboard size={52} color="#2563eb" /> }
  ];

  const keyCapabilities = [
    {
      title: "Intelligent Temperature Control",
      description: "Continuous temperature monitoring helps identify heat build-up during grinding. When the product temperature approaches the configured limit, the system can respond through defined process controls such as feed adjustment or cooling, helping protect product quality, aroma, colour and consistency."
    },
    {
      title: "Intelligent Feed Rate Control",
      description: "The system continuously evaluates feed rate along with machine load, temperature and production conditions. This helps maintain a balanced flow of material through the grinder, avoiding excessive loading while supporting stable throughput and efficient grinding performance."
    },
    {
      title: "Particle Size Control",
      description: "Target mesh and required fineness can be defined as part of the product recipe. The system monitors relevant grinding parameters and helps maintain consistent particle size from batch to batch, reducing variation, rejects and unnecessary re-grinding."
    },
    {
      title: "Real-Time Production Monitoring",
      description: "All important production information can be brought together on a centralized dashboard. Operators and management can view current product, batch status, production quantity, output rate, temperature, machine status and today's production data in real time."
    },
    {
      title: "Machine Performance Monitoring",
      description: "Machine operating conditions such as motor load, vibration, RPM, running status and other available parameters can be continuously monitored. Changes or abnormal trends can be identified early, helping improve machine reliability, maintenance planning and overall equipment availability."
    },
    {
      title: "Recipe & Batch Management",
      description: "Product-specific recipes can store parameters such as target mesh, temperature limit, RPM, feed rate and batch quantity. Once a recipe is selected, the defined process parameters can be used for the batch, creating a more structured and repeatable production process with digital batch records."
    }
  ];

  const comparisonData = [
    { traditional: "Fixed / manual settings", ai: "Recipe-based process parameters" },
    { traditional: "Manual monitoring", ai: "Real-time machine monitoring" },
    { traditional: "Operator-dependent adjustments", ai: "Data-assisted process control" },
    { traditional: "Temperature checked periodically", ai: "Continuous temperature monitoring" },
    { traditional: "Production data recorded manually", ai: "Live production data" },
    { traditional: "Batch variation can occur", ai: "Consistent process conditions" },
    { traditional: "Maintenance after failure", ai: "Early indication from machine trends" },
    { traditional: "Limited production visibility", ai: "Centralized production dashboard" }
  ];

  return (
    <div className="tech-blog-wrapper">
      {/* Top Banner Header */}
      <div 
        className="tech-blog-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/assets/core/heroes/AI-Powered Spice Processing Factory.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: "160px 24px"
        }}
      >
        <div className="tech-blog-header-container" style={{ textAlign: "center" }}>
          <h1 className="tech-blog-title" style={{ fontSize: "3.2rem", textTransform: "uppercase", margin: "0 auto", textAlign: "center" }}>
            AI GRINDING TECHNOLOGY
          </h1>
        </div>
      </div>

      {/* Main Body Grid - Aligned with Header Content-Container */}
      <div className="content-container" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
        {/* Top 2-Column Section */}
        <div className="ai-detail-grid">
          {/* Left Column Text - Directly on Background */}
          <div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "24px", lineHeight: "1.3" }}>
              What is AI Grinding Technology?
            </h2>

            <p style={{ fontSize: "1.08rem", lineHeight: "1.85", color: "#334155", marginBottom: "20px", textAlign: "justify" }}>
              <strong>AI Grinding Technology</strong> is an advanced approach to modern powder processing that combines <strong>AI-assisted process control, automation, Industrial IoT, and real-time production monitoring</strong>. The system continuously monitors critical parameters such as temperature, feed rate, motor load, moisture, particle size, vibration, and production output to maintain stable grinding conditions. By using recipe-based production and live machine data, it helps improve consistency, reduce process variation, optimize machine performance, and maintain complete batch traceability.
            </p>

            <p style={{ fontSize: "1.08rem", lineHeight: "1.85", color: "#334155", textAlign: "justify" }}>
              At <strong>Salvin Industries</strong>, AI Grinding Technology is developed as part of a complete <strong>Spice Processing &amp; Industrial Automation ecosystem</strong>, connecting grinding machinery, sensors, PLC/IoT data, production recipes, and centralized monitoring into one integrated system. From selecting the product recipe to monitoring the running batch and reviewing today's production data, the system is designed to give plant operators and management better visibility, control, and data-driven decision-making across the entire grinding process.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="ai-detail-img-wrapper" style={{ textAlign: "right" }}>
            <img
              src={aiGrindingImage}
              alt="Salvin AI Grinding Technology"
              style={{ width: "100%", maxWidth: "440px", height: "auto", borderRadius: "0px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}
            />
          </div>
        </div>

        {/* How It Works Section - 2 Rows (2 Columns each) */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "32px" }}>
            How It Works
          </h2>

          <div className="how-it-works-grid">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx}>
                {/* Title */}
                <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0f172a", marginBottom: "12px", letterSpacing: "0.5px" }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#334155", margin: 0, textAlign: "justify" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Section - Responsive: Left to Right on Desktop, Top to Bottom on Mobile */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "32px" }}>
            Flow
          </h2>

          <div className="flow-container">
            {flowNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                {/* Node */}
                <div className="flow-node-item">
                  <div className="flow-node-circle">
                    {node.icon}
                  </div>
                  <span style={{ fontSize: "1.08rem", fontWeight: "700", color: "#0f172a" }}>
                    {node.name}
                  </span>
                </div>

                {/* Connecting Arrows */}
                {idx < flowNodes.length - 1 && (
                  <>
                    <div className="flow-arrow-desktop">
                      <ArrowRight size={42} color="#2563eb" />
                    </div>
                    <div className="flow-arrow-mobile">
                      <ArrowDown size={38} color="#2563eb" />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Key Capabilities Section - 3 Columns (Highlighted Cards with Borders) */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "32px" }}>
            Key Capabilities
          </h2>

          <div className="key-capabilities-grid">
            {keyCapabilities.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                {/* Title */}
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0f172a", marginBottom: "14px", lineHeight: "1.35" }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "#475569", margin: 0, textAlign: "justify" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why AI Grinding Technology Section */}
        <div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "24px", lineHeight: "1.3" }}>
            Why AI Grinding Technology?
          </h2>

          <p style={{ fontSize: "1.08rem", lineHeight: "1.85", color: "#334155", marginBottom: "20px", textAlign: "justify" }}>
            Traditional grinding systems generally depend on fixed machine settings, operator observation and manual adjustments. During production, changes in raw material, moisture, machine load or temperature can affect grinding performance. Operators may need to monitor the process manually and make adjustments based on experience, which can lead to variation between batches, inconsistent particle size, excess heat, production losses and unexpected machine downtime.
          </p>

          <p style={{ fontSize: "1.08rem", lineHeight: "1.85", color: "#334155", marginBottom: "36px", textAlign: "justify" }}>
            <strong>AI Grinding Technology</strong> changes this approach by making the grinding process data-driven and continuously monitored. Instead of waiting for a problem to become visible, the system can monitor important process parameters in real time and compare them with defined product and machine conditions. Based on the configured control logic, it can help optimize parameters such as feed rate, temperature and machine operation while providing live production information to the operator.
          </p>

          {/* Comparison Table */}
          <div style={{ overflowX: "auto", marginBottom: "32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
              <thead>
                <tr style={{ background: "#0f172a", color: "#ffffff" }}>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "1.1rem", fontWeight: "700", width: "50%", borderRight: "1px solid #1e293b" }}>
                    Traditional Grinding
                  </th>
                  <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "1.1rem", fontWeight: "700", width: "50%", background: "#2563eb", color: "#ffffff" }}>
                    AI Grinding Technology
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? "#ffffff" : "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "16px 24px", color: "#64748b", fontSize: "1rem", fontWeight: "500", borderRight: "1px solid #e2e8f0" }}>
                      {row.traditional}
                    </td>
                    <td style={{ padding: "16px 24px", color: "#0f172a", fontSize: "1rem", fontWeight: "700", background: idx % 2 === 0 ? "rgba(37, 99, 235, 0.03)" : "rgba(37, 99, 235, 0.06)" }}>
                      ✓ {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.85", color: "#0f172a", fontWeight: "600", textAlign: "justify" }}>
            The result is a more connected and controlled grinding process — where the machine, production data and operator work together through one intelligent system.
          </p>
        </div>

      </div>
    </div>
  );
}



