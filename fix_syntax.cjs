const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Fix Biscuit syntax error
content = content.replace(/\s*\}\s*\}\,\s*\'biscuit\-baking\-turnkey\'\:\s*\{/, "\n  },\n  'biscuit-baking-turnkey': {");

// 2. Banana Chips Rename
content = content.replace(/'banana-chips-processing-line': \{/g, "'banana-chips-processing-plant': {");
content = content.replace(/\/banana-chips-processing-line\//g, "/banana-chips-processing-plant/");
content = content.replace(/Banana Chips Processing Line/g, "Banana Chips Processing Plant");
content = content.replace(
  /pdfFile: 'banana_chips_plant\.pdf',/,
  "pdfFile: 'banana_chips_plant.pdf',\n    workflowTitle: 'Banana Chips Processing Plant',\n    workflowAccentTitle: 'Workflow',"
);

// We need to add Economical Kurkure and Protein Powder configurations before biscuit-baking-turnkey
const kurkureCode = `
  'economical-kurkure-making-plant': {
    title: 'Economical Kurkure Making Plant',
    badge: 'TURNKEY SNACK PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Economical Kurkure Production',
    workflowTitle: 'Economical Kurkure Plant',
    workflowAccentTitle: 'Workflow',
    pdfFile: 'Economical_Kurkure_Plant.pdf',
    heroImage: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-hero.jpg',
    heroMinHeight: '600px',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: { capacity: '100 Kg–500 Kg', stages: '7 Stage', efficiency: '98%', support: '24/7' },
    overview: {
      title: 'Complete Economical Kurkure Plant',
      p1: 'Salvin Industries\\' Economical Kurkure Making Plant provides an efficient and high-quality processing solution for extruded snacks. The line covers everything from raw material feeding to continuous frying and automated pouch packaging.',
      p2: 'Built for precision and uniform taste, our advanced equipment ensures the right crunch, texture, and flavor coating, maximizing production efficiency while minimizing operational costs.',
      highlights: [
        { title: 'High Efficiency', desc: 'Optimized continuous frying and extrusion.' },
        { title: 'Uniform Flavoring', desc: 'Consistent seasoning for every batch.' },
        { title: 'Hygienic Operation', desc: 'Food-grade stainless steel construction.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-hero.jpg',
      photoImage: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-hero.jpg',
      features4: [
        { title: 'Food Grade', desc: 'SS304/SS316 material' },
        { title: 'Cost Effective', desc: 'Economical design' },
        { title: 'Continuous Run', desc: 'Built for non-stop production' },
        { title: 'Easy Maintenance', desc: 'Accessible components' }
      ]
    },
    capacities: [
      { size: '100 Kg/Hr', desc: 'Entry-level for startups.' },
      { size: '250 Kg/Hr', desc: 'Standard medium scale.' },
      { size: '500 Kg/Hr', desc: 'High-volume production.' }
    ],
    features: [
      { title: 'Efficient Extrusion', desc: 'High-performance extruders for perfect crunch.' },
      { title: 'Automated Frying', desc: 'Continuous fryers with precise oil temperature control.' },
      { title: 'Consistent Coating', desc: 'Rotary drum seasoning ensures uniform flavor distribution.' },
      { title: 'Food Safety', desc: 'All contact parts comply with stringent hygiene standards.' },
      { title: 'Energy Saving', desc: 'Optimized heating systems reduce operational costs.' },
      { title: 'Fast Packaging', desc: 'Integrated form-fill-seal machines for rapid bagging.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Feeding', desc: 'Automated hoppers feed corn meal and ingredients.' },
      { id: 2, title: 'Dough Mixing', desc: 'Continuous mixers blend raw materials with moisture.' },
      { id: 3, title: 'Extrusion', desc: 'High-shear extruders cook and shape the dough into curls.' },
      { id: 4, title: 'Frying', desc: 'Continuous frying removes moisture and adds crunch.' },
      { id: 5, title: 'De-Oiling', desc: 'Vibratory conveyors remove excess surface oil.' },
      { id: 6, title: 'Flavoring', desc: 'Seasoning drums uniformly coat the snacks with flavor.' },
      { id: 7, title: 'Packaging', desc: 'Automated packing machines weigh and seal the pouches.' }
    ],
    machinery: [
      { name: 'Raw Material Storage & Feeding System', image: '/turnkey-brochures/images/economical-kurkure-making-plant/raw-material-storage-feeding-system.jpg', desc: 'Automated silos and feeders for continuous raw material supply.' },
      { name: 'Continuous Dough Mixer', image: '/turnkey-brochures/images/economical-kurkure-making-plant/continuous-dough-mixer.jpg', desc: 'High-speed mixer for uniform hydration of corn meal.' },
      { name: 'Kurkure Extruder Machine', image: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-extruder-machine.jpg', desc: 'Precision extruder for shaping and expanding the snack.' },
      { name: 'Continuous Frying System', image: '/turnkey-brochures/images/economical-kurkure-making-plant/continuous-frying-system.jpg', desc: 'Advanced fryer with continuous oil filtration and temperature control.' },
      { name: 'Flavoring & Seasoning Drum', image: '/turnkey-brochures/images/economical-kurkure-making-plant/flavoring-seasoning-drum.jpg', desc: 'Rotary drum with automated powder applicator for even coating.' },
      { name: 'Automatic Pouch Packing Machine', image: '/turnkey-brochures/images/economical-kurkure-making-plant/automatic-pouch-packing-machine.jpg', desc: 'High-speed vertical FFS machine with multi-head weighers.' }
    ],
    applications: [
      { title: 'Masala Kurkure', desc: 'Spicy Indian flavored extruded snacks.' },
      { title: 'Tomato Tangy Curls', desc: 'Sweet and sour tomato flavored curls.' },
      { title: 'Cheese Puffs', desc: 'Cheese flavored extruded snacks.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-hero.jpg', caption: 'Economical Kurkure Making Plant' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/raw-material-storage-feeding-system.jpg', caption: 'Raw Material Storage & Feeding System' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/continuous-dough-mixer.jpg', caption: 'Continuous Dough Mixer' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/kurkure-extruder-machine.jpg', caption: 'Kurkure Extruder Machine' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/continuous-frying-system.jpg', caption: 'Continuous Frying System' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/flavoring-seasoning-drum.jpg', caption: 'Flavoring & Seasoning Drum' },
      { src: '/turnkey-brochures/images/economical-kurkure-making-plant/automatic-pouch-packing-machine.jpg', caption: 'Automatic Pouch Packing Machine' }
    ]
  },
  'protein-powder-production-plant': {
    title: 'Protein Powder Production Plant',
    badge: 'TURNKEY POWDER PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Protein Powder Manufacturing',
    heroImage: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.jpg',
    heroMinHeight: '600px',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    workflowTitle: 'Protein Powder Plant',
    workflowAccentTitle: 'Workflow',
    pdfFile: 'protein_powder_production_plant.pdf',
    stats: { capacity: '500 Kg–5 Ton', stages: '7 Stage', efficiency: '99%', support: '24/7' },
    overview: {
      title: 'Complete Protein Powder Production Plant',
      p1: 'Salvin Industries\\' Protein Powder Production Plant is an advanced turnkey solution designed for the large-scale manufacturing of high-quality nutritional powders. It encompasses everything from raw material handling to fine blending, homogenization, drying, and fully automated packaging.',
      p2: 'Built with stringent food safety and GMP compliance in mind, the plant utilizes SS304/SS316 food-grade materials. Its precision-engineered components ensure uniform particle size, excellent solubility, and a consistent nutritional profile for every batch.',
      highlights: [
        { title: 'GMP Compliant', desc: 'Designed for strict food safety standards.' },
        { title: 'Uniform Blending', desc: 'Ensures consistent flavor and nutrition.' },
        { title: 'High Yield', desc: 'Optimized for maximum product recovery.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.jpg',
      photoImage: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.jpg',
      features4: [
        { title: 'Hygienic Design', desc: 'SS304/SS316 food-grade construction' },
        { title: 'Precision Dosing', desc: 'Accurate ingredient measurement' },
        { title: 'Dust Control', desc: 'Enclosed systems prevent contamination' },
        { title: 'Automated Cleaning', desc: 'Integrated CIP for easy sanitation' }
      ]
    },
    capacities: [
      { size: '500 Kg/Hr', desc: 'Ideal for medium-scale regional brands.' },
      { size: '1 Ton/Hr', desc: 'Standard capacity for commercial production.' },
      { size: '5 Ton/Hr', desc: 'High-volume industrial-scale manufacturing.' }
    ],
    features: [
      { title: 'Food Grade Material', desc: 'All contact parts are constructed from SS304/SS316 for ultimate hygiene and safety.' },
      { title: 'Advanced Automation', desc: 'Siemens/Allen-Bradley PLC systems provide precise control over the entire production line.' },
      { title: 'Efficient Blending', desc: 'High-capacity ribbon blenders ensure a perfectly homogeneous mixture of ingredients.' },
      { title: 'Precision Milling', desc: 'Fine grinding systems deliver the optimal particle size for excellent solubility.' },
      { title: 'Dust Management', desc: 'Integrated aspiration systems maintain a clean, dust-free manufacturing environment.' },
      { title: 'High-Speed Packaging', desc: 'Automated filling machines handle both jars and pouches with high accuracy.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Handling', desc: 'Automated intake, sifting, and safe storage of base ingredients.' },
      { id: 2, title: 'Vibratory Sifting', desc: 'High-efficiency sifters remove impurities and ensure uniform particle size.' },
      { id: 3, title: 'Ribbon Blending', desc: 'Thorough mixing of proteins, flavors, and nutritional additives.' },
      { id: 4, title: 'Homogenization', desc: 'High-shear processing guarantees a smooth, clump-free texture.' },
      { id: 5, title: 'Fluid Bed Drying', desc: 'Continuous drying optimally controls moisture levels for shelf stability.' },
      { id: 6, title: 'Quality Control', desc: 'Inline metal detection and weight checking ensure product safety.' },
      { id: 7, title: 'Filling & Packaging', desc: 'Precision dosing into wide-mouth jars, tubs, or flexible pouches.' }
    ],
    machinery: [
      { name: 'Raw Material Handling System', image: '/turnkey-brochures/images/protein-powder-production-plant/raw-material-handling-system.jpg', desc: 'Automated intake and storage silos equipped with precise load cells.' },
      { name: 'Vibratory Sifter', image: '/turnkey-brochures/images/protein-powder-production-plant/vibratory-sifter.jpg', desc: 'Multi-deck sifting unit to ensure product purity and consistency.' },
      { name: 'Ribbon Blender', image: '/turnkey-brochures/images/protein-powder-production-plant/ribbon-blender.jpg', desc: 'Heavy-duty industrial blender for homogeneous mixing of dry powders.' },
      { name: 'Homogenization Unit', image: '/turnkey-brochures/images/protein-powder-production-plant/homogenization-unit.jpg', desc: 'High-shear mixer designed to eliminate clumps and improve solubility.' },
      { name: 'Continuous Fluid Bed Dryer', image: '/turnkey-brochures/images/protein-powder-production-plant/continuous-fluid-bed-dryer.jpg', desc: 'Advanced drying system for gentle and uniform moisture removal.' },
      { name: 'Filling Machine', image: '/turnkey-brochures/images/protein-powder-production-plant/filling-machine.jpg', desc: 'High-speed auger filler for accurate dosing into jars and pouches.' }
    ],
    applications: [
      { title: 'Whey Protein', desc: 'High-quality whey isolates and concentrates for sports nutrition.' },
      { title: 'Plant Protein', desc: 'Vegan-friendly pea, soy, and rice protein powder blends.' },
      { title: 'Mass Gainer', desc: 'High-calorie carbohydrate and protein blends for muscle building.' },
      { title: 'Meal Replacements', desc: 'Nutritionally complete shake powders for daily wellness.' }
    ],
    faqs: [
      { question: 'What types of protein powders can this plant produce?', answer: 'Our turnkey plants are versatile and can produce Whey Protein, Plant-Based Proteins (Pea, Soy, Hemp), Mass Gainers, and specialized meal replacement shakes.' },
      { question: 'Is the plant compliant with food safety regulations?', answer: 'Yes, the entire plant is designed with GMP, ISO, and HACCP compliance in mind, utilizing food-grade SS304/SS316 stainless steel for all contact parts.' },
      { question: 'Does the packaging line support both jars and pouches?', answer: 'Absolutely. We offer customizable packaging solutions that can seamlessly integrate automated filling for wide-mouth jars, tubs, and flexible pouches.' },
      { question: 'How do you ensure the powder is easy to mix?', answer: 'Our advanced multi-stage processing includes precision milling and high-shear homogenization to ensure an optimal particle size distribution for excellent solubility and a clump-free texture.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.jpg', caption: 'Fully Automated Protein Powder Production Plant' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/raw-material-handling-system.jpg', caption: 'Raw Material Handling System' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/vibratory-sifter.jpg', caption: 'Vibratory Sifter' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/ribbon-blender.jpg', caption: 'Ribbon Blender' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/homogenization-unit.jpg', caption: 'Homogenization Unit' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/continuous-fluid-bed-dryer.jpg', caption: 'Continuous Fluid Bed Dryer' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/filling-machine.jpg', caption: 'Filling Machine' }
    ]
  },
`;

if (!content.includes("'economical-kurkure-making-plant':")) {
  content = content.replace(/(\n\s*\'biscuit\-baking\-turnkey\'\:)/, kurkureCode + "$1");
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Syntax fixed, Banana Chips renamed, missing projects restored.");
