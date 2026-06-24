const fs = require('fs');

let cssContent = fs.readFileSync('src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.css', 'utf8');
cssContent = cssContent.replace(/\.pbm-/g, '.imff-');
fs.writeFileSync('src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.css', cssContent);
console.log('CSS updated');
