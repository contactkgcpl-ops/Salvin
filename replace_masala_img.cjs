const fs = require('fs');
const path = require('path');

const srcFile = 'C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\f3fc5f5a-d22d-4333-beb3-78080c0c42f5\\media__1784894405203.jpg';
const destFile = path.join(__dirname, 'public', 'turnkey-brochures', 'images', 'automatic_masala_card.jpg');

if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log("Successfully replaced the automatic_masala_card.jpg with the new flowchart image.");
} else {
    console.log("Source file not found: " + srcFile);
}
