import React, { useState } from "react";
import { FaBuilding, FaEnvelope, FaIndustry, FaPhoneAlt, FaUser } from "react-icons/fa";
import salvinLogo from "../assets/salvin_logo.png";
import "./LoginGate.css";

const CORPORATE_URL = "http://72.60.108.5/";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

export default function LoginGate({ onVisitorEnter }) {
  const [role, setRole] = useState("visitor");
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleCorporateRedirect() {
    window.location.href = CORPORATE_URL;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (role === "corporate") {
      handleCorporateRedirect();
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = normalizePhone(form.phone);

    if (name.length < 2) {
      setError("Enter valid name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Enter valid email address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setError("Enter valid phone number.");
      return;
    }

    setError("");
    onVisitorEnter({
      name,
      email,
      phone,
      company: form.company.trim(),
      role: "visitor",
      enteredAt: new Date().toISOString(),
    });
  }

  return (
    <main className="login-gate" aria-label="Website access">
      <section className="login-shell">
        <div className="login-brand-panel">
          <img src={salvinLogo} alt="Salvin Industries" className="login-logo" />
          <span className="login-kicker">Access Portal</span>
          <h1>Welcome to Salvin Industries</h1>
          <p>Choose your role to continue.</p>
        </div>

        <form className="login-card" onSubmit={handleSubmit}>
          <div className="role-toggle" role="radiogroup" aria-label="Select role">
            <button
              type="button"
              className={role === "visitor" ? "active" : ""}
              onClick={() => {
                setRole("visitor");
                setError("");
              }}
              aria-pressed={role === "visitor"}
            >
              <FaUser aria-hidden="true" />
              Visitor
            </button>
            <button
              type="button"
              className={role === "corporate" ? "active" : ""}
              onClick={() => {
                setRole("corporate");
                setError("");
              }}
              aria-pressed={role === "corporate"}
            >
              <FaBuilding aria-hidden="true" />
              Corporate
            </button>
          </div>

          {role === "corporate" ? (
            <div className="corporate-panel">
              <FaIndustry aria-hidden="true" />
              <h2>Corporate Access</h2>
              <p>Continue to corporate portal.</p>
              <button type="submit" className="login-submit">
                Open Corporate Portal
              </button>
            </div>
          ) : (
            <>
              <label>
                Full Name
                <span className="login-input-wrap">
                  <FaUser aria-hidden="true" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter full name"
                    autoComplete="name"
                    required
                  />
                </span>
              </label>

              <label>
                Email Address
                <span className="login-input-wrap">
                  <FaEnvelope aria-hidden="true" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                  />
                </span>
              </label>

              <label>
                Phone Number
                <span className="login-input-wrap">
                  <FaPhoneAlt aria-hidden="true" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    required
                  />
                </span>
              </label>

              <label>
                Company
                <span className="login-input-wrap">
                  <FaIndustry aria-hidden="true" />
                  <input
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </span>
              </label>

              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="login-submit">
                Enter Website
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}
