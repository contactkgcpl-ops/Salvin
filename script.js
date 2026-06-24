const fs = require('fs');

let content = fs.readFileSync('src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.jsx', 'utf8');

// Replacements
content = content.replace(/ProteinBarManufacturingDetailPage/g, 'InstantMixFrozenFoodDetailPage');
content = content.replace(/Protein Bar Manufacturing Plant/g, 'Instant Mix & Frozen Food Processing Plant');
content = content.replace(/Protein Bar/g, 'Instant Mix & Frozen Food');
content = content.replace(/protein_bar\.pdf/g, 'instant_mix_and_frozen_food.pdf');
content = content.replace(/TURNKEY PROTEIN BAR MANUFACTURING SOLUTION/g, 'TURNKEY INSTANT MIX & FROZEN FOOD PROCESSING SOLUTION');
content = content.replace(/Complete Turnkey Solution For Advanced Ingredient Dosing, Mixing, Forming, Cutting And Packaging Of Nutritional Bars/g, 'Complete Turnkey solutions for Instant Mix & Frozen Food Processing & Packaging');
content = content.replace(/protein-bar-gallery\/1_ingredient_dosing\.jpg/g, 'instant-mix-frozen-food/instant_mix_frozen_food_hero.jpg');

const processStepsReplacement = const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material Receiving' },
  { id: 2, title: 'Ingredient Weighing & Batching' },
  { id: 3, title: 'Mixing & Blending' },
  { id: 4, title: 'Cooking & Processing' },
  { id: 5, title: 'Cooling & Freezing' },
  { id: 6, title: 'Quality Inspection' },
  { id: 7, title: 'Packaging & Dispatch' },
];
content = content.replace(/const PROCESS_STEPS = \[[\s\S]*?\]/, processStepsReplacement);

const machineryListReplacement = const MACHINERY_LIST = [
  {
    name: 'Ingredient Weighing & Batching System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/ingredient_weighing_batching_system.jpg',
    desc: 'Accurate weighing and ingredient batching system to ensure consistent mix proportions for every production run.'
  },
  {
    name: 'Mixing & Blending Machine',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/mixing_blending_machine.jpg',
    desc: 'Advanced mixing systems ensuring homogeneous blending of spices, grains, and ingredients for instant mixes.'
  },
  {
    name: 'Cooking & Processing System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/cooking_processing_system.jpg',
    desc: 'Controlled cooking, roasting, or steaming processes tailored for specific product requirements.'
  },
  {
    name: 'Cooling & Freezing Tunnel System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/cooling_freezing_tunnel_system.jpg',
    desc: 'Advanced IQF and rapid freezing technology to preserve freshness, taste, and nutritional quality of frozen foods.'
  },
  {
    name: 'Quality Inspection & Metal Detection System',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/quality_inspection_metal_detection_system.jpg',
    desc: 'Rigorous quality checks and metal detection to ensure compliance with stringent food safety and industry standards.'
  },
  {
    name: 'Automatic Filling & Packaging Machine',
    image: '/turnkey-brochures/images/instant-mix-frozen-food/automatic_filling_packaging_machine.jpg',
    desc: 'High-speed automated packaging systems ensuring accuracy, hygiene, and attractive presentation for finished products.'
  }
];
content = content.replace(/const MACHINERY_LIST = \[[\s\S]*?\]/, machineryListReplacement);

