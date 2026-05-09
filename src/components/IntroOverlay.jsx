import React from "react";
import salvinLogo from "../assets/salvin_logo.png";

const particlePositions = [
  { left: "12%", top: "24%", delay: "0s", duration: "4.8s", size: "5px" },
  { left: "23%", top: "68%", delay: ".45s", duration: "5.4s", size: "7px" },
  { left: "38%", top: "18%", delay: ".9s", duration: "4.6s", size: "4px" },
  { left: "54%", top: "76%", delay: ".2s", duration: "5.8s", size: "6px" },
  { left: "68%", top: "28%", delay: ".75s", duration: "5.1s", size: "5px" },
  { left: "82%", top: "62%", delay: ".35s", duration: "4.9s", size: "7px" },
  { left: "90%", top: "38%", delay: "1.1s", duration: "5.6s", size: "4px" },
  { left: "8%", top: "48%", delay: ".65s", duration: "5.2s", size: "6px" },
  { left: "46%", top: "42%", delay: "1.25s", duration: "5s", size: "4px" },
  { left: "72%", top: "48%", delay: "1.45s", duration: "5.7s", size: "5px" }
];

function IntroOverlay({ onComplete, logoSrc = salvinLogo }) {
  React.useEffect(() => {
    const timer = window.setTimeout(onComplete, 9000);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-overlay" role="dialog" aria-label="Salvin India opening intro">
      <div className="intro-streak intro-streak-one" />
      <div className="intro-streak intro-streak-two" />

      {particlePositions.map((particle, index) => (
        <span
          className="intro-particle"
          key={index}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}

      <button className="intro-skip" type="button" onClick={onComplete}>
        Skip Intro
      </button>

      <div className="intro-copy-wrap">
        <span className="intro-smoke intro-smoke-one" />
        <span className="intro-smoke intro-smoke-two" />
        <span className="intro-smoke intro-smoke-three" />
        <div className="intro-copy intro-copy-one">
          Your Vision. Our Engineering.
        </div>
        <div className="intro-copy intro-copy-two">
          One Complete Solution
        </div>
        <div className="intro-logo-stage">
          <div className="intro-logo-glow" />
          <div className="intro-logo-ring intro-logo-ring-one" />
          <div className="intro-logo-ring intro-logo-ring-two" />
          <div className="intro-logo-card">
            <span className="intro-logo-shine" />
            <img className="intro-logo-img" src={logoSrc} alt="Salvin Industries" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroOverlay;
