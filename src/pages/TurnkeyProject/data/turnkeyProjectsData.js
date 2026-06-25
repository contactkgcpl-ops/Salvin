/**
 * Detailed specifications for Turnkey Projects.
 * Contains detailed data for requested plants and a dynamic fallback generator for the rest.
 */

const CORE_PROJECTS = {
  'beetroot-juice-processing-plant': {
    title: 'Beetroot Juice Processing Plant',
    badge: 'TURNKEY BEETROOT JUICE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution For Cleaning, Washing, Crushing, Juice Extraction, Clarification, Pasteurization and Packaging of Beetroot',
    heroImage: '/turnkey-brochures/images/beetroot-gallery/beetroot_juice_hero_banner.png',
    heroMinHeight: '600px',
    heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'fruit_juice_salvin.pdf',
    stats: {
      capacity: '500–5,000 Ltr',
      stages: '11 Stage',
      retention: 'Extraction Rate'
    },
    overview: {
      title: 'Complete Beetroot Juice Solution',
      p1: 'Salvin Industries\' Beetroot Juice Processing Plant is a turnkey industrial solution engineered for processors seeking maximum juice yield, high OEE, and strict hygiene compliance. The completely integrated processing line handles the entire extraction cycle—from raw beetroot receiving through automated washing, pulping, extraction, pasteurization, and aseptic filling.',
      p2: 'Each system is custom-designed to respect the delicate nutrients, enzymes, and deep red coloring of beetroot. Whether you are manufacturing retail consumer packs, natural color extracts, or bulk beverage ingredients, our processing solutions provide the reliability and efficiency required to scale your production.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design → Manufacture → Install → Commission → Train' },
        { title: 'OEE Optimised', desc: '85%+ Overall Equipment Effectiveness target' },
        { title: 'Global Standards', desc: 'FSSAI, FDA, CE, ISO 22000 compliant designs' }
      ],
      image: '/turnkey-brochures/images/3_beetroot.png',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.jpg',
      features4: [
        { title: 'Maximum Juice Yield', desc: 'High-pressure screw press extraction per batch' },
        { title: 'Nutrient Retention', desc: 'Cold processing preserves vitamins and enzymes' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L closed construction' },
        { title: 'Energy Efficient', desc: 'Heat recovery loops reduce operating costs' }
      ]
    },
    capacities: [
      { capacity: '500 Ltr/Hr', type: 'Small Scale', ideal: 'Startups & Boutique Juice Brands', color: '#f47c20' },
      { capacity: '1,000 Ltr/Hr', type: 'Medium Scale', ideal: 'Regional Juice Distributors', color: '#dc6e19' },
      { capacity: '2,000 Ltr/Hr', type: 'Large Scale', ideal: 'National Processing Plants', color: '#c45a10' },
      { capacity: '5,000 Ltr/Hr', type: 'Industrial Scale', ideal: 'Mass Production & Exports', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Hygiene', desc: 'All contact surfaces are SS304/SS316L stainless steel with CIP (Clean-In-Place) systems for zero-contamination processing.' },
      { title: 'Cold Press Yield', desc: 'Advanced extraction technology ensures maximum juice yield with low temperature operation to preserve nutrients.' },
      { title: 'Dust-Free & Sealed', desc: 'Completely enclosed processing and piping protect the juice from atmospheric contamination and oxidation.' },
      { title: 'Modular Design', desc: 'Scalable modular architecture allows capacity expansion from 500 Ltr/Hr to 5,000 Ltr/Hr without structural rebuilds.' },
      { title: 'PLC Automation', desc: 'Siemens/Allen-Bradley PLC with SCADA HMI provides real-time monitoring, recipe management, and process logging.' },
      { title: 'Nutrient Retention', desc: 'Gentle heating and de-aeration systems maintain natural enzymes, vitamins, and the rich beetroot color.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Beetroot Receiving', desc: 'Incoming raw beetroots are weighed, quality-checked, and logged into the batch tracking system for full traceability.' },
      { id: 2, title: 'Washing', desc: 'Multi-stage rotary washing drums and high-pressure sprayers remove soil, clay, and sand from the beetroot skin.' },
      { id: 3, title: 'Sorting', desc: 'Inspection belts and color sorting rollers identify and reject damaged, under-ripe, or defective beetroots.' },
      { id: 4, title: 'Peeling', desc: 'Steam or abrasive peeling systems efficiently remove outer skin layers with minimal product loss.' },
      { id: 5, title: 'Cutting', desc: 'Precision slicing and dicing machines cut beetroots into uniform sizes to optimize the subsequent juice extraction yield.' },
      { id: 6, title: 'Crushing', desc: 'Industrial crushers disintegrate sliced beetroots into a fine pulp slurry, maximizing cell rupture and juice release.' },
      { id: 7, title: 'Juice Extraction', desc: 'Heavy-duty continuous screw presses or belt presses extract raw juice from the crushed beetroot pulp.' },
      { id: 8, title: 'Filtration', desc: 'Rotary drum vacuum filters or decanter centrifuges clarify raw juice, removing insoluble fibres and sediment.' },
      { id: 9, title: 'Pasteurization', desc: 'Plate heat exchangers pasteurize the clarified juice at precise temperature profiles to ensure safety while preserving nutrients.' },
      { id: 10, title: 'Filling', desc: 'High-speed aseptic filling systems deposit pasteurized juice into glass/PET bottles or liquid carton packaging.' },
      { id: 11, title: 'Packaging', desc: 'Automatic capping, labeling, shrink-wrapping, and carton packing prepare the juice for shipping and cold storage.' }
    ],
    machinery: [
      { name: 'Beetroot Washing Machine', image: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png', desc: 'Heavy-duty rotary drum and spray washer designed to remove soil, mud, and external debris from raw harvested beetroots.' },
      { name: 'Sorting Conveyor', image: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.png', desc: 'Ergonomic conveyor belt with speed control for inspecting and grading beetroots, rejecting damaged or irregular roots.' },
      { name: 'Beetroot Crusher', image: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.png', desc: 'High-speed disintegration mill that crushes whole peeled beetroots into a fine pulp slurry to facilitate extraction.' },
      { name: 'Juice Extractor', image: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.jpg', desc: 'Continuous screw press system designed to extract juice from pulp efficiently under gentle pressure.' },
      { name: 'Filtration System', image: '/turnkey-brochures/images/beetroot-gallery/filtration-system.jpg', desc: 'Clarity filtration or centrifugal separator system that removes solid particulate matter and fibre from beetroot juice.' },
      { name: 'Bottle Filling & Packaging Machine', image: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.jpg', desc: 'Fully automatic rotary hot-fill bottling or aseptic carton packaging line equipped with capping and labeling attachments.' }
    ],
    applications: [
      { title: 'Fruit & Vegetable Juice', desc: 'Production of pure premium beetroot juice, organic blends, and botanical juice formulations.' },
      { title: 'Natural Food Coloring', desc: 'Concentrated beetroot extract supply for bakeries, dairy, confectionery, and dessert processing.' },
      { title: 'Health Drinks & Wellness', desc: 'Nutritional wellness drinks, antioxidant supplement mixes, and detox juice shots.' },
      { title: 'Beverage Industry', desc: 'Raw material juice base supply for commercial beverage and carbonated soft drink brands.' },
      { title: 'Cosmetics & Pharma', desc: 'Pigments and active nutrient extracts for natural cosmetic brands and dietary supplement firms.' },
      { title: 'Dehydrated Concentrates', desc: 'Upstream feed line for spray-dryers producing beetroot powder and instant mixes.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/3_beetroot.png', caption: 'Beetroot Juice Processing Plant Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png', caption: 'Beetroot Washing Operation' },
      { src: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.png', caption: 'Beetroot Sorting & Inspection' },
      { src: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.png', caption: 'Beetroot Crusher Process' },
      { src: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.jpg', caption: 'Beetroot Juice Extraction' },
      { src: '/turnkey-brochures/images/beetroot-gallery/filtration-system.jpg', caption: 'Juice Clarification & Filtration' },
      { src: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.jpg', caption: 'Automated Bottling & Packaging Line' }
    ]
  },
  'turmeric-powder-processing-plant': {
    title: 'Turmeric Powder Processing Plant',
    badge: 'TURNKEY TURMERIC POWDER PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Washing, Boiling, Drying, Cryogenic Grinding, Sieving And Packaging Of Turmeric',
    heroImage: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg',
    stats: {
      capacity: '500 Kg–5 Ton',
      stages: '11 Stage',
      retention: 'Curcumin Preserved'
    },
    overview: {
      title: 'Complete Turmeric Powder Plant',
      p1: 'Salvin Industries\' Turmeric Powder Processing Plant is an advanced turnkey solution engineered to deliver high curcumin retention, food-grade hygiene, and dependable OEE. Our lines are designed to handle everything from raw harvested turmeric roots through curing, drying, grinding, and automated sifting and packaging.',
      p2: 'Each plant is designed with stainless steel contact surfaces and modular, dust-free pulverisation chambers. Our cryogenic grinding options keep processing temperatures low, ensuring the natural color, aroma, and active curcumin values are fully preserved to command export-market premiums.',
      highlights: [
        { title: 'Curcumin Protection', desc: 'Temperature-controlled grinding retains maximum active curcumin content.' },
        { title: 'High Thermal OEE', desc: 'Heat-recovery boiling and drying lines cut fuel consumption by 25%.' },
        { title: 'Aflatoxin-Safe Dryers', desc: 'Enclosed hot-air circulation prevents moisture mold and bacterial growth.' }
      ],
      image: '/turnkey-brochures/images/4_turmeric.png',
      photoImage: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.jpg',
      features4: [
        { title: 'Curcumin Preserved', desc: 'Cryogenic grinding locks in active curcumin value' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L enclosed construction' },
        { title: 'Consistent Powder', desc: 'Uniform particle size and ASTA colour output' },
        { title: 'Energy Efficient', desc: 'Heat recovery drying reduces fuel cost by 25%' }
      ]
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Spices Startups & Farmers', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Spice Cooperatives', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Food Brands', color: '#c45a10' },
      { capacity: '5 Ton/Hr', type: 'Industrial Scale', ideal: 'Bulk Export Operations', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L with automatic CIP connections.' },
      { title: 'Cryogenic Grinding Option', desc: 'Liquid nitrogen cooling system prevents oil loss and preserves bright golden ASTA color.' },
      { title: 'Dust-Free Enclosure', desc: 'Integrated cyclone dust collectors and bag filters maintain a clean, OSHA-compliant environment.' },
      { title: 'PLC Automation', desc: 'Centralized HMI panel logs batch parameters, temperatures, and motor speeds in real time.' },
      { title: 'Energy-Efficient Boiler', desc: 'Highly efficient steam generation reduces boiling time for raw rhizomes.' },
      { title: 'Advanced Sifting', desc: 'Multi-deck rotary sifters isolate fine mesh powder (up to 120 mesh) with zero tailing loss.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Turmeric Receiving', desc: 'Harvested turmeric rhizomes are weighed, graded, and fed into the hopper.' },
      { id: 2, title: 'Washing', desc: 'Rotary drum and high-pressure jet washers remove soil, clay, and sand from root crevices.' },
      { id: 3, title: 'Rhizome Boiling/Curing', desc: 'Steam-jacketed curing vessels soften the starch and gelatinize the curcumin for uniform color.' },
      { id: 4, title: 'Drying', desc: 'Continuous conveyor dryers or tray dryers reduce moisture content down to 8-10% safely.' },
      { id: 5, title: 'Polishing', desc: 'Abrasive polishing drums remove rough outer skin, exposing a clean golden-yellow root.' },
      { id: 6, title: 'Crushing', desc: 'Pre-crusher breakers reduce the dry, polished rhizomes into uniform coarse flakes.' },
      { id: 7, title: 'Cryo-Grinding', desc: 'Pin mills grind turmeric flakes at controlled low temperatures to prevent curcumin charring.' },
      { id: 8, title: 'Rotary Sieving', desc: 'High-speed vibratory screens classify the powder into consistent mesh size bands.' },
      { id: 9, title: 'Metal Detection', desc: 'Inline magnetic separators and metal detectors scan powder for micro-metallic contaminants.' },
      { id: 10, title: 'Aseptic Packaging', desc: 'FFS packaging lines seal the turmeric powder under nitrogen-flushed conditions.' },
      { id: 11, title: 'Batch Storage', desc: 'Finished pouches or bags are stored in dry, moisture-controlled warehouses.' }
    ],
    machinery: [
      { name: 'Drum Washing System', image: '/turnkey-brochures/images/turmeric-gallery/drum_washing_system.jpg', desc: 'High-capacity rotary drum washer with multi-stage high-pressure jet nozzles.' },
      { name: 'Steam Curing Kettle', image: '/turnkey-brochures/images/turmeric-gallery/steam_curing_kettle.jpg', desc: 'Stainless steel steam-jacketed curing vessel with automatic tilting discharge.' },
      { name: 'Continuous Belt Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg', desc: 'Multi-layer continuous belt dryer with temperature control and air recirculators.' },
      { name: 'Impact Crusher', image: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.jpg', desc: 'Heavy-duty impact crusher that breaks cured turmeric roots into coarse granules.' },
      { name: 'Micro Pulverizer', image: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.jpg', desc: 'High-speed fine grinding pin mill with ambient air cooling or liquid nitrogen cooling.' },
      { name: 'FFS Packaging Machine', image: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.jpg', desc: 'Vertical form-fill-seal packing line equipped with nitrogen flush and auger dosing.' }
    ],
    applications: [
      { title: 'Spice Powder Brands', desc: 'Consumer retail and institutional spice powder supplies.' },
      { title: 'Pharma & Supplement', desc: 'Curcumin extraction lines for health and supplement capsules.' },
      { title: 'Food Coloring Agents', desc: 'Natural golden dye formulation for cheese, snacks, and bakery items.' },
      { title: 'Cosmetics Industry', desc: 'Traditional skin care formulations and cosmetic face packs.' },
      { title: 'Ayurvedic Medicine', desc: 'Traditional herbal powders, capsules, and therapeutic preparations.' },
      { title: 'Spices Export Business', desc: 'High-grade bulk packaging meeting international sanitary regulations.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/4_turmeric.png', caption: 'Turmeric Processing Plant Layout' },
      { src: '/turnkey-brochures/images/turmeric-gallery/drum_washing_system.jpg', caption: 'Drum Washing System for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/steam_curing_kettle.jpg', caption: 'Steam Curing Kettle for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg', caption: 'Continuous Belt Dryer for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.jpg', caption: 'Impact Crusher — Turmeric Crushing Station' },
      { src: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.jpg', caption: 'Micro Pulverizer — Fine Grinding Unit' },
      { src: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.jpg', caption: 'FFS Packaging Machine — Turmeric Powder Packing' }
    ]
  },
  'honey-processing-bottling-plant': {
    title: 'Honey Processing & Bottling Plant',
    badge: 'TURNKEY HONEY PROCESSING SOLUTION',
    subtitle: 'Complete Processing, Filtration, Moisture Extraction And Packaging Lines For Honey Products',
    heroImage: '/turnkey-brochures/images/honey-gallery/honey_hero.png',
    pdfFile: 'honey_processing.pdf',
    stats: {
      capacity: '200 Kg–3 Ton',
      stages: '10 Stage',
      retention: 'Viscosity Preserved'
    },
    overview: {
      title: 'Premium Honey Processing',
      p1: 'Salvin Industries\' Honey Processing & Bottling Plant is an advanced turnkey line built to warm, clarify, de-crystallize, and package natural honey. Our thermal systems are designed to reduce honey moisture levels without destroying essential enzymes or darkening the honey\'s natural color.',
      p2: 'From liquification and primary filtration to vacuum evaporation and aseptic retail packaging, our plants ensure a smooth, crystal-free product with absolute hygiene. Contact parts are constructed from food-grade SS304/SS316L, fully compatible with automated clean-in-place operations.',
      highlights: [
        { title: 'Moisture Control', desc: 'Gentle vacuum concentration reduces water percentage to target levels.' },
        { title: 'HMF Optimization', desc: 'Careful temperature profiling prevents Hydroxymethylfurfural (HMF) spikes.' },
        { title: 'Precision Bottling', desc: 'Drip-free rotary filling ensures consistent bottle volumes.' }
      ],
      image: '/turnkey-brochures/images/5_honey.png',
      photoImage: '/turnkey-brochures/images/honey-gallery/piston_filler.png',
      features4: [
        { title: 'Viscosity Preserved', desc: 'Gentle warming retains natural honey texture' },
        { title: 'HMF Controlled', desc: 'Temperature profiling prevents enzyme degradation' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L contact surfaces' },
        { title: 'Precision Filling', desc: 'Drip-free rotary dosing into jars and bottles' }
      ]
    },
    capacities: [
      { capacity: '200 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Apiaries & Cooperatives', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Honey Packers', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Retail Supply Lines', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Export Processing Hubs', color: '#a34a0d' }
    ],
    features: [
      { title: 'SS304/SS316L Standards', desc: 'Complete stainless steel sanitary construction with zero dead legs.' },
      { title: 'Vacuum Moisture Reducer', desc: 'Low-temperature vacuum concentration protects fragile sugars and enzymes.' },
      { title: 'Multi-stage Clarification', desc: 'Removes wax, bee parts, and crystallised pollen without removing healthy micro-particles.' },
      { title: 'PLC Temperature Loggers', desc: 'Continuous sensors ensure thermal inputs never overheat sensitive batches.' },
      { title: 'Drip-Free Dosing', desc: 'Piston filling nozzles ensure absolute volumetric accuracy with zero bottle waste.' },
      { title: 'De-crystallizing Warmers', desc: 'Insulated hot-water chambers melt bulk raw honey drums safely.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Honey Melting', desc: 'Bulk raw honey drums are heated in warm water chambers to liquefy crystals.' },
      { id: 2, title: 'Pre-heating', desc: 'Honey flows through plate heaters to reduce viscosity for filtration.' },
      { id: 3, title: 'Coarse Filtration', desc: 'Removes large debris, wax pieces, and impurities from the honey stream.' },
      { id: 4, title: 'Micro Filtration', desc: 'Clarifies honey by removing tiny suspended particles under pressure.' },
      { id: 5, title: 'Vacuum Concentration', desc: 'Evaporates excess moisture at low temperatures (45-50C) under vacuum.' },
      { id: 6, title: 'Cooling & Settling', desc: 'Honey is cooled rapidly and settled in insulated holding vessels.' },
      { id: 7, title: 'Homogenization', desc: 'Blends multiple batches to ensure uniform color, texture, and moisture.' },
      { id: 8, title: 'Automatic Filling', desc: 'Volumetric rotary filling line deposits honey into jars or squeeze bottles.' },
      { id: 9, title: 'Capping & Sealing', desc: 'Automatic capping machine applies lids, followed by induction foil sealing.' },
      { id: 10, title: 'Labeling & Box packing', desc: 'Self-adhesive labels are applied, and jars are cartooned for shipping.' }
    ],
    machinery: [
      { name: 'Drum Liquefaction Chamber', image: '/turnkey-brochures/images/honey-gallery/drum_liquefaction.png', desc: 'Insulated hot-water circulation chamber designed to melt raw crystallised honey.' },
      { name: 'Plate Pre-Heater', image: '/turnkey-brochures/images/honey-gallery/plate_preheater.png', desc: 'SS316L heat exchanger to lower viscosity before fine filtration.' },
      { name: 'Duplex Fine Filter', image: '/turnkey-brochures/images/honey-gallery/duplex_filter.png', desc: 'Dual stainless steel filters operating in parallel for continuous wax separation.' },
      { name: 'Vacuum Moisture Reducer', image: '/turnkey-brochures/images/honey-gallery/vacuum_reducer.png', desc: 'Low-temperature vacuum evaporator to reduce moisture content below 18%.' },
      { name: 'Piston Bottle Filler', image: '/turnkey-brochures/images/honey-gallery/piston_filler.png', desc: 'Automatic piston filling machine with drip-free nozzles for sticky liquids.' },
      { name: 'Labeling Conveyor Line', image: '/turnkey-brochures/images/honey-gallery/labeling_line.png', desc: 'High-speed flat conveyor belt with automatic side-label applicator.' }
    ],
    applications: [
      { title: 'Retail Honey Brands', desc: 'Pure multi-flora, mono-flora, and organic consumer retail packaging.' },
      { title: 'Pharma Excipients', desc: 'Medicinal syrups and herbal cough formulations base ingredients.' },
      { title: 'Confectionery Dosing', desc: 'Natural sweetener inputs for baking, energy bars, and cereal lines.' },
      { title: 'Cosmetic Ingredients', desc: 'Hydrating soaps, face washes, and organic skin care creams.' },
      { title: 'Flavored Blend Infusions', desc: 'Ginger-infused, ginger-honey, and herbal honey product lines.' },
      { title: 'Bulk Exporters', desc: 'Industrial steel drum packing for overseas confectionery bulk orders.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/5_honey.png', caption: 'Honey Processing & Bottling Plant Layout' },
      { src: '/turnkey-brochures/images/honey-gallery/drum_liquefaction.png', caption: 'Drum Liquefaction Chamber' },
      { src: '/turnkey-brochures/images/honey-gallery/plate_preheater.png', caption: 'Plate Pre-Heater Unit' },
      { src: '/turnkey-brochures/images/honey-gallery/duplex_filter.png', caption: 'Duplex Fine Filtration Skids' },
      { src: '/turnkey-brochures/images/honey-gallery/vacuum_reducer.png', caption: 'Vacuum Moisture Reducer' },
      { src: '/turnkey-brochures/images/honey-gallery/piston_filler.png', caption: 'Piston Bottle Filler Line' },
      { src: '/turnkey-brochures/images/honey-gallery/labeling_line.png', caption: 'Labeling & Packing Conveyor' }
    ]
  },
  'dates-processing-packing-plant': {
    title: 'Dates Processing & Packing Plant',
    badge: 'TURNKEY DATES PROCESSING SOLUTION',
    subtitle: 'Industrial Lines For Cleaning, Washing, Pitting, De-Seeding, Drying, Grading And Vacuum Packing of Dates',
    heroImage: '/turnkey-brochures/images/dates-gallery/dates_hero.png',
    stats: {
      capacity: '500 Kg–4 Ton',
      stages: '11 Stage',
      retention: 'Hygiene Certified'
    },
    overview: {
      title: 'Complete Date Processing Line',
      p1: 'Salvin Industries\' Dates Processing & Packing Plant is a full-scale industrial turnkey package for post-harvest dates handling. Our custom-engineered lines sort, wash, dehydrate, pit, polish, and package fresh dates with maximum efficiency and gentle crop handling.',
      p2: 'Whether you are producing table dates, date paste, or dates stuffed with nuts, our machinery features SS304/SS316L food-grade hygiene and automated processing speeds. Central PLC controllers enable seamless speed scaling on inspection conveyors and sorting arrays.',
      highlights: [
        { title: 'Gentle Agitation', desc: 'Air washers clean skin without bruising delicate dates.' },
        { title: 'Automatic Pitting', desc: 'High-speed mechanical pitting rollers extract seeds without tearing flesh.' },
        { title: 'Vacuum Freshness', desc: 'Packaging lines lock in texture and moisture for shelf-life extension.' }
      ],
      image: '/turnkey-brochures/images/6_dates.png',
      photoImage: '/turnkey-brochures/images/dates-gallery/pitting_machine.png',
      features4: [
        { title: 'Gentle Handling', desc: 'Air bubble washers protect delicate date skins' },
        { title: 'Automatic Pitting', desc: 'High-speed needle pitters extract seeds cleanly' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L line construction' },
        { title: 'Vacuum Freshness', desc: 'Sealed packaging locks in moisture and texture' }
      ]
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Cooperative date packaging houses', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Date Farms', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Brand Exporters', color: '#c45a10' },
      { capacity: '4 Ton/Hr', type: 'Industrial Scale', ideal: 'Large scale Middle East processing units', color: '#a34a0d' }
    ],
    features: [
      { title: 'Air-Bubbling Washers', desc: 'Removes sand and pesticide residue without damaging date skins.' },
      { title: 'Multi-Deck Sorters', desc: 'Classifies dates into clean grade streams based on diameter and moisture.' },
      { title: 'High-Speed De-seeding', desc: 'Needle or roller pitters separate seed stones with clean yield.' },
      { title: 'Controllable Conveyors', desc: 'VFD controllers coordinate grading conveyor speeds to line workloads.' },
      { title: 'Vacuum Chamber Sealers', desc: 'FFS and tray-packers maintain long ambient shelf life without preservatives.' },
      { title: 'Polishing Drums', desc: 'Brushing elements with natural paraffin oil spray glaze dates for premium shine.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Dates Receiving', desc: 'Crates are received, logged, and dumped onto feeding elevators.' },
      { id: 2, title: 'Dust Separation', desc: 'Blower vacuums extract dust, dried leaves, and lightweight soil debris.' },
      { id: 3, title: 'Air bubble Washing', desc: 'Dates undergo gentle turbulence wash in water with high-pressure air injectors.' },
      { id: 4, title: 'Secondary Showering', desc: 'Clean fresh-water rinse nozzles spray dates to wash off detergent traces.' },
      { id: 5, title: 'Controlled Drying', desc: 'Dehydrators reduce surface wash moisture before polishing or pitting.' },
      { id: 6, title: 'Sorting & Grading', desc: 'Vibratory screens and belt inspectors grade dates into distinct sizes.' },
      { id: 7, title: 'Paraffin Polishing', desc: 'Rotary brushes apply micro-sprayed food-grade oil for shine.' },
      { id: 8, title: 'Automatic Pitting', desc: 'Needle pitters push out the date stones, keeping bulb flesh whole.' },
      { id: 9, title: 'Stuffed Dates Filling', desc: 'Optionally inserts nuts or cream fills into pitted date cavities.' },
      { id: 10, title: 'Vacuum Packaging', desc: 'Thermal sealing under vacuum maintains date freshness and stickiness.' },
      { id: 11, title: 'Carton boxing', desc: 'Finished packs are stacked in shipping cases and logged for distribution.' }
    ],
    machinery: [
      { name: 'Bubble Washing System', image: '/turnkey-brochures/images/dates-gallery/bubble_washer.png', desc: 'Food-grade washing bath with bottom air injection manifolds.' },
      { name: 'Polishing & Brushing Drum', image: '/turnkey-brochures/images/dates-gallery/polishing_drum.png', desc: 'Rotating drum lined with soft brushes and oil spray nozzles.' },
      { name: 'Dates Pitting Machine', image: '/turnkey-brochures/images/dates-gallery/pitting_machine.png', desc: 'Piston-driven needle de-seeding system with separated seed chute.' },
      { name: 'Dates Drying Conveyor', image: '/turnkey-brochures/images/dates-gallery/drying_conveyor.png', desc: 'Continuous hot-air conveyor dryer designed to dry dates uniformly.' },
      { name: 'Vacuum Sealing Line', image: '/turnkey-brochures/images/dates-gallery/vacuum_sealer.png', desc: 'Industrial multi-chamber vacuum sealer for plastic pouches and trays.' },
      { name: 'Grading Conveyor Belt', image: '/turnkey-brochures/images/dates-gallery/grading_conveyor.png', desc: 'Ergonomic conveyor belt with collection channels for sorted grades.' }
    ],
    applications: [
      { title: 'Premium Retail Dates', desc: 'Cartons, plastic trays, and vacuum pouches for grocery retail.' },
      { title: 'Industrial Date Paste', desc: 'Milled date pulp supply for energy bars, baking, and syrups.' },
      { title: 'Date Syrup Lines', desc: 'Clear sweet syrups for healthy sugar-alternative manufacturing.' },
      { title: 'Dates Chocolate Enrobing', desc: 'Coated date confectioneries stuffed with almonds or peanut butter.' },
      { title: 'Date Sugar Processing', desc: 'Dehydrated dates ground into fine powder for wellness baking.' },
      { title: 'Export Trade Supply', desc: 'Bulk date packs boxed for Middle East and global wholesale.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/6_dates.png', caption: 'Dates Processing Plant Layout' },
      { src: '/turnkey-brochures/images/dates-gallery/bubble_washer.png', caption: 'Bubble Washing System' },
      { src: '/turnkey-brochures/images/dates-gallery/polishing_drum.png', caption: 'Polishing & Brushing Drum' },
      { src: '/turnkey-brochures/images/dates-gallery/pitting_machine.png', caption: 'Dates Pitting Machine' },
      { src: '/turnkey-brochures/images/dates-gallery/drying_conveyor.png', caption: 'Dates Drying Conveyor' },
      { src: '/turnkey-brochures/images/dates-gallery/vacuum_sealer.png', caption: 'Vacuum Sealing Line' },
      { src: '/turnkey-brochures/images/dates-gallery/grading_conveyor.png', caption: 'Grading Conveyor Belt' }
    ]
  },
  'petroleum-jelly-manufacturing-plant': {
    title: 'Petroleum Jelly Manufacturing Plant',
    badge: 'TURNKEY CHEMICAL & PHARMA SOLUTION',
    subtitle: 'Melting, Blending, Micro-filtration And Jar Filling Lines For Cosmetic and Pharmaceutical Grade Petroleum Jelly',
    heroImage: '/turnkey-brochures/images/petrojelly-gallery/petrojelly_hero.png',
    pdfFile: 'petrolium_jelly_plant.pdf',
    stats: {
      capacity: '500 Ltr–3,000 Ltr',
      stages: '10 Stage',
      retention: 'Viscosity Stable'
    },
    overview: {
      title: 'Premium Petroleum Jelly Plant',
      p1: 'Salvin Industries\' Petroleum Jelly Manufacturing Plant is a specialized processing line designed to blend waxes, mineral oils, and petrolatum under precise temperature controls. Engineered for pharmaceutical and cosmetic ointment production, our lines guarantee uniform viscosity, zero aeration, and high sanitary compliance.',
      p2: 'From wax melters and jacketed homogenization tanks to fine filtration and cooling tunnels, our systems maintain product consistency. Fully insulated lines prevent wax crystallization during transfer, while central SCADA control panels trace batch heating curves for GMP certification.',
      highlights: [
        { title: 'GMP Compliant', desc: 'Meets FDA ointment manufacturing regulations.' },
        { title: 'Jacketed Piping', desc: 'Steam-heated transfer lines prevent material solidifying.' },
        { title: 'Vacuum Deaeration', desc: 'Removes air bubbles during blending to yield smooth jelly texture.' }
      ],
      image: '/turnkey-brochures/images/7_petrolium_jelly.png',
      photoImage: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.png',
      features4: [
        { title: 'GMP Compliant', desc: 'Meets FDA and pharmaceutical manufacturing norms' },
        { title: 'Vacuum Deaeration', desc: 'Air-free blending yields perfectly smooth jelly' },
        { title: 'Jacketed Piping', desc: 'Heated transfer lines prevent wax solidification' },
        { title: 'Precision Filling', desc: 'Anti-drip hot nozzles fill jars at exact volumes' }
      ]
    },
    capacities: [
      { capacity: '500 Ltr/Batch', type: 'Pilot Scale', ideal: 'Boutique Cosmetic Brands', color: '#f47c20' },
      { capacity: '1,000 Ltr/Batch', type: 'Medium Scale', ideal: 'Regional Ointment Manufacturers', color: '#dc6e19' },
      { capacity: '2,000 Ltr/Batch', type: 'Large Scale', ideal: 'National Pharma Plants', color: '#c45a10' },
      { capacity: '3,000 Ltr/Batch', type: 'Industrial Scale', ideal: 'Bulk OEM Cosmetic Exporters', color: '#a34a0d' }
    ],
    features: [
      { title: 'SS316L Contact Parts', desc: 'Ensures zero contamination and high chemical resistance.' },
      { title: 'Contra-Rotating Agitator', desc: 'Teflon scrapers sweep jacket walls for optimal heat transfer.' },
      { title: 'Fine Cartridge Filters', desc: 'Removes particulate micro-impurities from molten base.' },
      { title: 'Hot Filling System', desc: 'Maintains jelly in liquid state for volumetric fill nozzle accuracy.' },
      { title: 'PLC Batch Tracking', desc: 'Saves recipe heating, cooling, and shear profiles automatically.' },
      { title: 'Integrated Chilling Tunnel', desc: 'Rapid cooling sets jelly crystallization structure without cracks.' }
    ],
    processSteps: [
      { id: 1, title: 'Paraffin Wax Melting', desc: 'Bulk raw solid waxes are loaded and melted in jacketed melter tanks.' },
      { id: 2, title: 'Mineral Oil Dosing', desc: 'Liquid mineral oils are pumped into the mixer through flow meters.' },
      { id: 3, title: 'Homogenization blending', desc: 'Blends melted waxes and oils under vacuum with high-shear emulsifiers.' },
      { id: 4, title: 'Vacuum Deaeration', desc: 'Vacuum suction removes air pockets to prevent oxidation and product voids.' },
      { id: 5, title: 'Micro Filtration', desc: 'Molten blend passes through heated cartridge filters to extract impurities.' },
      { id: 6, title: 'Hot Liquid Transfer', desc: 'Pre-heated jacketed pipelines move liquid jelly to the packaging buffer.' },
      { id: 7, title: 'Precision Jar Filling', desc: 'Rotary filling nozzles deposit molten jelly into jars or tins.' },
      { id: 8, title: 'Cooling Tunnel Settling', desc: 'Filled jars pass through cold air tunnels to solidify the jelly.' },
      { id: 9, title: 'Induction Foil Sealing', desc: 'Seals jar mouths with foil laminate to ensure leakproof storage.' },
      { id: 10, title: 'Capping & Labeling', desc: 'Automatic capping and labelers apply lids and decals to finished jars.' }
    ],
    machinery: [
      { name: 'Wax Melting Vessel', image: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.png', desc: 'Steam-jacketed vessel with slow agitator for melting paraffin block bases.' },
      { name: 'Vacuum Emulsifier Tank', image: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.png', desc: 'High-shear homogenizing mixer with vacuum pump and contra-rotation scrapers.' },
      { name: 'Jacketed Filtration Skid', image: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.png', desc: 'Heated cartridge filter housing to clarify raw molten petroleum jelly.' },
      { name: 'Molten Jelly Filler', image: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.png', desc: 'Heat-traced volumetric dosing machine with anti-drip filling nozzles.' },
      { name: 'Cooling Conveyor Tunnel', image: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.png', desc: 'Multi-pass insulated tunnel circulating chilled air for jelly setting.' },
      { name: 'Induction Bottle Sealer', image: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.png', desc: 'Automatic electromagnetic induction sealer applying lids to jars.' }
    ],
    applications: [
      { title: 'Cosmetic Skin Care', desc: 'Retail personal care skin protectants, lip balms, and baby creams.' },
      { title: 'Pharmaceutical Ointments', desc: 'Base carrier for active medical ointment formulations and healing salves.' },
      { title: 'Hair Styling Waxes', desc: 'Pomades, solid hair dressing creams, and cosmetic styling gels.' },
      { title: 'Leather Softeners', desc: 'Industrial leather waterproofing conditioners and shoe waxes.' },
      { title: 'Corrosion Inhibitors', desc: 'Protective metal coating jellies used in military and maritime packing.' },
      { title: 'Veterinary Lubricants', desc: 'Animal skin care protectants and dairy teat ointments.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/7_petrolium_jelly.png', caption: 'Petroleum Jelly Plant Layout' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.png', caption: 'Wax Melting Vessel' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.png', caption: 'Vacuum Emulsifier Tank' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.png', caption: 'Jacketed Filtration Skid' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.png', caption: 'Molten Jelly Filler' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.png', caption: 'Cooling Conveyor Tunnel' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.png', caption: 'Induction Bottle Sealer' }
    ]
  },
  'jackfruit-canning-retort-line': {
    title: 'Jackfruit Canning & Retort Line',
    badge: 'TURNKEY FRUIT CANNING SOLUTION',
    subtitle: 'Peeling, Slicing, Syrup Staging, Can Filling, Seaming And Retort Sterilization Lines For Jackfruit',
    heroImage: '/turnkey-brochures/images/jackfruit-gallery/jackfruit_canning_hero_banner.png',
    heroMinHeight: '600px',
    heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'jecked_fruit_canned_line.pdf',
    stats: {
      capacity: '500 Kg–3 Ton',
      stages: '11 Stage',
      retention: 'Shelf-Life Extended'
    },
    overview: {
      title: 'Complete Jackfruit Canning',
      p1: 'Salvin Industries\' Jackfruit Canning & Retort Line is a heavy-duty turnkey plant designed for processing tropical jackfruit bulbs. From fruit prep and seed de-seeding to automated blanching, syrup dosing, vacuum can seaming, and retort sterilization, our line provides a complete packaging path.',
      p2: 'Jackfruit processing requires specialized handling due to sticky latex and fragile bulb textures. Our custom washers, mechanical blanchers, and pressure autoclaves handle these challenges without losing crop structure. All machinery complies with international FDA retort guidelines.',
      highlights: [
        { title: 'Hermetic Seaming', desc: 'High-speed can seamers ensure absolute seal integrity.' },
        { title: 'Retort Sterilization', desc: 'Overpressure autoclaves achieve full sterility for ambient storage.' },
        { title: 'Syrup Dosing', desc: 'Precise syrup dispensers maintain consistent Brix ratios.' }
      ],
      image: '/turnkey-brochures/images/8_jackfruit.png',
      photoImage: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.png',
      features4: [
        { title: 'Hermetic Seaming', desc: 'Double-seam can lids ensure absolute seal integrity' },
        { title: 'Retort Sterilized', desc: 'Autoclave sterilization for ambient shelf storage' },
        { title: 'Hygienic Process', desc: 'FDA retort guidelines compliant SS construction' },
        { title: 'Brix Controlled', desc: 'Precision syrup dosing at consistent concentration' }
      ]
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Fruit Processors', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Cooperative Cannery Plants', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Export Canneries', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Fruit Processing Hubs', color: '#a34a0d' }
    ],
    features: [
      { title: 'Stainless Steel Sanitization', desc: 'Built completely with SS304/SS316L for fruit acid resistance.' },
      { title: 'Continuous Blancher', desc: 'Softens jackfruit fibers and deactivates coloring enzymes.' },
      { title: 'Vacuum Can Seaming', desc: 'Extracts oxygen before lid double-seaming to preserve taste.' },
      { title: 'Autoclave Retort Sterilizer', desc: 'PLC-controlled steam heating curves ensure commercial sterility.' },
      { title: 'Sticky Latex Spray Wash', desc: 'High-pressure wash eliminates jackfruit sap from bulbs.' },
      { title: 'Syrup Staging Vessels', desc: 'Heated mixing tanks for preparing light/heavy sugar syrup or brine.' }
    ],
    processSteps: [
      { id: 1, title: 'Jackfruit Receiving', desc: 'Whole harvested jackfruits are washed and fed into prep tables.' },
      { id: 2, title: 'Bulb Separation', desc: 'Manual skinning and seed separation isolate clean edible bulbs.' },
      { id: 3, title: 'Latex Spray Wash', desc: 'High-velocity water jets rinse off sticky latex and sap residues.' },
      { id: 4, title: 'Precision Blanching', desc: 'Hot-water blanching deactivates enzymes and fixes natural color.' },
      { id: 5, title: 'Can Feeding & Sterilization', desc: 'Empty tin cans are washed and steam-sterilized on conveyor lines.' },
      { id: 6, title: 'Volumetric Can Filling', desc: 'Fills jackfruit bulbs into cans, followed by syrup/brine dosing.' },
      { id: 7, title: 'Air Exhausting', desc: 'Steam exhausting tunnels extract trapped air from filled cans.' },
      { id: 8, title: 'Double Seaming', desc: 'Automatic can seamer double-seams lids to create a hermetic seal.' },
      { id: 9, title: 'Retort Sterilization', desc: 'Sealed cans undergo high-pressure steam sterilization in autoclave chambers.' },
      { id: 10, title: 'Can Cooling & Drying', desc: 'Autoclaves rapidly cool cans, followed by air blower drying.' },
      { id: 11, title: 'Labeling & Box packing', desc: 'Self-adhesive labels are applied, and cans are packed into shipping boxes.' }
    ],
    machinery: [
      { name: 'Continuous Belt Blancher', image: '/turnkey-brochures/images/jackfruit-gallery/belt_blancher.png', desc: 'Hot-water blanching chamber with VFD mesh conveyor belt.' },
      { name: 'Syrup Prep Vessel', image: '/turnkey-brochures/images/jackfruit-gallery/syrup_vessel.png', desc: 'Steam-jacketed sugar dissolution tank with high-speed agitator.' },
      { name: 'Can Rotary Filler', image: '/turnkey-brochures/images/jackfruit-gallery/can_filler.png', desc: 'Sanitary volumetric bulb and syrup filler for standard tin cans.' },
      { name: 'Automatic Can Seamer', image: '/turnkey-brochures/images/jackfruit-gallery/can_seamer.png', desc: 'Heavy-duty can seamer applying double-seam vacuum lids.' },
      { name: 'Retort Autoclave Sterilizer', image: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.png', desc: 'Horizontal steam autoclave sterilizer with PLC record loggers.' },
      { name: 'Latex Spray Washer', image: '/turnkey-brochures/images/jackfruit-gallery/latex_washer.png', desc: 'Conveyor wash cabin with high-pressure fan sprayers.' }
    ],
    applications: [
      { title: 'Canned Sweet Jackfruit', desc: 'Sweet canned jackfruit bulbs in heavy sugar syrup for dessert lines.' },
      { title: 'Canned Vegan Meat', desc: 'Young raw green jackfruit in brine, popular as a vegan meat alternative.' },
      { title: 'Dehydrated bulb lines', desc: 'Blanched feedstock supply for vacuum frying banana/jackfruit chips lines.' },
      { title: 'Bulk Purée Stock', desc: 'Aseptic bulk purée containers for dairy and ice cream ingredient houses.' },
      { title: 'Frozen bulb supplies', desc: 'Washed and pitted bulbs packed for commercial frozen food sections.' },
      { title: 'Export Retort Pouches', desc: 'Sterilized retort flexible pouch packaging for export grocery stores.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/8_jackfruit.png', caption: 'Jackfruit Canning & Retort Plant Layout' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/belt_blancher.png', caption: 'Continuous Belt Blancher' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/syrup_vessel.png', caption: 'Syrup Prep Vessel' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/can_filler.png', caption: 'Can Rotary Filler' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/can_seamer.png', caption: 'Automatic Can Seamer' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.png', caption: 'Retort Autoclave Sterilizer' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/latex_washer.png', caption: 'Latex Spray Washer' }
    ]
  },
  'mayonnaise-processing-plant': {
    title: 'Mayonnaise Processing Plant',
    badge: 'TURNKEY MAYONNAISE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solutions for Industrial Mayonnaise Manufacturing, Processing & Packaging',
    heroImage: '/turnkey-brochures/images/mayonnaise_card.jpg',
    pdfFile: 'mayonnaise.pdf',
    stats: {
      capacity: '500 Ltr–3,000 Ltr',
      stages: '7 Stage',
      retention: 'Consistent Emulsion'
    },
    overview: {
      title: 'Complete Mayonnaise Processing Plant',
      p1: 'High capacity production with hygienic stainless steel design and PLC based automation.',
      p2: 'Ensures consistent emulsion quality, reduced production losses, and food-grade processing standards.',
      highlights: [],
      image: '/turnkey-brochures/images/mayonnaise_card.jpg',
      photoImage: '/turnkey-brochures/images/mayonnaise_card.jpg',
      features4: []
    },
    capacities: [],
    features: [],
    processSteps: [],
    machinery: [],
    applications: [],
    gallery: []
  },
  'pasta-noodles-production-plant': {
    title: 'Pasta & Noodles Production Plant',
    badge: 'TURNKEY EXTENSION & DRYING SOLUTION',
    subtitle: 'Flour Sifting, Vacuum Mixing, Extrusion, Tunnel Drying And Flow Packaging Lines For Pasta And Noodles',
    pdfFile: 'noodles_pasta_making_plant.pdf',
    stats: {
      capacity: '300 Kg–2 Ton',
      stages: '10 Stage',
      retention: 'Gluten Structure Stable'
    },
    overview: {
      title: 'Premium Pasta & Noodle Plant',
      p1: 'Salvin Industries\' Pasta & Noodles Production Plant is a fully integrated turnkey solution for producing high-quality extruded pasta shapes (macaroni, penne, fusilli) and long noodles. Our lines combine raw material preparation, vacuum extrusion, low-temperature drying, and flow packaging.',
      p2: 'Extrusion quality depends on uniform hydration and temperature control. Our lines use vacuum mixers to eliminate air bubbles and jacketed extruder barrels with cooling channels to prevent starch cook-off. This guarantees excellent bite texture (al dente) and cooking stability.',
      highlights: [
        { title: 'Vacuum Extrusion', desc: 'Removes micro-air bubbles to prevent pasta cracking during drying.' },
        { title: 'Multi-stage Dryers', desc: 'Convective tunnel dryers reduce moisture to 12% without stress fractures.' },
        { title: 'Die Adaptability', desc: 'Quick-change bronze or teflon dies support multiple pasta shapes.' }
      ],
      image: '/turnkey-brochures/images/9_pasta_making.png',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png',
      features4: [
        { title: 'Vacuum Extrusion', desc: 'Air-free dough prevents cracking during tunnel drying' },
        { title: 'Die Adaptability', desc: 'Quick-change dies support multiple pasta shapes' },
        { title: 'Consistent Texture', desc: 'Uniform al dente bite and cooking stability' },
        { title: 'Energy Efficient', desc: 'Low-temperature dryers reduce power consumption' }
      ]
    },
    capacities: [
      { capacity: '300 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Gourmet Pasta Brands', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Food Processors', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Food Brands & Co-Packers', color: '#c45a10' },
      { capacity: '2 Ton/Hr', type: 'Industrial Scale', ideal: 'High-Volume Pasta Mills', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L for long life and hygiene.' },
      { title: 'Vacuum Mixing Chamber', desc: 'Prevents oxidation and bubbles to improve color and gluten matrix.' },
      { title: 'Bronze or Teflon Dies', desc: 'Bronze dies yield rough texture for sauce cling; Teflon dies yield smooth surfaces.' },
      { title: 'Low-Temperature Dryer', desc: 'Controlled convective tunnel drying prevents surface sealing and cracking.' },
      { title: 'Automatic Length Cutter', desc: 'Rotary knives slice pasta shapes or long noodles to precise dimensions.' },
      { title: 'Flow Packaging Line', desc: 'Multi-head weighers pack finished dry products into flow-wrapped pouches.' }
    ],
    processSteps: [
      { id: 1, title: 'Flour Sifting', desc: 'Semolina or wheat flour is sieved to remove lumps and impurities.' },
      { id: 2, title: 'Water/Ingredient Dosing', desc: 'Precise volumetric pumps dose water and liquid eggs into the mixer.' },
      { id: 3, title: 'Vacuum Dough Mixing', desc: 'Ingredients are blended under vacuum to form a uniform crumbly dough.' },
      { id: 4, title: 'Extrusion & Shaping', desc: 'High-pressure augers push dough through custom-shaped dies.' },
      { id: 5, title: 'Rotary Cutting', desc: 'High-speed blades cut extruded strands to desired lengths.' },
      { id: 6, title: 'Pre-drying (Shaker)', desc: 'Vibratory shaker dryer quickly removes surface moisture to prevent sticking.' },
      { id: 7, title: 'Main Tunnel Drying', desc: 'Convective drying loops gently reduce pasta moisture to 12.5%.' },
      { id: 8, title: 'Cooling & Tempering', desc: 'Stabilizes pasta temperature to room levels to prevent stress cracks.' },
      { id: 9, title: 'Multi-Head Weighing', desc: 'Fills package targets accurately using high-speed combination scales.' },
      { id: 10, title: 'Flow Wrapping', desc: 'Wraps and heat-seals finished pasta in retail-grade film bags.' }
    ],
    machinery: [
      { name: 'Flour Sifter Conveyor', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Vibratory flour sifting hopper with screw elevator loader.' },
      { name: 'Vacuum Extruder Press', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'Sanitary extruder with cooled barrel and quick-change dies.' },
      { name: 'Vibratory Pre-Dryer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Shaking tray pre-dryer utilizing hot air blast nozzles.' },
      { name: 'Multi-Pass Tunnel Dryer', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'Enclosed convective tunnel dryer with temperature and humidity control.' },
      { name: 'Multi-Head Weigher Filler', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: '14-head rotary combination scale with automatic drop chute.' },
      { name: 'Horizontal Flow Wrapper', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-speed pillow bag packaging line with print registration sensors.' }
    ],
    applications: [
      { title: 'Dry Short Pasta', desc: 'Penne, fusilli, macaroni, and shell retail boxes and bags.' },
      { title: 'Dry Long Pasta', desc: 'Spaghetti, fettuccine, and vermicelli noodle bundle packs.' },
      { title: 'Instant Noodle Cakes', desc: 'Wavy noodles processed for instant cup and pouch retail brands.' },
      { title: 'Gourmet Egg Pasta', desc: 'Bronze-die premium egg noodles and specialty shapes.' },
      { title: 'Gluten-Free Pasta', desc: 'Rice, corn, or lentil flour pasta for dietary sectors.' },
      { title: 'Bulk Institutional Stock', desc: 'Catering and school lunch bulk cardboard carton supplies.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/9_pasta_making.png', caption: 'Pasta Production Line Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', caption: 'Semolina Flour Intake Elevators' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.png', caption: 'Vacuum Extruder Head & Dies' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', caption: 'Shaker Pre-Dryer Platform' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', caption: 'Multi-Pass Drying Chambers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', caption: 'Multi-Head Combination Weighers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', caption: 'High-Speed Flow Packaging Line' }
    ]
  },
  'peanut-butter-processing-plant': {
    title: 'Peanut Butter Processing Plant',
    badge: 'TURNKEY NUT PROCESSING SOLUTION',
    subtitle: 'Roasting, Cooling, Blanching, Sorting, Grinding, Ingredient Blending And Jar Filling Lines For Peanut Butter',
    pdfFile: 'peanut_butter_processing.pdf',
    stats: {
      capacity: '300 Kg–3 Ton',
      stages: '11 Stage',
      retention: 'Texture Customized'
    },
    overview: {
      title: 'Complete Peanut Butter Plant',
      p1: 'Salvin Industries\' Peanut Butter Processing Plant is a complete turnkey solution designed to produce smooth, creamy, or crunchy peanut butter. Our lines combine raw nut roasting, skin blanching, visual sorting, colloid grinding, and precise volumetric packaging.',
      p2: 'Uniform roasting is critical to peanut butter flavor. Our lines use hot-air circulating roasters to heat peanuts evenly without oil separation. High-shear colloid mills then pulverise the nuts into paste, incorporating stabilizers, salt, and sugars under absolute vacuum.',
      highlights: [
        { title: 'Uniform Roasting', desc: 'Hot air batch or continuous roasters ensure uniform color development.' },
        { title: 'Colloid Mill Grinding', desc: 'High-shear micronization achieves ultra-smooth or crunchy textures.' },
        { title: 'Vacuum Deaeration', desc: 'Prevents oil rancidity and extends ambient shelf life.' }
      ],
      image: '/turnkey-brochures/images/10_peanut_butter.png',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png',
      features4: [
        { title: 'Uniform Roasting', desc: 'Consistent heat profile develops rich peanut aroma' },
        { title: 'Colloid Grinding', desc: 'High-shear mill achieves smooth or crunchy texture' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L line with CIP system' },
        { title: 'Vacuum Deaeration', desc: 'Air-free paste prevents oil separation and rancidity' }
      ]
    },
    capacities: [
      { capacity: '300 Kg/Hr', type: 'Small Scale', ideal: 'Artisanal Nut Product Brands', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Snack Processors', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Retail Brands', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Bulk OEM Exporters & Ingredient Mills', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L for sanitary processing.' },
      { title: 'Circulating Hot-Air Roaster', desc: 'Controlled thermal profiles develop rich peanut aromas without burning.' },
      { title: 'Nut Cooling & Blancher', desc: 'Quick cooling locks in flavor, followed by rollers separating red skins.' },
      { title: 'Colloid Grinding Mill', desc: 'Water-cooled grinding zones prevent heat-induced oil oxidation.' },
      { title: 'Jacketed Blending Vessel', desc: 'Blends emulsifiers, salt, and sweeteners under vacuum.' },
      { title: 'Aseptic Filling Line', desc: 'Volumetric jar filler with automatic capping and induction foil sealing.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Peanut Feeding', desc: 'Shelled peanuts are loaded onto elevators and fed into the hopper.' },
      { id: 2, title: 'Hot-Air Roasting', desc: 'Peanuts are roasted in hot-air circulating drums to activate oils.' },
      { id: 3, title: 'Peanut Cooling', desc: 'Fans draw room air through peanuts on a mesh conveyor to stop cooking.' },
      { id: 4, title: 'Abrasive Blanching', desc: 'Rubber rollers peel off red skins, and air separators discard them.' },
      { id: 5, title: 'Inspection & Sorting', desc: 'Optical sorters and hand checkers remove damaged or discolored nuts.' },
      { id: 6, title: 'Primary Grinding', desc: 'Crusher pre-grinds whole peanuts into a coarse, oily meal paste.' },
      { id: 7, title: 'Colloid Mill Refining', desc: 'High-shear colloid mills reduce peanut paste down to 20-30 microns.' },
      { id: 8, title: 'Ingredient Blending', desc: 'Doses salt, sugar, honey, and hydrogenated oils in jacketed mixers.' },
      { id: 9, title: 'Vacuum Deaeration', desc: 'Vacuum suction extracts air bubbles to prevent future oil separation.' },
      { id: 10, title: 'Jar Filling & Capping', desc: 'Automatic piston filler deposits peanut butter, capping lids instantly.' },
      { id: 11, title: 'Induction Sealing', desc: 'Seals jar mouths with foil laminate, followed by retail labeling.' }
    ],
    machinery: [
      { name: 'Rotary Hot-Air Roaster', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Batch or continuous hot-air roaster with temperature profiling.' },
      { name: 'Conveyor Cooling Bed', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Suction fan mesh conveyor designed to cool peanuts rapidly.' },
      { name: 'Peanut Skin Blancher', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'Abrasive rubber roller peeler with integrated dust collector.' },
      { name: 'High-Shear Colloid Mill', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'Water-cooled micronizing mill for producing fine nut pastes.' },
      { name: 'Jacketed Vacuum Mixer', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'Heated mixing vessel equipped with scraping blades and vacuum pump.' },
      { name: 'Volumetric Jar Filler', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: 'Volumetric piston filling machine with cut-off nozzle for thick pastes.' }
    ],
    applications: [
      { title: 'Retail Peanut Butter', desc: 'Smooth, creamy, and crunchy jars for supermarket shelves.' },
      { title: 'Confectionery Dosing', desc: 'Fillings for chocolates, wafers, cookies, and dessert bars.' },
      { title: 'Snack Food Dips', desc: 'Peanut-flavored dips, spreads, and seasoning bases.' },
      { title: 'Sports Nutrition Packs', desc: 'High-protein peanut butter squeeze sachets and pastes.' },
      { title: 'Pet Treats Industry', desc: 'Xylitol-free organic peanut butter for pet treats and fillings.' },
      { title: 'Bulk Ingredient Supply', desc: 'Commercial steel buckets and drums for industrial food factories.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/10_peanut_butter.png', caption: 'Peanut Butter Processing Plant Layout' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', caption: 'Rotary Peanut Roasting Station' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', caption: 'Nuts Air Cooling Bed' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', caption: 'Abrasive Roller Blanchers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.png', caption: 'Colloid Grinding Mills' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', caption: 'Jacketed Vacuum Blending Reactor' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', caption: 'Volumetric Glass Jar Bottling' }
    ]
  },
  'ginger-garlic-paste-plant': {
    title: 'Ginger Garlic Paste Plant',
    badge: 'TURNKEY GINGER GARLIC PASTE SOLUTION',
    subtitle: 'Complete Turnkey Lines For Peeling, Washing, Grinding, Blending, Pasteurization And Packaging Of Ginger Garlic Paste',
    heroImage: '/turnkey-brochures/images/11_ginger_garlic_plant.png',
    pdfFile: 'ginger_garlic_plant.pdf',
    overview: {
      title: 'Complete Ginger Garlic Paste Solution',
      p1: 'Salvin Industries\' Ginger Garlic Paste Plant is a complete turnkey processing line designed for the continuous, hygienic production of fresh ginger garlic paste. Our lines handle raw root intake through high-speed peeling, washing, precision colloid grinding, vacuum blending, pasteurization, and aseptic retail packaging.',
      p2: 'Ginger and garlic processing demands rapid throughput and temperature control to preserve volatile oils, aroma, and pungency. Our SS304/SS316L contact surfaces with CIP-compatible pipework, PLC-driven temperature logging, and nitrogen-flush filling lines deliver a shelf-stable product with consistent Brix, moisture, and microbial safety.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design \u2192 Manufacture \u2192 Install \u2192 Commission \u2192 Train' },
        { title: 'OEE Optimised', desc: '85%+ Overall Equipment Effectiveness target' },
        { title: 'Global Standards', desc: 'FSSAI, FDA, CE, ISO 22000 compliant designs' }
      ],
      image: '/turnkey-brochures/images/11_ginger_garlic_plant.png',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png',
      features4: [
        { title: 'Aroma Preserved', desc: 'Rapid processing retains natural pungency and oils' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L line with CIP system' },
        { title: 'Nitrogen Flushed', desc: 'Inert atmosphere filling extends product shelf life' },
        { title: 'Consistent Brix', desc: 'PLC-controlled blending for uniform paste quality' }
      ]
    },
    processSteps: [
      { id: 1, title: 'Raw Root Receiving', desc: 'Fresh ginger and garlic roots are weighed, inspected and fed into the hopper elevator.' },
      { id: 2, title: 'Washing & Cleaning', desc: 'Multi-stage rotary drum and jet washers remove soil, sand, and surface pesticide residues.' },
      { id: 3, title: 'Peeling', desc: 'Abrasive drum or steam peelers strip outer skin layers with minimal flesh loss and zero manual contact.' },
      { id: 4, title: 'Crushing & Grinding', desc: 'High-speed colloid mills pulverise peeled roots into uniform, fine paste with controlled particle size.' },
      { id: 5, title: 'Blending & Mixing', desc: 'Jacketed mixing vessels blend ginger and garlic pastes with acidulants, salt, and approved preservatives.' },
      { id: 6, title: 'Pasteurization', desc: 'Plate heat exchangers pasteurize the blended paste at precise temperature curves to achieve microbial safety.' },
      { id: 7, title: 'Aseptic Filling & Packaging', desc: 'High-speed piston fillers deposit finished paste into pouches, jars, or tubs under nitrogen-flush conditions.' }
    ],
    machinery: [
      { name: 'Rotary Root Washer', image: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png', desc: 'Heavy-duty rotary drum washer with multi-stage high-pressure spray nozzles for thorough root cleaning.' },
      { name: 'Abrasive Peeler', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Carborundum drum peeler with water spray for continuous high-capacity ginger and garlic skin removal.' },
      { name: 'Colloid Grinding Mill', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-shear water-cooled colloid mill producing uniformly fine paste at controlled temperatures.' },
      { name: 'Jacketed Blending Vessel', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'SS316L jacketed reactor with contra-rotating agitator for homogeneous paste blending under vacuum.' },
      { name: 'Plate Pasteurizer', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Sanitary plate heat exchanger skid with PLC temperature and dwell-time monitoring and logging.' },
      { name: 'Pouch & Jar Filling Line', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: 'Automatic piston filler with nitrogen-flush and sealing station for pouches, jars, and stand-up bags.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/11_ginger_garlic_plant.png', caption: 'Ginger Garlic Paste Plant Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/washing-machine.png', caption: 'Root Washing & Cleaning Station' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', caption: 'Abrasive Drum Peeling Unit' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', caption: 'Jacketed Blending & Mixing Vessels' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', caption: 'Plate Pasteurizer Skid' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', caption: 'Automated Pouch Filling Line' }
    ]
  },
  'black-pepper-powder-line': {
    title: 'Black Pepper Powder Line',
    badge: 'TURNKEY BLACK PEPPER POWDER SOLUTION',
    subtitle: 'Complete Turnkey Line For Cleaning, Drying, Cryogenic Grinding, Sieving And Packaging Of Black Pepper Powder',
    heroImage: '/turnkey-brochures/images/12_blank_pepper_powder.png',
    pdfFile: 'salvin_food_powder_processing_machinaries.pdf',
    overview: {
      title: 'Complete Black Pepper Processing Solution',
      p1: 'Salvin Industries\' Black Pepper Powder Line is a premium turnkey solution engineered to preserve the volatile piperine content, aroma, and distinctive colour of black pepper throughout the milling process. Our integrated lines take raw cleaned berries through controlled drying, cryogenic grinding, and air-classified sieving.',
      p2: 'Volatile oil retention is critical in black pepper processing. Our cryogenic grinding systems use liquid nitrogen to keep chamber temperatures below −20°C during milling, preventing thermal degradation of piperine and essential oils. Inline metal detection and dust-free FFS packaging ensure the finished product meets international spice quality benchmarks.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design → Manufacture → Install → Commission → Train' },
        { title: 'OEE Optimised', desc: '85%+ Overall Equipment Effectiveness target' },
        { title: 'Global Standards', desc: 'FSSAI, FDA, CE, ISO 22000 compliant designs' }
      ],
      image: '/turnkey-brochures/images/12_blank_pepper_powder.png',
      photoImage: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.jpg',
      features4: [
        { title: 'Piperine Preserved', desc: 'Cryogenic grinding protects volatile pepper oils' },
        { title: 'Consistent Mesh', desc: 'Classified sieving for uniform powder particle size' },
        { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L enclosed construction' },
        { title: 'Metal Detected', desc: 'Inline detection ensures contamination-free output' }
      ]
    },

    processSteps: [
      { id: 1, title: 'Raw Pepper Receiving', desc: 'Harvested black pepper berries are weighed, sampled, and fed into the intake elevator hopper.' },
      { id: 2, title: 'Cleaning & Aspiration', desc: 'Multi-deck vibrating screens and air aspirators remove dust, stalks, stones, and lightweight impurities.' },
      { id: 3, title: 'Controlled Drying', desc: 'Convective belt dryers reduce raw berry moisture to 10–12% while maintaining color and volatile oil stability.' },
      { id: 4, title: 'Coarse Crushing', desc: 'Heavy-duty pre-crusher mills break dry berries into uniform cracked flakes for efficient fine grinding.' },
      { id: 5, title: 'Cryogenic Fine Grinding', desc: 'Nitrogen-cooled pin mills pulverise cracked pepper into fine mesh powder while protecting volatile piperine content.' },
      { id: 6, title: 'Rotary Sieving', desc: 'High-speed multi-deck vibratory sifters classify ground powder into target mesh grades with zero cross-contamination.' },
      { id: 7, title: 'Metal Detection & Packaging', desc: 'Inline metal detectors scan the powder stream before FFS machines pack it into nitrogen-flushed pouches or bulk sacks.' }
    ],
    machinery: [
      { name: 'Vibrating Screen Cleaner', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png', desc: 'Multi-deck vibrating screen with integrated aspiration hood for cleaning raw pepper berries.' },
      { name: 'Continuous Belt Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg', desc: 'Multi-pass hot air belt dryer with temperature and humidity monitoring sensors.' },
      { name: 'Impact Pre-Crusher', image: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.jpg', desc: 'Heavy-duty impact crusher for reducing dried whole pepper berries into coarse flakes.' },
      { name: 'Cryogenic Pin Mill', image: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.jpg', desc: 'Liquid nitrogen-cooled pulveriser maintaining sub-zero grinding temperatures to protect volatile oils.' },
      { name: 'Multi-Deck Rotary Sifter', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'High-frequency vibratory sifter classifying powder into precisely controlled mesh size bands.' },
      { name: 'FFS Packaging Machine', image: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.jpg', desc: 'Vertical form-fill-seal packaging line with nitrogen flush and inline checkweigher.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/12_blank_pepper_powder.png', caption: 'Black Pepper Powder Line Overview' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png', caption: 'Pepper Cleaning & Aspiration Station' },
      { src: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg', caption: 'Controlled Belt Drying Section' },
      { src: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.jpg', caption: 'Impact Pre-Crusher Unit' },
      { src: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.jpg', caption: 'Cryogenic Pin Mill Grinder' },
      { src: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.jpg', caption: 'FFS Nitrogen-Flush Packaging Line' }
    ]
  },
  'seed-cleaning-sorting-line': {
    title: 'Seed Cleaning & Sorting Line',
    badge: 'TURNKEY SEED CLEANING SOLUTION',
    subtitle: 'Complete Turnkey Multi-Stage Aspiration, Destoning, Grading, Optical Sorting And Packaging Lines For Seeds',
    heroImage: '/turnkey-brochures/images/13_seed_cleaning_sorting.png',
    pdfFile: 'spices_seeds_cleaning_line.pdf',
    overview: {
      title: 'Complete Seed Cleaning Processing Solution',
      p1: 'Salvin Industries\' Seed Cleaning & Sorting Line is a precision turnkey system engineered for processors requiring maximum purity, consistent grading, and high-speed optical sorting of seeds. Our lines handle a wide range of seeds including sesame, cumin, coriander, fenugreek, mustard, sunflower, and crop seeds.',
      p2: 'Multi-stage aspiration, vibrating deck sorting, and gravity destoning remove impurities in sequence, while optical colour sorters identify and eject damaged, discolored, or foreign seeds with sub-millimetre precision. All contact surfaces are food-grade SS304, compatible with CIP procedures.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design \u2192 Manufacture \u2192 Install \u2192 Commission \u2192 Train' },
        { title: 'OEE Optimised', desc: '85%+ Overall Equipment Effectiveness target' },
        { title: 'Global Standards', desc: 'FSSAI, FDA, CE, ISO 22000 compliant designs' }
      ],
      image: '/turnkey-brochures/images/13_seed_cleaning_sorting.png',
      photoImage: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.png',
      features4: [
        { title: 'High Purity Output', desc: 'Multi-stage cleaning removes all foreign material' },
        { title: 'Optical Sorting', desc: 'CCD colour sorters reject damaged or off-colour seeds' },
        { title: 'Hygienic Process', desc: 'Food grade SS304 contact surfaces throughout' },
        { title: 'Gentle Handling', desc: 'Low-impact conveyors preserve seed germination rate' }
      ]
    },
    processSteps: [
      { id: 1, title: 'Raw Seed Receiving', desc: 'Bulk seed material is weighed, sampled, and elevated into the primary intake hopper.' },
      { id: 2, title: 'Pre-Aspiration Cleaning', desc: 'Centrifugal or cyclone aspirators remove dust, chaff, lightweight particles, and broken seed hulls.' },
      { id: 3, title: 'Vibrating Screen Separation', desc: 'Multi-deck vibratory screens separate seeds by size, removing oversized sticks and undersized fines simultaneously.' },
      { id: 4, title: 'Gravity Destoning', desc: 'Specific gravity destoners separate stones, glass, and heavy density foreign material from the clean seed stream.' },
      { id: 5, title: 'Optical Colour Sorting', desc: 'High-resolution CCD colour sorters detect and eject discolored, damaged, or foreign seeds with air-jet precision.' },
      { id: 6, title: 'Moisture Conditioning', desc: 'Fluidised bed dryers or ambient air blowers adjust seed moisture content to target storage levels.' },
      { id: 7, title: 'Automatic Bagging & Packaging', desc: 'Multi-head combination weighers and FFS machines pack cleaned seeds into retail pouches or 25–50 kg bulk bags.' }
    ],
    machinery: [
      { name: 'Pre-Cleaner Aspirator', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png', desc: 'Centrifugal aspiration unit with adjustable air velocity for removing dust and chaff from raw seeds.' },
      { name: 'Multi-Deck Vibrating Screen', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.png', desc: 'Heavy-duty two or three deck vibrating screen for classifying seeds into size fractions.' },
      { name: 'Gravity Destoner', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Specific gravity table that separates heavy stone or clay particles from the cleaned seed flow.' },
      { name: 'Optical Colour Sorter', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-speed CCD camera sorter with air-jet ejectors for removing off-colour or damaged seeds.' },
      { name: 'Fluidised Bed Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg', desc: 'Gentle hot-air fluid bed dryer for moisture adjustment without cracking or damaging seeds.' },
      { name: 'Automatic Bagging Machine', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.png', desc: 'Multi-head weigher and FFS packaging line for retail pouches and bulk bag filling.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/13_seed_cleaning_sorting.png', caption: 'Seed Cleaning & Sorting Line Overview' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.png', caption: 'Pre-Aspirator Cleaning Station' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.png', caption: 'Vibrating Screen Separation Deck' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', caption: 'Gravity Destoner Unit' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', caption: 'Optical Colour Sorting Machine' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.png', caption: 'Automated Seed Bagging & Packaging' }
    ]
  },
  'automatic-masala-packing-plant': {
    title: 'Automatic Masala Packing Plant',
    badge: 'TURNKEY MASALA PACKING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Masala Processing, Blending & Packaging',
    heroImage: '/turnkey-brochures/images/automatic-masala-packing-plant/spice_hopper_screw_conveyor.jpg',
    pdfFile: 'AMC-30_plant.pdf',
    stats: {
      capacity: '500 Kg–3 Ton',
      stages: '7 Stage',
      retention: 'High Precision'
    },
    overview: {
      title: 'Complete Processing Solution',
      p1: 'Salvin Industries offers a state-of-the-art Automatic Masala Packing Plant designed to meet the rigorous demands of the modern spice industry. Our fully automated turnkey solution ensures hygienic, efficient, and precise processing of various masala blends, maintaining flavor consistency from mixing to final pouch packing.',
      p2: 'Engineered with high-quality stainless steel and integrated with advanced PLC-based controls, this plant eliminates human error and optimizes production throughput. From seamless material feeding and precise ribbon blending to accurate multihead weighing and high-speed packaging, our system delivers unmatched reliability and product integrity.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design → Manufacture → Install → Commission → Train' },
        { title: 'OEE Optimised', desc: 'High operational equipment effectiveness target' },
        { title: 'Global Standards', desc: 'GMP and food safety compliant designs' }
      ],
      image: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.jpg',
      photoImage: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.jpg',
      features4: [
        { title: 'Hygienic Design', desc: 'Food-grade stainless steel construction for maximum safety' },
        { title: 'PLC Automation', desc: 'Advanced control systems for seamless and efficient operation' },
        { title: 'High Mixing Accuracy', desc: 'Uniform blending ensuring consistent flavor in every batch' },
        { title: 'Easy Operation & Maintenance', desc: 'User-friendly interface and simple cleaning procedures' }
      ]
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Spice Startups & Boutique Brands', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Masala Distributors', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Processing Plants', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Production & Exports', color: '#a34a0d' }
    ],
    features: [
      { title: 'Hygienic Design', desc: 'Food-grade stainless steel construction for maximum safety' },
      { title: 'PLC Automation', desc: 'Advanced control systems for seamless and efficient operation' },
      { title: 'High Mixing Accuracy', desc: 'Uniform blending ensuring consistent flavor in every batch' },
      { title: 'Easy Operation & Maintenance', desc: 'User-friendly interface and simple cleaning procedures' },
      { title: 'Precision Weighing', desc: 'High-precision multihead weighing system ensuring accurate filling weight' },
      { title: 'High-Speed Packaging', desc: 'Fully automated Form-Fill-Seal (FFS) packaging machine for rapid packing' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Feeding', desc: 'Incoming spices and ingredients are fed into the system.' },
      { id: 2, title: 'Mixing & Blending', desc: 'High-efficiency ribbon blender mixes various spices and masala powders precisely.' },
      { id: 3, title: 'Screening', desc: 'Vibro sifter screens and removes oversized particles from the blended masala.' },
      { id: 4, title: 'Storage Hopper', desc: 'Stainless steel storage hopper holds processed powder before final packaging.' },
      { id: 5, title: 'Automatic Weighing', desc: 'High-precision multihead weighing system ensures accurate filling weight.' },
      { id: 6, title: 'Pouch Packaging', desc: 'Fully automated Form-Fill-Seal (FFS) packaging machine packs into pouches.' },
      { id: 7, title: 'Finished Product Dispatch', desc: 'Packaged masala pouches are readied for dispatch and distribution.' }
    ],
    machinery: [
      { name: 'Ribbon Blender', image: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.jpg', desc: 'High-efficiency ribbon blender for precise mixing of various spices and masala powders.' },
      { name: 'Screw Conveyor', image: '/turnkey-brochures/images/automatic-masala-packing-plant/spice_hopper_screw_conveyor.jpg', desc: 'Automated screw conveyor for dust-free and hygienic material transfer between processing stages.' },
      { name: 'Vibro Sifter', image: '/turnkey-brochures/images/automatic-masala-packing-plant/vibro_sifter.jpg', desc: 'High-capacity vibro sifter for screening and removing oversized particles from the blended masala.' },
      { name: 'Storage Hopper', image: '/turnkey-brochures/images/automatic-masala-packing-plant/transfer_hopper.jpg', desc: 'Stainless steel storage hopper designed to safely hold processed powder before final packaging.' },
      { name: 'Multihead Weigher', image: '/turnkey-brochures/images/automatic-masala-packing-plant/weighing_dosing.jpg', desc: 'High-precision multihead weighing system ensuring accurate filling weight for every pouch.' },
      { name: 'Automatic Packaging Machine', image: '/turnkey-brochures/images/automatic-masala-packing-plant/packaging_machine.jpg', desc: 'Fully automated Form-Fill-Seal (FFS) packaging machine for high-speed packing into pouches.' }
    ],
    applications: [
      { title: 'Blended Masalas', desc: 'Garam masala, chicken masala, chaat masala, etc.' },
      { title: 'Ground Spices', desc: 'Chilli powder, turmeric powder, coriander powder, etc.' },
      { title: 'Seasoning Powders', desc: 'Flavored seasoning blends for snacks and namkeen.' },
      { title: 'Herbal Powders', desc: 'Ayurvedic and herbal powder supplements.' },
      { title: 'Beverage Mixes', desc: 'Instant premixes, tea masala, and coffee blends.' },
      { title: 'Baking Ingredients', desc: 'Baking powder, cocoa powder, and custard powder.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/spice_hopper_screw_conveyor.jpg', caption: 'Spice Hopper Bin & Screw Conveyor' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/transfer_hopper.jpg', caption: 'Transfer Hopper' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.jpg', caption: 'Ribbon Blender Mixing System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/vibro_sifter.jpg', caption: 'Vibro Sifter Screening System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/weighing_dosing.jpg', caption: 'Automatic Weighing & Dosing System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/packaging_machine.jpg', caption: 'Automatic Masala Packaging Machine' }
    ]
  },
  'fully-automated-ors-plant': {
    title: 'ORS Processing Plant',
    badge: 'TURNKEY ORS PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Processing, Blending & Packaging Oral Rehydration Salts',
    heroImage: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.jpg',
    pdfFile: 'ORS.pdf',
    stats: {
      capacity: '500 Kg–3 Ton',
      stages: '7 Stage',
      retention: 'WHO Compliant'
    },
    overview: {
      title: 'Complete ORS Processing Solution',
      p1: 'Salvin Industries offers a state-of-the-art ORS Processing Plant designed to meet WHO formulation guidelines. Our complete turnkey solution ensures precise blending, homogeneous mixing, and contamination-free packaging of Oral Rehydration Salts.',
      p2: 'Constructed from premium SS316L pharmaceutical-grade stainless steel, the plant integrates multi-stage ingredient dosing, high-shear blending, and precision sachet packaging. Advanced PLC and SCADA automation guarantee strict recipe management and compliance with global GMP and HACCP standards.',
      highlights: [
        { title: 'WHO Compliant', desc: 'Engineered for precise WHO-recommended formulas' },
        { title: 'GMP Certified', desc: 'Pharmaceutical-grade SS316L sanitary construction' },
        { title: 'High Precision', desc: 'Automated dosing and highly accurate sachet filling' }
      ],
      image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.jpg',
      photoImage: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.jpg',
      features4: [
        { title: 'Hygienic Design', desc: 'Pharmaceutical-grade stainless steel construction' },
        { title: 'PLC Automation', desc: 'Strict recipe control and batch traceability' },
        { title: 'High Mixing Accuracy', desc: 'Uniform blending for critical electrolytes' },
        { title: 'Precision Packaging', desc: 'Accurate form-fill-seal sachet packaging' }
      ]
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Regional Pharma Units', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'National Health Programs', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'Global Relief Suppliers', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Export Operations', color: '#a34a0d' }
    ],
    features: [
      { title: 'Pharmaceutical Grade', desc: 'All contact surfaces are SS316L to ensure zero-contamination processing.' },
      { title: 'Precision Dosing', desc: 'Automated ingredient feeding for strict adherence to WHO formulation (Sodium Chloride IP 2.60g, Potassium Chloride IP 1.50g, Trisodium Citrate IP 2.90g, Glucose Anhydrous IP 13.50g).' },
      { title: 'Homogeneous Blending', desc: 'Advanced blending geometry ensures uniform distribution of active electrolytes.' },
      { title: 'Zero-Dust Transfer', desc: 'Vacuum transfer and enclosed conveying systems prevent airborne cross-contamination.' },
      { title: 'High-Speed Sachet Packing', desc: 'Multi-lane VFFS lines guarantee airtight seals to preserve powder stability.' },
      { title: 'SCADA Integration', desc: 'Real-time batch logging, audit trails, and 21 CFR Part 11 compliant reporting.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Dispensing', desc: 'Ingredients are weighed according to the WHO formula in a controlled environment.' },
      { id: 2, title: 'Sifting & Milling', desc: 'Raw powders pass through vibro-sifters and mills to ensure uniform particle size.' },
      { id: 3, title: 'Vacuum Transfer', desc: 'Ingredients are pneumatically conveyed to the blender to eliminate dust exposure.' },
      { id: 4, title: 'Homogeneous Blending', desc: 'High-shear blenders mix the salts and glucose into a perfectly uniform batch.' },
      { id: 5, title: 'Intermediate Storage', desc: 'Blended ORS powder is stored in intermediate bulk containers (IBC) under controlled humidity.' },
      { id: 6, title: 'Automatic Sachet Filling', desc: 'Multi-lane Form-Fill-Seal machines dose exact 21.8g portions into foil laminates.' },
      { id: 7, title: 'Quality Inspection', desc: 'Checkweighers and metal detectors verify each sachet before final cartoning.' }
    ],
    machinery: [
      { name: 'Raw Material Receiving & Storage System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.jpg', desc: 'Hygienic SS316L bulk receiving and storage tanks for primary ingredients.' },
      { name: 'Automatic Weighing & Ingredient Dosing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_dosing.jpg', desc: 'Precision load-cell dosing ensures exact WHO formulation ratios.' },
      { name: 'Ribbon Blender Mixing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_blender.jpg', desc: 'High-efficiency ribbon blender designed for homogeneous mixing of delicate crystals.' },
      { name: 'Powder Homogenizer', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_homogenizer.jpg', desc: 'Advanced homogenizer to maintain uniform particle distribution before packing.' },
      { name: 'Quality Inspection & Testing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_inspection.jpg', desc: 'Integrated laboratory and end-of-line inspection to ensure product safety.' },
      { name: 'Automatic ORS Sachet Packaging Machine', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_packaging.jpg', desc: 'High-speed VFFS machine optimized for 21.8g ORS sachet filling.' }
    ],
    applications: [
      { title: 'WHO ORS Packets', desc: 'Standard 21.8g powder sachets for 1L water dilution.' },
      { title: 'Flavored ORS', desc: 'Orange, lemon, or apple flavored rehydration powders.' },
      { title: 'Sports Hydration', desc: 'Electrolyte drink mixes for athletic recovery.' },
      { title: 'Veterinary ORS', desc: 'Bulk oral rehydration formulas for livestock.' },
      { title: 'Clinical Powders', desc: 'Specialized nutrient and salt complexes for medical use.' },
      { title: 'Zinc Enriched', desc: 'ORS formulations fortified with Zinc supplements.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.jpg', caption: 'Raw Material Receiving & Storage' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_dosing.jpg', caption: 'Automatic Weighing & Dosing System' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_blender.jpg', caption: 'Ribbon Blender Mixing System' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_homogenizer.jpg', caption: 'Powder Homogenizer' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_inspection.jpg', caption: 'Quality Inspection & Testing' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_packaging.jpg', caption: 'Automatic ORS Sachet Packaging' }
    ]
  },
  'pickle-processing-and-packaging-plant': {
    title: 'Pickle Processing & Packaging Plant',
    badge: 'TURNKEY PICKLE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Fruit & Vegetable Pickle Processing, Brining, and Packaging',
    heroImage: '/turnkey-brochures/images/pickle-processing-plant/pickle_brining.jpg',
    pdfFile: 'PICKLE.pdf',
    stats: {
      capacity: '500 Kg–5 Ton/Hr',
      stages: '17 Stage',
      retention: 'High Yield'
    },
    overview: {
      title: 'Complete Pickle Processing Solution',
      p1: 'Salvin Industries offers a state-of-the-art Pickle Processing & Packaging Plant engineered for producing premium quality fruit and vegetable pickles. Our fully automated turnkey solution ensures precise processing from raw material reception to final packaging.',
      p2: 'Constructed entirely from SS304/SS316L food-grade stainless steel, the plant integrates advanced washing, precision cutting, uniform spice blending, and automated filling lines. The PLC-controlled brining and mixing systems guarantee consistent flavor profiles, superior hygiene, and strict compliance with GMP standards.',
      highlights: [
        { title: 'GMP Compliant', desc: 'Engineered for sanitary food production' },
        { title: 'Fully Automated', desc: 'Continuous processing from washing to packing' },
        { title: 'High Precision', desc: 'Accurate cutting, slicing, and ingredient dosing' }
      ],
      image: '/turnkey-brochures/images/pickle-processing-plant/pickle_infographic.jpg',
      photoImage: '/turnkey-brochures/images/pickle-processing-plant/pickle_infographic.jpg',
      features4: [
        { title: 'Hygienic Design', desc: 'Food-grade stainless steel construction' },
        { title: 'PLC Automation', desc: 'Strict recipe control and batch traceability' },
        { title: 'Versatile Production', desc: 'Handles mango, lime, mixed veg, and garlic' },
        { title: 'High Speed Filling', desc: 'Accurate jar and pouch filling systems' }
      ]
    },
    features: [
      { title: 'Food Grade Material', desc: 'All contact parts are manufactured in high-grade SS304/SS316L stainless steel.' },
      { title: 'Automated Washing', desc: 'High-pressure air bubble and spray washing for complete soil removal.' },
      { title: 'Uniform Slicing', desc: 'Precision cutting blades ensure consistent piece sizes for perfect curing.' },
      { title: 'Advanced Maturation', desc: 'Temperature-controlled brining tanks optimize the pickling process.' },
      { title: 'Homogeneous Blending', desc: 'Specialized mixers gently coat ingredients with spices without bruising.' },
      { title: 'Integrated Packaging', desc: 'Seamless transition from filling to capping, labeling, and carton packing.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Reception', desc: 'Fresh fruits and vegetables are received and loaded onto the line.' },
      { id: 2, title: 'Washing Machine', desc: 'Thorough cleaning to remove dirt, pesticides, and impurities.' },
      { id: 3, title: 'Sorting & Inspection', desc: 'Manual or optical sorting to remove defective or unripe produce.' },
      { id: 4, title: 'Cutting / Chopping', desc: 'Automated machines slice or dice the produce uniformly.' },
      { id: 5, title: 'Mixing Tank', desc: 'Initial blending with salt or pre-treatments.' },
      { id: 6, title: 'Pickling (Brine Tank)', desc: 'Maturation process in controlled brining tanks.' },
      { id: 7, title: 'Draining & Washing', desc: 'Removal of excess brine and final washing of cured pieces.' },
      { id: 8, title: 'Dewatering Centrifuge', desc: 'Centrifugal force removes surface moisture.' },
      { id: 9, title: 'Drying System', desc: 'Controlled drying prepares pieces for spice coating.' },
      { id: 10, title: 'Final Mixing', desc: 'Spices, oils, and preservatives are blended with the pieces.' },
      { id: 11, title: 'Pickle Filling Machine', desc: 'Automated volumetric filling into jars or pouches.' },
      { id: 12, title: 'Bottle Capping', desc: 'Secure capping to ensure leak-proof seals.' },
      { id: 13, title: 'Sticker Labeling', desc: 'Application of wrap-around or front/back labels.' },
      { id: 14, title: 'Jar Inspection Conveyor', desc: 'Final visual or automated check of the sealed jars.' },
      { id: 15, title: 'Shrink Tunnel (Optional)', desc: 'Heat shrinking for tamper-evident neck bands.' },
      { id: 16, title: 'Carton Packing', desc: 'Jars are loaded into corrugated shipping cartons.' },
      { id: 17, title: 'Palletizing', desc: 'Cartons are stacked on pallets for dispatch.' }
    ],
    machinery: [
      { name: 'Raw Material Washing Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_washing.jpg', desc: 'High-efficiency fruit and vegetable washing system with water jets.' },
      { name: 'Sorting & Inspection Conveyor', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_sorting.jpg', desc: 'Ergonomic conveyor system for manual grading and defect removal.' },
      { name: 'Automatic Cutting / Slicing Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_cutting.jpg', desc: 'High-capacity dicer and slicer for uniform produce preparation.' },
      { name: 'Spice Mixing & Blending System', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_mixing.jpg', desc: 'Ribbon or paddle blenders for homogeneous spice and oil coating.' },
      { name: 'Pickle Maturation & Brining Tank System', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_brining.jpg', desc: 'SS316L tanks for controlled curing and brine maturation.' },
      { name: 'Automatic Pickle Filling & Packaging Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_packaging.jpg', desc: 'Accurate and hygienic filling lines for glass jars or PET bottles.' }
    ],
    applications: [
      { title: 'Mango Pickle', desc: 'Traditional diced and sliced raw mango pickles.' },
      { title: 'Mixed Vegetable Pickle', desc: 'Carrot, cauliflower, and chili combinations.' },
      { title: 'Lime & Lemon Pickle', desc: 'Whole or quartered citrus pickles.' },
      { title: 'Garlic & Ginger Pickle', desc: 'Peeled clove and julienne paste varieties.' },
      { title: 'Green Chili Pickle', desc: 'Slit or chopped chili processing.' },
      { title: 'Meat & Seafood Pickles', desc: 'Specialized lines for non-veg pickle variants.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_washing.jpg', caption: 'Raw Material Washing Machine' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_sorting.jpg', caption: 'Sorting & Inspection Conveyor' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_cutting.jpg', caption: 'Automatic Cutting / Slicing Machine' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_mixing.jpg', caption: 'Spice Mixing & Blending System' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_brining.jpg', caption: 'Pickle Maturation & Brining Tank System' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_packaging.jpg', caption: 'Automatic Pickle Filling & Packaging Machine' }
    ]
  },
  'milk-powder-processing-packaging-plant': {
    title: 'Milk Powder Processing & Packaging Plant',
    badge: 'TURNKEY MILK POWDER SOLUTION',
    subtitle: 'Complete Turnkey Line From Raw Milk Reception To Spray Drying And Powder Packaging',
    heroImage: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_hero_banner.png',
    heroMinHeight: '600px',
    heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'milk powder.pdf',
    overview: {
      title: 'Complete Milk Powder Plant',
      p1: 'Salvin Industries\' Milk Powder Processing & Packaging Plant is an advanced, fully automated turnkey solution engineered for producing high-quality milk powder. Our integrated lines handle everything from raw milk reception and standardization to evaporation, spray drying, and aseptic packaging.',
      p2: 'Built in compliance with international food safety and dairy standards, our systems ensure precise temperature control, optimal moisture content, and high solubility of the final powder while maximizing energy efficiency and product yield.',
      image: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_infographic.jpg',
      photoImage: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_infographic.jpg',
      benefits: [
        { title: 'Consistent Quality', desc: 'Advanced evaporation and spray drying ensures uniform particle size and solubility.' },
        { title: 'Hygienic Design', desc: 'Fully CIP-able stainless steel construction meets strict dairy industry standards.' },
        { title: 'Energy Efficient', desc: 'Multi-effect evaporators and heat recovery systems minimize operational costs.' },
        { title: 'Automated Control', desc: 'Centralized PLC and SCADA systems for seamless process monitoring.' }
      ]
    },
    process: [
      { id: 1, title: 'Raw Milk Reception', desc: 'Weighing, chilling, and storing raw milk upon arrival.' },
      { id: 2, title: 'Filtration & Clarification', desc: 'Centrifugal clarifiers remove impurities and somatic cells.' },
      { id: 3, title: 'Standardization', desc: 'Adjusting fat content to meet specific product requirements.' },
      { id: 4, title: 'Pasteurization', desc: 'HTST pasteurization eliminates pathogens and ensures safety.' },
      { id: 5, title: 'Evaporation', desc: 'Multi-effect falling film evaporators concentrate the milk.' },
      { id: 6, title: 'Spray Drying', desc: 'High-pressure atomization transforms concentrate into powder.' },
      { id: 7, title: 'Cooling & Sifting', desc: 'Fluid bed cooling and vibro sifting for uniform powder.' },
      { id: 8, title: 'Powder Packing', desc: 'Hygienic filling into bulk bags or retail pouches.' }
    ],
    machinery: [
      { name: 'Raw Milk Storage Tank', image: '/turnkey-brochures/images/milk-powder-processing-plant/raw_milk_storage.jpg', desc: 'Insulated stainless steel silos for maintaining raw milk quality.' },
      { name: 'Filtration & Clarification System', image: '/turnkey-brochures/images/milk-powder-processing-plant/filtration_clarification.jpg', desc: 'Advanced centrifugal clarification to remove physical impurities.' },
      { name: 'Milk Standardization System', image: '/turnkey-brochures/images/milk-powder-processing-plant/milk_standardization.jpg', desc: 'Precise inline fat standardization for consistent product composition.' },
      { name: 'Pasteurization Unit', image: '/turnkey-brochures/images/milk-powder-processing-plant/pasteurization_system.jpg', desc: 'High-Temperature Short-Time (HTST) pasteurizer with heat recovery.' },
      { name: 'Evaporation & Spray Drying', image: '/turnkey-brochures/images/milk-powder-processing-plant/evaporation_spray_drying.jpg', desc: 'Multi-effect falling film evaporator and highly efficient spray dryer.' },
      { name: 'Automatic Powder Packing Machine', image: '/turnkey-brochures/images/milk-powder-processing-plant/automatic_powder_packing.jpg', desc: 'Hygienic and accurate form-fill-seal packaging for milk powder.' }
    ],
    applications: [
      { title: 'Whole Milk Powder', desc: 'Full-fat powder for direct consumption and culinary use.' },
      { title: 'Skimmed Milk Powder', desc: 'Low-fat powder ideal for bakery, confectionery, and beverages.' },
      { title: 'Infant Formula', desc: 'Highly specialized nutritional powder for infant consumption.' },
      { title: 'Dairy Ingredients', desc: 'Base powders for chocolates, ice creams, and processed foods.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/raw_milk_storage.jpg', caption: 'Raw Milk Reception & Storage Tank' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/filtration_clarification.jpg', caption: 'Filtration & Clarification Unit' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/milk_standardization.jpg', caption: 'Milk Standardization System' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/pasteurization_system.jpg', caption: 'Pasteurization System' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/evaporation_spray_drying.jpg', caption: 'Multi-Effect Evaporator & Spray Dryer' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/automatic_powder_packing.jpg', caption: 'Automatic Powder Packing Machine' }
    ]
  }
};

/**
 * Fallback Generator for all other Turnkey Projects.
 * Dynamically builds realistic stages, machinery, and capacities based on title.
 */
const dynamicProjectCache = {};

export function getProjectDetails(slug, title = '') {
  if (CORE_PROJECTS[slug]) {
    return CORE_PROJECTS[slug];
  }

  if (dynamicProjectCache[slug]) {
    return dynamicProjectCache[slug];
  }

  // Construct dynamic data based on title
  const cleanTitle = title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isPowder = cleanTitle.toLowerCase().includes('powder') || cleanTitle.toLowerCase().includes('mill') || cleanTitle.toLowerCase().includes('spice');
  const isLiquidOrPaste = cleanTitle.toLowerCase().includes('juice') || cleanTitle.toLowerCase().includes('honey') || cleanTitle.toLowerCase().includes('paste') || cleanTitle.toLowerCase().includes('sauce') || cleanTitle.toLowerCase().includes('ketchup') || cleanTitle.toLowerCase().includes('jelly') || cleanTitle.toLowerCase().includes('oil');
  
  // Set default steps
  let processSteps = [];
  let machinery = [];
  let stats = { capacity: '500 Kg–5 Ton', stages: '10 Stage', retention: 'OEE Optimised' };
  let capacities = [
    { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Startups & Boutique Brands', color: '#f47c20' },
    { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Distributors', color: '#dc6e19' },
    { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Processing Plants', color: '#c45a10' },
    { capacity: '5 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Production & Exports', color: '#a34a0d' }
  ];

  if (isPowder) {
    processSteps = [
      { id: 1, title: 'Raw Material Receiving', desc: 'Raw feed material is inspected, weighed, and logged into the hopper.' },
      { id: 2, title: 'Cleaning & Aspiration', desc: 'Removes sand, leaves, stones, and light foreign matter.' },
      { id: 3, title: 'Drying / Conditioning', desc: 'Reduces raw moisture level to target ranges for optimal milling.' },
      { id: 4, title: 'Coarse Crushing', desc: 'Pre-crusher breakers reduce raw material to uniform flakes.' },
      { id: 5, title: 'Fine Grinding / Milling', desc: 'Pulveriser pin mills grind material into fine powder.' },
      { id: 6, title: 'Vibratory Sieving', desc: 'Vibratory sifting screens separate powder into fine mesh bands.' },
      { id: 7, title: 'Magnetic Separation', desc: 'Inline magnetic filters extract micro-metallic contaminants.' },
      { id: 8, title: 'Quality Assurance Testing', desc: 'Batch testing for moisture, particle size, and purity.' },
      { id: 9, title: 'Automatic Bagging', desc: 'Form-fill-seal packaging wraps powder into retail pouches or bulk sacks.' },
      { id: 10, title: 'Traceability Warehousing', desc: 'Stacking and storage under dry atmosphere with batch codes.' }
    ];
    machinery = [
      { name: 'Vibrating Screen Cleaner', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Double-deck screen separator with air aspiration hood.' },
      { name: 'Rotary Destoner', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'Density separation system to eliminate heavy stone contaminants.' },
      { name: 'Convective Dryer', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Hot air belt dryer with speed and moisture sensors.' },
      { name: 'Pre-Crusher Breaker', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-torque breaker designed to crush raw items into coarse flakes.' },
      { name: 'Fine Pin Mill Pulverizer', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'Micronizing pin mill featuring water cooling channels.' },
      { name: 'Pouch Packaging Machine', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: 'Vertical FFS line with auger dosing for dust-free bagging.' }
    ];
  } else if (isLiquidOrPaste) {
    stats = { capacity: '500 Ltr–5,000 Ltr', stages: '10 Stage', retention: 'Brix Controlled' };
    capacities = [
      { capacity: '500 Ltr/Hr', type: 'Small Scale', ideal: 'Boutique Liquid Brands', color: '#f47c20' },
      { capacity: '1,000 Ltr/Hr', type: 'Medium Scale', ideal: 'Regional Food Plants', color: '#dc6e19' },
      { capacity: '2,000 Ltr/Hr', type: 'Large Scale', ideal: 'National Retail Brands', color: '#c45a10' },
      { capacity: '5,000 Ltr/Hr', type: 'Industrial Scale', ideal: 'Mass Production & Exports', color: '#a34a0d' }
    ];
    processSteps = [
      { id: 1, title: 'Ingestion & Washing', desc: 'Raw ingredients are washed in rotary drums to remove soil.' },
      { id: 2, title: 'Sorting Conveying', desc: 'Grade selectors reject damaged or unripe feedstock.' },
      { id: 3, title: 'Pulping & Crushing', desc: 'Crushing mills break cells to maximize juice or paste yield.' },
      { id: 4, title: 'Extraction / Pressing', desc: 'Screw or belt presses squeeze out juice or raw paste.' },
      { id: 5, title: 'Duplex Filtration', desc: 'Removes insoluble fibers, skins, and solids.' },
      { id: 6, title: 'Vacuum Evaporation', desc: 'Concentrates product at low temperatures protecting flavor.' },
      { id: 7, title: 'Pasteurization Homogenizer', desc: 'Thermal processing deactivates microbes and homogenizes texture.' },
      { id: 8, title: 'Aseptic Filling', desc: 'Deposits hot or cold liquid/paste into jars, pouches, or bottles.' },
      { id: 9, title: 'Automatic Capping', desc: 'Applies caps with induction foil seal checks.' },
      { id: 10, title: 'Labeling & Warehousing', desc: 'Automatic side labeling, box boxing, and temperature controlled warehousing.' }
    ];
    machinery = [
      { name: 'Rotary Drum Washer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'Stainless steel drum washer with high-pressure spray headers.' },
      { name: 'Pulping Disintegrator', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-speed crushing mill for pulping raw feedstocks.' },
      { name: 'Continuous Screw Extractor', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'High-yield pressing screw extractor for liquid recovery.' },
      { name: 'Vacuum Concentration Pan', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'Low-temperature vacuum evaporator for liquid concentrates.' },
      { name: 'Plate Pasteurizer skid', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Thermal sterilization skid with PLC temperature logging.' },
      { name: 'Volumetric Bottling machine', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: 'Rotary filling, capping, and sealing line for liquids and pastes.' }
    ];
  } else {
    // General plant fallback
    processSteps = [
      { id: 1, title: 'Raw Feed Ingestion', desc: 'Raw input goods are received, checked, and loaded into elevators.' },
      { id: 2, title: 'Washing & Cleaning', desc: 'Multi-stage washers remove dirt, dust, and external debris.' },
      { id: 3, title: 'Preparation & Sorting', desc: 'Grading conveyors classify items, separating rejected stocks.' },
      { id: 4, title: 'Process Processing', desc: 'Core processing (cutting, mixing, or cooking) based on recipe.' },
      { id: 5, title: 'Thermal Conditioning', desc: 'Controlled heating or cooling adjusts moisture and texture.' },
      { id: 6, title: 'Extraction & Refining', desc: 'Separates valuable product from waste fibers or shells.' },
      { id: 7, title: 'Fine Filtration / Sieving', desc: 'Sifts or clarifies products to guarantee smooth particle grades.' },
      { id: 8, title: 'Automated Dosing / Filling', desc: 'Weighs and packages finished goods into retail containers.' },
      { id: 9, title: 'Induction Sealing / Capping', desc: 'Hermetically seals packs to maintain maximum shelf life.' },
      { id: 10, title: 'Traceable Warehousing', desc: 'Palletized casing and warehouse logging under FIFO guidelines.' }
    ];
    machinery = [
      { name: 'Sanitary Feed Elevator', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', desc: 'Stainless steel bucket or screw elevator for automatic loading.' },
      { name: 'Multi-stage Jet Washer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', desc: 'High-efficiency wash cabin with water recirculation filters.' },
      { name: 'Core Processing Vessel', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', desc: 'Sanitary jacketed blender or reactor for temperature-controlled mixing.' },
      { name: 'Refining Extractor Separator', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', desc: 'High-torque separator for isolating pure product fractions.' },
      { name: 'Vibratory mesh Clarifier', image: '/turnkey-brochures/images/beetroot-gallery/silos.png', desc: 'Vibrating sifting separator with adjustable screening meshes.' },
      { name: 'FFS Form Fill Sealer', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', desc: 'Fully automated filling, capping, bagging, and cartoning line.' }
    ];
  }

  const project = {
    title: cleanTitle,
    badge: `TURNKEY ${cleanTitle.toUpperCase()} SOLUTION`,
    subtitle: `Complete Turnkey Processing, Refining And Packaging Lines For ${cleanTitle}`,
    pdfFile: isPowder ? 'salvin_food_powder_processing_machinaries.pdf' : 'fruit_juice_salvin.pdf',
    stats,
    overview: {
      title: `Complete ${cleanTitle}`,
      p1: `Salvin Industries' ${cleanTitle} is a premium turnkey industrial plant engineered for processors seeking high yield, sanitary design, and dependable OEE. Our complete lines guide products seamlessly from raw crop intake through cleaning, refining, thermal processing, and high-speed packaging.`,
      p2: `We custom-engineer each plant according to your local codes, daily throughput goals, and product standards. Contact parts are constructed from food-grade SS304/SS316L, fully supporting automatic Clean-in-Place (CIP) operations. PLC systems track and log batch codes from intake to packaging.`,
      highlights: [
        { title: 'End-to-End Turnkey', desc: 'Engineering → Fabrication → Commissioning → Operator Training.' },
        { title: 'OEE Optimised', desc: 'Engineered to achieve 85%+ Overall Equipment Effectiveness.' },
        { title: 'Global Compliance', desc: 'Complies with FSSAI, FDA, CE, and GMP sanitary standards.' }
      ],
      image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png'
    },
    capacities,
    features: [
      { title: 'SS304/SS316L Contacts', desc: 'All contact parts are food-grade stainless steel with automatic CIP piping.' },
      { title: 'Thermal Energy Recovery', desc: 'Recirculating heat loops reduce electricity and fuel costs by up to 25%.' },
      { title: 'Dust-Free Enclosed Paths', desc: 'Aspiration hoods and enclosed chutes protect workers and prevent raw dust spills.' },
      { title: 'Modular Upgrades Ready', desc: 'Scalable structural frames allow line expansions without rebuilding layout frames.' },
      { title: 'Siemens/Allen-Bradley PLC', desc: 'Telemetry-ready HMI control panel logs real-time batch metrics and telemetry.' },
      { title: 'Precision Weight Dosing', desc: 'Multi-head combination scales or auger feeders guarantee 99.8% dosing accuracy.' }
    ],
    processSteps,
    machinery,
    applications: [
      { title: 'Consumer Retail Brands', desc: 'Retail packaging lines for supermarkets and e-commerce distribution.' },
      { title: 'Industrial Feedstock Supply', desc: 'Bulk drum and sack supplies for commercial food factories.' },
      { title: 'Confectionery & Baking', desc: 'Ingredient sourcing and blending bases for bakery lines.' },
      { title: 'Wellness Supplements', desc: 'Functional extracts, capsules, and pure concentrated powders.' },
      { title: 'Export Trade Supplies', desc: 'High-purity bulk products packed for overseas markets.' },
      { title: 'Custom Contract Packing', desc: 'White-label and private-label packaging for brand houses.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png', caption: `${cleanTitle} Overview` },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.png', caption: 'Raw Intake & Washing Section' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.png', caption: 'Refining & Processing Area' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.png', caption: 'Piping & Filtration Skids' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.png', caption: 'Storage & Silo Dosing Systems' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.png', caption: 'Automated Packaging & Weighing Line' }
    ]
  };

  dynamicProjectCache[slug] = project;
  return project;
}
