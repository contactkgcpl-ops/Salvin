/**
 * Detailed specifications for Turnkey Projects.
 * Contains detailed data for requested plants and a dynamic fallback generator for the rest.
 */

const CORE_PROJECTS = {

  'ctc-tea-processing-packaging-plant': {
    title: 'CTC Tea Processing & Packaging Plant',
    badge: 'TURNKEY CTC TEA PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solutions for CTC Tea Manufacturing & Packaging',
    heroImage: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_plant_hero.webp',
    heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'ctc_tea_processing.pdf',
    stats: {
      capacity: '500 - 2,000 Kg/Hr',
      stages: '9 Stage',
      retention: 'Premium Quality'
    },
    overview: {
      title: 'Complete CTC Tea Processing Solution',
      p1: 'Salvin Industries provides complete turnkey solutions for CTC Tea Processing Plants, offering advanced systems for tea leaf handling, withering, rolling, fermentation, drying, sorting, and packaging. Our solutions are designed to maximize productivity while maintaining tea quality and consistency.',
      p2: 'Our modern processing technologies ensure efficient manufacturing, uniform granule formation, and preservation of tea aroma, flavor, and color. Advanced automation improves operational efficiency while maintaining stringent quality standards.',
      image: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_plant_hero.webp',
      photoImage: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_plant_hero.webp',
      features4: [
        { title: 'Hygienic Processing', desc: 'Food grade construction for safe tea production' },
        { title: 'Uniform Granules', desc: 'Advanced CTC technology for consistent size' },
        { title: 'Premium Quality', desc: 'Preserves natural tea aroma and flavor' },
        { title: 'High-Speed Packaging', desc: 'Automated filling and sealing systems' }
      ]
    },
    processSteps: [
      { id: 1, title: 'Fresh Tea Leaf Receiving' },
      { id: 2, title: 'Withering' },
      { id: 3, title: 'CTC Crushing, Tearing & Curling' },
      { id: 4, title: 'Fermentation / Oxidation' },
      { id: 5, title: 'Drying' },
      { id: 6, title: 'Sorting & Grading' },
      { id: 7, title: 'Blending' },
      { id: 8, title: 'Packaging & Sealing' },
      { id: 9, title: 'Finished Product Dispatch' }
    ],
    machinery: [
      { name: 'Fresh Tea Leaf Receiving', desc: 'Freshly harvested tea leaves are received and inspected for quality. Proper selection ensures high-quality tea production.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_leaf_receiving.webp' },
      { name: 'Tea Leaf Withering Trough', desc: 'Tea leaves are spread in withering troughs where moisture content is reduced under controlled airflow. This prepares the leaves for efficient processing.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/withering_trough.webp' },
      { name: 'CTC Crushing Tearing & Curling Machine', desc: 'Leaves pass through specialized CTC machines that crush, tear, and curl them into characteristic tea granules. This step develops the tea structure required for strong liquor.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_machine.webp' },
      { name: 'Fermentation / Oxidation Conveyor System', desc: 'Processed leaves undergo controlled oxidation to develop color, aroma, flavor, and strength. This is a critical stage in black tea manufacturing.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/fermentation.webp' },
      { name: 'Continuous Tea Dryer', desc: 'Fermented tea is dried using hot-air dryers to stop oxidation and achieve the required moisture level. Proper drying ensures shelf stability and quality retention.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_dryer.webp' },
      { name: 'Automatic Tea Packaging Machine', desc: 'Tea is packed into pouches, cartons, tea bags, or bulk packs using automated filling and sealing systems. Packaging protects freshness and aroma.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/packaging.webp' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_plant_hero.webp', caption: 'Fully Automated CTC Tea Processing Plant' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_leaf_receiving.webp', caption: 'Tea Leaf Receiving & Feeding System' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/withering_trough.webp', caption: 'Tea Leaf Withering Trough' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_machine.webp', caption: 'CTC Crushing Tearing & Curling Machine' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/fermentation.webp', caption: 'Fermentation / Oxidation Conveyor System' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_dryer.webp', caption: 'Continuous Tea Dryer' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/packaging.webp', caption: 'Automatic Tea Packaging Machine' }
    ]
  },

  'beetroot-juice-processing-plant': {
    title: 'Beetroot Juice Processing Plant',
    badge: 'TURNKEY BEETROOT JUICE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution For Cleaning, Washing, Crushing, Juice Extraction, Clarification, Pasteurization and Packaging of Beetroot',
    heroImage: '/turnkey-brochures/images/beetroot-gallery/beetroot_juice_hero_banner.webp',
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
      image: '/turnkey-brochures/images/3_beetroot.webp',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.webp',
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
      { name: 'Beetroot Washing Machine', image: '/turnkey-brochures/images/beetroot-gallery/washing-machine.webp', desc: 'Heavy-duty rotary drum and spray washer designed to remove soil, mud, and external debris from raw harvested beetroots.' },
      { name: 'Sorting Conveyor', image: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.webp', desc: 'Ergonomic conveyor belt with speed control for inspecting and grading beetroots, rejecting damaged or irregular roots.' },
      { name: 'Beetroot Crusher', image: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.webp', desc: 'High-speed disintegration mill that crushes whole peeled beetroots into a fine pulp slurry to facilitate extraction.' },
      { name: 'Juice Extractor', image: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.webp', desc: 'Continuous screw press system designed to extract juice from pulp efficiently under gentle pressure.' },
      { name: 'Filtration System', image: '/turnkey-brochures/images/beetroot-gallery/filtration-system.webp', desc: 'Clarity filtration or centrifugal separator system that removes solid particulate matter and fibre from beetroot juice.' },
      { name: 'Bottle Filling & Packaging Machine', image: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.webp', desc: 'Fully automatic rotary hot-fill bottling or aseptic carton packaging line equipped with capping and labeling attachments.' }
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
      { src: '/turnkey-brochures/images/3_beetroot.webp', caption: 'Beetroot Juice Processing Plant Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/washing-machine.webp', caption: 'Beetroot Washing Operation' },
      { src: '/turnkey-brochures/images/beetroot-gallery/sorting-conveyor.webp', caption: 'Beetroot Sorting & Inspection' },
      { src: '/turnkey-brochures/images/beetroot-gallery/beetroot-crusher.webp', caption: 'Beetroot Crusher Process' },
      { src: '/turnkey-brochures/images/beetroot-gallery/juice-extractor.webp', caption: 'Beetroot Juice Extraction' },
      { src: '/turnkey-brochures/images/beetroot-gallery/filtration-system.webp', caption: 'Juice Clarification & Filtration' },
      { src: '/turnkey-brochures/images/beetroot-gallery/bottle-filling-packaging.webp', caption: 'Automated Bottling & Packaging Line' }
    ]
  },
  'turmeric-powder-processing-plant': {
    title: 'Turmeric Powder Processing Plant',
    badge: 'TURNKEY TURMERIC POWDER PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Washing, Boiling, Drying, Cryogenic Grinding, Sieving And Packaging Of Turmeric',
    heroImage: '/turnkey-brochures/images/hero-banners/turmeric_powder_hero.webp',
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
      image: '/turnkey-brochures/images/4_turmeric.webp',
      photoImage: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.webp',
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
      { name: 'Drum Washing System', image: '/turnkey-brochures/images/turmeric-gallery/drum_washing_system.webp', desc: 'High-capacity rotary drum washer with multi-stage high-pressure jet nozzles.' },
      { name: 'Steam Curing Kettle', image: '/turnkey-brochures/images/turmeric-gallery/steam_curing_kettle.webp', desc: 'Stainless steel steam-jacketed curing vessel with automatic tilting discharge.' },
      { name: 'Continuous Belt Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.webp', desc: 'Multi-layer continuous belt dryer with temperature control and air recirculators.' },
      { name: 'Impact Crusher', image: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.webp', desc: 'Heavy-duty impact crusher that breaks cured turmeric roots into coarse granules.' },
      { name: 'Micro Pulverizer', image: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.webp', desc: 'High-speed fine grinding pin mill with ambient air cooling or liquid nitrogen cooling.' },
      { name: 'FFS Packaging Machine', image: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.webp', desc: 'Vertical form-fill-seal packing line equipped with nitrogen flush and auger dosing.' }
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
      { src: '/turnkey-brochures/images/4_turmeric.webp', caption: 'Turmeric Processing Plant Layout' },
      { src: '/turnkey-brochures/images/turmeric-gallery/drum_washing_system.webp', caption: 'Drum Washing System for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/steam_curing_kettle.webp', caption: 'Steam Curing Kettle for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.webp', caption: 'Continuous Belt Dryer for Turmeric' },
      { src: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.webp', caption: 'Impact Crusher — Turmeric Crushing Station' },
      { src: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.webp', caption: 'Micro Pulverizer — Fine Grinding Unit' },
      { src: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.webp', caption: 'FFS Packaging Machine — Turmeric Powder Packing' }
    ]
  },
  'honey-processing-bottling-plant': {
    title: 'Honey Processing & Bottling Plant',
    badge: 'TURNKEY HONEY PROCESSING SOLUTION',
    subtitle: 'Complete Processing, Filtration, Moisture Extraction And Packaging Lines For Honey Products',
    heroImage: '/turnkey-brochures/images/honey-gallery/honey_hero.webp',
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
      image: '/turnkey-brochures/images/5_honey.webp',
      photoImage: '/turnkey-brochures/images/honey-gallery/piston_filler.webp',
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
      { name: 'Drum Liquefaction Chamber', image: '/turnkey-brochures/images/honey-gallery/drum_liquefaction.webp', desc: 'Insulated hot-water circulation chamber designed to melt raw crystallised honey.' },
      { name: 'Plate Pre-Heater', image: '/turnkey-brochures/images/honey-gallery/plate_preheater.webp', desc: 'SS316L heat exchanger to lower viscosity before fine filtration.' },
      { name: 'Duplex Fine Filter', image: '/turnkey-brochures/images/honey-gallery/duplex_filter.webp', desc: 'Dual stainless steel filters operating in parallel for continuous wax separation.' },
      { name: 'Vacuum Moisture Reducer', image: '/turnkey-brochures/images/honey-gallery/vacuum_reducer.webp', desc: 'Low-temperature vacuum evaporator to reduce moisture content below 18%.' },
      { name: 'Piston Bottle Filler', image: '/turnkey-brochures/images/honey-gallery/piston_filler.webp', desc: 'Automatic piston filling machine with drip-free nozzles for sticky liquids.' },
      { name: 'Labeling Conveyor Line', image: '/turnkey-brochures/images/honey-gallery/labeling_line.webp', desc: 'High-speed flat conveyor belt with automatic side-label applicator.' }
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
      { src: '/turnkey-brochures/images/5_honey.webp', caption: 'Honey Processing & Bottling Plant Layout' },
      { src: '/turnkey-brochures/images/honey-gallery/drum_liquefaction.webp', caption: 'Drum Liquefaction Chamber' },
      { src: '/turnkey-brochures/images/honey-gallery/plate_preheater.webp', caption: 'Plate Pre-Heater Unit' },
      { src: '/turnkey-brochures/images/honey-gallery/duplex_filter.webp', caption: 'Duplex Fine Filtration Skids' },
      { src: '/turnkey-brochures/images/honey-gallery/vacuum_reducer.webp', caption: 'Vacuum Moisture Reducer' },
      { src: '/turnkey-brochures/images/honey-gallery/piston_filler.webp', caption: 'Piston Bottle Filler Line' },
      { src: '/turnkey-brochures/images/honey-gallery/labeling_line.webp', caption: 'Labeling & Packing Conveyor' }
    ]
  },
  'dates-processing-packing-plant': {
    title: 'Dates Processing & Packing Plant',
    badge: 'TURNKEY DATES PROCESSING SOLUTION',
    subtitle: 'Industrial Lines For Cleaning, Washing, Pitting, De-Seeding, Drying, Grading And Vacuum Packing of Dates',
    heroImage: '/turnkey-brochures/images/dates-gallery/dates_hero.webp',
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
      image: '/turnkey-brochures/images/6_dates.webp',
      photoImage: '/turnkey-brochures/images/dates-gallery/pitting_machine.webp',
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
      { name: 'Bubble Washing System', image: '/turnkey-brochures/images/dates-gallery/bubble_washer.webp', desc: 'Food-grade washing bath with bottom air injection manifolds.' },
      { name: 'Polishing & Brushing Drum', image: '/turnkey-brochures/images/dates-gallery/polishing_drum.webp', desc: 'Rotating drum lined with soft brushes and oil spray nozzles.' },
      { name: 'Dates Pitting Machine', image: '/turnkey-brochures/images/dates-gallery/pitting_machine.webp', desc: 'Piston-driven needle de-seeding system with separated seed chute.' },
      { name: 'Dates Drying Conveyor', image: '/turnkey-brochures/images/dates-gallery/drying_conveyor.webp', desc: 'Continuous hot-air conveyor dryer designed to dry dates uniformly.' },
      { name: 'Vacuum Sealing Line', image: '/turnkey-brochures/images/dates-gallery/vacuum_sealer.webp', desc: 'Industrial multi-chamber vacuum sealer for plastic pouches and trays.' },
      { name: 'Grading Conveyor Belt', image: '/turnkey-brochures/images/dates-gallery/grading_conveyor.webp', desc: 'Ergonomic conveyor belt with collection channels for sorted grades.' }
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
      { src: '/turnkey-brochures/images/6_dates.webp', caption: 'Dates Processing Plant Layout' },
      { src: '/turnkey-brochures/images/dates-gallery/bubble_washer.webp', caption: 'Bubble Washing System' },
      { src: '/turnkey-brochures/images/dates-gallery/polishing_drum.webp', caption: 'Polishing & Brushing Drum' },
      { src: '/turnkey-brochures/images/dates-gallery/pitting_machine.webp', caption: 'Dates Pitting Machine' },
      { src: '/turnkey-brochures/images/dates-gallery/drying_conveyor.webp', caption: 'Dates Drying Conveyor' },
      { src: '/turnkey-brochures/images/dates-gallery/vacuum_sealer.webp', caption: 'Vacuum Sealing Line' },
      { src: '/turnkey-brochures/images/dates-gallery/grading_conveyor.webp', caption: 'Grading Conveyor Belt' }
    ]
  },
  'petroleum-jelly-manufacturing-plant': {
    title: 'Petroleum Jelly Manufacturing Plant',
    badge: 'TURNKEY CHEMICAL & PHARMA SOLUTION',
    subtitle: 'Melting, Blending, Micro-filtration And Jar Filling Lines For Cosmetic and Pharmaceutical Grade Petroleum Jelly',
    heroImage: '/turnkey-brochures/images/petrojelly-gallery/petrojelly_hero.webp',
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
      image: '/turnkey-brochures/images/7_petrolium_jelly.webp',
      photoImage: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.webp',
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
      { name: 'Wax Melting Vessel', image: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.webp', desc: 'Steam-jacketed vessel with slow agitator for melting paraffin block bases.' },
      { name: 'Vacuum Emulsifier Tank', image: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.webp', desc: 'High-shear homogenizing mixer with vacuum pump and contra-rotation scrapers.' },
      { name: 'Jacketed Filtration Skid', image: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.webp', desc: 'Heated cartridge filter housing to clarify raw molten petroleum jelly.' },
      { name: 'Molten Jelly Filler', image: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.webp', desc: 'Heat-traced volumetric dosing machine with anti-drip filling nozzles.' },
      { name: 'Cooling Conveyor Tunnel', image: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.webp', desc: 'Multi-pass insulated tunnel circulating chilled air for jelly setting.' },
      { name: 'Induction Bottle Sealer', image: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.webp', desc: 'Automatic electromagnetic induction sealer applying lids to jars.' }
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
      { src: '/turnkey-brochures/images/7_petrolium_jelly.webp', caption: 'Petroleum Jelly Plant Layout' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/wax_melter.webp', caption: 'Wax Melting Vessel' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/vacuum_emulsifier.webp', caption: 'Vacuum Emulsifier Tank' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/filtration_skid.webp', caption: 'Jacketed Filtration Skid' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/jelly_filler.webp', caption: 'Molten Jelly Filler' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/cooling_tunnel.webp', caption: 'Cooling Conveyor Tunnel' },
      { src: '/turnkey-brochures/images/petrojelly-gallery/bottle_sealer.webp', caption: 'Induction Bottle Sealer' }
    ]
  },
  'jackfruit-canning-retort-line': {
    title: 'Jackfruit Canning & Retort Line',
    badge: 'TURNKEY FRUIT CANNING SOLUTION',
    subtitle: 'Peeling, Slicing, Syrup Staging, Can Filling, Seaming And Retort Sterilization Lines For Jackfruit',
    heroImage: '/turnkey-brochures/images/jackfruit-gallery/jackfruit_canning_hero_banner.webp',
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
      image: '/turnkey-brochures/images/8_jackfruit.webp',
      photoImage: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.webp',
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
      { name: 'Continuous Belt Blancher', image: '/turnkey-brochures/images/jackfruit-gallery/belt_blancher.webp', desc: 'Hot-water blanching chamber with VFD mesh conveyor belt.' },
      { name: 'Syrup Prep Vessel', image: '/turnkey-brochures/images/jackfruit-gallery/syrup_vessel.webp', desc: 'Steam-jacketed sugar dissolution tank with high-speed agitator.' },
      { name: 'Can Rotary Filler', image: '/turnkey-brochures/images/jackfruit-gallery/can_filler.webp', desc: 'Sanitary volumetric bulb and syrup filler for standard tin cans.' },
      { name: 'Automatic Can Seamer', image: '/turnkey-brochures/images/jackfruit-gallery/can_seamer.webp', desc: 'Heavy-duty can seamer applying double-seam vacuum lids.' },
      { name: 'Retort Autoclave Sterilizer', image: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.webp', desc: 'Horizontal steam autoclave sterilizer with PLC record loggers.' },
      { name: 'Latex Spray Washer', image: '/turnkey-brochures/images/jackfruit-gallery/latex_washer.webp', desc: 'Conveyor wash cabin with high-pressure fan sprayers.' }
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
      { src: '/turnkey-brochures/images/8_jackfruit.webp', caption: 'Jackfruit Canning & Retort Plant Layout' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/belt_blancher.webp', caption: 'Continuous Belt Blancher' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/syrup_vessel.webp', caption: 'Syrup Prep Vessel' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/can_filler.webp', caption: 'Can Rotary Filler' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/can_seamer.webp', caption: 'Automatic Can Seamer' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/retort_autoclave.webp', caption: 'Retort Autoclave Sterilizer' },
      { src: '/turnkey-brochures/images/jackfruit-gallery/latex_washer.webp', caption: 'Latex Spray Washer' }
    ]
  },
  'mayonnaise-processing-plant': {
    title: 'Mayonnaise Processing Plant',
    badge: 'TURNKEY MAYONNAISE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solutions for Industrial Mayonnaise Manufacturing, Processing & Packaging',
    heroImage: '/turnkey-brochures/images/mayonnaise_card.webp',
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
      image: '/turnkey-brochures/images/mayonnaise_card.webp',
      photoImage: '/turnkey-brochures/images/mayonnaise_card.webp',
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
      image: '/turnkey-brochures/images/9_pasta_making.webp',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp',
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
      { name: 'Flour Sifter Conveyor', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Vibratory flour sifting hopper with screw elevator loader.' },
      { name: 'Vacuum Extruder Press', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'Sanitary extruder with cooled barrel and quick-change dies.' },
      { name: 'Vibratory Pre-Dryer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Shaking tray pre-dryer utilizing hot air blast nozzles.' },
      { name: 'Multi-Pass Tunnel Dryer', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'Enclosed convective tunnel dryer with temperature and humidity control.' },
      { name: 'Multi-Head Weigher Filler', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: '14-head rotary combination scale with automatic drop chute.' },
      { name: 'Horizontal Flow Wrapper', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-speed pillow bag packaging line with print registration sensors.' }
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
      { src: '/turnkey-brochures/images/9_pasta_making.webp', caption: 'Pasta Production Line Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', caption: 'Semolina Flour Intake Elevators' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.webp', caption: 'Vacuum Extruder Head & Dies' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', caption: 'Shaker Pre-Dryer Platform' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', caption: 'Multi-Pass Drying Chambers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', caption: 'Multi-Head Combination Weighers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', caption: 'High-Speed Flow Packaging Line' }
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
      image: '/turnkey-brochures/images/10_peanut_butter.webp',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp',
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
      { name: 'Rotary Hot-Air Roaster', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Batch or continuous hot-air roaster with temperature profiling.' },
      { name: 'Conveyor Cooling Bed', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Suction fan mesh conveyor designed to cool peanuts rapidly.' },
      { name: 'Peanut Skin Blancher', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'Abrasive rubber roller peeler with integrated dust collector.' },
      { name: 'High-Shear Colloid Mill', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'Water-cooled micronizing mill for producing fine nut pastes.' },
      { name: 'Jacketed Vacuum Mixer', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'Heated mixing vessel equipped with scraping blades and vacuum pump.' },
      { name: 'Volumetric Jar Filler', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Volumetric piston filling machine with cut-off nozzle for thick pastes.' }
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
      { src: '/turnkey-brochures/images/10_peanut_butter.webp', caption: 'Peanut Butter Processing Plant Layout' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', caption: 'Rotary Peanut Roasting Station' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', caption: 'Nuts Air Cooling Bed' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', caption: 'Abrasive Roller Blanchers' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.webp', caption: 'Colloid Grinding Mills' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', caption: 'Jacketed Vacuum Blending Reactor' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', caption: 'Volumetric Glass Jar Bottling' }
    ]
  },
  'ginger-garlic-paste-plant': {
    title: 'Ginger Garlic Paste Plant',
    badge: 'TURNKEY GINGER GARLIC PASTE SOLUTION',
    subtitle: 'Complete Turnkey Lines For Peeling, Washing, Grinding, Blending, Pasteurization And Packaging Of Ginger Garlic Paste',
    heroImage: '/turnkey-brochures/images/11_ginger_garlic_plant.webp',
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
      image: '/turnkey-brochures/images/11_ginger_garlic_plant.webp',
      photoImage: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp',
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
      { name: 'Rotary Root Washer', image: '/turnkey-brochures/images/beetroot-gallery/washing-machine.webp', desc: 'Heavy-duty rotary drum washer with multi-stage high-pressure spray nozzles for thorough root cleaning.' },
      { name: 'Abrasive Peeler', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Carborundum drum peeler with water spray for continuous high-capacity ginger and garlic skin removal.' },
      { name: 'Colloid Grinding Mill', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-shear water-cooled colloid mill producing uniformly fine paste at controlled temperatures.' },
      { name: 'Jacketed Blending Vessel', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'SS316L jacketed reactor with contra-rotating agitator for homogeneous paste blending under vacuum.' },
      { name: 'Plate Pasteurizer', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Sanitary plate heat exchanger skid with PLC temperature and dwell-time monitoring and logging.' },
      { name: 'Pouch & Jar Filling Line', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Automatic piston filler with nitrogen-flush and sealing station for pouches, jars, and stand-up bags.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/11_ginger_garlic_plant.webp', caption: 'Ginger Garlic Paste Plant Overview' },
      { src: '/turnkey-brochures/images/beetroot-gallery/washing-machine.webp', caption: 'Root Washing & Cleaning Station' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', caption: 'Abrasive Drum Peeling Unit' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', caption: 'Jacketed Blending & Mixing Vessels' },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', caption: 'Plate Pasteurizer Skid' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', caption: 'Automated Pouch Filling Line' }
    ]
  },
  'black-pepper-powder-line': {
    title: 'Black Pepper Powder Line',
    badge: 'TURNKEY BLACK PEPPER POWDER SOLUTION',
    subtitle: 'Complete Turnkey Line For Cleaning, Drying, Cryogenic Grinding, Sieving And Packaging Of Black Pepper Powder',
    heroImage: '/turnkey-brochures/images/12_blank_pepper_powder.webp',
    overview: {
      title: 'Complete Black Pepper Processing Solution',
      p1: 'Salvin Industries\' Black Pepper Powder Line is a premium turnkey solution engineered to preserve the volatile piperine content, aroma, and distinctive colour of black pepper throughout the milling process. Our integrated lines take raw cleaned berries through controlled drying, cryogenic grinding, and air-classified sieving.',
      p2: 'Volatile oil retention is critical in black pepper processing. Our cryogenic grinding systems use liquid nitrogen to keep chamber temperatures below −20°C during milling, preventing thermal degradation of piperine and essential oils. Inline metal detection and dust-free FFS packaging ensure the finished product meets international spice quality benchmarks.',
      highlights: [
        { title: 'Turnkey Delivery', desc: 'Design → Manufacture → Install → Commission → Train' },
        { title: 'OEE Optimised', desc: '85%+ Overall Equipment Effectiveness target' },
        { title: 'Global Standards', desc: 'FSSAI, FDA, CE, ISO 22000 compliant designs' }
      ],
      image: '/turnkey-brochures/images/12_blank_pepper_powder.webp',
      photoImage: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.webp',
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
      { name: 'Vibrating Screen Cleaner', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.webp', desc: 'Multi-deck vibrating screen with integrated aspiration hood for cleaning raw pepper berries.' },
      { name: 'Continuous Belt Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.webp', desc: 'Multi-pass hot air belt dryer with temperature and humidity monitoring sensors.' },
      { name: 'Impact Pre-Crusher', image: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.webp', desc: 'Heavy-duty impact crusher for reducing dried whole pepper berries into coarse flakes.' },
      { name: 'Cryogenic Pin Mill', image: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.webp', desc: 'Liquid nitrogen-cooled pulveriser maintaining sub-zero grinding temperatures to protect volatile oils.' },
      { name: 'Multi-Deck Rotary Sifter', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'High-frequency vibratory sifter classifying powder into precisely controlled mesh size bands.' },
      { name: 'FFS Packaging Machine', image: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.webp', desc: 'Vertical form-fill-seal packaging line with nitrogen flush and inline checkweigher.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/12_blank_pepper_powder.webp', caption: 'Black Pepper Powder Line Overview' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.webp', caption: 'Pepper Cleaning & Aspiration Station' },
      { src: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.webp', caption: 'Controlled Belt Drying Section' },
      { src: '/turnkey-brochures/images/turmeric-gallery/impact_crusher.webp', caption: 'Impact Pre-Crusher Unit' },
      { src: '/turnkey-brochures/images/turmeric-gallery/micro_pulverizer.webp', caption: 'Cryogenic Pin Mill Grinder' },
      { src: '/turnkey-brochures/images/turmeric-gallery/ffs_packaging_machine.webp', caption: 'FFS Nitrogen-Flush Packaging Line' }
    ]
  },
  'seed-cleaning-sorting-line': {
    title: 'Seed Cleaning & Sorting Line',
    badge: 'TURNKEY SEED CLEANING SOLUTION',
    subtitle: 'Complete Turnkey Multi-Stage Aspiration, Destoning, Grading, Optical Sorting And Packaging Lines For Seeds',
    heroImage: '/turnkey-brochures/images/13_seed_cleaning_sorting.webp',
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
      image: '/turnkey-brochures/images/13_seed_cleaning_sorting.webp',
      photoImage: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.webp',
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
      { name: 'Pre-Cleaner Aspirator', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.webp', desc: 'Centrifugal aspiration unit with adjustable air velocity for removing dust and chaff from raw seeds.' },
      { name: 'Multi-Deck Vibrating Screen', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.webp', desc: 'Heavy-duty two or three deck vibrating screen for classifying seeds into size fractions.' },
      { name: 'Gravity Destoner', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Specific gravity table that separates heavy stone or clay particles from the cleaned seed flow.' },
      { name: 'Optical Colour Sorter', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-speed CCD camera sorter with air-jet ejectors for removing off-colour or damaged seeds.' },
      { name: 'Fluidised Bed Dryer', image: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.webp', desc: 'Gentle hot-air fluid bed dryer for moisture adjustment without cracking or damaging seeds.' },
      { name: 'Automatic Bagging Machine', image: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.webp', desc: 'Multi-head weigher and FFS packaging line for retail pouches and bulk bag filling.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/13_seed_cleaning_sorting.webp', caption: 'Seed Cleaning & Sorting Line Overview' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_cleaning_line.webp', caption: 'Pre-Aspirator Cleaning Station' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_sorting_optical.webp', caption: 'Vibrating Screen Separation Deck' },
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', caption: 'Gravity Destoner Unit' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', caption: 'Optical Colour Sorting Machine' },
      { src: '/turnkey-brochures/images/red-chilli-gallery/chilli_packaging_station.webp', caption: 'Automated Seed Bagging & Packaging' }
    ]
  },
  'automatic-masala-packing-plant': {
    title: 'Automatic Masala Packing Plant',
    badge: 'TURNKEY MASALA PACKING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Masala Processing, Blending & Packaging',
    heroImage: '/turnkey-brochures/images/hero-banners/automatic_masala_hero.webp',
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
      image: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.webp',
      photoImage: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.webp',
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
      { name: 'Ribbon Blender', image: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.webp', desc: 'High-efficiency ribbon blender for precise mixing of various spices and masala powders.' },
      { name: 'Screw Conveyor', image: '/turnkey-brochures/images/automatic-masala-packing-plant/spice_hopper_screw_conveyor.webp', desc: 'Automated screw conveyor for dust-free and hygienic material transfer between processing stages.' },
      { name: 'Vibro Sifter', image: '/turnkey-brochures/images/automatic-masala-packing-plant/vibro_sifter.webp', desc: 'High-capacity vibro sifter for screening and removing oversized particles from the blended masala.' },
      { name: 'Storage Hopper', image: '/turnkey-brochures/images/automatic-masala-packing-plant/transfer_hopper.webp', desc: 'Stainless steel storage hopper designed to safely hold processed powder before final packaging.' },
      { name: 'Multihead Weigher', image: '/turnkey-brochures/images/automatic-masala-packing-plant/weighing_dosing.webp', desc: 'High-precision multihead weighing system ensuring accurate filling weight for every pouch.' },
      { name: 'Automatic Packaging Machine', image: '/turnkey-brochures/images/automatic-masala-packing-plant/packaging_machine.webp', desc: 'Fully automated Form-Fill-Seal (FFS) packaging machine for high-speed packing into pouches.' }
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
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/spice_hopper_screw_conveyor.webp', caption: 'Spice Hopper Bin & Screw Conveyor' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/transfer_hopper.webp', caption: 'Transfer Hopper' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/ribbon_blender.webp', caption: 'Ribbon Blender Mixing System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/vibro_sifter.webp', caption: 'Vibro Sifter Screening System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/weighing_dosing.webp', caption: 'Automatic Weighing & Dosing System' },
      { src: '/turnkey-brochures/images/automatic-masala-packing-plant/packaging_machine.webp', caption: 'Automatic Masala Packaging Machine' }
    ]
  },
  'fully-automated-ors-plant': {
    title: 'ORS Processing Plant',
    badge: 'TURNKEY ORS PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Processing, Blending & Packaging Oral Rehydration Salts',
    heroImage: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.webp',
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
      image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.webp',
      photoImage: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.webp',
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
      { name: 'Raw Material Receiving & Storage System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.webp', desc: 'Hygienic SS316L bulk receiving and storage tanks for primary ingredients.' },
      { name: 'Automatic Weighing & Ingredient Dosing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_dosing.webp', desc: 'Precision load-cell dosing ensures exact WHO formulation ratios.' },
      { name: 'Ribbon Blender Mixing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_blender.webp', desc: 'High-efficiency ribbon blender designed for homogeneous mixing of delicate crystals.' },
      { name: 'Powder Homogenizer', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_homogenizer.webp', desc: 'Advanced homogenizer to maintain uniform particle distribution before packing.' },
      { name: 'Quality Inspection & Testing System', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_inspection.webp', desc: 'Integrated laboratory and end-of-line inspection to ensure product safety.' },
      { name: 'Automatic ORS Sachet Packaging Machine', image: '/turnkey-brochures/images/fully-automated-ors-plant/ors_packaging.webp', desc: 'High-speed VFFS machine optimized for 21.8g ORS sachet filling.' }
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
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_raw_material.webp', caption: 'Raw Material Receiving & Storage' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_dosing.webp', caption: 'Automatic Weighing & Dosing System' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_blender.webp', caption: 'Ribbon Blender Mixing System' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_homogenizer.webp', caption: 'Powder Homogenizer' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_inspection.webp', caption: 'Quality Inspection & Testing' },
      { src: '/turnkey-brochures/images/fully-automated-ors-plant/ors_packaging.webp', caption: 'Automatic ORS Sachet Packaging' }
    ]
  },
  'pickle-processing-and-packaging-plant': {
    title: 'Pickle Processing & Packaging Plant',
    badge: 'TURNKEY PICKLE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solution for Fruit & Vegetable Pickle Processing, Brining, and Packaging',
    heroImage: '/turnkey-brochures/images/pickle-processing-plant/pickle_plant_hero.webp',
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
      image: '/turnkey-brochures/images/pickle-processing-plant/pickle_infographic.webp',
      photoImage: '/turnkey-brochures/images/pickle-processing-plant/pickle_infographic.webp',
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
      { name: 'Raw Material Washing Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_washing.webp', desc: 'High-efficiency fruit and vegetable washing system with water jets.' },
      { name: 'Sorting & Inspection Conveyor', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_sorting.webp', desc: 'Ergonomic conveyor system for manual grading and defect removal.' },
      { name: 'Automatic Cutting / Slicing Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_cutting.webp', desc: 'High-capacity dicer and slicer for uniform produce preparation.' },
      { name: 'Spice Mixing & Blending System', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_mixing.webp', desc: 'Ribbon or paddle blenders for homogeneous spice and oil coating.' },
      { name: 'Pickle Maturation & Brining Tank System', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_brining.webp', desc: 'SS316L tanks for controlled curing and brine maturation.' },
      { name: 'Automatic Pickle Filling & Packaging Machine', image: '/turnkey-brochures/images/pickle-processing-plant/pickle_packaging.webp', desc: 'Accurate and hygienic filling lines for glass jars or PET bottles.' }
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
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_washing.webp', caption: 'Raw Material Washing Machine' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_sorting.webp', caption: 'Sorting & Inspection Conveyor' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_cutting.webp', caption: 'Automatic Cutting / Slicing Machine' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_mixing.webp', caption: 'Spice Mixing & Blending System' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_brining.webp', caption: 'Pickle Maturation & Brining Tank System' },
      { src: '/turnkey-brochures/images/pickle-processing-plant/pickle_packaging.webp', caption: 'Automatic Pickle Filling & Packaging Machine' }
    ]
  },
  'milk-powder-processing-packaging-plant': {
    title: 'Milk Powder Processing & Packaging Plant',
    badge: 'TURNKEY MILK POWDER SOLUTION',
    subtitle: 'Complete Turnkey Line From Raw Milk Reception To Spray Drying And Powder Packaging',
    heroImage: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_hero_banner.webp',
    heroStyle: { backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'milk powder.pdf',
    overview: {
      title: 'Complete Milk Powder Plant',
      p1: 'Salvin Industries\' Milk Powder Processing & Packaging Plant is an advanced, fully automated turnkey solution engineered for producing high-quality milk powder. Our integrated lines handle everything from raw milk reception and standardization to evaporation, spray drying, and aseptic packaging.',
      p2: 'Built in compliance with international food safety and dairy standards, our systems ensure precise temperature control, optimal moisture content, and high solubility of the final powder while maximizing energy efficiency and product yield.',
      image: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_infographic.webp',
      photoImage: '/turnkey-brochures/images/milk-powder-processing-plant/milk_powder_infographic.webp',
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
      { name: 'Raw Milk Storage Tank', image: '/turnkey-brochures/images/milk-powder-processing-plant/raw_milk_storage.webp', desc: 'Insulated stainless steel silos for maintaining raw milk quality.' },
      { name: 'Filtration & Clarification System', image: '/turnkey-brochures/images/milk-powder-processing-plant/filtration_clarification.webp', desc: 'Advanced centrifugal clarification to remove physical impurities.' },
      { name: 'Milk Standardization System', image: '/turnkey-brochures/images/milk-powder-processing-plant/milk_standardization.webp', desc: 'Precise inline fat standardization for consistent product composition.' },
      { name: 'Pasteurization Unit', image: '/turnkey-brochures/images/milk-powder-processing-plant/pasteurization_system.webp', desc: 'High-Temperature Short-Time (HTST) pasteurizer with heat recovery.' },
      { name: 'Evaporation & Spray Drying', image: '/turnkey-brochures/images/milk-powder-processing-plant/evaporation_spray_drying.webp', desc: 'Multi-effect falling film evaporator and highly efficient spray dryer.' },
      { name: 'Automatic Powder Packing Machine', image: '/turnkey-brochures/images/milk-powder-processing-plant/automatic_powder_packing.webp', desc: 'Hygienic and accurate form-fill-seal packaging for milk powder.' }
    ],
    applications: [
      { title: 'Whole Milk Powder', desc: 'Full-fat powder for direct consumption and culinary use.' },
      { title: 'Skimmed Milk Powder', desc: 'Low-fat powder ideal for bakery, confectionery, and beverages.' },
      { title: 'Infant Formula', desc: 'Highly specialized nutritional powder for infant consumption.' },
      { title: 'Dairy Ingredients', desc: 'Base powders for chocolates, ice creams, and processed foods.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/raw_milk_storage.webp', caption: 'Raw Milk Reception & Storage Tank' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/filtration_clarification.webp', caption: 'Filtration & Clarification Unit' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/milk_standardization.webp', caption: 'Milk Standardization System' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/pasteurization_system.webp', caption: 'Pasteurization System' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/evaporation_spray_drying.webp', caption: 'Multi-Effect Evaporator & Spray Dryer' },
      { src: '/turnkey-brochures/images/milk-powder-processing-plant/automatic_powder_packing.webp', caption: 'Automatic Powder Packing Machine' }
    ]
  },
  'economical-kurkure-making-plant': {
    title: 'Economical Kurkure Making Plant',
    badge: 'TURNKEY SNACK PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Economical Kurkure Production',
    workflowTitle: 'Economical Kurkure Plant',
    workflowAccentTitle: 'Processing Workflow',
    isPdf: true,
    heroImage: '/turnkey-brochures/images/economical-kurkure-plant/hero_economical_kurkure.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'kurkure.pdf',
    stats: { capacity: '100 Kg–500 Kg', stages: '7 Stage', efficiency: '98%', support: '24/7' },
    overview: {
      title: 'Complete Economical Kurkure Plant',
      p1: 'Salvin Industries\' Economical Kurkure Making Plant provides an efficient and high-quality processing solution for extruded snacks. The line covers everything from raw material feeding to continuous frying and automated pouch packaging.',
      p2: 'Built for precision and uniform taste, our advanced equipment ensures the right crunch, texture, and flavor coating, maximizing production efficiency while minimizing operational costs.',
      highlights: [
        { title: 'High Efficiency', desc: 'Optimized continuous frying and extrusion.' },
        { title: 'Uniform Flavoring', desc: 'Consistent seasoning for every batch.' },
        { title: 'Hygienic Operation', desc: 'Food-grade stainless steel construction.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/economical-kurkure-plant/kurkure_hero_overview.webp',
      photoImage: '/turnkey-brochures/images/economical-kurkure-plant/kurkure_hero_overview.webp',
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
      { name: 'Raw Material Storage & Feeding System', image: '/turnkey-brochures/images/economical-kurkure-plant/raw_material_feeding.webp', desc: 'Automated silos and feeders for continuous raw material supply.' },
      { name: 'Continuous Dough Mixer', image: '/turnkey-brochures/images/economical-kurkure-plant/dough_mixer.webp', desc: 'High-speed mixer for uniform hydration of corn meal.' },
      { name: 'Kurkure Extruder Machine', image: '/turnkey-brochures/images/economical-kurkure-plant/extrusion_forming.webp', desc: 'Precision extruder for shaping and expanding the snack.' },
      { name: 'Continuous Frying System', image: '/turnkey-brochures/images/economical-kurkure-plant/continuous_fryer.webp', desc: 'Advanced fryer with continuous oil filtration and temperature control.' },
      { name: 'Flavoring & Seasoning Drum', image: '/turnkey-brochures/images/economical-kurkure-plant/seasoning_drum.webp', desc: 'Rotary drum with automated powder applicator for even coating.' },
      { name: 'Automatic Pouch Packing Machine', image: '/turnkey-brochures/images/economical-kurkure-plant/packing_machine.webp', desc: 'High-speed vertical FFS machine with multi-head weighers.' }
    ],
    applications: [
      { title: 'Masala Kurkure', desc: 'Spicy Indian flavored extruded snacks.' },
      { title: 'Tomato Tangy Curls', desc: 'Sweet and sour tomato flavored curls.' },
      { title: 'Cheese Puffs', desc: 'Cheese flavored extruded snacks.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/economical-kurkure-plant/kurkure_hero_overview.webp', caption: 'Economical Kurkure Making Plant' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/raw_material_feeding.webp', caption: 'Raw Material Storage & Feeding System' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/dough_mixer.webp', caption: 'Continuous Dough Mixer' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/extrusion_forming.webp', caption: 'Kurkure Extruder Machine' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/continuous_fryer.webp', caption: 'Continuous Frying System' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/seasoning_drum.webp', caption: 'Flavoring & Seasoning Drum' },
      { src: '/turnkey-brochures/images/economical-kurkure-plant/packing_machine.webp', caption: 'Automatic Pouch Packing Machine' }
    ]
  },
  'protein-powder-production-plant': {
    title: 'Protein Powder Production Plant',
    badge: 'TURNKEY POWDER PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Protein Powder Manufacturing',
    heroImage: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    workflowTitle: 'Protein Powder Plant',
    workflowAccentTitle: 'Workflow',

    stats: { capacity: '500 Kg–5 Ton', stages: '7 Stage', efficiency: '99%', support: '24/7' },
    overview: {
      title: 'Complete Protein Powder Production Plant',
      p1: 'Salvin Industries\' Protein Powder Production Plant is an advanced turnkey solution designed for the large-scale manufacturing of high-quality nutritional powders. It encompasses everything from raw material handling to fine blending, homogenization, drying, and fully automated packaging.',
      p2: 'Built with stringent food safety and GMP compliance in mind, the plant utilizes SS304/SS316 food-grade materials. Its precision-engineered components ensure uniform particle size, excellent solubility, and a consistent nutritional profile for every batch.',
      highlights: [
        { title: 'GMP Compliant', desc: 'Designed for strict food safety standards.' },
        { title: 'Uniform Blending', desc: 'Ensures consistent flavor and nutrition.' },
        { title: 'High Yield', desc: 'Optimized for maximum product recovery.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.webp',
      photoImage: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.webp',
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
      { name: 'Raw Material Handling System', image: '/turnkey-brochures/images/protein-powder-production-plant/raw-material-handling-system.webp', desc: 'Automated intake and storage silos equipped with precise load cells.' },
      { name: 'Vibratory Sifter', image: '/turnkey-brochures/images/protein-powder-production-plant/vibratory-sifter.webp', desc: 'Multi-deck sifting unit to ensure product purity and consistency.' },
      { name: 'Ribbon Blender', image: '/turnkey-brochures/images/protein-powder-production-plant/ribbon-blender.webp', desc: 'Heavy-duty industrial blender for homogeneous mixing of dry powders.' },
      { name: 'Homogenization Unit', image: '/turnkey-brochures/images/protein-powder-production-plant/homogenization-unit.webp', desc: 'High-shear mixer designed to eliminate clumps and improve solubility.' },
      { name: 'Continuous Fluid Bed Dryer', image: '/turnkey-brochures/images/protein-powder-production-plant/continuous-fluid-bed-dryer.webp', desc: 'Advanced drying system for gentle and uniform moisture removal.' },
      { name: 'Filling Machine', image: '/turnkey-brochures/images/protein-powder-production-plant/filling-machine.webp', desc: 'High-speed auger filler for accurate dosing into jars and pouches.' }
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
      { src: '/turnkey-brochures/images/protein-powder-production-plant/protein-powder-hero.webp', caption: 'Fully Automated Protein Powder Production Plant' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/raw-material-handling-system.webp', caption: 'Raw Material Handling System' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/vibratory-sifter.webp', caption: 'Vibratory Sifter' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/ribbon-blender.webp', caption: 'Ribbon Blender' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/homogenization-unit.webp', caption: 'Homogenization Unit' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/continuous-fluid-bed-dryer.webp', caption: 'Continuous Fluid Bed Dryer' },
      { src: '/turnkey-brochures/images/protein-powder-production-plant/filling-machine.webp', caption: 'Filling Machine' }
    ]
  },

  'biscuit-baking-turnkey': {
    title: 'Biscuit Processing & Packaging Plant',
    badge: 'TURNKEY BISCUIT PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Biscuit Baking Production',
    workflowTitle: 'Biscuit Processing & Packaging Plant',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/biscuit-baking-turnkey/biscuit-hero-banner.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: '500 Kg–5 Ton',
      stages: '7 Stage',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Biscuit Baking Turnkey Plant',
      p1: 'Salvin Industries\' Biscuit Baking Turnkey is a complete, high-efficiency solution designed for large-scale biscuit production. It covers the entire process from raw material receiving and dough mixing to rotary forming, continuous baking, cooling, and automated packaging.',
      p2: 'Engineered for consistent quality and high throughput, the plant features food-grade construction, precise temperature control, and advanced automation to ensure uniform baking and optimal resource utilization.',
      highlights: [
        { title: 'Consistent Quality', desc: 'Precision baking for uniform color and texture.' },
        { title: 'High Efficiency', desc: 'Continuous processing minimizes downtime.' },
        { title: 'Automated Operations', desc: 'Advanced PLCs control the entire baking process.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/31_biskuit_plant.webp',
      photoImage: '/turnkey-brochures/images/31_biskuit_plant.webp',
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
      { name: 'Raw Material Receiving & Storage System', image: '/turnkey-brochures/images/biscuit-baking-turnkey/raw-material-receiving-storage-system.webp', desc: 'Automated silos and sifters for handling bulk flour and sugar.' },
      { name: 'Industrial Dough Mixer', image: '/turnkey-brochures/images/biscuit-baking-turnkey/industrial-dough-mixer.webp', desc: 'Heavy-duty mixer for thorough and consistent dough preparation.' },
      { name: 'Rotary Biscuit Forming Machine', image: '/turnkey-brochures/images/biscuit-baking-turnkey/rotary-biscuit-forming-machine.webp', desc: 'Precision rotary molds for shaping dough into desired biscuit patterns.' },
      { name: 'Continuous Baking Oven', image: '/turnkey-brochures/images/biscuit-baking-turnkey/continuous-baking-oven.webp', desc: 'Multi-zone traveling oven for even baking and moisture control.' },
      { name: 'Cooling Conveyor System', image: '/turnkey-brochures/images/biscuit-baking-turnkey/cooling-conveyor-system.webp', desc: 'Extended conveyor belt system for gradual and uniform cooling.' },
      { name: 'Automatic Flow Wrap Packing Machine', image: '/turnkey-brochures/images/biscuit-baking-turnkey/automatic-flow-wrap-packing-machine.webp', desc: 'High-speed packaging machine for sealing individual or stacked biscuits.' }
    ],
    applications: [
      { title: 'Hard Dough Biscuits', desc: 'Crisp and layered biscuits like Marie and crackers.' },
      { title: 'Soft Dough Biscuits', desc: 'Rich and crumbly cookies and shortbreads.' },
      { title: 'Cream Sandwich Biscuits', desc: 'Biscuits with automated cream filling and sandwiching.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/raw-material-receiving-storage-system.webp', caption: 'Raw Material Receiving & Storage System' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/industrial-dough-mixer.webp', caption: 'Industrial Dough Mixer' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/rotary-biscuit-forming-machine.webp', caption: 'Rotary Biscuit Forming Machine' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/continuous-baking-oven.webp', caption: 'Continuous Baking Oven' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/cooling-conveyor-system.webp', caption: 'Cooling Conveyor System' },
      { src: '/turnkey-brochures/images/biscuit-baking-turnkey/automatic-flow-wrap-packing-machine.webp', caption: 'Automatic Flow Wrap Packing Machine' }
    ]
  },
  'groundnut-chikki-processing-plant': {
    title: 'Groundnut Chikki Processing Plant',
    badge: 'TURNKEY GROUNDNUT CHIKKI PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Groundnut Cleaning, Roasting, Jaggery Preparation, Chikki Mixing, Sheet Forming, Cutting & Packaging',
    workflowTitle: 'Groundnut Chikki Processing Plant',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/hero-banners/groundnut_chikki_hero.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: '100–500 Kg/Hr',
      stages: '7 Stage',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Groundnut Chikki Processing Solution',
      p1: "Salvin Industries' Groundnut Chikki Processing Plant is a fully integrated, high-efficiency turnkey solution engineered for large-scale chikki production. The plant covers the complete process — from raw groundnut receiving, cleaning and grading, through continuous roasting, jaggery syrup preparation, automated mixing, slab sheet forming, precision cutting, cooling and final automated packaging.",
      p2: 'Built with food-grade stainless steel SS304/SS316L throughout, our plant delivers precise caramelisation control, consistent bar weight and dimensions, and high OEE on every shift. Whether you are producing traditional groundnut chikki, sesame chikki or mixed nut brittle, our scalable turnkey solutions are engineered for consistent quality, minimum wastage and full compliance with FSSAI and export market food safety standards.',
      highlights: [
        { title: 'Precise Caramelisation Control', desc: 'Temperature-controlled jaggery syrup ensures perfect snap and texture.' },
        { title: 'High Throughput', desc: 'Continuous automated line from roasting to packaging with minimal downtime.' },
        { title: 'Food-Grade Construction', desc: 'Full SS304/SS316L contact surfaces with CIP-ready design.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-mixing-kettle.webp',
      photoImage: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-mixing-kettle.webp',
      features4: [
        { title: 'Hygienic Design', desc: 'Food-grade SS304/SS316L enclosed construction throughout' },
        { title: 'Precise Temperature Control', desc: 'Consistent caramelisation for perfect chikki snap and texture' },
        { title: 'Uniform Bar Dimensions', desc: 'Precision sheet forming and cutting for consistent product size' },
        { title: 'Automated Packaging', desc: 'High-speed flow-wrap sealing for retail-ready chikki bars' }
      ]
    },
    capacities: [
      { size: '100 Kg/Hr', desc: 'Ideal for artisan and small-scale regional producers.' },
      { size: '200 Kg/Hr', desc: 'Standard capacity for established chikki brands.' },
      { size: '500 Kg/Hr', desc: 'High-volume industrial-scale production for exports.' }
    ],
    features: [
      { title: 'Food Grade Stainless Steel', desc: 'All product contact parts fabricated from SS304/SS316L ensuring strict food hygiene compliance.' },
      { title: 'Precise Jaggery Control', desc: 'Automated temperature and Brix monitoring for consistent syrup concentration and caramelisation.' },
      { title: 'Continuous Roasting System', desc: 'Multi-zone tunnel roaster delivers uniform colour, flavour and moisture removal across every batch.' },
      { title: 'Precision Sheet Forming', desc: 'Automated slab forming and guillotine cutting ensures consistent bar size, weight and appearance.' },
      { title: 'Automated Packaging', desc: 'High-speed flow-wrap or pouch packing machines with date coding for retail-ready output.' },
      { title: 'PLC Automation', desc: 'Centralised HMI control panel with recipe management and real-time process monitoring.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Receiving & Cleaning', desc: 'Incoming raw groundnuts are weighed, inspected and fed through vibratory cleaners and air aspirators to remove stones, dust, and foreign matter.' },
      { id: 2, title: 'Groundnut Roasting', desc: 'Cleaned groundnuts pass through a continuous multi-zone tunnel roaster for uniform hot-air roasting to achieve perfect colour, crunch and flavour.' },
      { id: 3, title: 'Jaggery Syrup Preparation', desc: 'Jaggery blocks are dissolved, filtered and cooked in steam-jacketed kettles with precise temperature and Brix control for consistent caramelisation.' },
      { id: 4, title: 'Chikki Mixing & Blending', desc: 'Roasted groundnuts and hot jaggery syrup are combined in automated mixing kettles to achieve even coating and optimal caramel binding.' },
      { id: 5, title: 'Sheet Forming & Cutting', desc: 'The hot chikki mass is spread into uniform slabs using forming rollers and then precision-cut into bars or squares using automatic guillotine cutting machines.' },
      { id: 6, title: 'Cooling & Setting', desc: 'Cut chikki bars move through controlled cooling conveyors to allow the jaggery to set firmly, achieving the characteristic brittle snap texture.' },
      { id: 7, title: 'Packaging', desc: 'Cooled chikki bars are fed into high-speed flow-wrap or pillow-pack machines for airtight sealing, date coding and retail-ready packaging.' }
    ],
    machinery: [
      { name: 'Groundnut Cleaning & Grading System', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/groundnut-cleaning-grading-system.webp', desc: 'Vibratory cleaning screens and air aspirators remove dust, stones and foreign matter, followed by grading conveyors to size-classify raw groundnuts.' },
      { name: 'Continuous Groundnut Roaster', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/continuous-groundnut-roaster.webp', desc: 'Multi-zone continuous tunnel roaster with precise hot-air temperature control for uniform roasting, consistent colour development and flavour retention.' },
      { name: 'Jaggery Melting & Syrup Preparation System', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/jaggery-melting-syrup-preparation-system.webp', desc: 'Steam-jacketed jaggery melting vessels with automated Brix control and filtration to produce clean, consistent syrup for perfect caramelisation.' },
      { name: 'Chikki Mixing Kettle', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-mixing-kettle.webp', desc: 'Heavy-duty tilting mixing kettles with motorised agitators uniformly coat roasted groundnuts with hot jaggery syrup for consistent binding.' },
      { name: 'Chikki Forming & Cutting Machine', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-forming-cutting-machine.webp', desc: 'Automated slab forming rollers and precision guillotine cutting blades produce uniform chikki bars and squares with consistent dimensions and weight.' },
      { name: 'Automatic Packaging Machine', image: '/turnkey-brochures/images/groundnut-chikki-processing-plant/automatic-packaging-machine.webp', desc: 'High-speed flow-wrap and pillow-pack machines with automatic date coding for airtight, retail-ready chikki bar packaging at high throughput.' }
    ],
    applications: [
      { title: 'Groundnut Chikki', desc: 'Traditional hard-brittle groundnut and jaggery bars in various sizes.' },
      { title: 'Sesame Chikki', desc: 'Sesame seed and jaggery brittle for health food and traditional markets.' },
      { title: 'Mixed Nut Brittle', desc: 'Premium mixed nut and seed brittle for retail and export brands.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/groundnut-cleaning-grading-system.webp', caption: 'Groundnut Cleaning & Grading System' },
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/continuous-groundnut-roaster.webp', caption: 'Continuous Groundnut Roaster' },
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/jaggery-melting-syrup-preparation-system.webp', caption: 'Jaggery Melting & Syrup Preparation System' },
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-mixing-kettle.webp', caption: 'Chikki Mixing Kettle' },
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/chikki-forming-cutting-machine.webp', caption: 'Chikki Forming & Cutting Machine' },
      { src: '/turnkey-brochures/images/groundnut-chikki-processing-plant/automatic-packaging-machine.webp', caption: 'Automatic Packaging Machine' }
    ]
  },
  'cashew-nut-processing-plant': {
    title: 'Cashew Nut Processing Plant',
    badge: 'TURNKEY CASHEW NUT PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Raw Cashew Cleaning, Roasting, Shelling, Drying, Peeling, Grading & Automatic Packaging',
    workflowTitle: 'Cashew Nut Processing Plant',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-nut-hero-banner.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: '200 Kg–2 Ton/Hr',
      stages: '7 Stage',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Cashew Nut Processing Solution',
      p1: "Salvin Industries' Cashew Nut Processing Plant is a fully integrated, high-efficiency turnkey solution engineered for commercial-scale cashew kernel production. The plant covers the complete process — from raw cashew receiving, cleaning and destoning, through continuous roasting or steam cooking, automated shelling, kernel drying, testa peeling, size grading and automated packaging into retail-ready pouches.",
      p2: 'Built with food-grade stainless steel SS304/SS316L throughout, our plant delivers high kernel recovery, minimal breakage, and consistent grade output on every shift. Whether you are producing W240, W320, W450 or mixed grades, our scalable turnkey solutions are engineered for maximum yield, minimum wastage and full compliance with FSSAI, HACCP and export market food safety standards.',
      highlights: [
        { title: 'Maximum Kernel Recovery', desc: 'Precision shelling and drying minimise breakage for high-grade whole kernel output.' },
        { title: 'Multi-Grade Sorting', desc: 'Automated grading produces W240, W320, W450, W600, W700 and mixed grade streams.' },
        { title: 'Export-Ready Quality', desc: 'Full SS304/SS316L food-grade construction with HACCP and FSSAI compliant design.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-shelling-machine.webp',
      photoImage: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-shelling-machine.webp',
      features4: [
        { title: 'High Kernel Recovery', desc: 'Precision shelling for maximum whole kernel yield with minimum breakage' },
        { title: 'Automated Grading', desc: 'Multi-grade separation for W240, W320, W450, W600 and mixed grades' },
        { title: 'Food-Grade Construction', desc: 'Full SS304/SS316L enclosed construction for HACCP compliance' },
        { title: 'Automated Packaging', desc: 'High-speed pouch and bag filling for export-ready kernel packaging' }
      ]
    },
    capacities: [
      { size: '200 Kg/Hr', desc: 'Ideal for small and artisan cashew processing units.' },
      { size: '500 Kg/Hr', desc: 'Standard capacity for established commercial processors.' },
      { size: '2 Ton/Hr', desc: 'High-volume industrial-scale export-grade production.' }
    ],
    features: [
      { title: 'Food Grade Stainless Steel', desc: 'All product contact surfaces fabricated from SS304/SS316L for strict food hygiene and HACCP compliance.' },
      { title: 'High Kernel Recovery', desc: 'Precision shelling mechanisms minimise breakage to deliver maximum whole, half and split kernel recovery.' },
      { title: 'Continuous Roasting / Steam Cooking', desc: 'Multi-zone tunnel roaster or steam retort softens cashew shells for efficient shelling with minimal kernel damage.' },
      { title: 'Automated Multi-Grade Sorting', desc: 'Motorised grading systems separate kernels into W240, W320, W450, W600, W700 and mixed grade streams simultaneously.' },
      { title: 'Automated Packaging', desc: 'High-speed pouch, stand-up zipper bag or bulk carton packing lines for retail and export-ready output.' },
      { title: 'PLC Automation', desc: 'Centralised HMI control panel with recipe management, motor speed control and real-time process monitoring.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Cashew Receiving & Cleaning', desc: 'Incoming raw cashew nuts are weighed, inspected and fed through vibratory cleaners and destoners to remove dust, stones and foreign matter.' },
      { id: 2, title: 'Roasting / Steam Cooking', desc: 'Clean raw cashews pass through a continuous multi-zone tunnel roaster or steam retort system to soften the outer shell for efficient shelling.' },
      { id: 3, title: 'Cashew Shelling', desc: 'Softened cashews are fed into high-speed automated shelling machines that crack and separate the shell from the kernel with minimal breakage.' },
      { id: 4, title: 'Kernel Drying', desc: 'Shelled cashew kernels pass through a continuous belt dryer to reduce moisture content, making the testa skin brittle and easy to peel.' },
      { id: 5, title: 'Peeling & Grading', desc: 'Dried kernels are fed into automated peeling machines to remove the testa skin, then size-graded into W240, W320, W450, W600 and W700 grades.' },
      { id: 6, title: 'Quality Inspection', desc: 'Graded kernels pass through optical sorters and manual inspection conveyors to remove defects, discoloured and broken kernels before packaging.' },
      { id: 7, title: 'Automatic Packaging', desc: 'Premium graded cashew kernels are dosed by multi-head weigher and sealed into pouches, stand-up bags or cartons with nitrogen flushing for extended shelf life.' }
    ],
    machinery: [
      { name: 'Raw Cashew Receiving & Cleaning System', image: '/turnkey-brochures/images/cashew-nut-processing-plant/raw-cashew-receiving-cleaning-system.webp', desc: 'Automated receiving hopper with inclined elevator, vibratory cleaning screens and destoner to remove stones, dust and foreign matter from raw cashews.' },
      { name: 'Continuous Cashew Roasting / Steam Cooking System', image: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-roasting-steam-cooking-system.webp', desc: 'Multi-zone continuous tunnel roaster or steam retort system with precise temperature and time control for uniform shell softening with minimal kernel browning.' },
      { name: 'Cashew Shelling Machine', image: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-shelling-machine.webp', desc: 'High-speed automated multi-head shelling machine that cracks and separates cashew shells from kernels with minimal whole kernel breakage and high throughput.' },
      { name: 'Cashew Kernel Drying System', image: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-kernel-drying-system.webp', desc: 'Continuous belt dryer with precise hot-air temperature control to reduce kernel moisture and make testa skin brittle for efficient automated peeling.' },
      { name: 'Cashew Peeling & Grading System', image: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-peeling-grading-system.webp', desc: 'Automated peeling machines remove the testa skin to reveal white kernels, followed by motorised grading conveyors that classify kernels into W240–W700 export grades.' },
      { name: 'Automatic Cashew Packaging Machine', image: '/turnkey-brochures/images/cashew-nut-processing-plant/automatic-cashew-packaging-machine.webp', desc: 'High-speed multi-head weigher and pouch or stand-up bag packing line with nitrogen flushing for airtight, retail-ready export-grade cashew kernel packaging.' }
    ],
    applications: [
      { title: 'Premium Cashew Kernels', desc: 'Export-grade W240, W320, W450 whole white cashew kernels for retail and bulk markets.' },
      { title: 'Mixed Grade Cashews', desc: 'Mixed grade broken and split kernels for confectionery, bakery and food ingredient industries.' },
      { title: 'Roasted & Salted Cashews', desc: 'Value-added flavoured cashew processing for retail snack brands and food service.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/raw-cashew-receiving-cleaning-system.webp', caption: 'Raw Cashew Receiving & Cleaning System' },
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-roasting-steam-cooking-system.webp', caption: 'Continuous Cashew Roasting / Steam Cooking System' },
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-shelling-machine.webp', caption: 'Cashew Shelling Machine' },
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-kernel-drying-system.webp', caption: 'Cashew Kernel Drying System' },
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/cashew-peeling-grading-system.webp', caption: 'Cashew Peeling & Grading System' },
      { src: '/turnkey-brochures/images/cashew-nut-processing-plant/automatic-cashew-packaging-machine.webp', caption: 'Automatic Cashew Packaging Machine' }
    ]
  },
  'industry-4-automation-food-plant': {
    title: 'Industry 4.0 Automation for Food Plant',
    badge: 'INDUSTRY 4.0 SMART AUTOMATION SOLUTIONS',
    subtitle: 'Complete Industry 4.0 Automation — PLC/SCADA, Industrial IoT, Robotics, Vision Inspection, Smart Material Handling & Digital Traceability for Food Processing Plants',
    workflowTitle: 'Industry 4.0 Automation',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/industry-4-automation-food-plant/industry-4-hero-banner.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: 'Any Scale',
      stages: '7 Layer',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Industry 4.0 Automation Solution',
      p1: "Salvin Industries' Industry 4.0 Automation solution transforms conventional food processing plants into smart, connected, data-driven facilities. Our end-to-end automation platform integrates PLC & SCADA control systems, Industrial IoT (IIoT) monitoring, robotic pick & place systems, machine vision inspection, automated material handling and smart packaging with full digital traceability — all managed from a centralised data analytics dashboard.",
      p2: 'Whether you are upgrading an existing plant or commissioning a new greenfield facility, our modular Industry 4.0 solutions are engineered for maximum Overall Equipment Effectiveness (OEE), predictive maintenance, zero-defect quality control, and complete supply chain traceability — in full compliance with FSSAI, HACCP, ISO 22000 and global food safety standards.',
      highlights: [
        { title: 'Maximum OEE', desc: 'Real-time PLC/SCADA and IoT monitoring deliver 99%+ Overall Equipment Effectiveness.' },
        { title: 'Zero-Defect Quality', desc: 'AI-powered vision inspection rejects defects automatically with sub-millimetre precision.' },
        { title: 'Full Digital Traceability', desc: 'End-to-end batch and product traceability with QR/barcode and blockchain-ready data.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/industry-4-automation-food-plant/plc-scada-control-system.webp',
      photoImage: '/turnkey-brochures/images/industry-4-automation-food-plant/plc-scada-control-system.webp',
      features4: [
        { title: 'PLC & SCADA Control', desc: 'Centralised recipe management and real-time process control across all plant equipment' },
        { title: 'Industrial IoT Monitoring', desc: 'Live OEE, energy and machine health dashboards on web and mobile' },
        { title: 'Robotic Automation', desc: 'Flexible robotic pick & place for hygienic, high-speed product handling' },
        { title: 'Vision Inspection', desc: 'AI-powered camera inspection for 100% in-line quality and defect rejection' }
      ]
    },
    capacities: [
      { size: 'Small Plant', desc: 'Up to 10 machines — entry-level PLC/SCADA and IoT monitoring package.' },
      { size: 'Mid-Scale Plant', desc: '10–50 machines — full PLC, SCADA, IIoT, vision and robotic integration.' },
      { size: 'Large Plant', desc: '50+ machines — enterprise MES, ERP integration and centralised analytics.' }
    ],
    features: [
      { title: 'PLC & SCADA Control', desc: 'Centralised PLC-based automation with SCADA HMI for recipe management, real-time parameter monitoring and remote access across all plant equipment.' },
      { title: 'Industrial IoT (IIoT) Monitoring', desc: 'Wireless sensors and IoT gateways deliver live OEE, energy consumption, machine health and real-time alarm dashboards on web and mobile platforms.' },
      { title: 'Robotic Pick & Place', desc: 'High-speed delta and SCARA robots handle product picking, placing, sorting and palletising with consistent precision and zero contamination risk.' },
      { title: 'Vision Inspection & Quality Control', desc: 'AI-powered multi-camera vision systems perform 100% in-line inspection for size, shape, colour and defect detection with automatic rejection.' },
      { title: 'Smart Packaging & Traceability', desc: 'Integrated auto-coding, QR/barcode labelling and blockchain-ready batch traceability from raw material to retail shelf.' },
      { title: 'Centralised Data Analytics', desc: 'Cloud or on-premise MES/analytics dashboard aggregating production data for predictive maintenance, yield optimisation and regulatory reporting.' }
    ],
    processSteps: [
      { id: 1, title: 'PLC & SCADA Control System', desc: 'Centralised PLC controllers and SCADA HMI panels automate all critical plant processes with recipe management, interlock safety and remote monitoring capability.' },
      { id: 2, title: 'Industrial IoT Monitoring', desc: 'IIoT sensors and gateways collect real-time data from every machine — motor currents, temperatures, pressures and speeds — displayed on live web and mobile dashboards.' },
      { id: 3, title: 'Robotic Pick & Place System', desc: 'Delta and SCARA robots perform high-speed, hygienic product picking, placing, sorting and palletising with vision-guided precision and contamination-free operation.' },
      { id: 4, title: 'Vision Inspection & Quality Control', desc: 'Multi-camera AI vision systems inspect 100% of products in-line for size, shape, colour, foreign matter and defects — with automatic rejection of non-conforming items.' },
      { id: 5, title: 'Automated Material Handling', desc: 'AMR robots, powered conveyors and automatic guided vehicles (AGVs) move raw materials, WIP and finished goods through the plant without manual intervention.' },
      { id: 6, title: 'Smart Packaging & Traceability', desc: 'Integrated auto-coding machines, QR/barcode printers and RFID tagging systems create complete batch traceability records from raw material receipt to finished goods dispatch.' },
      { id: 7, title: 'Centralized Data Analytics', desc: 'Cloud or on-premise analytics platform aggregates all plant data for real-time OEE reporting, predictive maintenance alerts, yield analysis and regulatory compliance dashboards.' }
    ],
    machinery: [
      { name: 'Smart PLC & SCADA Control System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/plc-scada-control-system.webp', desc: 'Industrial-grade PLC controllers with colour SCADA HMI panels for centralised recipe management, interlock control, alarm management and remote access across all production equipment.' },
      { name: 'Industrial IoT Monitoring System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/industrial-iot-monitoring-system.webp', desc: 'IIoT sensors, edge gateways and cloud dashboards delivering real-time OEE, energy, machine health, production counts and alarm notifications on web and mobile platforms.' },
      { name: 'Robotic Pick & Place System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/robotic-pick-place-system.webp', desc: 'High-speed delta and articulated robots with vision-guided grippers for hygienic, precise product picking, placing, sorting and palletising at line speed.' },
      { name: 'Vision Inspection & Quality Control System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/vision-inspection-quality-control-system.webp', desc: 'Multi-camera AI-powered vision inspection systems performing 100% in-line product inspection for colour, size, shape, defects and foreign matter with automatic reject.' },
      { name: 'Automated Material Handling System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/automated-material-handling-system.webp', desc: 'AMR robots, AGVs and smart conveyor networks that autonomously transport raw materials, in-process goods and finished products through the plant with zero manual handling.' },
      { name: 'Smart Packaging & Traceability System', image: '/turnkey-brochures/images/industry-4-automation-food-plant/smart-packaging-traceability-system.webp', desc: 'Integrated auto-coding, QR/barcode and RFID labelling systems with MES connectivity for complete batch traceability, expiry date coding and retail-ready compliant packaging.' }
    ],
    applications: [
      { title: 'Food Processing Automation', desc: 'PLC/SCADA and IoT automation for snack, beverage, dairy and packaged food plants.' },
      { title: 'Quality Control Automation', desc: 'Vision inspection and AI-based defect rejection for zero-defect food manufacturing.' },
      { title: 'Supply Chain Traceability', desc: 'End-to-end digital traceability for FSSAI, HACCP and export regulatory compliance.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/plc-scada-control-system.webp', caption: 'Smart PLC & SCADA Control System' },
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/industrial-iot-monitoring-system.webp', caption: 'Industrial IoT Monitoring System' },
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/robotic-pick-place-system.webp', caption: 'Robotic Pick & Place System' },
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/vision-inspection-quality-control-system.webp', caption: 'Vision Inspection & Quality Control System' },
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/automated-material-handling-system.webp', caption: 'Automated Material Handling System' },
      { src: '/turnkey-brochures/images/industry-4-automation-food-plant/smart-packaging-traceability-system.webp', caption: 'Smart Packaging & Traceability System' }
    ]
  },
  'roasted-nuts-snacks-making-plant': {
    title: 'ROASTED NUTS SNACKS MAKING PLANT',
    badge: 'TURNKEY ROASTED NUTS PROCESSING SOLUTIONS',
    subtitle: 'Complete processing line for roasting, cooling, flavouring and packaging of peanuts, almonds, cashews and other nuts.',
    workflowTitle: 'Roasted Nuts Processing',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/roasted-nuts-hero-banner.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    stats: {
      capacity: 'Any Scale',
      stages: '6 Layer',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Roasted Nuts Processing Solution',
      p1: "Salvin Industries' Roasted Nuts Snacks Making Plant provides a fully automated, high-efficiency solution for processing premium roasted nuts. From raw nut receiving and precision roasting to automated flavouring and protective packaging, our turnkey lines ensure consistent crunch, flavour, and extended shelf life.",
      p2: 'Whether you are producing salted peanuts, honey-roasted almonds, or spiced cashews, our continuous roasting and coating systems are engineered for maximum productivity, hygienic operation, and full compliance with global food safety standards including FSSAI, HACCP, and ISO 22000.',
      highlights: [
        { title: 'Consistent Roasting', desc: 'Advanced continuous roasters ensure uniform heat distribution for perfect crunch and colour.' },
        { title: 'Even Flavour Coating', desc: 'Precision seasoning drums provide consistent flavour application with minimal waste.' },
        { title: 'High-Speed Packaging', desc: 'Automated FFS machines with nitrogen flushing preserve freshness and extend shelf life.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/roasted-nuts-hero-banner.webp',
      photoImage: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/roasted-nuts-hero-banner.webp',
      features4: [
        { title: 'Automated Cleaning', desc: 'Efficiently removes stones, dust, and foreign materials from raw nuts.' },
        { title: 'Continuous Roasting', desc: 'Precise temperature control for optimal roasting and flavour development.' },
        { title: 'Seasoning & Flavouring', desc: 'Uniform coating of salt, spices, or sweet glazes in continuous drums.' },
        { title: 'Nitrogen Packaging', desc: 'Automated bagging with modified atmosphere to prevent oxidation.' }
      ]
    },
    capacities: [
      { size: 'Small Scale', desc: 'Up to 200 kg/hr — Ideal for boutique snack brands and startups.' },
      { size: 'Medium Scale', desc: '200–500 kg/hr — Perfect for regional snack distributors and growing markets.' },
      { size: 'Large Scale', desc: '500+ kg/hr — High-volume continuous lines for national retail distribution.' }
    ],
    features: [
      { title: 'Raw Nuts Receiving & Cleaning', desc: 'Automated intake hoppers and vibratory cleaners remove impurities, dust, and stones to ensure only clean nuts enter the process.' },
      { title: 'Continuous Nuts Roasting', desc: 'High-efficiency continuous roasters with precise multi-zone temperature controls deliver uniform roasting and develop optimal flavour profiles.' },
      { title: 'Rapid Cooling Conveyors', desc: 'Integrated ambient or forced-air cooling conveyors quickly reduce nut temperatures to stop the roasting process and lock in the crunch.' },
      { title: 'Flavouring & Seasoning', desc: 'Continuous rotary seasoning drums with automated spray and powder dosing systems ensure even coating of oil, salt, and spices.' },
      { title: 'Quality Inspection & Sorting', desc: 'Automated optical sorting and manual inspection stations remove discoloured, broken, or defective nuts before packaging.' },
      { title: 'Automatic Packaging', desc: 'High-speed vertical form-fill-seal (VFFS) machines package the finished nuts with optional nitrogen flushing to extend shelf life.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Nuts Receiving & Cleaning System', desc: 'Bulk hoppers and multi-deck vibratory screeners efficiently remove stones, twigs, dust, and under-sized nuts from the incoming raw material.' },
      { id: 2, title: 'Continuous Nuts Roasting System', desc: 'Thermal roasting ovens utilize forced hot air or radiant heat to achieve consistent roasting, ensuring uniform colour and optimal moisture reduction.' },
      { id: 3, title: 'Cooling Conveyor System', desc: 'Specialized cooling belts immediately reduce the temperature of roasted nuts, preventing over-roasting and preparing them for seasoning.' },
      { id: 4, title: 'Flavoring & Seasoning Drum System', desc: 'Rotary tumbling drums gently mix the nuts while automated applicators accurately dose liquid binders and dry seasonings for a perfect coating.' },
      { id: 5, title: 'Quality Inspection & Sorting System', desc: 'Advanced sorting belts allow for the rigorous removal of any remaining defective or off-spec nuts to guarantee a premium final product.' },
      { id: 6, title: 'Automatic Nuts Packaging Machine', desc: 'State-of-the-art packaging systems accurately weigh and seal the roasted snacks into attractive retail pouches, utilizing nitrogen flushing for maximum freshness.' }
    ],
    machinery: [
      { name: 'Raw Nuts Receiving & Cleaning System', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/raw-nuts-receiving-cleaning-system.webp', desc: 'Heavy-duty stainless steel hoppers and vibratory destoners designed for high-capacity, gentle cleaning of delicate raw nuts.' },
      { name: 'Continuous Nuts Roasting System', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/continuous-nuts-roasting-system.webp', desc: 'Advanced continuous roasting ovens featuring multi-zone temperature control and variable speed conveyors for precise thermal processing.' },
      { name: 'Cooling Conveyor System', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/cooling-conveyor-system.webp', desc: 'High-volume cooling conveyors equipped with powerful ambient air fans to rapidly stabilize nut temperatures post-roasting.' },
      { name: 'Flavoring & Seasoning Drum System', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/flavoring-seasoning-drum-system.webp', desc: 'Continuous rotary seasoning drums with integrated liquid sprayers and dry powder dispensers for uniform flavour application.' },
      { name: 'Quality Inspection & Sorting System', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/quality-inspection-sorting-system.webp', desc: 'Hygienic inspection conveyors providing optimal lighting and ergonomic design for visual quality control and defect removal.' },
      { name: 'Automatic Nuts Packaging Machine', image: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/automatic-nuts-packaging-machine.webp', desc: 'High-speed VFFS packaging machines with multi-head weighers, date coders, and modified atmosphere packaging (MAP) capabilities.' }
    ],
    applications: [
      { title: 'Salted & Spiced Peanuts', desc: 'Complete processing for classic roasted and salted or masala-coated peanuts.' },
      { title: 'Premium Tree Nuts', desc: 'Gentle roasting and processing for high-value almonds, cashews, and macadamias.' },
      { title: 'Coated & Glazed Snacks', desc: 'Systems capable of handling honey-roasted or heavily coated nut snacks.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/raw-nuts-receiving-cleaning-system.webp', caption: 'Raw Nuts Receiving & Cleaning System' },
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/continuous-nuts-roasting-system.webp', caption: 'Continuous Nuts Roasting System' },
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/cooling-conveyor-system.webp', caption: 'Cooling Conveyor System' },
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/flavoring-seasoning-drum-system.webp', caption: 'Flavoring & Seasoning Drum System' },
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/quality-inspection-sorting-system.webp', caption: 'Quality Inspection & Sorting System' },
      { src: '/turnkey-brochures/images/roasted-nuts-snacks-making-plant/automatic-nuts-packaging-machine.webp', caption: 'Automatic Nuts Packaging Machine' }
    ]
  },
  'fruit-powder-processing-plant': {
    title: 'Fruit Powder Processing Plant',
    badge: 'TURNKEY FRUIT POWDER SOLUTIONS',
    subtitle: 'Complete processing line for washing, pulping, drying, and milling fruits into premium fruit powders.',
    workflowTitle: 'Fruit Powder Processing',
    workflowAccentTitle: 'Workflow',

    heroImage: '/turnkey-brochures/images/fruit-powder-processing-plant/fruit-powder-hero-banner.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'fruit powder.pdf',
    stats: {
      capacity: 'Customizable',
      stages: '6 Layer',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Fruit Powder Processing Solution',
      p1: "Salvin Industries' Fruit Powder Processing Plant provides a fully automated, high-efficiency solution for processing premium fruit powders. From raw fruit receiving and precision pulping to advanced spray/freeze drying and fine milling, our turnkey lines ensure maximum retention of natural flavours, colours, and nutrients.",
      p2: 'Whether you are producing mango, strawberry, or banana powders, our advanced drying and milling systems are engineered for maximum productivity, hygienic operation, and full compliance with global food safety standards including FSSAI, HACCP, and ISO 22000.',
      highlights: [
        { title: 'Nutrient Retention', desc: 'Advanced low-temperature drying preserves vitamins and natural fruit profiles.' },
        { title: 'Fine Milling', desc: 'Precision milling ensures uniform particle size and excellent solubility.' },
        { title: 'Hygienic Design', desc: 'Fully enclosed processing lines prevent contamination and ensure food safety.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/fruit-powder-processing-plant/fruit-powder-brochure.webp',
      photoImage: '/turnkey-brochures/images/fruit-powder-processing-plant/fruit-powder-brochure.webp',
      features4: [
        { title: 'Automated Cleaning', desc: 'Efficiently removes dirt and foreign materials from raw fruits.' },
        { title: 'Precision Pulping', desc: 'High-yield pulping systems for maximum extraction.' },
        { title: 'Advanced Drying', desc: 'Spray or vacuum drying for optimal moisture reduction.' },
        { title: 'Fine Grinding', desc: 'Uniform milling for perfect powder consistency.' }
      ]
    },
    capacities: [
      { size: 'Small Scale', desc: 'Up to 200 kg/hr — Ideal for boutique brands and startups.' },
      { size: 'Medium Scale', desc: '200–500 kg/hr — Perfect for regional distributors and growing markets.' },
      { size: 'Large Scale', desc: '500+ kg/hr — High-volume continuous lines for national distribution.' }
    ],
    features: [
      { title: 'Raw Fruit Receiving & Washing', desc: 'Automated intake hoppers and multi-stage washers remove dirt and pesticide residues.' },
      { title: 'Sorting & Pulping', desc: 'Optical sorting removes defective fruits, followed by high-yield pulping to extract pure fruit puree.' },
      { title: 'Pasteurization & Concentration', desc: 'Thermal pasteurization ensures safety, while vacuum evaporators concentrate the pulp for efficient drying.' },
      { title: 'Advanced Drying System', desc: 'State-of-the-art spray drying or freeze drying technology reduces moisture while preserving essential nutrients.' },
      { title: 'Milling & Blending', desc: 'Precision mills grind the dried flakes into ultra-fine powder, ready for blending with anti-caking agents.' },
      { title: 'Automatic Packaging', desc: 'High-speed vertical form-fill-seal (VFFS) machines package the finished powder with optional nitrogen flushing.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Fruit Receiving & Washing System', desc: 'Bubble washers and high-pressure sprays gently yet effectively clean delicate fruits.' },
      { id: 2, title: 'Fruit Pulping & Extraction System', desc: 'Advanced pulpers separate seeds and skin, yielding smooth, high-quality fruit puree.' },
      { id: 3, title: 'Pasteurization System', desc: 'Tubular heat exchangers rapidly pasteurize the pulp to eliminate pathogens without degrading flavour.' },
      { id: 4, title: 'Spray Drying System', desc: 'Atomizers and hot air streams instantly convert the concentrated puree into dry powder particles.' },
      { id: 5, title: 'Milling & Sieving System', desc: 'Pin mills and vibratory sifters ensure the final powder has a uniform, fine particle size.' },
      { id: 6, title: 'Automatic Powder Packaging Machine', desc: 'Auger fillers and VFFS machines accurately dispense and seal the powder into moisture-proof pouches.' }
    ],
    machinery: [
      { name: 'Raw Fruit Receiving & Washing System', image: '/turnkey-brochures/images/fruit-powder-processing-plant/raw-fruit-receiving-washing-system-new.webp', desc: 'Food-grade stainless steel washing lines designed for high-capacity, gentle cleaning of raw fruits.' },
      { name: 'Fruit Pulping & Extraction System', image: '/turnkey-brochures/images/fruit-powder-processing-plant/fruit-pulping-extraction-system-new.webp', desc: 'High-efficiency pulping machines featuring specialized screens for maximum yield and pure extraction.' },
      { name: 'Pasteurization System', image: '/turnkey-brochures/images/fruit-powder-processing-plant/pasteurization-system-new.webp', desc: 'Advanced pasteurizers providing precise temperature control for optimal microbial safety.' },
      { name: 'Spray Drying System', image: '/turnkey-brochures/images/fruit-powder-processing-plant/spray-drying-system-new.webp', desc: 'Industrial spray dryers engineered for continuous operation and superior powder quality.' },
      { name: 'Milling & Sieving System', image: '/turnkey-brochures/images/fruit-powder-processing-plant/milling-sieving-system-new.webp', desc: 'Hygienic milling systems ensuring consistent particle size distribution for excellent solubility.' },
      { name: 'Automatic Powder Packaging Machine', image: '/turnkey-brochures/images/fruit-powder-processing-plant/automatic-powder-packaging-machine-new.webp', desc: 'High-speed auger filling packaging machines with modified atmosphere packaging (MAP) capabilities.' }
    ],
    applications: [
      { title: 'Beverage Powders', desc: 'Complete processing for instant fruit drinks and smoothies.' },
      { title: 'Baking & Confectionery', desc: 'Natural fruit powders for flavouring cakes, chocolates, and sweets.' },
      { title: 'Nutritional Supplements', desc: 'High-nutrient fruit powders for health and wellness products.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/raw-fruit-receiving-washing-system-new.webp', caption: 'Raw Fruit Receiving & Washing System' },
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/fruit-pulping-extraction-system-new.webp', caption: 'Fruit Pulping & Extraction System' },
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/pasteurization-system-new.webp', caption: 'Pasteurization System' },
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/spray-drying-system-new.webp', caption: 'Spray Drying System' },
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/milling-sieving-system-new.webp', caption: 'Milling & Sieving System' },
      { src: '/turnkey-brochures/images/fruit-powder-processing-plant/automatic-powder-packaging-machine-new.webp', caption: 'Automatic Powder Packaging Machine' }
    ]
  },
  'fry-onions-processing-packaging-plant': {
    title: 'FRY ONIONS PROCESSING & PACKAGING PLANT',
    badge: 'TURNKEY FRY ONIONS SOLUTIONS',
    subtitle: 'Complete processing line for peeling, washing, slicing, frying, de-oiling, and packaging of fry onions.',
    workflowTitle: 'Fry Onions Processing',
    workflowAccentTitle: 'Workflow',
    heroImage: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onions-hero.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'FRY ONIONS.pdf',
    stats: {
      capacity: 'Customizable',
      stages: '6 Layer',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Fry Onions Processing Solution',
      p1: "Salvin Industries' Fry Onions Processing & Packaging Plant provides a fully automated, high-efficiency solution for processing premium fried onions. From raw onion receiving and peeling to continuous frying, de-oiling, and packaging, our turnkey lines ensure maximum retention of natural flavours, crunchiness, and quality.",
      p2: 'Whether you are producing fried onions for biryani, snacks, or culinary applications, our advanced processing systems are engineered for maximum productivity, hygienic operation, and full compliance with global food safety standards including FSSAI, HACCP, and ISO 22000.',
      highlights: [
        { title: 'Crispy Texture', desc: 'Advanced continuous frying and de-oiling systems preserve crispiness and quality.' },
        { title: 'Uniform Slicing', desc: 'Precision slicing ensures uniform thickness for even frying.' },
        { title: 'Hygienic Design', desc: 'Fully enclosed processing lines prevent contamination and ensure food safety.' }
      ],
      isBrochure: false,
      image: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onions-brochure.webp',
      photoImage: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onions-brochure.webp',
      features4: [
        { title: 'Automated Peeling', desc: 'Efficiently removes skin and roots from raw onions.' },
        { title: 'Precision Slicing', desc: 'High-speed slicers for uniform onion rings or flakes.' },
        { title: 'Continuous Frying', desc: 'Temperature-controlled continuous fryers for perfect browning.' },
        { title: 'Advanced De-oiling', desc: 'Centrifugal de-oiling for healthier, crispy fried onions.' }
      ]
    },
    capacities: [
      { size: 'Small Scale', desc: 'Up to 200 kg/hr — Ideal for boutique brands and startups.' },
      { size: 'Medium Scale', desc: '200–500 kg/hr — Perfect for regional distributors and growing markets.' },
      { size: 'Large Scale', desc: '500+ kg/hr — High-volume continuous lines for national distribution.' }
    ],
    features: [
      { title: 'Raw Onion Receiving & Peeling', desc: 'Automated intake hoppers and peeling systems safely remove onion skins and root bases.' },
      { title: 'Washing & Slicing', desc: 'High-pressure washers clean the peeled onions, followed by precision slicing machines for uniform thickness.' },
      { title: 'De-watering & Drying', desc: 'Vibratory de-watering conveyors and air knives remove excess surface moisture before frying.' },
      { title: 'Continuous Frying System', desc: 'State-of-the-art continuous fryers with oil filtration ensure perfectly golden and crispy fried onions.' },
      { title: 'De-oiling & Cooling', desc: 'Centrifugal de-oiling systems remove excess oil, followed by cooling conveyors to set the crispness.' },
      { title: 'Automatic Packaging', desc: 'High-speed vertical form-fill-seal (VFFS) machines package the finished fry onions with optional nitrogen flushing.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Onion Receiving & Peeling System', desc: 'Automated systems gently yet effectively peel raw onions and prepare them for processing.' },
      { id: 2, title: 'Onion Washing & Slicing System', desc: 'High-speed slicing equipment creates perfectly uniform rings or strips for even frying.' },
      { id: 3, title: 'Sliced Onion De-watering System', desc: 'Air knives and vibratory screens remove surface moisture to optimize frying efficiency.' },
      { id: 4, title: 'Continuous Onion Frying System', desc: 'Advanced thermal fluid heated fryers ensure consistent temperature control and perfect product color.' },
      { id: 5, title: 'De-oiling & Cooling System', desc: 'Centrifugal force removes excess oil, and ambient air cooling ensures the fried onions stay crispy.' },
      { id: 6, title: 'Automatic Onion Packaging Machine', desc: 'Multi-head weighers and VFFS machines accurately dispense and seal the fried onions into moisture-proof pouches.' }
    ],
    machinery: [
      { name: 'Raw Onion Receiving & Peeling System', image: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onion-slicing-machine.webp', desc: 'Food-grade stainless steel peeling lines designed for high-capacity, automated skin removal.' },
      { name: 'Onion Washing & Slicing System', image: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onion-slicer-output.webp', desc: 'High-efficiency slicers featuring specialized blades for maximum yield and uniform cuts.' },
      { name: 'Sliced Onion De-watering System', image: '/turnkey-brochures/images/fry-onions-processing-plant/continuous-frying-system.webp', desc: 'Advanced vibratory and air-blow de-watering systems to prepare onions for the fryer.' },
      { name: 'Continuous Onion Frying System', image: '/turnkey-brochures/images/fry-onions-processing-plant/de-oiling-cooling-conveyor.webp', desc: 'Industrial continuous fryers engineered for uniform frying and superior product quality.' },
      { name: 'De-oiling & Cooling System', image: '/turnkey-brochures/images/fry-onions-processing-plant/seasoning-drum-system.webp', desc: 'Hygienic de-oiling centrifuges and cooling tunnels ensuring consistent crispness and texture.' },
      { name: 'Automatic Onion Packaging Machine', image: '/turnkey-brochures/images/fry-onions-processing-plant/automatic-packaging-machine.webp', desc: 'High-speed weighing and packaging machines with modified atmosphere packaging (MAP) capabilities.' }
    ],
    applications: [
      { title: 'Culinary Ingredients', desc: 'Complete processing for biryani garnishes, curries, and culinary uses.' },
      { title: 'Snacks & Savories', desc: 'Crispy fried onions used as a standalone snack or savory topping.' },
      { title: 'Instant Foods', desc: 'High-quality fried onions for instant noodle seasonings and ready-to-eat meals.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onions-hero.webp', caption: 'Fry Onions Processing & Packaging Plant' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onion-slicing-machine.webp', caption: 'Raw Onion Receiving & Peeling System' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/fry-onion-slicer-output.webp', caption: 'Onion Washing & Slicing System' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/continuous-frying-system.webp', caption: 'Sliced Onion De-watering System' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/de-oiling-cooling-conveyor.webp', caption: 'Continuous Onion Frying System' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/seasoning-drum-system.webp', caption: 'De-oiling & Cooling System' },
      { src: '/turnkey-brochures/images/fry-onions-processing-plant/automatic-packaging-machine.webp', caption: 'Automatic Onion Packaging Machine' }
    ]
  },

  'nutrition-powder-making-production-plant': {
    title: 'Nutrition Powder Making Production Plant',
    badge: 'TURNKEY NUTRITION POWDER SOLUTION',
    subtitle: 'Complete Turnkey Solution for Manufacturing Nutrition Powders, Health Supplements, Protein Blends, and Nutraceutical Formulations with Hygienic Processing and Automated Packaging.',
    workflowTitle: 'Nutrition Powder Processing',
    workflowAccentTitle: 'Workflow',
    heroImage: '/turnkey-brochures/images/nutrition-powder-making-production-plant/nutrition-powder-hero.webp',
    heroStyle: { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0f172a', animation: 'none', transform: 'none' },
    pdfFile: 'nutrition_powder.pdf',
    stats: {
      capacity: 'Customizable',
      stages: '7 Stage',
      efficiency: '99%',
      support: '24/7'
    },
    overview: {
      title: 'Complete Nutrition Powder Manufacturing Solution',
      p1: "Salvin Industries' Nutrition Powder Making Production Plant is a comprehensive turnkey solution engineered for the large-scale manufacturing of high-quality nutrition powders. From raw material receiving and precision ingredient blending to nutrient fortification, quality testing, and fully automated packaging, our systems are designed to maximise yield, hygiene, and production consistency.",
      p2: 'Whether you are producing protein blends, meal replacement powders, infant nutrition formulas, or sports nutrition products, our advanced processing systems comply with global food safety standards including FSSAI, HACCP, GMP, and ISO 22000. All contact surfaces are constructed from SS304/SS316 food-grade stainless steel with integrated CIP systems.',
      highlights: [
        { title: 'Precision Blending', desc: 'Advanced ribbon blenders and twin-cone mixers ensure perfectly homogeneous ingredient blending.' },
        { title: 'Nutrient Fortification', desc: 'Controlled micro-dosing systems add vitamins, minerals, and active ingredients at exact quantities.' },
        { title: 'Hygienic Design', desc: 'Fully enclosed dust-free processing lines prevent contamination and ensure food safety compliance.' }
      ],
      isBrochure: true,
      image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/nutrition-powder-brochure.webp',
      photoImage: '/turnkey-brochures/images/nutrition-powder-making-production-plant/nutrition-powder-brochure.webp',
      features4: [
        { title: 'SS304/SS316 Construction', desc: 'Food-grade hygienic construction for safe powder manufacturing.' },
        { title: 'Automated Batch Control', desc: 'PLC-controlled processing with recipe management and traceability.' },
        { title: 'Precision Mixing', desc: 'Ribbon blenders ensure uniform particle distribution and consistency.' },
        { title: 'Dust-Free Packaging', desc: 'Enclosed auger filling systems for contamination-free packaging.' }
      ]
    },
    capacities: [
      { size: '100–500 Kg/Hr', desc: 'Small scale — Ideal for boutique nutrition brands and startups.' },
      { size: '500 Kg–1 Ton/Hr', desc: 'Medium scale — Perfect for regional supplement manufacturers.' },
      { size: '1–5 Ton/Hr', desc: 'Large scale — High-volume continuous production for national brands.' }
    ],
    features: [
      { title: 'SS304/SS316 Food-Grade Construction', desc: 'All contact surfaces are built from SS304/SS316 stainless steel ensuring maximum hygiene and compliance with international food safety standards.' },
      { title: 'Automated Batch Control', desc: 'Siemens/Allen-Bradley PLC systems with SCADA HMI provide precise control over ingredient dosing, blending times, and batch traceability from raw material to packaging.' },
      { title: 'Precision Mixing Technology', desc: 'Heavy-duty ribbon blenders and twin-cone mixers ensure perfectly homogeneous mixing of proteins, carbohydrates, vitamins, and mineral premixes.' },
      { title: 'Nutrient Fortification System', desc: 'Precision micro-dosing units for vitamins, minerals, probiotics, and active ingredients with accurate weight verification at every stage.' },
      { title: 'Energy Efficient Design', desc: 'Heat recovery systems on fluid bed dryers and optimised motor drives reduce energy consumption while maintaining maximum throughput.' },
      { title: 'Hygienic Manufacturing', desc: 'Fully enclosed dust-controlled processing with integrated aspiration systems and CIP/SIP capabilities for contamination-free production.' },
      { title: 'International Food Safety Compliance', desc: 'Designed and built to meet FSSAI, HACCP, GMP, ISO 22000, and CE standards for domestic and export markets.' },
      { title: 'Automated Packaging Integration', desc: 'High-speed auger fillers and VFFS/canister filling machines with nitrogen flushing ensure accurate dosing into pouches, jars, tubs, and sachets.' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Material Receiving & Inspection', desc: 'Raw ingredients are received, weighed, sampled for quality testing, and stored in designated food-grade silos and hoppers.' },
      { id: 2, title: 'Ingredient Sifting & Screening', desc: 'Vibratory sifters remove lumps, foreign particles, and oversize material to ensure ingredient purity before blending.' },
      { id: 3, title: 'Precision Blending & Mixing', desc: 'Ribbon blenders and twin-cone mixers combine base powders, proteins, carbohydrates, and flavours into a homogeneous blend.' },
      { id: 4, title: 'Nutrient Fortification & Micro-dosing', desc: 'Controlled micro-dosing systems accurately add vitamins, minerals, amino acids, and functional ingredients at precise quantities.' },
      { id: 5, title: 'Quality Control & Testing', desc: 'Inline sampling and laboratory analysis verify particle size, moisture content, nutritional profile, and microbiological safety.' },
      { id: 6, title: 'Fluid Bed Drying & Granulation', desc: 'Continuous fluid bed dryers control moisture levels to target specifications for optimal shelf stability and flow characteristics.' },
      { id: 7, title: 'Automated Filling & Packaging', desc: 'High-speed auger fillers accurately dose powder into pouches, sachets, canisters, or jars with nitrogen flushing and sealed dispatch.' }
    ],
    machinery: [
      { name: 'Raw Material Receiving & Sieving System', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/raw-material-sieving-system.webp', desc: 'Automated ingredient intake hoppers with screw conveyor and vibro sifter equipped with precise load cells and dust filters for safe material transfer.' },
      { name: 'Ribbon Blender Mixing System', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/ribbon-blender-mixing-system.webp', desc: 'Heavy-duty SS316 ribbon blender with open-top inspection, pneumatic discharge valve, and motor drive for perfectly homogeneous dry powder blending.' },
      { name: 'Homogenization & Nutrient Dispersion System', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/homogenization-unit.webp', desc: 'High-pressure homogenizer with jacketed vessel, pressure gauges, and PLC touch-screen control panel for nutrient dispersion and clump-free consistency.' },
      { name: 'Spray Drying & Milling System', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/spray-drying-milling-system.webp', desc: 'Industrial spray dryer tower with cyclone separator and pin mill pulveriser for converting concentrated blends into fine, shelf-stable nutrition powder.' },
      { name: 'Vibro Sifter & Quality Inspection System', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/vibro-sifter-quality-inspection.webp', desc: 'Multi-deck vibro sifter with HMI quality control panel and vision inspection conveyor ensuring powder purity and correct particle size distribution.' },
      { name: 'Automatic Nutrition Powder Filling & Packaging Machine', image: '/turnkey-brochures/images/nutrition-powder-making-production-plant/automatic-packaging-machine.webp', desc: 'High-speed auger filling and VFFS sealing machine with canister conveyor for accurate powder dosing into pouches, sachets, and nutrition powder containers.' }
    ],
    applications: [
      { title: 'Protein Powder', desc: 'Whey, casein, soy, pea, and rice protein blends for sports and clinical nutrition.' },
      { title: 'Health Supplements', desc: 'Vitamin-mineral blends, antioxidant formulas, and functional nutraceutical powders.' },
      { title: 'Nutritional Blends', desc: 'Multi-ingredient formulations for general wellness and clinical dietary support.' },
      { title: 'Meal Replacement Powders', desc: 'Nutritionally complete meal replacement shakes for weight management and daily wellness.' },
      { title: 'Infant Nutrition Products', desc: 'Hygienic, GMP-compliant processing for infant formula and follow-on nutrition products.' },
      { title: 'Sports Nutrition Products', desc: 'Pre-workout, recovery, and performance blends with precise macro-nutrient ratios.' },
      { title: 'Fortified Food Powders', desc: 'Micronutrient-fortified powders for government and commercial food fortification programs.' },
      { title: 'Functional Nutrition Products', desc: 'Probiotic, prebiotic, and adaptogen-enriched functional nutrition powder formulations.' }
    ],
    faqs: [
      { question: 'What types of nutrition powders can this plant manufacture?', answer: 'Our turnkey plants are versatile and can produce Whey Protein, Plant-Based Proteins, Mass Gainers, Meal Replacement Powders, Infant Formula, Sports Nutrition blends, and vitamin-mineral fortified powders for retail and institutional markets.' },
      { question: 'Is the plant GMP and food safety compliant?', answer: 'Yes. The entire plant is designed with GMP, HACCP, ISO 22000, and FSSAI compliance, using food-grade SS304/SS316 stainless steel for all product-contact parts with integrated CIP systems.' },
      { question: 'Does the packaging line handle multiple formats?', answer: 'Absolutely. Our packaging systems support pouches, sachets, wide-mouth jars, canisters, tubs, and bulk bags. Nitrogen flushing and modified atmosphere packaging (MAP) options are available.' },
      { question: 'Can the plant handle sensitive micronutrients and probiotics?', answer: 'Yes. Our precision micro-dosing systems and controlled processing environments handle heat-sensitive vitamins, probiotics, and bioactive ingredients while maintaining their potency and stability.' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/nutrition-powder-hero.webp', caption: 'Nutrition Powder Making Production Plant' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/raw-material-sieving-system.webp', caption: 'Raw Material Receiving & Sieving System' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/ribbon-blender-mixing-system.webp', caption: 'Ribbon Blender Mixing System' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/homogenization-unit.webp', caption: 'Homogenization & Nutrient Dispersion System' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/spray-drying-milling-system.webp', caption: 'Spray Drying & Milling System' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/vibro-sifter-quality-inspection.webp', caption: 'Vibro Sifter & Quality Inspection System' },
      { src: '/turnkey-brochures/images/nutrition-powder-making-production-plant/automatic-packaging-machine.webp', caption: 'Automatic Nutrition Powder Filling & Packaging Machine' }
    ]
  }
};




const dynamicProjectCache = {};

export function getProjectDetails(slug, title = '') {
  if (CORE_PROJECTS[slug]) {
    return CORE_PROJECTS[slug];
  }

  // Cache removed to fix HMR issues

  // Construct dynamic data based on title
  const cleanTitle = title || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isPharma = cleanTitle.toLowerCase().includes('tablet') || cleanTitle.toLowerCase().includes('capsule') || cleanTitle.toLowerCase().includes('pharmaceutical') || cleanTitle.toLowerCase().includes('injection') || cleanTitle.toLowerCase().includes('syrup') || cleanTitle.toLowerCase().includes('suspension') || cleanTitle.toLowerCase().includes('ointment') || cleanTitle.toLowerCase().includes('cream') || cleanTitle.toLowerCase().includes('drop');
  const isPowder = !isPharma && (cleanTitle.toLowerCase().includes('powder') || cleanTitle.toLowerCase().includes('mill') || cleanTitle.toLowerCase().includes('spice') || cleanTitle.toLowerCase().includes('sugar'));
  const isLiquidOrPaste = !isPharma && (cleanTitle.toLowerCase().includes('juice') || cleanTitle.toLowerCase().includes('honey') || cleanTitle.toLowerCase().includes('paste') || cleanTitle.toLowerCase().includes('sauce') || cleanTitle.toLowerCase().includes('ketchup') || cleanTitle.toLowerCase().includes('jelly') || cleanTitle.toLowerCase().includes('oil'));
  
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

  if (isPharma) {
    stats = { capacity: 'Customizable', stages: 'GMP Compliant', retention: 'High Precision' };
    capacities = [
      { capacity: 'Pilot Scale', type: 'R&D / Pilot', ideal: 'Research & Small Batches', color: '#f47c20' },
      { capacity: 'Medium Scale', type: 'Commercial', ideal: 'Regional Pharma Units', color: '#dc6e19' },
      { capacity: 'Large Scale', type: 'Industrial', ideal: 'National & Export Production', color: '#c45a10' },
      { capacity: 'High Speed', type: 'Mass Production', ideal: 'Global Pharma Brands', color: '#a34a0d' }
    ];
    processSteps = [
      { id: 1, title: 'Raw Material Dispensing', desc: 'Precise weighing and dispensing of APIs and excipients in a controlled environment.' },
      { id: 2, title: 'Milling & Sieving', desc: 'Particle size reduction and classification to ensure uniform distribution.' },
      { id: 3, title: 'Blending / Granulation', desc: 'Homogeneous mixing or wet/dry granulation to prepare the formulation.' },
      { id: 4, title: 'Drying (If applicable)', desc: 'Fluid bed drying or tray drying for moisture control in granules.' },
      { id: 5, title: 'Core Processing', desc: 'Tablet compression, capsule filling, or liquid/ointment compounding depending on the product.' },
      { id: 6, title: 'Coating / Filtration', desc: 'Tablet coating for release control or sterile filtration for liquid products.' },
      { id: 7, title: 'Primary Packaging', desc: 'Blister packing, strip packing, or aseptic liquid filling into vials/bottles/tubes.' },
      { id: 8, title: 'Quality Inspection', desc: 'Automated vision inspection, check weighing, and leak detection.' },
      { id: 9, title: 'Secondary Packaging', desc: 'Cartoning, labeling, and serialization for track-and-trace compliance.' },
      { id: 10, title: 'Dispatch & Storage', desc: 'Secure quarantine and temperature-controlled storage before distribution.' }
    ];
    machinery = [
      { name: 'Dispensing Booth', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Laminar flow booths for safe and sterile weighing of active ingredients.' },
      { name: 'High Shear Mixer Granulator', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'Advanced granulator for efficient wet granulation and uniform mixing.' },
      { name: 'Fluid Bed Dryer', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'Rapid and uniform drying of granules with precise temperature control.' },
      { name: 'Compression / Filling Machine', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'High-speed rotary tablet press or automated capsule/liquid filling machine.' },
      { name: 'Auto Coater', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Fully automated coating pan for film or enteric coating.' },
      { name: 'Blister / Cartoning Line', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Integrated blister packaging and cartoning with serialization.' }
    ];
  } else if (isPowder) {
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
      { name: 'Vibrating Screen Cleaner', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Double-deck screen separator with air aspiration hood.' },
      { name: 'Rotary Destoner', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'Density separation system to eliminate heavy stone contaminants.' },
      { name: 'Convective Dryer', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Hot air belt dryer with speed and moisture sensors.' },
      { name: 'Pre-Crusher Breaker', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-torque breaker designed to crush raw items into coarse flakes.' },
      { name: 'Fine Pin Mill Pulverizer', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'Micronizing pin mill featuring water cooling channels.' },
      { name: 'Pouch Packaging Machine', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Vertical FFS line with auger dosing for dust-free bagging.' }
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
      { name: 'Rotary Drum Washer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'Stainless steel drum washer with high-pressure spray headers.' },
      { name: 'Pulping Disintegrator', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-speed crushing mill for pulping raw feedstocks.' },
      { name: 'Continuous Screw Extractor', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'High-yield pressing screw extractor for liquid recovery.' },
      { name: 'Vacuum Concentration Pan', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'Low-temperature vacuum evaporator for liquid concentrates.' },
      { name: 'Plate Pasteurizer skid', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Thermal sterilization skid with PLC temperature logging.' },
      { name: 'Volumetric Bottling machine', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Rotary filling, capping, and sealing line for liquids and pastes.' }
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
      { name: 'Sanitary Feed Elevator', image: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', desc: 'Stainless steel bucket or screw elevator for automatic loading.' },
      { name: 'Multi-stage Jet Washer', image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', desc: 'High-efficiency wash cabin with water recirculation filters.' },
      { name: 'Core Processing Vessel', image: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', desc: 'Sanitary jacketed blender or reactor for temperature-controlled mixing.' },
      { name: 'Refining Extractor Separator', image: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', desc: 'High-torque separator for isolating pure product fractions.' },
      { name: 'Vibratory mesh Clarifier', image: '/turnkey-brochures/images/beetroot-gallery/silos.webp', desc: 'Vibrating sifting separator with adjustable screening meshes.' },
      { name: 'FFS Form Fill Sealer', image: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', desc: 'Fully automated filling, capping, bagging, and cartoning line.' }
    ];
  }

  const project = {
    title: cleanTitle,
    badge: `TURNKEY ${cleanTitle.toUpperCase()} SOLUTION`,
    subtitle: isPharma ? `Complete cGMP Compliant Turnkey Plant For ${cleanTitle}` : `Complete Turnkey Processing, Refining And Packaging Lines For ${cleanTitle}`,
    pdfFile: isPowder ? null : 'fruit_juice_salvin.pdf',
    stats,
    overview: {
      title: `Complete ${cleanTitle}`,
      p1: isPharma 
        ? `Salvin Industries' ${cleanTitle} is a state-of-the-art turnkey solution engineered for the pharmaceutical industry, prioritizing compliance, precision, and efficiency. From raw material dispensing to advanced serialization and packaging, our lines ensure the highest standards of product quality.`
        : `Salvin Industries' ${cleanTitle} is a premium turnkey industrial plant engineered for processors seeking high yield, sanitary design, and dependable OEE. Our complete lines guide products seamlessly from raw crop intake through cleaning, refining, thermal processing, and high-speed packaging.`,
      p2: isPharma
        ? `Designed strictly in accordance with cGMP, FDA, and WHO guidelines, our plants feature SS316L contact parts, automated CIP/SIP systems, and 21 CFR Part 11 compliant SCADA controls for complete batch traceability and data integrity.`
        : `We custom-engineer each plant according to your local codes, daily throughput goals, and product standards. Contact parts are constructed from food-grade SS304/SS316L, fully supporting automatic Clean-in-Place (CIP) operations. PLC systems track and log batch codes from intake to packaging.`,
      highlights: isPharma
        ? [
            { title: 'cGMP Compliant', desc: 'Engineered strictly to current Good Manufacturing Practices.' },
            { title: 'Validation Support', desc: 'Complete DQ, IQ, OQ, and PQ documentation provided.' },
            { title: 'Data Integrity', desc: '21 CFR Part 11 compliant automation and reporting.' }
          ]
        : [
            { title: 'End-to-End Turnkey', desc: 'Engineering → Fabrication → Commissioning → Operator Training.' },
            { title: 'OEE Optimised', desc: 'Engineered to achieve 85%+ Overall Equipment Effectiveness.' },
            { title: 'Global Compliance', desc: 'Complies with FSSAI, FDA, CE, and GMP sanitary standards.' }
          ],
      image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp'
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
      { src: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.webp', caption: `${cleanTitle} Overview` },
      { src: '/turnkey-brochures/images/beetroot-gallery/conveyor_machine.webp', caption: 'Raw Intake & Washing Section' },
      { src: '/turnkey-brochures/images/beetroot-gallery/steel_tanks.webp', caption: 'Refining & Processing Area' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_pipes.webp', caption: 'Piping & Filtration Skids' },
      { src: '/turnkey-brochures/images/beetroot-gallery/silos.webp', caption: 'Storage & Silo Dosing Systems' },
      { src: '/turnkey-brochures/images/beetroot-gallery/processing_packaging.webp', caption: 'Automated Packaging & Weighing Line' }
    ]
  };

  
  // Specific dynamic project overrides
  
  if (slug === 'coriander-powder-plant') {
    project.heroImage = '/turnkey-brochures/images/coriander-powder/coriander_powder_hero.webp';
  }
  if (slug === 'banana-chips-processing-plant') {
    project.heroImage = '/turnkey-brochures/images/banana-chips-processing-plant/banana_chips_hero_banner.webp';
  }
  
  if (slug === 'fully-automated-namkeen-plant') {
    project.gallery = [
      { src: '/turnkey-brochures/images/namkeen/media__1785499273491.webp', caption: 'Automated Pouch Packing & Multi-head Weigher' },
      { src: '/turnkey-brochures/images/namkeen/media__1785499263214.webp', caption: 'Flavor Coating & Seasoning Drum' },
      { src: '/turnkey-brochures/images/namkeen/media__1785499254675.webp', caption: 'Raw Material Mixing & Sifting' },
      { src: '/turnkey-brochures/images/namkeen/media__1785499242760.webp', caption: 'Continuous Frying System' },
      { src: '/turnkey-brochures/images/namkeen/media__1785499234267.webp', caption: 'Dough Mixing & Extrusion Line' },
      { src: '/turnkey-brochures/images/namkeen/media__1785499227685.webp', caption: 'Vibratory Grading & Conveying' }
    ];
    project.heroImage = project.gallery[0].src;
    if (project.overview) {
      project.overview.image = project.gallery[3].src;
      project.overview.photoImage = project.gallery[3].src;
    }
  }

  if (slug === 'pharmaceutical-powder-manufacturing-plant') {
    project.gallery = [
      { src: '/turnkey-brochures/images/pharma_powder_1.webp', caption: 'Pharmaceutical Powder Manufacturing Plant' },
      { src: '/turnkey-brochures/images/pharma_powder_2.webp', caption: 'Vibro Sifter & Weighing Hopper' },
      { src: '/turnkey-brochures/images/pharma_powder_3.webp', caption: 'Ribbon Blender' },
      { src: '/turnkey-brochures/images/pharma_powder_4.webp', caption: 'Multi Mill' },
      { src: '/turnkey-brochures/images/pharma_powder_5.webp', caption: 'Intermediate Storage Bin' },
      { src: '/turnkey-brochures/images/pharma_powder_6.webp', caption: 'Automatic Powder Filling & Sealing' },
      { src: '/turnkey-brochures/images/pharma_powder_7.webp', caption: 'Powder Mixing & Granulation' }
    ];
    project.heroImage = project.gallery[0].src;
    if (project.overview) {
      project.overview.image = project.gallery[1].src;
      project.overview.photoImage = project.gallery[1].src;
    }
    
    // Completely override machinery to match the exact 6 images provided
    project.machinery = [
      { title: 'Vibro Sifter & Weighing Hopper', desc: 'Precision weighing and initial sifting system for raw pharmaceutical powders, ensuring accurate dosing and removal of oversize impurities.', image: project.gallery[1].src },
      { title: 'Ribbon Blender', desc: 'High-efficiency ribbon blender for homogeneous mixing of dry powders and pharmaceutical granules with uniform distribution.', image: project.gallery[2].src },
      { title: 'Multi Mill', desc: 'Versatile multi mill for size reduction, granulation, and pulverization of pharmaceutical ingredients with variable speed settings.', image: project.gallery[3].src },
      { title: 'Intermediate Storage Bin', desc: 'Hygienic stainless steel intermediate storage bin for holding blended powders before packaging.', image: project.gallery[4].src },
      { title: 'Automatic Powder Filling & Sealing', desc: 'Fully automatic, high-speed auger powder filling and sealing machine with advanced PLC controls and touch screen interface.', image: project.gallery[5].src },
      { title: 'Powder Mixing & Granulation', desc: 'Advanced mixing and granulation unit for consistent product quality and homogeneous blending.', image: project.gallery[6].src }
    ];
  }

  if (slug === 'pharmaceutical-packaging-blister-packing-plant') {
    project.gallery = [
      { src: '/turnkey-brochures/images/pharma_pack_1.webp', caption: 'Pharmaceutical Packaging & Blister Packing Plant' },
      { src: '/turnkey-brochures/images/pharma_pack_2.webp', caption: 'Capsule Sorting & Feeding System' },
      { src: '/turnkey-brochures/images/pharma_pack_3.webp', caption: 'Blister Forming & Sealing Machine' },
      { src: '/turnkey-brochures/images/pharma_pack_4.webp', caption: 'Automatic Cartoning Machine' },
      { src: '/turnkey-brochures/images/pharma_pack_5.webp', caption: 'Check Weigher & Metal Detector' },
      { src: '/turnkey-brochures/images/pharma_pack_6.webp', caption: 'Robotic Palletizing System' }
    ];
    if (project.overview) {
      project.overview.image = project.gallery[1].src;
      project.overview.photoImage = project.gallery[1].src;
    }
    
    // Completely override machinery to match the exact 6 images provided
    project.machinery = [
      { title: 'Capsule Sorting & Feeding System', desc: 'High-speed automated sorting and precision feeding system for tablets and capsules into blister pockets.', image: project.gallery[1].src },
      { title: 'Blister Forming & Sealing Machine', desc: 'Advanced thermoforming and cold-forming blister packaging machine with precise foil sealing and batch coding.', image: project.gallery[2].src },
      { title: 'Automatic Cartoning Machine', desc: 'High-efficiency continuous motion cartoning machine for inserting blister cards and leaflets into pre-formed cartons.', image: project.gallery[3].src },
      { title: 'Check Weigher & Metal Detector', desc: 'Integrated checkweighing and metal detection system to ensure compliance and reject non-conforming packages.', image: project.gallery[4].src },
      { title: 'Robotic Palletizing System', desc: 'End-of-line robotic palletizing unit for automated case packing and seamless warehouse integration.', image: project.gallery[5].src },
      { title: 'Final Packaging System', desc: 'End-of-line packaging and secondary cartoning system for secure warehouse storage and distribution.', image: project.gallery[0].src }
    ];
  }


  // Removed dynamicProjectCache[slug] = project;

  const customGalleries = {
    'chikki-plucking-plant': { hero: 'chikki-plucking-plant.webp', images: ['chikki_plucking_1.webp', 'chikki_plucking_2.webp', 'chikki_plucking_3.webp', 'chikki_plucking_4.webp', 'chikki_plucking_5.webp', 'chikki_plucking_6.webp'] },
    'dry-fruit-chikki-plant': { hero: 'dry-fruit-chikki-plant.webp', images: ['dry_fruit_1.webp', 'dry_fruit_2.webp', 'dry_fruit_3.webp', 'dry_fruit_4.webp', 'dry_fruit_5.webp', 'dry_fruit_6.webp'] },
    'mamra-pauva-plant': { hero: 'mamra-pauva-plant.webp', images: ['mamra_pauva_1.webp', 'mamra_pauva_2.webp', 'mamra_pauva_3.webp', 'mamra_pauva_4.webp', 'mamra_pauva_5.webp', 'mamra_pauva_6.webp'] },
    'tomato-puree-plant': { hero: 'tomato-puree-plant.webp', images: ['tomato_puree_1.webp', 'tomato_puree_2.webp', 'tomato_puree_3.webp', 'tomato_puree_4.webp', 'tomato_puree_5.webp', 'tomato_puree_6.webp'] },
    'tomato-paste-plant': { hero: 'tomato-paste-plant.webp', images: ['tomato_paste_1.webp', 'tomato_paste_2.webp', 'tomato_paste_3.webp', 'tomato_paste_4.webp', 'tomato_paste_5.webp', 'tomato_paste_6.webp'] },
    'mango-pulp-plant': { hero: 'mango-pulp-plant.webp', images: ['mango_pulp_1.webp', 'mango_pulp_2.webp', 'mango_pulp_3.webp', 'mango_pulp_4.webp', 'mango_pulp_5.webp', 'mango_pulp_6.webp'] },
    'guava-pulp-plant': { hero: 'guava-pulp-plant.webp', images: ['guava_pulp_1.webp', 'guava_pulp_2.webp', 'guava_pulp_3.webp', 'guava_pulp_4.webp', 'guava_pulp_5.webp', 'guava_pulp_6.webp'] },
    'sugar-processing-plant': { hero: 'sugar_flowchart.webp', images: ['sugar_1.webp', 'sugar_2.webp', 'sugar_3.webp', 'sugar_4.webp', 'sugar_5.webp', 'sugar_6.webp'] },
    'tablet-manufacturing-plant': { hero: 'tablet_flowchart.webp', images: ['tablet_1.webp', 'tablet_2.webp', 'tablet_3.webp', 'tablet_4.webp', 'tablet_5.webp', 'tablet_6.webp'] },
    'capsule-manufacturing-plant': { hero: 'capsule_flowchart.webp', images: ['capsule_1.webp', 'capsule_2.webp', 'capsule_3.webp', 'capsule_4.webp', 'capsule_5.webp', 'capsule_6.webp'] },
    'oral-suspension-manufacturing-plant': { hero: 'oral_suspension_flowchart.webp', images: ['oral_suspension_1.webp', 'oral_suspension_2.webp', 'oral_suspension_3.webp', 'oral_suspension_4.webp', 'oral_suspension_5.webp', 'oral_suspension_6.webp'] },
    'ointment-cream-manufacturing-plant': { hero: 'ointment_flowchart.webp', images: ['ointment_1.webp', 'ointment_2.webp', 'ointment_3.webp', 'ointment_4.webp', 'ointment_5.webp', 'ointment_6.webp'] },
    'liquid-injection-manufacturing-plant': { hero: 'liquid_injection_flowchart.webp', images: ['liquid_injection_1.webp', 'liquid_injection_2.webp', 'liquid_injection_3.webp', 'liquid_injection_4.webp', 'liquid_injection_5.webp', 'liquid_injection_6.webp'] },
    'dry-powder-injection-plant': { hero: 'dry_powder_flowchart.webp', images: ['dry_powder_1.webp', 'dry_powder_2.webp', 'dry_powder_3.webp', 'dry_powder_4.webp', 'dry_powder_5.webp', 'dry_powder_6.webp', 'dry_powder_7.webp'] },
    'eye-ear-drop-manufacturing-plant': { hero: 'eye_ear_drop_flowchart.webp', images: ['eye_ear_1.webp', 'eye_ear_2.webp', 'eye_ear_3.webp', 'eye_ear_4.webp', 'eye_ear_5.webp', 'eye_ear_6.webp'] }
  };

  if (customGalleries[slug]) {
    const cg = customGalleries[slug];
    const galleryDir = `/turnkey-brochures/images/${slug.replace('-plant', '')}-gallery`;
    project.heroImage = `/turnkey-brochures/images/${cg.hero}`;
    project.overview.image = `${galleryDir}/${cg.images[0]}`;
    if (project.overview.photoImage) project.overview.photoImage = `${galleryDir}/${cg.images[0]}`;
    
    project.machinery.forEach((m, i) => {
      if (cg.images[i]) m.image = `${galleryDir}/${cg.images[i]}`;
    });

    project.gallery = cg.images.map((img, i) => ({
      src: `${galleryDir}/${img}`,
      caption: project.gallery[i] ? project.gallery[i].caption : `${cleanTitle} Image ${i+1}`
    }));
  }

  const generatedHeroImages = {
    'sugar-processing-plant': 'sugar_processing_plant.webp',
    'tablet-manufacturing-plant': 'tablet_manufacturing_plant.webp',
    'capsule-manufacturing-plant': 'capsule_manufacturing_plant.webp',
    'oral-suspension-manufacturing-plant': 'oral_suspension_manufacturing.webp',
    'ointment-cream-manufacturing-plant': 'ointment_cream_manufacturing.webp',
    'liquid-injection-manufacturing-plant': 'liquid_injection_manufacturing.webp',
    'dry-powder-injection-plant': 'dry_powder_injection_plant.webp',
    'eye-ear-drop-manufacturing-plant': 'eye_ear_drop_manufacturing.webp',
    'pharmaceutical-powder-manufacturing-plant': 'pharma_powder_hero.webp',
    'pharmaceutical-packaging-blister-packing-plant': 'pharma_packaging_hero.webp'
  };

  if (generatedHeroImages[slug]) {
    project.heroImage = `/turnkey-brochures/images/${generatedHeroImages[slug]}`;
    project.heroStyle = { backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' };
  }

  return project;
}
