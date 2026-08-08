const fs = require('fs');

const data = fs.readFileSync('C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287\\.system_generated\\logs\\transcript_full.jsonl', 'utf8');
const lines = data.split('\n');

let index = 1;
for (const line of lines) {
  if (line.includes('FaceCreamManufacturingDetailPage.jsx')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
          if (call.name === 'write_to_file' && call.args && call.args.CodeContent) {
             fs.writeFileSync(`C:\\Users\\digesh prajapati\\Desktop\\salvinindia\\extracted_script_${index}.cjs`, call.args.CodeContent);
             console.log(`Extracted script to extracted_script_${index}.cjs`);
             index++;
          }
        }
      }
    } catch(e) {}
  }
}
console.log("Done.");