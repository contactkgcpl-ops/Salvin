const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let dataContent = fs.readFileSync(dataFile, 'utf8');

const ctcProjectStr = `
  'ctc-tea-processing-packaging-plant': {
    title: 'CTC Tea Processing & Packaging Plant',
    badge: 'TURNKEY CTC TEA PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solutions for CTC Tea Manufacturing & Packaging',
    heroImage: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_tea_infographic.jpg',
    heroMinHeight: '600px',
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
      image: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_tea_infographic.jpg',
      photoImage: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_tea_infographic.jpg',
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
      { name: 'Fresh Tea Leaf Receiving', desc: 'Freshly harvested tea leaves are received and inspected for quality. Proper selection ensures high-quality tea production.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_leaf_receiving.jpg' },
      { name: 'Tea Leaf Withering Trough', desc: 'Tea leaves are spread in withering troughs where moisture content is reduced under controlled airflow. This prepares the leaves for efficient processing.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/withering_trough.jpg' },
      { name: 'CTC Crushing Tearing & Curling Machine', desc: 'Leaves pass through specialized CTC machines that crush, tear, and curl them into characteristic tea granules. This step develops the tea structure required for strong liquor.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_machine.jpg' },
      { name: 'Fermentation / Oxidation Conveyor System', desc: 'Processed leaves undergo controlled oxidation to develop color, aroma, flavor, and strength. This is a critical stage in black tea manufacturing.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/fermentation.jpg' },
      { name: 'Continuous Tea Dryer', desc: 'Fermented tea is dried using hot-air dryers to stop oxidation and achieve the required moisture level. Proper drying ensures shelf stability and quality retention.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_dryer.jpg' },
      { name: 'Automatic Tea Packaging Machine', desc: 'Tea is packed into pouches, cartons, tea bags, or bulk packs using automated filling and sealing systems. Packaging protects freshness and aroma.', image: '/turnkey-brochures/images/ctc-tea-processing-plant/packaging.jpg' }
    ],
    gallery: [
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_tea_infographic.jpg', caption: 'Fully Automated CTC Tea Processing Plant' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_leaf_receiving.jpg', caption: 'Tea Leaf Receiving & Feeding System' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/withering_trough.jpg', caption: 'Tea Leaf Withering Trough' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_machine.jpg', caption: 'CTC Crushing Tearing & Curling Machine' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/fermentation.jpg', caption: 'Fermentation / Oxidation Conveyor System' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/tea_dryer.jpg', caption: 'Continuous Tea Dryer' },
      { src: '/turnkey-brochures/images/ctc-tea-processing-plant/packaging.jpg', caption: 'Automatic Tea Packaging Machine' }
    ]
  },
`;

if (!dataContent.includes("'ctc-tea-processing-packaging-plant'")) {
  dataContent = dataContent.replace('const CORE_PROJECTS = {', 'const CORE_PROJECTS = {\n' + ctcProjectStr);
  fs.writeFileSync(dataFile, dataContent, 'utf8');
  console.log('Added CTC Tea to turnkeyProjectsData.js');
}

const brochureFile = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'brochureCatalog.js');
let brochureContent = fs.readFileSync(brochureFile, 'utf8');

const newBrochure = `  ['ctc-tea-processing-plant/ctc_tea_infographic.jpg', 'ctc_tea_processing.pdf', 'CTC Tea Processing & Packaging Plant', ['Fully automated turnkey solutions for CTC tea manufacturing and packaging.', 'Advanced CTC technology for uniform granule formation and consistent flavor.'], '/turnkey-project/ctc-tea-processing-packaging-plant'],\n`;

if (!brochureContent.includes('CTC Tea Processing & Packaging Plant')) {
  // Try to find the exact place to insert. We can insert right after the first item in RAW, or at the end of RAW.
  // RAW ends with 
  //   ['milk-powder-processing-plant/milk_powder_infographic.jpg', 'milk powder.pdf', 'Milk Powder Processing & Packaging Plant', ['Fully automated process from raw milk reception to spray drying and packing.', 'Ensures consistent powder quality with advanced evaporation and drying.'], '/turnkey-project/milk-powder-processing-packaging-plant']
  // ]
  
  brochureContent = brochureContent.replace(
    "/turnkey-project/milk-powder-processing-packaging-plant']\n]",
    "/turnkey-project/milk-powder-processing-packaging-plant'],\n" + newBrochure + "]"
  );
  
  fs.writeFileSync(brochureFile, brochureContent, 'utf8');
  console.log('Added CTC Tea to brochureCatalog.js');
}
