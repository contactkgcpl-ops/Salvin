const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'TurnkeyDetailPage.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add Lucide imports
if (!content.includes('PackageSearch')) {
  content = content.replace(
    /import { getProjectDetails } from '\.\.\/data\/turnkeyProjectsData'/,
    "import { getProjectDetails } from '../data/turnkeyProjectsData'\nimport { PackageSearch, CookingPot, Factory, Stamp, Flame, Snowflake, Package } from 'lucide-react'"
  );
}

// 2. Override getStepIcon for the specific Biscuit Project workflow
const customIconsCode = `
  // ── LUCIDE ICONS FOR BISCUIT PROJECT ──
  if (t === 'raw material handling') return <PackageSearch className="rcp-process-card__icon-svg" />
  if (t === 'dough mixing') return <CookingPot className="rcp-process-card__icon-svg" />
  if (t === 'dough forming') return <Factory className="rcp-process-card__icon-svg" />
  if (t === 'biscuit molding') return <Stamp className="rcp-process-card__icon-svg" />
  if (t === 'baking') return <Flame className="rcp-process-card__icon-svg" />
  if (t === 'cooling') return <Snowflake className="rcp-process-card__icon-svg" />
  if (t === 'packaging') return <Package className="rcp-process-card__icon-svg" />
`;

if (!content.includes('LUCIDE ICONS FOR BISCUIT PROJECT')) {
  content = content.replace(
    /const t = \(title \|\| ''\)\.toLowerCase\(\)/,
    "const t = (title || '').toLowerCase()\n" + customIconsCode
  );
}

// 3. Fix overview image class and styling
content = content.replace(
  /<div className=\{\`rcp-overview__image \$\{details\.isBrochure \? 'rcp-overview__image--brochure' : 'rcp-overview__image--photo'\}\`\}>/g,
  "<div className={`rcp-overview__image ${details.overview?.isBrochure ? 'rcp-overview__image--brochure' : 'rcp-overview__image--photo'}`}>"
);

content = content.replace(
  /<img src=\{details\.overview\.photoImage \|\| details\.overview\.image\} alt=\{\`\$\{details\.title\} by Salvin Industries\`\} loading=\"lazy\" \/>/g,
  '<img src={details.overview.photoImage || details.overview.image} alt={`${details.title} by Salvin Industries`} loading="lazy" style={details.overview?.isBrochure ? { objectFit: \'contain\', background: \'#fff\' } : undefined} />'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Updated TurnkeyDetailPage.jsx");
