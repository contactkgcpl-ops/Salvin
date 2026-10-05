import React from "react";
import { useNavigate } from "react-router-dom";
import "./AutomationTechnology.css";
import "../blogs/Blogs.css";

const aiGrindingImage = "/assets/core/heroes/ai_grinding_technology.png";

export default function AutomationTechnologyPage() {
  const navigate = useNavigate();

  return (
    <div className="automation-page-wrapper">
      {/* Hero Section */}
      <section 
        className="automation-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.75), rgba(9, 25, 56, 0.85)), url('/assets/core/heroes/automation-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: "135px 24px 95px"
        }}
      >
        <div className="automation-hero-content">
          <h1 style={{ fontSize: "3.2rem", letterSpacing: "1px", textTransform: "uppercase" }}>
            SALVIN AUTOMATION &amp; TECHNOLOGY
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="content-container" style={{ paddingTop: "40px" }}>
        <div className="blogs-grid" style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            className="blog-card clickable-card"
            style={{ width: "fit-content", maxWidth: "100%", borderRadius: "0px" }}
            onClick={() => navigate("/automation-technology/ai-grinding-technology")}
          >
            <div className="blog-card-img-wrapper" style={{ height: "auto", width: "100%", borderRadius: "0px" }}>
              <img
                src={aiGrindingImage}
                alt="AI Grinding Technology"
                className="blog-card-img"
                style={{ width: "440px", height: "auto", display: "block", objectFit: "contain" }}
              />
            </div>
            <div className="blog-card-body" style={{ padding: "18px 24px" }}>
              <h2 className="blog-card-title" style={{ fontSize: "1.35rem", fontWeight: "700" }}>AI Grinding Technology</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
