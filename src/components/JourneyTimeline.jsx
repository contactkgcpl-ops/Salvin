import {
  FaBoxOpen,
  FaFlask,
  FaGlobeAmericas,
  FaIndustry,
  FaMicrochip,
  FaRobot,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

import img1 from "../assets/journey/d1-1.png";
import img2 from "../assets/journey/d1-2.png";
import img3 from "../assets/journey/d1-3.png";
import img4 from "../assets/journey/d1-4.png";
import img5 from "../assets/journey/d1-5.png";
import img6 from "../assets/journey/d1-6.png";
import img7 from "../assets/journey/d1-7.png";
import img8 from "../assets/journey/d1-8.png";
import img9 from "../assets/journey/d1-9.png";

const timeline = [
  {
    year: "2009",
    title: "Packaging Unit",
    description:
      "Foundational entry into high-precision industrial packaging, setting the benchmark for engineering reliability.",
    image: img1,
    side: "left",
    icon: FaBoxOpen,
  },
  {
    year: "2011",
    title: "Fully Automatic Design",
    description:
      "Pioneering zero-intervention automation systems to maximize manufacturing efficiency and performance.",
    image: img2,
    side: "right",
    icon: FaRobot,
  },
  {
    year: "2013",
    title: "Processing Mfg",
    description:
      "Expanding into complex processing engineering for high-growth food and pharmaceutical industries.",
    image: img3,
    side: "left",
    icon: FaIndustry,
  },
  {
    year: "2015",
    title: "Reactors & Vessel Design",
    description:
      "Advanced heavy-duty fabrication of chemical reactors and pressure vessels for critical applications.",
    image: img4,
    side: "right",
    icon: FaFlask,
  },
  {
    year: "2017",
    title: "Pharma Consultant",
    description:
      "Launched strategic engineering consultancy, optimizing plant layouts for global regulatory standards.",
    image: img5,
    side: "left",
    icon: FaUserTie,
  },
  {
    year: "2019",
    title: "GMP Plant Design",
    description:
      "Implementing global GMP standards in turnkey plant architecture and facility engineering.",
    image: img6,
    side: "right",
    icon: FaShieldAlt,
  },
  {
    year: "2021",
    title: "Contract Packaging",
    description:
      "Scalable, high-speed contract packaging solutions for premium global beauty and food brands.",
    image: img7,
    side: "left",
    icon: FaBoxOpen,
  },
  {
    year: "2023",
    title: "International Projects",
    description:
      "Executing large-scale international turnkey projects, establishing a global engineering footprint.",
    image: img8,
    side: "right",
    icon: FaGlobeAmericas,
  },
  {
    year: "2025",
    title: "Automation 4.0 Era",
    description:
      "Leading the next industrial revolution with AI-driven Automation 4.0 and smart factory solutions.",
    image: img9,
    side: "left",
    icon: FaMicrochip,
  },
];

export default function JourneyTimeline() {
  return (
    <section className="journey" id="journey">
      <div className="header">
        <span className="tag">SINCE 2009</span>
        <h2>
          Our <span>Journey</span>
        </h2>
        <p>An engineering roadmap of precision, innovation, and global expansion.</p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`${item.year}-${item.title}`} className={`row ${item.side}`}>
              <article className="card">
                {item.side === "left" && (
                  <img className="timeline-image" src={item.image} alt={item.title} />
                )}

                <div className="content">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="event-icon" aria-hidden="true">
                  <Icon />
                </span>

                {item.side === "right" && (
                  <img className="timeline-image" src={item.image} alt={item.title} />
                )}
              </article>

              <div className="center">
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
