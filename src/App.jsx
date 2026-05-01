import React, { useMemo, useState } from "react";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import machineCardsImage from "./assets/machine-cards.png";
import machineryLayoutImage from "./assets/machinery-layout.png";
import blueMachinesImage from "./assets/blue-machines.png";
import machineCardRefImage from "./assets/machine-card-ref.png";
import About from "./components/AboutSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

const serviceCards = [
  {
    title: "Turnkey Projects",
    text: "Complete end-to-end plant setup from concept to commissioning.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Machineries",
    text: "High-performance industrial machinery built for reliability and output.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Consultancy",
    text: "Process optimization, audits, and capacity planning by experts.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Automation & Robotices",
    text: "Smart automation and robotic integration for modern production lines.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Supply Chain",
    text: "Procurement and supply chain support with quality-first delivery.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Maintenance & Support",
    text: "Preventive maintenance and responsive support for uninterrupted operations.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Contract Packaging",
    text: "Flexible contract packaging with compliance, speed, and consistency.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
  }
];

const whyCards = [
  {
    title: "Decades of Expertise",
    text: "Over 25 years delivering industrial engineering and automation solutions.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Innovative Technology",
    text: "AI-driven robotics and IoT-enabled systems for future-ready operations.",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b82d16b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Global Support",
    text: "Dedicated technical support network serving plants across 30+ countries.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Quality Assurance",
    text: "ISO-aligned processes with strict quality and safety standards.",
    image:
      "https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=900&q=80"
  }
];

const testimonialCards = [
  {
    text: "\"Turnkey solution reduced downtime by 40%. Engineering precision unmatched.\"",
    name: "Rohan Mehta",
    role: "OPERATIONS DIRECTOR, APEX FOODS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
  },
  {
    text: "\"Robotic integration transformed our process. Support team was excellent.\"",
    name: "Ananya Sharma",
    role: "PLANT HEAD, GLOBAL PHARMA",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
  },
  {
    text: "\"Salvin's execution quality and post-installation support helped us scale production with confidence.\"",
    name: "Vikram Desai",
    role: "DIRECTOR, NEXA PACKAGING",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
  }
];

const initialMachineCategories = ["Processing", "API", "Food", "Pharmaceutical", "Spice Processing"];
const initialSpareCategories = ["Bottle", "Pouch", "Tube", "Wax", "End Drop"];

const processingCategories = ["API", "Food", "Pharmaceutical", "Spice Processing"];
const packagingCategories = ["Bottle", "Pouch", "Tube", "Wax", "End Drop"];

const initialMachines = [
  {
    machine_id: 1,
    machine_name: "Automatic Liquid Filling Machine",
    category_id: "Processing",
    subcategory: "Pharmaceutical",
    image_url: machineCardsImage,
    description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / LIQUID FILLING", "PHARMACEUTICAL"],
    specifications: {
      heads: "4-head SS 316 Construction",
      volumeRange: "15ml – 1000ml",
      controlSystem: "Siemens / Delta PLC",
      productionSpeed: "40-60 Containers/min"
    },
    priceRange: "1.90 CRORE",
    speed: "120 RPM",
    capacity: "33.99L",
    status: "active"
  },
  {
    machine_id: 2,
    machine_name: "Spice Grinding Machine",
    category_id: "Processing",
    subcategory: "Spice Processing",
    image_url: machineCardsImage,
    description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / GRINDING", "FOOD & SPICES"],
    specifications: {
      heads: "2-head SS 304 Construction",
      volumeRange: "50g – 5000g",
      controlSystem: "Delta PLC",
      productionSpeed: "80-120 Kg/hr"
    },
    priceRange: "1.90 CRORE",
    speed: "120 RPM",
    capacity: "30.5KG",
    status: "active"
  },
  {
    machine_id: 3,
    machine_name: "Tablet Coating Machine",
    category_id: "Processing",
    subcategory: "Pharmaceutical",
    image_url: machineCardsImage,
    description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / COATING", "PHARMACEUTICAL"],
    specifications: {
      heads: "Auto-spray SS 316 System",
      volumeRange: "5mm – 25mm tablet",
      controlSystem: "Siemens PLC",
      productionSpeed: "60-80 tablets/min"
    },
    priceRange: "1.90 CRORE",
    speed: "160 RPM",
    capacity: "33.99L",
    status: "active"
  },
  {
    machine_id: 4,
    machine_name: "Bottle Filling Machine",
    category_id: "Packaging",
    subcategory: "Bottle",
    image_url: machineCardRefImage,
    description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
    specifications: {
      heads: "6-head SS 316 Construction",
      volumeRange: "30ml – 1000ml",
      controlSystem: "Siemens / Delta PLC",
      productionSpeed: "60-80 Bottles/min"
    },
    priceRange: "1.56 CRORE",
    speed: "120 RPM",
    capacity: "33.99L",
    status: "active"
  },
  {
    machine_id: 5,
    machine_name: "Bottle Filling Machine",
    category_id: "Packaging",
    subcategory: "Bottle",
    image_url: machineCardRefImage,
    description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
    specifications: {
      heads: "8-head SS 316 Construction",
      volumeRange: "15ml – 500ml",
      controlSystem: "Delta PLC",
      productionSpeed: "80-100 Bottles/min"
    },
    priceRange: "1.56 CRORE",
    speed: "120 RPM",
    capacity: "33.99L",
    status: "active"
  },
  {
    machine_id: 6,
    machine_name: "Bottle Filling Machine",
    category_id: "Packaging",
    subcategory: "Bottle",
    image_url: machineCardRefImage,
    description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
    tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
    specifications: {
      heads: "4-head SS 304 Construction",
      volumeRange: "50ml – 2000ml",
      controlSystem: "Siemens PLC",
      productionSpeed: "30-50 Bottles/min"
    },
    priceRange: "1.56 CRORE",
    speed: "120 RPM",
    capacity: "33.99L",
    status: "active"
  }
];

