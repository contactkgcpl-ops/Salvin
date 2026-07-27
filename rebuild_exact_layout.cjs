const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const templateSrc = fs.readFileSync(path.join(__dirname, 'layout_template.txt'), 'utf8');

const plants = [
  {
    id: "PetroleumJellyProcessingDetailPage",
    title: "Petroleum Jelly Processing Plant",
    titleAccent: "Petroleum Jelly",
    desc: "Complete processing line for high-quality petroleum jelly production with melting, homogenization, filtration, and precision filling.",
    heroImg: "guava_hero.jpg",
    overviewImg: "petroleum_jelly_overview.png",
    p1: "<p><strong>Salvin Industries' Petroleum Jelly Processing Plant</strong> is an advanced turnkey solution engineered specifically for high-volume production. From raw material melting to micro-filtration, we ensure maximum purity and consistency.</p>",
    p2: "<p>With our robust machinery and PLC-controlled automation, you can achieve continuous, high-yield production. The entire plant is fabricated from high-grade stainless steel to ensure a highly hygienic, touch-free operation tailored to global standards.</p>",
    flowchartImg: "media__1785144104804.jpg",
    steps: [
      { id: 1, title: 'Raw Material Melting' },
      { id: 2, title: 'Wax and Oil Heating' },
      { id: 3, title: 'Homogenization' },
      { id: 4, title: 'Micro Filtration' },
      { id: 5, title: 'Vacuum Deaeration' },
      { id: 6, title: 'Cooling Tunnel' },
      { id: 7, title: 'Automatic Filling' }
    ],
    machinery: [
      { name: 'Melting Vessel', desc: 'Jacketed vessel for efficient melting of raw materials.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' },
      { name: 'Homogenizer', desc: 'High-shear mixer for perfect blending.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' },
      { name: 'Filtration System', desc: 'Micro-filtration unit for ultimate purity.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' },
      { name: 'Vacuum Deaerator', desc: 'Removes air bubbles for smooth texture.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' },
      { name: 'Cooling Tunnel', desc: 'Rapid settling of jelly after blending.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' },
      { name: 'Filling Machine', desc: 'Accurate volumetric filling system.', image: '/turnkey-brochures/images/curry_powder_plant.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "Our turnkey plants are fully customizable, with capacities ranging based on your requirements." },
      { question: "Does the plant maintain product consistency?", answer: "Yes, advanced homogenization ensures perfect texture and consistency every time." },
      { question: "How does it handle filtration?", answer: "Our specialized micro-filtration system captures the smallest impurities for maximum purity." },
      { question: "What types of packaging does it support?", answer: "The line integrates with various jar filling, induction sealing, and labeling systems." },
      { question: "Does SALVIN provide complete installation?", answer: "Absolutely. We offer end-to-end turnkey solutions including process engineering and installation." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Melting Vessel' },
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Filtration System' },
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Vacuum Deaerator' },
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Cooling Tunnel' },
      { src: '/turnkey-brochures/images/curry_powder_plant.jpg', caption: 'Filling Machine' }
    ]
  },
  {
    id: "FullyAutomaticYogurtPlantDetailPage",
    title: "Fully Automatic Yogurt Plant",
    titleAccent: "Yogurt Production",
    desc: "Advanced turnkey solution for high-capacity yogurt production featuring milk reception, standardization, fermentation, and automated cup packaging.",
    heroImg: "guava_hero.jpg", 
    overviewImg: "yogurt_plant_overview.jpg", 
    p1: "<p><strong>Salvin Industries' Fully Automatic Yogurt Plant</strong> provides a complete, hygienic solution for producing premium quality set and stirred yogurt.</p>",
    p2: "<p>Our systems incorporate precise temperature controls for pasteurization and incubation, ensuring the perfect texture and culture development for your yogurt products.</p>",
    flowchartImg: "media__1785144366395.jpg",
    steps: [
      { id: 1, title: "Raw Milk Reception" },
      { id: 2, title: "Clarification" },
      { id: 3, title: "Homogenization" },
      { id: 4, title: "Pasteurization" },
      { id: 5, title: "Inoculation" },
      { id: 6, title: "Cooling & Stirring" },
      { id: 7, title: "Automatic Filling" }
    ],
    machinery: [
      { name: 'Milk Reception Unit', desc: 'Hygienic intake and chilling of raw milk.', image: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg' },
      { name: 'Clarifier & Standardizer', desc: 'Precise fat standardization and cleaning.', image: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg' },
      { name: 'Homogenizer', desc: 'High pressure homogenization for smooth texture.', image: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg' },
      { name: 'Pasteurizer', desc: 'Efficient plate heat exchanger.', image: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg' },
      { name: 'Incubation Tanks', desc: 'Temperature controlled tanks.', image: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg' },
      { name: 'Cup Filler', desc: 'Automatic cup filling and sealing.', image: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "Our turnkey plants are fully customizable to meet various daily capacities." },
      { question: "Can we make both set and stirred yogurt?", answer: "Yes, our plants can be designed to handle multiple yogurt varieties perfectly." },
      { question: "How does it handle culture inoculation?", answer: "Our precise dosing systems ensure perfect culture distribution and optimal fermentation." },
      { question: "What types of packaging does it support?", answer: "The line seamlessly integrates with automatic cup, bottle, or tub filling and sealing machines." },
      { question: "Does SALVIN provide complete installation?", answer: "Absolutely. We offer end-to-end turnkey solutions globally." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg', caption: 'Milk Reception Unit' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg', caption: 'Clarifier & Standardizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg', caption: 'Pasteurizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg', caption: 'Incubation Tanks' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg', caption: 'Cup Filler' }
    ]
  },
  {
    id: "FullyAutomaticUHTMilkPlantDetailPage",
    title: "Fully Automatic UHT Milk Plant",
    titleAccent: "UHT Milk Processing",
    desc: "Complete processing line for UHT milk production with advanced aseptic sterilization (135°C), homogenization, and carton packing.",
    heroImg: "guava_hero.jpg", 
    overviewImg: "uht_milk_overview.jpg", 
    p1: "<p><strong>Salvin Industries' UHT Milk Plant</strong> delivers ultra-high temperature processing to extend the shelf life of milk without requiring refrigeration.</p>",
    p2: "<p>Our aseptic processing and filling systems guarantee that the milk remains safe, nutritious, and fresh-tasting for months.</p>",
    flowchartImg: "media__1785144409382.jpg",
    steps: [
      { id: 1, title: "Raw Milk Reception" },
      { id: 2, title: "Standardization" },
      { id: 3, title: "Preheating" },
      { id: 4, title: "Homogenization" },
      { id: 5, title: "UHT Sterilizer (135°C)" },
      { id: 6, title: "Aseptic Holding" },
      { id: 7, title: "Aseptic Filling" }
    ],
    machinery: [
      { name: 'Milk Reception System', desc: 'Initial chilling and storage.', image: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg' },
      { name: 'Standardizer', desc: 'Inline fat adjustment.', image: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg' },
      { name: 'Homogenizer', desc: 'Prevents cream separation over long shelf life.', image: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg' },
      { name: 'UHT Sterilizer', desc: 'Advanced indirect or direct heating system.', image: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg' },
      { name: 'Aseptic Tank', desc: 'Sterile buffering before filling.', image: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg' },
      { name: 'Aseptic Filler', desc: 'Sterile packaging environment.', image: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "Capacities are scalable based on your distribution needs." },
      { question: "What is the shelf life of the milk?", answer: "Typically 6 to 9 months at room temperature without preservatives." },
      { question: "How does it handle sterilization?", answer: "Rapid heating to ultra-high temperatures guarantees destruction of all pathogens while retaining nutrients." },
      { question: "What types of packaging does it support?", answer: "It supports aseptic cartons, pouches, or specialized sterile bottles." },
      { question: "Does SALVIN provide complete installation?", answer: "Absolutely. We offer complete A to Z implementation and training." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg', caption: 'Milk Reception System' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg', caption: 'Standardizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg', caption: 'UHT Sterilizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg', caption: 'Aseptic Tank' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg', caption: 'Aseptic Filler' }
    ]
  },
  {
    id: "FullyAutomaticPasteurizedMilkPlantDetailPage",
    title: "Fully Automatic Pasteurized Milk Plant",
    titleAccent: "Pasteurized Milk",
    desc: "Complete pasteurization line designed for efficient milk processing with HTST pasteurizers, high-efficiency separators, and flexible pouch/bottle filling.",
    heroImg: "guava_hero.jpg", 
    overviewImg: "pasteurized_milk_overview.jpg", 
    p1: "<p><strong>Salvin Industries' Pasteurized Milk Plant</strong> is the cornerstone of fresh dairy processing, ensuring safety while maintaining the natural taste of milk.</p>",
    p2: "<p>Featuring state-of-the-art HTST (High Temperature Short Time) pasteurizers and precise standardization systems, we deliver maximum efficiency for dairy operations.</p>",
    flowchartImg: "media__1785144474165.jpg",
    steps: [
      { id: 1, title: "Raw Milk Reception" },
      { id: 2, title: "Clarification" },
      { id: 3, title: "Standardization" },
      { id: 4, title: "Homogenization" },
      { id: 5, title: "HTST Pasteurization" },
      { id: 6, title: "Storage Silo" },
      { id: 7, title: "Automatic Filling" }
    ],
    machinery: [
      { name: 'Milk Reception & Chilling', desc: 'Rapid cooling of raw milk.', image: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg' },
      { name: 'Centrifugal Clarifier', desc: 'Removes impurities effectively.', image: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg' },
      { name: 'Homogenizer', desc: 'Uniform fat distribution.', image: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg' },
      { name: 'HTST Pasteurizer', desc: 'Highly efficient heat transfer.', image: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg' },
      { name: 'Storage Silo', desc: 'Insulated storage for processed milk.', image: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg' },
      { name: 'Pouch Packing Machine', desc: 'High speed milk pouch filling.', image: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "We offer plants tailored to handle any volume of milk intake efficiently." },
      { question: "Does the plant maintain natural taste?", answer: "Yes, precision HTST heating ensures safety without altering the fresh taste." },
      { question: "Do you provide pouch packing machines?", answer: "Yes, we integrate reliable, high-speed VFFS machines for liquid packaging." },
      { question: "What types of packaging does it support?", answer: "Primarily LDPE pouches, but bottle filling is also fully supported." },
      { question: "Does SALVIN provide complete installation?", answer: "Absolutely. We are an end-to-end turnkey solution provider." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg', caption: 'Milk Reception & Chilling' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg', caption: 'Centrifugal Clarifier' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg', caption: 'HTST Pasteurizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg', caption: 'Storage Silo' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg', caption: 'Pouch Packing Machine' }
    ]
  },
  {
    id: "CurdPlantDetailPage",
    title: "Curd Plant",
    titleAccent: "Curd Processing",
    desc: "End-to-end curd processing line with advanced inoculation, incubation, and curd setting technologies for consistent texture and taste.",
    heroImg: "guava_hero.jpg", 
    overviewImg: "curd_plant_overview.jpg", 
    p1: "<p><strong>Salvin Industries' Curd Plant</strong> provides specialized equipment for the traditional and commercial production of high-quality curd (Dahi).</p>",
    p2: "<p>Our systems ensure the exact holding times and temperatures required for perfect curd setting, providing a consistent product batch after batch.</p>",
    flowchartImg: "media__1785143883677.jpg",
    steps: [
      { id: 1, title: "Milk Pre-Heating" },
      { id: 2, title: "HTST Pasteurization" },
      { id: 3, title: "Cooling to Incubation Temp" },
      { id: 4, title: "Culture Inoculation" },
      { id: 5, title: "Incubation" },
      { id: 6, title: "Curd Cooling" },
      { id: 7, title: "Automatic Filling" }
    ],
    machinery: [
      { name: 'Filtration & Heating', desc: 'Prepares the milk for setting.', image: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg' },
      { name: 'Pasteurizer', desc: 'Ensures milk is pathogen-free.', image: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg' },
      { name: 'Homogenizer', desc: 'Creates a uniform, creamy texture.', image: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg' },
      { name: 'Inoculation Tank', desc: 'Precise dosing of active cultures.', image: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg' },
      { name: 'Incubation Vats', desc: 'Temperature controlled vessels for setting.', image: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg' },
      { name: 'Cup Sealer', desc: 'Automatic cup filling and sealing.', image: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "Plants are customized to match your desired output per batch." },
      { question: "Can we produce flavored curd?", answer: "Yes, automated flavor dosing systems can be integrated seamlessly." },
      { question: "How does it ensure perfect setting?", answer: "By utilizing highly precise incubation tanks that maintain the exact temperature required." },
      { question: "What types of packaging does it support?", answer: "Cup fillers, bucket fillers, and pouch packers are supported." },
      { question: "Does SALVIN provide complete installation?", answer: "Yes, complete setup and commissioning are included in our turnkey service." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg', caption: 'Filtration & Heating' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg', caption: 'Pasteurizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg', caption: 'Inoculation Tank' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg', caption: 'Incubation Vats' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg', caption: 'Cup Sealer' }
    ]
  },
  {
    id: "LassiProcessingPlantDetailPage",
    title: "Fully Automated Lassi Processing Plant",
    titleAccent: "Lassi Processing",
    desc: "Advanced turnkey plant for Lassi production featuring precise blending, fermentation, flavour dosing, and automated shrink packing.",
    heroImg: "guava_hero.jpg", 
    overviewImg: "lassi_plant_overview.jpg", 
    p1: "<p><strong>Salvin Industries' Lassi Processing Plant</strong> is designed to produce traditional and flavored lassi with perfect consistency and extended shelf life.</p>",
    p2: "<p>From yogurt blending to sugar syrup dosing and pasteurization, our automated lines ensure high throughput and uncompromising quality.</p>",
    flowchartImg: "media__1785144030344.png",
    steps: [
      { id: 1, title: "Curd Blending" },
      { id: 2, title: "Sugar Syrup Dosing" },
      { id: 3, title: "Homogenization" },
      { id: 4, title: "Flavour Mixing" },
      { id: 5, title: "Pasteurization" },
      { id: 6, title: "Cooling & Filtration" },
      { id: 7, title: "Automatic Filling" }
    ],
    machinery: [
      { name: 'Curd Blending Unit', desc: 'Initial mixing of curd base.', image: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg' },
      { name: 'Syrup Preparation', desc: 'Hygienic sugar dissolving system.', image: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg' },
      { name: 'Homogenizer', desc: 'High shear mixing for smooth lassi.', image: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg' },
      { name: 'Pasteurizer', desc: 'Extended shelf life treatment.', image: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg' },
      { name: 'Aging Tanks', desc: 'Allows flavors to mature perfectly.', image: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg' },
      { name: 'Bottle Filler', desc: 'Automatic bottle filling and capping.', image: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg' }
    ],
    faqs: [
      { question: "What is the processing capacity?", answer: "We supply plants capable of producing thousands of liters per day." },
      { question: "Can the plant produce both sweet and salt lassi?", answer: "Yes, the recipe management and ingredient dosing systems are fully adjustable." },
      { question: "How does it handle flavoring?", answer: "Inline dosing pumps add flavors with exact precision without batch variations." },
      { question: "What types of packaging does it support?", answer: "PET bottles, HDPE bottles, and standard pouches are fully supported." },
      { question: "Does SALVIN provide complete installation?", answer: "Yes, our turnkey solution includes complete engineering, installation, and setup." }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/milk-plant-gallery/reception_chilling.jpg', caption: 'Curd Blending Unit' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/clarifier_standardization.jpg', caption: 'Syrup Preparation' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/homogenizer.jpg', caption: 'Homogenizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pasteurization_unit.jpg', caption: 'Pasteurizer' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/storage_tank.jpg', caption: 'Aging Tanks' },
      { src: '/turnkey-brochures/images/milk-plant-gallery/pouch_filling.jpg', caption: 'Bottle Filler' }
    ]
  }
];

plants.forEach(p => {
  let fileContent = templateSrc
    .replace(/__COMPONENT_NAME__/g, p.id)
    .replace(/__TITLE__/g, p.title)
    .replace(/__TITLE_ACCENT__/g, p.titleAccent)
    .replace(/__DESC__/g, p.desc)
    .replace(/__HERO_IMG__/g, p.heroImg)
    .replace(/__OVERVIEW_IMG__/g, p.overviewImg)
    .replace(/__P1__/g, p.p1)
    .replace(/__P2__/g, p.p2)
    .replace(/__FLOWCHART_IMG__/g, p.flowchartImg)
    .replace(/__STEPS__/g, JSON.stringify(p.steps, null, 2).replace(/"id": /g, 'id: '))
    .replace(/__MACHINERY__/g, JSON.stringify(p.machinery, null, 2))
    .replace(/__FAQS__/g, JSON.stringify(p.faqs, null, 2))
    .replace(/__GALLERY__/g, JSON.stringify(p.gallery, null, 2));

  fs.writeFileSync(path.join(srcDir, p.id + '.jsx'), fileContent);
  console.log('Rebuilt ' + p.id);
});
