const fs = require('fs');
const jsxPath = 'src/pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage.jsx';
let jsx = fs.readFileSync(jsxPath, 'utf8');

// The new imports
const imports = `
import eq1 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/oil_ingredient_dosing.jpg';
import eq2 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_premixing.jpg';
import eq3 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/high_shear_emulsification.jpg';
import eq4 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/vacuum_homogenizer.jpg';
import eq5 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/quality_inspection.jpg';
import eq6 from '../../../assets/turnkey-brochures/images/mayonnaise-processing-plant/automatic_filling.jpg';
`;

// Replace all imports between import './MayonnaiseProcessingDetailPage.css' and /* ─── Process Flow Steps ─── */
jsx = jsx.replace(/import eq1[\s\S]*?import eq6.*?;/g, '');
jsx = jsx.replace(/import heroBg.*?;/g, '');
jsx = jsx.replace(/(import '\.\/MayonnaiseProcessingDetailPage\.css'\n)/, '$1' + imports + '\n');

// Update Hero Background to eq6 (Automatic Filling)
jsx = jsx.replace(/style=\{\{\s*backgroundImage:\s*\`url\(\$\{heroBg\}\)\`\s*\}\}/g, 'style={{ backgroundImage: `url(${eq6})` }}');

// Update Overview image to eq1 (Oil & Ingredient Dosing)
jsx = jsx.replace(/<img src=\{eq3\} alt=\"Mayonnaise Processing Plant by Salvin Industries\" loading=\"lazy\" \/>/g, '<img src={eq1} alt=\"Mayonnaise Processing Plant by Salvin Industries\" loading=\"lazy\" />');

// Update Gallery Images to ONLY contain eq1-eq6
jsx = jsx.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/g, `const GALLERY_IMAGES = [
  { src: eq1, caption: 'Oil & Ingredient Dosing System' },
  { src: eq2, caption: 'High Shear Premixing Tank' },
  { src: eq3, caption: 'High Shear Emulsification System' },
  { src: eq4, caption: 'Vacuum Homogenizer Mixer' },
  { src: eq5, caption: 'Quality Inspection & Metal Detection System' },
  { src: eq6, caption: 'Automatic Filling & Packaging Machine' }
]`);

fs.writeFileSync(jsxPath, jsx);
console.log('Images fixed!');
