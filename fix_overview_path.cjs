const fs = require('fs');
const file = 'src/pages/TurnkeyProject/components/SpiceBlendingPlantDetailPage.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'src="/turnkey-brochures/images/spice-blending-gallery/ribbon_blender.jpg"',
  'src="/turnkey-brochures/images/spice-blending/ribbon_blender.jpg"'
);
fs.writeFileSync(file, content);
console.log("Replaced overview image path successfully");
