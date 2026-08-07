import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blogs.css";

export default function BlogsPage() {
  const navigate = useNavigate();

  return (
    <div className="blogs-page-container">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="blogs-hero-content">
          <span className="blogs-badge">★ SALVIN KNOWLEDGE HUB</span>
          <h1>Industry Insights & Guides</h1>
          <p>
            Expert guidance, regulatory roadmaps, market statistics, and turnkey plant setup blueprints for ambitious food processing manufacturers in India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="blogs-section">
        <div className="blogs-content-wrapper">
          
          {/* Featured / Grid listing */}
          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <div
                className="blog-card clickable-card"
                key={post.id}
                onClick={() => navigate(`/blogs/${post.slug}`)}
              >
                <div className="blog-card-img-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <h2 className="blog-card-title">{post.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Turnkey Consultancy Callout */}
          <div className="blogs-cta-banner">
            <div className="blogs-cta-text">
              <h3>Planning to Start Your Food Processing Business?</h3>
              <p>
                Salvin Industries delivers complete turnkey food processing plant solutions — from factory layout, DPR & FSSAI guidance to customized high-performance machinery and commissioning.
              </p>
            </div>
            <NavLink to="/contact" className="blogs-cta-btn">
              Get Turnkey Consultation
            </NavLink>
          </div>

        </div>
      </section>
    </div>
  );
}
