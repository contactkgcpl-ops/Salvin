const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.css'));

let updatedFiles = 0;
for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Desktop
  content = content.replace(/min-height:\s*(72vh|80vh|70vh|65vh|60vh);/g, 'min-height: 60vh;');
  content = content.replace(/padding:\s*80px\s+clamp\(1rem,\s*4vw,\s*2\.5rem\)\s*56px;/g, 'padding: 0 clamp(1rem, 4vw, 2.5rem);');

  // Tablet media query
  content = content.replace(/\.([a-z]+)-hero\s*\{\s*min-height:\s*65vh;\s*\}/g, '.-hero {\n    min-height: 52vh;\n  }');
  content = content.replace(/\.([a-z]+)-hero__content\s*\{\s*padding:\s*70px\s*20px\s*44px;\s*\}/g, '.-hero__content {\n    padding: 0 20px;\n  }');
  
  // Mobile media query
  content = content.replace(/\.([a-z]+)-hero\s*\{\s*min-height:\s*60vh;\s*\}/g, '.-hero {\n    min-height: 45vh;\n  }');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFiles++;
  }
}
console.log('Updated ' + updatedFiles + ' CSS files');

const jsxPath = path.join(componentsDir, 'TurnkeyDetailPage.jsx');
if (fs.existsSync(jsxPath)) {
  let jsxContent = fs.readFileSync(jsxPath, 'utf8');
  const targetStr = "style={{ minHeight: details.heroMinHeight || '72vh' }}";
  if (jsxContent.includes(targetStr)) {
    jsxContent = jsxContent.replace(targetStr, "");
    fs.writeFileSync(jsxPath, jsxContent, 'utf8');
    console.log('Updated TurnkeyDetailPage.jsx');
  }
}

const dataPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'turnkeyProjectsData.js');
if (fs.existsSync(dataPath)) {
  let dataContent = fs.readFileSync(dataPath, 'utf8');
  let oldData = dataContent;
  // Remove all heroMinHeight lines
  dataContent = dataContent.replace(/\s*heroMinHeight:\s*['"][^'"]+['"],/g, '');
  if (dataContent !== oldData) {
    fs.writeFileSync(dataPath, dataContent, 'utf8');
    console.log('Removed heroMinHeight from turnkeyProjectsData.js');
  }
}
