const fs = require('fs');

const jsxPath = 'src/pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage.jsx';
let jsx = fs.readFileSync(jsxPath, 'utf8');

// 1. Add Image Imports
const imports = `
import heroBg from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/main_plant.jpg';
import eq1 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/oil_ingredient_dosing.jpg';
import eq2 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_premixing.jpg';
import eq3 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_emulsification.jpg';
import eq4 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/vacuum_homogenizer.jpg';
import eq5 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/quality_inspection.jpg';
import eq6 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/automatic_filling.jpg';
`;

// Inject imports after React imports
jsx = jsx.replace(/(import .*? from 'react.*?';\n)/, '$1' + imports);

// 2. Replace Hero Background
jsx = jsx.replace(/style=\{\{\s*backgroundImage:\s*\`url\('\/turnkey-brochures\/images\/mayonnaise\/mayonnaise_hero\.jpg'\)\`\s*\}\}/g, 'style={{ backgroundImage: `url(${heroBg})` }}');

// 3. Replace Subtitle
jsx = jsx.replace(/Complete Turnkey solutions for Mayonnaise Processing & Packaging/g, 'Complete Turnkey Solutions for Industrial Mayonnaise Manufacturing, Processing & Packaging');

// 4. Update Buttons (Enquire Now)
// The CTA buttons in hero are: "Download Brochure" and "More Details".
// Let's replace "More Details" with "Enquire Now" and point to /contact
jsx = jsx.replace(/>More Details</g, '>Enquire Now<');

// 5. Replace Process Steps
jsx = jsx.replace(/const PROCESS_STEPS = \[([\s\S]*?)\]/g, `const PROCESS_STEPS = [
  { id: 1, title: 'Raw Material Preparation' },
  { id: 2, title: 'Oil & Ingredient Dosing System' },
  { id: 3, title: 'High Shear Premixing Tank' },
  { id: 4, title: 'High Shear Emulsification System' },
  { id: 5, title: 'Vacuum Homogenizer Mixer' },
  { id: 6, title: 'Quality Inspection & Metal Detection' },
  { id: 7, title: 'Automatic Filling & Packaging' }
]`);

// 6. Replace Machinery
jsx = jsx.replace(/const MACHINERY_LIST = \[([\s\S]*?)\]/g, `const MACHINERY_LIST = [
  {
    name: 'Oil & Ingredient Dosing System',
    image: eq1,
    desc: 'Automated dosing and weighing system ensuring precise recipe formulation for oils, water, and additives.'
  },
  {
    name: 'High Shear Premixing Tank',
    image: eq2,
    desc: 'Pre-emulsification vessel designed to uniformly blend raw ingredients prior to final homogenization.'
  },
  {
    name: 'High Shear Emulsification System',
    image: eq3,
    desc: 'Advanced emulsification technology creating stable droplet sizes for creamy mayonnaise texture.'
  },
  {
    name: 'Vacuum Homogenizer Mixer',
    image: eq4,
    desc: 'Core processing unit operating under vacuum to eliminate aeration and ensure perfect emulsion.'
  },
  {
    name: 'Quality Inspection & Metal Detection System',
    image: eq5,
    desc: 'Inline optical and metal detection systems guaranteeing absolute food safety and jar integrity.'
  },
  {
    name: 'Automatic Filling & Packaging Machine',
    image: eq6,
    desc: 'High-speed rotary or inline filling systems capable of handling various jar and bottle sizes efficiently.'
  }
]`);

// 7. Replace Gallery Images
jsx = jsx.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/g, `const GALLERY_IMAGES = [
  { src: heroBg, caption: 'Mayonnaise Plant Main Processing Line' },
  { src: eq1, caption: 'Oil & Ingredient Dosing System' },
  { src: eq2, caption: 'High Shear Premixing Tank' },
  { src: eq3, caption: 'High Shear Emulsification System' },
  { src: eq4, caption: 'Vacuum Homogenizer Mixer' },
  { src: eq5, caption: 'Quality Inspection & Metal Detection System' },
  { src: eq6, caption: 'Automatic Filling & Packaging Machine' }
]`);

// 8. Replace FAQs
jsx = jsx.replace(/const FAQS = \[([\s\S]*?)\]/g, `const FAQS = [
  {
    question: "What is a Mayonnaise Processing Plant?",
    answer: "A Mayonnaise Processing Plant is an industrial turnkey system comprising mixing, emulsification, homogenization, and filling lines specifically designed to produce stable, creamy mayonnaise and similar sauces."
  },
  {
    question: "What production capacities are available?",
    answer: "We offer completely scalable systems that cater to a wide range of production needs, from pilot-scale batches up to continuous, high-volume industrial operations."
  },
  {
    question: "Is the plant fully automatic?",
    answer: "Yes, our processing solutions feature PLC-based automation for precise recipe control, automated dosing, continuous monitoring, and minimal manual intervention."
  },
  {
    question: "What packaging options are supported?",
    answer: "Our automated filling and packaging machines are highly versatile and can support various packaging options including glass jars, PET bottles, pouches, and bulk pails."
  },
  {
    question: "Does the plant comply with food safety standards?",
    answer: "Absolutely. The entire plant is constructed using high-grade stainless steel with hygienic, easy-to-clean designs that comply with strict international food-grade processing standards."
  }
]`);

// 9. Update the "Complete Processing Solution" content
// We need to inject the 6 bullet points:
// • High capacity production
// • Hygienic stainless steel design
// • PLC based automation
// • Consistent emulsion quality
// • Reduced production losses
// • Food-grade processing standards
const overviewText = `
              <ul className="mpp-overview__list">
                <li><span className="mpp-check">✓</span> High capacity production</li>
                <li><span className="mpp-check">✓</span> Hygienic stainless steel design</li>
                <li><span className="mpp-check">✓</span> PLC based automation</li>
                <li><span className="mpp-check">✓</span> Consistent emulsion quality</li>
                <li><span className="mpp-check">✓</span> Reduced production losses</li>
                <li><span className="mpp-check">✓</span> Food-grade processing standards</li>
              </ul>
`;
jsx = jsx.replace(/<p className="mpp-overview__text">.*?<\/p>/s, overviewText);

// Also need to update the machinery image in the Complete Processing Solution section
jsx = jsx.replace(/src="\/turnkey-brochures\/images\/mayonnaise\/mayonnaise_overview\.jpg"/g, 'src={eq3}');

// Fix Gallery src attributes since it uses imported objects now instead of strings
// In the JSX mapping: <img src={img.src} -> this is fine because we passed { src: eq1 } etc.

fs.writeFileSync(jsxPath, jsx);

console.log('Successfully updated MayonnaiseProcessingDetailPage.jsx');
