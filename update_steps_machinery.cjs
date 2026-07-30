const fs = require('fs');
const path = require('path');

const contentData = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Raw Aloe Reception & Washing" },
  { id: 2, title: "Manual Inspection" },
  { id: 3, title: "Automatic Deheading & Trimming" },
  { id: 4, title: "Outer Skin Peeling" },
  { id: 5, title: "Gel Extraction & Filtration" },
  { id: 6, title: "Juice Pasteurization & Packing" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Washing Conveyor",
    desc: "Thoroughly cleans dirt from raw leaves.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/1_leaf_washing.jpg"
  },
  {
    name: "Sorting Belt",
    desc: "Allows workers to inspect and remove bad leaves.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/2_manual_sorting.jpg"
  },
  {
    name: "Automatic Slicer",
    desc: "Cuts the top and bottom of the leaves automatically.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/3_automatic_slicing.jpg"
  },
  {
    name: "Gel Filleting Machine",
    desc: "Separates the bitter outer skin from the pure gel.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/4_gel_filleting.jpg"
  },
  {
    name: "Juice Extractor",
    desc: "Crushes the gel into a smooth, drinkable juice.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/5_juice_extraction.jpg"
  },
  {
    name: "Pasteurizer & Filler",
    desc: "Heats the juice to remove bacteria, then fills bottles.",
    image: "/turnkey-brochures/images/aloe-vera-gallery/6_incline_conveyor.jpg"
  }
]`
  },
  'BiscuitPlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Ingredient Mixing" },
  { id: 2, title: "Dough Feeding" },
  { id: 3, title: "Biscuit Shaping (Molding)" },
  { id: 4, title: "Continuous Tunnel Baking" },
  { id: 5, title: "Natural Conveyor Cooling" },
  { id: 6, title: "Automatic Wrapper Packing" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Heavy Duty Dough Mixer",
    desc: "Mixes flour, sugar, and fat into a perfect dough.",
    image: "/turnkey-brochures/images/biscuit-gallery/1_dough_mixing.jpg"
  },
  {
    name: "Rotary Moulder",
    desc: "Stamps the dough into perfect biscuit shapes.",
    image: "/turnkey-brochures/images/biscuit-gallery/2_rotary_moulding.jpg"
  },
  {
    name: "Tunnel Baking Oven",
    desc: "Bakes the biscuits evenly as they pass through.",
    image: "/turnkey-brochures/images/biscuit-gallery/3_tunnel_baking.jpg"
  },
  {
    name: "Cooling Conveyor",
    desc: "Long belt that cools hot biscuits so they get crispy.",
    image: "/turnkey-brochures/images/biscuit-gallery/4_cooling_conveyor.jpg"
  },
  {
    name: "Flow Wrap Machine",
    desc: "Packs the biscuits quickly into plastic wrappers.",
    image: "/turnkey-brochures/images/biscuit-gallery/5_flow_wrap_packaging.jpg"
  },
  {
    name: "Carton Packing System",
    desc: "Puts the wrapped biscuit packets into large boxes.",
    image: "/turnkey-brochures/images/biscuit-gallery/6_carton_packing.jpg"
  }
]`
  },
  'CookiePlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Premium Dough Mixing" },
  { id: 2, title: "Wire Cutting / Dropping" },
  { id: 3, title: "Center Filling (Optional)" },
  { id: 4, title: "Tunnel Baking" },
  { id: 5, title: "Cooling Conveyor" },
  { id: 6, title: "Tray or Flow Packing" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Planetary Mixer",
    desc: "Whips the heavy cookie dough perfectly.",
    image: "/turnkey-brochures/images/cookie-gallery/1_planetary_mixer.jpg"
  },
  {
    name: "Wire Cut / Drop Machine",
    desc: "Slices or drops cookie dough directly onto baking trays.",
    image: "/turnkey-brochures/images/cookie-gallery/2_wire_cut_machine.jpg"
  },
  {
    name: "Tunnel Oven",
    desc: "Bakes cookies slowly to keep them soft or crunchy.",
    image: "/turnkey-brochures/images/cookie-gallery/3_cookie_oven.jpg"
  },
  {
    name: "Cooling Belt",
    desc: "Cools the baked cookies to set their shape.",
    image: "/turnkey-brochures/images/cookie-gallery/4_cooling_conveyor.jpg"
  },
  {
    name: "Automatic Flow Wrapper",
    desc: "Seals the cookies individually or in small stacks.",
    image: "/turnkey-brochures/images/cookie-gallery/5_flow_wrapping.jpg"
  },
  {
    name: "Carton Packer",
    desc: "Loads the cookie packets into shipping boxes.",
    image: "/turnkey-brochures/images/cookie-gallery/6_robotic_packing.jpg"
  }
]`
  },
  'BreadPlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Spiral Dough Kneading" },
  { id: 2, title: "Dough Dividing & Rounding" },
  { id: 3, title: "Proofing (Rising Chamber)" },
  { id: 4, title: "Rack or Tunnel Baking" },
  { id: 5, title: "Automatic Slicing" },
  { id: 6, title: "Bagging & Tying" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Spiral Dough Mixer",
    desc: "Kneads flour and yeast into stretchy, soft dough.",
    image: "/turnkey-brochures/images/bread-gallery/1_spiral_mixing.jpg"
  },
  {
    name: "Dough Divider",
    desc: "Cuts the huge dough batch into equal-sized pieces.",
    image: "/turnkey-brochures/images/bread-gallery/2_dough_divider.jpg"
  },
  {
    name: "Proofing Chamber",
    desc: "Warm room where the yeast makes the dough rise.",
    image: "/turnkey-brochures/images/bread-gallery/3_proofing_chamber.jpg"
  },
  {
    name: "Baking Oven",
    desc: "Bakes the risen dough into soft, golden bread loaves.",
    image: "/turnkey-brochures/images/bread-gallery/4_rotary_oven.jpg"
  },
  {
    name: "Bread Slicer",
    desc: "Cuts the baked loaf into perfectly even slices.",
    image: "/turnkey-brochures/images/bread-gallery/5_bread_slicing.jpg"
  },
  {
    name: "Bagging Machine",
    desc: "Puts the sliced bread into plastic bags and ties them.",
    image: "/turnkey-brochures/images/bread-gallery/6_bag_sealing.jpg"
  }
]`
  },
  'CakePlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Aerated Batter Mixing" },
  { id: 2, title: "Automatic Tray Greasing" },
  { id: 3, title: "Batter Depositing (Filling)" },
  { id: 4, title: "Continuous Baking" },
  { id: 5, title: "Vacuum Depanning (Removing)" },
  { id: 6, title: "Flow Wrap Packaging" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Aerated Mixer",
    desc: "Whips air into the batter to make the cake spongy.",
    image: "/turnkey-brochures/images/cake-gallery/1_batter_mixer.jpg"
  },
  {
    name: "Batter Depositor",
    desc: "Pumps exactly the right amount of batter into molds.",
    image: "/turnkey-brochures/images/cake-gallery/2_batter_depositor.jpg"
  },
  {
    name: "Tunnel Baking Oven",
    desc: "Bakes the cakes perfectly as the trays move inside.",
    image: "/turnkey-brochures/images/cake-gallery/3_tunnel_oven.jpg"
  },
  {
    name: "Vacuum Depanner",
    desc: "Uses suction to gently lift soft cakes out of hot trays.",
    image: "/turnkey-brochures/images/cake-gallery/4_vacuum_depanning.jpg"
  },
  {
    name: "Cooling Conveyor",
    desc: "Allows the hot cakes to cool down before packing.",
    image: "/turnkey-brochures/images/cake-gallery/5_cooling_conveyor.jpg"
  },
  {
    name: "Flow Wrapper",
    desc: "Packs the cakes individually to keep them fresh.",
    image: "/turnkey-brochures/images/cake-gallery/6_flow_wrap.jpg"
  }
]`
  },
  'WaferPlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Liquid Batter Mixing" },
  { id: 2, title: "Baking on Flat Plates" },
  { id: 3, title: "Cream Spreading" },
  { id: 4, title: "Stacking Sheets" },
  { id: 5, title: "Cooling the Stack" },
  { id: 6, title: "Wire Cutting & Packing" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Batter Mixer",
    desc: "Mixes flour and water into a smooth, thin liquid.",
    image: "/turnkey-brochures/images/wafer-gallery/1_batter_mixer.jpg"
  },
  {
    name: "Wafer Baking Oven",
    desc: "Bakes the liquid batter into large, crispy wafer sheets.",
    image: "/turnkey-brochures/images/wafer-gallery/2_wafer_baking.jpg"
  },
  {
    name: "Cream Spreader",
    desc: "Applies a smooth layer of sweet cream onto the sheets.",
    image: "/turnkey-brochures/images/wafer-gallery/3_cream_spreading.jpg"
  },
  {
    name: "Cooling Tunnel",
    desc: "A giant fridge that hardens the cream to hold layers together.",
    image: "/turnkey-brochures/images/wafer-gallery/4_cooling_tower.jpg"
  },
  {
    name: "Wire Cutting Machine",
    desc: "Slices the large wafer block into small finger shapes.",
    image: "/turnkey-brochures/images/wafer-gallery/5_wire_cutting.jpg"
  },
  {
    name: "Automatic Packaging",
    desc: "Packs the crispy wafer fingers into shiny wrappers.",
    image: "/turnkey-brochures/images/wafer-gallery/6_packaging.jpg"
  }
]`
  },
  'ChocolateProcessingPlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Cocoa Roasting & Grinding" },
  { id: 2, title: "Conching (Smooth Mixing)" },
  { id: 3, title: "Tempering (Shine Control)" },
  { id: 4, title: "Molding (Shaping)" },
  { id: 5, title: "Cooling Tunnel" },
  { id: 6, title: "Foil or Wrapper Packing" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Cocoa Bean Roaster",
    desc: "Roasts the raw beans to bring out the chocolate flavor.",
    image: "/turnkey-brochures/images/chocolate-gallery/1_cocoa_roasting.jpg"
  },
  {
    name: "Cocoa Grinder & Liquor Tank",
    desc: "Grinds the roasted beans into a thick liquid chocolate.",
    image: "/turnkey-brochures/images/chocolate-gallery/2_cocoa_grinding.jpg"
  },
  {
    name: "Chocolate Conche",
    desc: "Mixes and refines the chocolate so it melts in your mouth.",
    image: "/turnkey-brochures/images/chocolate-gallery/3_chocolate_conching.jpg"
  },
  {
    name: "Tempering Machine",
    desc: "Heats and cools chocolate so it gets a shiny look and hard snap.",
    image: "/turnkey-brochures/images/chocolate-gallery/4_chocolate_tempering.jpg"
  },
  {
    name: "Chocolate Molding Line",
    desc: "Pours the liquid chocolate into bar or candy shapes.",
    image: "/turnkey-brochures/images/chocolate-gallery/5_chocolate_molding.jpg"
  },
  {
    name: "Foil Wrapping Machine",
    desc: "Packs the finished chocolate bars in foil or plastic.",
    image: "/turnkey-brochures/images/chocolate-gallery/6_chocolate_wrapping.jpg"
  }
]`
  },
  'ToffeePlantDetailPage.jsx': {
    processSteps: `const PROCESS_STEPS = [
  { id: 1, title: "Vacuum Boiling" },
  { id: 2, title: "Cooling Table Mixing" },
  { id: 3, title: "Batch Roller (Rope Making)" },
  { id: 4, title: "Candy Forming (Shaping)" },
  { id: 5, title: "Cooling Tunnel" },
  { id: 6, title: "Twist Wrapping" }
]`,
    machineryList: `const MACHINERY_LIST = [
  {
    name: "Vacuum Cooker",
    desc: "Boils sugar and glucose syrup without burning it.",
    image: "/turnkey-brochures/images/toffee-gallery/1_weighing_mixing.jpg"
  },
  {
    name: "Cooling Table",
    desc: "Cools the hot syrup so colors and flavors can be mixed in.",
    image: "/turnkey-brochures/images/toffee-gallery/2_continuous_cooker.jpg"
  },
  {
    name: "Batch Roller",
    desc: "Rolls the huge lump of candy into a thick rope.",
    image: "/turnkey-brochures/images/toffee-gallery/3_cooling_table.jpg"
  },
  {
    name: "Rope Sizer & Former",
    desc: "Chops the rope and stamps it into small toffee shapes.",
    image: "/turnkey-brochures/images/toffee-gallery/4_rope_sizer.jpg"
  },
  {
    name: "Cooling Tunnel",
    desc: "Hardens the soft toffee shapes using cold air.",
    image: "/turnkey-brochures/images/toffee-gallery/5_wrap_packaging.jpg"
  },
  {
    name: "Twist Wrap Machine",
    desc: "Automatically twists a shiny wrapper around each toffee.",
    image: "/turnkey-brochures/images/toffee-gallery/6_carton_packing.jpg"
  }
]`
  }
};

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [file, data] of Object.entries(contentData)) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace Process Steps
    content = content.replace(/const PROCESS_STEPS = \[([\s\S]*?)\];?/, data.processSteps);
    
    // Replace Machinery List
    content = content.replace(/const MACHINERY_LIST = \[([\s\S]*?)\];?/, data.machineryList);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated Steps & Machinery for ${file}`);
  }
}
