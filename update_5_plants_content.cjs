const fs = require('fs');
const path = require('path');

const plantsData = [
  {
    component: 'FullyAutomaticMixedSpicePlantDetailPage',
    name: 'Fully Automatic Mixed Spice Plant',
    desc: 'State-of-the-art turnkey solution for processing, blending, and packaging mixed spices efficiently.',
    steps: [
      "Raw Material Receiving & Inspection", "Cleaning System", "Sorting & Grading", "Drying System",
      "Destoning System", "Roasting (If Required)", "Cooling Conveyor", "Grinding (Pulverizing) System",
      "Sifting / Screening System", "Weighing & Batching System", "Ribbon Blender (Mixing)", "Metal Detection System",
      "Finished Product Holding Bin", "Automatic Filling Machine", "Capping / Sealing Machine", "Labeling Machine",
      "Check Weigher", "Carton Sealing / Case Packer", "Final Packing & Dispatch"
    ]
  },
  {
    component: 'FullyAutomaticPasteurizedMilkPlantDetailPage',
    name: 'Fully Automatic Pasteurized Milk Plant',
    desc: 'End-to-end turnkey solution for pasteurized milk processing, ensuring hygiene, high quality, and precise pasteurization.',
    steps: [
      "Raw Milk Reception & Inspection", "Milk Cooling Tank", "Centrifugal Clarifier", "Standardization Tank",
      "Homogenizer", "Pasteurizer (Plate Heat Exchanger)", "Holding Tube", "Cooling (Plate Heat Exchanger)",
      "Pasteurized Milk Storage Tank", "Milk Filtration System", "Final Product Storage Tank", "Milk Filling Machine",
      "Cap Sealing Machine", "Date Coding Machine", "Check Weigher", "Shrink Wrapping Machine", "Carton Packing", "Palletizing (Optional)"
    ]
  },
  {
    component: 'FullyAutomaticSpicePackagingLineDetailPage',
    name: 'Fully Automatic Spice Packaging Line',
    desc: 'High-speed, highly accurate turnkey spice packaging line designed for flawless pouch and carton packaging.',
    steps: [
      "Raw Material Receiving", "Cleaning & Sieving", "Storage Bin", "Screw Feeder", "Grinding (Pulverizing)",
      "Vibro Sifter", "Ribbon Blender (Mixing)", "Weighing System", "Automatic Pouch Form Fill Seal Machine",
      "Check Weigher", "Metal Detector", "Accumulation Table", "Labeling Machine", "Date Coder (Printing)",
      "Take Off Conveyor", "Carton Packing Machine", "Carton Sealing Machine", "Case Labeling Machine",
      "Palletizing System", "Stretch Wrapping Machine", "Packed & Ready for Dispatch"
    ]
  },
  {
    component: 'SpiceBlendingPlantDetailPage',
    name: 'Spice Blending Plant',
    desc: 'Fully automatic end-to-end spice blending solution for hygienic, accurate, and consistent blending.',
    steps: [
      "Raw Material Inspection & Sorting", "Vibro Sifter (Pre-Cleaning)", "Magnet Separator (Metal Removal)",
      "Pulverizer / Grinder", "Dust Collection System", "Sifter (Post Grinding)", "Automatic Weighing & Dosing System",
      "Ribbon Blender (Spice Blending)", "Bin Discharger / Screw Conveyor", "Magnet Separator (Final Check)",
      "Vibro Sifter (Final Screening)", "Metal Weigher", "Metal Detector", "Automatic Pouch Packing Machine",
      "Auger Filler (For Jars / Bottles)", "Capping Machine", "Labeling Machine", "Carton Sealing Machine",
      "Palletizing System", "Finished Product Storage"
    ]
  },
  {
    component: 'FullyAutomatedCurryPowderProcessingPlantDetailPage',
    name: 'Fully Automated Curry Powder Processing Plant',
    desc: 'Complete turnkey solution for processing and packaging high-quality, perfectly blended curry powder.',
    steps: [
      "Raw Material Receiving", "Cleaning & Pre-Sorting", "Drying (If Required)", "Roasting (Optional)",
      "Cooling (Optional)", "De-stoning & Sorting", "Grinding (Pulverizer)", "Sifting (Vibro Sifter)",
      "Blending (Ribbon Blender)", "Metal Detection", "Automatic Weighing System", "Filling Machine",
      "Capping/ Sealing Machine", "Labeling Machine", "Check Weigher", "Shrink Tunnel (Optional)",
      "Carton Packing", "Finished Product (Curry Powder)"
    ]
  }
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

plantsData.forEach(p => {
  const jsxPath = path.join(componentsDir, p.component + '.jsx');
  if (!fs.existsSync(jsxPath)) return;
  
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Replace PROCESS_STEPS
  const newStepsStr = p.steps.map((s, i) => `  { id: "${i + 1}", title: "${s}" }`).join(',\n');
  content = content.replace(/const PROCESS_STEPS = \[[\s\S]*?\];/, `const PROCESS_STEPS = [\n${newStepsStr}\n];`);

  // Replace MACHINERY_LIST
  // We'll just generate some generic machinery objects based on the steps, or just a few key ones.
  const newMachineryStr = p.steps.slice(0, 6).map((s, i) => `  { name: "${s}", desc: "High efficiency, industrial-grade equipment for ${s.toLowerCase()}.", image: "/turnkey-brochures/images/${p.imageFile}" }`).join(',\\n');
  content = content.replace(/const MACHINERY_LIST = \\[[\\s\\S]*?\\];/, "const MACHINERY_LIST = [\\n" + newMachineryStr + "\\n];");

  // Replace FAQS
  const newFaqsStr = `const FAQS = [
  { question: "What is the production capacity of the ${p.name}?", answer: "Our plants are custom-designed to match your required output, ranging from small-scale setups to multi-ton per hour industrial facilities." },
  { question: "Is the machinery fully automated?", answer: "Yes, the entire plant is equipped with advanced PLC controls for fully automated, continuous operation with minimal human intervention." },
  { question: "Does Salvin provide installation and training?", answer: "Absolutely. We provide comprehensive turnkey services including complete on-site installation, commissioning, and operator training." }
];`;
  content = content.replace(/const FAQS = \[[\s\S]*?\];/, newFaqsStr);

  // Replace SEO overview text
  content = content.replace(/<div className="rcp-overview__text">\s*<p>.*?<\/p>\s*<p>.*?<\/p>\s*<\/div>/s, 
    `<div className="rcp-overview__text">
              <p><strong>Salvin Industries' ${p.name}</strong> is a state-of-the-art turnkey solution engineered for maximum efficiency and uncompromised quality. We provide an end-to-end processing ecosystem that adheres to the strictest global food safety and hygiene standards.</p>
              <p>With our advanced machinery and PLC-controlled automation, you can achieve continuous, high-yield production while minimizing labor costs and downtime. Partner with Salvin Industries for an industry-leading processing line tailored to your specific requirements.</p>
            </div>`);

  // Replace Helmet title and meta
  content = content.replace(/<title>.*?<\/title>/g, `<title>${p.name} | Salvin Industries</title>`);
  content = content.replace(/<meta name="description" content="[^"]*"/g, `<meta name="description" content="${p.desc}"`);

  // Replace subtitle
  content = content.replace(/<p className="rcp-hero__subtitle">.*?<\/p>/, `<p className="rcp-hero__subtitle">${p.desc}</p>`);

  fs.writeFileSync(jsxPath, content);
  console.log('Updated content for ' + p.component);
});
