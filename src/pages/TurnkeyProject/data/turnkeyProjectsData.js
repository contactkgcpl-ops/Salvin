/**
 * Detailed specifications for Turnkey Projects.
 * Contains detailed data for requested plants and a dynamic fallback generator for the rest.
 */

const CORE_PROJECTS = {
  'turmeric-powder-processing-plant': {
    title: 'Turmeric Powder Processing Plant',
    badge: 'TURNKEY TURMERIC POWDER PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Line For Washing, Boiling, Drying, Cryogenic Grinding, Sieving And Packaging Of Turmeric',
    heroImage: '/turnkey-brochures/images/turmeric-gallery/continuous_belt_dryer.jpg',
    pdfFile: 'salvin food powder processing machinaries.pdf',
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
        { icon: '🌱', title: 'Curcumin Protection', desc: 'Temperature-controlled grinding retains maximum active curcumin content.' },
        { icon: '⚡', title: 'High Thermal OEE', desc: 'Heat-recovery boiling and drying lines cut fuel consumption by 25%.' },
        { icon: '🛡️', title: 'Aflatoxin-Safe Dryers', desc: 'Enclosed hot-air circulation prevents moisture mold and bacterial growth.' }
      ],
      image: '/turnkey-brochures/images/4_turmeric.png'
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Spices Startups & Farmers', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Spice Cooperatives', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Food Brands', color: '#c45a10' },
      { capacity: '5 Ton/Hr', type: 'Industrial Scale', ideal: 'Bulk Export Operations', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L with automatic CIP connections.', icon: '🛡️' },
      { title: 'Cryogenic Grinding Option', desc: 'Liquid nitrogen cooling system prevents oil loss and preserves bright golden ASTA color.', icon: '❄️' },
      { title: 'Dust-Free Enclosure', desc: 'Integrated cyclone dust collectors and bag filters maintain a clean, OSHA-compliant environment.', icon: '💨' },
      { title: 'PLC Automation', desc: 'Centralized HMI panel logs batch parameters, temperatures, and motor speeds in real time.', icon: '🤖' },
      { title: 'Energy-Efficient Boiler', desc: 'Highly efficient steam generation reduces boiling time for raw rhizomes.', icon: '🔥' },
      { title: 'Advanced Sifting', desc: 'Multi-deck rotary sifters isolate fine mesh powder (up to 120 mesh) with zero tailing loss.', icon: '🔬' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Turmeric Receiving', icon: '📦', desc: 'Harvested turmeric rhizomes are weighed, graded, and fed into the hopper.' },
      { id: 2, title: 'Washing', icon: '🧼', desc: 'Rotary drum and high-pressure jet washers remove soil, clay, and sand from root crevices.' },
      { id: 3, title: 'Rhizome Boiling/Curing', icon: '🔥', desc: 'Steam-jacketed curing vessels soften the starch and gelatinize the curcumin for uniform color.' },
      { id: 4, title: 'Drying', icon: '☀️', desc: 'Continuous conveyor dryers or tray dryers reduce moisture content down to 8-10% safely.' },
      { id: 5, title: 'Polishing', icon: '✨', desc: 'Abrasive polishing drums remove rough outer skin, exposing a clean golden-yellow root.' },
      { id: 6, title: 'Crushing', icon: '⚙️', desc: 'Pre-crusher breakers reduce the dry, polished rhizomes into uniform coarse flakes.' },
      { id: 7, title: 'Cryo-Grinding', icon: '🔧', desc: 'Pin mills grind turmeric flakes at controlled low temperatures to prevent curcumin charring.' },
      { id: 8, title: 'Rotary Sieving', icon: '🔬', desc: 'High-speed vibratory screens classify the powder into consistent mesh size bands.' },
      { id: 9, title: 'Metal Detection', icon: '🧲', desc: 'Inline magnetic separators and metal detectors scan powder for micro-metallic contaminants.' },
      { id: 10, title: 'Aseptic Packaging', icon: '📦', desc: 'FFS packaging lines seal the turmeric powder under nitrogen-flushed conditions.' },
      { id: 11, title: 'Batch Storage', icon: '🏭', desc: 'Finished pouches or bags are stored in dry, moisture-controlled warehouses.' }
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
      { title: 'Spice Powder Brands', desc: 'Consumer retail and institutional spice powder supplies.', icon: '🌶️' },
      { title: 'Pharma & Supplement', desc: 'Curcumin extraction lines for health and supplement capsules.', icon: '💊' },
      { title: 'Food Coloring Agents', desc: 'Natural golden dye formulation for cheese, snacks, and bakery items.', icon: '🎨' },
      { title: 'Cosmetics Industry', desc: 'Traditional skin care formulations and cosmetic face packs.', icon: '🧴' },
      { title: 'Ayurvedic Medicine', desc: 'Traditional herbal powders, capsules, and therapeutic preparations.', icon: '🍃' },
      { title: 'Spices Export Business', desc: 'High-grade bulk packaging meeting international sanitary regulations.', icon: '🌍' }
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
        { icon: '🍯', title: 'Moisture Control', desc: 'Gentle vacuum concentration reduces water percentage to target levels.' },
        { icon: '🌡️', title: 'HMF Optimization', desc: 'Careful temperature profiling prevents Hydroxymethylfurfural (HMF) spikes.' },
        { icon: '🍾', title: 'Precision Bottling', desc: 'Drip-free rotary filling ensures consistent bottle volumes.' }
      ],
      image: '/turnkey-brochures/images/5_honey.png'
    },
    capacities: [
      { capacity: '200 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Apiaries & Cooperatives', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Honey Packers', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Retail Supply Lines', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Export Processing Hubs', color: '#a34a0d' }
    ],
    features: [
      { title: 'SS304/SS316L Standards', desc: 'Complete stainless steel sanitary construction with zero dead legs.', icon: '🛡️' },
      { title: 'Vacuum Moisture Reducer', desc: 'Low-temperature vacuum concentration protects fragile sugars and enzymes.', icon: '🌪️' },
      { title: 'Multi-stage Clarification', desc: 'Removes wax, bee parts, and crystallised pollen without removing healthy micro-particles.', icon: '🔬' },
      { title: 'PLC Temperature Loggers', desc: 'Continuous sensors ensure thermal inputs never overheat sensitive batches.', icon: '🤖' },
      { title: 'Drip-Free Dosing', desc: 'Piston filling nozzles ensure absolute volumetric accuracy with zero bottle waste.', icon: '🧪' },
      { title: 'De-crystallizing Warmers', desc: 'Insulated hot-water chambers melt bulk raw honey drums safely.', icon: '☀️' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Honey Melting', icon: '📦', desc: 'Bulk raw honey drums are heated in warm water chambers to liquefy crystals.' },
      { id: 2, title: 'Pre-heating', icon: '🔥', desc: 'Honey flows through plate heaters to reduce viscosity for filtration.' },
      { id: 3, title: 'Coarse Filtration', icon: '🧹', desc: 'Removes large debris, wax pieces, and impurities from the honey stream.' },
      { id: 4, title: 'Micro Filtration', icon: '🔬', desc: 'Clarifies honey by removing tiny suspended particles under pressure.' },
      { id: 5, title: 'Vacuum Concentration', icon: '🌪', desc: 'Evaporates excess moisture at low temperatures (45-50C) under vacuum.' },
      { id: 6, title: 'Cooling & Settling', icon: '❄️', desc: 'Honey is cooled rapidly and settled in insulated holding vessels.' },
      { id: 7, title: 'Homogenization', icon: '⚙️', desc: 'Blends multiple batches to ensure uniform color, texture, and moisture.' },
      { id: 8, title: 'Automatic Filling', icon: '🍾', desc: 'Volumetric rotary filling line deposits honey into jars or squeeze bottles.' },
      { id: 9, title: 'Capping & Sealing', icon: '🔒', desc: 'Automatic capping machine applies lids, followed by induction foil sealing.' },
      { id: 10, title: 'Labeling & Box packing', icon: '🏷️', desc: 'Self-adhesive labels are applied, and jars are cartooned for shipping.' }
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
      { title: 'Retail Honey Brands', desc: 'Pure multi-flora, mono-flora, and organic consumer retail packaging.', icon: '🍯' },
      { title: 'Pharma Excipients', desc: 'Medicinal syrups and herbal cough formulations base ingredients.', icon: '💊' },
      { title: 'Confectionery Dosing', desc: 'Natural sweetener inputs for baking, energy bars, and cereal lines.', icon: '🍪' },
      { title: 'Cosmetic Ingredients', desc: 'Hydrating soaps, face washes, and organic skin care creams.', icon: '🧴' },
      { title: 'Flavored Blend Infusions', desc: 'Ginger-infused, ginger-honey, and herbal honey product lines.', icon: '🍋' },
      { title: 'Bulk Exporters', desc: 'Industrial steel drum packing for overseas confectionery bulk orders.', icon: '🌍' }
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
    pdfFile: 'date_processing_salvin.pdf',
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
        { icon: '🌴', title: 'Gentle Agitation', desc: 'Air washers clean skin without bruising delicate dates.' },
        { icon: '🍒', title: 'Automatic Pitting', desc: 'High-speed mechanical pitting rollers extract seeds without tearing flesh.' },
        { icon: '💨', title: 'Vacuum Freshness', desc: 'Packaging lines lock in texture and moisture for shelf-life extension.' }
      ],
      image: '/turnkey-brochures/images/6_dates.png'
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Cooperative date packaging houses', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Regional Date Farms', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Brand Exporters', color: '#c45a10' },
      { capacity: '4 Ton/Hr', type: 'Industrial Scale', ideal: 'Large scale Middle East processing units', color: '#a34a0d' }
    ],
    features: [
      { title: 'Air-Bubbling Washers', desc: 'Removes sand and pesticide residue without damaging date skins.', icon: '🧼' },
      { title: 'Multi-Deck Sorters', desc: 'Classifies dates into clean grade streams based on diameter and moisture.', icon: '📐' },
      { title: 'High-Speed De-seeding', desc: 'Needle or roller pitters separate seed stones with clean yield.', icon: '🍒' },
      { title: 'Controllable Conveyors', desc: 'VFD controllers coordinate grading conveyor speeds to line workloads.', icon: '🤖' },
      { title: 'Vacuum Chamber Sealers', desc: 'FFS and tray-packers maintain long ambient shelf life without preservatives.', icon: '💨' },
      { title: 'Polishing Drums', desc: 'Brushing elements with natural paraffin oil spray glaze dates for premium shine.', icon: '✨' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Dates Receiving', icon: '📦', desc: 'Crates are received, logged, and dumped onto feeding elevators.' },
      { id: 2, title: 'Dust Separation', icon: '🧹', desc: 'Blower vacuums extract dust, dried leaves, and lightweight soil debris.' },
      { id: 3, title: 'Air bubble Washing', icon: '🧼', desc: 'Dates undergo gentle turbulence wash in water with high-pressure air injectors.' },
      { id: 4, title: 'Secondary Showering', icon: '🚿', desc: 'Clean fresh-water rinse nozzles spray dates to wash off detergent traces.' },
      { id: 5, title: 'Controlled Drying', icon: '☀️', desc: 'Dehydrators reduce surface wash moisture before polishing or pitting.' },
      { id: 6, title: 'Sorting & Grading', icon: '🔍', desc: 'Vibratory screens and belt inspectors grade dates into distinct sizes.' },
      { id: 7, title: 'Paraffin Polishing', icon: '✨', desc: 'Rotary brushes apply micro-sprayed food-grade oil for shine.' },
      { id: 8, title: 'Automatic Pitting', icon: '🍒', desc: 'Needle pitters push out the date stones, keeping bulb flesh whole.' },
      { id: 9, title: 'Stuffed Dates Filling', icon: '🥜', desc: 'Optionally inserts nuts or cream fills into pitted date cavities.' },
      { id: 10, title: 'Vacuum Packaging', icon: '📦', desc: 'Thermal sealing under vacuum maintains date freshness and stickiness.' },
      { id: 11, title: 'Carton boxing', icon: '🏭', desc: 'Finished packs are stacked in shipping cases and logged for distribution.' }
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
      { title: 'Premium Retail Dates', desc: 'Cartons, plastic trays, and vacuum pouches for grocery retail.', icon: '🌴' },
      { title: 'Industrial Date Paste', desc: 'Milled date pulp supply for energy bars, baking, and syrups.', icon: '🍪' },
      { title: 'Date Syrup Lines', desc: 'Clear sweet syrups for healthy sugar-alternative manufacturing.', icon: '🫗' },
      { title: 'Dates Chocolate Enrobing', desc: 'Coated date confectioneries stuffed with almonds or peanut butter.', icon: '🍫' },
      { title: 'Date Sugar Processing', desc: 'Dehydrated dates ground into fine powder for wellness baking.', icon: '🌾' },
      { title: 'Export Trade Supply', desc: 'Bulk date packs boxed for Middle East and global wholesale.', icon: '🌍' }
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
        { icon: '🧪', title: 'GMP Compliant', desc: 'Meets FDA ointment manufacturing regulations.' },
        { icon: '🌡️', title: 'Jacketed Piping', desc: 'Steam-heated transfer lines prevent material solidifying.' },
        { icon: '💨', title: 'Vacuum Deaeration', desc: 'Removes air bubbles during blending to yield smooth jelly texture.' }
      ],
      image: '/turnkey-brochures/images/7_petrolium_jelly.png'
    },
    capacities: [
      { capacity: '500 Ltr/Batch', type: 'Pilot Scale', ideal: 'Boutique Cosmetic Brands', color: '#f47c20' },
      { capacity: '1,000 Ltr/Batch', type: 'Medium Scale', ideal: 'Regional Ointment Manufacturers', color: '#dc6e19' },
      { capacity: '2,000 Ltr/Batch', type: 'Large Scale', ideal: 'National Pharma Plants', color: '#c45a10' },
      { capacity: '3,000 Ltr/Batch', type: 'Industrial Scale', ideal: 'Bulk OEM Cosmetic Exporters', color: '#a34a0d' }
    ],
    features: [
      { title: 'SS316L Contact Parts', desc: 'Ensures zero contamination and high chemical resistance.', icon: '🛡️' },
      { title: 'Contra-Rotating Agitator', desc: 'Teflon scrapers sweep jacket walls for optimal heat transfer.', icon: '🌀' },
      { title: 'Fine Cartridge Filters', desc: 'Removes particulate micro-impurities from molten base.', icon: '🔬' },
      { title: 'Hot Filling System', desc: 'Maintains jelly in liquid state for volumetric fill nozzle accuracy.', icon: '🔥' },
      { title: 'PLC Batch Tracking', desc: 'Saves recipe heating, cooling, and shear profiles automatically.', icon: '🤖' },
      { title: 'Integrated Chilling Tunnel', desc: 'Rapid cooling sets jelly crystallization structure without cracks.', icon: '❄️' }
    ],
    processSteps: [
      { id: 1, title: 'Paraffin Wax Melting', icon: '📦', desc: 'Bulk raw solid waxes are loaded and melted in jacketed melter tanks.' },
      { id: 2, title: 'Mineral Oil Dosing', icon: '🫗', desc: 'Liquid mineral oils are pumped into the mixer through flow meters.' },
      { id: 3, title: 'Homogenization blending', icon: '⚙️', desc: 'Blends melted waxes and oils under vacuum with high-shear emulsifiers.' },
      { id: 4, title: 'Vacuum Deaeration', icon: '💨', desc: 'Vacuum suction removes air pockets to prevent oxidation and product voids.' },
      { id: 5, title: 'Micro Filtration', icon: '🔬', desc: 'Molten blend passes through heated cartridge filters to extract impurities.' },
      { id: 6, title: 'Hot Liquid Transfer', icon: '🌡️', desc: 'Pre-heated jacketed pipelines move liquid jelly to the packaging buffer.' },
      { id: 7, title: 'Precision Jar Filling', icon: '🫙', desc: 'Rotary filling nozzles deposit molten jelly into jars or tins.' },
      { id: 8, title: 'Cooling Tunnel Settling', icon: '❄️', desc: 'Filled jars pass through cold air tunnels to solidify the jelly.' },
      { id: 9, title: 'Induction Foil Sealing', icon: '⚡', desc: 'Seals jar mouths with foil laminate to ensure leakproof storage.' },
      { id: 10, title: 'Capping & Labeling', icon: '🏷️', desc: 'Automatic capping and labelers apply lids and decals to finished jars.' }
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
      { title: 'Cosmetic Skin Care', desc: 'Retail personal care skin protectants, lip balms, and baby creams.', icon: '👶' },
      { title: 'Pharmaceutical Ointments', desc: 'Base carrier for active medical ointment formulations and healing salves.', icon: '💊' },
      { title: 'Hair Styling Waxes', desc: 'Pomades, solid hair dressing creams, and cosmetic styling gels.', icon: '💇' },
      { title: 'Leather Softeners', desc: 'Industrial leather waterproofing conditioners and shoe waxes.', icon: '👞' },
      { title: 'Corrosion Inhibitors', desc: 'Protective metal coating jellies used in military and maritime packing.', icon: '🔩' },
      { title: 'Veterinary Lubricants', desc: 'Animal skin care protectants and dairy teat ointments.', icon: '🐾' }
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
    heroImage: '/turnkey-brochures/images/jackfruit-gallery/jackfruit_hero.png',
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
        { icon: '🥫', title: 'Hermetic Seaming', desc: 'High-speed can seamers ensure absolute seal integrity.' },
        { icon: '🌡️', title: 'Retort Sterilization', desc: 'Overpressure autoclaves achieve full sterility for ambient storage.' },
        { icon: '🥣', title: 'Syrup Dosing', desc: 'Precise syrup dispensers maintain consistent Brix ratios.' }
      ],
      image: '/turnkey-brochures/images/8_jackfruit.png'
    },
    capacities: [
      { capacity: '500 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Fruit Processors', color: '#f47c20' },
      { capacity: '1 Ton/Hr', type: 'Medium Scale', ideal: 'Cooperative Cannery Plants', color: '#dc6e19' },
      { capacity: '2 Ton/Hr', type: 'Large Scale', ideal: 'National Export Canneries', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Mass Fruit Processing Hubs', color: '#a34a0d' }
    ],
    features: [
      { title: 'Stainless Steel Sanitization', desc: 'Built completely with SS304/SS316L for fruit acid resistance.', icon: '🛡️' },
      { title: 'Continuous Blancher', desc: 'Softens jackfruit fibers and deactivates coloring enzymes.', icon: '🔥' },
      { title: 'Vacuum Can Seaming', desc: 'Extracts oxygen before lid double-seaming to preserve taste.', icon: '🥫' },
      { title: 'Autoclave Retort Sterilizer', desc: 'PLC-controlled steam heating curves ensure commercial sterility.', icon: '🌡️' },
      { title: 'Sticky Latex Spray Wash', desc: 'High-pressure wash eliminates jackfruit sap from bulbs.', icon: '🧼' },
      { title: 'Syrup Staging Vessels', desc: 'Heated mixing tanks for preparing light/heavy sugar syrup or brine.', icon: '🍯' }
    ],
    processSteps: [
      { id: 1, title: 'Jackfruit Receiving', icon: '📦', desc: 'Whole harvested jackfruits are washed and fed into prep tables.' },
      { id: 2, title: 'Bulb Separation', icon: '🔪', desc: 'Manual skinning and seed separation isolate clean edible bulbs.' },
      { id: 3, title: 'Latex Spray Wash', icon: '🧼', desc: 'High-velocity water jets rinse off sticky latex and sap residues.' },
      { id: 4, title: 'Precision Blanching', icon: '🔥', desc: 'Hot-water blanching deactivates enzymes and fixes natural color.' },
      { id: 5, title: 'Can Feeding & Sterilization', icon: '🥫', desc: 'Empty tin cans are washed and steam-sterilized on conveyor lines.' },
      { id: 6, title: 'Volumetric Can Filling', icon: '🥣', desc: 'Fills jackfruit bulbs into cans, followed by syrup/brine dosing.' },
      { id: 7, title: 'Air Exhausting', icon: '💨', desc: 'Steam exhausting tunnels extract trapped air from filled cans.' },
      { id: 8, title: 'Double Seaming', icon: '🔒', desc: 'Automatic can seamer double-seams lids to create a hermetic seal.' },
      { id: 9, title: 'Retort Sterilization', icon: '🌡️', desc: 'Sealed cans undergo high-pressure steam sterilization in autoclave chambers.' },
      { id: 10, title: 'Can Cooling & Drying', icon: '❄️', desc: 'Autoclaves rapidly cool cans, followed by air blower drying.' },
      { id: 11, title: 'Labeling & Box packing', icon: '🏷️', desc: 'Self-adhesive labels are applied, and cans are packed into shipping boxes.' }
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
      { title: 'Canned Sweet Jackfruit', desc: 'Sweet canned jackfruit bulbs in heavy sugar syrup for dessert lines.', icon: '🥫' },
      { title: 'Canned Vegan Meat', desc: 'Young raw green jackfruit in brine, popular as a vegan meat alternative.', icon: '🌱' },
      { title: 'Dehydrated bulb lines', desc: 'Blanched feedstock supply for vacuum frying banana/jackfruit chips lines.', icon: '🍟' },
      { title: 'Bulk Purée Stock', desc: 'Aseptic bulk purée containers for dairy and ice cream ingredient houses.', icon: '🥣' },
      { title: 'Frozen bulb supplies', desc: 'Washed and pitted bulbs packed for commercial frozen food sections.', icon: '❄️' },
      { title: 'Export Retort Pouches', desc: 'Sterilized retort flexible pouch packaging for export grocery stores.', icon: '🌍' }
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
        { icon: '🌾', title: 'Vacuum Extrusion', desc: 'Removes micro-air bubbles to prevent pasta cracking during drying.' },
        { icon: '☀️', title: 'Multi-stage Dryers', desc: 'Convective tunnel dryers reduce moisture to 12% without stress fractures.' },
        { icon: '🍜', title: 'Die Adaptability', desc: 'Quick-change bronze or teflon dies support multiple pasta shapes.' }
      ],
      image: '/turnkey-brochures/images/9_pasta_making.png'
    },
    capacities: [
      { capacity: '300 Kg/Hr', type: 'Small Scale', ideal: 'Boutique Gourmet Pasta Brands', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Food Processors', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Food Brands & Co-Packers', color: '#c45a10' },
      { capacity: '2 Ton/Hr', type: 'Industrial Scale', ideal: 'High-Volume Pasta Mills', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L for long life and hygiene.', icon: '🛡️' },
      { title: 'Vacuum Mixing Chamber', desc: 'Prevents oxidation and bubbles to improve color and gluten matrix.', icon: '🌪️' },
      { title: 'Bronze or Teflon Dies', desc: 'Bronze dies yield rough texture for sauce cling; Teflon dies yield smooth surfaces.', icon: '⚙️' },
      { title: 'Low-Temperature Dryer', desc: 'Controlled convective tunnel drying prevents surface sealing and cracking.', icon: '🌡️' },
      { title: 'Automatic Length Cutter', desc: 'Rotary knives slice pasta shapes or long noodles to precise dimensions.', icon: '✂️' },
      { title: 'Flow Packaging Line', desc: 'Multi-head weighers pack finished dry products into flow-wrapped pouches.', icon: '📦' }
    ],
    processSteps: [
      { id: 1, title: 'Flour Sifting', icon: '🧹', desc: 'Semolina or wheat flour is sieved to remove lumps and impurities.' },
      { id: 2, title: 'Water/Ingredient Dosing', icon: '🫗', desc: 'Precise volumetric pumps dose water and liquid eggs into the mixer.' },
      { id: 3, title: 'Vacuum Dough Mixing', icon: '🥣', desc: 'Ingredients are blended under vacuum to form a uniform crumbly dough.' },
      { id: 4, title: 'Extrusion & Shaping', icon: '⚙️', desc: 'High-pressure augers push dough through custom-shaped dies.' },
      { id: 5, title: 'Rotary Cutting', icon: '✂️', desc: 'High-speed blades cut extruded strands to desired lengths.' },
      { id: 6, title: 'Pre-drying (Shaker)', icon: '💨', desc: 'Vibratory shaker dryer quickly removes surface moisture to prevent sticking.' },
      { id: 7, title: 'Main Tunnel Drying', icon: '☀️', desc: 'Convective drying loops gently reduce pasta moisture to 12.5%.' },
      { id: 8, title: 'Cooling & Tempering', icon: '❄️', desc: 'Stabilizes pasta temperature to room levels to prevent stress cracks.' },
      { id: 9, title: 'Multi-Head Weighing', icon: '⚖️', desc: 'Fills package targets accurately using high-speed combination scales.' },
      { id: 10, title: 'Flow Wrapping', icon: '📦', desc: 'Wraps and heat-seals finished pasta in retail-grade film bags.' }
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
      { title: 'Dry Short Pasta', desc: 'Penne, fusilli, macaroni, and shell retail boxes and bags.', icon: '🍝' },
      { title: 'Dry Long Pasta', desc: 'Spaghetti, fettuccine, and vermicelli noodle bundle packs.', icon: '🍜' },
      { title: 'Instant Noodle Cakes', desc: 'Wavy noodles processed for instant cup and pouch retail brands.', icon: '🍜' },
      { title: 'Gourmet Egg Pasta', desc: 'Bronze-die premium egg noodles and specialty shapes.', icon: '🥚' },
      { title: 'Gluten-Free Pasta', desc: 'Rice, corn, or lentil flour pasta for dietary sectors.', icon: '🌾' },
      { title: 'Bulk Institutional Stock', desc: 'Catering and school lunch bulk cardboard carton supplies.', icon: '🌍' }
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
        { icon: '🥜', title: 'Uniform Roasting', desc: 'Hot air batch or continuous roasters ensure uniform color development.' },
        { icon: '🌪️', title: 'Colloid Mill Grinding', desc: 'High-shear micronization achieves ultra-smooth or crunchy textures.' },
        { icon: '🫙', title: 'Vacuum Deaeration', desc: 'Prevents oil rancidity and extends ambient shelf life.' }
      ],
      image: '/turnkey-brochures/images/10_peanut_butter.png'
    },
    capacities: [
      { capacity: '300 Kg/Hr', type: 'Small Scale', ideal: 'Artisanal Nut Product Brands', color: '#f47c20' },
      { capacity: '500 Kg/Hr', type: 'Medium Scale', ideal: 'Regional Snack Processors', color: '#dc6e19' },
      { capacity: '1 Ton/Hr', type: 'Large Scale', ideal: 'National Retail Brands', color: '#c45a10' },
      { capacity: '3 Ton/Hr', type: 'Industrial Scale', ideal: 'Bulk OEM Exporters & Ingredient Mills', color: '#a34a0d' }
    ],
    features: [
      { title: 'Food-Grade Stainless Steel', desc: 'All contact components are built from SS304/SS316L for sanitary processing.', icon: '🛡️' },
      { title: 'Circulating Hot-Air Roaster', desc: 'Controlled thermal profiles develop rich peanut aromas without burning.', icon: '🔥' },
      { title: 'Nut Cooling & Blancher', desc: 'Quick cooling locks in flavor, followed by rollers separating red skins.', icon: '🌬️' },
      { title: 'Colloid Grinding Mill', desc: 'Water-cooled grinding zones prevent heat-induced oil oxidation.', icon: '⚙️' },
      { title: 'Jacketed Blending Vessel', desc: 'Blends emulsifiers, salt, and sweeteners under vacuum.', icon: '🧪' },
      { title: 'Aseptic Filling Line', desc: 'Volumetric jar filler with automatic capping and induction foil sealing.', icon: '🫙' }
    ],
    processSteps: [
      { id: 1, title: 'Raw Peanut Feeding', icon: '📦', desc: 'Shelled peanuts are loaded onto elevators and fed into the hopper.' },
      { id: 2, title: 'Hot-Air Roasting', icon: '🔥', desc: 'Peanuts are roasted in hot-air circulating drums to activate oils.' },
      { id: 3, title: 'Peanut Cooling', icon: '🌬', desc: 'Fans draw room air through peanuts on a mesh conveyor to stop cooking.' },
      { id: 4, title: 'Abrasive Blanching', icon: '🧹', desc: 'Rubber rollers peel off red skins, and air separators discard them.' },
      { id: 5, title: 'Inspection & Sorting', icon: '🔍', desc: 'Optical sorters and hand checkers remove damaged or discolored nuts.' },
      { id: 6, title: 'Primary Grinding', icon: '⚙️', desc: 'Crusher pre-grinds whole peanuts into a coarse, oily meal paste.' },
      { id: 7, title: 'Colloid Mill Refining', icon: '🔧', desc: 'High-shear colloid mills reduce peanut paste down to 20-30 microns.' },
      { id: 8, title: 'Ingredient Blending', icon: '🧪', desc: 'Doses salt, sugar, honey, and hydrogenated oils in jacketed mixers.' },
      { id: 9, title: 'Vacuum Deaeration', icon: '💨', desc: 'Vacuum suction extracts air bubbles to prevent future oil separation.' },
      { id: 10, title: 'Jar Filling & Capping', icon: '🫙', desc: 'Automatic piston filler deposits peanut butter, capping lids instantly.' },
      { id: 11, title: 'Induction Sealing', icon: '⚡', desc: 'Seals jar mouths with foil laminate, followed by retail labeling.' }
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
      { title: 'Retail Peanut Butter', desc: 'Smooth, creamy, and crunchy jars for supermarket shelves.', icon: '🫙' },
      { title: 'Confectionery Dosing', desc: 'Fillings for chocolates, wafers, cookies, and dessert bars.', icon: '🍫' },
      { title: 'Snack Food Dips', desc: 'Peanut-flavored dips, spreads, and seasoning bases.', icon: '🥨' },
      { title: 'Sports Nutrition Packs', desc: 'High-protein peanut butter squeeze sachets and pastes.', icon: '💪' },
      { title: 'Pet Treats Industry', desc: 'Xylitol-free organic peanut butter for pet treats and fillings.', icon: '🐕' },
      { title: 'Bulk Ingredient Supply', desc: 'Commercial steel buckets and drums for industrial food factories.', icon: '🌍' }
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
      { id: 1, title: 'Raw Material Receiving', icon: '📦', desc: 'Raw feed material is inspected, weighed, and logged into the hopper.' },
      { id: 2, title: 'Cleaning & Aspiration', icon: '🧹', desc: 'Removes sand, leaves, stones, and light foreign matter.' },
      { id: 3, title: 'Drying / Conditioning', icon: '☀️', desc: 'Reduces raw moisture level to target ranges for optimal milling.' },
      { id: 4, title: 'Coarse Crushing', icon: '⚙️', desc: 'Pre-crusher breakers reduce raw material to uniform flakes.' },
      { id: 5, title: 'Fine Grinding / Milling', icon: '🔧', desc: 'Pulveriser pin mills grind material into fine powder.' },
      { id: 6, title: 'Vibratory Sieving', icon: '🔬', desc: 'Vibratory sifting screens separate powder into fine mesh bands.' },
      { id: 7, title: 'Magnetic Separation', icon: '🧲', desc: 'Inline magnetic filters extract micro-metallic contaminants.' },
      { id: 8, title: 'Quality Assurance Testing', icon: '✅', desc: 'Batch testing for moisture, particle size, and purity.' },
      { id: 9, title: 'Automatic Bagging', icon: '📦', desc: 'Form-fill-seal packaging wraps powder into retail pouches or bulk sacks.' },
      { id: 10, title: 'Traceability Warehousing', icon: '🏭', desc: 'Stacking and storage under dry atmosphere with batch codes.' }
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
      { id: 1, title: 'Ingestion & Washing', icon: '🧼', desc: 'Raw ingredients are washed in rotary drums to remove soil.' },
      { id: 2, title: 'Sorting Conveying', icon: '🔍', desc: 'Grade selectors reject damaged or unripe feedstock.' },
      { id: 3, title: 'Pulping & Crushing', icon: '⚙️', desc: 'Crushing mills break cells to maximize juice or paste yield.' },
      { id: 4, title: 'Extraction / Pressing', icon: '🧃', desc: 'Screw or belt presses squeeze out juice or raw paste.' },
      { id: 5, title: 'Duplex Filtration', icon: '🔬', desc: 'Removes insoluble fibers, skins, and solids.' },
      { id: 6, title: 'Vacuum Evaporation', icon: '🌪', desc: 'Concentrates product at low temperatures protecting flavor.' },
      { id: 7, title: 'Pasteurization Homogenizer', icon: '🔥', desc: 'Thermal processing deactivates microbes and homogenizes texture.' },
      { id: 8, title: 'Aseptic Filling', icon: '🍾', desc: 'Deposits hot or cold liquid/paste into jars, pouches, or bottles.' },
      { id: 9, title: 'Automatic Capping', icon: '🔒', desc: 'Applies caps with induction foil seal checks.' },
      { id: 10, title: 'Labeling & Warehousing', icon: '🏭', desc: 'Automatic side labeling, box boxing, and temperature controlled warehousing.' }
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
      { id: 1, title: 'Raw Feed Ingestion', icon: '📦', desc: 'Raw input goods are received, checked, and loaded into elevators.' },
      { id: 2, title: 'Washing & Cleaning', icon: '🧼', desc: 'Multi-stage washers remove dirt, dust, and external debris.' },
      { id: 3, title: 'Preparation & Sorting', icon: '🔍', desc: 'Grading conveyors classify items, separating rejected stocks.' },
      { id: 4, title: 'Process Processing', icon: '⚙️', desc: 'Core processing (cutting, mixing, or cooking) based on recipe.' },
      { id: 5, title: 'Thermal Conditioning', icon: '🔥', desc: 'Controlled heating or cooling adjusts moisture and texture.' },
      { id: 6, title: 'Extraction & Refining', icon: '🔧', desc: 'Separates valuable product from waste fibers or shells.' },
      { id: 7, title: 'Fine Filtration / Sieving', icon: '🔬', desc: 'Sifts or clarifies products to guarantee smooth particle grades.' },
      { id: 8, title: 'Automated Dosing / Filling', icon: '🍾', desc: 'Weighs and packages finished goods into retail containers.' },
      { id: 9, title: 'Induction Sealing / Capping', icon: '🔒', desc: 'Hermetically seals packs to maintain maximum shelf life.' },
      { id: 10, title: 'Traceable Warehousing', icon: '🏭', desc: 'Palletized casing and warehouse logging under FIFO guidelines.' }
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
    pdfFile: isPowder ? 'salvin food powder processing machinaries.pdf' : 'fruit_juice_salvin.pdf',
    stats,
    overview: {
      title: `Complete ${cleanTitle}`,
      p1: `Salvin Industries' ${cleanTitle} is a premium turnkey industrial plant engineered for processors seeking high yield, sanitary design, and dependable OEE. Our complete lines guide products seamlessly from raw crop intake through cleaning, refining, thermal processing, and high-speed packaging.`,
      p2: `We custom-engineer each plant according to your local codes, daily throughput goals, and product standards. Contact parts are constructed from food-grade SS304/SS316L, fully supporting automatic Clean-in-Place (CIP) operations. PLC systems track and log batch codes from intake to packaging.`,
      highlights: [
        { icon: '🏭', title: 'End-to-End Turnkey', desc: 'Engineering → Fabrication → Commissioning → Operator Training.' },
        { icon: '📊', title: 'OEE Optimised', desc: 'Engineered to achieve 85%+ Overall Equipment Effectiveness.' },
        { icon: '🌍', title: 'Global Compliance', desc: 'Complies with FSSAI, FDA, CE, and GMP sanitary standards.' }
      ],
      image: '/turnkey-brochures/images/beetroot-gallery/industrial_plant.png'
    },
    capacities,
    features: [
      { title: 'SS304/SS316L Contacts', desc: 'All contact parts are food-grade stainless steel with automatic CIP piping.', icon: '🛡️' },
      { title: 'Thermal Energy Recovery', desc: 'Recirculating heat loops reduce electricity and fuel costs by up to 25%.', icon: '⚡' },
      { title: 'Dust-Free Enclosed Paths', desc: 'Aspiration hoods and enclosed chutes protect workers and prevent raw dust spills.', icon: '💨' },
      { title: 'Modular Upgrades Ready', desc: 'Scalable structural frames allow line expansions without rebuilding layout frames.', icon: '🧱' },
      { title: 'Siemens/Allen-Bradley PLC', desc: 'Telemetry-ready HMI control panel logs real-time batch metrics and telemetry.', icon: '🤖' },
      { title: 'Precision Weight Dosing', desc: 'Multi-head combination scales or auger feeders guarantee 99.8% dosing accuracy.', icon: '⚖️' }
    ],
    processSteps,
    machinery,
    applications: [
      { title: 'Consumer Retail Brands', desc: 'Retail packaging lines for supermarkets and e-commerce distribution.', icon: '🛍️' },
      { title: 'Industrial Feedstock Supply', desc: 'Bulk drum and sack supplies for commercial food factories.', icon: '📦' },
      { title: 'Confectionery & Baking', desc: 'Ingredient sourcing and blending bases for bakery lines.', icon: '🍪' },
      { title: 'Wellness Supplements', desc: 'Functional extracts, capsules, and pure concentrated powders.', icon: '💊' },
      { title: 'Export Trade Supplies', desc: 'High-purity bulk products packed for overseas markets.', icon: '🌍' },
      { title: 'Custom Contract Packing', desc: 'White-label and private-label packaging for brand houses.', icon: '🏷️' }
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
