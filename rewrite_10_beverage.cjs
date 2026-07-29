const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const plantsData = {
  "FlavoredMilkPlantDetailPage.jsx": {
    name: "Flavored Milk",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Milk Reception" },
  { "id": 2, "title": "Standardization" },
  { "id": 3, "title": "Flavor Blending" },
  { "id": 4, "title": "Homogenization" },
  { "id": 5, "title": "Pasteurization" },
  { "id": 6, "title": "Bottle Filling" },
  { "id": 7, "title": "Sterilization" }
]`,
    faqs: `const FAQS = [
  {
    "question": "What is the shelf life of the flavored milk produced?",
    "answer": "With our advanced sterilization (retort) technology, the flavored milk can achieve a shelf life of up to 6 months without requiring refrigeration."
  },
  {
    "question": "Can we pack flavored milk in glass and PET bottles?",
    "answer": "Yes, our filling machines are highly customizable and can handle both glass bottles (with crown corks or lug caps) and PET bottles smoothly."
  },
  {
    "question": "How do you ensure consistent mixing of flavors and colors?",
    "answer": "We use high-shear agitators and precise dosing systems in our blending tanks to ensure every drop of milk has a consistent taste, color, and aroma."
  },
  {
    "question": "Do you provide CIP (Clean-in-Place) systems?",
    "answer": "Yes, our fully automated plants come with an integrated CIP system that automatically cleans the tanks and pipelines to maintain 100% hygiene."
  }
];`,
    overviewP: `<p>Start a highly successful dairy business with our <strong>Fully Automated Flavored Milk Plant</strong>. Flavored milk is a universally loved, highly nutritious beverage with rapidly growing demand among kids and adults alike.</p>
              <p>The manufacturing process involves receiving fresh milk, standardizing its fat content, and seamlessly blending it with premium flavors, colors, and sugar. The mixture is then homogenized and pasteurized to ensure a smooth, creamy texture and complete food safety.</p>
              <p>Finally, the milk is filled into bottles and passed through a retort sterilizer. This advanced sterilization process destroys all bacteria, giving your flavored milk a long shelf life at room temperature. Everything is controlled automatically for maximum output and minimal manual labor.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Start a Flavored Milk Business?</h3>
              <p>Flavored milk is seen as a healthy alternative to carbonated soft drinks. With high nutritional value and delicious taste, it has a massive market base. Manufacturing flavored milk offers excellent profit margins and builds a strong, recognizable FMCG brand.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How is Flavored Milk Processed?</h3>
              <p>Fresh milk is first chilled and standardized. Sugar syrup, colors, and flavors are mixed into the milk in specialized blending tanks. The mixture goes through a homogenizer to break down fat molecules, preventing cream separation. It is then filled in glass or PP bottles and sterilized in a retort machine to extend its shelf life without refrigeration.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides end-to-end turnkey solutions for dairy plants. Our highly precise blending tanks, energy-efficient pasteurizers, and state-of-the-art retort sterilizers ensure that your flavored milk is safe, delicious, and perfectly packed. We guarantee top-tier hygiene with our food-grade SS316 equipment.</p>
            </div>`
  },
  "CreamProcessingPlantDetailPage.jsx": {
    name: "Dairy Cream",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Milk Reception" },
  { "id": 2, "title": "Pre-Heating" },
  { "id": 3, "title": "Centrifugal Separation" },
  { "id": 4, "title": "Standardization" },
  { "id": 5, "title": "Pasteurization" },
  { "id": 6, "title": "Cooling & Maturation" },
  { "id": 7, "title": "Hygienic Packaging" }
]`,
    faqs: `const FAQS = [
  {
    "question": "Can I control the fat percentage in the cream?",
    "answer": "Yes, our advanced centrifugal cream separators come with automatic standardization valves, allowing you to easily adjust and maintain the exact fat percentage you need."
  },
  {
    "question": "What types of cream can this plant produce?",
    "answer": "The plant is highly versatile and can produce various types of cream, including fresh cream, whipping cream, double cream, and industrial bulk cream."
  },
  {
    "question": "How do you preserve the quality of the cream?",
    "answer": "We use gentle heating during pasteurization and rapid cooling to preserve the cream's natural taste and texture. Our maturation tanks keep it perfectly chilled before packaging."
  },
  {
    "question": "What packaging options are supported?",
    "answer": "Our machines can integrate with pouch packing, cup filling, or bulk carton filling systems depending on your target market."
  }
];`,
    overviewP: `<p>Enter the profitable dairy market with our <strong>Fully Automated Cream Processing Plant</strong>. Dairy cream is a premium product heavily used in bakeries, restaurants, and households, ensuring constant high demand.</p>
              <p>The processing starts by receiving fresh milk and pre-heating it to the optimal temperature. It is then fed into a high-speed centrifugal separator which smoothly separates the rich cream from the skimmed milk, allowing precise fat standardization.</p>
              <p>The extracted cream is gently pasteurized to eliminate pathogens and rapidly chilled to maintain its thick, creamy texture. Finally, it rests in maturation tanks before being hygienically packed. The entire process is automated, ensuring minimal wastage and maximum product purity.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Cream Processing Plant?</h3>
              <p>Cream is an essential ingredient in the culinary and baking world. Producing high-quality, standardized dairy cream offers great profitability and opens doors to B2B sales with bakeries, hotels, and dairy product manufacturers.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does Cream Separation Work?</h3>
              <p>Raw milk is heated to around 45-50°C to reduce its viscosity. It is then spun at very high speeds in a centrifugal separator. Because skim milk is heavier than fat, it is thrown to the outer edge, while the lighter cream collects in the center and is continuously extracted. The cream is then pasteurized and cooled to prevent spoilage.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Our cream processing lines feature world-class centrifugal separators that extract maximum fat without damaging the cream structure. Built entirely from food-grade stainless steel, our equipment guarantees zero contamination, easy CIP cleaning, and consistent cream quality day after day.</p>
            </div>`
  },
  "CarbonatedSoftDrinkPlantDetailPage.jsx": {
    name: "Carbonated Soft Drink",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Water Purification" },
  { "id": 2, "title": "Sugar Syrup Prep" },
  { "id": 3, "title": "Flavor Blending" },
  { "id": 4, "title": "Beverage Chilling" },
  { "id": 5, "title": "Carbonation" },
  { "id": 6, "title": "Isobaric Filling" },
  { "id": 7, "title": "Capping & Packing" }
]`,
    faqs: `const FAQS = [
  {
    "question": "How is the fizziness (gas volume) controlled?",
    "answer": "Our advanced carbonators use precision flow meters and pressure controls to inject exactly the right volume of CO2, ensuring consistent fizziness in every bottle."
  },
  {
    "question": "Can this plant fill both PET and glass bottles?",
    "answer": "Yes, our isobaric filling machines are adaptable. With minor change parts, you can easily switch between different sizes of PET bottles and glass bottles."
  },
  {
    "question": "What is an isobaric filler?",
    "answer": "An isobaric filler maintains equal pressure between the bottle and the filling tank. This prevents the CO2 gas from escaping during the filling process, keeping the drink carbonated."
  },
  {
    "question": "Do you provide bottle making machines as well?",
    "answer": "Yes, we offer fully integrated PET blow molding machines that manufacture the bottles right before they enter the rinsing and filling section."
  }
];`,
    overviewP: `<p>Capitalize on the massive beverage market with our <strong>Fully Automatic Carbonated Soft Drink (CSD) Plant</strong>. From colas and lemon sodas to sparkling fruit drinks, carbonated beverages are among the highest-selling consumer products globally.</p>
              <p>The process begins with high-grade water purification to ensure a flawless base. Sugar is dissolved into a clear syrup, filtered, and precisely blended with concentrated flavors and colors. The blended beverage is then chilled to near-freezing temperatures for optimal gas absorption.</p>
              <p>In the carbonator, CO2 gas is perfectly infused into the cold liquid. The fizzy drink is immediately sent to an isobaric monoblock filler where bottles are rinsed, filled under pressure, and tightly capped at high speeds. The result is a refreshing, perfectly carbonated drink ready for the market.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Start a Carbonated Soft Drink Business?</h3>
              <p>The soft drink industry is evergreen. Consumers constantly crave refreshing, fizzy beverages. Setting up a fully automatic plant allows you to produce high volumes at a low per-unit cost, resulting in excellent profit margins and brand growth.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does the Carbonation Process Work?</h3>
              <p>Carbon dioxide dissolves best in cold liquids. The blended beverage is first passed through a plate heat exchanger to drop its temperature to around 2°C to 4°C. It then enters a carbonator where pressurized CO2 gas is injected. The cold temperature locks the gas in, creating that signature refreshing fizz.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries delivers highly efficient CSD plants featuring superior syrup blending and high-speed isobaric fillers. Our zero-loss carbonation technology ensures no gas escapes during filling. The entire line is automated, incredibly easy to clean, and built to run continuously for maximum output.</p>
            </div>`
  },
  "EnergyDrinkProcessingPlantDetailPage.jsx": {
    name: "Energy Drink",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "RO Water Treatment" },
  { "id": 2, "title": "Precise Ingredient Dosing" },
  { "id": 3, "title": "High-Shear Blending" },
  { "id": 4, "title": "Pasteurization" },
  { "id": 5, "title": "Carbonation (Optional)" },
  { "id": 6, "title": "Filling & Sealing" },
  { "id": 7, "title": "Shrink Wrapping" }
]`,
    faqs: `const FAQS = [
  {
    "question": "Can this plant produce both carbonated and non-carbonated energy drinks?",
    "answer": "Yes. The plant includes a bypassable carbonation unit and versatile filling valves, allowing you to produce both sparkling and still energy drinks on the same line."
  },
  {
    "question": "How do you ensure the exact dosage of caffeine and vitamins?",
    "answer": "We utilize highly accurate electronic mass flow meters and precision dosing pumps to ensure every active ingredient is blended in exact, safe proportions."
  },
  {
    "question": "Are you able to fill aluminum cans?",
    "answer": "Yes, our processing plant can be integrated with a high-speed can filling and seaming line, which is the most popular packaging for premium energy drinks."
  },
  {
    "question": "How is the drink pasteurized?",
    "answer": "We use a short-time, high-temperature Plate Heat Exchanger (PHE) pasteurizer that kills microbes instantly without degrading the heat-sensitive vitamins and flavors."
  }
];`,
    overviewP: `<p>Tap into the rapidly expanding functional beverage market with our <strong>Fully Automated Energy Drink Processing Plant</strong>. Energy drinks require exact formulations and high-quality processing to deliver the perfect boost to consumers.</p>
              <p>The manufacturing process relies on extreme precision. Purified RO water is expertly blended with sugar syrup, caffeine, taurine, vitamins, and specialized flavors using high-shear mixers. This ensures that all active ingredients are perfectly dissolved and evenly distributed.</p>
              <p>The beverage is then flash-pasteurized to ensure safety without destroying its nutritional value. Depending on the recipe, it is either carbonated for a fizzy kick or kept still. Finally, it is filled into aluminum cans or PET bottles at high speeds, sealed, and packed for distribution.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Invest in Energy Drink Manufacturing?</h3>
              <p>Energy drinks are a high-margin, fast-growing segment in the beverage industry, popular among young adults, athletes, and professionals. A well-branded energy drink manufactured with consistent quality can quickly capture a loyal consumer base.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How are Energy Drinks Formulated Safely?</h3>
              <p>Safety is critical because energy drinks contain active stimulants like caffeine. Our automated dosing systems use highly sensitive load cells and flow meters. This guarantees that every single batch contains the exact milligrams of ingredients per bottle, complying perfectly with food safety regulations.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides cutting-edge technology tailored for functional beverages. Our plants feature precision blending systems that prevent ingredient settling and advanced filling machines suitable for premium cans and bottles. We ensure a 100% hygienic, FDA-compliant manufacturing environment.</p>
            </div>`
  },
  "HealthDrinkPlantDetailPage.jsx": {
    name: "Health Drink",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Water/Milk Prep" },
  { "id": 2, "title": "Nutrient Dosing" },
  { "id": 3, "title": "Homogenization" },
  { "id": 4, "title": "UHT Sterilization" },
  { "id": 5, "title": "Aseptic Filling" },
  { "id": 6, "title": "Quality Checking" },
  { "id": 7, "title": "Carton Packing" }
]`,
    faqs: `const FAQS = [
  {
    "question": "What is UHT and why is it used for health drinks?",
    "answer": "UHT stands for Ultra-High Temperature processing. It heats the beverage to around 135°C for just a few seconds. This kills all bacteria but protects the vitamins and proteins from heat degradation."
  },
  {
    "question": "Can this plant process milk-based and plant-based health drinks?",
    "answer": "Yes, our processing lines are designed to handle both dairy-based drinks and plant-based alternatives like almond, soy, or oat milk."
  },
  {
    "question": "Does the beverage require preservatives?",
    "answer": "No. When UHT sterilization is combined with aseptic (germ-free) packaging, the health drink can last for months on a shelf without needing any chemical preservatives."
  },
  {
    "question": "How are the proteins and nutrients mixed smoothly?",
    "answer": "We use advanced high-shear mixers followed by a high-pressure homogenizer. This breaks down protein clumps and fat molecules, ensuring a perfectly smooth, lump-free beverage."
  }
];`,
    overviewP: `<p>Meet the rising consumer demand for nutrition and wellness with our <strong>Fully Automated Health Drink Plant</strong>. Whether you are producing protein shakes, vitamin-fortified waters, or plant-based milks, this plant delivers uncompromising quality.</p>
              <p>The process starts with a pure liquid base (water or milk) which is then accurately dosed with nutritional powders, vitamins, and minerals. Because health drinks often contain proteins that tend to clump, the mixture is passed through a powerful homogenizer to create a perfectly smooth, silky texture.</p>
              <p>To preserve the delicate nutrients, the beverage undergoes UHT (Ultra-High Temperature) sterilization. It is heated and cooled in seconds, ensuring total safety. Finally, it is filled in a completely sterile aseptic environment into tetra packs or specialized bottles, ensuring a long shelf life without preservatives.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Start a Health Drink Business?</h3>
              <p>Consumers are actively shifting towards healthier lifestyles and functional foods. Nutritional drinks, immunity boosters, and protein shakes command premium pricing. Manufacturing these products in a hygienic, automated plant guarantees success in the modern FMCG market.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How is Nutritional Value Protected During Processing?</h3>
              <p>Heat can destroy sensitive vitamins and denature proteins. Instead of boiling the liquid for a long time, we use a UHT (Ultra-High Temperature) process. The drink is heated very quickly and cooled immediately. This eliminates pathogens instantly while leaving the nutritional profile intact.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Health drinks require strict sanitary standards. Salvin Industries designs plants with 100% hygienic aseptic piping, zero dead-legs, and automated CIP (Clean-in-Place) systems. Our cutting-edge homogenizers and sterile filling lines ensure your health drink is premium, safe, and delicious.</p>
            </div>`
  },
  "SyrupManufacturingPlantDetailPage.jsx": {
    name: "Syrup Manufacturing",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Water Heating" },
  { "id": 2, "title": "Sugar Dissolving" },
  { "id": 3, "title": "Filtration" },
  { "id": 4, "title": "Flavor Blending" },
  { "id": 5, "title": "Syrup Cooling" },
  { "id": 6, "title": "Volumetric Filling" },
  { "id": 7, "title": "Capping & Sealing" }
]`,
    faqs: `const FAQS = [
  {
    "question": "How does the machine handle thick, highly viscous syrups?",
    "answer": "Our plants use heavy-duty agitators and specialized positive displacement or piston pumps designed specifically to move and fill thick, sticky liquids effortlessly."
  },
  {
    "question": "How do you ensure the sugar is completely dissolved without burning?",
    "answer": "We use jacketed mixing vessels that heat the liquid using steam or hot water. This provides gentle, uniform indirect heat, ensuring 100% dissolving without any burning or caramelization."
  },
  {
    "question": "Can this plant produce both beverage syrups and medicinal syrups?",
    "answer": "Yes, our SS316 food-grade and pharma-grade vessels can be used to manufacture flavored beverage syrups, squash, cordials, and even medicinal cough syrups."
  },
  {
    "question": "Is the system easy to clean after making a sticky batch?",
    "answer": "Absolutely. The plant is equipped with a high-pressure CIP (Clean-In-Place) system that circulates hot water and cleaning agents, thoroughly washing away all sticky residues without manual scrubbing."
  }
];`,
    overviewP: `<p>Produce high-quality concentrated syrups, squashes, and flavorings with our <strong>Fully Automatic Syrup Manufacturing Plant</strong>. Syrups are the foundation for countless beverages, desserts, and even medicinal products.</p>
              <p>The manufacturing process requires careful temperature control. Purified water is heated in a steam-jacketed vessel, and sugar is gradually added. Heavy-duty agitators continuously mix the solution until a clear, thick sugar syrup is formed. This base is then passed through inline filters to remove any impurities.</p>
              <p>Once filtered, the liquid is cooled, and concentrated flavors, colors, and preservatives are precisely blended in. Because syrups are thick and sticky, they are pumped using specialized positive displacement pumps into a volumetric filling machine, ensuring every bottle is accurately filled and tightly sealed without any messy spills.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Invest in Syrup Manufacturing?</h3>
              <p>Concentrated syrups and fruit squashes have a long shelf life and high profit margins. They are heavily used by the HORECA (Hotels, Restaurants, Cafes) sector, mocktail bars, and home consumers. A single batch yields a massive volume of end-product.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How is High Viscosity Handled in Production?</h3>
              <p>Syrup is highly viscous (thick). Standard centrifugal pumps cannot move it effectively and gravity fillers will clog. We utilize steam-jacketed heating to keep the syrup fluid during processing, and piston-based volumetric fillers to force the exact amount of syrup into bottles accurately.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries engineers syrup plants designed for zero wastage and easy cleaning. Our jacketed vessels provide precise temperature control, preventing sugar crystallization. The integrated CIP system makes cleaning sticky residues completely effortless, allowing you to switch flavors quickly.</p>
            </div>`
  },
  "RTSBeveragePlantDetailPage.jsx": {
    name: "RTS Beverage",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Pulp/Concentrate Prep" },
  { "id": 2, "title": "Sugar Syrup Blending" },
  { "id": 3, "title": "Homogenization" },
  { "id": 4, "title": "Pasteurization" },
  { "id": 5, "title": "Hot Filling" },
  { "id": 6, "title": "Bottle Cooling" },
  { "id": 7, "title": "Labeling & Packing" }
]`,
    faqs: `const FAQS = [
  {
    "question": "What does RTS mean?",
    "answer": "RTS stands for 'Ready-To-Serve'. These are non-carbonated fruit beverages like mango drinks or mixed fruit juices that contain real fruit pulp and can be consumed immediately."
  },
  {
    "question": "Why is 'Hot Filling' used for these drinks?",
    "answer": "Hot filling involves packing the beverage at around 85°C. The hot liquid sterilizes the inside of the bottle and the cap, creating a vacuum seal when it cools, extending shelf life without preservatives."
  },
  {
    "question": "Do I need to extract fresh fruit pulp daily?",
    "answer": "Not necessarily. Our plants can easily process pre-packaged aseptic fruit pulp or concentrates, allowing you to produce fruit beverages all year round regardless of the fruit's season."
  },
  {
    "question": "Can PET bottles handle hot filling?",
    "answer": "Standard PET bottles will shrink. You must use specialized 'Hot Fill PET Bottles' which are designed to withstand high temperatures, or alternatively use glass bottles."
  }
];`,
    overviewP: `<p>Launch your own brand of delicious fruit drinks with our <strong>Fully Automated RTS (Ready-To-Serve) Beverage Plant</strong>. Mango drinks, guava juices, and mixed fruit beverages are immensely popular and form a massive segment of the beverage industry.</p>
              <p>The production process starts by blending real fruit pulp or concentrates with a standardized sugar syrup, water, and citric acid. The mixture is thoroughly blended and passed through a homogenizer to ensure the fruit particles do not separate or settle at the bottom of the bottle.</p>
              <p>To ensure a long shelf life without adding harmful preservatives, the beverage is pasteurized and pumped into the 'Hot Fill' machine. The drink is filled into heat-resistant bottles at high temperatures (around 85°C). The bottles are sealed, inverted to sterilize the cap, and then passed through a cooling tunnel before final labeling.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Start an RTS Fruit Beverage Business?</h3>
              <p>Fruit-based drinks are a consumer favorite, offering a refreshing and slightly healthier alternative to synthetic sodas. With high demand throughout the year, producing quality RTS beverages guarantees consistent sales and rapid business expansion.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does Hot Filling Extend Shelf Life?</h3>
              <p>In hot filling, the pasteurized beverage is filled at 85°C-90°C. This high temperature automatically sterilizes the inner walls of the bottle. As the sealed bottle goes through the cooling tunnel, the liquid shrinks slightly, creating a strong vacuum seal that locks out oxygen and bacteria, keeping the juice fresh for months.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Our RTS beverage plants are engineered for absolute perfection. We provide highly efficient homogenizers that prevent pulp separation, and precise hot-fill monoblock machines that ensure accurate filling without bottle deformation. Salvin's automated cooling tunnels guarantee a smooth transition to room temperature, ensuring your product looks and tastes perfect.</p>
            </div>`
  },
  "MineralWaterPlantDetailPage.jsx": {
    name: "Mineral Water",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Raw Water Pumping" },
  { "id": 2, "title": "Multi-Grade Filtration" },
  { "id": 3, "title": "Reverse Osmosis (RO)" },
  { "id": 4, "title": "Mineral Dosing" },
  { "id": 5, "title": "UV & Ozonation" },
  { "id": 6, "title": "Rinsing & Filling" },
  { "id": 7, "title": "Labeling & Shrink Wrap" }
]`,
    faqs: `const FAQS = [
  {
    "question": "What is the difference between Packaged Drinking Water and Mineral Water?",
    "answer": "Packaged drinking water is highly purified RO water. Mineral water goes a step further by artificially or naturally adding essential minerals like Calcium and Magnesium back into the water for health benefits and taste."
  },
  {
    "question": "How are minerals added to the water?",
    "answer": "After the RO system strips the water of all impurities (and natural minerals), our precise Mineral Dosing Pump injects a calculated solution of essential minerals into the pure water stream."
  },
  {
    "question": "Why is Ozonation required?",
    "answer": "Ozone is a powerful natural disinfectant. Dissolving ozone into the water just before filling ensures the water, bottle, and cap remain completely sterile, preventing any bacterial growth during storage."
  },
  {
    "question": "Is the filling machine fully automatic?",
    "answer": "Yes, we provide an automatic rotary monoblock machine that seamlessly rinses the empty bottle, fills it with mineral water, and caps it in one continuous motion."
  }
];`,
    overviewP: `<p>Provide safe, healthy, and refreshing hydration with our <strong>Fully Automatic Mineral Water Plant</strong>. With increasing health awareness, the demand for premium mineral-enriched water is at an all-time high in homes, offices, and restaurants.</p>
              <p>The purification process is rigorous. Raw water is pumped through sand, carbon, and micron filters to remove suspended particles, odor, and color. It then passes through a high-pressure Reverse Osmosis (RO) system which eliminates dissolved solids, heavy metals, and impurities down to the molecular level.</p>
              <p>Since RO removes natural minerals, a precise dosing system adds essential minerals back into the water for a crisp taste and health benefits. Finally, the water is sterilized using UV light and Ozone gas before being automatically filled and capped in a highly hygienic rotary monoblock machine.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Mineral Water Plant?</h3>
              <p>Clean drinking water is a basic human necessity, making this a recession-proof business. Adding minerals creates a premium product that commands a higher selling price, ensuring excellent profit margins and brand loyalty.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Does Reverse Osmosis (RO) Work?</h3>
              <p>Reverse Osmosis forces water through a semi-permeable membrane under high pressure. The pores in this membrane are so tiny (0.0001 microns) that only pure water molecules can pass through, leaving behind 99% of dissolved salts, bacteria, viruses, and heavy metals.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries delivers state-of-the-art water purification technology. Our plants feature industrial-grade RO membranes, precise electronic mineral dosers, and zero-contact automated filling machines. We ensure your plant meets all stringent government standards (like BIS/FSSAI) for packaged mineral water.</p>
            </div>`
  },
  "PackagedDrinkingWaterPlantDetailPage.jsx": {
    name: "Packaged Drinking Water",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Raw Water Storage" },
  { "id": 2, "title": "Sand & Carbon Filtration" },
  { "id": 3, "title": "Reverse Osmosis (RO)" },
  { "id": 4, "title": "UV Sterilization" },
  { "id": 5, "title": "Ozonation" },
  { "id": 6, "title": "Bottle Blowing" },
  { "id": 7, "title": "Filling & Capping" }
]`,
    faqs: `const FAQS = [
  {
    "question": "Does this plant comply with ISI / BIS standards?",
    "answer": "Yes, our plants are designed specifically to meet all the strict water purification and hygiene standards mandated by BIS, ISI, and FSSAI."
  },
  {
    "question": "Can I manufacture the PET bottles on-site?",
    "answer": "Absolutely. We can integrate an Automatic PET Bottle Blowing Machine into the line, allowing you to manufacture your own bottles from preforms, drastically reducing your costs."
  },
  {
    "question": "How often do the filters and RO membranes need changing?",
    "answer": "Sand and carbon media typically last 1 to 2 years. RO membranes can last 2 to 3 years depending on the raw water quality and how regularly you perform backwashing and maintenance."
  },
  {
    "question": "What is the capacity of these plants?",
    "answer": "We manufacture plants ranging from 1,000 Liters Per Hour (LPH) for small setups, all the way up to 10,000+ LPH for large-scale industrial bottling operations."
  }
];`,
    overviewP: `<p>Start a highly profitable and essential business with our <strong>Fully Automatic Packaged Drinking Water Plant</strong>. Safe drinking water is a daily necessity, guaranteeing a massive, never-ending market demand.</p>
              <p>The journey begins by treating raw borewell or municipal water. It is passed through a Sand Filter to remove dirt, a Carbon Filter to remove chlorine and odors, and Micron Filters to catch fine particles. The core purification happens in the Reverse Osmosis (RO) system, which strips away all dissolved impurities and pathogens.</p>
              <p>Before packaging, the pure water is passed through a UV Sterilizer and an Ozone generator to ensure absolute zero bacterial presence. The sterile water is then directly routed to an automated rotary machine that rinses, fills, and caps the bottles at high speeds without any human touch.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Start a Packaged Drinking Water Business?</h3>
              <p>The demand for pure, safe drinking water is universal. From local retail shops to weddings and corporate events, packaged water is always needed. It requires very low raw material costs, leading to high profitability and quick return on investment.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How is the Water Kept 100% Sterile?</h3>
              <p>Even after RO purification, water can catch bacteria from the air or piping. We use a dual-barrier method: UV Sterilization destroys the DNA of any remaining microbes, and Ozonation dissolves ozone gas into the water. Ozone keeps the water sterile inside the sealed bottle and naturally converts back to oxygen, leaving no chemical residue.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides complete turnkey solutions for packaged water. From water testing and plant layout design to high-grade SS316 machinery and automatic blowing-filling lines, we handle everything. Our equipment ensures maximum water recovery and complies with all national quality standards.</p>
            </div>`
  },
  "CoconutWaterProcessingPlantDetailPage.jsx": {
    name: "Coconut Water Processing",
    processSteps: `const PROCESS_STEPS = [
  { "id": 1, "title": "Washing & Dehusking" },
  { "id": 2, "title": "Water Extraction" },
  { "id": 3, "title": "Fine Filtration" },
  { "id": 4, "title": "Cooling (PHE)" },
  { "id": 5, "title": "Pasteurization / UHT" },
  { "id": 6, "title": "Aseptic Filling" },
  { "id": 7, "title": "Packaging" }
]`,
    faqs: `const FAQS = [
  {
    "question": "How do you prevent coconut water from turning pink or brown?",
    "answer": "Coconut water oxidizes rapidly when exposed to air. Our extraction and filtration process minimizes air contact, and the liquid is rapidly chilled using a Plate Heat Exchanger (PHE) to stop enzymatic reactions that cause discoloration."
  },
  {
    "question": "Does the processing change the natural taste?",
    "answer": "No. We use gentle, extremely rapid thermal processing (UHT or short-time pasteurization) that destroys spoiling bacteria without cooking the water, preserving its delicate, natural, and refreshing flavor."
  },
  {
    "question": "Can coconut water be packed in Tetra Packs?",
    "answer": "Yes, our processing plant seamlessly integrates with Aseptic Tetra Pack filling machines, which is the industry standard for premium, long-shelf-life coconut water."
  },
  {
    "question": "How is the water extracted hygienically?",
    "answer": "After dehusking, the coconuts are thoroughly washed. They are then pierced or cut using food-grade stainless steel blades, and the water is collected in sterile collection troughs equipped with immediate filtration."
  }
];`,
    overviewP: `<p>Capitalize on the global health trend with our <strong>Fully Automated Coconut Water Processing Plant</strong>. Natural coconut water is revered as nature's ultimate sports drink, packed with electrolytes, and its market demand is surging worldwide.</p>
              <p>Processing coconut water is highly delicate as it spoils and discolors quickly. The process starts with automated dehusking, washing, and hygienic extraction of the water. The extracted water is immediately passed through micron filters to remove shell fragments and rapidly chilled to prevent oxidation and color changes.</p>
              <p>To give it a long shelf life, the chilled water undergoes UHT (Ultra-High Temperature) sterilization or precise pasteurization. It is then filled in a completely sterile environment into aseptic bottles or tetra packs. The entire system is enclosed and automated to ensure zero human touch and maximum freshness.</p>`,
    seoBlocks: `<div className="rcp-seo-content__block">
              <h3>Why Invest in Coconut Water Processing?</h3>
              <p>Coconut water is a premium, high-value product that appeals to health-conscious consumers globally. By packaging it hygienically with a long shelf life, you can export it or distribute it widely, generating substantial profit margins.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why is Rapid Cooling Important?</h3>
              <p>The moment coconut water is exposed to oxygen and room temperatures, enzymes cause it to turn pink or brown and spoil. Immediately after extraction, we pump the water through a Plate Heat Exchanger (PHE) which instantly drops the temperature to 4°C, halting enzymatic activity and preserving the natural color and taste.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries understands the complexities of sensitive beverages. Our coconut water plants feature specialized enclosed extraction units, rapid cooling systems, and advanced aseptic processing technology. We ensure your packaged coconut water tastes exactly as fresh as drinking it straight from the nut.</p>
            </div>`
  }
};

for (const [filename, data] of Object.entries(plantsData)) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.log("File not found:", filename);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace PROCESS_STEPS
  content = content.replace(/const PROCESS_STEPS = \[([\s\S]*?)\];?/, data.processSteps);

  // Replace FAQS
  content = content.replace(/const FAQS = \[([\s\S]*?)\];?/, data.faqs);

  // Replace Overview text
  const overviewRegex = /(<div className="rcp-overview__text">)[\s\S]*?(<div className="rcp-overview__features">)/;
  content = content.replace(overviewRegex, `$1\n              ${data.overviewP}\n              $2`);

  // Replace SEO blocks
  const seoRegex = /(<div className="rcp-seo-content__body">)[\s\S]*?(<\/div>\n\s*<\/div>\n\s*<\/section>)/;
  content = content.replace(seoRegex, `$1\n            ${data.seoBlocks}\n          $2`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Updated", filename);
}
