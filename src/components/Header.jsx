import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ isAdminAuthenticated, onAdminLogout }) {
  return (
    <header className="navbar" style={{ background: "#FFFFE7", color: "#000" }}>
      <div className="logo-container">
        <span className="logo-salvin">SΛLVIN</span>
        <span className="logo-industries">industries</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end style={{ color: "#000" }}>HOME</NavLink>
        <NavLink to="/about" style={{ color: "#000" }}>JOURNEY</NavLink>
        <NavLink to="/services" style={{ color: "#000" }}>TURNKEY PROJECT</NavLink>
        <NavLink to="/machineries" style={{ color: "#000" }}>MACHINERIES</NavLink>
        <NavLink to="/consultant" style={{ color: "#000" }}>CONSULTANT</NavLink>
        <NavLink to="/spares" style={{ color: "#000" }}>SPARES & SERVICE</NavLink>
        <NavLink to="/contact" style={{ color: "#000" }}>CONTACT US</NavLink>

        {isAdminAuthenticated && (
          <button className="nav-logout-btn" type="button" onClick={onAdminLogout}>
            LOGOUT
          </button>
        )}
      </nav>
    </header>
  );
}
