const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const pages = [
  {
    file: 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Fruit Juice Processing Plant',
    img: 'fruit-juice.jpeg',
    desc: 'Salvin Industries offers a premium Fully Automated Fruit Juice Processing Plant, an end-to-end industrial turnkey solution designed for maximum yield and unparalleled hygienic standards. Our advanced fruit juice extraction machinery ensures maximum flavor retention and extended shelf life.',
    metaDesc: 'Discover the Fully Automated Fruit Juice Processing Plant by Salvin Industries. Our industrial turnkey solution provides advanced extraction, pasteurization, and aseptic packaging for premium fruit juice production.',
    processSteps: [
      { id: 1, title: 'Fruit Receiving & Washing' },
      { id: 2, title: 'Sorting & Inspection' },
      { id: 3, title: 'Crushing & Pulping' },
      { id: 4, title: 'Enzymatic Treatment & Filtration' },
      { id: 5, title: 'Homogenization & Pasteurization' },
      { id: 6, title: 'Deaeration & Cooling' },
      { id: 7, title: 'Aseptic Filling & Packaging' }
    ],
    machinery: [
      { name: 'Industrial Bubble Washing Machine', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'High-capacity washing flume ensuring complete removal of dirt, pesticides, and microbial contaminants from raw fruits.' },
      { name: 'Roller Sorting Conveyor', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Precision inspection system allowing operators to remove defective fruits before they enter the processing line.' },
      { name: 'Heavy-Duty Fruit Pulper & Extractor', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Robust stainless steel extraction unit engineered for maximum juice yield while efficiently separating seeds and skins.' },
      { name: 'Juice Clarification & Filtration System', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Advanced micro-filtration machinery designed to produce clear, pulp-free juice with perfect consistency.' },
      { name: 'Tubular Pasteurization Unit', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'High-efficiency thermal processing equipment ensuring the elimination of pathogens while preserving the fruit’s natural vitamins and aroma.' },
      { name: 'Automatic Aseptic Filling Line', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Highly automated bottling and capping system that guarantees a sterile packaging environment for extended shelf life.' }
    ],
    faqs: [
      { question: 'What is the production capacity of the Fruit Juice Processing Plant?', answer: 'Our turnkey juice processing plants are fully customizable, with industrial capacities ranging from 1,000 liters per hour (LPH) up to 20,000 LPH based on client requirements.' },
      { question: 'Does the plant support aseptic packaging for long shelf life?', answer: 'Yes, our fruit juice machinery integrates seamlessly with aseptic packaging lines, including PET bottles, Tetra Pak, and aseptic pouches, ensuring zero contamination.' },
      { question: 'Can the same plant process multiple types of fruits?', answer: 'Absolutely. The production line is designed with modular extraction systems capable of processing apples, mangoes, oranges, berries, and mixed fruits with minimal changeover time.' },
      { question: 'How is the natural flavor and color of the juice maintained?', answer: 'We utilize advanced deaeration technology to prevent oxidation, combined with rapid tubular pasteurization that perfectly preserves the natural flavor, color, and nutritional profile.' },
      { question: 'Do you provide complete installation and commissioning services?', answer: 'Yes, Salvin Industries provides end-to-end turnkey services, from 3D factory layout and equipment manufacturing to on-site installation, commissioning, and operator training.' }
    ]
  },
  {
    file: 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx',
    title: 'Fully Automatic Jelly Manufacturing Plant',
    img: 'jelly.jpeg',
    desc: 'Salvin Industries engineers the Fully Automatic Jelly Manufacturing Plant, a state-of-the-art turnkey processing line for high-volume jelly production. Our industrial machinery ensures precision mixing, continuous vacuum cooking, and high-speed automated packaging.',
    metaDesc: 'Invest in a Fully Automatic Jelly Manufacturing Plant by Salvin Industries. High-capacity commercial jelly making machines featuring vacuum cooking, flavor dosing, and cup packaging.',
    processSteps: [
      { id: 1, title: 'Sugar Dissolving & Syrup Preparation' },
      { id: 2, title: 'Pectin & Ingredient Blending' },
      { id: 3, title: 'Continuous Vacuum Cooking' },
      { id: 4, title: 'Inline Flavor & Color Dosing' },
      { id: 5, title: 'Automated Cup Filling' },
      { id: 6, title: 'Cooling Tunnel Setting' },
      { id: 7, title: 'Sealing & Carton Packaging' }
    ],
    machinery: [
      { name: 'Jacketed Sugar Dissolving Kettle', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'SS316 food-grade mixing kettle equipped with high-shear agitators for the rapid and uniform dissolution of sugar and water.' },
      { name: 'Pectin Preparation & Blending Tank', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Specialized blending machinery designed to mix pectin without lump formation, ensuring a perfectly smooth jelly base.' },
      { name: 'Continuous Vacuum Cooker System', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Evaporates excess moisture at lower temperatures to achieve the exact Brix level without burning or caramelizing the syrup.' },
      { name: 'Automated Inline Dosing Pumps', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Precision dosing system that accurately injects liquid flavors, vibrant colors, and citric acid just before the filling stage.' },
      { name: 'High-Speed Rotary Cup Filler', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Automated packaging machinery that precisely fills liquid jelly into plastic cups or pouches at high speeds without splashing.' },
      { name: 'Industrial Cooling Tunnel', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'A continuous conveyor cooling system that rapidly lowers the product temperature to ensure the jelly sets firmly before final packaging.' }
    ],
    faqs: [
      { question: 'What is the processing capacity of the Jelly Manufacturing Plant?', answer: 'We engineer jelly plants with processing capacities starting from 500 kg/hr up to 5,000 kg/hr, customized to suit your industrial production needs.' },
      { question: 'Can this plant produce different types of jellies?', answer: 'Yes, the plant is highly versatile and capable of producing clear jellies, real fruit pulp jellies, pectin-based jellies, and fortified functional jellies.' },
      { question: 'How do you ensure consistent texture and firmness in the jelly?', answer: 'Our continuous vacuum cookers paired with automated PLC-controlled ingredient batching ensure that every batch achieves the exact Brix and pH levels required for a perfect set.' },
      { question: 'Is a CIP (Clean-In-Place) system included in the production line?', answer: 'Yes, the entire processing line, including kettles, pipelines, and filling nozzles, is connected to an automated CIP system for quick, hygienic cleaning during flavor changeovers.' },
      { question: 'What packaging options does the plant support?', answer: 'The line can be integrated with various packaging solutions, including rotary cup fillers, stick-pack machines, and spouted pouch filling machines.' }
    ]
  },
  {
    file: 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx',
    title: 'Fully Automatic Dehydrated Garlic Plant',
    img: 'garlic.jpeg',
    desc: 'The Fully Automatic Dehydrated Garlic Plant by Salvin Industries is a world-class industrial processing solution. Engineered for maximum flavor retention, this turnkey plant automates peeling, slicing, and hot air dehydration for premium garlic flakes and powder.',
    metaDesc: 'Salvin Industries provides a Fully Automatic Dehydrated Garlic Plant. Complete industrial machinery for garlic bulb breaking, pneumatic peeling, slicing, and continuous dehydration.',
    processSteps: [
      { id: 1, title: 'Garlic Bulb Breaking' },
      { id: 2, title: 'Pneumatic Garlic Peeling' },
      { id: 3, title: 'Washing & Sterilization' },
      { id: 4, title: 'Precision Slicing' },
      { id: 5, title: 'Multi-Layer Continuous Drying' },
      { id: 6, title: 'Optical Color Sorting' },
      { id: 7, title: 'Milling & Bulk Packaging' }
    ],
    machinery: [
      { name: 'Industrial Garlic Bulb Breaker', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Gently separates whole garlic bulbs into individual cloves using soft rubber rollers, preventing any mechanical damage to the cloves.' },
      { name: 'Pneumatic Garlic Peeling Machine', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Utilizes high-pressure compressed air to peel garlic cloves with 98% efficiency, ensuring a clean, undamaged surface without water.' },
      { name: 'Garlic Washing & Sterilization Flume', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Thoroughly washes peeled cloves to remove the thin inner membrane, dust, and microbial load before the slicing process.' },
      { name: 'High-Speed Garlic Slicer Machine', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Equipped with ultra-sharp rotating blades to cut garlic cloves into uniform slices, ensuring consistent drying rates.' },
      { name: 'Continuous Multi-Layer Belt Dryer', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'A temperature-controlled hot air circulation drying oven that gently removes moisture to produce premium dehydrated garlic flakes.' },
      { name: 'Advanced Optical Color Sorter', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Camera-based inspection system that automatically detects and rejects discolored, burnt, or defective garlic pieces to ensure export quality.' }
    ],
    faqs: [
      { question: 'Does the dehydration process retain the strong garlic aroma?', answer: 'Yes. Our continuous multi-layer belt dryers use precise, low-temperature profiles (55°C - 65°C) that perfectly preserve the essential oils, allicin content, and strong natural aroma of the garlic.' },
      { question: 'What forms of dehydrated garlic can this plant produce?', answer: 'The processing line can produce dehydrated garlic flakes (slices). With the addition of our milling section, it can also produce minced garlic, granulated garlic, and fine garlic powder.' },
      { question: 'How is the garlic peeled without damaging the clove?', answer: 'We utilize advanced pneumatic (air-based) peeling technology. This method uses air friction rather than mechanical abrasion, ensuring 98% peeling efficiency with zero damage to the clove surface.' },
      { question: 'What is the standard production capacity of the plant?', answer: 'We offer customizable turnkey solutions ranging from 500 kg/day to 10,000 kg/day of raw garlic processing, tailored to your industrial requirements.' },
      { question: 'Can this plant be used to dehydrate other vegetables like onions?', answer: 'With minor adjustments to the peeling and slicing sections, the continuous drying line can effectively process and dehydrate onions, ginger, and other root vegetables.' }
    ]
  },
  {
    file: 'FullyAutomaticVegetableDryingPlantDetailPage.jsx',
    title: 'Fully Automatic Vegetable Drying Plant',
    img: 'vegetable-drying.jpeg',
    desc: 'Salvin Industries’ Fully Automatic Vegetable Drying Plant is a highly versatile industrial dehydration solution. Equipped with advanced washing, blanching, and continuous hot-air drying technology, it produces export-quality dried onions, carrots, and leafy greens.',
    metaDesc: 'Discover the Fully Automatic Vegetable Drying Plant from Salvin Industries. A complete industrial dehydration line featuring washing, slicing, blanching, and continuous hot air drying.',
    processSteps: [
      { id: 1, title: 'Raw Material Sorting' },
      { id: 2, title: 'Industrial Washing & Peeling' },
      { id: 3, title: 'Slicing, Dicing & Chopping' },
      { id: 4, title: 'Steam Blanching' },
      { id: 5, title: 'De-watering & Pre-drying' },
      { id: 6, title: 'Continuous Hot Air Dehydration' },
      { id: 7, title: 'Cooling & Moisture-proof Packing' }
    ],
    machinery: [
      { name: 'Industrial Air Bubble Washing Machine', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'High-pressure bubble washing tank that thoroughly agitates and cleans soil, pesticides, and impurities from various vegetables.' },
      { name: 'Abrasive Peeling & Washing Unit', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Heavy-duty abrasive rollers designed to peel root vegetables like potatoes and carrots efficiently with minimal product loss.' },
      { name: 'Multi-functional Vegetable Dicer & Slicer', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'High-speed industrial cutting machine capable of processing vegetables into uniform slices, cubes, or julienne strips.' },
      { name: 'Continuous Steam Blanching Line', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Inactivates enzymes using steam or hot water to preserve the original color and nutritional profile of the vegetables before drying.' },
      { name: 'Vibratory De-watering Shaker', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Uses high-frequency vibration and air blowers to remove surface moisture post-blanching, significantly reducing the load on the dryer.' },
      { name: 'Heat Pump / Hot Air Circulation Dryer', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Energy-efficient multi-layer drying oven that gently removes core moisture from vegetables while maintaining their structural integrity.' }
    ],
    faqs: [
      { question: 'Which vegetables can be dried using this processing plant?', answer: 'The plant is highly versatile and can dehydrate onions, tomatoes, carrots, potatoes, cabbage, spinach, mushrooms, bell peppers, and various herbs.' },
      { question: 'Why is blanching necessary before dehydration?', answer: 'Blanching deactivates enzymes that cause browning and flavor loss during the drying process. It ensures the final dried vegetables retain their vibrant color, texture, and nutritional value.' },
      { question: 'What heating sources are available for the continuous dryer?', answer: 'Depending on your factory setup and local utility costs, the dryer can be configured to run on electricity, steam radiators, thermic fluid heaters, or natural gas burners.' },
      { question: 'Is the final product suitable for export markets?', answer: 'Absolutely. Our automated lines are built with SS304/316 food-grade stainless steel and integrate optical color sorters to ensure the final product meets stringent FDA and European export standards.' },
      { question: 'What is the moisture content of the final dried vegetables?', answer: 'The drying parameters are fully adjustable via the PLC panel. Typically, vegetables are dehydrated down to a final moisture content of 4% to 8% for maximum shelf life.' }
    ]
  },
  {
    file: 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Garam Masala Processing Plant',
    img: 'garam-masala.jpeg',
    desc: 'The Fully Automated Garam Masala Processing Plant by Salvin Industries offers a high-capacity, end-to-end spice grinding and blending solution. Our cryogenic and water-cooled pulverizers ensure zero aroma loss, delivering export-quality blended spices.',
    metaDesc: 'Explore the Fully Automated Garam Masala Processing Plant by Salvin Industries. Turnkey spice processing line featuring automatic batching, roasting, cryogenic grinding, and ribbon blending.',
    processSteps: [
      { id: 1, title: 'Raw Spice Cleaning & Destoning' },
      { id: 2, title: 'Automated Proportionate Batching' },
      { id: 3, title: 'Continuous Spice Roasting' },
      { id: 4, title: 'Cooling & Conditioning' },
      { id: 5, title: 'Low-Temperature Grinding' },
      { id: 6, title: 'Homogeneous Ribbon Blending' },
      { id: 7, title: 'Automated Form-Fill-Seal Packaging' }
    ],
    machinery: [
      { name: 'Vibratory Screen & Spice Destoner', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Advanced pneumatic destoner that removes dust, heavy stones, twigs, and foreign particles from whole spices like cumin and cardamom.' },
      { name: 'Automated PLC Batching System', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Precision load-cell based weighing system that automatically feeds the exact proportion of each spice according to your secret recipe.' },
      { name: 'Continuous Rotary Spice Roaster', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Drum roaster that uniformly heats whole spices to release essential volatile oils, significantly enhancing the aroma profile of the Garam Masala.' },
      { name: 'Multi-stage Water-Cooled Pulverizer', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'High-speed impact mill equipped with a cooling jacket to prevent temperature rise, ensuring zero loss of flavor during grinding.' },
      { name: 'Industrial Ribbon Blender with Sprayer', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Heavy-duty U-trough mixer designed for the homogeneous blending of multiple ground spices, with optional oleoresin spraying capabilities.' },
      { name: 'VFFS Spice Pouch Packing Machine', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'High-speed Vertical Form-Fill-Seal machine integrated with a multi-head weigher or auger filler for precision packaging into retail pouches.' }
    ],
    faqs: [
      { question: 'Does the high-speed grinding process cause aroma loss?', answer: 'No. Our pulverizers are either water-jacketed or integrated with cryogenic (liquid nitrogen) grinding technology to maintain ultra-low temperatures, preventing the volatilization of essential spice oils.' },
      { question: 'Can the plant automatically handle complex customized spice formulations?', answer: 'Yes, the centralized PLC/SCADA batching system allows you to save hundreds of recipes. It will automatically weigh and convey the exact proportions of up to 15 different whole spices per batch.' },
      { question: 'How is dust controlled in the spice processing facility?', answer: 'The entire plant is fully enclosed and integrated with centralized pulse-jet dust collection systems. This ensures a dust-free working environment and prevents cross-contamination between batches.' },
      { question: 'What type of packaging machines are provided for Garam Masala?', answer: 'We integrate fully automated VFFS (Vertical Form-Fill-Seal) machines capable of handling stand-up pouches, center-seal bags, and jars, optionally equipped with nitrogen flushing for extended shelf life.' },
      { question: 'Can the same plant be used for single spices like Turmeric or Chilli?', answer: 'Yes, the grinding and packaging modules are highly versatile. With proper cleaning procedures, you can run single spices like coriander, turmeric, and chilli powder on the same line.' }
    ]
  },
  {
    file: 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Frozen Vegetable Processing Plant',
    img: 'frozen-vegetable.jpeg',
    desc: 'Salvin Industries delivers the ultimate Fully Automated Frozen Vegetable Processing Plant. Utilizing state-of-the-art IQF (Individual Quick Freezing) technology, this turnkey line washes, blanches, freezes, and packs peas, corn, and carrots with unmatched freshness.',
    metaDesc: 'Invest in a Fully Automated Frozen Vegetable Processing Plant by Salvin Industries. Discover our IQF freezing tunnels, blanchers, and packaging lines for premium frozen foods.',
    processSteps: [
      { id: 1, title: 'Vegetable Receiving & Washing' },
      { id: 2, title: 'Sorting & Defect Removal' },
      { id: 3, title: 'Precision Cutting & Dicing' },
      { id: 4, title: 'Continuous Steam Blanching' },
      { id: 5, title: 'Ice Water Pre-Cooling' },
      { id: 6, title: 'IQF (Individual Quick Freezing)' },
      { id: 7, title: 'Multi-head Weighing & Cold Packing' }
    ],
    machinery: [
      { name: 'Industrial Flume Washer & Destoner', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Gently washes delicate vegetables like green peas and sweet corn while removing heavy stones and floating debris.' },
      { name: 'High-Capacity Vegetable Dicer', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Precision cutting machinery that produces uniform cubes or slices of carrots, potatoes, and beans, ensuring consistent freezing rates.' },
      { name: 'Continuous Blanching Tunnel', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Utilizes controlled steam or hot water to halt enzymatic activity, ensuring the frozen vegetables retain their bright color and firm texture.' },
      { name: 'Pre-cooling Air & Water Chiller', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Rapidly reduces the temperature of blanched vegetables to 5°C using chilled water and air blasts, drastically reducing the load on the IQF freezer.' },
      { name: 'IQF Fluidized Bed Freezing Tunnel', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Rapidly freezes each vegetable piece individually in a suspended state at -40°C, preventing lump formation and cell wall rupture.' },
      { name: 'Frost-Resistant VFFS Packaging Line', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Automated packaging machinery designed to operate in cold-room environments, accurately weighing and sealing frozen produce into retail bags.' }
    ],
    faqs: [
      { question: 'What exactly is IQF technology and why is it important?', answer: 'IQF stands for Individual Quick Freezing. It uses extreme cold air blasts to freeze each piece of vegetable separately in minutes. This rapid freezing prevents large ice crystals from rupturing cell walls, keeping the vegetable crisp and fresh when thawed.' },
      { question: 'Can this processing plant handle green peas and sweet corn?', answer: 'Yes, this plant is highly optimized for delicate produce like green peas, sweet corn kernels, diced carrots, broccoli florets, and mixed vegetable blends.' },
      { question: 'What is the required ambient temperature for the packaging section?', answer: 'To ensure the frozen vegetables do not begin to thaw or stick together before being sealed, the packaging section is typically installed in a climate-controlled cold room operating at around 4°C to 10°C.' },
      { question: 'Is the blanching time adjustable for different vegetables?', answer: 'Absolutely. The continuous blanching tunnel is controlled via a centralized PLC panel, allowing operators to precisely adjust the conveyor speed and temperature based on the specific vegetable being processed.' },
      { question: 'What capacities are available for the IQF processing line?', answer: 'Salvin Industries offers customizable turnkey IQF lines with freezing capacities ranging from 500 kg/hr up to 5,000 kg/hr, depending on your commercial production requirements.' }
    ]
  }
];

const svgs = [
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /><path d="M7.5 7.5l9 9M7.5 16.5l9-9" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" /><path d="M12 4v10" /><path d="M9 11l3 3 3-3" /></svg>',
  '<svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M12 12l9-5" /><path d="M12 12L3 7" /></svg>'
];

pages.forEach(p => {
  let processJSX = p.processSteps.map((step) => {
    return \`
              <React.Fragment key={step.id}>
                <div className="rcp-process-card">
                  <div className="rcp-process-card__icon">
                    \${step.id === 1 ? svgs[0] : ''}
                    \${step.id === 2 ? svgs[1] : ''}
                    \${step.id === 3 ? svgs[2] : ''}
                    \${step.id === 4 ? svgs[3] : ''}
                    \${step.id === 5 ? svgs[4] : ''}
                    \${step.id === 6 ? svgs[5] : ''}
                    \${step.id === 7 ? svgs[6] : ''}
                  </div>
                  <div className="rcp-process-card__label" style={{ minWidth: '100px' }}>\${step.title}</div>
                </div>
              </React.Fragment>\`
  }).join('\\n');

  // We map the 6 machinery items to 6 placeholder images if they exist, or reuse the same image if we only have one.
  // Since we only have the single main image for the plant, we will reuse it.
  
  const content = \`import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './RedChilliDetailPage.css'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = \${JSON.stringify(p.processSteps, null, 2)}

/* ─── Machinery Used ─── */
const MACHINERY_LIST = \${JSON.stringify(p.machinery, null, 2)}

/* ─── FAQs ─── */
const FAQS = \${JSON.stringify(p.faqs, null, 2)}

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Main Plant' },
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Equipment 1' },
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Equipment 2' },
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Equipment 3' },
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Equipment 4' },
  { src: '/turnkey-brochures/images/\${p.img}', caption: '\${p.title} - Equipment 5' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function \${p.file.replace('.jsx', '')}() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = '\${p.title} | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', '\${p.metaDesc}')
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rcp-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero">
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: \\\`url('/turnkey-brochures/images/\${p.img}')\\\` }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            TURNKEY SOLUTION
          </span>
          <h1 className="rcp-hero__title">\${p.title}</h1>
          <p className="rcp-hero__subtitle">\${p.desc}</p>
          <div className="rcp-hero__actions">
            <a href="#enquiry" className="rcp-btn rcp-btn--primary rcp-btn--lg">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['overview'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete Processing <span className="rcp-accent">Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>
                <strong>Salvin Industries' \${p.title}</strong> is an advanced industrial turnkey solution engineered to extract premium-grade output with unmatched efficiency. Our comprehensive process guarantees a seamless, hygienic operation that maximizes product yield.
              </p>
              <p>
                \${p.desc}
              </p>
              <div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">High Yield</p>
                    <p className="rcp-overview__feature-desc">Maximum extraction</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Hygienic Process</p>
                    <p className="rcp-overview__feature-desc">Food-grade contact parts</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">Perfect Output</p>
                    <p className="rcp-overview__feature-desc">Advanced refining tech</p>
                  </div>
                </div>
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div className="rcp-overview__feature-body">
                    <p className="rcp-overview__feature-title">PLC Control</p>
                    <p className="rcp-overview__feature-desc">Fully automatic operation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcp-overview__image rcp-overview__image--photo">
              <img src={\`/turnkey-brochures/images/\${'${p.img}'}\`} alt="\${p.title}" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['process-flow'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Process Flow</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Workflow</span></h2>
          <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw material into premium-quality packaged product.</p>
          <div className="rcp-process-flow-container">
\${processJSX}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY ═══ */}
      <section className="rcp-section rcp-machinery" id="machinery" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['machinery'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Machinery Used</div>
          <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
          <div className="rcp-machinery__grid">
            {MACHINERY_LIST.map((m, i) => (
              <div key={i} className="rcp-machine-card">
                <div className="rcp-machine-card__image-wrapper">
                  <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div className="rcp-machine-card__content">
                  <h3 className="rcp-machine-card__title">{m.name}</h3>
                  <p className="rcp-machine-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQs ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['faq'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our plant.</p>
          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={\`rcp-faq__item \${isOpen ? 'rcp-faq__item--open' : ''}\`}>
                  <button className="rcp-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)} type="button">
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content"><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="rcp-section rcp-gallery" id="gallery" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['gallery'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-section-badge">Industrial Gallery</div>
          <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
          <div className="rcp-gallery__showcase">
            <div className="rcp-gallery__main">
              <img src={GALLERY_IMAGES[galleryIndex].src} alt={GALLERY_IMAGES[galleryIndex].caption} className="rcp-gallery__main-img" />
              <div className="rcp-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            </div>
            <div className="rcp-gallery__thumbs">
              {GALLERY_IMAGES.map((img, i) => (
                <button key={i} className={\`rcp-gallery__thumb \${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}\`} onClick={() => setGalleryIndex(i)} type="button">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey="${p.file.replace('.jsx', '')}" />

      {/* ═══ ENQUIRY CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible['enquiry'] ? 'rcp-animate--in' : ''}\`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your Plant?</h2>
            <p>Get a customised project proposal with capacity recommendations, plant layout, equipment list, timeline, and investment estimate.</p>
            <div className="rcp-cta__actions">
              <a href={\`https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20${encodeURIComponent(p.title)}.%20Please%20share%20details.\`} target="_blank" rel="noopener noreferrer" className="rcp-btn rcp-btn--primary rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="rcp-cta__phone">Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a></p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="rcp-back-nav">
        <NavLink to="/turnkey-projects" className="rcp-btn rcp-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
\`;
  fs.writeFileSync(path.join(dir, p.file), content);
});

console.log("Successfully generated pages with 7 workflow, 6 machinery, 5 FAQs!");
