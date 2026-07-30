const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChocolateProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// I also need to update the desc properties for each machinery item so they don't say the wrong thing.
content = content.replace(/desc: "Precision-engineered system for cocoa bean receiving & cleaning."/, 'desc: "Precision-engineered system for industrial cocoa bean roasting."');
content = content.replace(/desc: "Precision-engineered system for roasting."/, 'desc: "Precision-engineered system for cocoa grinding and liquor preparation."');
content = content.replace(/desc: "Precision-engineered system for winnowing."/, 'desc: "Precision-engineered system for chocolate conche and refiner."');
content = content.replace(/desc: "Precision-engineered system for cocoa nib grinding."/, 'desc: "Precision-engineered system for chocolate mass mixing."');
content = content.replace(/desc: "Precision-engineered system for refining \(conching\)."/, 'desc: "Precision-engineered system for automatic chocolate moulding."');
content = content.replace(/desc: "Precision-engineered system for tempering."/, 'desc: "Precision-engineered system for automatic chocolate wrapping."');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed Chocolate Plant machine descriptions');
