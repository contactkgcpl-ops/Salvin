import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-grid-unified">
        <div className="footer-brand-col">
          <h3 className="footer-brand-title">SALVIN<br/>INDUSTRIES</h3>
          <p className="footer-brand-desc">
            Leading the transition to autonomous and sustainable industrial operations through rigorous engineering and innovation.
          </p>
          <ul className="footer-contact-list">
            <li>
              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span> info.salvinindustries@gmail.com</span>
            </li>
            <li>
              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+91 90239 79663 | +91 97127 77034 | +91 97126 77034</span>
            </li>
            <li>
              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>210, Arved Transcube Mall,<br/>Bandhu Nagar, Vijay Nagar,<br/>Ranip, Ahmedabad, Gujarat 382480</span>
            </li>
          </ul>
          <div className="footer-socials">
            <span className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
            <span className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </span>
            <span className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
            </span>
          </div>
        </div>
        
        <div className="footer-links-col">
          <h4>SERVICES</h4>
          <NavLink to="/services">Turnkey Plant Solutions</NavLink>
          <NavLink to="/services">Industrial Automation</NavLink>
          <NavLink to="/services">Maintenance & AMC</NavLink>
          <NavLink to="/services">Pneumatic Equipment</NavLink>
          <NavLink to="/services">Packaging Machinery</NavLink>
          <NavLink to="/services">Food Processing</NavLink>
        </div>

        <div className="footer-links-col">
          <h4>INDUSTRIES</h4>
          <NavLink to="/services">Food & Spices</NavLink>
          <NavLink to="/services">Pharmaceutical</NavLink>
          <NavLink to="/services">Chemical & API</NavLink>
          <NavLink to="/services">Agriculture</NavLink>
          <NavLink to="/services">Cosmetics</NavLink>
          <NavLink to="/services">Export Industries</NavLink>
        </div>

        <div className="footer-links-col">
          <h4>COMPANY</h4>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/about">Projects Portfolio</NavLink>
          <NavLink to="/services">Resources & Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/contact">International Offices</NavLink>
          <NavLink to="/contact">Careers</NavLink>
        </div>
      </div>
      
      <div className="footer-bottom-unified">
        <p>© 2026 <span className="highlight-salvin">salvin</span> industries. all rights reserved. | ahmedabad, gujarat, india</p>
        <div className="footer-bottom-links">
          <NavLink to="/contact">Privacy Policy</NavLink>
          <NavLink to="/contact">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
}
