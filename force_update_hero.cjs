const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// The biscuit plant might not have the heroImage string exactly as I matched. Let's find the object block.
content = content.replace(
  /'biscuit-baking-turnkey': \{\s+title: 'Biscuit Processing & Packaging Plant',[\s\S]*?heroImage: '[^']+',/m,
  match => match.replace(/heroImage: '[^']+'/, "heroImage: '/turnkey-brochures/images/biscuit-baking-turnkey/biscuit-hero-banner.png'")
);

// Banana Chips Processing Plant
content = content.replace(
  /'banana-chips-processing-plant': \{\s+title: '[^']+',[\s\S]*?heroImage: '[^']+',/m,
  match => match.replace(/heroImage: '[^']+'/, "heroImage: '/turnkey-brochures/images/banana-chips-processing-plant/banana_chips_hero_banner.png'")
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Forced hero image mappings in turnkeyProjectsData.js");
