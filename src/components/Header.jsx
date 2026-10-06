import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
const logo = "/assets/core/logo/salvin_logo.webp";

export default function Header({ isAdminAuthenticated, onAdminLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkStyle = {
    color: isScrolled || menuOpen ? "#000000" : "#ffffff",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    textShadow: isScrolled || menuOpen ? "none" : "0 1px 4px rgba(0,0,0,0.6)"
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-inner content-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="SALVIN" />
          </Link>
        </div>

        {/* Hamburger Button - visible only on mobile */}
        <button
          className={`hamburger-btn${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" style={{ background: isScrolled || menuOpen ? "#000" : "#fff" }} />
          <span className="hamburger-line" style={{ background: isScrolled || menuOpen ? "#000" : "#fff" }} />
          <span className="hamburger-line" style={{ background: isScrolled || menuOpen ? "#000" : "#fff" }} />
        </button>

        {/* Mobile overlay */}
        {menuOpen && (
          <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
        )}

        {/* Navigation links */}
        <nav className={`nav-links${menuOpen ? " nav-open" : ""}`}>
          <NavLink to="/" end style={navLinkStyle} onClick={() => setMenuOpen(false)}>HOME</NavLink>
          <NavLink to="/about" style={navLinkStyle} onClick={() => setMenuOpen(false)}>JOURNEY</NavLink>

          {/* SERVICES DROPDOWN */}
          <div 
            className={`nav-dropdown${servicesOpen ? " open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              style={{ ...navLinkStyle, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "4px" }}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              SERVICES <span style={{ fontSize: "9px" }}>▼</span>
            </button>
            <div className="nav-dropdown-menu">
              <NavLink to="/food-consultant" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Food Consultant
              </NavLink>
              <NavLink to="/food-business-planning-consultancy" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Food Business Planning &amp; Consultancy
              </NavLink>
              <NavLink to="/food-plant-design-engineering" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Food Plant Design &amp; Engineering
              </NavLink>
              <NavLink to="/machinery-technology-consultancy" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Machinery &amp; Technology Consultancy
              </NavLink>
              <NavLink to="/food-product-development" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Food Product Development
              </NavLink>
              <NavLink to="/food-safety-quality-consultancy" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Food Safety &amp; Quality Consultancy
              </NavLink>
              <NavLink to="/production-operational-excellence" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Production &amp; Operational Excellence
              </NavLink>
              <NavLink to="/supply-chain-consultancy" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Supply Chain Consultancy
              </NavLink>
              <NavLink to="/automation-industry-4-0" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Automation &amp; Industry 4.0
              </NavLink>
              <NavLink to="/contract-manufacturing-consultancy" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                Contract Manufacturing Consultancy
              </NavLink>
            </div>
          </div>

          <NavLink to="/turnkey-project" style={navLinkStyle} onClick={() => setMenuOpen(false)}>TURNKEY PROJECT</NavLink>
          <NavLink to="/automation-technology" style={navLinkStyle} onClick={() => setMenuOpen(false)}>AUTOMATION &amp; TECH</NavLink>
          <NavLink to="/machineries" style={navLinkStyle} onClick={() => setMenuOpen(false)}>MACHINERIES</NavLink>

          <NavLink to="/blogs" style={navLinkStyle} onClick={() => setMenuOpen(false)}>BLOGS</NavLink>
          <NavLink to="/careers" style={navLinkStyle} onClick={() => setMenuOpen(false)}>CAREERS</NavLink>

          <NavLink to="/contact" style={navLinkStyle} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
        </nav>
      </div>
    </header>
  );
}