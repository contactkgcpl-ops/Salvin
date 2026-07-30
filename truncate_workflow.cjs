const fs = require('fs');
const path = require('path');

const files = [
  'AloeVeraJuiceProcessingPlantDetailPage.jsx',
  'BiscuitPlantDetailPage.jsx',
  'CookiePlantDetailPage.jsx',
  'BreadPlantDetailPage.jsx',
  'CakePlantDetailPage.jsx',
  'WaferPlantDetailPage.jsx',
  'ChocolateProcessingPlantDetailPage.jsx',
  'ToffeePlantDetailPage.jsx'
];

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const filename of files) {
  const filePath = path.join(componentsDir, filename);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Change Process Flow rendering from Array.from({ length: 7 }) to Array.from({ length: 6 })
  content = content.replace(/Array\.from\(\{ length: 7 \}\)/g, 'Array.from({ length: 6 })');
  // Also if it was already replaced to length: 6 or something else, handle it? No, it's length: 7.
  
  // Truncate PROCESS_STEPS array to exactly 6 items
  // We can do this by finding the PROCESS_STEPS array and keeping only the first 6 items.
  const processMatch = content.match(/const PROCESS_STEPS = \[([\s\S]*?)\]/);
  if (processMatch) {
    const items = processMatch[1].split(/},\s*(?={)/).filter(i => i.trim() !== '');
    if (items.length > 6) {
      const truncated = items.slice(0, 6).join('},\n  ') + (items.slice(0, 6)[5].endsWith('}') ? '' : '}');
      content = content.replace(/const PROCESS_STEPS = \[([\s\S]*?)\]/, `const PROCESS_STEPS = [\n  ${truncated}\n]`);
    }
  }

  // Truncate MACHINERY_LIST array to exactly 6 items
  const machineryMatch = content.match(/const MACHINERY_LIST = \[([\s\S]*?)\]/);
  if (machineryMatch) {
    const items = machineryMatch[1].split(/},\s*(?={)/).filter(i => i.trim() !== '');
    if (items.length > 6) {
      const truncated = items.slice(0, 6).join('},\n  ') + (items.slice(0, 6)[5].endsWith('}') ? '' : '}');
      content = content.replace(/const MACHINERY_LIST = \[([\s\S]*?)\]/, `const MACHINERY_LIST = [\n  ${truncated}\n]`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}
