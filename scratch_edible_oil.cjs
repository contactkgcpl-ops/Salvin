const fs = require('fs');
const jsxTemplatePath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PeanutOilMillDetailPage.jsx';
const cssTemplatePath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PeanutOilMillDetailPage.css';
const targetJsxPath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/EdibleOilProcessingDetailPage.jsx';
const targetCssPath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/EdibleOilProcessingDetailPage.css';

let jsxContent = fs.readFileSync(jsxTemplatePath, 'utf8');
let cssContent = fs.readFileSync(cssTemplatePath, 'utf8');

jsxContent = jsxContent.replace(/PeanutOilMillDetailPage/g, 'EdibleOilProcessingDetailPage');
jsxContent = jsxContent.replace(/pom-/g, 'eop-');
jsxContent = jsxContent.replace(/PeanutOilMillDetailPage\.css/g, 'EdibleOilProcessingDetailPage.css');

cssContent = cssContent.replace(/PeanutOilMillDetailPage/g, 'EdibleOilProcessingDetailPage');
cssContent = cssContent.replace(/pom-/g, 'eop-');

// PROCESS STEPS
jsxContent = jsxContent.replace(/const PROCESS_STEPS = \[[\s\S]*?\]/, \const PROCESS_STEPS = [
  { id: 1, title: 'Seed Cleaning & Destoning' },
  { id: 2, title: 'Seed Cracking & Conditioning' },
  { id: 3, title: 'Oil Extraction' },
  { id: 4, title: 'Crude Oil Filtration' },
  { id: 5, title: 'Oil Refining' },
  { id: 6, title: 'Oil Packaging' },
]\);

// MACHINERY_LIST
jsxContent = jsxContent.replace(/const MACHINERY_LIST = \[[\s\S]*?\]\n\n/, \const MACHINERY_LIST = [
  {
    name: 'Seed Cleaning & Destoning System',
    image: '/turnkey-brochures/images/edible-oil-gallery/1_cleaning_destoning.jpg',
    desc: 'Removes dust, stones and foreign impurities to improve oil yield and processing efficiency.'
  },
  {
    name: 'Seed Cracking & Conditioning System',
    image: '/turnkey-brochures/images/edible-oil-gallery/2_cracking_conditioning.jpg',
    desc: 'Prepares seeds for efficient oil extraction through controlled cracking and steam conditioning.'
  },
  {
    name: 'Oil Expeller Machine',
    image: '/turnkey-brochures/images/edible-oil-gallery/3_oil_expeller.jpg',
    desc: 'Extracts crude oil efficiently while generating high-quality oil cake by-product.'
  },
  {
    name: 'Crude Oil Filtration System',
    image: '/turnkey-brochures/images/edible-oil-gallery/4_crude_oil_filtration.jpg',
    desc: 'Removes suspended particles and impurities to produce cleaner crude oil.'
  },
  {
    name: 'Edible Oil Refining Plant',
    image: '/turnkey-brochures/images/edible-oil-gallery/5_refining_plant.jpg',
    desc: 'Performs neutralization, bleaching and deodorization for premium refined edible oil.'
  },
  {
    name: 'Automatic Oil Filling & Packaging System',
    image: '/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg',
    desc: 'Automates filling, capping, labeling and carton packing for final dispatch.'
  }
]\n\n\);

// FAQS
jsxContent = jsxContent.replace(/const FAQS = \[[\s\S]*?\]\n\n/, \const FAQS = [
  {
    question: "What types of edible oils can be processed in this plant?",
    answer: "The plant can process sunflower, soybean, groundnut, cottonseed, mustard and several other oil-bearing seeds."
  },
  {
    question: "Does the plant include refining equipment?",
    answer: "Yes. The complete plant includes refining systems for neutralization, bleaching and deodorization."
  },
  {
    question: "Can the plant be customized for different capacities?",
    answer: "Yes. Capacities can be customized from small-scale operations to large industrial production facilities."
  },
  {
    question: "Is automatic packaging included?",
    answer: "Yes. Automated filling, capping, labeling and packing systems can be integrated."
  },
  {
    question: "Do you provide turnkey installation?",
    answer: "Yes. Complete engineering, manufacturing, installation and commissioning services are provided."
  }
]\n\n\);

// GALLERY_IMAGES
jsxContent = jsxContent.replace(/const GALLERY_IMAGES = \[[\s\S]*?\]\n\n/, \const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/edible-oil-gallery/1_cleaning_destoning.jpg', caption: 'Seed Cleaning & Destoning' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/2_cracking_conditioning.jpg', caption: 'Seed Cracking & Conditioning' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/3_oil_expeller.jpg', caption: 'Oil Expeller' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/4_crude_oil_filtration.jpg', caption: 'Crude Oil Filtration' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/5_refining_plant.jpg', caption: 'Edible Oil Refining Plant' },
  { src: '/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg', caption: 'Oil Packaging System' },
]\n\n\);

// SEO & Titles
jsxContent = jsxContent.replace(/document\.title = 'Complete Peanut Oil Mill Plant \| Turnkey Solutions \| Salvin Industries'/g, "document.title = 'Complete Edible Oil Processing Plant | Turnkey Solutions | Salvin Industries'");
jsxContent = jsxContent.replace(/Advanced turnkey solution for producing high-quality edible peanut oil with maximum extraction efficiency\./g, "The Edible Oil Processing Plant is a complete turnkey solution for producing high-quality refined edible oils from various oilseeds.");

