const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/digesh prajapati/Desktop/salvinindia/src/pages/TurnkeyProject/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('DetailPage.jsx'));

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find prefix
    const match = content.match(/className="([a-z0-9]+)-hero/);
    if (!match) continue;
    const px = match[1];
    
    // Add import if not present
    if (!content.includes('WhyChooseSalvin')) {
        // Find last import
        const importsEnd = content.lastIndexOf('import ');
        const nextLine = content.indexOf('\n', importsEnd) + 1;
        content = content.substring(0, nextLine) + "import WhyChooseSalvin from './WhyChooseSalvin'\n" + content.substring(nextLine);
    }
    
    // Replace the section
    const sectionRegex = /\{\/\*\s*═══\s*WHY CHOOSE SALVIN\s*═══\s*\*\/\}\s*<section[^>]*id="why-salvin"[^>]*>[\s\S]*?<\/section>/g;
    
    if (content.match(sectionRegex)) {
        content = content.replace(sectionRegex, `{/* ═══ WHY CHOOSE SALVIN ═══ */}\n      <WhyChooseSalvin prefix="${px}" isVisible={isVisible['why-salvin']} />`);
        fs.writeFileSync(filePath, content);
        console.log(`Replaced in ${file}`);
        changedFiles++;
    } else {
        // Try without the comment match
        const backupRegex = /<section[^>]*id="why-salvin"[^>]*>[\s\S]*?<\/section>/g;
        if (content.match(backupRegex)) {
            content = content.replace(backupRegex, `{/* ═══ WHY CHOOSE SALVIN ═══ */}\n      <WhyChooseSalvin prefix="${px}" isVisible={isVisible['why-salvin']} />`);
            fs.writeFileSync(filePath, content);
            console.log(`Replaced (backup regex) in ${file}`);
            changedFiles++;
        }
    }
}
console.log(`Updated ${changedFiles} files with the shared component.`);
