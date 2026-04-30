import { FiAward, FiTrendingUp, FiClock, FiShield } from "react-icons/fi";

const benefits = [
  {
    title: "Proven delivery",
    text: "Structured execution across global industrial installations.",
    icon: FiAward
  },
  {
    title: "Optimized performance",
    text: "Systems designed for throughput, energy and safety.",
    icon: FiTrendingUp
  },
  {
    title: "Fast response",
    text: "On-site support and maintenance for uninterrupted operation.",
    icon: FiClock
  },
  {
    title: "Compliance-ready",
    text: "Engineered to meet industry and safety certifications.",
    icon: FiShield
  }
];

export default function WhyChooseUs() {
  return (
    <section className="choose-section" id="why">
      <div className="container section-header">
        <span className="section-label">Why leading manufacturers choose Salvin</span>
        <h2>Engineering clarity, reliability and industrial momentum.</h2>
      </div>
      <div className="choose-grid">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <div className="choose-card" key={item.title}>
              <div className="choose-icon">
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
