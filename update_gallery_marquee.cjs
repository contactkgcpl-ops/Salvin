const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'RedChilliDetailPage.css');
if (fs.existsSync(cssPath)) {
  const cssApp = `
/* === AUTO SCROLL MARQUEE GALLERY === */
.rcp-gallery__marquee {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
  display: flex;
}
.rcp-gallery__marquee-track {
  display: flex;
  width: max-content;
  animation: scrollMarquee 25s linear infinite;
}
.rcp-gallery__marquee-track:hover {
  animation-play-state: paused;
}
@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.rcp-gallery__marquee-item {
  width: 300px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  margin: 0 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  background-color: #f5f5f5;
}
.rcp-gallery__marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.rcp-gallery__marquee-item:hover img {
  transform: scale(1.1);
}
.rcp-gallery__marquee-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.rcp-gallery__marquee-item:hover .rcp-gallery__marquee-caption {
  transform: translateY(0);
}
`;
  fs.appendFileSync(cssPath, cssApp);
  console.log('Appended CSS');
}

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

  // We need to replace the gallery showcase div with our marquee
  // The old block is:
  // <div className="rcp-gallery__showcase"> ... </div>
  // It might span multiple lines.

  // Also we need to duplicate the 1 image in GALLERY_IMAGES to 6 images in the array definition
  const galleryMatch = content.match(/const GALLERY_IMAGES = \[\s*\{\s*src:\s*'([^']+)',\s*caption:\s*'([^']+)'\s*\}\s*\]/);
  if (galleryMatch) {
    const src = galleryMatch[1];
    const caption = galleryMatch[2];
    
    // We want to make it an array of 6 identical images for now, or use machinery names as captions
    // Let's extract the machinery names to use as captions!
    const machMatch = content.match(/const MACHINERY_LIST = \[([\s\S]*?)\]/);
    let machNames = [];
    if (machMatch) {
        const matches = [...machMatch[1].matchAll(/name:\s*"([^"]+)"/g)];
        machNames = matches.map(m => m[1]);
    }
    
    let newGalleryArr = '';
    for (let i = 0; i < 6; i++) {
        let cap = machNames[i] || caption;
        newGalleryArr += `  { src: '${src}', caption: '${cap}' }${i === 5 ? '' : ','}\n`;
    }
    content = content.replace(/const GALLERY_IMAGES = \[([\s\S]*?)\]/, `const GALLERY_IMAGES = [\n${newGalleryArr}]`);
  } else {
    // If it already has 6 items, do nothing.
  }

  const oldShowcaseRegex = /<div className="rcp-gallery__showcase">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
  
  const newShowcase = `<div className="rcp-gallery__marquee">
            <div className="rcp-gallery__marquee-track">
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                <div key={i} className="rcp-gallery__marquee-item">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="rcp-gallery__marquee-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>`;

  content = content.replace(oldShowcaseRegex, newShowcase);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated gallery in ${filename}`);
}
