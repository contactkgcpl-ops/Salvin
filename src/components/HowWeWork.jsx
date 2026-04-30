import { FiLayers, FiCpu, FiShield, FiTool } from "react-icons/fi";

const steps = [
  { title: "Concept & Design", icon: FiLayers },
  { title: "Engineering", icon: FiCpu },
  { title: "Integration", icon: FiTool },
  { title: "Support", icon: FiShield }
];

export default function HowWeWork() {
  return (
    <section className="work-section" id="solutions">
      <div className="container section-header">
        <span className="section-label">How We Work</span>
        <h2>Structured process for complex industrial projects</h2>
      </div>
      <div className="work-grid">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div className="work-step" key={step.title}>
              <div className="step-icon">
                <Icon size={22} />
              </div>
              <h3>{step.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
