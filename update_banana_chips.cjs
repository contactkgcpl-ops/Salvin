const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Add a specific override for banana chips hero image in dynamic project generation
const overrideCode = `
  // Specific dynamic project overrides
  if (slug === 'banana-chips-processing-plant') {
    project.heroImage = '/turnkey-brochures/images/banana-chips-processing-plant/banana_chips_hero_banner.png';
  }

  dynamicProjectCache[slug] = project;
`;

if (!content.includes("slug === 'banana-chips-processing-plant'")) {
  content = content.replace(
    /dynamicProjectCache\[slug\] = project;/,
    overrideCode
  );
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("Added Banana Chips dynamic override");
} else {
  console.log("Override already exists");
}
