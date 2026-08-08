const fs = require('fs');

const data = fs.readFileSync('C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\8fd95d18-50ad-408a-b715-ed6338d82287\\.system_generated\\logs\\transcript_full.jsonl', 'utf8');
const lines = data.split('\n');

for (const line of lines) {
  if (line.includes('FaceCreamManufacturingDetailPage.jsx')) {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      for (const call of obj.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.CodeContent) {
           fs.writeFileSync('C:\\Users\\digesh prajapati\\Desktop\\salvinindia\\extracted_script.cjs', call.args.CodeContent);
           console.log("Extracted script to extracted_script.cjs");
           process.exit(0);
        }
      }
    }
  }
}
console.log("Not found.");