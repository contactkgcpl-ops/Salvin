import React, { useMemo, useState } from "react";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import machineCardsImage from "./assets/machine-cards.png";
import machineryLayoutImage from "./assets/machinery-layout.png";
import blueMachinesImage from "./assets/blue-machines.png";
import machineCardRefImage from "./assets/machine-card-ref.png";

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
    title: "Spares",
    text: "Genuine spares and quick dispatch to reduce production downtime.",
    image:
      "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=900&q=80"
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

const initialMachines = [
  {
    machine_id: 1,
    machine_name: "Automatic Liquid Filling Machine",
    category_id: "Processing",
    image_url: machineCardsImage,
    description: "High-accuracy liquid filling system for pharmaceuticals, food and beverages.",
    specifications: {
      output: "80-120 BPM",
      power: "440V / 3 phase",
      capacity: "100-1000 ml"
    },
    status: "active"
  },
  {
    machine_id: 2,
    machine_name: "Single-Head ROPP Capping Machine",
    category_id: "Pharmaceutical",
    image_url: machineCardRefImage,
    description: "Specialized roll-on pilfer-proof capping solution for consistent sealing integrity.",
    specifications: {
      operation: "Semi-automatic / Linear",
      sealingHeads: "Interchangeable Torque Heads",
      capSize: "22mm - 38mm Standard",
      powerSupply: "440V / 3 Phase / 50Hz"
    },
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

function Navbar({ isAdminAuthenticated, onAdminLogout }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeServicesMenu = () => setIsServicesOpen(false);

  return (
    <header className="navbar">
      <h2 className="font-bold text-2xl">SALVIN INDUSTRIES</h2>
      <nav className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>

        <div
  className={`nav-dropdown ${isServicesOpen ? "open" : ""}`}
  onMouseEnter={() => setIsServicesOpen(true)}
  onMouseLeave={() => setIsServicesOpen(false)}
>
  <button
    className="nav-dropdown-trigger"
    type="button"
    aria-haspopup="true"
    aria-expanded={isServicesOpen}
  >
    Services
  </button>

  <div
    className="nav-dropdown-menu"
    role="menu"
    aria-label="Services"
  >
    <NavLink
      to="/machineries"
      role="menuitem"
      onClick={closeServicesMenu}
    >
      Machine
    </NavLink>

    <NavLink
      to="/spares"
      role="menuitem"
      onClick={closeServicesMenu}
    >
      Sparse
    </NavLink>
  </div>
</div>

        <NavLink to="/contact">Contact Us</NavLink>
        {isAdminAuthenticated && (
          <button className="nav-logout-btn" type="button" onClick={onAdminLogout}>
            Logout
          </button>
        )}
      </nav>
      <NavLink className="nav-cta" to="/contact">Contact Us</NavLink>
    </header>
  );
}

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

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-cta-box">
        <h2>READY TO EQUIP YOUR PLANT?</h2>
        <p>
          Our team of specialists engineers is ready to help you optimize your manufacturing
          workflow. Get a consultation and detailed quote for your project.
        </p>
        <NavLink className="btn" to="/contact">Contact Us</NavLink>
      </section>

      <div className="footer-inner">
        <div className="footer-brand">
          <h3>SALVIN INDUSTRIES</h3>
          <p>
            Turnkey solutions in processing and packaging. Moving your factory from daily
            messes to a business that grows on its own.
          </p>
          <p>210, Arved Transcube Mall, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480</p>
          <p>+91 90239 79663 | +91 97127 77034 | +91 97126 77034</p>
          <p>info.salvinindustries@gmail.com</p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Navigation</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Journey</NavLink>
            <NavLink to="/contact">Talk with Keval</NavLink>
            <NavLink to="/contact">Careers</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <NavLink to="/services">Turnkey Project</NavLink>
            <NavLink to="/machineries">Machineries</NavLink>
            <NavLink to="/spares">Spares & Spare Kits</NavLink>
            <NavLink to="/contact">Preventive AMC</NavLink>
            <NavLink to="/contact">Contract MFG & LM</NavLink>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 Salvin Industries. Engineered for Industrial Excellence.</p>
      </div>
    </footer>
  );
}

