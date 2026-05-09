import React, { useMemo, useState } from "react";
import { Navigate, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./App.css";
import machineCardsImage from "./assets/machine-cards.png";
import machineryLayoutImage from "./assets/machinery-layout.png";
import blueMachinesImage from "./assets/blue-machines.png";
import machineCardRefImage from "./assets/machine-card-ref.png";
import About from "./components/AboutSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function readJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const bodyText = await response.text();

  if (!contentType.includes("application/json")) {
    const preview = bodyText.trim().slice(0, 80);
    throw new Error(
      preview.startsWith("<!DOCTYPE") || preview.startsWith("<html")
        ? "Machine API returned the frontend HTML. Start the Express server with `npm run server` or use `npm run full-dev`."
        : `Machine API returned a non-JSON response: ${preview || response.statusText}`
    );
  }

  const data = bodyText ? JSON.parse(bodyText) : null;
  if (!response.ok) {
    throw new Error(data?.error || "Machine API request failed.");
  }
  return data;
}

async function fetchJson(url, options) {
  const response = await fetch(`${API_BASE_URL}${url}`, options);
  return readJsonResponse(response);
}

const machineImages = import.meta.glob("./assets/machine/*.{png,jpg,jpeg,webp,svg,gif}", { eager: true });

const resolveMachineImage = (image, sessionCache = {}) => {
  if (typeof image === "string") {
    // 1. Check if it's a direct public path (starts with /)
    if (image.startsWith("/")) return image;

    // 2. Check session cache (Base64)
    if (sessionCache[image]) return sessionCache[image];

    // 3. Check if it's a full URL
    if (image.startsWith("http") || image.startsWith("data:")) return image;

    // 4. Then check internal assets/machine folder (legacy)
    const path = `./assets/machine/${image}`;
    return machineImages[path]?.default || machineImages[path] || image;
  }
  return image;
};
import TurnkeyPage from "./pages/TurnkeyPage";
import TurnkeyProjectPage from "./pages/TurnkeyProject/TurnkeyProjectPage";
import ConsultantPage from "./pages/ConsultantPage";
import Decade from "./assets/home_extra/decade_experties.png";
import global from "./assets/home_extra/globalsupport.png";
import innovation from "./assets/home_extra/innovation.png";
import quality from "./assets/home_extra/quality.png";
import industryTurnkey from "./assets/industry-divisions/turnkey-projects.png";
import industryAutomation from "./assets/industry-divisions/automation-robotics.webp";
import industryProcessing from "./assets/industry-divisions/processing-packaging.png";
import industryConsultancy from "./assets/industry-divisions/food_consultant.jpg";
import industryPneumatic from "./assets/industry-divisions/pnuematic_spares.webp";
import industryMaintenance from "./assets/industry-divisions/machine-maintenance.jpg";
import projHoney from "./assets/home_projects/honey processing plant.webp";
import projSpices from "./assets/home_projects/spices_processing.png";
import projApi from "./assets/home_projects/APi_Plant.jpg";
import projChilli from "./assets/home_projects/1000_ton_red_chilli_plant.png";
import projRice from "./assets/home_projects/puffed_rice.png";
import foodPlant from "./assets/home_projects/food_plant.jpg";
import sparesHeroImage from "./assets/spares hiro.jpg";
import projectHeroImage from "./assets/project_hiro.jpg";
import machineHeroImage from "./assets/machine_hiro.png";


