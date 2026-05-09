import React from "react";

const particlePositions = [
  { left: "12%", top: "24%", delay: "0s", duration: "4.8s" },
  { left: "23%", top: "68%", delay: ".45s", duration: "5.4s" },
  { left: "38%", top: "18%", delay: ".9s", duration: "4.6s" },
  { left: "54%", top: "76%", delay: ".2s", duration: "5.8s" },
  { left: "68%", top: "28%", delay: ".75s", duration: "5.1s" },
  { left: "82%", top: "62%", delay: ".35s", duration: "4.9s" },
  { left: "90%", top: "38%", delay: "1.1s", duration: "5.6s" },
  { left: "8%", top: "48%", delay: ".65s", duration: "5.2s" }
];

function IntroOverlay({ onComplete }) {
  React.useEffect(() => {
    const timer = window.setTimeout(onComplete, 5600);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-overlay" role="dialog" aria-label="Salvin India opening intro">
      <div className="intro-glass-layer" />
      <div className="intro-light intro-light-one" />
      <div className="intro-light intro-light-two" />
      <div className="intro-streak intro-streak-one" />
      <div className="intro-streak intro-streak-two" />

      {particlePositions.map((particle, index) => (
        <span
          className="intro-particle"
          key={index}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}

      <button className="intro-skip" type="button" onClick={onComplete}>
        Skip Intro
      </button>

      <div className="intro-copy-wrap">
        <div className="intro-copy intro-copy-one">
          Your Vision. Our Engineering.
        </div>
        <div className="intro-copy intro-copy-two">
          One Complete Solution
        </div>
        <div className="intro-brand" aria-label="SALVIN INDIA">
          <span>SALVIN</span>
          <span>INDIA</span>
        </div>
      </div>
    </div>
  );
}

export default IntroOverlay;
