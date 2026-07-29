const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // We want to target the block containing `-process-flow-container`
  // And replace `flex-wrap: wrap;` with `flex-wrap: nowrap;`
  // and `gap: 36px;` (or any gap) with `gap: 16px;`
  
  // Actually, since these files are mostly identical structure, we can just replace:
  // "flex-wrap: wrap;" -> "flex-wrap: nowrap;" 
  // ONLY if it's in the process flow container.
  
  // Let's use a regex to replace inside the process flow container block
  const blockRegex = /(\.[a-z0-9]+-process-flow-container\s*\{)([^}]+)(\})/g;
  
  content = content.replace(blockRegex, (match, p1, p2, p3) => {
    let newP2 = p2.replace(/flex-wrap:\s*wrap;/g, 'flex-wrap: nowrap;');
    newP2 = newP2.replace(/gap:\s*\d+px;/g, 'gap: 16px;');
    // Also let's make sure it scrolls horizontally instead of overflowing the page
    if (!newP2.includes('overflow-x: auto;')) {
      newP2 = newP2.replace(/overflow:\s*visible;/g, 'overflow-x: auto; overflow-y: hidden; padding-bottom: 12px;');
    }
    
    if (newP2 !== p2) {
      changed = true;
    }
    return p1 + newP2 + p3;
  });

  // Let's also update the media queries gap if they exist
  // Something like `.rcp-process-flow-container { gap: 36px; }` inside @media
  const mediaGapRegex = /(\.[a-z0-9]+-process-flow-container\s*\{[^}]*?)gap:\s*\d+px;([^}]*\})/g;
  content = content.replace(mediaGapRegex, (match, p1, p2) => {
    changed = true;
    return p1 + 'gap: 12px;' + p2;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log("Updated", file);
  }
}

console.log(`Updated ${updatedCount} CSS files.`);