const serviceCards = [
  {
    title: "Turnkey Projects",
    text: "Complete end-to-end plant architecture, from conceptual blueprinting to installation and final commissioning.",
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
    title: "Automation & Robotics",
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

const testimonialCards = [
  {
    text: "\"Salvin's turnkey solution for our packaging line reduced downtime by 40% within the first quarter. Their engineering precision is truly unmatched in the industry.\"",
    name: "Rohan Mehta",
    role: "OPERATIONS DIRECTOR, APEX FOODS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
  },
  {
    text: "\"he robotic integration provided by Salvin transformed our assembly process. Their support team was available 24/7 during the transition, making it seamless.\"",
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

const initialMachineCategories = ["Packaging", "Processing"];

const subCategoryMap = {
  Packaging: ["Pouch Packaging", "Vial Packaging", "Bottle Packaging", "Tube Packaging", "Eye Drop Packaging"],
  Processing: ["Spices Processing", "API Processing", "Food Processing", "Pharmaceutical Processing"]
};

const initialMachines = [];
const initialSpareCategories = ["Bottle", "Tube", "Pouch", "Vial"];

// const initialMachines = [
//   {
//     machine_id: 1,
//     machine_name: "Automatic Liquid Filling Machine",
//     category_id: "Processing",
//     subcategory: "Pharmaceutical",
//     image_url: machineCardsImage,
//     description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / LIQUID FILLING", "PHARMACEUTICAL"],
//     specifications: {
//       heads: "4-head SS 316 Construction",
//       volumeRange: "15ml – 1000ml",
//       controlSystem: "Siemens / Delta PLC",
//       productionSpeed: "40-60 Containers/min"
//     },
//     priceRange: "1.90 CRORE",
//     speed: "120 RPM",
//     capacity: "33.99L",
//     status: "active"
//   },
//   {
//     machine_id: 2,
//     machine_name: "Spice Grinding Machine",
//     category_id: "Processing",
//     subcategory: "Spice Processing",
//     image_url: machineCardsImage,
//     description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / GRINDING", "FOOD & SPICES"],
//     specifications: {
//       heads: "2-head SS 304 Construction",
//       volumeRange: "50g – 5000g",
//       controlSystem: "Delta PLC",
//       productionSpeed: "80-120 Kg/hr"
//     },
//     priceRange: "1.90 CRORE",
//     speed: "120 RPM",
//     capacity: "30.5KG",
//     status: "active"
//   },
//   {
//     machine_id: 3,
//     machine_name: "Tablet Coating Machine",
//     category_id: "Processing",
//     subcategory: "Pharmaceutical",
//     image_url: machineCardsImage,
//     description: "High-speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / COATING", "PHARMACEUTICAL"],
//     specifications: {
//       heads: "Auto-spray SS 316 System",
//       volumeRange: "5mm – 25mm tablet",
//       controlSystem: "Siemens PLC",
//       productionSpeed: "60-80 tablets/min"
//     },
//     priceRange: "1.90 CRORE",
//     speed: "160 RPM",
//     capacity: "33.99L",
//     status: "active"
//   },
//   {
//     machine_id: 4,
//     machine_name: "Bottle Filling Machine",
//     category_id: "Packaging",
//     subcategory: "Bottle",
//     image_url: machineCardRefImage,
//     description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
//     specifications: {
//       heads: "6-head SS 316 Construction",
//       volumeRange: "30ml – 1000ml",
//       controlSystem: "Siemens / Delta PLC",
//       productionSpeed: "60-80 Bottles/min"
//     },
//     priceRange: "1.56 CRORE",
//     speed: "120 RPM",
//     capacity: "33.99L",
//     status: "active"
//   },
//   {
//     machine_id: 5,
//     machine_name: "Bottle Filling Machine",
//     category_id: "Packaging",
//     subcategory: "Bottle",
//     image_url: machineCardRefImage,
//     description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
//     specifications: {
//       heads: "8-head SS 316 Construction",
//       volumeRange: "15ml – 500ml",
//       controlSystem: "Delta PLC",
//       productionSpeed: "80-100 Bottles/min"
//     },
//     priceRange: "1.56 CRORE",
//     speed: "120 RPM",
//     capacity: "33.99L",
//     status: "active"
//   },
//   {
//     machine_id: 6,
//     machine_name: "Bottle Filling Machine",
//     category_id: "Packaging",
//     subcategory: "Bottle",
//     image_url: machineCardRefImage,
//     description: "High speed volumetric filling machine for liquids, oils, and free-flowing products. Suitable for bottles, jars, and pouches with servo-driven accuracy.",
//     tags: ["PROCESSING / FILLING", "PHARMACEUTICAL"],
//     specifications: {
//       heads: "4-head SS 304 Construction",
//       volumeRange: "50ml – 2000ml",
//       controlSystem: "Siemens PLC",
//       productionSpeed: "30-50 Bottles/min"
//     },
//     priceRange: "1.56 CRORE",
//     speed: "120 RPM",
//     capacity: "33.99L",
//     status: "active"
//   }
// ];

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

function MachineDetailPage({ machines, sessionCache }) {
  const { machineSlug } = useParams();
  const [remoteMachine, setRemoteMachine] = useState(null);
  const [isLoadingMachine, setIsLoadingMachine] = useState(false);
  const machine = machines.find(m => (m.slug || m.machine_name.toLowerCase().replace(/\s+/g, '-')) === machineSlug) || remoteMachine;

  React.useEffect(() => {
    if (machine || !machineSlug) return;
    setIsLoadingMachine(true);
    fetchJson(`/api/machines/${machineSlug}`)
      .then((data) => {
        if (data) setRemoteMachine(data);
      })
      .catch((error) => console.error("Unable to load machine detail:", error))
      .finally(() => setIsLoadingMachine(false));
  }, [machine, machineSlug]);

  React.useEffect(() => {
    if (machine) {
      document.title = `${machine.meta_title || machine.machine_name} | Salvin Industries`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', machine.meta_description || machine.description);
    }
  }, [machine]);

  if (isLoadingMachine) return <div className="page-section text-center"><h2>Loading Machine...</h2></div>;
  if (!machine) return <div className="page-section text-center"><h2>Machine Not Found</h2><NavLink to="/machineries">Back to Catalog</NavLink></div>;

  return (
    <div className="machine-detail-page-v2">
      <div className="detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage})` }}>
        <div className="container">
          <span className="badge">{machine.category_id} / {machine.subcategory}</span>
          <h1>{machine.machine_name}</h1>
        </div>
      </div>

      <div className="detail-content container">
        <div className="detail-grid">
          <div className="detail-main">
            <div className="detail-image-card">
              <img src={resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage} alt={machine.machine_name} />
            </div>
            <div className="detail-info-card">
              <h3>Description</h3>
              <p>{machine.description}</p>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="specs-card">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(machine.specifications || {}).map(([k, v]) => (
                    <tr key={k}>
                      <td className="lbl">{k.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                      <td className="val">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="contact-card-sidebar">
              <h3>Interested?</h3>
              <p>Get a customized quote for this model.</p>
              <a href={`https://wa.me/919023979663?text=Inquiry for ${machine.machine_name}`} target="_blank" rel="noopener noreferrer" className="sidebar-btn">INQUIRE NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MachineDetailModal({ machine, sessionCache, onClose }) {
  React.useEffect(() => {
    if (!machine) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [machine, onClose]);

  if (!machine) return null;

  const imageSrc = resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage;
  const specifications = Object.entries(machine.specifications || {});
  const displaySpecs = specifications.length
    ? specifications
    : [
      ["Category", machine.category_id || "-"],
      ["Subcategory", machine.subcategory || "-"]
    ];
  const formatLabel = (label) =>
    String(label)
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="machine-modal-title">
      <div className="modal-container machine-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">x</button>
        <div className="modal-body machine-modal-body">
          <div className="modal-image-wrap machine-modal-image-wrap">
            <img src={imageSrc} alt={machine.machine_name} />
          </div>
          <div className="modal-info machine-modal-info">
            <div className="modal-tags">
              <span className="modal-tag outline">SERIES-{machine.machine_id}</span>
              <span className="modal-tag filled">{machine.category_id || "Machine"}</span>
              {machine.subcategory && <span className="modal-tag filled">{machine.subcategory}</span>}
            </div>
            <h2 className="modal-title" id="machine-modal-title">{machine.machine_name}</h2>
            <p className="modal-desc">{machine.description || "Machine details will be updated soon."}</p>
            <h4 className="modal-spec-heading">Technical Specifications</h4>
            <div className="modal-table-scroll">
              <table className="modal-spec-table">
                <tbody>
                  {displaySpecs.map(([key, value]) => (
                    <tr key={key}>
                      <td>{formatLabel(key)}</td>
                      <td>{value || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href={`https://wa.me/919023979663?text=Inquiry for ${encodeURIComponent(machine.machine_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-cta-btn"
            >
              Configure This Model
            </a>
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
            <div className="modal-table-scroll">
              <table className="modal-spec-table">
                <tbody>
                  <tr><td>Category</td><td>{spare.spare_category_id}</td></tr>
                  <tr><td>Stock Available</td><td className={spare.stock_quantity > 10 ? "stock-good" : "stock-low"}>{spare.stock_quantity} units</td></tr>
                  <tr><td>Price</td><td>₹{Number(spare.price).toLocaleString("en-IN")}</td></tr>
                </tbody>
              </table>
            </div>
            <button className="modal-cta-btn">REQUEST QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MachineriesPage({ machines, sessionCache, loadError }) {
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
    let results = machines.filter((machine) => machine.status !== "inactive");

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (m) =>
          m.machine_name.toLowerCase().includes(q) ||
          (m.description || "").toLowerCase().includes(q)
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
    <section className="machineries-page-v2 min-w-0 overflow-x-hidden">
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
          {subCategoryMap.Processing.map((cat) => (
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
          {subCategoryMap.Packaging.map((cat) => (
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
          {loadError && <p className="admin-error-text">{loadError}</p>}

          <div className="mach-grid">
            {filteredMachines.map((machine) => (
              <article key={machine.machine_id} className="mach-card">
                <div className="mach-card-img">
                  <img src={resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage} alt={machine.machine_name} />
                </div>
                <div className="mach-card-body">
                  <div className="mach-card-tags">
                    {(machine.tags?.length ? machine.tags : [machine.category_id, machine.subcategory]).map((tag, i) => (
                      <span key={i} className={"mach-tag" + (i === 0 ? " orange" : " blue")}>{tag}</span>
                    ))}
                  </div>
                  <h4 className="mach-card-title">{machine.machine_name}</h4>
                  <p className="mach-card-desc">{machine.description}</p>
                  <div className="mach-card-specs">
                    <div className="mach-spec-item">
                      <span className="mach-spec-lbl">{machine.speed}</span>
                      <span className="mach-spec-unit">{machine.capacity}</span>
                    </div>
                  </div>
                  <div className="mach-card-actions">
                    <a href="https://wa.me/919023979663" target="_blank" rel="noopener noreferrer" className="mach-btn quote">GET A QUOTE</a>
                    <button type="button" className="mach-btn view" onClick={() => setSelectedMachine(machine)}>VIEW MORE</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedMachine && (
        <MachineDetailModal
          machine={selectedMachine}
          sessionCache={sessionCache}
          onClose={() => setSelectedMachine(null)}
        />
      )}
    </section>
  );
}

function SparesPage() {
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
    category_id: "Packaging",
    subcategory: "Pouch Packaging",
    image_url: "",
    description: "",
    specifications: "",
    slug: "",
    meta_title: "",
    meta_description: "",
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
  const [imageFile, setImageFile] = useState(null);
  const [machineSubmitError, setMachineSubmitError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file || null);
    setMachineSubmitError("");
  };

  async function handleMachineSubmit(event) {
    event.preventDefault();
    setMachineSubmitError("");
    try {
      await onAddMachine(machineForm, imageFile);
      setMachineForm({
        machine_name: "",
        category_id: "Packaging",
        subcategory: "Pouch Packaging",
        image_url: "",
        description: "",
        specifications: "",
        slug: "",
        meta_title: "",
        meta_description: "",
        status: "active"
      });
      setImageFile(null);
      event.target.reset();
    } catch (error) {
      setMachineSubmitError(error.message || "Machine could not be saved.");
    }
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
    <section className="admin-page page-section mx-auto w-full max-w-[1200px]">
      <span className="section-badge">Admin</span>
      <h1 className="text-2xl font-bold tracking-tight text-[#0d1b3e] sm:text-3xl lg:text-4xl">Machines / Spares Management</h1>
      <p className="page-copy">
        Add new records using your DB schema fields from the provided documentation.
      </p>

      <div className="admin-grid">
        <form className="card contact-form admin-form" onSubmit={handleMachineSubmit}>
          <h3 className="Add-title">Add Machine</h3>
          <label>Machine Name<input value={machineForm.machine_name} onChange={(e) => setMachineForm((prev) => ({ ...prev, machine_name: e.target.value }))} required /></label>
          <label>Category
            <select value={machineForm.category_id} onChange={(e) => setMachineForm((prev) => ({ ...prev, category_id: e.target.value, subcategory: subCategoryMap[e.target.value][0] }))}>
              <option value="Packaging">Packaging Machineries</option>
              <option value="Processing">Processing Machineries</option>
            </select>
          </label>
          <label>Subcategory
            <select value={machineForm.subcategory} onChange={(e) => setMachineForm((prev) => ({ ...prev, subcategory: e.target.value }))}>
              {subCategoryMap[machineForm.category_id].map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </label>
          <label>Upload Machine Image
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageFile && (
              <div style={{ background: "#ebfff2", padding: "10px", borderRadius: "8px", marginTop: "10px", border: "1px solid #20f582" }}>
                <p style={{ color: "#16a34a", margin: "0", fontSize: "13px" }}>
                  <strong>Selected:</strong> {imageFile.name}
                </p>
              </div>
            )}
          </label>
          <label>Existing Image Path<input placeholder="/assets/machines/image-name.jpg" value={machineForm.image_url.startsWith('data:') ? "" : machineForm.image_url} onChange={(e) => setMachineForm((prev) => ({ ...prev, image_url: e.target.value }))} /></label>
          <label>Description<textarea rows="3" value={machineForm.description} onChange={(e) => setMachineForm((prev) => ({ ...prev, description: e.target.value }))} /></label>
          <label>URL Slug (e.g. automatic-vial-filler)<input value={machineForm.slug} onChange={(e) => setMachineForm((prev) => ({ ...prev, slug: e.target.value }))} /></label>
          <label>Meta Title<input value={machineForm.meta_title} onChange={(e) => setMachineForm((prev) => ({ ...prev, meta_title: e.target.value }))} /></label>
          <label>Meta Description<textarea rows="2" value={machineForm.meta_description} onChange={(e) => setMachineForm((prev) => ({ ...prev, meta_description: e.target.value }))} /></label>
          <label>Specifications (JSON)<textarea rows="3" placeholder='{"speed":"80 BPM","power":"440V"}' value={machineForm.specifications} onChange={(e) => setMachineForm((prev) => ({ ...prev, specifications: e.target.value }))} /></label>
          <label>Status
            <select value={machineForm.status} onChange={(e) => setMachineForm((prev) => ({ ...prev, status: e.target.value }))}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </label>
          {machineSubmitError && <p className="admin-error-text">{machineSubmitError}</p>}
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
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isHeroPreviewOpen, setIsHeroPreviewOpen] = useState(false);
  const heroSlides = [
    {
      key: "spares",
      eyebrow: "Spares & Service",
      title: "Your Trusted Source for Machine & Industrial Spares",
      text: "Reliable replacement parts and support to keep production lines moving with less downtime.",
      cta: "Explore Spares",
      to: "/spares",
      image: sparesHeroImage
    },
    {
      key: "machine",
      eyebrow: "Machineries",
      title: "Special Purpose Machineries for Processing & Packaging",
      text: "Purpose-built machinery engineered for consistent output, hygienic operation, and scalable manufacturing.",
      cta: "View Machineries",
      to: "/machineries",
      image: machineHeroImage
    },
    {
      key: "project",
      eyebrow: "Turnkey Projects",
      title: "Achieve Beyond Expectations",
      subtitle: "From Vision to Victory",
      text: "End-to-end project execution from plant planning and engineering to commissioning and support.",
      cta: "Start Your Project",
      to: "/turnkey-project",
      image: projectHeroImage
    }
  ];

  React.useEffect(() => {
    setIsHeroPreviewOpen(false);
    const previewTimer = window.setTimeout(() => setIsHeroPreviewOpen(true), 3000);
    const slideTimer = window.setTimeout(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => {
      window.clearTimeout(previewTimer);
      window.clearTimeout(slideTimer);
    };
  }, [activeHeroIndex, heroSlides.length]);

  const goToHeroSlide = (index) => {
    setIsHeroPreviewOpen(false);
    setActiveHeroIndex((index + heroSlides.length) % heroSlides.length);
  };

  const activeHero = heroSlides[activeHeroIndex];
  const nextHeroIndex = (activeHeroIndex + 1) % heroSlides.length;
  const latestProjectsNews = [
    {
      title: "Honey Processing Plant in Rajkot",
      description: "Fully automated honey filtration, moisture reduction, and bottling line for premium organic honey production.",
      image: projHoney,
    },
    {
      title: "Spices processing and packaging in Rajkot",
      description: "Comprehensive cleaning, grinding, and multi-track pouch packaging system for diverse spice blends.",
      image: projSpices,
    },
    {
      title: "API manufacturing plant in Vadodara",
      description: "C-GMP compliant API reactor systems and solvent recovery modules for a leading pharmaceutical house.",
      image: projApi,
    },
    {
      title: "1000 ton per hour red chilli processing plant in Mexico",
      description: "Massive-scale industrial cleaning, deseeded, and grinding plant with integrated climate-controlled storage.",
      image: projChilli,
    },
    {
      title: "Puffed rice processing plant in Dakor",
      description: "Energy-efficient continuous puffing and roasting line with automatic seasoning and moisture control.",
      image: projRice,
    },
  ];

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

  const industryDivisions = [
    {
      title: "Turnkey Projects",
      text: "Complete end-to-end plant architecture, from conceptual blueprinting to installation and final commissioning.",
      image: industryTurnkey,
    },
    {
      title: "Process Optimization",
      text: "Optimize food production workflows to improve efficiency, reduce waste, and maintain consistent product quality.We help food industries streamline operations with smart process planning, automation, and performance-focused solutions.",
      image: industryAutomation,
    },
    {
      title: "Processing & Packaging Machinery",
      text: "Hygienic, turnkey stainless steel processing lines engineered for dairy, beverage, and solid food manufacturing.",
      image: industryProcessing,
    },
    {
      title: "Consultancy",
      text: "High-speed, multi-format pouch and bottle filling systems with advanced capping and labeling technologies.",
      image: industryConsultancy,
    },
    {
      title: "Spares",
      text: "Advanced motion control components including precision cylinders, valves, and specialized air treatment systems.",
      image: industryPneumatic,
    },
    {
      title: "After Sales Support",
      text: "Proactive annual maintenance contracts and 24/7 technical support to ensure zero-downtime production cycles.",
      image: industryMaintenance,
    },
  ];

  const whyUsFeatures = [
    {
      icon: <img src={Decade} alt="Decade of Expertise" className="mx-auto w-16 h-16 object-contain" />,
      title: <h3 className="text-lg font-bold">Decades of Expertise</h3>,
      text: "Over 25 years of hands-on experience delivering complex industrial engineering and automation solutions."
    },
    {
      icon: <img src={innovation} alt="Innovative Technology" className="mx-auto w-16 h-16 object-contain" />,
      title: <h3 className="text-lg font-bold">Innovative Technology</h3>,
      text: "Utilizing AI-driven robotics and cutting-edge IoT frameworks to build future-ready manufacturing operations."
    },
    {
      icon: <img src={global} alt="Global Support" className="mx-auto w-16 h-16 object-contain" />,
      title: <h3 className="text-lg font-bold">Global Support</h3>,
      text: "Our dedicated 24/7 technical support network and regional headquarters serve clients across 15+ countries."
    },
    {
      icon: <img src={quality} alt="Quality Assurance" className="mx-auto w-16 h-16 object-contain" />,
      title: <h3 className="text-lg font-bold">Quality Assurance</h3>,
      text: "ISO 9001:2015 certified manufacturing processes ensuring the highest standards of precision and safety."
    }
  ];

  return (
    <div className="home-template min-w-0 overflow-x-hidden">
      {/* HERO */}
      <section
        className="hero"
        id="home"
        style={{ "--hero-home-bg": `url(${activeHero.image})` }}
      >
        <div className="overlay" />
        <div className="hero-content" key={activeHero.key}>
          <span className="tag">{activeHero.eyebrow}</span>
          <h1>{activeHero.title}</h1>
          {activeHero.subtitle && <h2>{activeHero.subtitle}</h2>}
          <p>{activeHero.text}</p>
          <div className="buttons hero-actions">
            <NavLink className="primary" to={activeHero.to}>{activeHero.cta}</NavLink>
            <NavLink className="secondary" to="/contact">Get Inquiry</NavLink>
          </div>
        </div>
        <div className={`hero-preview-dock${isHeroPreviewOpen ? " open" : ""}`} aria-label="Hero image selector">
          <div className="hero-preview-track">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.key}
                className={`hero-preview-card${index === activeHeroIndex ? " active" : ""}${index === nextHeroIndex ? " next" : ""}`}
                onClick={() => goToHeroSlide(index)}
                aria-label={`Show ${slide.eyebrow}`}
              >
                <img src={slide.image} alt="" />
                <span>{slide.eyebrow}</span>
              </button>
            ))}
          </div>
          <div className="hero-controls">
            <button type="button" onClick={() => goToHeroSlide(activeHeroIndex - 1)} aria-label="Previous hero">
              <span aria-hidden="true">&lsaquo;</span>
            </button>
            <button type="button" onClick={() => goToHeroSlide(activeHeroIndex + 1)} aria-label="Next hero">
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="industry" id="services">
        <div className="content-container">
          <div className="industry-header">
            <div>
              <span className="tag">SPECIALIZED VERTICALS</span>
              <h2 className="text-blue-950">Core Service</h2>
            </div>
            <p className="desc">
              Targeted engineering expertise across sectors with a relentless focus on operational efficiency and
              scalable architecture.
            </p>
          </div>
          <div className="industry-divisions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryDivisions.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  <NavLink
                    to="/services"
                    className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-[#ff7a00] transition hover:text-[#e56d00]"
                  >
                    VIEW SOLUTIONS →
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="content-container">
          <div className="about-wrapper">
            <div className="about-left">
              <span className="tag">ABOUT THE COMPANY</span>
              <h2>
                Engineering <span>India's Industrial</span><br />
                Future Since 2008
              </h2>
              <p className="desc">
                Salvin Industries is a trusted name in providing turnkey solutions and technical consultancy for the food and pharmaceutical industries. We specialize in delivering end-to-end services that cover every stage of your project—from concept design and planning to execution and commissioning.

              </p>
              <p className="desc">
                With a strong focus on quality, innovation, and efficiency, we help businesses build and optimize their production facilities to meet modern industry standards. Our expertise ensures smooth project execution, cost-effective solutions, and reliable performance.

              </p>
              <p className="desc">
                At Salvin Industries, we believe in building long-term partnerships by offering customized solutions, technical excellence, and dedicated support. Whether it’s a new plant setup or upgrading an existing facility, we are committed to delivering results that drive growth and success.
              </p>

            </div>
            <div className="about-right">
              <img src={foodPlant} alt="Food processing plant" />
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
        <section className="content-container">
          <div className="section-header">
            <span className="tag">CLIENT VOICE</span>
            <div className="header-row">
              <h2>What Our <span>Clients</span> Say</h2>
              <p className="rating">4.6+ Rating<br /><small>Based on 120+ verified reviews</small></p>
            </div>
          </div>
          <div className="testimonial-wrapper">
            {testimonialCards.slice(0, 2).map((item) => (
              <div className="card testimonial-card-home" key={item.name}>
                <div className="quote-icon-wrap">
                  <svg className="quote-icon-svg" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32V19.2C0 15.7333 0.533333 12.5333 1.6 9.6C2.66667 6.66667 4.53333 3.73333 7.2 0.800003L12.8 4.00001C10.9333 6.4 9.6 8.66667 8.8 10.8C8 12.9333 7.46667 15.2 7.2 17.6H14.4V32H0ZM22.4 32V19.2C22.4 15.7333 22.9333 12.5333 24 9.6C25.0667 6.66667 26.9333 3.73333 29.6 0.800003L35.2 4.00001C33.3333 6.4 32 8.66667 31.2 10.8C30.4 12.9333 29.8667 15.2 29.6 17.6H36.8V32H22.4Z" fill="#F5A663" />
                  </svg>
                </div>
                <p className="quote">{item.text}</p>
                <div className="user">
                  <img src={item.image} alt={item.name} />
                  <div className="user-info">
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
        <section className="content-container">
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
        <section className="content-container">
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
        <section className="content-container">
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
          <div className="projects-grid home-projects-responsive">
            {latestProjectsNews.map((item) => (
              <div className="project-card" key={item.title}>
                <div className="project-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    decoding="async"
                  />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a href="#projects">READ MORE →</a>
                </div>
              </div>
            ))}
            <div className="cta-box">
              <div className="cta-box-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Let&apos;s Build the Future Together</h3>
              <p>Have a project in mind? Our experts are ready to help you.</p>
              <NavLink to="/contact"><button type="button">CONTACT US</button></NavLink>
            </div>
          </div>
        </section>
      </section>

      {/* GLOBAL PRESENCE SECTION */}
      <section className="global-presence-section">
        <div className="content-container">
          <div className="global-header">
            <span className="tag">GLOBAL FOOTPRINT</span>
            <h2>Our Global <span>Presence</span></h2>
            <p>
              Engineering excellence knows no borders. From our headquarters in India, we have expanded our reach
              to deliver turnkey solutions and specialized machinery across 30+ nations.
            </p>
          </div>

          <div className="global-grid">
            <div className="global-stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Countries Served</div>
              <p>Active installations across Asia, Africa, Middle East, and Latin America.</p>
            </div>
            <div className="global-stat-card">
              <div className="stat-number">350+</div>
              <div className="stat-label">Projects Completed</div>
              <p>Successfully commissioned production lines for diverse industrial sectors.</p>
            </div>
            <div className="global-stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Technical Support</div>
              <p>Remote and on-site assistance for global manufacturing operations.</p>
            </div>
          </div>

          <div className="global-regions">
            <div className="region-box">
              <h4>Middle East</h4>
              <p>UAE, Saudi Arabia, Oman, Qatar</p>
            </div>
            <div className="region-box">
              <h4>Africa</h4>
              <p>Nigeria, Kenya, Ethiopia, Algeria</p>
            </div>
            <div className="region-box">
              <h4>Asia</h4>
              <p>India, Bangladesh, Vietnam, Thailand</p>
            </div>
            <div className="region-box">
              <h4>Americas</h4>
              <p>Mexico, Brazil, Colombia</p>
            </div>
          </div>
        </div>
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
  return <About />;
}

const journeyData = [
  {
    id: "01",
    year: "2009",
    title: "Packaging Unit",
    desc: "Foundational entry into high-precision industrial packaging, setting the benchmark for engineering reliability.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    side: "left"
  },
  {
    id: "02",
    year: "2011",
    title: "Fully Automatic Design",
    desc: "Pioneering zero-intervention automation systems to maximize manufacturing efficiency and performance.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    side: "right"
  },
  {
    id: "03",
    year: "2013",
    title: "Processing Mfg",
    desc: "Expanding into complex processing engineering for high-growth food and pharmaceutical industries.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    side: "left"
  },
  {
    id: "04",
    year: "2015",
    title: "Reactors & Vessel Design",
    desc: "Advanced heavy-duty fabrication of chemical reactors and pressure vessels for critical applications.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="22"></line><line x1="9" y1="22" x2="15" y2="22"></line></svg>,
    side: "right"
  },
  {
    id: "05",
    year: "2017",
    title: "Pharma Consultant",
    desc: "Launched strategic engineering consultancy, optimizing plant layouts for global regulatory standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    side: "left"
  },
  {
    id: "06",
    year: "2019",
    title: "GMP Plant Design",
    desc: "Implementing global GMP standards in turnkey plant architecture and facility engineering.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>,
    side: "right"
  },
  {
    id: "07",
    year: "2021",
    title: "Contract Packaging",
    desc: "Scalable, high-speed contract packaging solutions for premium global beauty and food brands.",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
    side: "left"
  },
  {
    id: "08",
    year: "2023",
    title: "International Projects",
    desc: "Executing large-scale international turnkey projects, establishing a global engineering footprint.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    side: "right"
  },
  {
    id: "09",
    year: "2025",
    title: "Automation 4.0 Era",
    desc: "Leading the next industrial revolution with AI-driven Automation 4.0 and smart factory solutions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    side: "left"
  }
];

function ContactJourneySection() {
  return (
    <section className="journey-timeline-section">
      <div className="journey-header">
        <div className="journey-badge">
          <span></span>SINCE 2009
        </div>
        <h2>Our <span>Journey</span></h2>
        <p>An engineering roadmap of precision, innovation, and global expansion.</p>
      </div>

      <div className="journey-timeline-wrapper">
        <div className="journey-timeline-line"></div>
        {journeyData.map((item) => (
          <div key={item.id} className={`journey-item ${item.side}`}>
            {/* Empty space for the opposite side */}
            <div className="journey-spacer"></div>

            {/* Center Node */}
            <div className="journey-node">{item.id}</div>

            {/* Content Wrapper */}
            <div className="journey-content-wrapper">
              <div className="journey-connector"></div>
              <div className="journey-card">
                <img src={item.image} alt={item.title} className="journey-card-img" />
                <div className="journey-card-info">
                  <div className="journey-year">{item.year}</div>
                  <h4 className="journey-card-title">{item.title}</h4>
                  <p className="journey-card-desc">{item.desc}</p>
                </div>
                <div className="journey-icon-wrap">
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <div className="contact-page-new min-w-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-tag">★ ENGINEERING EXCELLENCE</span>
          <h1>Engineering Projects Built for Scale</h1>
          <p>
            Delivering high-performance turnkey processing plants and automated production
            lines worldwide. Our engineering solutions are built for durability, efficiency, and
            industrial-grade output. 350+ Turnkey projects across 30+ countries. We don't just build
            machines; we build operational legacy.
          </p>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="contact-inquiry-section">
        <div className="contact-container">
          <h2 className="section-title text-left">Send Inquiry</h2>
          <div className="inquiry-grid">
            {/* Form */}
            <div className="inquiry-form-wrapper">
              <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </span>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-group">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="input-group">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="input-group">
                  <textarea rows="4" placeholder="Describe your requirement..."></textarea>
                </div>
                <button type="submit" className="submit-inquiry-btn">SUBMIT INQUIRY</button>
                <div className="form-disclaimer">
                  <small>• We typically respond within 24 hours.</small>
                  <small>• We respect your privacy. Your information is safe with us.</small>
                </div>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="inquiry-info-wrapper">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-details">
                  <strong>Call Us</strong>
                  <span>+91 90239 79663</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-details">
                  <strong>Email</strong>
                  <span>info.salvinindustries@gmail.com</span>
                </div>
              </div>
              <div className="help-card">
                <strong>Need Quick Help?</strong>
                <p>Talk directly with our support team</p>
                <a href="#" className="support-link">Contact Support &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="contact-dept-section">
        <div className="contact-container">
          <h2 className="section-title text-center">Contact by Department</h2>
          <div className="dept-grid">
            {/* Dept Cards */}
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <div className="dept-info">
                <strong>Managing Director</strong>
                <span>Keval Gandhi</span>
                <a href="mailto:md.salvinindustries@gmail.com">md.salvinindustries@gmail.com</a>
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="dept-info">
                <strong>General Manager</strong>
                <span>Archna Gohil</span>
                <a href="mailto:gm.salvinindustries@gmail.com">gm.salvinindustries@gmail.com</a>
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="dept-info">
                <strong>CEO Office</strong>
                <span>Purvi Rajput</span>
                <a href="mailto:ceo.salvin@gmail.com">ceo.salvin@gmail.com</a>
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="dept-info">
                <strong>International</strong>
                <span>Ajay Panchal</span>
                <a href="mailto:international.salvin@gmail.com">international.salvin@gmail.com</a>
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div className="dept-info">
                <strong>Corporate</strong>
                <span>Hiyanee Gandhi</span>
                <a href="mailto:corporate.salvinindustries@gmail.com">corporate.salvinindustries@gmail.com</a>
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div className="dept-info">
                <strong>Ask Me</strong>
                <span>Shakshi Modi</span>
                <a href="mailto:solveit.salvinindustries@gmail.com">solveit.salvinindustries@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      {/* <ContactJourneySection /> */}
    </div>
  );
}

function ServicesPage() {
  return (
    <section className="services page-section mx-auto w-full max-w-[1200px]">
      <span className="section-badge">Our Services</span>
      <h1 className="text-3xl font-bold tracking-tight text-[#0d1b3e] sm:text-4xl lg:text-[2.75rem]">Services</h1>
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
  const [showIntro, setShowIntro] = useState(() => location.pathname === "/");
  const [machines, setMachines] = useState(initialMachines);
  const [machineLoadError, setMachineLoadError] = useState("");

  // Persistent state for Spares
  const [spares, setSpares] = useState(() => {
    const saved = localStorage.getItem("salvin_spares");
    return saved ? JSON.parse(saved) : initialSpares;
  });

  // Persistent state for Machine Categories
  const [machineCategories, setMachineCategories] = useState(() => {
    const saved = localStorage.getItem("salvin_machine_categories");
    return saved ? JSON.parse(saved) : initialMachineCategories;
  });

  // Persistent state for Spare Categories
  const [spareCategories, setSpareCategories] = useState(() => {
    const saved = localStorage.getItem("salvin_spare_categories");
    return saved ? JSON.parse(saved) : initialSpareCategories;
  });

  const [sessionImageCache, setSessionImageCache] = useState({});

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => localStorage.getItem("is_admin_authenticated") === "true"
  );

  React.useEffect(() => {
    const loadMachines = () => {
      fetchJson("/api/machines")
        .then((data) => {
          setMachines(Array.isArray(data) ? data : []);
          setMachineLoadError("");
        })
        .catch((error) => {
          console.error("Unable to load machines:", error);
          setMachineLoadError("Machine data not found.");
        });
    };

    loadMachines();
    const refreshTimer = window.setInterval(loadMachines, 15000);
    return () => window.clearInterval(refreshTimer);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("salvin_spares", JSON.stringify(spares));
  }, [spares]);

  React.useEffect(() => {
    localStorage.setItem("salvin_machine_categories", JSON.stringify(machineCategories));
  }, [machineCategories]);

  React.useEffect(() => {
    localStorage.setItem("salvin_spare_categories", JSON.stringify(spareCategories));
  }, [spareCategories]);

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

  const addMachine = async (machineForm, imageFile) => {
    const formData = new FormData();
    Object.entries(machineForm).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const result = await fetchJson("/api/machines", {
      method: "POST",
      body: formData
    });
    setMachines((prev) => [result, ...prev.filter((machine) => machine.machine_id !== result.machine_id)]);
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

  const deleteMachine = async (machineId) => {
    try {
      await fetchJson(`/api/machines/${machineId}`, {
        method: "DELETE"
      });
    } catch (error) {
      console.error("Unable to delete machine:", error);
    }
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

  const isIntroVisible = showIntro && location.pathname === "/";

  return (
    <>
      <div className={`app${isIntroVisible ? " app-intro-active" : ""}`}>
        <Header isAdminAuthenticated={isAdminAuthenticated} onAdminLogout={handleAdminLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/consultant" element={<ConsultantPage />} />
          <Route path="/turnkey" element={<TurnkeyPage />} />
          <Route path="/turnkey-project" element={<TurnkeyProjectPage />} />
          <Route path="/machineries" element={<MachineriesPage machines={machines} sessionCache={sessionImageCache} loadError={machineLoadError} />} />
          <Route path="/machineries/:machineSlug" element={<MachineDetailPage machines={machines} sessionCache={sessionImageCache} />} />
          <Route path="/spares" element={<SparesPage />} />
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
      {isIntroVisible && <IntroOverlay onComplete={() => setShowIntro(false)} />}
    </>
  );
}
