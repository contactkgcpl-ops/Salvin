import React from "react";
import { NavLink } from "react-router-dom";
import blueMachinesImage from "../assets/blue-machines.png";

function TurnkeyPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section
        className="mach-hero"
        style={{ backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.82), rgba(9, 25, 56, 0.82)), url(${blueMachinesImage})` }}
      >
        <span className="mach-hero-badge">★ TURNKEY SOLUTIONS</span>
        <h1>Complete Turnkey<br />Plant Solutions</h1>
        <p>
          From concept to commissioning — Salvin Industries delivers end-to-end turnkey plant
          setups with precision engineering, automation integration, and full project management.
        </p>
        <div className="mach-hero-btns">
          <NavLink className="mach-hero-btn primary" to="/contact">START YOUR PROJECT</NavLink>
          <NavLink className="mach-hero-btn outline" to="/services">VIEW SOLUTIONS</NavLink>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="content-container">
          <div className="about-wrapper">
            <div className="about-left">
              <span className="tag">TURNKEY EXPERTISE</span>
              <h2>
                End-to-End <span>Plant Engineering</span><br />
                Since 2008
              </h2>
              <p className="desc">
                Salvin Industries specializes in complete turnkey project execution — from initial
                feasibility studies and plant layout design to equipment procurement, installation,
                and final commissioning.
              </p>
              <p className="desc">
                Our 200+ engineers bring expertise in mechanical design, robotics, PLC programming,
                and process automation to deliver projects on time and within budget.
              </p>
            </div>
            <div className="about-right">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" alt="factory" />
              <div className="badge">
                <h3>350+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="industry" id="process">
        <div className="content-container">
          <div className="industry-header">
            <div>
              <span className="tag">OUR PROCESS</span>
              <h2>How We Deliver Turnkey Projects</h2>
            </div>
            <p className="desc">
              A structured, milestone-driven approach ensuring predictable outcomes and zero surprises.
            </p>
          </div>
          <div className="industry-grid">
            {[
              { title: "Consultation & Feasibility", text: "We analyze your requirements, site conditions, and production goals to design the optimal plant blueprint." },
              { title: "Engineering & Design", text: "Detailed P&ID, layout drawings, and equipment specifications are prepared by our design team." },
              { title: "Procurement & Manufacturing", text: "Equipment is sourced or custom-built in-house with strict quality checks at every stage." },
              { title: "Installation & Commissioning", text: "On-site installation, testing, and handover with full documentation and operator training." },
              { title: "Automation & Integration", text: "PLC programming, SCADA setup, and robotic integration for smart, connected production." },
              { title: "Support & AMC", text: "Ongoing maintenance contracts and 24/7 technical support for uninterrupted operations." }
            ].map((item) => (
              <div className="card" key={item.title}>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-footer">
        <div className="cta-box">
          <h2>READY TO BUILD YOUR DREAM PLANT?</h2>
          <p>Explore how our legacy of precision engineering can optimize your next industrial project.</p>
          <NavLink to="/contact"><button>CONTACT US</button></NavLink>
        </div>
      </section>

    </div>
  );
}

export default TurnkeyPage;
