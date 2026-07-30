const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'RedChilliDetailPage.css');
let cssContent = fs.readFileSync(cssPath, 'utf-8');

// Change max-height from 200px to something bigger so long answers don't get cut off, and ensure opacity works properly.
cssContent = cssContent.replace(
  /\.rcp-faq__item--open \.rcp-faq__answer-wrapper \{\s*max-height: 200px;\s*\/\* Big enough for the answers \*\/\s*\}/g,
  `.rcp-faq__item--open .rcp-faq__answer-wrapper {
  max-height: 800px;
}`
);

fs.writeFileSync(cssPath, cssContent, 'utf-8');
console.log('Fixed FAQ max-height in RedChilliDetailPage.css');
