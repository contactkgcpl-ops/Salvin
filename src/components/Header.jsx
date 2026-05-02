import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../assets/salvin_logo.jpg';

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
    <header className="navbar" style={{ background: "white", color: "#000",fontWeight: "bold" }}>
      <div className="logo-container">
        <img src={logo} alt="SALVIN" srcset="" />
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
        <NavLink to="/services" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>TURNKEY PROJECT</NavLink>
        <NavLink to="/machineries" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>MACHINERIES</NavLink>
        <NavLink to="/services" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>CONSULTANT</NavLink>
        <NavLink to="/spares" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>SPARES & SERVICE</NavLink>
        <NavLink to="/contact" style={{ color: "#000" }} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>

        {isAdminAuthenticated && (
          <button className="nav-logout-btn" type="button" onClick={() => { onAdminLogout(); setMenuOpen(false); }}>
            LOGOUT
          </button>
        )}
      </nav>
    </header>
  );
}
