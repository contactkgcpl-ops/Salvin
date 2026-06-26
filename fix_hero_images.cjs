const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Pickle
content = content.replace(
  /heroImage: '\/turnkey-brochures\/images\/pickle-processing-plant\/pickle_brining\.jpg',/,
  "heroImage: '/turnkey-brochures/images/pickle-processing-plant/pickle_plant_hero.jpg',"
);

// Update CTC Tea
content = content.replace(
  /heroImage: '\/turnkey-brochures\/images\/ctc-tea-processing-plant\/ctc_tea_plucking\.jpg',/,
  "heroImage: '/turnkey-brochures/images/ctc-tea-processing-plant/ctc_tea_hero.jpg',"
);

// Update Instant Mix
content = content.replace(
  /heroImage: '\/assets\/instant_mix\.jpg',/,
  "heroImage: '/turnkey-brochures/images/instant-mix-frozen-food-processing-plant/instant_mix_frozen_food_hero.jpg',"
);
// In case it was already different:
content = content.replace(
  /heroImage: '\/turnkey-brochures\/images\/instant-mix-frozen-food-processing-plant\/instant-mix-frozen-food-brochure\.jpg',/,
  "heroImage: '/turnkey-brochures/images/instant-mix-frozen-food-processing-plant/instant_mix_frozen_food_hero.jpg',"
);

// Update Mayonnaise
content = content.replace(
  /heroImage: '\/assets\/mayo_plant\.jpg',/,
  "heroImage: '/assets/turnkey-brochures/images/mayonnaise-processing-plant/mayonnaise_hero.jpg',"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Hero images updated.");