const initialSpares = [
  {
    spare_id: 1,
    spare_name: "Capping Chuck Set",
    spare_category_id: "Bottle",
    image_url: machineCardsImage,
    description: "Stainless steel capping chuck with high wear resistance.",
    stock_quantity: 24,
    price: 3500
  },
  {
    spare_id: 2,
    spare_name: "Nozzle Assembly Kit",
    spare_category_id: "Tube",
    image_url: machineryLayoutImage,
    description: "Precision nozzle kit for filling station replacement.",
    stock_quantity: 12,
    price: 6200
  }
];

const ADMIN_CREDENTIALS = {
  adminId: "admin",
  password: "admin@123"
};

function ProtectedAdminRoute({ isAdminAuthenticated, children }) {
  const location = useLocation();
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace state={{ from: location }} />;
  }
  return children;
}

function AdminLoginPage({ onAdminLogin, isAdminAuthenticated }) {
  const location = useLocation();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectPath = location.state?.from?.pathname || "/admin-panel";

  if (isAdminAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = onAdminLogin(adminId, password);
    if (!isValid) {
      setErrorMessage("Invalid admin ID or password.");
      return;
    }
    setErrorMessage("");
  }

  return (
    <section className="admin-login page-section">
      <form className="card contact-form admin-login-form" onSubmit={handleSubmit}>
        <span className="section-badge">Restricted Access</span>
        <h1>Admin Login</h1>
        <p className="page-copy">Only authorized admin can access machine/spare management.</p>
        <label>
          Admin ID
          <input
            value={adminId}
            onChange={(event) => setAdminId(event.target.value)}
            placeholder="Enter admin ID"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </label>
        {errorMessage && <p className="admin-error-text">{errorMessage}</p>}
        <button className="card-btn" type="submit">Login</button>
      </form>
    </section>
  );
}

