const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChocolateProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace long weird names with exact machine names based on labels
content = content.replace(/name: "Industrial Cocoa Bean Roasting"/g, 'name: "Cocoa Bean Roaster"');
content = content.replace(/caption: 'Industrial Cocoa Bean Roasting'/g, "caption: 'Cocoa Bean Roaster'");

content = content.replace(/name: "Cocoa Grinding & Liquor Preparation"/g, 'name: "Cocoa Grinder & Liquor Tank"');
content = content.replace(/caption: 'Cocoa Grinding & Liquor Preparation'/g, "caption: 'Cocoa Grinder & Liquor Tank'");

content = content.replace(/name: "Chocolate Conche & Refiner Roll"/g, 'name: "Chocolate Conche & Refiner"');
content = content.replace(/caption: 'Chocolate Conche & Refiner Roll'/g, "caption: 'Chocolate Conche & Refiner'");

content = content.replace(/name: "Chocolate Mass Mixing Tank"/g, 'name: "Chocolate Mixing Tank"');
content = content.replace(/caption: 'Chocolate Mass Mixing Tank'/g, "caption: 'Chocolate Mixing Tank'");

// 5 and 6 are already good: Automatic Chocolate Moulding Machine, Automatic Chocolate Wrapping Machine.

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed Chocolate Plant machine names');
