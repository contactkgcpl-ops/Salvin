const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Change .xxx-overview__grid { align-items: flex-start; } to align-items: center;
  content = content.replace(/(-overview__grid\s*\{[\s\S]*?\})/g, (match) => {
    let newMatch = match.replace(/align-items:\s*flex-start;/, 'align-items: center;');
    if (newMatch !== match) changed = true;
    return newMatch;
  });

  // 2. Change .xxx-overview__image { ... height: 100%; ... } back to height: auto;
  content = content.replace(/(-overview__image\s*\{[\s\S]*?\})/g, (match) => {
    let newMatch = match.replace(/height:\s*100%;/, 'height: auto;');
    if (newMatch !== match) changed = true;
    return newMatch;
  });

  // 3. Change .xxx-overview__image img { height: 100%; ... } to max-height: 380px; height: 100%;
  content = content.replace(/(-overview__image\s+img\s*\{[\s\S]*?\})/g, (match) => {
    // If it has height: 100%, change to height: 380px;
    let newMatch = match.replace(/height:\s*100%;/, 'height: 380px;');
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
