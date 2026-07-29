const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let changed = false;
  let inProcessFlow = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('-process-flow-container')) {
      inProcessFlow = true;
    }
    if (inProcessFlow && lines[i].includes('}')) {
      // It might close the block
      inProcessFlow = false;
    }
    
    if (inProcessFlow && lines[i].includes('gap:')) {
      lines[i] = lines[i].replace(/gap:\s*\d+px;/, 'gap: 60px;');
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    updatedCount++;
    console.log("Updated", file);
  }
}
console.log(`Updated ${updatedCount} CSS files.`);
