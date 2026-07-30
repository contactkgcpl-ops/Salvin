const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.jsx'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // We are looking for the exact structure inside the map loop of rcp-process-flow-container
  const targetPattern = /<div className="rcp-process-card">[\s\S]*?<div className="rcp-process-card__icon">[\s\S]*?\{Icon\}[\s\S]*?<\/div>[\s\S]*?<div className="rcp-process-card__label">\{stepTitle\}<\/div>[\s\S]*?<\/div>\s*(?:\{\/\* ARROW \*\/\}|)/;

  if (content.includes('className="rcp-process-flow-container"')) {
    // Make sure we only add the arrow if it's not already there.
    if (!content.includes('rcp-process-arrow')) {
      // Find the card block and append the arrow
      content = content.replace(/(<div className="rcp-process-card">[\s\S]*?\{stepTitle\}<\/div>\s*<\/div>)/, 
      `$1
                  {i < 5 && (
                    <div className="rcp-process-arrow">
                      <svg className="rcp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  )}`
      );

      fs.writeFileSync(filePath, content, 'utf-8');
      updatedCount++;
      console.log(`Added arrows to ${file}`);
    } else {
      // console.log(`${file} already has arrows.`);
    }
  }
}

console.log(`Successfully added arrows to ${updatedCount} files.`);
