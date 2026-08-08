const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/TurnkeyProject/data/brochureCatalog.js');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/'cosmetic\/face_cream_hero\.png'/g, "'cosmetic/face_cream_flowchart.jpg'");
content = content.replace(/'cosmetic\/moisturizing_cream_hero\.png'/g, "'cosmetic/moisturizing_cream_flowchart.jpg'");
content = content.replace(/'cosmetic\/sunscreen_lotion_hero\.png'/g, "'cosmetic/sunscreen_lotion_flowchart.jpg'");
content = content.replace(/'cosmetic\/hair_conditioner_hero\.png'/g, "'cosmetic/hair_conditioner_flowchart.jpg'");
content = content.replace(/'cosmetic\/hair_serum_hero\.png'/g, "'cosmetic/hair_serum_flowchart.jpg'");
content = content.replace(/'cosmetic\/baby_lotion_hero\.png'/g, "'cosmetic/baby_lotion_flowchart.jpg'");
content = content.replace(/'cosmetic\/body_butter_hero\.png'/g, "'cosmetic/body_butter_flowchart.jpg'");
content = content.replace(/'cosmetic\/facial_serum_hero\.png'/g, "'cosmetic/facial_serum_flowchart.jpg'");
content = content.replace(/'cosmetic\/baby_shampoo_hero\.png'/g, "'cosmetic/baby_shampoo_flowchart.jpg'");

fs.writeFileSync(file, content);
console.log('Updated brochureCatalog.js');
