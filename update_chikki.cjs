const fs = require('fs');
const path = require('path');

const chikkiFile = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'ChikkiPluckingDetailPage.jsx');
const brochureFile = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'brochureCatalog.js');

if (fs.existsSync(chikkiFile)) {
    let content = fs.readFileSync(chikkiFile, 'utf8');
    // We want to replace "Plucking" with "Processing" in display text, but avoid breaking variable names (like ChikkiPluckingDetailPage) if possible.
    // Wait, the component name is ChikkiPluckingDetailPage. Replacing "Plucking" globally will break the component name.
    // Let's replace specific known phrases:
    content = content.replace(/Plucking & Separation/g, "Processing & Separation");
    content = content.replace(/Automatic Chikki Plucking Machine/g, "Automatic Chikki Processing Machine");
    content = content.replace(/Brittle \(Chikki\) Plucking Plant/g, "Brittle (Chikki) Processing Plant");
    content = content.replace(/plucking technology/g, "processing technology");
    content = content.replace(/Brittle Chikki Plucking Plant/g, "Brittle Chikki Processing Plant");

    fs.writeFileSync(chikkiFile, content);
    console.log("Updated ChikkiPluckingDetailPage.jsx");
}

if (fs.existsSync(brochureFile)) {
    let content = fs.readFileSync(brochureFile, 'utf8');
    content = content.replace(/Brittle \(Chikki\) Plucking Plant/g, "Brittle (Chikki) Processing Plant");
    fs.writeFileSync(brochureFile, content);
    console.log("Updated brochureCatalog.js");
}
