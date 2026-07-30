const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.jsx'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Regex to find the entire SEO section
  const seoRegex = /\n\s*\{\/\* ═══ COMPREHENSIVE GUIDE[\s\S]*?<section className="rcp-section rcp-seo-content"[\s\S]*?<\/section>/;
  const seoMatch = content.match(seoRegex);

  // Regex to find the entire Process Flow section
  const processRegex = /(\{\/\* ═══ PROCESS FLOW ═══ \*\/\}[\s\S]*?<section className="rcp-section rcp-process-new"[\s\S]*?<\/section>)/;
  const processMatch = content.match(processRegex);

  if (seoMatch && processMatch) {
    const seoBlock = seoMatch[0];
    
    // Check if the SEO block is ALREADY right after the Process block
    // We can just remove it from wherever it is, and then append it after Process.
    
    // 1. Remove SEO block from current position
    let newContent = content.replace(seoBlock, '');

    // 2. Insert SEO block immediately after Process Flow block
    newContent = newContent.replace(processRegex, `$1\n${seoBlock}`);

    // Update file if changes were made
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      updatedCount++;
      console.log(`Moved SEO section in ${file}`);
    }
  } else {
    // console.log(`Skipping ${file} - Missing SEO or Process section`);
  }
}

console.log(`Successfully updated ${updatedCount} files.`);
