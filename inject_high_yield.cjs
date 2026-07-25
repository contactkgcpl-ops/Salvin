const fs = require('fs');
const path = require('path');

const dir = 'src/pages/TurnkeyProject/components';
const files = [
  'FullyAutomaticMixedSpicePlantDetailPage.jsx',
  'FullyAutomaticPasteurizedMilkPlantDetailPage.jsx',
  'FullyAutomaticSpicePackagingLineDetailPage.jsx',
  'SpiceBlendingPlantDetailPage.jsx',
  'FullyAutomatedCurryPowderProcessingPlantDetailPage.jsx'
];

const targetPattern = '<div className="rcp-overview__features">\\s*<div className="rcp-overview__feature">';

const replacement = `<div className="rcp-overview__features">
                <div className="rcp-overview__feature">
                  <div className="rcp-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  </div>
                  <div className="rcp-overview__feature-body"><p className="rcp-overview__feature-title">High Yield</p><p className="rcp-overview__feature-desc">Maximum product yield</p></div>
                </div>
                <div className="rcp-overview__feature">`;

files.forEach(f => {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) {
    console.log("Not found:", f);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes("High Yield") || content.includes("Maximum product yield")) {
    console.log("Already has High Yield:", f);
    return;
  }

  const regex = new RegExp(targetPattern);
  if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content);
    console.log("Updated:", f);
  } else {
    console.log("Target pattern not found in:", f);
  }
});