function MachineDetailModal({ machine, onClose }) {
  if (!machine) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-body">
          <div className="modal-image-wrap">
            <img src={machine.image_url || machineryLayoutImage} alt={machine.machine_name} />
          </div>
          <div className="modal-info">
            <div className="modal-tags">
              <span className="modal-tag outline">SERIES-{machine.machine_id}</span>
              <span className="modal-tag filled">PLC CONTROLLED</span>
            </div>
            <h2 className="modal-title">{machine.machine_name}</h2>
            <p className="modal-desc">{machine.description}</p>
            <h4 className="modal-spec-heading">Technical Specifications</h4>
            <table className="modal-spec-table">
              <tbody>
                <tr><td>Heads</td><td>{machine.specifications?.heads || "-"}</td></tr>
                <tr><td>Volume Range</td><td>{machine.specifications?.volumeRange || "-"}</td></tr>
                <tr><td>Control System</td><td>{machine.specifications?.controlSystem || "-"}</td></tr>
                <tr><td>Production Speed</td><td>{machine.specifications?.productionSpeed || "-"}</td></tr>
              </tbody>
            </table>
            <button className="modal-cta-btn">CONFIGURE THIS MODEL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpareDetailModal({ spare, onClose }) {
  if (!spare) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-body">
          <div className="modal-image-wrap">
            <img src={spare.image_url || machineCardsImage} alt={spare.spare_name} />
          </div>
          <div className="modal-info">
            <div className="modal-tags">
              <span className="modal-tag outline">SPARE-{spare.spare_id}</span>
              <span className="modal-tag filled">{spare.spare_category_id}</span>
            </div>
            <h2 className="modal-title">{spare.spare_name}</h2>
            <p className="modal-desc">{spare.description}</p>
            <h4 className="modal-spec-heading">Details</h4>
            <table className="modal-spec-table">
              <tbody>
                <tr><td>Category</td><td>{spare.spare_category_id}</td></tr>
                <tr><td>Stock Available</td><td className={spare.stock_quantity > 10 ? "stock-good" : "stock-low"}>{spare.stock_quantity} units</td></tr>
                <tr><td>Price</td><td>₹{Number(spare.price).toLocaleString("en-IN")}</td></tr>
              </tbody>
            </table>
            <button className="modal-cta-btn">REQUEST QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MachineriesPage({ machines, machineCategories }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProcessing, setSelectedProcessing] = useState([]);
  const [selectedPackaging, setSelectedPackaging] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [selectedMachine, setSelectedMachine] = useState(null);

  const toggleFilter = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));
    } else {
      setter([...list, value]);
    }
  };

  const filteredMachines = useMemo(() => {
    let results = [...machines];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (m) =>
          m.machine_name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }

    if (selectedProcessing.length > 0) {
      results = results.filter(
        (m) => m.category_id === "Processing" && selectedProcessing.includes(m.subcategory)
      );
    }

    if (selectedPackaging.length > 0) {
      results = results.filter(
        (m) => m.category_id === "Packaging" && selectedPackaging.includes(m.subcategory)
      );
    }

    if (sortBy === "name-asc") {
      results.sort((a, b) => a.machine_name.localeCompare(b.machine_name));
    } else if (sortBy === "name-desc") {
      results.sort((a, b) => b.machine_name.localeCompare(a.machine_name));
    }

    return results;
  }, [machines, searchQuery, selectedProcessing, selectedPackaging, sortBy]);

  return (
    <section className="machineries-page-v2">
      {/* ——— HERO ——— */}
      <div
        className="mach-hero"
        style={{ backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.82), rgba(9, 25, 56, 0.82)), url(${blueMachinesImage})` }}
      >
        <span className="mach-hero-badge">★ EXPLORING THE FUTURE</span>
        <h1>Advanced Machinery<br />Solutions</h1>
        <p>
          Salvin Industries delivers engineered precision through high-performance
          automation and heavy-duty manufacturing systems. We empower global
          industrial leaders with reliability and technical expertise.
        </p>
        <div className="mach-hero-btns">
          <button className="mach-hero-btn primary">EXPLORE CATALOG</button>
          <button className="mach-hero-btn outline">OUR SHOWROOM</button>
        </div>
      </div>

      {/* ——— SECTION HEADER ——— */}
      <div className="mach-section-header">
        <div className="mach-section-left">
          <span className="mach-section-badge">← PRODUCTS</span>
          <h2>Processing &amp; Packaging Machinery</h2>
        </div>
        <p className="mach-section-desc">
          From turnkey plant setups to individual machine procurement, Salvin offers robust, low-maintenance equipment engineered for 24/7 production-line demands.
        </p>
      </div>

      {/* ——— MAIN CONTENT ——— */}
      <div className="mach-content">
        {/* SIDEBAR */}
        <aside className="mach-sidebar">
          <h3 className="mach-sidebar-title">Categories</h3>

          <h4 className="mach-sidebar-group">Processing</h4>
          {processingCategories.map((cat) => (
            <label key={cat} className="mach-checkbox-label">
              <input
                type="checkbox"
                checked={selectedProcessing.includes(cat)}
                onChange={() => toggleFilter(cat, selectedProcessing, setSelectedProcessing)}
              />
              {cat}
            </label>
          ))}

          <h4 className="mach-sidebar-group">Packaging</h4>
          {packagingCategories.map((cat) => (
            <label key={cat} className="mach-checkbox-label">
              <input
                type="checkbox"
                checked={selectedPackaging.includes(cat)}
                onChange={() => toggleFilter(cat, selectedPackaging, setSelectedPackaging)}
              />
              {cat}
            </label>
          ))}
        </aside>

        {/* RESULTS */}
        <div className="mach-results">
          <div className="mach-toolbar">
            <div className="mach-search-wrap">
              <span className="mach-search-icon">🔍</span>
              <input
                className="mach-search"
                type="text"
                placeholder="Search machinery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mach-sort-wrap">
              <label>Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
              </select>
            </div>
          </div>

          <div className="mach-results-header">
            <h3>Filtered Machinery <span className="mach-count">{filteredMachines.length} Results</span></h3>
          </div>

          <div className="mach-grid">
            {filteredMachines.map((machine) => (
              <article key={machine.machine_id} className="mach-card">
                <div className="mach-card-img">
                  <img src={machine.image_url || machineryLayoutImage} alt={machine.machine_name} />
                </div>
                <div className="mach-card-body">
                  <div className="mach-card-tags">
                    {machine.tags?.map((tag, i) => (
                      <span key={i} className={"mach-tag" + (i === 0 ? " orange" : " blue")}>{tag}</span>
                    ))}
                  </div>
                  <h4 className="mach-card-title">{machine.machine_name}</h4>
                  <p className="mach-card-desc">{machine.description}</p>
                  <div className="mach-card-specs">
                    <div className="mach-spec-item">
                      <span className="mach-spec-val">{machine.priceRange}</span>
                      <span className="mach-spec-lbl">{machine.speed}</span>
                      <span className="mach-spec-unit">{machine.capacity}</span>
                    </div>
                  </div>
                  <div className="mach-card-actions">
                    <a href="https://wa.me/919023979663" target="_blank" rel="noopener noreferrer" className="mach-btn quote">GET A QUOTE</a>
                    <button className="mach-btn view" onClick={() => setSelectedMachine(machine)}>VIEW MORE</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedMachine && (
        <MachineDetailModal machine={selectedMachine} onClose={() => setSelectedMachine(null)} />
      )}
    </section>
  );
}

function SparesPage({ spares, spareCategories }) {
  return (
    <section className="spares-page page-section">
      <div className="split-header">
        <div>
          <span className="section-badge">Spare Management</span>
          <h1>Spare Parts & Consumables</h1>
        </div>
        <p className="rating-copy">
          This page is currently unavailable.
        </p>
      </div>
    </section>
  );
}

function AdminPage({
  machineCategories,
  spareCategories,
  onAddMachineCategory,
  onAddSpareCategory,
  onAddMachine,
  onAddSpare,
  machines,
  spares,
  onDeleteMachine,
  onDeleteSpare
}) {
  const [machineForm, setMachineForm] = useState({
    machine_name: "",
    category_id: machineCategories[0] || "",
    image_url: "",
    description: "",
    specifications: "",
    status: "active"
  });
  const [spareForm, setSpareForm] = useState({
    spare_name: "",
    spare_category_id: spareCategories[0] || "",
    image_url: "",
    description: "",
    stock_quantity: "0",
    price: ""
  });
  const [machineCategoryName, setMachineCategoryName] = useState("");
  const [spareCategoryName, setSpareCategoryName] = useState("");

  function handleMachineSubmit(event) {
    event.preventDefault();
    onAddMachine(machineForm);
    setMachineForm({
      machine_name: "",
      category_id: machineCategories[0] || "",
      image_url: "",
      description: "",
      specifications: "",
      status: "active"
    });
  }

  function handleSpareSubmit(event) {
    event.preventDefault();
    onAddSpare(spareForm);
    setSpareForm({
      spare_name: "",
      spare_category_id: spareCategories[0] || "",
      image_url: "",
      description: "",
      stock_quantity: "0",
      price: ""
    });
  }

  return (
    <section className="admin-page page-section">
      <span className="section-badge">Admin</span>
      <h1>Machines / Spares Management</h1>
      <p className="page-copy">
        Add new records using your DB schema fields from the provided documentation.
      </p>

      <div className="admin-grid">
        <form className="card contact-form admin-form" onSubmit={handleMachineSubmit}>
          <h3 className="Add-title">Add Machine</h3>
          <label>Machine Name<input value={machineForm.machine_name} onChange={(e) => setMachineForm((prev) => ({ ...prev, machine_name: e.target.value }))} required /></label>
          <label>Category
            <select value={machineForm.category_id} onChange={(e) => setMachineForm((prev) => ({ ...prev, category_id: e.target.value }))}>
              {machineCategories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
          <label>Image URL<input value={machineForm.image_url} onChange={(e) => setMachineForm((prev) => ({ ...prev, image_url: e.target.value }))} /></label>
          <label>Description<textarea rows="3" value={machineForm.description} onChange={(e) => setMachineForm((prev) => ({ ...prev, description: e.target.value }))} /></label>
          <label>Specifications (JSON)<textarea rows="3" placeholder='{"output":"80 BPM","power":"440V"}' value={machineForm.specifications} onChange={(e) => setMachineForm((prev) => ({ ...prev, specifications: e.target.value }))} /></label>
          <label>Status
            <select value={machineForm.status} onChange={(e) => setMachineForm((prev) => ({ ...prev, status: e.target.value }))}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </label>
          <button className="card-btn" type="submit">Add Machine</button>
        </form>

        <form className="card contact-form admin-form" onSubmit={handleSpareSubmit}>
          <h3 className="Add-title">Add Spare</h3>
          <label>Spare Name<input value={spareForm.spare_name} onChange={(e) => setSpareForm((prev) => ({ ...prev, spare_name: e.target.value }))} required /></label>
          <label>Spare Category
            <select value={spareForm.spare_category_id} onChange={(e) => setSpareForm((prev) => ({ ...prev, spare_category_id: e.target.value }))}>
              {spareCategories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
          <label>Image URL<input value={spareForm.image_url} onChange={(e) => setSpareForm((prev) => ({ ...prev, image_url: e.target.value }))} /></label>
          <label>Description<textarea rows="3" value={spareForm.description} onChange={(e) => setSpareForm((prev) => ({ ...prev, description: e.target.value }))} /></label>
          <label>Stock Quantity<input type="number" min="0" value={spareForm.stock_quantity} onChange={(e) => setSpareForm((prev) => ({ ...prev, stock_quantity: e.target.value }))} required /></label>
          <label>Price<input type="number" min="0" step="0.01" value={spareForm.price} onChange={(e) => setSpareForm((prev) => ({ ...prev, price: e.target.value }))} required /></label>
          <button className="card-btn" type="submit">Add Spare</button>
        </form>

        <div className="card admin-side-card">
          <h3>Add Categories</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAddMachineCategory(machineCategoryName);
              setMachineCategoryName("");
            }}
          >
            <label>Machine Category<input value={machineCategoryName} onChange={(e) => setMachineCategoryName(e.target.value)} /></label>
            <button className="card-btn" type="submit">Add Category</button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAddSpareCategory(spareCategoryName);
              setSpareCategoryName("");
            }}
          >
            <label>Spare Category<input value={spareCategoryName} onChange={(e) => setSpareCategoryName(e.target.value)} /></label>
            <button className="card-btn" type="submit">Add Category</button>
          </form>
        </div>

        <div className="card admin-side-card">
          <h3>Manage Machines ({machines.length})</h3>
          <div className="admin-list">
            {machines.map((machine) => (
              <div key={machine.machine_id} className="admin-list-row">
                <div>
                  <strong>{machine.machine_name}</strong>
                  <p>{machine.category_id} | {machine.status}</p>
                </div>
                <button className="delete-btn" type="button" onClick={() => onDeleteMachine(machine.machine_id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="card admin-side-card">
          <h3>Manage Spares ({spares.length})</h3>
          <div className="admin-list">
            {spares.map((spare) => (
              <div key={spare.spare_id} className="admin-list-row">
                <div>
                  <strong>{spare.spare_name}</strong>
                  <p>{spare.spare_category_id} | Stock: {spare.stock_quantity} | ₹{Number(spare.price).toLocaleString("en-IN")}</p>
                </div>
                <button className="delete-btn" type="button" onClick={() => onDeleteSpare(spare.spare_id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqItems = [
    {
      question: "What type of industries does Salvin Serve?",
      answer:
        "We serve a wide range of industries including food & spices, pharmaceuticals, chemicals & APIs, dairy & beverages, FMCG, cosmetics, agriculture, and export-oriented manufacturing."
    },
    {
      question: "Do you offer complete turnkey plant setups or only individual machines?",
      answer: "We provide both turnkey solutions and individual machine setups based on your requirement."
    },
    {
      question: "What is your typical project delivery timeline?",
      answer: "Delivery timelines depend on project complexity, but typically range from 4 to 12 weeks."
    },
    {
      question: "Do you provide after-sales service and maintenance support?",
      answer: "Yes, we offer 24/7 support and AMC services for all installed systems."
    },
    {
      question: "Can your machine be integrated with existing plant systems?",
      answer: "Yes, our systems are designed for seamless integration with existing infrastructure."
    },
    {
      question: "Do you export machines internationally? What standards do you comply with?",
      answer: "Yes, we export globally and comply with ISO, CE, and other international standards."
    }
  ];

  const industryCards = [
    { title: "Turnkey Projects", text: "Complete end-to-end plant architecture, from conceptual blueprinting to installation and final commissioning.", image: serviceCards[0].image },
    { title: "Automation & Robotics", text: "Precision-engineered automated assembly lines and seamless robotic integration for smart factory ecosystems.", image: serviceCards[3].image },
    { title: "Processing & Packaging Machinery", text: "Hygienic, turnkey stainless steel processing lines engineered for dairy, beverage, and solid food manufacturing.", image: serviceCards[1].image },
    { title: "Packaging Machinery", text: "High-speed, multi-format pouch and bottle filling systems with advanced capping and labeling technologies.", image: serviceCards[1].image },
    { title: "Supply Chain", text: "Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.", image: serviceCards[4].image },
    { title: "Maintenance & Support", text: "Proactive annual maintenance contracts and 24/7 technical support to ensure zero-downtime production cycles.", image: serviceCards[5].image }
  ];

  const whyUsFeatures = [
    { icon: "⚙️", title: "Decades of Expertise", text: "Over 25 years of hands-on experience delivering complex industrial engineering and automation solutions." },
    { icon: "🚀", title: "Innovative Technology", text: "Utilizing AI-driven robotics and cutting-edge IoT frameworks to build future-ready manufacturing operations." },
    { icon: "🌍", title: "Global Support", text: "Our dedicated 24/7 technical support network and regional headquarters serve clients across 15+ countries." },
    { icon: "⭐", title: "Quality Assurance", text: "ISO 9001:2015 certified manufacturing processes ensuring the highest standards of precision and safety." }
  ];

  return (
    <div className="home-template">
      {/* HERO */}
      <section className="hero" id="home">
        <div className="overlay" />
        <div className="hero-content">
          <span className="tag">ENGINEERING THE FUTURE</span>
          <h1>
            Intelligent Automation &amp; <br />
            <span>Robotic Integration</span>
          </h1>
          <p>
            Turnkey plant setup, machinery, automation, and consulting- all under one group. Serving 30+ countries.
            Robust packaging lines for high-volume production. Salvin's machines handle liquids, powders and solids
            with surgical precision
          </p>
          <div className="buttons">
            <NavLink className="primary" to="/contact">START YOUR PROJECT</NavLink>
            <NavLink className="secondary" to="/services">VIEW OUR SOLUTIONS</NavLink>
          </div>
          <div className="stats">
            <div className="stat"><h2>350+</h2><p>Completed Projects</p></div>
            <div className="stat"><h2>30+</h2><p>Countries Served</p></div>
            <div className="stat"><h2>5000+</h2><p>Products Packaged</p></div>
          </div>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="industry" id="services">
        <div className="display-flex align-center industry-wrapper m-10">
          <div className="industry-header">
            <div>
              <span className="tag">SPECIALIZED VERTICALS</span>
              <h2>Industrial Business Divisions</h2>
            </div>
            <p className="desc">
              Targeted engineering expertise across sectors with a relentless focus on operational efficiency and
              scalable architecture.
            </p>
          </div>
          <div className="industry-grid">
            {industryCards.map((item) => (
              <div className="card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <NavLink to="/services">VIEW SOLUTIONS →</NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="display-flex align-center industry-wrapper m-10">
          <div className="about-wrapper">
            <div className="about-left">
              <span className="tag">ABOUT THE COMPANY</span>
              <h2>
                Engineering <span>India's Industrial</span><br />
                Future Since 2008
              </h2>
              <p className="desc">
                Salvin Industries is a leading turnkey automation and packaging machinery group headquartered in
                Ahmedabad, Gujarat, India.
              </p>
              <p className="desc">
                Our team of 200+ engineers brings together expertise in mechanical design, robotics, PLC
                programming, and process automation.
              </p>

            </div>
            <div className="about-right">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" alt="factory" />
              <div className="badge">
                <h3>25+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT VOICE */}
      <section className="client-container">
        <section className="display-flex align-center industry-wrapper m-10">
          <div className="section-header">
            <span className="tag">CLIENT VOICE</span>
            <div className="header-row">
              <h2>What Our <span>Clients</span> Say</h2>
              <p className="rating">4.6+ Rating<br /><small>Based on 120+ verified reviews</small></p>
            </div>
          </div>
          <div className="testimonial-wrapper">
            {testimonialCards.slice(0, 2).map((item) => (
              <div className="card" key={item.name}>
                <p className="quote">{item.text}</p>
                <div className="user">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-us-container">
        <section className="display-flex align-center industry-wrapper m-10">
          <div className="section-header mt">
            <span className="tag">OUR COMPETITIVE EDGE</span>
            <div className="header-row">
              <h2>Why Leading Industries <span>Choose Salvin</span></h2>
              <p className="desc">
                For over two decades, Salvin Industries has been the trusted automation partner
                for plants across 30+ nations—delivering precision, reliability, and performance at scale.
              </p>
            </div>
          </div>
          <div className="features">
            {whyUsFeatures.map((item) => (
              <div className="feature-box" key={item.title}>
                <div className="feat-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* FAQ */}
      <section className="faq-container">
        <section className="display-flex align-center industry-wrapper m-10">
          <div className="faq-header">
            <span className="tag">FAQ</span>
            <h2>Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="faq">
            {faqItems.map((item, index) => (
              <div key={item.question} className={`faq-item ${openFaq === index ? "active" : ""}`}>
                <button className="faq-question-btn" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="faq-toggle-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? "show" : ""}`}>{item.answer}</div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* PROJECTS */}
      <section className="projects-container" id="projects">
        <section className="display-flex align-center industry-wrapper m-10">
          <div className="projects-header">
            <div>
              <span className="tag">SPECIALIZED VERTICALS</span>
              <h2>Latest <span>Projects &amp; News</span></h2>
            </div>
            <p className="desc">
              Targeted engineering expertise across sectors with a relentless focus on operational efficiency and
              scalable architecture.
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1581093458791-9d42f5e4a3c1?auto=format&fit=crop&w=600&q=80" alt="Packaging Line" />
              <div className="content">
                <h4>High-Speed Packaging Line Installed in UAE</h4>
                <p>Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.</p>
                <a href="#">READ MORE →</a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1581093588401-22fcd1e2f9a2?auto=format&fit=crop&w=600&q=80" alt="Food Processing" />
              <div className="content">
                <h4>Automate Food Processing Unit Delivered in India</h4>
                <p>Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.</p>
                <a href="#">READ MORE →</a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1581092334463-f6cbb1c03c4b?auto=format&fit=crop&w=600&q=80" alt="Turnkey Plant" />
              <div className="content">
                <h4>Turnkey Plant Expansion for FMCG Client</h4>
                <p>Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.</p>
                <a href="#">READ MORE →</a>
              </div>
            </div>
            <div className="cta-box">
              <h3>Let's Build the Future Together</h3>
              <p>Have a project in mind? Our experts are ready to help you.</p>
              <NavLink to="/contact"><button>CONTACT US</button></NavLink>
            </div>
          </div>
        </section>
      </section>

      {/* CTA + FOOTER */}
      <section className="cta-footer">
        <div className="cta-box">
          <h2>READY TO BUILD YOUR DREAM PLANT?</h2>
          <p>Explore how our legacy of precision engineering can optimize your next industrial project.</p>
          <NavLink to="/contact"><button>CONTACT US</button></NavLink>
        </div>

      </section>
    </div>
  );
}

