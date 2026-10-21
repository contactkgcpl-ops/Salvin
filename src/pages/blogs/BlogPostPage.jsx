import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blogs.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = post.metaTitle || `${post.title} | Salvin Industries`;
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog Post Not Found</h2>
        <NavLink to="/blogs" className="back-link">← Back to Blogs</NavLink>
      </div>
    );
  }

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
      
      {/* Main Body Grid */}
      <div className="foodsure-main-container">
        <div className="foodsure-grid-layout">
          
          {/* Article Main */}
          <main className="foodsure-article-main">
            
            {/* Title at the very top */}
            <h1 className="foodsure-article-title">{post.title}</h1>
            {post.author && (
              <div className="foodsure-author-line">
                <span>👤 {post.author}</span>
                {post.publishedDate && <span> • 📅 {post.publishedDate}</span>}
              </div>
            )}

            {/* Below Title: 2-Column Split (Image Left, Content Right) */}
            <div className="foodsure-hero-split">
              {post.image && (
                <div className="foodsure-hero-img-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="foodsure-hero-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              <div className="foodsure-hero-content-col">
                {post.excerpt && (
                  <div className="foodsure-intro-lead">
                    <p>{post.excerpt}</p>
                  </div>
                )}
                {post.stats && post.stats.length > 0 && (
                  <div className="foodsure-hero-stats-grid">
                    {post.stats.slice(0, 4).map((st, idx) => (
                      <div className="foodsure-hero-stat-box" key={idx}>
                        <div className="stat-val">{st.value}</div>
                        <div className="stat-lbl">{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                {section.table && (
                  <div className="foodsure-table-box">
                    <table className="foodsure-investment-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((h, idx) => (
                            <th key={idx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 1 ? "zebra-bg" : ""}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={cIdx === 1 || cIdx === 2 ? "highlight-price" : ""}>
                                {parseBold(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

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
                <h2>{post.ctaTitle || post.title} 🚀</h2>
                <p>{post.ctaSubtitle || "Get complete plant layout design, machinery cost estimation & turnkey setup support from Salvin Industries experts."}</p>
                
                <div className="foodsure-cta-buttons">
                  <a
                    href={`https://wa.me/919023979663?text=Hi%20Salvin%20Industries,%20I%20want%20information%20on%20${encodeURIComponent(post.shortTitle || post.title)}.`}
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
            {(post.faqs && post.faqs.length > 0) && (
              <section className="foodsure-faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="foodsure-faq-list">
                  {post.faqs.map((faq, idx) => (
                    <div className="faq-item" key={idx}>
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </main>


        </div>
      </div>

    </div>
  );
}
