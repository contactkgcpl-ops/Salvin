import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-copy">
          <span className="hero-tag">Industrial Automation & Robotics</span>
          <h1>
            Intelligent Automation for <span>Plant Excellence</span>
          </h1>
          <p>
            Delivering end-to-end engineering, robotics integration and operational
            reliability for large-scale manufacturing plants.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contact">
              Get Started
            </a>
            <a className="btn btn-outline" href="#solutions">
              Explore Services
              <FiArrowRight className="icon-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
