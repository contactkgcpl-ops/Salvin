const fs = require('fs');

// 1. Update JSX
let jsxPath = 'src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.jsx';
let jsxContent = fs.readFileSync(jsxPath, 'utf8');

jsxContent = jsxContent.replace(/className="pbm-hero"/g, 'className="imff-hero"');

const newFAQS = `const FAQS = [
  {
    question: "What products can be manufactured using this plant?",
    answer: "Our turnkey plants are versatile and can produce a wide range of instant mixes (like upma, idli, dosa mixes) and frozen foods (like frozen vegetables, snacks, and ready-to-eat meals)."
  },
  {
    question: "What is the production capacity range?",
    answer: "Our processing plants are designed with scalable production capacities tailored to your specific requirements, ranging from pilot-scale operations to fully automated high-volume industrial lines."
  },
  {
    question: "Can the plant handle both Instant Mix and Frozen Food products?",
    answer: "Yes, the facility is engineered with flexible processing lines that seamlessly accommodate the manufacturing and packaging of both dry instant mixes and deep-frozen food products."
  },
  {
    question: "Does SALVIN provide installation and commissioning support?",
    answer: "Absolutely. Salvin Industries offers complete end-to-end turnkey solutions, including plant layout design, equipment supply, on-site installation, automation, commissioning, and operator training."
  },
  {
    question: "Is the plant customizable according to product requirements?",
    answer: "Yes, all our processing plants are highly customizable. We design bespoke solutions tailored to your unique recipe formulations, hygiene standards, and operational goals."
  }
]`;
jsxContent = jsxContent.replace(/const FAQS = \[[\s\S]*?\]\n/, newFAQS + '\n');

fs.writeFileSync(jsxPath, jsxContent);

// 2. Update CSS
let cssPath = 'src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/\.imff-hero {\s*position: relative;\s*min-height: 72vh;/g, '.imff-hero {\n  position: relative;\n  min-height: 80vh;');
cssContent = cssContent.replace(/\.imff-hero__overlay {\s*position: absolute;\s*inset: 0;\s*background: linear-gradient[^;]+;/g, '.imff-hero__overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, rgba(8, 37, 77, 0.88) 0%, rgba(11, 42, 91, 0.85) 50%, rgba(15, 23, 42, 0.90) 100%);');

cssContent = cssContent.replace(/\.imff-hero__content {\s*position: relative;\s*z-index: 2;\s*max-width: 1200px;\s*margin: 0 auto;\s*padding: 80px clamp\(1rem, 4vw, 2\.5rem\) 56px;\s*width: 100%;/g, `.imff-hero__content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px clamp(1rem, 4vw, 2.5rem) 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;`);

cssContent = cssContent.replace(/\.imff-hero__title {\s*font-size: clamp\(28px, 5vw, 48px\);/g, `.imff-hero__title {\n  font-size: clamp(36px, 6vw, 64px);`);
cssContent = cssContent.replace(/\.imff-hero__subtitle {\s*font-size: clamp\(13px, 1\.6vw, 15px\);\s*color: rgba\(255, 255, 255, \.72\);\s*line-height: 1\.65;\s*max-width: 540px;/g, `.imff-hero__subtitle {\n  font-size: clamp(15px, 1.8vw, 18px);\n  color: rgba(255, 255, 255, .85);\n  line-height: 1.65;\n  max-width: 700px;`);

cssContent = cssContent.replace(/\.imff-hero__actions {\s*display: flex;\s*gap: 12px;\s*flex-wrap: wrap;\s*margin-bottom: 36px;/g, `.imff-hero__actions {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 36px;`);

fs.writeFileSync(cssPath, cssContent);
console.log('Update successful');
