const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  files.forEach((file) => {
    if (path.extname(file) === '.css') {
      const filePath = path.join(directoryPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      let modified = false;

      // Replace background
      if (content.includes('background: rgba(244, 124, 32, .08);')) {
        content = content.replace(/background:\s*rgba\(244,\s*124,\s*32,\s*\.08\);/g, 'background: #FFF4ED;');
        modified = true;
      }
      
      // Replace color (e.g., color: var(--wfp-orange); or color: var(--rcp-orange);)
      // Note: we only want to replace it INSIDE the -section-badge block!
      // A better way is to match the entire block
      const blockRegex = /\.([a-z0-9-]+)-section-badge\s*\{([^}]*)\}/g;
      
      content = content.replace(blockRegex, (match, prefix, innerContent) => {
        let newInner = innerContent;
        newInner = newInner.replace(/background:\s*[^;]+;/, 'background: #FFF4ED;');
        newInner = newInner.replace(/color:\s*[^;]+;/, 'color: #000B29;');
        newInner = newInner.replace(/border:\s*[^;]+;/, 'border: 1px solid #FFD8C4;');
        newInner = newInner.replace(/padding:\s*[^;]+;/, 'padding: 8px 16px;');
        return `.${prefix}-section-badge {${newInner}}`;
      });
      
      if (content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  });
});
