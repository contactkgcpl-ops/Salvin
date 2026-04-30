const team = [
  {
    name: "Aarav Kapoor",
    role: "Lead Automation Engineer",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mira Reddy",
    role: "Project Delivery Director",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Nikhil Sharma",
    role: "Operations Strategy Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="team">
      <div className="container section-header">
        <span className="section-label">Driven by experts. Focused on excellence.</span>
        <h2>Experienced team delivering industrial transformation.</h2>
      </div>
      <div className="testimonial-grid">
        {team.map((member) => (
          <div className="testimonial-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <div className="testimonial-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
