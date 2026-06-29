import React from "react";
import { LANGUAGES, LANGUAGE_CHANGE_EVENT } from "./LanguageSelector";

const particles = [
  ["12%", "22%", "5px", "0s", "5.6s"],
  ["24%", "72%", "7px", ".4s", "6s"],
  ["38%", "16%", "4px", ".9s", "5.2s"],
  ["58%", "78%", "6px", ".2s", "6.4s"],
  ["70%", "26%", "5px", ".7s", "5.7s"],
  ["84%", "62%", "7px", ".3s", "5.8s"],
  ["92%", "38%", "4px", "1.1s", "6.2s"],
  ["8%", "50%", "6px", ".6s", "5.9s"]
];

const blueprintItems = [
  { id: "intro-food", className: "intro-blueprint intro-food", label: "Turnkey processing plant", type: "plant" },
  { id: "intro-pharma", className: "intro-blueprint intro-pharma", label: "Machinery line", type: "machine" },
  { id: "intro-pack-machine", className: "intro-blueprint intro-machine", label: "Packaging machinery", type: "machine" },
  { id: "intro-proc-machine", className: "intro-blueprint intro-machine", label: "Processing machinery", type: "machine" },
  { id: "intro-gear", className: "intro-blueprint intro-gear", label: "Automation project", type: "automation" }
];

function BlueprintIcon({ type }) {
  if (type === "plant") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M20 92h80M28 92V46l20 12V46l20 12V38h24v54" />
        <path d="M36 70h12M58 70h12M80 58h8M80 72h8M80 86h8M72 38V26h16v12" />
        <path d="M28 46l12-18h18l10 30" />
      </svg>
    );
  }

  if (type === "machine") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <rect x="20" y="42" width="80" height="42" rx="6" />
        <path d="M32 84v14M88 84v14M34 56h28M34 68h42M82 54h8M82 66h8" />
        <path d="M42 42V28h36v14M50 28v-8h20v8" />
        <circle cx="36" cy="98" r="5" />
        <circle cx="84" cy="98" r="5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M24 76h72M34 76V44h52v32M44 44V30h32v14" />
      <path d="M42 58h36M50 30v-8h20v8" />
      <path d="M30 90h60M42 76v14M78 76v14" />
      <circle cx="92" cy="34" r="10" />
      <path d="M92 20v4M92 44v4M78 34h4M102 34h4M82 24l3 3M99 41l3 3M102 24l-3 3M85 41l-3 3" />
    </svg>
  );
}

function IntroOverlay({ onComplete }) {
  const [isClosing, setIsClosing] = React.useState(false);
  const [activeScreen, setActiveScreen] = React.useState(0);
  const [selectedLanguageCode, setSelectedLanguageCode] = React.useState("");

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current < 4 ? current + 1 : current));
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const introScreens = [
    <div className="intro-copy intro-screen-copy" key="vision">Your Vision</div>,
    <div className="intro-copy intro-screen-copy intro-copy-engineering" key="engineering">Our Engineering</div>,
    <div className="intro-copy intro-screen-copy" key="solution">One Complete Solution</div>,
    (
      <React.Fragment key="brand">
        <div className="intro-brand-text intro-screen-brand">Salvin India</div>
        <div className="intro-loader-note intro-screen-note">Processing plants, packaging machinery, spares and turnkey projects.</div>
      </React.Fragment>
    ),
  ];

  const selectLanguage = (code) => {
    setSelectedLanguageCode(code);
    window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: { code } }));
    setActiveScreen(5);
  };

  const openCorporatePortal = () => {
    window.location.href = "https://www.salvinindustires.com/";
  };

  const openVendorPortal = () => {
    window.location.href = "https://www.salvinindustires.com/";
  };

  const finishIntro = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      onComplete();
    }, 360);
  };

  return (
    <div className={`intro-overlay${isClosing ? " intro-closing" : ""}`} role="dialog" aria-label="Salvin India opening intro">
      <div className="intro-grid" />
      <div className="intro-glow intro-glow-one" />
      <div className="intro-glow intro-glow-two" />
      <div className="intro-streak intro-streak-one" />
      <div className="intro-streak intro-streak-two" />

      {blueprintItems.map((item) => (
        <div className={item.className} key={item.id} aria-label={item.label}>
          <BlueprintIcon type={item.type} />
        </div>
      ))}

      {particles.map(([left, top, size, delay, duration], index) => (
        <span
          className="intro-particle"
          key={index}
          style={{ left, top, width: size, height: size, animationDelay: delay, animationDuration: duration }}
        />
      ))}

      <div className="intro-copy-wrap">
        <span className="intro-smoke intro-smoke-one" />
        <span className="intro-smoke intro-smoke-two" />
        {activeScreen < introScreens.length && introScreens[activeScreen]}
      </div>

      {activeScreen === 4 && (
        <div className="intro-language-panel">
          <span className="intro-language-kicker">Choose your language</span>
          <h2>Continue in your preferred language</h2>
          <div className="intro-language-grid">
            {LANGUAGES.slice(0, 10).map((language) => (
              <button
                className="intro-language-option"
                type="button"
                key={language.code}
                onClick={() => selectLanguage(language.code)}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeScreen === 5 && (
        <div className="intro-role-panel">
          <span className="intro-language-kicker">Select your role</span>
          <h2>How would you like to continue?</h2>
          <div className="intro-role-grid">
            <button className="intro-role-option intro-role-visitor intro-role-highlighted" type="button" onClick={finishIntro}>
              <span>Visitor</span>
              <small>Enter website</small>
            </button>
            <button className="intro-role-option intro-role-corporate" type="button" onClick={openCorporatePortal}>
              <span>Corporate</span>
              <small>Open corporate portal</small>
            </button>
            <button className="intro-role-option intro-role-vendor" type="button" onClick={openVendorPortal}>
              <span>Vendor</span>
              <small>Open vendor portal</small>
            </button>
          </div>
          {selectedLanguageCode && <p className="intro-role-note">Language selected. Continue as visitor, vendor, or corporate.</p>}
        </div>
      )}
    </div>
  );
}

export default IntroOverlay;
