import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from '../assets/salvin_logo.png';
import LanguageSelector from './LanguageSelector';

export default function Header({ isAdminAuthenticated, onAdminLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
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
        <NavLink to="/turnkey-project" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>TURNKEY PROJECT</NavLink>
        <NavLink to="/machineries" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>MACHINERIES</NavLink>
        <NavLink to="/consultant" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>CONSULTANT</NavLink>
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
        }}>BLOGSPOT</a>
        
        <NavLink to="/contact" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
        <LanguageSelector />
      </nav>
    </header>
  );
}