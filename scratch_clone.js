const fs = require('fs');
const jsxTemplatePath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PotatoPowderDehydrationDetailPage.jsx';
const cssTemplatePath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PotatoPowderDehydrationDetailPage.css';
const targetJsxPath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PeanutOilMillDetailPage.jsx';
const targetCssPath = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components/PeanutOilMillDetailPage.css';

let jsxContent = fs.readFileSync(jsxTemplatePath, 'utf8');
let cssContent = fs.readFileSync(cssTemplatePath, 'utf8');

jsxContent = jsxContent.replace(/PotatoPowderDehydrationDetailPage/g, 'PeanutOilMillDetailPage');
jsxContent = jsxContent.replace(/ppd-/g, 'pom-');
cssContent = cssContent.replace(/PotatoPowderDehydrationDetailPage/g, 'PeanutOilMillDetailPage');
cssContent = cssContent.replace(/ppd-/g, 'pom-');

fs.writeFileSync(targetJsxPath, jsxContent);
fs.writeFileSync(targetCssPath, cssContent);
console.log('Template cloned to PeanutOilMillDetailPage');
