const fs = require('fs');
const path = require('path');

const files = [
  'FullyAutomaticPasteurizedMilkPlantDetailPage.jsx',
  'FullyAutomaticSpicePackagingLineDetailPage.jsx',
  'SpiceBlendingPlantDetailPage.jsx',
  'FullyAutomatedCurryPowderProcessingPlantDetailPage.jsx'
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The error is that `<div className="rcp-overview__features">` got deleted and replaced with `</div>\n                </div>`.
  // So we search for the malformed closing tags before the first feature
  const searchRegex = /            <\/div>\r?\n                <\/div>\r?\n                <div className="rcp-overview__feature">/;
  const replaceStr = `              <div className="rcp-overview__features">\n                <div className="rcp-overview__feature">`;
  
  if (searchRegex.test(content)) {
    content = content.replace(searchRegex, replaceStr);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed \${file}`);
  } else {
    console.log(`Not found in \${file}`);
  }
});
