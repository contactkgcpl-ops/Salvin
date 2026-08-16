import React from "react";
import { NavLink } from "react-router-dom";
const foodProcessingPlant = "/assets/core/icons/food-processing-plant.webp";

function TurnkeyPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">


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
