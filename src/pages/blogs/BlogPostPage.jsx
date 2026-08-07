import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blogs.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    country: "India",
    service: "Food Processing Turnkey Plant",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog Post Not Found</h2>
        <NavLink to="/blogs" className="back-link">← Back to Blogs</NavLink>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        country: "India",
        service: "Food Processing Turnkey Plant",
        message: ""
      });
    }, 4000);
  };

  const parseBold = (text) => {
    if (!text) return "";
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="foodsure-blog-wrapper">
      
      {/* Top Banner Header */}
      <div className="foodsure-blog-header">
        <div className="foodsure-header-container">
          <nav className="foodsure-breadcrumb">
            <NavLink to="/">Home</NavLink> &nbsp;›&nbsp;
            <NavLink to="/blogs">Blogs</NavLink> &nbsp;›&nbsp;
            <span>{post.shortTitle || post.title}</span>
          </nav>
          
          <h1 className="foodsure-blog-title">{post.title}</h1>
          
          <div className="foodsure-header-meta">
            <span className="meta-pill">📅 Posted On: <strong>{post.publishedDate}</strong></span>
            <span className="meta-pill">👤 Author: <strong>{post.author}</strong></span>
            <span className="meta-pill">⏱️ Reading Time: <strong>{post.readTime}</strong></span>
            <button className="foodsure-share-btn" onClick={handleShare}>
              {copied ? "✓ Link Copied!" : "🔗 Share Article"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="foodsure-main-container">
        <div className="foodsure-grid-layout">
          
          {/* Article Main Left Column */}
          <main className="foodsure-article-main">
            
            {/* Featured Hero Image */}
            {post.image && (
              <div className="foodsure-featured-img-box">
                <img
                  src={post.image}
                  alt={post.title}
                  className="foodsure-featured-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Quick Executive Intro */}
            <div className="foodsure-intro-lead">
              <p>{post.excerpt}</p>
            </div>

            {/* Article Content Sections */}
            {post.sections && post.sections.map((section) => (
              <section id={section.id} key={section.id} className="foodsure-section-block">
                <h2 className="foodsure-section-heading">{section.title}</h2>
                
                {section.content && <p className="foodsure-text-p">{parseBold(section.content)}</p>}
                {section.intro && <p className="foodsure-text-p">{parseBold(section.intro)}</p>}

                {/* Key Numbers / Stats Cards */}
                {section.id === "the-numbers" && post.stats && (
                  <div className="foodsure-stats-banner">
                    {post.stats.map((st, idx) => (
                      <div className="foodsure-stat-card" key={idx}>
                        <div className="foodsure-stat-val">{st.value}</div>
                        <div className="foodsure-stat-lbl">{st.label}</div>
                        <div className="foodsure-stat-sub">{st.subtext}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet list */}
                {section.bulletPoints && (
                  <ul className="foodsure-bullet-list">
                    {section.bulletPoints.map((bp, idx) => (
                      <li key={idx}>{parseBold(bp)}</li>
                    ))}
                  </ul>
                )}

                {/* Business Models Cards */}
                {section.models && (
                  <div className="foodsure-models-container">
                    {section.models.map((model, idx) => (
                      <div className="foodsure-model-card" key={idx}>
                        <div className="model-badge-tag">Model 0{idx + 1}</div>
                        <h3>{model.name}</h3>
                        <p>{model.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Licenses List */}
                {section.licenses && (
                  <div className="foodsure-licenses-grid">
                    {section.licenses.map((lic, idx) => (
                      <div className="foodsure-license-card" key={idx}>
                        <div className="lic-num">{idx + 1}</div>
                        <div className="lic-info">
                          <h4>{lic.title.replace(/^\d+\.\s*/, '')}</h4>
                          <p>{lic.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* General Steps List */}
                {section.list && (
                  <ul className="foodsure-check-list">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{parseBold(item)}</li>
                    ))}
                  </ul>
                )}

                {/* Investment Cost Table */}
                {section.costTable && (
                  <div className="foodsure-table-box">
                    <table className="foodsure-investment-table">
                      <thead>
                        <tr>
                          <th>Business Scale</th>
                          <th>Capital Floor (Min)</th>
                          <th>Capital Ceiling (Max)</th>
                          <th>Primary Equipment Profile</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.costTable.map((row, idx) => {
                          const parts = row.capital.split("–");
                          const minCap = parts[0] ? parts[0].trim() : row.capital;
                          const maxCap = parts[1] ? parts[1].trim() : "Custom";
                          return (
                            <tr key={idx} className={idx % 2 === 1 ? "zebra-bg" : ""}>
                              <td><strong>{row.scale}</strong></td>
                              <td className="highlight-price">{minCap}</td>
                              <td className="highlight-price">{maxCap}</td>
                              <td>{row.equipment}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.disclaimer && (
                  <p className="foodsure-disclaimer-note">{section.disclaimer}</p>
                )}

                {/* Funding sources */}
                {section.fundingSources && (
                  <div className="foodsure-funding-card">
                    <h4>💡 Government Schemes & Funding Options</h4>
                    <ul className="foodsure-check-list">
                      {section.fundingSources.map((f, idx) => (
                        <li key={idx}>{parseBold(f)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.note && (
                  <div className="foodsure-callout-box">
                    <span className="callout-icon">📌</span>
                    <span className="callout-text">{parseBold(section.note)}</span>
                  </div>
                )}

                {section.conclusion && (
                  <p className="foodsure-conclusion-text">{parseBold(section.conclusion)}</p>
                )}
              </section>
            ))}

            {/* In-Article WhatsApp & Consultation Widget */}
            <div className="foodsure-inarticle-cta">
              <div className="foodsure-cta-card-inner">
                <h2>How to Start a Food Processing Business in India 🚀</h2>
                <p>Get complete plant layout design, machinery cost estimation & turnkey setup support from Salvin Industries experts.</p>
                
                <div className="foodsure-cta-buttons">
                  <a
                    href="https://wa.me/919898727796?text=Hi%20Salvin%20Industries,%20I%20want%20information%20on%20starting%20a%20food%20processing%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foodsure-btn-whatsapp"
                  >
                    💬 WhatsApp Now
                  </a>
                  <NavLink to="/contact" className="foodsure-btn-consult">
                    📩 Free Plant Consultation
                  </NavLink>
                </div>
              </div>
            </div>

            {/* FAQs Accordion / Section */}
            <section className="foodsure-faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="foodsure-faq-list">
                <div className="faq-item">
                  <h4>What is the minimum investment required to start a food processing business in India?</h4>
                  <p>The unit starts from ₹50,000 for home/micro setups up to ₹5 lakh - ₹20 lakh for small-scale commercial plants, depending on product category and automation levels.</p>
                </div>
                <div className="faq-item">
                  <h4>Is MSME registration mandatory for food businesses?</h4>
                  <p>It is not mandatory, but registering on the Udyam MSME portal unlocks government capital subsidies, lower bank loan interest rates, and priority sector lending.</p>
                </div>
                <div className="faq-item">
                  <h4>Which licenses are mandatory for food manufacturing?</h4>
                  <p>FSSAI License, GST Registration, Local Trade License, Factory License, and State Pollution Control Board NOC are mandatory for commercial operations.</p>
                </div>
                <div className="faq-item">
                  <h4>Which food processing categories offer highest profit margins in India?</h4>
                  <p>High-demand categories include spices grinding/blending, fruit & vegetable dehydration, dairy (paneer/ghee), snack foods, and ready-to-eat/cook packaging lines.</p>
                </div>
              </div>
            </section>

          </main>

          {/* Right Sidebar Column */}
          <aside className="foodsure-sidebar">
            
            {/* Widget 1: Article Quick Details Card */}
            <div className="foodsure-sidebar-widget widget-details">
              <h3 className="widget-header">Article Details</h3>
              <ul className="details-list">
                <li>
                  <span className="det-label">Posted On:</span>
                  <span className="det-val">📅 {post.publishedDate}</span>
                </li>
                <li>
                  <span className="det-label">Author:</span>
                  <span className="det-val">👤 {post.author}</span>
                </li>
                <li>
                  <span className="det-label">Estimated Reading Time:</span>
                  <span className="det-val">⏱️ {post.readTime}</span>
                </li>
              </ul>
            </div>

            {/* Widget 2: Sticky Contact / ROI Estimate Form */}
            <div className="foodsure-sidebar-widget widget-lead-form sticky-sidebar">
              <div className="form-header-badge">FREE PLANT CONSULTATION</div>
              <h3 className="form-title">Get Machinery & Plant Quote</h3>
              <p className="form-subtext">Fill in details below to receive expert advice & project cost estimation.</p>

              {formSubmitted ? (
                <div className="form-success-box">
                  ✅ Thank you! Our food plant consultant will call you back shortly.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="sidebar-form-elements">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email ID"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      placeholder="Company / Firm name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Product / Service</label>
                    <input
                      type="text"
                      placeholder="e.g. Spices / Fruit Juice Line"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Requirement Message</label>
                    <textarea
                      rows="3"
                      placeholder="Describe your plant capacity or requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="sidebar-submit-btn">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Widget 3: Table of Contents */}
            <div className="foodsure-sidebar-widget widget-toc">
              <h3 className="widget-header">Table of Contents</h3>
              <ul className="toc-nav-links">
                {post.sections && post.sections.map((sec) => (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`}>{sec.title}</a>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </div>

    </div>
  );
}
