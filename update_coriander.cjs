const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Add Coriander Powder override
const overrideCode = `
  if (slug === 'coriander-powder-plant') {
    project.heroImage = '/turnkey-brochures/images/coriander-powder/coriander_powder_hero.png';
  }
  if (slug === 'banana-chips-processing-plant') {
`;

if (!content.includes("slug === 'coriander-powder-plant'")) {
  content = content.replace(
    /if \(slug === 'banana-chips-processing-plant'\) \{/,
    overrideCode
  );
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("Added Coriander Powder dynamic override");
} else {
  console.log("Override already exists");
}
