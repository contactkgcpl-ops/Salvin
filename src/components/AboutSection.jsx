import React from "react";
import { FaUsers, FaPencilRuler, FaCogs, FaGlobe, FaRocket, FaShieldAlt, FaLinkedin } from "react-icons/fa";
import "../assets/About.css";
import Journey from "../components/JourneyTimeline";
import "../assets/HowWeWork.css";
import "../assets/vision.css";
import "../assets/team.css";
import "../assets/why_us.css";
import "../assets/JourneyTimeline.css";

import aboutImg from "../assets/Industrial.png";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const data2 = [
  {
    icon: <FaCogs />,
    title: "Decades of Expertise",
    desc: "Over 25 years of hands-on experience delivering complex industrial engineering and automation solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Innovative Technology",
    desc: "Utilizing AI-driven robotics and cutting-edge IoT frameworks to build future-ready manufacturing operations.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Support",
    desc: "Our dedicated 24/7 technical support network and regional headquarters serve clients across 15+ countries.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    desc: "ISO 9001:2015 certified manufacturing processes ensuring the highest standards of precision and safety.",
  },
];
const team = [
  {
    name: "Vikas Salvin",
    role: "MANAGING DIRECTOR",
    desc: "Visionary leader with 25+ years in automation and industrial solutions.",
    img: team1
  },
  {
    name: "Ketan Patel",
    role: "HEAD OF ENGINEERING",
    desc: "Expert in robotics, integration and smart manufacturing systems.",
    img: team2
  },
  {
    name: "Harshil Mehta",
    role: "AUTOMATION LEAD",
    desc: "Specializes in PLC, SCADA and industrial automation architecture.",
    img: team3
  },
  {
    name: "Priya Sharma",
    role: "OPERATIONS HEAD",
    desc: "Ensures seamless execution and delivery across global projects.",
    img: team4
  }
];
export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
     
      {/* ABOUT */}
       <section className="about-intro">

      <div className="container">

        {/* LEFT CONTENT */}
        <div className="left">

          <span className="tag">ABOUT THE COMPANY</span>

          <h1>
            Engineering <span>India's Industrial</span> <br />
            Future Since 1999
          </h1>

          <p>
            Salvin Industries is a leading turnkey automation and packaging machinery group
            headquartered in Ahmedabad, Gujarat, India. We specialize in designing,
            manufacturing, and deploying high-performance production lines.
          </p>

          <p>
            Our team of 200+ engineers brings together expertise in mechanical design,
            robotics, PLC programming, and process automation.
          </p>

          {/* TIMELINE BOXES */}
          <div className="timeline-box">

            <div className="box">
              <h3>1999</h3>
              <h4>Founded in Ahmedabad</h4>
              <p>Started as a precision engineering workshop.</p>
            </div>

            <div className="box">
              <h3>2008</h3>
              <h4>First International Project</h4>
              <p>Delivered first overseas turnkey plant installation.</p>
            </div>

            <div className="box">
              <h3>2015</h3>
              <h4>Robotic Division Launch</h4>
              <p>Established robotics integration division.</p>
            </div>

            <div className="box">
              <h3>2024</h3>
              <h4>30+ Countries Milestone</h4>
              <p>Completed projects across 30+ nations.</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="right">
          <img src={aboutImg} alt="about" />

          <div className="badge">
            <h2>25+</h2>
            <p>Years of Excellence</p>
          </div>
        </div>

      </div>

    </section>

      {/* HOW WE WORK */}
      <section className="how-work">

      <div className="header">
        <span className="tag">OUR PROCESS</span>
        <h2>
          How We <span>Work</span>
        </h2>
      </div>

      <div className="steps">

        {/* LINE */}
        <div className="line"></div>

        {/* STEP 1 */}
        <div className="step">
          <div className="circle">
            <FaUsers />
          </div>
          <h3>1. Consult & Understand</h3>
          <p>
            We analyze your requirements and understand your production challenges.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="step">
          <div className="circle">
            <FaPencilRuler />
          </div>
          <h3>2. Design & Engineer</h3>
          <p>
            Our experts design customized automation solutions tailored to your goals.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="step">
          <div className="circle">
            <FaCogs />
          </div>
          <h3>3. Build & Integrate</h3>
          <p>
            We manufacture, assemble, and integrate advanced machinery with precision.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="step">
          <div className="circle">
            <FaGlobe />
          </div>
          <h3>4. Support & Optimize</h3>
          <p>
            We provide continuous support and upgrade systems for long-term performance.
          </p>
        </div>

      </div>

    </section>

      {/* JOURNEY */}
      <Journey />

     <section className="vision-section">
      <div className="vision-card">

        {/* LEFT */}
        <div className="vision-left">
          <div className="icon">👁️</div>
          <h2>Our Vision</h2>
          <p>
            To become a globally recognized engineering company delivering
            advanced, future-ready industrial solutions that improve quality of
            life and business efficiency.
          </p>
        </div>

        {/* CENTER SHAPE */}
        <div className="divider"></div>

        {/* RIGHT */}
        <div className="vision-right">
          <div className="icon target">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To empower industries through innovation, automation, and precision
            engineering while maintaining long-term partnerships and delivering
            consistent value.
          </p>
        </div>

      </div>
    </section>


      {/* TEAM */}
      <section className="team-section">

      <div className="team-header">
        <span className="tag">• LEADERSHIP TEAM</span>
        <h2>Driven by Experts. Focused on Excellence.</h2>
      </div>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} />

            <div className="team-content">
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              <p>{member.desc}</p>

              <div className="social">
                <FaLinkedin />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>

      {/* WHY */}
     <section className="why-section">

      {/* HEADER */}
      <div className="why-header">
        <div className="left">
          <span className="tag">• OUR COMPETITIVE EDGE</span>
          <h2>
            Why Leading Industries <span>Choose Salvin</span>
          </h2>
        </div>

        <div className="right">
          <p>
            For over two decades, Salvin Industries has been the trusted
            automation partner for plants across 30+ nations—delivering
            precision, reliability, and performance at scale.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="why-grid">
        {data2.map((item, i) => (
          <div className="why-card" key={i}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>

    </div>
  );
}
