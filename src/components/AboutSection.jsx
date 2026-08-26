import React from "react";
import { NavLink } from "react-router-dom";
import { FaUsers, FaPencilRuler, FaCogs, FaGlobe, FaRocket, FaShieldAlt, FaLinkedin, FaBoxOpen, FaRobot, FaIndustry, FaFlask, FaUserCog, FaCertificate, FaEye, FaBullseye } from "react-icons/fa";
import "../assets/About.css";
// import Journey from "../components/JourneyTimeline";
import "../assets/HowWeWork.css";
import "../assets/vision.css";
import "../assets/team.css";
import "../assets/why_us.css";
import "../assets/md_section.css";
import { FaUserTie, FaBuilding, FaVial } from "react-icons/fa";
const mdImage = "/assets/core/heroes/keval_gandhi.png";

const aboutImg = "/assets/core/icons/Industrial.webp";
const journeyHeroImage = "/assets/core/icons/food-processing-plant.webp";
const journey1 = "/assets/company/journey/d1-1.webp";
const journey2 = "/assets/company/journey/d1-2.webp";
const journey3 = "/assets/company/journey/d1-3.webp";
const journey4 = "/assets/company/journey/d1-4.webp";
const journey5 = "/assets/company/journey/d1-5.webp";
const journey6 = "/assets/company/journey/d1-6.webp";
const journey7 = "/assets/company/journey/d1-7.webp";
const journey8 = "/assets/company/journey/d1-8.webp";
const journey9 = "/assets/company/journey/d1-9.webp";

const team1 = "/assets/company/team/team1.webp";
const team2 = "/assets/company/team/team2.webp";
const team3 = "/assets/company/team/team3.webp";
const team4 = "/assets/company/team/team4.webp";

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

const journeyMilestones = [
  {
    year: "2009",
    title: "Packaging Unit",
    desc: "Foundational entry into high-precision industrial packaging, setting the benchmark for engineering reliability.",
    image: journey1,
    icon: <FaBoxOpen />
  },
  {
    year: "2011",
    title: "Fully Automatic Design",
    desc: "Pioneering zero-intervention automation systems to maximize manufacturing efficiency and performance.",
    image: journey2,
    icon: <FaRobot />
  },
  {
    year: "2013",
    title: "Processing Mfg",
    desc: "Expanding into complex processing engineering for high-growth food and pharmaceutical industries.",
    image: journey3,
    icon: <FaIndustry />
  },
  {
    year: "2015",
    title: "Reactors & Vessel Design",
    desc: "Advanced heavy-duty fabrication of chemical reactors and pressure vessels for critical applications.",
    image: journey4,
    icon: <FaFlask />
  },
  {
    year: "2017",
    title: "Pharma Consultant",
    desc: "Launched strategic engineering consultancy, optimizing plant layouts for global regulatory standards.",
    image: journey5,
    icon: <FaUserCog />
  },
  {
    year: "2019",
    title: "GMP Plant Design",
    desc: "Implementing global GMP standards in turnkey plant architecture and facility engineering.",
    image: journey6,
    icon: <FaCertificate />
  },
  {
    year: "2021",
    title: "Contract Packaging",
    desc: "Scalable, high-speed packaging solutions for premium global beauty and food brands.",
    image: journey7,
    icon: <FaBoxOpen />
  },
  {
    year: "2023",
    title: "International Projects",
    desc: "Executing large-scale international turnkey projects, establishing a global engineering footprint.",
    image: journey8,
    icon: <FaGlobe />
  },
  {
    year: "2025",
    title: "Automation 4.0 Era",
    desc: "Leading the next industrial revolution with AI-driven Automation 4.0 and smart factory solutions.",
    image: journey9,
    icon: <FaRocket />
  }
];

