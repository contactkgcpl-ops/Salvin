import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VendorRegistrationPage.css";

// State Code Mapping for Indian GSTIN
const GST_STATE_CODES = {
  "01": "Jammu & Kashmir", "02": "Himachal Pradesh", "03": "Punjab", "04": "Chandigarh",
  "05": "Uttarakhand", "06": "Haryana", "07": "Delhi", "08": "Rajasthan",
  "09": "Uttar Pradesh", "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh",
  "13": "Nagaland", "14": "Manipur", "15": "Mizoram", "16": "Tripura",
  "17": "Meghalaya", "18": "Assam", "19": "West Bengal", "20": "Jharkhand",
  "21": "Odisha", "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
  "25": "Daman & Diu", "26": "Dadra & Nagar Haveli", "27": "Maharashtra", "28": "Andhra Pradesh (Old)",
  "29": "Karnataka", "30": "Goa", "31": "Lakshadweep", "32": "Kerala",
  "33": "Tamil Nadu", "34": "Puducherry", "35": "Andaman & Nicobar", "36": "Telangana",
  "37": "Andhra Pradesh (New)", "38": "Ladakh"
};

export default function VendorRegistrationPage() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    // 1. Company Details
    companyName: "",
    vendorType: "",
    companyWebsite: "",
    companyEmail: "",
    companyPhone: "",
    registeredAddress: "",
    city: "",
    state: "",
    pincode: "",
    gstNumber: "",
    panNumber: "",

    // 2. Contact Person
    contactPersonName: "",
    designation: "",
    mobileNumber: "",
    whatsappNumber: "",
    emailId: "",
    alternateContactPerson: "",

    // 3. Products / Services
    productServiceCategory: "",
    catalogueFileName: "",
    catalogueFileBase64: "",

    // 4. Commercial Details
    paymentTerms: "",
    creditPeriod: "",
    quotationValidity: "",
    moq: "",
    deliveryLeadTime: "",
    pricingBasis: "",
    gstApplicable: "Yes",
    transportationTerms: "",

    // 6. Documents Upload
    gstCertFileName: "",
    gstCertFileBase64: "",
    panCardFileName: "",
    panCardFileBase64: "",

    // 7. Business References
    majorClients: "",
    existingIndustries: "",
    previousProjects: "",
    clientReference: "",

    // 8. Declaration & Approval
    declarationConfirmed: false,
    authorizedPersonName: "",
    authorizedDesignation: "",
    declarationDate: new Date().toISOString().split("T")[0],
    signatureFileName: "",
    signatureFileBase64: ""
  });

  // UI & Validation States
  const [gstValidationMsg, setGstValidationMsg] = useState(null);
  const [gstDetailsCard, setGstDetailsCard] = useState(null);
  const [panValidationMsg, setPanValidationMsg] = useState(null);
  const [pincodeLoading, setPincodeLoading] = useState(false);
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  // Entity Type Decoder
  const ENTITY_TYPES = {
    C: "Company (Private / Public Limited)",
    P: "Proprietorship / Individual",
    F: "Partnership / LLP Firm",
    H: "HUF (Hindu Undivided Family)",
    A: "Association of Persons (AOP)",
    T: "Trust",
    G: "Government Entity",
    L: "Local Authority",
    J: "Artificial Juridical Person"
  };

  // Validation Helpers
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PHONE_REGEX = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
  const URL_REGEX = /^(https?:\/\/)?([\w\d\-_]+\.)+[\w\d\-_]+(\/.*)?$/i;

  const isValidEmail = (email) => EMAIL_REGEX.test((email || "").trim());
  const isValidPhone = (phone) => PHONE_REGEX.test((phone || "").trim().replace(/[\s\-]/g, ''));

  // Handle Input Changes with Real-time Validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }

    // Dynamic Validations
    if (name === "gstNumber") {
      validateGST(value.toUpperCase());
    } else if (name === "panNumber") {
      validatePAN(value.toUpperCase());
    } else if (name === "pincode") {
      if (value.trim().length === 6 && /^\d{6}$/.test(value.trim())) {
        fetchPincodeDetails(value.trim());
      } else {
        setPincodeMsg("");
      }
    }
  };

  // Blur Handler for Instant Email/Phone Validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const val = (value || "").trim();

    if (name === "companyEmail" || name === "emailId") {
      if (val && !isValidEmail(val)) {
        setErrors((prev) => ({ ...prev, [name]: "Enter a valid email address (e.g. name@company.com)" }));
      }
    }

    if (name === "companyPhone" || name === "mobileNumber" || name === "whatsappNumber") {
      if (val && !isValidPhone(val)) {
        setErrors((prev) => ({ ...prev, [name]: "Enter a valid 10-digit mobile number starting with 6-9" }));
      }
    }

    if (name === "companyWebsite") {
      if (val && !URL_REGEX.test(val)) {
        setErrors((prev) => ({ ...prev, [name]: "Enter a valid website URL (e.g. https://www.example.com)" }));
      }
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    // 1. Company Details
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company/Firm Name is required";
    }

    if (!formData.vendorType) {
      newErrors.vendorType = "Select Vendor Type";
    }

    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Company Email is required";
    } else if (!isValidEmail(formData.companyEmail)) {
      newErrors.companyEmail = "Enter a valid email address (e.g. info@company.com)";
    }

    if (!formData.companyPhone.trim()) {
      newErrors.companyPhone = "Company Phone is required";
    } else if (!isValidPhone(formData.companyPhone)) {
      newErrors.companyPhone = "Enter a valid 10-digit mobile/phone number starting with 6-9";
    }

    if (formData.companyWebsite.trim() && !URL_REGEX.test(formData.companyWebsite.trim())) {
      newErrors.companyWebsite = "Enter a valid website URL (e.g. https://www.example.com)";
    }

    if (!formData.gstNumber.trim()) {
      newErrors.gstNumber = "GST Number is required";
    } else if (gstValidationMsg && !gstValidationMsg.valid) {
      newErrors.gstNumber = "Enter a valid 15-digit GSTIN";
    }

    if (formData.panNumber.trim() && panValidationMsg && !panValidationMsg.valid) {
      newErrors.panNumber = "Enter a valid 10-digit PAN Number";
    }

    // 2. Contact Person
    if (!formData.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact Person Name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!isValidPhone(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number starting with 6-9";
    }

    if (formData.whatsappNumber.trim() && !isValidPhone(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "Enter a valid 10-digit WhatsApp number starting with 6-9";
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email ID is required";
    } else if (!isValidEmail(formData.emailId)) {
      newErrors.emailId = "Enter a valid email address (e.g. person@company.com)";
    }

    // 3. Products/Services
    if (!formData.productServiceCategory.trim()) {
      newErrors.productServiceCategory = "Product/Service Category is required";
    }

    // 4. Commercial Details
    if (!formData.paymentTerms.trim()) {
      newErrors.paymentTerms = "Payment Terms are required";
    }

    // 6. Documents
    if (!formData.gstCertFileName) {
      newErrors.gstCertFileName = "GST Certificate upload is required";
    }

    // 8. Declaration
    if (!formData.declarationConfirmed) {
      newErrors.declarationConfirmed = "You must accept the declaration";
    }
    if (!formData.authorizedPersonName.trim()) {
      newErrors.authorizedPersonName = "Authorized Person Name is required";
    }
    if (!formData.authorizedDesignation.trim()) {
      newErrors.authorizedDesignation = "Authorized Person Designation is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    const refNumber = `VR-${Date.now().toString().slice(-6)}`;

    const submissionPayload = {
      id: Date.now().toString(),
      refNumber,
      submittedAt: new Date().toISOString(),
      status: "Pending",
      ...formData
    };

    try {
      // 1. Save to Database / localStorage
      const existingVendors = JSON.parse(localStorage.getItem("salvin_vendor_registrations") || "[]");
      localStorage.setItem("salvin_vendor_registrations", JSON.stringify([submissionPayload, ...existingVendors]));

      // 2. Send email via Formspree API (or mail server endpoint)
      await fetch("https://formspree.io/f/mlgpkkjj", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          subject: `New Vendor Registration: ${formData.companyName} (${refNumber})`,
          ...formData,
          refNumber
        })
      });

      setSubmitting(false);
      setSubmittedRef(refNumber);
    } catch (err) {
      console.error("Vendor registration error:", err);
      // Even if network fails for mail, vendor registration is saved locally
      setSubmitting(false);
      setSubmittedRef(refNumber);
    }
  };

  return (
    <div className="vr-standalone-wrapper">
      {/* Top Header Bar */}
      <header className="vr-topbar">
        <div className="vr-topbar-inner">
          <div className="vr-brand">
            <Link to="/">
              <img src="/assets/core/logo/salvin_logo.webp" alt="Salvin Industries" className="vr-logo" />
            </Link>
          </div>
          <Link to="/contact" className="vr-back-btn">
            ← Back to Website
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="vr-main-container">
        {submittedRef ? (
          <div className="vr-success-card">
            <div className="vr-success-icon">✓</div>
            <h2>Vendor Registration Submitted!</h2>
            <p className="vr-ref-text">Reference ID: <strong>{submittedRef}</strong></p>
            <p className="vr-success-desc">
              Thank you for registering with Salvin Industries. Your application has been received and stored in our procurement database. Our vendor onboarding team will review your credentials and contact you shortly.
            </p>
            <div className="vr-success-actions">
              <Link to="/contact" className="vr-btn vr-btn-primary">
                Return to Contact Us
              </Link>
              <button
                type="button"
                className="vr-btn vr-btn-outline"
                onClick={() => {
                  setSubmittedRef(null);
                  setFormData({
                    companyName: "", vendorType: "", companyWebsite: "", companyEmail: "", companyPhone: "",
                    registeredAddress: "", city: "", state: "", pincode: "", gstNumber: "", panNumber: "",
                    contactPersonName: "", designation: "", mobileNumber: "", whatsappNumber: "", emailId: "", alternateContactPerson: "",
                    productServiceCategory: "", catalogueFileName: "", catalogueFileBase64: "",
                    paymentTerms: "", creditPeriod: "", quotationValidity: "", moq: "", deliveryLeadTime: "", pricingBasis: "", gstApplicable: "Yes", transportationTerms: "",
                    gstCertFileName: "", gstCertFileBase64: "", panCardFileName: "", panCardFileBase64: "",
                    majorClients: "", existingIndustries: "", previousProjects: "", clientReference: "",
                    declarationConfirmed: false, authorizedPersonName: "", authorizedDesignation: "", declarationDate: new Date().toISOString().split("T")[0], signatureFileName: "", signatureFileBase64: ""
                  });
                }}
              >
                Submit Another Vendor
              </button>
            </div>
          </div>
        ) : (
          <div className="vr-form-wrapper">
            <div className="vr-form-header">
              <h1>Vendor Registration Form</h1>
              <p>Please fill in all mandatory details marked with (*) to register your company as an approved vendor/supplier for Salvin Industries.</p>
            </div>

            {Object.keys(errors).length > 0 && (
              <div className="vr-error-summary">
                ⚠️ Please complete all required fields correctly before submitting.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="vr-form">
              
              {/* 1. COMPANY DETAILS */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">1</span> Company Details</h2>
                <div className="vr-grid vr-grid-2">
                  
                  <div className="vr-field">
                    <label>Company / Firm Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Engineering Solutions Pvt Ltd"
                      className={errors.companyName ? "vr-input-error" : ""}
                    />
                    {errors.companyName && <span className="vr-error-msg">{errors.companyName}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Vendor Type *</label>
                    <select
                      name="vendorType"
                      value={formData.vendorType}
                      onChange={handleChange}
                      className={errors.vendorType ? "vr-input-error" : ""}
                    >
                      <option value="">-- Select Vendor Type --</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Trader">Trader</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Service Provider">Service Provider</option>
                      <option value="Contractor">Contractor</option>
                      <option value="Supplier">Supplier</option>
                    </select>
                    {errors.vendorType && <span className="vr-error-msg">{errors.vendorType}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Company Website</label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="https://www.example.com"
                      className={errors.companyWebsite ? "vr-input-error" : ""}
                    />
                    {errors.companyWebsite && <span className="vr-error-msg">{errors.companyWebsite}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Company Email *</label>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="info@company.com"
                      className={errors.companyEmail ? "vr-input-error" : ""}
                    />
                    {errors.companyEmail && <span className="vr-error-msg">{errors.companyEmail}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Company Phone *</label>
                    <input
                      type="tel"
                      name="companyPhone"
                      value={formData.companyPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 9876543210"
                      className={errors.companyPhone ? "vr-input-error" : ""}
                    />
                    {errors.companyPhone && <span className="vr-error-msg">{errors.companyPhone}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      maxLength="6"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="e.g. 380001 (Auto fetches City/State)"
                    />
                    {pincodeLoading && <span className="vr-hint-msg vr-hint-loading">⏳ Fetching location...</span>}
                    {pincodeMsg && <span className="vr-hint-msg">{pincodeMsg}</span>}
                  </div>

                  <div className="vr-field">
                    <label>City / District</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City / District"
                    />
                  </div>

                  <div className="vr-field">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                    />
                  </div>

                  <div className="vr-field vr-full-width">
                    <label>Registered Address *</label>
                    <textarea
                      name="registeredAddress"
                      rows="2"
                      value={formData.registeredAddress}
                      onChange={handleChange}
                      placeholder="Full street address, building, GIDC / Industrial area..."
                      className={errors.registeredAddress ? "vr-input-error" : ""}
                    ></textarea>
                    {errors.registeredAddress && <span className="vr-error-msg">{errors.registeredAddress}</span>}
                  </div>

                  <div className="vr-field vr-full-width">
                    <label>GST Number *</label>
                    <input
                      type="text"
                      name="gstNumber"
                      maxLength="15"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      placeholder="24AAAAA0000A1Z5"
                      className={errors.gstNumber ? "vr-input-error" : ""}
                    />
                    {gstValidationMsg && (
                      <span className={`vr-badge ${gstValidationMsg.valid ? "vr-badge-success" : "vr-badge-danger"}`}>
                        {gstValidationMsg.message}
                      </span>
                    )}
                    {errors.gstNumber && <span className="vr-error-msg">{errors.gstNumber}</span>}

                    {/* GST Live Details Card */}
                    {gstDetailsCard && (
                      <div className={`vr-gst-details-box ${gstDetailsCard.isActive === false ? "vr-gst-inactive-box" : ""}`}>
                        <div className="vr-gst-box-header">
                          <span className={`vr-gst-status-badge ${gstDetailsCard.isActive === false ? "vr-gst-status-danger" : ""}`}>
                            {gstDetailsCard.isActive === false ? "❌ GSTIN Inactive / Cancelled" : "✓ Active GSTIN Verified"}
                          </span>
                          <span className="vr-gst-state-badge">📍 {gstDetailsCard.stateName} (State Code: {gstDetailsCard.stateCode})</span>
                        </div>
                        {gstDetailsCard.companyName && (
                          <div style={{ marginBottom: "8px", fontSize: "14px", color: "#0b1a2c" }}>
                            <span className="vr-gst-label">Official Registered Name:</span> <strong style={{ color: "#0b1a2c", fontSize: "15px" }}>{gstDetailsCard.companyName}</strong>
                          </div>
                        )}
                        <div className="vr-gst-box-grid">
                          <div><span className="vr-gst-label">Embedded PAN:</span> <code className="vr-gst-code">{gstDetailsCard.pan}</code></div>
                          <div><span className="vr-gst-label">Entity Constitution:</span> <strong>{gstDetailsCard.entityType}</strong></div>
                          <div><span className="vr-gst-label">State Jurisdiction:</span> <strong>{gstDetailsCard.stateName}</strong></div>
                          <div>
                            <span className="vr-gst-label">Real GST Status:</span>{" "}
                            <strong style={{ color: gstDetailsCard.isActive === false ? "#dc2626" : "#16a34a" }}>
                              {gstDetailsCard.status || "Active"}
                            </strong>
                          </div>
                        </div>
                        {gstDetailsCard.address && (
                          <div style={{ marginTop: "8px", fontSize: "12px", color: "#334155" }}>
                            <span className="vr-gst-label">Registered Address:</span> {gstDetailsCard.address}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="vr-field">
                    <label>PAN Number (Optional)</label>
                    <input
                      type="text"
                      name="panNumber"
                      maxLength="10"
                      value={formData.panNumber}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                      className={errors.panNumber ? "vr-input-error" : ""}
                    />
                    {panValidationMsg && (
                      <span className={`vr-badge ${panValidationMsg.valid ? "vr-badge-success" : "vr-badge-danger"}`}>
                        {panValidationMsg.message}
                      </span>
                    )}
                    {errors.panNumber && <span className="vr-error-msg">{errors.panNumber}</span>}
                  </div>

                </div>
              </div>

              {/* 2. CONTACT PERSON */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">2</span> Contact Person</h2>
                <div className="vr-grid vr-grid-2">
                  <div className="vr-field">
                    <label>Contact Person Name *</label>
                    <input
                      type="text"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={errors.contactPersonName ? "vr-input-error" : ""}
                    />
                    {errors.contactPersonName && <span className="vr-error-msg">{errors.contactPersonName}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Sales Manager, Managing Director"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 9876543210"
                      className={errors.mobileNumber ? "vr-input-error" : ""}
                    />
                    {errors.mobileNumber && <span className="vr-error-msg">{errors.mobileNumber}</span>}
                  </div>

                  <div className="vr-field">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 9876543210"
                      className={errors.whatsappNumber ? "vr-input-error" : ""}
                    />
                    {errors.whatsappNumber && <span className="vr-error-msg">{errors.whatsappNumber}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Email ID *</label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="person@company.com"
                      className={errors.emailId ? "vr-input-error" : ""}
                    />
                    {errors.emailId && <span className="vr-error-msg">{errors.emailId}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Alternate Contact Person</label>
                    <input
                      type="text"
                      name="alternateContactPerson"
                      value={formData.alternateContactPerson}
                      onChange={handleChange}
                      placeholder="Name & Contact Number"
                    />
                  </div>
                </div>
              </div>

              {/* 3. PRODUCTS / SERVICES */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">3</span> Products / Services</h2>
                <div className="vr-grid vr-grid-2">
                  <div className="vr-field vr-full-width">
                    <label>Product / Service Category *</label>
                    <textarea
                      name="productServiceCategory"
                      rows="2"
                      value={formData.productServiceCategory}
                      onChange={handleChange}
                      placeholder="e.g. Stainless Steel Pipes SS304/SS316, Electrical Control Panels, Conveyors, CNC Machining Services..."
                      className={errors.productServiceCategory ? "vr-input-error" : ""}
                    ></textarea>
                    {errors.productServiceCategory && <span className="vr-error-msg">{errors.productServiceCategory}</span>}
                  </div>

                  <div className="vr-field vr-full-width">
                    <label>Product Catalogue / Brochure (PDF/Image)</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      onChange={(e) => handleFileUpload(e, "catalogueFileBase64", "catalogueFileName")}
                    />
                    {formData.catalogueFileName && (
                      <span className="vr-file-name">Selected: {formData.catalogueFileName}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* 4. COMMERCIAL DETAILS */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">4</span> Commercial Details</h2>
                <div className="vr-grid vr-grid-2">
                  <div className="vr-field">
                    <label>Payment Terms *</label>
                    <input
                      type="text"
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleChange}
                      placeholder="e.g. 30% Advance, 70% Against Delivery / 30 Days Credit"
                      className={errors.paymentTerms ? "vr-input-error" : ""}
                    />
                    {errors.paymentTerms && <span className="vr-error-msg">{errors.paymentTerms}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Credit Period</label>
                    <input
                      type="text"
                      name="creditPeriod"
                      value={formData.creditPeriod}
                      onChange={handleChange}
                      placeholder="e.g. 15 Days / 30 Days / Immediate"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Quotation Validity</label>
                    <input
                      type="text"
                      name="quotationValidity"
                      value={formData.quotationValidity}
                      onChange={handleChange}
                      placeholder="e.g. 30 Days"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Minimum Order Quantity (MOQ)</label>
                    <input
                      type="text"
                      name="moq"
                      value={formData.moq}
                      onChange={handleChange}
                      placeholder="e.g. 100 Units / 1000 Kgs"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Delivery / Lead Time</label>
                    <input
                      type="text"
                      name="deliveryLeadTime"
                      value={formData.deliveryLeadTime}
                      onChange={handleChange}
                      placeholder="e.g. 7-10 Days after PO"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Pricing Basis</label>
                    <input
                      type="text"
                      name="pricingBasis"
                      value={formData.pricingBasis}
                      onChange={handleChange}
                      placeholder="e.g. Ex-Factory / FOR Destination"
                    />
                  </div>

                  <div className="vr-field">
                    <label>GST Applicable – Yes/No</label>
                    <select
                      name="gstApplicable"
                      value={formData.gstApplicable}
                      onChange={handleChange}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="vr-field">
                    <label>Transportation Terms</label>
                    <input
                      type="text"
                      name="transportationTerms"
                      value={formData.transportationTerms}
                      onChange={handleChange}
                      placeholder="e.g. Vendor Scope / Client Scope"
                    />
                  </div>
                </div>
              </div>

              {/* 6. DOCUMENTS UPLOAD */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">6</span> Documents Upload</h2>
                <div className="vr-grid vr-grid-2">
                  <div className="vr-field">
                    <label>GST Certificate * (PDF/Image)</label>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => handleFileUpload(e, "gstCertFileBase64", "gstCertFileName")}
                      className={errors.gstCertFileName ? "vr-input-error" : ""}
                    />
                    {formData.gstCertFileName && (
                      <span className="vr-file-name">Selected: {formData.gstCertFileName}</span>
                    )}
                    {errors.gstCertFileName && <span className="vr-error-msg">{errors.gstCertFileName}</span>}
                  </div>

                  <div className="vr-field">
                    <label>PAN Card (Optional, PDF/Image)</label>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => handleFileUpload(e, "panCardFileBase64", "panCardFileName")}
                      className={errors.panCardFileName ? "vr-input-error" : ""}
                    />
                    {formData.panCardFileName && (
                      <span className="vr-file-name">Selected: {formData.panCardFileName}</span>
                    )}
                    {errors.panCardFileName && <span className="vr-error-msg">{errors.panCardFileName}</span>}
                  </div>
                </div>
              </div>

              {/* 7. BUSINESS REFERENCES */}
              <div className="vr-section">
                <h2 className="vr-section-title"><span className="vr-sec-num">7</span> Business References</h2>
                <div className="vr-grid vr-grid-2">
                  <div className="vr-field vr-full-width">
                    <label>Major Clients / Customers</label>
                    <textarea
                      name="majorClients"
                      rows="2"
                      value={formData.majorClients}
                      onChange={handleChange}
                      placeholder="List key corporate or industrial clients served..."
                    ></textarea>
                  </div>

                  <div className="vr-field">
                    <label>Existing Industries Served</label>
                    <input
                      type="text"
                      name="existingIndustries"
                      value={formData.existingIndustries}
                      onChange={handleChange}
                      placeholder="e.g. Food & Beverage, Pharma, FMCG, Chemical"
                    />
                  </div>

                  <div className="vr-field">
                    <label>Previous Project Details</label>
                    <input
                      type="text"
                      name="previousProjects"
                      value={formData.previousProjects}
                      onChange={handleChange}
                      placeholder="Brief details of past supply contracts"
                    />
                  </div>

                  <div className="vr-field vr-full-width">
                    <label>Client Reference / Contact (optional)</label>
                    <input
                      type="text"
                      name="clientReference"
                      value={formData.clientReference}
                      onChange={handleChange}
                      placeholder="Client Name, Company & Mobile Number for verification"
                    />
                  </div>
                </div>
              </div>

              {/* 8. DECLARATION & APPROVAL */}
              <div className="vr-section vr-declaration-box">
                <h2 className="vr-section-title"><span className="vr-sec-num">8</span> Declaration &amp; Approval</h2>
                
                <div className="vr-checkbox-field">
                  <label className="vr-checkbox-label">
                    <input
                      type="checkbox"
                      name="declarationConfirmed"
                      checked={formData.declarationConfirmed}
                      onChange={handleChange}
                    />
                    <span>I confirm that all the information provided above is correct, true and complete to the best of my knowledge.</span>
                  </label>
                  {errors.declarationConfirmed && <span className="vr-error-msg">{errors.declarationConfirmed}</span>}
                </div>

                <div className="vr-grid vr-grid-2" style={{ marginTop: "1rem" }}>
                  <div className="vr-field">
                    <label>Authorized Person Name *</label>
                    <input
                      type="text"
                      name="authorizedPersonName"
                      value={formData.authorizedPersonName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={errors.authorizedPersonName ? "vr-input-error" : ""}
                    />
                    {errors.authorizedPersonName && <span className="vr-error-msg">{errors.authorizedPersonName}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Designation *</label>
                    <input
                      type="text"
                      name="authorizedDesignation"
                      value={formData.authorizedDesignation}
                      onChange={handleChange}
                      placeholder="Director / Partner / Proprietor"
                      className={errors.authorizedDesignation ? "vr-input-error" : ""}
                    />
                    {errors.authorizedDesignation && <span className="vr-error-msg">{errors.authorizedDesignation}</span>}
                  </div>

                  <div className="vr-field">
                    <label>Date *</label>
                    <input
                      type="date"
                      name="declarationDate"
                      value={formData.declarationDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="vr-field">
                    <label>Digital Signature / Signature Upload</label>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf"
                      onChange={(e) => handleFileUpload(e, "signatureFileBase64", "signatureFileName")}
                    />
                    {formData.signatureFileName && (
                      <span className="vr-file-name">Selected: {formData.signatureFileName}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="vr-submit-container">
                <button type="submit" className="vr-submit-btn" disabled={submitting}>
                  {submitting ? "SUBMITTING VENDOR REGISTRATION..." : "SUBMIT FOR APPROVAL"}
                </button>
              </div>

            </form>
          </div>
        )}
      </main>
    </div>
  );
}
