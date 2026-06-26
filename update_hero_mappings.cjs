const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Biscuit hero image
content = content.replace(
  /heroImage: '\/turnkey-brochures\/images\/31_biskuit_plant\.png',/g,
  "heroImage: '/turnkey-brochures/images/biscuit-baking-turnkey/biscuit-hero-banner.png',"
);

// Update Banana Chips hero image
content = content.replace(
  /heroImage: '\/turnkey-brochures\/images\/banana-chips-processing-plant\/banana-chips-hero\.jpg',/g,
  "heroImage: '/turnkey-brochures/images/banana-chips-processing-plant/banana_chips_hero_banner.png',"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Hero images mapped in turnkeyProjectsData.js");