const faqsReplacement = const FAQS = [
  {
    question: "What types of products can be manufactured with this plant?",
    answer: "Our turnkey plants are versatile and can produce a wide range of instant mixes (like upma, idli, dosa mixes) and frozen foods (like frozen vegetables, snacks, and ready-to-eat meals)."
  },
  {
    question: "Is the production process fully automated?",
    answer: "Yes, the plant features fully automated production, from precise ingredient mixing to high-speed packaging, ensuring consistent product quality and operational efficiency."
  },
  {
    question: "What freezing technology is used?",
    answer: "We integrate advanced freezing technology, such as IQF (Individual Quick Freezing) cooling tunnels, to rapidly freeze products and lock in freshness and nutrients."
  },
  {
    question: "Does the equipment meet food safety standards?",
    answer: "Absolutely. All machinery features hygienic food-grade design using premium stainless steel, ensuring compliance with global food safety standards."
  },
  {
    question: "Do you offer installation and commissioning services?",
    answer: "Yes, Salvin Industries offers complete end-to-end solutions, including plant layout design, machinery selection, installation, automation, and commissioning."
  },
  {
    question: "Is the production capacity scalable?",
    answer: "Yes, we design our processing plants with scalable production capacity to help your business grow and meet increasing market demands."
  }
];
content = content.replace(/const FAQS = \[[\s\S]*?\]/, faqsReplacement);

const galleryImagesReplacement = const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/ingredient_weighing_batching_system.jpg', caption: 'Ingredient Weighing & Batching System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/mixing_blending_machine.jpg', caption: 'Mixing & Blending Machine' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/cooking_processing_system.jpg', caption: 'Cooking & Processing System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/cooling_freezing_tunnel_system.jpg', caption: 'Cooling & Freezing Tunnel System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/quality_inspection_metal_detection_system.jpg', caption: 'Quality Inspection & Metal Detection System' },
  { src: '/turnkey-brochures/images/instant-mix-frozen-food/automatic_filling_packaging_machine.jpg', caption: 'Automatic Filling & Packaging Machine' },
];
content = content.replace(/const GALLERY_IMAGES = \[[\s\S]*?\]/, galleryImagesReplacement);

content = content.replace(/import '\.\/ProteinBarManufacturingDetailPage\.css'/g, "import './InstantMixFrozenFoodDetailPage.css'");

content = content.replace(/Salvin Industries' Instant Mix & Frozen Food Processing Plant is a state-of-the-art turnkey industrial solution engineered for food processors demanding high production efficiency, rigorous hygiene standards, and consistent nutritional output\. Our fully automated lines cover every stage of production—from precise ingredient handling and mixing to forming, cooling, cutting, and final flow-wrap packaging\./g, "Salvin Industries is a trusted engineering, consultancy, and turnkey project execution company specializing in Instant Mix and Frozen Food Processing Plants. We offer complete end-to-end solutions, from concept development and process design to machinery selection, installation, automation, and packaging systems, helping businesses build modern and efficient food manufacturing facilities.");
content = content.replace(/Designed with automation at its core, the plant ensures accurate recipe management and uniform product quality while significantly reducing manual intervention and product waste\. Whether you are producing protein bars, energy bars, or sports nutrition bars, our flexible recipes capability and scalable capacity allow you to adapt to rapidly evolving market demands\./g, "With extensive industry expertise, we focus on delivering customized solutions that ensure operational efficiency, product consistency, hygiene, and long-term scalability. Our advanced processing technologies and engineering excellence enable manufacturers to achieve superior product quality while optimizing production performance.");

// Fix Hero Background replacement
content = content.replace(/<div className="pbm-hero__bg" style={{ backgroundImage: \url\('\/turnkey-brochures\/images\/instant-mix-frozen-food\/instant_mix_frozen_food_hero\.jpg'\)\ }} \/>/g, '<div className="pbm-hero__bg" style={{ backgroundImage: url(\'/turnkey-brochures/images/instant_mix_frozen_food_hero.jpg\') }} />');

// Fix overview image
content = content.replace(/<div className="pbm-overview__image pbm-overview__image--photo">[\s\S]*?<\/div>/g, \<div className="pbm-overview__image pbm-overview__image--photo">
              <img src="/turnkey-brochures/images/instant-mix-frozen-food/mixing_blending_machine.jpg" alt="Instant Mix & Frozen Food Processing Plant by Salvin Industries" loading="lazy" />
            </div>\);

fs.writeFileSync('src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.jsx', content);
console.log("Replaced successfully");
