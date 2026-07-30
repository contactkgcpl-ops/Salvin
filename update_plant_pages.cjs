const fs = require('fs');
const path = require('path');

const plants = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': {
    steps: [
      "Raw Aloe Vera Reception", "Washing & Inspection", "Trimming & Deheading",
      "Peeling (Outer Skin Removal)", "Gel Filleting (Inner Gel Extraction)", "Crushing / Pulper",
      "Filtration (Vibrating Screen)", "Fine Filtration (Micro Filter)", "Enzyme Treatment Tank (Optional)",
      "Deaeration (Vacuum System)", "Pasteurization (Plate Heat Exchanger)", "Cooling Tank (4°C)",
      "Storage Tank (Finished Product)", "Asepetic Filling Machine", "Capping Machine",
      "Labeling Machine", "Check Weigher", "Shrink Tunnel (Optional)", "Carton Packing / Case Packer", "Palletizing / Stacking"
    ]
  },
  'BiscuitPlantDetailPage.jsx': {
    steps: [
      "Raw Material Receiving", "Raw Material Weighing & Batching", "Dough Mixer",
      "Dough Feeding", "Dough Sheeting", "Dough Cutting", "Tray Arranging", "Baking (Deck Oven)",
      "Cooling Conveyor", "Oil / Spray Application", "Sugar Sprinkling", "Sandwiching / Cream Spreading (Optional)",
      "Stacking & Collating", "Flow Wrap Packing Machine", "Metal Detector", "Check Weigher",
      "Carton Packing Machine", "Carton Sealing Machine", "Palletizing System", "Stretch Wrapping & Dispatch"
    ]
  },
  'CookiePlantDetailPage.jsx': {
    steps: [
      "Raw Material Receiving & Inspection", "Ingredient Weighing & Mixing", "Dough Kneading Machine",
      "Dough Feeding System", "Dough Sheeting / Rolling Machine", "Rotary Moulder (or) Wire Cut Machine",
      "Baking Oven", "Cooling Conveyor", "Oil / Crumb Spraying System", "Sugar / Salt Sprinkling System",
      "Stacking / Collating System", "Cream Sandwiching / Jamming Machine (Optional)", "Cooling Spiral (Optional)",
      "Flow Wrap Packaging Machine", "Metal Detector", "Check Weigher", "Carton Packing Machine", "Case Sealing Machine", "Palletizing (Optional)"
    ]
  },
  'BreadPlantDetailPage.jsx': {
    steps: [
      "Raw Material Handling", "Sifting (Flour Sifter)", "Ingredient Weighing", "Dough Mixing (Spiral Mixer)",
      "Dough Transfer", "Dough Dividing & Rounding", "Intermediate Proofer", "Dough Moulder",
      "Final Proofer", "Deck Oven", "Cooling Conveyor", "Slicing Machine", "Packaging Machine",
      "Metal Detection", "Check Weigher", "Date Coding Machine", "Shrink Tunnel (Optional)", "Carton Packing Machine", "Palletizer (Optional)", "Finished Product (Packed Bread)"
    ]
  },
  'CakePlantDetailPage.jsx': {
    steps: [
      "Raw Material Receiving & Inspection", "Sifting & Weighing System", "Batter Preparation Tank",
      "Planetary Mixer", "Emulsifier / Aeration System", "Batter Transfer Pump", "Batter Holding Tank",
      "Cake Depositor (Multi Nozzle)", "Baking Oven (Tunnel / Deck)", "Cooling Conveyor",
      "Cake Leveling Machine", "Cream / Icing Preparation Machine", "Cake Icing / Spreading Machine",
      "Decoration System", "Slicing Machine", "Metal Detector", "Flow Wrap Packaging Machine", "Check Weigher (Optional)", "Carton Packing Machine", "Palletizing System", "Finished Product Storage"
    ]
  },
  'WaferPlantDetailPage.jsx': {
    steps: [
      "Raw Material Receiving & Inspection", "Ingredient Weighing System", "Batter Mixing Tank",
      "Batter Holding Tank", "Automatic Batter Feeding System", "Wafer Baking Oven", "Wafer Sheet Cooling Conveyor",
      "Cream Preparation Tank", "Cream Holding Tank", "Automatic Cream Spreading Machine", "Wafer Sheet Laminating System",
      "Cooling Tunnel", "Wafer Block Cutting Machine", "Edge Trimming System", "Flow Wrap Packing Machine",
      "Check Weigher (Optional)", "Carton Packing Machine", "Palletizing System (Optional)", "Finished Product Storage"
    ]
  },
  'ChocolateProcessingPlantDetailPage.jsx': {
    steps: [
      "Cocoa Bean Receiving & Cleaning", "Roasting", "Winnowing", "Cocoa Nib Grinding", "Refining (Conching)",
      "Tempering", "Chocolate Moulding", "Cooling Tunnel", "Demoulding", "Enrobing (Optional)", "Vibration Conveyor",
      "Metal Detection", "Flow Wrap / Wrapper", "Carton Packing"
    ]
  },
  'ToffeePlantDetailPage.jsx': {
    steps: [
      "Raw Material Receiving", "Sugar Melting System", "Vacuum Cooking System", "Mass Holding & Blending Tank",
      "Cooling Conveyor", "Continuous Pulling Machine", "Rope Sizer Machine", "Automatic Cutting Machine",
      "Centre Filled Depositor (Optional)", "Toffee Forming Machine", "Cooling Conveyor", "Wrapping Machine",
      "Twist Wrapping Machine", "Metal Detector Conveyor", "Check Weigher Machine", "Automatic Cartoning Machine", "Carton Sealing Machine", "Palletizing System", "Stretch Wrapping Machine", "Finished Product (Ready for Dispatch)"
    ]
  }
};

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [filename, data] of Object.entries(plants)) {
  const filePath = path.join(componentsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace PROCESS_STEPS
  const processStepsString = `const PROCESS_STEPS = [\n` + 
    data.steps.map((step, idx) => `  { id: ${idx + 1}, title: "${step}" }`).join(',\n') +
    `\n]`;
    
  content = content.replace(/const PROCESS_STEPS = \[[\s\S]*?\]/, processStepsString);

  // Replace MACHINERY_LIST
  const machineryListString = `const MACHINERY_LIST = [\n` +
    data.steps.map(step => `  {\n    name: "${step}",\n    desc: "Precision-engineered system for ${step.toLowerCase()}.",\n    image: ""\n  }`).join(',\n') +
    `\n]`;

  content = content.replace(/const MACHINERY_LIST = \[[\s\S]*?\]/, machineryListString);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}