// Hero Content
jsxContent = jsxContent.replace(/TURNKEY PEANUT OIL SOLUTION/g, 'TURNKEY EDIBLE OIL SOLUTION');
jsxContent = jsxContent.replace(/Complete Peanut Oil Mill Plant/g, 'Complete Edible Oil Processing Plant');
jsxContent = jsxContent.replace(/The Peanut Oil Mill Plant is a complete turnkey solution for producing high-quality edible peanut oil\. The plant integrates cleaning, shelling, roasting, oil expelling, filtration and automatic packaging systems to ensure maximum oil recovery, premium quality and efficient production\./g, 'The Edible Oil Processing Plant is a complete turnkey solution for producing high-quality refined edible oils from various oilseeds. The plant integrates seed cleaning, conditioning, oil extraction, filtration, refining, and automated packaging systems to ensure maximum oil recovery, superior purity, and consistent product quality.');
jsxContent = jsxContent.replace(/<div className="eop-hero__bg" style=\{\{ backgroundImage: \url\('\/turnkey-brochures\/images\/peanut-oil-mill-gallery\/6_oil_packaging\.jpg'\)\ \}\} \/>/g, \<div className="eop-hero__bg" style={{ backgroundImage: \\\url('/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg')\\\ }} />\);

// Overview Section
jsxContent = jsxContent.replace(/<h2 className="eop-section-title">Complete Peanut Oil Mill <span className="eop-accent">Plant<\/span><\/h2>/g, \<h2 className="eop-section-title">Complete Edible Oil Processing <span className="eop-accent">Plant</span></h2>\);

jsxContent = jsxContent.replace(/<p className="eop-overview__feature-title">Premium Peanut Oil Production<\/p>\s*<p className="eop-overview__feature-desc">Produces high-quality edible peanut oil with maximum extraction efficiency\.<\/p>/g, \<p className="eop-overview__feature-title">Premium Edible Oil Production</p>
                    <p className="eop-overview__feature-desc">Produces refined edible oils with high purity and superior market value.</p>\);

jsxContent = jsxContent.replace(/<p className="eop-overview__feature-title">Fully Automated Processing Line<\/p>\s*<p className="eop-overview__feature-desc">Reduces labor requirements while improving productivity\.<\/p>/g, \<p className="eop-overview__feature-title">Advanced Extraction & Refining</p>
                    <p className="eop-overview__feature-desc">Integrated extraction and refining technologies for maximum efficiency.</p>\);

jsxContent = jsxContent.replace(/<p className="eop-overview__feature-title">Advanced Oil Extraction Technology<\/p>\s*<p className="eop-overview__feature-desc">Optimized oil recovery and consistent product quality\.<\/p>/g, \<p className="eop-overview__feature-title">Multi-Oil Processing Capability</p>
                    <p className="eop-overview__feature-desc">Suitable for sunflower, soybean, groundnut, cottonseed and other oilseeds.</p>\);

jsxContent = jsxContent.replace(/<p className="eop-overview__feature-title">Complete Turnkey Manufacturing<\/p>\s*<p className="eop-overview__feature-desc">Design, engineering, installation and commissioning support\.<\/p>/g, \<p className="eop-overview__feature-title">Complete Turnkey Manufacturing</p>
                    <p className="eop-overview__feature-desc">Design, engineering, installation and commissioning support.</p>\);

jsxContent = jsxContent.replace(/<img src="\/turnkey-brochures\/images\/peanut-oil-mill-gallery\/6_oil_packaging\.jpg" alt="Peanut Oil Mill Plant by Salvin Industries" loading="lazy" \/>/g, \<img src="/turnkey-brochures/images/edible-oil-gallery/6_oil_packaging.jpg" alt="Edible Oil Processing Plant by Salvin Industries" loading="lazy" />\);

// Workflow
jsxContent = jsxContent.replace(/<h2 className="eop-section-title">Peanut Oil Mill <span className="eop-accent">Workflow<\/span><\/h2>/g, \<h2 className="eop-section-title">Edible Oil Processing <span className="eop-accent">Workflow</span></h2>\);
jsxContent = jsxContent.replace(/<p className="eop-section-subtitle">A complete peanut oil processing line designed to maximize oil yield while maintaining purity, flavor and production efficiency\.<\/p>/g, \<p className="eop-section-subtitle">A complete production process covering seed preparation, oil extraction, purification, refining and final packaging.</p>\);

// FAQs Header
jsxContent = jsxContent.replace(/<p className="eop-section-subtitle">Everything you need to know about our Peanut Oil Mill Plant\.<\/p>/g, \<p className="eop-section-subtitle">Everything you need to know about our Edible Oil Processing Plant.</p>\);

// Gallery Header
jsxContent = jsxContent.replace(/<h2 className="eop-section-title">Plant <span className="eop-accent">Gallery<\/span><\/h2>/g, \<h2 className="eop-section-title">Edible Oil Processing Plant <span className="eop-accent">Gallery</span></h2>\);

// CTA
jsxContent = jsxContent.replace(/<h2>Ready to Build Your Peanut Oil Mill Plant\?<\/h2>/g, \<h2>Ready to Build Your Edible Oil Processing Plant?</h2>\);
jsxContent = jsxContent.replace(/<p>\s*Get a customized peanut oil processing solution engineered for maximum oil recovery, premium product quality and long-term operational efficiency\.\s*<\/p>/g, \<p>
              Get a customized edible oil processing solution designed for maximum efficiency, superior oil quality and long-term operational reliability.
            </p>\);
jsxContent = jsxContent.replace(/I%20am%20interested%20in%20the%20Peanut%20Oil%20Mill%20Plant/g, \I%20am%20interested%20in%20the%20Edible%20Oil%20Processing%20Plant\);


fs.writeFileSync(targetJsxPath, jsxContent);
fs.writeFileSync(targetCssPath, cssContent);
console.log('Template cloned to EdibleOilProcessingDetailPage');
