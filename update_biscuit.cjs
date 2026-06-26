const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Biscuit Plant Title and Images
content = content.replace(/'Biscuit Baking Turnkey'/g, "'Biscuit Processing & Packaging Plant'");
content = content.replace(/Biscuit Baking Plant/g, "Biscuit Processing & Packaging Plant");
content = content.replace(/image: '\/assets\/31_biskuit_plant\.png',/g, "image: '/turnkey-brochures/images/31_biskuit_plant.png',");
content = content.replace(/photoImage: '\/assets\/31_biskuit_plant\.png',/g, "photoImage: '/turnkey-brochures/images/31_biskuit_plant.png',");
content = content.replace(/heroImage: '\/assets\/31_biskuit_plant\.png',/g, "heroImage: '/turnkey-brochures/images/31_biskuit_plant.png',");

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated biscuit plant in turnkeyProjectsData.js");
