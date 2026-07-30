const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChocolateProcessingPlantDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace machinery names to match exactly
content = content.replace(/name: "Cocoa Bean Receiving & Cleaning"/, 'name: "Industrial Cocoa Bean Roasting"');
content = content.replace(/name: "Roasting"/, 'name: "Cocoa Grinding & Liquor Preparation"');
content = content.replace(/name: "Winnowing"/, 'name: "Chocolate Conche & Refiner Roll"');
content = content.replace(/name: "Cocoa Nib Grinding"/, 'name: "Chocolate Mass Mixing Tank"');
content = content.replace(/name: "Refining \(Conching\)"/, 'name: "Automatic Chocolate Moulding Machine"');
content = content.replace(/name: "Tempering"/, 'name: "Automatic Chocolate Wrapping Machine"');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated Chocolate Processing machinery names.');
