import React from "react";
import { useNavigate } from "react-router-dom";
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
                  {post.excerpt && (
                    <p className="blog-card-excerpt">
                      {post.excerpt.length > 140 ? `${post.excerpt.slice(0, 140)}...` : post.excerpt}
                    </p>
                  )}
                  <div className="blog-card-footer">
                    <span className="read-more-btn">Read Article →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
}