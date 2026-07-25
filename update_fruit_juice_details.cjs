const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const newMachineryList = `const MACHINERY_LIST = [
  {
    "name": "High-Capacity Washing & Sorting Machine",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/washing_sorting.jpg",
    "desc": "High-capacity washing flume ensuring complete removal of dirt, pesticides, and microbial contaminants from raw fruits."
  },
  {
    "name": "Advanced Pulping & Juice Extraction",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/pulping_extraction.jpg",
    "desc": "Robust stainless steel extraction unit engineered for maximum juice yield while efficiently separating seeds and skins."
  },
  {
    "name": "Automated Filtration & Clarification System",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/filtration_clarification.jpg",
    "desc": "Advanced micro-filtration machinery designed to produce clear, pulp-free juice with perfect consistency."
  },
  {
    "name": "Continuous Pasteurization & Mixing Tank",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/pasteurization_mixing.jpg",
    "desc": "High-efficiency thermal processing equipment ensuring the elimination of pathogens while preserving the fruit's natural vitamins and aroma."
  },
  {
    "name": "High-Speed Rotary Filling Line",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/automatic_filling.jpg",
    "desc": "Highly automated bottling and capping system that guarantees a sterile packaging environment for extended shelf life."
  },
  {
    "name": "Automated Labeling & Packaging",
    "image": "/turnkey-brochures/images/fruit-juice-gallery/labeling_packaging.jpg",
    "desc": "End-of-line packaging automation including high-speed labelers and case packers to prepare the juice for distribution."
  }
];`;

// Replace MACHINERY_LIST
content = content.replace(/const MACHINERY_LIST = \[[\s\S]*?\];/, newMachineryList);

// Replace Overview image
content = content.replace(
  /<div className="rcp-overview__image rcp-overview__image--photo">\s*<img src="\/turnkey-brochures\/images\/fruit-juice.jpeg" alt="Fully Automated Fruit Juice Processing Plant" loading="lazy" \/>\s*<\/div>/,
  `<div className="rcp-overview__image rcp-overview__image--photo">
              <img src="/turnkey-brochures/images/hero_fruit_juice.png" alt="Fully Automated Fruit Juice Processing Plant Overview" loading="lazy" />
            </div>`
);

fs.writeFileSync(filePath, content);
console.log("Successfully updated machinery and overview images!");
