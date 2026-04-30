export default function Footer() {
  const links = [
    { title: "Solutions", items: ["Automation", "Robotics", "Controls", "Engineering"] },
    { title: "Resources", items: ["Case Studies", "Insights", "Careers", "Contact"] },
    { title: "Company", items: ["About Us", "Sustainability", "Partners", "News"] }
  ];

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong>Salvin Industries</strong>
          <p>
            Premium industrial automation and plant engineering solutions for modern manufacturing.
          </p>
        </div>
        {links.map((column) => (
          <div className="footer-column" key={column.title}>
            <h4>{column.title}</h4>
            {column.items.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Salvin Industries. All rights reserved.</span>
      </div>
    </footer>
  );
}
