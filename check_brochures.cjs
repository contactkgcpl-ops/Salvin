const fs = require('fs');
const path = require('path');

const dataFile = fs.readFileSync(path.join(__dirname, 'src/pages/TurnkeyProject/data/turnkeyProjectsData.js'), 'utf8');

let projects = [];
let notWorking = [];
let workingCount = 0;

// Read CORE_PROJECTS more reliably
const coreMatch = dataFile.match(/const CORE_PROJECTS = (\{[\s\S]*?\n\});/);
if (coreMatch) {
  const block = coreMatch[1];
  const projectBlocks = block.split(/\n\s*'[a-z0-9-]+':\s*\{/i);
  for (let i = 1; i < projectBlocks.length; i++) {
    const pBlock = projectBlocks[i];
    const titleMatch = pBlock.match(/title:\s*['"]([^'"]+)['"]/);
    const pdfMatch = pBlock.match(/pdfFile:\s*['"]([^'"]+)['"]/);
    if (titleMatch) {
      projects.push({
        title: titleMatch[1],
        pdfFile: pdfMatch ? pdfMatch[1] : null
      });
    }
  }
}

const pdfsDir = path.join(__dirname, 'public/turnkey-brochures/pdfs');
for (const p of projects) {
  if (!p.pdfFile) {
    notWorking.push({ name: p.title, reason: 'Undefined brochureUrl (Missing PDF reference in turnkeyProjectsData.js)' });
    continue;
  }
  
  const pdfPath = path.join(pdfsDir, p.pdfFile);
  if (!fs.existsSync(pdfPath)) {
    notWorking.push({ name: p.title, reason: 'Missing PDF file (File does not exist on disk: ' + p.pdfFile + ')' });
    continue;
  }
  workingCount++;
}

console.log('? Download Brochure Not Working');
for (const bad of notWorking) {
  console.log('- ' + bad.name);
}
console.log('');
console.log('? Download Brochure Working');
console.log('- Total Working Plants: ' + workingCount);
console.log('');
console.log('--- Reasons ---');
for (const bad of notWorking) {
  console.log(bad.name + ': ' + bad.reason);
}

