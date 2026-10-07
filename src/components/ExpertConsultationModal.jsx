import React, { useState, useEffect } from 'react';
import './ExpertConsultationModal.css';

export default function ExpertConsultationModal({ isOpenOverride, onCloseOverride }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof isOpenOverride === 'boolean') {
      setIsOpen(isOpenOverride);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isOpenOverride]);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseOverride) {
      onCloseOverride();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const [errorMsg, setErrorMsg] = useState('');

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PHONE_REGEX = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your Name.');
      return;
    }

    const cleanPhone = (formData.phone || '').trim().replace(/[\s\-]/g, '');
    if (!formData.phone.trim() || !PHONE_REGEX.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    if (formData.email.trim() && !EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address (e.g. name@company.com).');
      return;
    }

    setIsSubmitting(true);

    // Save Lead data to localStorage
    try {
      const newLead = {
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        date: new Date().toLocaleString()
      };
      const existingLeads = JSON.parse(localStorage.getItem('salvin_consultation_leads') || '[]');
      existingLeads.unshift(newLead);
      localStorage.setItem('salvin_consultation_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Error saving lead data:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        if (onCloseOverride) onCloseOverride();
      }, 2500);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="ec-modal-backdrop" onClick={handleClose}>
      <div className="ec-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="ec-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Top Dark Navy Header */}
        <div className="ec-modal-header">
          <div className="ec-icon-badge">
            <svg viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
            </svg>
          </div>
          <h3 className="ec-modal-title">Get a Free Expert Consultation</h3>
          <p className="ec-modal-subtitle">
            Fill in your details and a verified consultant will reach out shortly.
          </p>
          <div className="ec-trust-badges">
            <span className="ec-badge-green">1,500+ Verified Experts</span>
            <span className="ec-badge-gray">🔒 100% Confidential + Free</span>
          </div>
        </div>

        {/* Body Content */}
        {submitted ? (
          <div className="ec-success-wrap">
            <div className="ec-success-icon">✓</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0b1c2c', margin: '0 0 8px 0', fontWeight: 700 }}>
              Request Submitted Successfully!
            </h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>
              Thank you {formData.name || 'there'}! Our expert will call you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="ec-modal-body">
            {/* Name Input */}
            <div className="ec-form-group">
              <label className="ec-form-label">Name / Company Name</label>
              <input
                type="text"
                name="name"
                className="ec-form-input"
                placeholder="Enter your full name or company"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className="ec-form-group">
              <label className="ec-form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="ec-form-input"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Mobile Number Input */}
            <div className="ec-form-group">
              <label className="ec-form-label">Mobile Number</label>
              <div className="ec-phone-input-group">
                <div className="ec-country-select">
                  <span>🇮🇳</span>
                  <span>+91</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>▼</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  className="ec-phone-input"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {errorMsg && (
              <div style={{ color: '#ef4444', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 500 }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Actions Row */}
            <div className="ec-actions-row">
              <button
                type="button"
                className="ec-btn-cancel"
                onClick={handleClose}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="ec-btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        )}

        {/* Footer Bar */}
        <div className="ec-modal-footer">
          <span>🛡️</span>
          <span>Trusted by 500+ MSMEs and manufacturers across India</span>
        </div>
      </div>
    </div>
  );
}