const team = [
  {
    name: "Keval Gandhi",
    role: "MANAGING DIRECTOR",
    desc: "Founder and visionary leader with extensive expertise in turnkey industrial solutions.",
    img: mdImage
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
      <section
        className="journey-premium-hero"
        style={{ backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.84), rgba(9, 25, 56, 0.78)), url(${journeyHeroImage})` }}
      >
        <span className="mach-hero-badge">+ SALVIN JOURNEY</span>
        <h1>Engineering Progress<br />Since 2008</h1>
        <p>
          From precision packaging machinery to global turnkey consultancy, Salvin Industries
          has grown through disciplined engineering, automation expertise, and long-term client partnerships.
        </p>
        <div className="mach-hero-btns">
          <NavLink className="mach-hero-btn primary" to="/contact">START YOUR PROJECT</NavLink>
          <NavLink className="mach-hero-btn outline" to="/turnkey-project">EXPLORE TURNKEY</NavLink>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-intro">

        <div className="container">

          {/* LEFT CONTENT */}
          <div className="left">

            <span className="tag">ABOUT THE COMPANY</span>

            <h1>
              About <span>The Company</span>
            </h1>

            <p>
              Salvin Industries is a trusted leader in providing comprehensive turnkey solutions and technical consultancy for the food &amp; beverage, pharmaceutical, chemical, aerospace, energy, cosmetic, and specialty manufacturing industries.
            </p>

            <p>
              We specialize in delivering end-to-end engineering services that cover every stage of your industrial project—from concept design and 3D plant layout planning to custom machinery fabrication, installation, and final commissioning. Our multidisciplinary team ensures seamless project execution, cost-effective capital deployment, and dependable long-term performance.
            </p>

            <p>
              Backed by over 15+ years of engineering mastery and 120+ successfully commissioned turnkey projects across India and international markets, Salvin Industries combines advanced manufacturing technologies, high-grade SS304/SS316L fabrication, and strict compliance with ISO 9001, WHO-GMP, FSSAI, and ASME benchmarks to help manufacturers scale with complete confidence.
            </p>

            {/* 4 METRIC STAT CARDS ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ff7a00] block mb-1">15+</span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0b1c2c]">Years Mastery</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ff7a00] block mb-1">120+</span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0b1c2c]">Turnkey Plants</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ff7a00] block mb-1">5+</span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0b1c2c]">Nations Reached</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ff7a00] block mb-1">100%</span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0b1c2c]">ISO &amp; cGMP</span>
              </div>
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

      {/* MANAGING DIRECTOR SECTION */}
      <section className="md-section">
        <div className="md-container">
          <div className="md-image-box">
            <img src={mdImage} alt="Keval Gandhi - Managing Director" />
          </div>

          <div className="md-content">
            <h2>Managing Director</h2>
            <p className="bio">
              Keval Gandhi is the Founder and Managing Director of Salvin Industries,
              a leading engineering and consulting firm based in Gujarat, India.
              Under his visionary leadership since 2008, the company has grown into a global
              provider of turnkey plant solutions, automated machinery, and industrial consulting.
            </p>

            <div className="md-expertise-title">Professional Roles & Expertise</div>
            <div className="expertise-list">
              <div className="expertise-item">
                <div className="expertise-icon"><FaUserTie /></div>
                <div className="expertise-text">
                  <h4>Industrial Consultant</h4>
                  <p>He provides expert consulting for the food and pharmaceutical industries, specializing in production planning, control, and process optimization.</p>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon"><FaBuilding /></div>
                <div className="expertise-text">
                  <h4>Founder of Salvin Industries</h4>
                  <p>He established Salvin Industries, which offers complete, sustainable, and high-output industrial solutions for startups and large corporates alike.</p>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon"><FaVial /></div>
                <div className="expertise-text">
                  <h4>Lead at Salvin Pharma</h4>
                  <p>He is also associated with Salvin Pharma and Packaging Industries, which deals in organic spices, chocolates, and automatic packaging plants.</p>
                </div>
              </div>
            </div>

            <button className="md-footer-btn">For More Info..</button>
          </div>
        </div>
      </section>

      <section className="journey-roadmap-section">
        <div className="journey-roadmap-header">
          <span className="tag">SINCE 2009</span>
          <h2>Our <span>Journey</span></h2>
          <p>An engineering roadmap of precision, innovation, and global expansion.</p>
        </div>

        <div className="journey-roadmap">
          <div className="journey-roadmap-line" aria-hidden="true"></div>
          {journeyMilestones.map((item, index) => (
            <article className={`journey-roadmap-item ${index % 2 === 0 ? "left" : "right"}`} key={item.title}>
              <div className="journey-roadmap-card">
                <img src={item.image} alt={item.title} />
                <div className="journey-roadmap-content">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="journey-roadmap-icon">{item.icon}</div>
              </div>
              <div className="journey-roadmap-node">{String(index + 1).padStart(2, "0")}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-card">

          {/* LEFT */}
          <div className="vision-left">
            <div className="icon"><FaEye /></div>
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
            <div className="icon target"><FaBullseye /></div>
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
      {/* <section className="team-section">

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

      </section> */}

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
