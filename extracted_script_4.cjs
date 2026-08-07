const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/FaceCreamManufacturingDetailPage.jsx');
let jsxCode = fs.readFileSync(jsxPath, 'utf8');

// The file has duplicated the first 10 lines, causing a syntax error.
// We will split by lines and remove the first 10 lines.
let lines = jsxCode.split('\n');

// Verify that line 10 (0-indexed) starts with 'import WhyChooseSalvin'
if (lines[10] && lines[10].startsWith('import WhyChooseSalvin')) {
  lines = lines.slice(10);
  fs.writeFileSync(jsxPath, lines.join('\n'));
  console.log("Fixed duplication error!");
} else {
  console.error("The 11th line does not start with import WhyChooseSalvin, aborting to be safe.");
  console.log("Line 11 is:", lines[10]);
}
