const stats = [
  { value: "350+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "9,000+", label: "Happy Operators" },
  { value: "18,000+", label: "Hours of Uptime" }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.value}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
            {index < stats.length - 1 && <div className="vertical-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
