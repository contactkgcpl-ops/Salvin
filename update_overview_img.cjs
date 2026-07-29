const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Change .xxx-overview__image { ... height: auto; ... } to height: 100%;
  // Using a replacer function to carefully target this
  content = content.replace(/(-overview__image\s*\{[\s\S]*?\})/g, (match) => {
    let newMatch = match.replace(/height:\s*auto;/, 'height: 100%;');
    if (newMatch !== match) changed = true;
    return newMatch;
  });

  // 2. Change .xxx-overview__image img { ... height: auto; object-fit: contain; ... }
  // to height: 100%; object-fit: cover;
  content = content.replace(/(-overview__image\s+img\s*\{[\s\S]*?\})/g, (match) => {
    let newMatch = match.replace(/height:\s*auto;/, 'height: 100%;');
    newMatch = newMatch.replace(/object-fit:\s*contain;/, 'object-fit: cover;');
    if (newMatch !== match) changed = true;
    return newMatch;
  });
  
  // 3. Change .xxx-overview__image--photo img { ... height: auto; max-height: 500px; ... }
  content = content.replace(/(-overview__image--photo\s+img\s*\{[\s\S]*?\})/g, (match) => {
    let newMatch = match.replace(/height:\s*auto;/, 'height: 100%;');
    newMatch = newMatch.replace(/max-height:\s*500px;/, 'max-height: none;');
    if (newMatch !== match) changed = true;
    return newMatch;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log("Updated", file);
  }
}
console.log(`Updated ${updatedCount} CSS files.`);
