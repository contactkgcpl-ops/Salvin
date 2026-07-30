const fs = require('fs');
const path = require('path');

const plants = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': 'Aloe Vera Juice',
  'BiscuitPlantDetailPage.jsx': 'Biscuit',
  'CookiePlantDetailPage.jsx': 'Cookie',
  'BreadPlantDetailPage.jsx': 'Bread',
  'CakePlantDetailPage.jsx': 'Cake',
  'WaferPlantDetailPage.jsx': 'Wafer',
  'ChocolateProcessingPlantDetailPage.jsx': 'Chocolate',
  'ToffeePlantDetailPage.jsx': 'Candy & Toffee'
};

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [file, prefix] of Object.entries(plants)) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Overview
    content = content.replace(
      /<h2 className="rcp-section-title">Plant <span className="rcp-accent">Overview<\/span><\/h2>/g,
      `<h2 className="rcp-section-title">${prefix} Plant <span className="rcp-accent">Overview</span></h2>`
    );

    // 2. Workflow
    content = content.replace(
      /<h2 className="rcp-section-title">Plant <span className="rcp-accent">Workflow<\/span><\/h2>/g,
      `<h2 className="rcp-section-title">${prefix} Production <span className="rcp-accent">Workflow</span></h2>`
    );

    // 3. Equipment
    content = content.replace(
      /<h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment<\/span><\/h2>/g,
      `<h2 className="rcp-section-title">Core ${prefix} <span className="rcp-accent">Equipment</span></h2>`
    );

    // 4. FAQs
    content = content.replace(
      /<h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions<\/span><\/h2>/g,
      `<h2 className="rcp-section-title">${prefix} Plant <span className="rcp-accent">FAQs</span></h2>`
    );

    // 5. Gallery
    content = content.replace(
      /<h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery<\/span><\/h2>/g,
      `<h2 className="rcp-section-title">${prefix} Plant <span className="rcp-accent">Gallery</span></h2>`
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated section titles for ${file}`);
  }
}
