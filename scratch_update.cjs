const fs = require('fs');
const filePath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PeanutOilMillDetailPage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/const PROCESS_STEPS = \[[\s\S]*?\]/, const PROCESS_STEPS = [
  { id: 1, title: 'Peanut Cleaning & Destoning' },
  { id: 2, title: 'Peanut Shelling' },
  { id: 3, title: 'Peanut Roasting' },
  { id: 4, title: 'Oil Expelling' },
  { id: 5, title: 'Oil Filtration' },
  { id: 6, title: 'Oil Packaging' },
]);

content = content.replace(/const MACHINERY_LIST = \[[\s\S]*?\]\n\n/, const MACHINERY_LIST = [
  {
    name: 'Peanut Cleaning & Destoning System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/1_cleaning_destoning.jpg',
    desc: 'Removes dust, stones and foreign impurities before further processing.'
  },
  {
    name: 'Peanut Shelling & Separation System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/2_shelling_separation.jpg',
    desc: 'Efficient shell removal and kernel separation for improved oil extraction.'
  },
  {
    name: 'Continuous Peanut Roaster',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/3_peanut_roaster.jpg',
    desc: 'Uniform roasting process to enhance flavor and improve oil yield.'
  },
  {
    name: 'Oil Expeller Machine',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/4_oil_expeller.jpg',
    desc: 'High-efficiency oil extraction system delivering maximum oil recovery.'
  },
  {
    name: 'Peanut Oil Filtration System',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/5_oil_filtration.jpg',
    desc: 'Removes impurities and improves clarity for premium edible oil.'
  },
  {
    name: 'Automatic Peanut Oil Packaging Machine',
    image: '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.jpg',
    desc: 'Automated filling, capping, labeling and packing solution.'
  }
]\n\n);

content = content.replace(/const FAQS = \[[\s\S]*?\]\n\n/, const FAQS = [
  {
    question: "What capacities are available for the Peanut Oil Mill Plant?",
    answer: "Our Peanut Oil Mill Plants are available in various capacities, fully customizable from small-scale setups to high-volume industrial processing based on your production requirements."
  },
  {
    question: "What is the average oil recovery percentage?",
    answer: "The average oil recovery percentage typically ranges from 40% to 48%, depending on the quality, moisture content, and variety of the peanuts used."
  },
  {
    question: "Does the plant include roasting and filtration systems?",
    answer: "Yes, our turnkey plant includes a continuous roaster for optimal flavor development and a comprehensive filtration system to ensure clear, pure, and premium edible oil."
  },
  {
    question: "Can the plant produce food-grade edible peanut oil?",
    answer: "Absolutely. Our equipment is manufactured using food-grade materials (SS304/SS316L) to ensure the final product meets the highest food safety and quality standards."
  },
  {
    question: "Is the packaging line fully automatic?",
    answer: "Yes, the plant features a fully automatic packaging line capable of handling multiple bottle and pouch formats for efficient and hygienic filling, sealing, and labeling."
  }
]\n\n);

content = content.replace(/const GALLERY_IMAGES = \[[\s\S]*?\]\n\n/, const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/1_cleaning_destoning.jpg', caption: 'Peanut Cleaning & Destoning System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/2_shelling_separation.jpg', caption: 'Peanut Shelling & Separation System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/3_peanut_roaster.jpg', caption: 'Continuous Peanut Roaster' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/4_oil_expeller.jpg', caption: 'Oil Expeller Machine' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/5_oil_filtration.jpg', caption: 'Peanut Oil Filtration System' },
  { src: '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.jpg', caption: 'Automatic Peanut Oil Packaging Machine' },
]\n\n);

// Title & Metas
content = content.replace(/document\.title = 'Complete Potato Powder Dehydration Plant \| Turnkey Solutions \| Salvin Industries'/g, "document.title = 'Complete Peanut Oil Mill Plant | Turnkey Solutions | Salvin Industries'");
content = content.replace(/Advanced turnkey solution for potato washing, peeling, slicing, dehydration, pulverizing, sieving, and packaging to produce premium quality potato powder\./g, "Advanced turnkey solution for producing high-quality edible peanut oil with maximum extraction efficiency.");

// Text Replacements
content = content.replace(/Complete Potato Powder Dehydration Plant/g, 'Complete Peanut Oil Mill Plant');
content = content.replace(/Potato Powder Dehydration Plant/g, 'Peanut Oil Mill Plant');
content = content.replace(/TURNKEY POTATO PROCESSING SOLUTION/g, 'TURNKEY PEANUT OIL SOLUTION');
content = content.replace(/Potato Dehydration <span className="pom-accent">Workflow<\/span>/g, 'Peanut Oil Mill <span className="pom-accent">Workflow<\/span>');
content = content.replace(/Complete Potato Powder Dehydration <span className="pom-accent">Plant<\/span>/g, 'Complete Peanut Oil Mill <span className="pom-accent">Plant<\/span>');

