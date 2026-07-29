const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const regex = /(-process-flow-container\s*\{[\s\S]*?\})/g;
  let changed = false;
  
  content = content.replace(regex, (match) => {
    changed = true;
    return match.replace(/gap:\s*\d+px;/, 'gap: 28px;');
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log("Updated", file);
  }
}
console.log(`Updated ${updatedCount} CSS files.`);
