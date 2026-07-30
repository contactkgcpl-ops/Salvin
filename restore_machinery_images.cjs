const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'AloeVeraJuiceProcessingPlantDetailPage.jsx',
  'BiscuitPlantDetailPage.jsx',
  'CookiePlantDetailPage.jsx',
  'BreadPlantDetailPage.jsx',
  'CakePlantDetailPage.jsx',
  'WaferPlantDetailPage.jsx',
  'ChocolateProcessingPlantDetailPage.jsx',
  'ToffeePlantDetailPage.jsx'
];

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const file of filesToUpdate) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Restore the image wrapper in the machinery mapping
    const regex = /<div className="rcp-machine-card__content">/g;
    
    // We only want to replace it inside the MACHINERY_LIST mapping.
    // The safest way is to find the rcp-machinery__grid section and replace it there.
    const machineryBlockRegex = /<div className="rcp-machinery__grid">([\s\S]*?)<\/section>/;
    
    content = content.replace(machineryBlockRegex, (match, gridContent) => {
        const restoredGridContent = gridContent.replace(
            /<div className="rcp-machine-card__content">/g, 
            `<div className="rcp-machine-card__image-wrapper">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                  ) : (
                    <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                  )}
                </div>
                <div className="rcp-machine-card__content">`
        );
        return `<div className="rcp-machinery__grid">${restoredGridContent}</section>`;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Restored machinery images in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
