const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'CorianderPowderDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the specific hero image URL
content = content.replace(
  /url\('\/turnkey-brochures\/images\/coriander-powder-gallery\/6_packaging\.jpg'\)/g,
  "url('/turnkey-brochures/images/coriander-powder/coriander_powder_hero.png')"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated Coriander Powder hero image URL in the specific component!");
