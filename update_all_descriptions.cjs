const fs = require('fs');
const path = require('path');

const data = {
  'FullyAutomaticJellyManufacturingPlantDetailPage.jsx': [
    "Advanced vacuum cooking technology that boils jelly syrup at low temperatures to preserve natural flavors and colors.",
    "High-precision servo-driven depositor that accurately fills jelly into custom moulds with zero wastage.",
    "Multi-tier cooling tunnel that rapidly sets the jelly, followed by automatic demoulding for continuous production.",
    "Evenly coats the finished jelly with sugar crystals or anti-sticking oil to prevent clumping and enhance texture.",
    "Rotating polishing drum that gives the jelly a smooth, glossy finish for a premium retail appearance.",
    "High-speed vertical form-fill-seal (VFFS) machine for hygienic and efficient pouch packaging of the final product."
  ],
  'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx': [
    "High-efficiency machine that gently separates garlic bulbs into individual cloves without damaging the surface.",
    "Pneumatic peeling system combined with a high-pressure washing flume to ensure perfectly clean, skin-free garlic cloves.",
    "Precision slicing equipment that cuts garlic into uniform flakes, ensuring consistent drying and maximum flavor retention.",
    "Multi-layer hot air drying system that precisely dehydrates garlic flakes while locking in pungency and aroma.",
    "Advanced sorting machine that separates dehydrated garlic by size and removes impurities for premium quality output.",
    "Automated weighing and packaging line designed to seal dehydrated garlic in moisture-proof bags for extended shelf life."
  ],
  'FullyAutomaticVegetableDryingPlantDetailPage.jsx': [
    "Multi-stage bubble washing flume that effectively removes dirt, pesticides, and surface impurities from fresh vegetables.",
    "High-speed, adjustable slicing unit that precisely cuts vegetables into uniform shapes for consistent dehydration.",
    "Continuous blanching system that deactivates enzymes to preserve color, followed by vibration dewatering to remove excess moisture.",
    "Energy-efficient multi-layer belt dryer that uses controlled hot air circulation to perfectly dehydrate vegetables.",
    "Integrated cooling line and visual inspection conveyor to ensure only premium dehydrated vegetables proceed to packaging.",
    "Hygienic, automated packaging solution that seals dried vegetables in airtight pouches to maximize shelf life."
  ],
  'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx': [
    "Vibratory cleaning and destoning unit that removes stones, dust, and foreign particles from raw whole spices.",
    "Temperature-controlled rotary roaster that precisely heats spices to release essential oils and enhance rich aromas.",
    "Heavy-duty pulverizer equipped with cooling technology to grind roasted spices into fine powder without losing flavor.",
    "Homogenous ribbon blender that perfectly mixes different spice powders to achieve a consistent, uniform Garam Masala blend.",
    "High-frequency vibrating screen that filters out oversized particles, ensuring a perfectly smooth and fine masala powder.",
    "High-speed auger filler and pouch packaging machine that seals masala powder in airtight packets to retain freshness."
  ],
  'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx': [
    "Intensive bubble and spray washing system that thoroughly cleans fresh vegetables before the freezing process begins.",
    "Precision cutting machinery that dices or slices vegetables uniformly for even freezing and consistent cooking times.",
    "Steam or hot water continuous blancher that preserves vibrant colors, texture, and nutritional value prior to freezing.",
    "Advanced IQF technology that rapidly freezes each vegetable piece individually, preventing clumping and cell damage.",
    "High-speed, frost-resistant packaging line that accurately weighs and seals frozen vegetables into retail-ready bags.",
    "Automated robotic palletizer that efficiently stacks packaged frozen goods for seamless transfer to deep cold storage."
  ]
};

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [filename, descriptions] of Object.entries(data)) {
  const filePath = path.join(componentsDir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We need to replace the generic descriptions in MACHINERY_LIST.
    // The easiest way is to use a regex to match the "desc" line in each object of MACHINERY_LIST
    
    // Split the content to only affect the MACHINERY_LIST block to avoid side effects
    const machStart = content.indexOf('const MACHINERY_LIST = [');
    const machEnd = content.indexOf('];', machStart);
    
    if (machStart !== -1 && machEnd !== -1) {
      let machContent = content.substring(machStart, machEnd);
      
      descriptions.forEach((desc, idx) => {
         // Replace the nth occurrence of "desc": "..."
         // We do this by keeping a counter and using replace with a function
         let matchCount = 0;
         machContent = machContent.replace(/"desc":\s*"[^"]+"/g, (match) => {
             if (matchCount === idx) {
                 matchCount++;
                 return `"desc": "${desc}"`;
             }
             matchCount++;
             return match;
         });
      });
      
      content = content.substring(0, machStart) + machContent + content.substring(machEnd);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filename}`);
    } else {
        console.log(`Could not find MACHINERY_LIST in ${filename}`);
    }
  } else {
    console.log(`File not found: ${filename}`);
  }
}
