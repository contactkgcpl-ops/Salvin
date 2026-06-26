const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. REMOVE Petroleum Jelly
const petroStart = content.indexOf("'petroleum-jelly-manufacturing-plant': {");
if (petroStart !== -1) {
  // Find the end of this object. It ends where the next project starts.
  const nextProjectStart = content.indexOf("'iv-fluid-manufacturing-plant': {", petroStart);
  if (nextProjectStart !== -1) {
    content = content.substring(0, petroStart) + content.substring(nextProjectStart);
  }
}

// 2. RENAME Banana Chips
const bananaStart = content.indexOf("'banana-chips-processing-line': {");
const proteinStart = content.indexOf("'protein-powder-production-plant': {");

if (bananaStart !== -1 && proteinStart !== -1) {
  let bananaBlock = content.substring(bananaStart, proteinStart);
  bananaBlock = bananaBlock.replace(/'banana-chips-processing-line': \{/, "'banana-chips-processing-plant': {");
  bananaBlock = bananaBlock.replace(/banana-chips-processing-line/g, "banana-chips-processing-plant");
  bananaBlock = bananaBlock.replace(/Banana Chips Processing Line/g, "Banana Chips Processing Plant");
  bananaBlock = bananaBlock.replace(
    /pdfFile: 'banana_chips_plant\.pdf',/,
    "pdfFile: 'banana_chips_plant.pdf',\n    workflowTitle: 'Banana Chips Processing Plant',\n    workflowAccentTitle: 'Workflow',"
  );
  content = content.substring(0, bananaStart) + bananaBlock + content.substring(proteinStart);
}

// 3. ADD Biscuit Baking Turnkey
const biscuitCode = `  },
  'biscuit-baking-turnkey': {
    title: 'Biscuit Baking Turnkey',
    badge: 'TURNKEY BISCUIT PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Biscuit Baking Production',
    workflowTitle: 'Biscuit Baking Plant',
    workflowAccentTitle: 'Workflow',
    pdfFile: 'biscuit_baking_turnkey.pdf',
    heroImage: '/assets/31_biskuit_plant.png',
    heroMinHeight: '600px',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: '500 Kg–5 Ton',
      stages: '7 Stage',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Biscuit Baking Turnkey Plant',
      p1: 'Salvin Industries\\' Biscuit Baking Turnkey is a complete, high-efficiency solution designed for large-scale biscuit production. It covers the entire process from raw material receiving and dough mixing to rotary forming, continuous baking, cooling, and automated packaging.',
      p2: 'Engineered for consistent quality and high throughput, the plant features food-grade construction, precise temperature control, and advanced automation to ensure uniform baking and optimal resource utilization.',
      highlights: [
        { title: 'Consistent Quality', desc: 'Precision baking for uniform color and texture.' },
        { title: 'High Efficiency', desc: 'Continuous processing minimizes downtime.' },
        { title: 'Automated Operations', desc: 'Advanced PLCs control the entire baking process.' }
      ],
      isBrochure: true,
      image: '/assets/31_biskuit_plant.png',
      photoImage: '/assets/31_biskuit_plant.png',
      features4: [
        { title: 'Hygienic Design', desc: 'Food-grade stainless steel construction' },
        { title: 'Energy Efficient', desc: 'Optimized thermal management' },
        { title: 'Versatile Production', desc: 'Supports hard and soft dough' },
        { title: 'Reliable Operation', desc: 'Built for 24/7 continuous runs' }
      ]
    },
    capacities: [
      { size: '500 Kg/Hr', desc: 'Ideal for medium-scale regional producers.' },
      { size: '1 Ton/Hr', desc: 'Standard capacity for commercial brands.' },
      { size: '5 Ton/Hr', desc: 'High-volume industrial-scale production.' }
    ],
    features: [
      { title: 'Food Grade Material', desc: 'All contact parts made from SS304/SS316 to ensure strict hygiene standards.' },
      { title: 'Advanced Automation', desc: 'Siemens/Allen-Bradley PLC systems provide precise control over the entire line.' },
      { title: 'Thermal Efficiency', desc: 'Insulated continuous baking ovens optimize fuel and energy consumption.' },
      { title: 'Customizable Output', desc: 'Easily adjustable rotary molds for producing various biscuit shapes and sizes.' },
      { title: 'Seamless Integration', desc: 'Fully synchronized stages from mixing to packaging for uninterrupted flow.' },
      { title: 'High-Speed Packaging', desc: 'Integrated flow-wrap packing machines for fast, secure sealing.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Handling', desc: 'Automated intake, sifting, and storage of flour, sugar, and ingredients.' },
      { id: 2, title: 'Dough Mixing', desc: 'High-capacity industrial mixers blend ingredients into a consistent dough.' },
      { id: 3, title: 'Dough Forming', desc: 'Dough is sheeted or fed directly into forming machines.' },
      { id: 4, title: 'Biscuit Molding', desc: 'Rotary forming machines shape the dough into precise biscuit designs.' },
      { id: 5, title: 'Baking', desc: 'Continuous traveling ovens bake the molded dough to perfection.' },
      { id: 6, title: 'Cooling', desc: 'Extended cooling conveyors naturally lower the temperature of baked biscuits.' },
      { id: 7, title: 'Packaging', desc: 'High-speed automatic flow-wrap machines seal the biscuits for distribution.' }
    ],
    machinery: [
      { name: 'Raw Material Receiving & Storage System', image: '/turnkey-brochures/images/biscuit-baking-turnkey/raw-material-receiving-storage-system.jpg', desc: 'Automated silos and sifters for handling bulk flour and sugar.' },
      { name: 'Industrial Dough Mixer', image: '/turnkey-brochures/images/biscuit-baking-turnkey/industrial-dough-mixer.jpg', desc: 'Heavy-duty mixer for thorough and consistent dough preparation.' },
      { name: 'Rotary Biscuit Forming Machine', image: '/turnkey-brochures/images/biscuit-baking-turnkey/rotary-biscuit-forming-machine.jpg', desc: 'Precision rotary molds for shaping dough into desired biscuit patterns.' },
      { name: 'Continuous Baking Oven', image: '/turnkey-brochures/images/biscuit-baking-turnkey/continuous-baking-oven.jpg', desc: 'Multi-zone traveling oven for even baking and moisture control.' },
      { name: 'Cooling Conveyor System', image: '/turnkey-brochures/images/biscuit-baking-turnkey/cooling-conveyor-system.jpg', desc: 'Extended conveyor belt system for gradual and uniform cooling.' },
      { name: 'Automatic Flow Wrap Packing Machine', image: '/turnkey-brochures/images/biscuit-baking-turnkey/automatic-flow-wrap-packing-machine.jpg', desc: 'High-speed packaging machine for sealing individual or stacked biscuits.' }
    ],
    applications: [
      { title: 'Hard Dough Biscuits', desc: 'Crisp and layered biscuits like Marie and crackers.' },
      { title: 'Soft Dough Biscuits', desc: 'Rich and crumbly cookies and shortbreads.' },
      { title: 'Cream Sandwich Biscuits', desc: 'Biscuits with automated cream filling and sandwiching.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/raw-material-receiving-storage-system.jpg', caption: 'Raw Material Receiving & Storage System' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/industrial-dough-mixer.jpg', caption: 'Industrial Dough Mixer' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/rotary-biscuit-forming-machine.jpg', caption: 'Rotary Biscuit Forming Machine' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/continuous-baking-oven.jpg', caption: 'Continuous Baking Oven' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/cooling-conveyor-system.jpg', caption: 'Cooling Conveyor System' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/automatic-flow-wrap-packing-machine.jpg', caption: 'Automatic Flow Wrap Packing Machine' }
    ]`;

const endOfFileTarget = "const dynamicProjectCache";
const endPos = content.indexOf(endOfFileTarget);
if (endPos !== -1) {
  // Find the closing brace of CORE_PROJECTS
  const closingBracePos = content.lastIndexOf("};", endPos);
  if (closingBracePos !== -1) {
    content = content.substring(0, closingBracePos) + biscuitCode + "\n};\n\n" + content.substring(endPos);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Restoration and Biscuit Baking update completed.");