function AboutPage() {
  return <About/>;
}

function ContactPage() {
  return (
    <section className="contact page-section">
      <div className="split-header">
        <div>
          <span className="section-badge">Contact</span>
          <h1>Contact Us</h1>
        </div>
        <p className="rating-copy">
          Share your requirement and we’ll respond with a proposal, timeline, and best-fit solution.
        </p>
      </div>

      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Get in touch</h3>
          <p><strong>Email:</strong> sales@salvinindustries.com</p>
          <p><strong>Phone:</strong> +91 00000 00000</p>
          <p><strong>Location:</strong> Ahmedabad, India</p>
          <p className="contact-note">
            Mention your industry, capacity, and timeline for a faster response.
          </p>
        </div>

        <form className="card contact-card contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Send a message</h3>
          <label>
            Name
            <input name="name" placeholder="Your full name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="name@company.com" />
          </label>
          <label>
            Requirement
            <textarea name="message" rows="4" placeholder="Tell us about your project..." />
          </label>
          <button className="card-btn" type="submit">Request a callback</button>
        </form>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="services page-section">
      <span className="section-badge">Our Services</span>
      <h1>Services</h1>
      <p className="page-copy">
        End-to-end industrial solutions designed for productivity, automation, and scale.
      </p>

      <div className="grid three-col-grid">
        {serviceCards.map((item) => (
          <div key={item.title} className="card feature-card">
            <img src={item.image} alt={item.title} className="card-media" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <NavLink className="card-btn" to="/contact">Get Quote</NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  const [machineCategories, setMachineCategories] = useState(initialMachineCategories);
  const [spareCategories, setSpareCategories] = useState(initialSpareCategories);
  const [machines, setMachines] = useState(initialMachines);
  const [spares, setSpares] = useState(initialSpares);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => localStorage.getItem("is_admin_authenticated") === "true"
  );

  const addMachineCategory = (value) => {
    const normalized = value.trim();
    if (!normalized || machineCategories.includes(normalized)) return;
    setMachineCategories((prev) => [...prev, normalized]);
  };

  const addSpareCategory = (value) => {
    const normalized = value.trim();
    if (!normalized || spareCategories.includes(normalized)) return;
    setSpareCategories((prev) => [...prev, normalized]);
  };

  const addMachine = (machineForm) => {
    let specs = {};
    try {
      specs = machineForm.specifications ? JSON.parse(machineForm.specifications) : {};
    } catch {
      specs = {};
    }

    const newMachine = {
      machine_id: Date.now(),
      machine_name: machineForm.machine_name,
      category_id: machineForm.category_id,
      image_url: machineForm.image_url,
      description: machineForm.description,
      specifications: specs,
      status: machineForm.status
    };
    setMachines((prev) => [newMachine, ...prev]);
  };

  const addSpare = (spareForm) => {
    const newSpare = {
      spare_id: Date.now(),
      spare_name: spareForm.spare_name,
      spare_category_id: spareForm.spare_category_id,
      image_url: spareForm.image_url,
      description: spareForm.description,
      stock_quantity: Number(spareForm.stock_quantity || 0),
      price: Number(spareForm.price || 0)
    };
    setSpares((prev) => [newSpare, ...prev]);
  };

  const deleteMachine = (machineId) => {
    setMachines((prev) => prev.filter((machine) => machine.machine_id !== machineId));
  };

  const deleteSpare = (spareId) => {
    setSpares((prev) => prev.filter((spare) => spare.spare_id !== spareId));
  };

  const handleAdminLogin = (adminId, password) => {
    const isValid =
      adminId.trim() === ADMIN_CREDENTIALS.adminId && password === ADMIN_CREDENTIALS.password;
    if (isValid) {
      localStorage.setItem("is_admin_authenticated", "true");
      setIsAdminAuthenticated(true);
    }
    return isValid;
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("is_admin_authenticated");
    setIsAdminAuthenticated(false);
  };

  return (
    <div className="app">
      <Header isAdminAuthenticated={isAdminAuthenticated} onAdminLogout={handleAdminLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/machineries" element={<MachineriesPage machines={machines} machineCategories={machineCategories} />} />
        <Route path="/spares" element={<SparesPage spares={spares} spareCategories={spareCategories} />} />
        <Route
          path="/admin-login"
          element={<AdminLoginPage onAdminLogin={handleAdminLogin} isAdminAuthenticated={isAdminAuthenticated} />}
        />
        <Route path="/admin" element={<Navigate to="/admin-login" replace />} />
        <Route
          path="/admin-panel"
          element={
            <ProtectedAdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <AdminPage
                machineCategories={machineCategories}
                spareCategories={spareCategories}
                onAddMachineCategory={addMachineCategory}
                onAddSpareCategory={addSpareCategory}
                onAddMachine={addMachine}
                onAddSpare={addSpare}
                machines={machines}
                spares={spares}
                onDeleteMachine={deleteMachine}
                onDeleteSpare={deleteSpare}
              />
            </ProtectedAdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}