function MachineriesPage({ machines, machineCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMachines = useMemo(() => {
    if (selectedCategory === "All") return machines;
    return machines.filter((machine) => machine.category_id === selectedCategory);
  }, [machines, selectedCategory]);

  return (
    <section className="machineries-page">
      <div
        className="machinery-hero"
        style={{ backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.78), rgba(9, 25, 56, 0.78)), url(${blueMachinesImage})` }}
      >
        <h1>Advanced Machinery Solutions</h1>
        <p>
          High-performance automation and heavy-duty manufacturing systems built
          with reliability and technical expertise.
        </p>
      </div>

      <div className="machinery-content">
        <aside className="filter-sidebar">
          <h3>Categories</h3>
          <button
            className={selectedCategory === "All" ? "active-filter" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {machineCategories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active-filter" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        <div className="machinery-scroll-area">
          <div className="machinery-grid">
          {filteredMachines.map((machine) => (
            <article key={machine.machine_id} className="machinery-card">
              <div className="machinery-image-wrap">
                <img src={machine.image_url || machineryLayoutImage} alt={machine.machine_name} />
              </div>
              <div className="machinery-card-body">
                <div className="machine-card-tags">
                  <span className="machine-tag">SERIES-{machine.machine_id}</span>
                  <span className="machine-tag alt">ISO 9001 CERTIFIED</span>
                </div>
                <h3>{machine.machine_name}</h3>
                <p>{machine.description}</p>
                <h4>Technical Specifications</h4>
                <div className="spec-row">
                  <span>Operation</span>
                  <strong>{machine.specifications?.operation || machine.specifications?.output || "-"}</strong>
                </div>
                <div className="spec-row">
                  <span>Sealing Heads</span>
                  <strong>{machine.specifications?.sealingHeads || "-"}</strong>
                </div>
                <div className="spec-row">
                  <span>Cap Size</span>
                  <strong>{machine.specifications?.capSize || machine.specifications?.capacity || "-"}</strong>
                </div>
                <div className="spec-row">
                  <span>Power Supply</span>
                  <strong>{machine.specifications?.powerSupply || machine.specifications?.power || "-"}</strong>
                </div>
                <button className="card-btn full-width">Configure This Model</button>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SparesPage({ spares, spareCategories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSpares = useMemo(() => {
    if (selectedCategory === "All") return spares;
    return spares.filter((spare) => spare.spare_category_id === selectedCategory);
  }, [spares, selectedCategory]);

  return (
    <section className="spares-page page-section">
      <div className="split-header">
        <div>
          <span className="section-badge">Spare Management</span>
          <h1>Spare Parts & Consumables</h1>
        </div>
        <p className="rating-copy">
          Fast moving inventory with transparent pricing and stock visibility for every spare category.
        </p>
      </div>

      <div className="spare-filters">
        <button className={selectedCategory === "All" ? "active-filter" : ""} onClick={() => setSelectedCategory("All")}>
          All
        </button>
        {spareCategories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active-filter" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="spares-table">
        <div className="spares-head">
          <span>Spare Name</span>
          <span>Category</span>
          <span>Stock</span>
          <span>Price</span>
        </div>
        {filteredSpares.map((spare) => (
          <div key={spare.spare_id} className="spares-row">
            <div className="spare-name-cell">
              <img src={spare.image_url || machineCardsImage} alt={spare.spare_name} />
              <div>
                <strong>{spare.spare_name}</strong>
                <p>{spare.description}</p>
              </div>
            </div>
            <span>{spare.spare_category_id}</span>
            <span className={spare.stock_quantity > 10 ? "stock-good" : "stock-low"}>{spare.stock_quantity}</span>
            <span>₹{Number(spare.price).toLocaleString("en-IN")}</span>
          </div>
        ))}
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
    { title: "Automation & Robotics", text: "Precision-engineered automated assembly lines and seamless robotic integration for smart factory ecosystems.", image: serviceCards[4].image },
    { title: "Processing & Packaging Machinery", text: "Hygienic, turnkey stainless steel processing lines engineered for dairy, beverage, and solid food manufacturing.", image: serviceCards[1].image },
    { title: "Packaging Machinery", text: "High-speed, multi-format pouch and bottle filling systems with advanced capping and labeling technologies.", image: serviceCards[7].image },
    { title: "Pneumatic Equipment", text: "Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.", image: serviceCards[5].image },
    { title: "Maintenance & Support", text: "Proactive annual maintenance contracts and 24/7 technical support to ensure zero-downtime production cycles.", image: serviceCards[6].image }
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
        <div className="container">
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
        <div className="container">
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
              <div className="timeline">
                <div className="t-box">
                  <h3>2008</h3>
                  <h4>Founded in Ahmedabad</h4>
                  <p>Started as a precision engineering workshop.</p>
                </div>
                <div className="t-box">
                  <h3>2008</h3>
                  <h4>First International Project</h4>
                  <p>Delivered first overseas turnkey plant in UAE.</p>
                </div>
                <div className="t-box">
                  <h3>2015</h3>
                  <h4>Robotic Division Launch</h4>
                  <p>Established robotics integration division.</p>
                </div>
                <div className="t-box">
                  <h3>2024</h3>
                  <h4>30+ Countries Milestone</h4>
                  <p>350+ completed projects globally.</p>
                </div>
              </div>
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
        <section className="container">
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
        <section className="container">
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
        <section className="container">
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
        <section className="container">
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
        <footer className="home-footer" id="contact">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="font-bold">SALVIN INDUSTRIES</h3>
              <p>
                Moving your factory from daily messes to a business that grows on its own.
              </p>
              <ul className="contact-info">
                <li>📧 info.salvinindustries@gmail.com</li>
                <li>📞 +91 90239 79663 | +91 97127 77034 | +91 97126 77034</li>
                <li>📍 210, Arved Transcube Mall, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480</li>
              </ul>
              <div className="social">
                <span>🔗</span>
                <span>📘</span>
                <span>🐦</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li>Turnkey Plant Solutions</li>
                <li>Industrial Automation</li>
                <li>Maintenance &amp; AMC</li>
                <li>Pneumatic Equipment</li>
                <li>Packaging Machinery</li>
                <li>Food Processing</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>INDUSTRIES</h4>
              <ul>
                <li>Food &amp; Spices</li>
                <li>Pharmaceutical</li>
                <li>Chemical &amp; API</li>
                <li>Agriculture</li>
                <li>Cosmetics</li>
                <li>Export Industries</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li>About Us</li>
                <li>Projects Portfolio</li>
                <li>Resources &amp; Blog</li>
                <li>Contact Us</li>
                <li>International Offices</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 <span>salvin</span> industries. all rights reserved. | ahmedabad, gujarat, india</p>
            <div className="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="about page-section">
      <span className="section-badge">About The Company</span>
      <h1>About Us</h1>
      <p>
        Salvin Industries is a leading turnkey automation and packaging machinery group
        based in Ahmedabad. We specialize in high-performance production lines.
      </p>

      <div className="timeline">
        <div><h3>1999</h3><p>Founded in Ahmedabad</p></div>
        <div><h3>2008</h3><p>First International Project</p></div>
        <div><h3>2015</h3><p>Robotic Division Launch</p></div>
        <div><h3>2024</h3><p>30+ Countries Milestone</p></div>
      </div>
    </section>
  );
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
      <Navbar isAdminAuthenticated={isAdminAuthenticated} onAdminLogout={handleAdminLogout} />
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
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}