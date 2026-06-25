const fs = require('fs');
const path = require('path');

const dir = 'src/pages/TurnkeyProject/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('DetailPage.jsx') && f !== 'TurnkeyDetailPage.jsx');

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const prefixMatch = content.match(/<div className="([a-z0-9]+)-page">/);
  const prefix = prefixMatch ? prefixMatch[1] : 'rcp';
  const projectKey = file.replace('.jsx', '');

  if (content.includes('<WhyChooseSalvin')) {
    // It exists, update it to include projectKey
    // Catch either `<WhyChooseSalvin prefix="xxx" isVisible={isVisible['why-salvin']} />` or similar
    content = content.replace(/<WhyChooseSalvin prefix="[^"]+" isVisible=\{isVisible\['why-salvin'\]\}( \/?>|><\/WhyChooseSalvin>| projectKey="[^"]+" \/>)/, `<WhyChooseSalvin prefix="${prefix}" isVisible={isVisible['why-salvin']} projectKey="${projectKey}" />`);
  } else {
    // Add import
    if (!content.includes("import WhyChooseSalvin")) {
      content = content.replace("import React", "import WhyChooseSalvin from './WhyChooseSalvin';\nimport React");
    }

    // Insert block before FAQ or ENQUIRY
    const insertBlock = `
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="${prefix}" isVisible={isVisible['why-salvin']} projectKey="${projectKey}" />
`;
    
    if (content.includes('{/* ═══ FAQ SECTION ═══ */}')) {
      content = content.replace(/\s*{\/\* ═══ FAQ SECTION ═══ \*\//, insertBlock + '\n      {/* ═══ FAQ SECTION ═══ */}');
    } else if (content.includes('{/* ═══ ENQUIRY')) {
      content = content.replace(/\s*{\/\* ═══ ENQUIRY/, insertBlock + '\n      {/* ═══ ENQUIRY');
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Update completed successfully for all files!');
