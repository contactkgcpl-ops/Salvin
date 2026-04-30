import { FiPhone } from "react-icons/fi";

const navItems = ["Home", "Solutions", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="homepage-navbar">
      <div className="navbar-brand">
        <div className="brand-mark" />
        <div>
          <span>Salvin</span>
          <strong>Industries</strong>
        </div>
      </div>

      <nav className="navbar-center">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button className="btn btn-secondary" type="button">
          <FiPhone size={16} />
          Contact Us
        </button>
      </div>
    </header>
  );
}
