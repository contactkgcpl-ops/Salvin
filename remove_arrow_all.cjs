const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const files = fs.readdirSync(dir).filter(file => file.endsWith('DetailPage.jsx'));

for (const filename of files) {
  const filePath = path.join(dir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This regex matches the entire block like:
  // {i < 6 && (
  //   <div className="rcp-process-arrow">
  //     <svg ... >
  //   </div>
  // )}
  // Or {i < PROCESS_STEPS.length - 1 && ( ... )}
  const regex = /\{i\s*<\s*[^&]+&&\s*\(\s*<div className="rcp-process-arrow">[\s\S]*?<\/div>\s*\)\}/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated", filename);
  }
}