// Descriptions
const oldHeroDesc = 'Advanced turnkey solution for potato washing, peeling, slicing, dehydration, pulverizing, sieving, and packaging to produce premium quality potato powder with excellent consistency, color, and shelf life.';
const newHeroDesc = 'The Peanut Oil Mill Plant is a complete turnkey solution for producing high-quality edible peanut oil. The plant integrates cleaning, shelling, roasting, oil expelling, filtration and automatic packaging systems to ensure maximum oil recovery, premium quality and efficient production.';
content = content.replace(oldHeroDesc, newHeroDesc);

const oldOverviewDesc1 = 'The Industrial Flour Milling Plant is designed for efficient conversion of fresh potatoes into premium quality potato powder through washing, destoning, peeling, slicing, dehydration, pulverizing, sieving, and packaging.';
const oldOverviewDesc1Alt = 'The Peanut Oil Mill Plant is designed for efficient conversion of fresh potatoes into premium quality potato powder through washing, destoning, peeling, slicing, dehydration, pulverizing, sieving, and packaging.';
content = content.replace(oldOverviewDesc1, newHeroDesc);
content = content.replace(oldOverviewDesc1Alt, newHeroDesc);

const oldOverviewDesc2 = 'The plant ensures hygienic processing, controlled moisture removal, consistent particle size, superior product quality, and extended shelf life for food processing industries.';
content = content.replace(oldOverviewDesc2, '');

const oldWorkflowDesc = 'A streamlined and fully integrated processing workflow designed to transform fresh potatoes into premium powder with high efficiency and consistent product quality.';
const newWorkflowDesc = 'A complete peanut oil processing line designed to maximize oil yield while maintaining purity, flavor and production efficiency.';
content = content.replace(oldWorkflowDesc, newWorkflowDesc);

// Features
content = content.replace(/<p className="pom-overview__feature-title">Premium Potato Powder Production<\/p>\s*<p className="pom-overview__feature-desc">Excellent consistency & color<\/p>/g, <p className="pom-overview__feature-title">Premium Peanut Oil Production</p>\n                    <p className="pom-overview__feature-desc">Produces high-quality edible peanut oil with maximum extraction efficiency.</p>);
content = content.replace(/<p className="pom-overview__feature-title">Fully Automated Processing Line<\/p>\s*<p className="pom-overview__feature-desc">From washing to packaging<\/p>/g, <p className="pom-overview__feature-title">Fully Automated Processing Line</p>\n                    <p className="pom-overview__feature-desc">Reduces labor requirements while improving productivity.</p>);
content = content.replace(/<p className="pom-overview__feature-title">Stainless Steel Hygienic Design<\/p>\s*<p className="pom-overview__feature-desc">Food grade compliance<\/p>/g, <p className="pom-overview__feature-title">Advanced Oil Extraction Technology</p>\n                    <p className="pom-overview__feature-desc">Optimized oil recovery and consistent product quality.</p>);
content = content.replace(/<p className="pom-overview__feature-title">Complete Turnkey Manufacturing Solution<\/p>\s*<p className="pom-overview__feature-desc">Ready for industrial scale<\/p>/g, <p className="pom-overview__feature-title">Complete Turnkey Manufacturing</p>\n                    <p className="pom-overview__feature-desc">Design, engineering, installation and commissioning support.</p>);

// CTA
const oldCtaDesc = 'Get a customised project proposal with capacity recommendations, plant layout, equipment list,\n              timeline, and investment estimate — all tailored to your specific requirements.';
const newCtaDesc = 'Get a customized peanut oil processing solution engineered for maximum oil recovery, premium product quality and long-term operational efficiency.';
content = content.replace(oldCtaDesc, newCtaDesc);

// Images
content = content.replace(/\/turnkey-brochures\/images\/potato-powder-dehydration-gallery\/1_washing_destoning\.jpg/g, '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.jpg');
content = content.replace(/\/turnkey-brochures\/images\/potato-powder-dehydration-gallery\/6_packaging_machine\.jpg/g, '/turnkey-brochures/images/peanut-oil-mill-gallery/6_oil_packaging.jpg');

fs.writeFileSync(filePath, content);
console.log('JSX content fully updated to Peanut Oil Mill');
