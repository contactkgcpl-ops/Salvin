import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from '../assets/salvin_logo.png';
import LanguageSelector from './LanguageSelector';

export default function Header({ isAdminAuthenticated, onAdminLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

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

  return (
    <header className="navbar" style={{ background: "white", color: "#000", fontWeight: "bold" }}>
      <div className="logo-container">
        <img src={logo} alt="SALVIN" srcSet="" />
      </div>

      {/* Hamburger Button - visible only on mobile */}
      <button
        className={`hamburger-btn${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Navigation links */}
      <nav className={`nav-links${menuOpen ? " nav-open" : ""}`}>
        <NavLink to="/" end style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>HOME</NavLink>
        <NavLink to="/about" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>JOURNEY</NavLink>

        {/* SERVICES DROPDOWN */}
        <div className={`nav-dropdown${servicesOpen ? " open" : ""}`}>
          <button
            type="button"
            className="nav-dropdown-trigger"
            style={{ color: "#000", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", padding: "0 10px", display: "inline-flex", alignItems: "center", gap: "4px" }}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            SERVICES <span style={{ fontSize: "9px" }}>▼</span>
          </button>
          <div className="nav-dropdown-menu">
            <NavLink to="/food-consultant" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
              Food Consultant
            </NavLink>
            <NavLink to="/consultant" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
              Industrial Consultant
            </NavLink>
          </div>
        </div>

        <NavLink to="/turnkey-project" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>TURNKEY PROJECT</NavLink>
        <NavLink to="/machineries" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>MACHINERIES</NavLink>
        {/* <a href="https://spares.salvinindia.com/" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>SPARES & SERVICE</a> */}
        <a
          href="https://spares.salvinindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
          onClick={() => {
            setMenuOpen(false);
            window.open("https://spares.salvinindia.com/", "_blank");
          }}>SPARES & SERVICE</a>

        <a
          href="https://salvinindustries.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
          onClick={() => {
            setMenuOpen(false);
            window.open("https://salvinindustries.blogspot.com/", "_blank");
          }}>BLOGS</a>

        <NavLink to="/contact" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
        <LanguageSelector />
      </nav>
    </header>
  );
}