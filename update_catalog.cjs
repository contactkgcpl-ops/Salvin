const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'brochureCatalog.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace empty PDF string with 'biscuit_baking_turnkey.pdf' for Biscuit Baking Turnkey
content = content.replace(
  /\[\'31_biskuit_plant\.png\', \'\', \'Biscuit Baking Turnkey\',/,
  "['31_biskuit_plant.png', 'biscuit_baking_turnkey.pdf', 'Biscuit Baking Turnkey',"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated brochureCatalog.js");
