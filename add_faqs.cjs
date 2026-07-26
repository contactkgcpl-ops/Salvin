const fs = require('fs');
const path = require('path');

const plants = [
  {
    file: 'FullyAutomaticMixedSpicePlantDetailPage.jsx',
    faqs: `const FAQS = [
  { question: "What is the production capacity of the Fully Automatic Mixed Spice Plant?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "What materials are used in the construction of the mixed spice plant?", answer: "All product contact parts are manufactured using high-grade stainless steel (SS 304 / SS 316) to ensure strict hygiene and food safety compliance." },
  { question: "Can the plant handle different types of spices?", answer: "Yes, our versatile systems are designed to process, grind, and blend a wide variety of whole and powdered spices with minimal changeover time." }
];`
  },
  {
    file: 'FullyAutomaticPasteurizedMilkPlantDetailPage.jsx',
    faqs: `const FAQS = [
  { question: "What is the production capacity of the Pasteurized Milk Plant?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "What is the shelf life of the milk processed in this plant?", answer: "Through our highly precise pasteurization and rapid cooling processes, the milk achieves a significantly extended shelf life while retaining its natural nutritional value." },
  { question: "Do you supply the CIP (Clean-In-Place) system with the milk plant?", answer: "Yes, our milk processing plants come integrated with advanced automatic CIP systems to ensure thorough cleaning and zero bacterial contamination between batches." }
];`
  },
  {
    file: 'FullyAutomaticSpicePackagingLineDetailPage.jsx',
    faqs: `const FAQS = [
  { question: "What is the production capacity of the Spice Packaging Line?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "What packaging formats are supported by this line?", answer: "Our packaging lines can be flexibly configured for pillow pouches, stand-up pouches, jars, cartons, and bulk bags, providing maximum versatility for retail or industrial needs." },
  { question: "How accurate is the weighing system?", answer: "We utilize highly precise multi-head weighers and servo-driven auger fillers that guarantee exact product weights, significantly reducing product giveaway and boosting profitability." }
];`
  },
  {
    file: 'FullyAutomatedCurryPowderProcessingPlantDetailPage.jsx',
    faqs: `const FAQS = [
  { question: "What is the production capacity of the Curry Powder Processing Plant?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "How do you prevent flavor loss during grinding?", answer: "Our heavy-duty pulverizers are equipped with specialized water-cooling jackets that maintain low grinding temperatures, perfectly preserving the essential volatile oils." },
  { question: "Is the curry powder plant suitable for exporting products?", answer: "Yes, our equipment ensures 100% homogeneous blending and airtight packaging, strictly meeting international export standards for quality and hygiene." }
];`
  },
  {
    file: 'SpiceBlendingPlantDetailPage.jsx',
    faqs: `const FAQS = [
  { question: "What is the production capacity of the Spice Blending Plant?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." },
  { question: "How do you ensure a perfectly uniform spice blend?", answer: "We use advanced industrial ribbon blenders and paddle mixers with optimized agitator designs that ensure 100% homogeneous mixing of even trace ingredients." },
  { question: "Can the blending plant handle liquid flavor additions?", answer: "Absolutely. Our blenders can be equipped with customized liquid spray systems for infusing oils, oleoresins, or liquid flavors evenly during the mixing process." }
];`
  }
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

plants.forEach(p => {
  const filePath = path.join(componentsDir, p.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the FAQS array block
    const faqRegex = /const FAQS = \[[\s\S]*?\];/;
    if (faqRegex.test(content)) {
      content = content.replace(faqRegex, p.faqs);
      fs.writeFileSync(filePath, content);
      console.log('Updated FAQs for ' + p.file);
    } else {
      console.log('Could not find FAQS block in ' + p.file);
    }
  }
});
