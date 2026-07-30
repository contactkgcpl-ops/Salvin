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

const showcaseHTML = `<div className="rcp-gallery__showcase">
            <div className="rcp-gallery__main">
              {GALLERY_IMAGES.length > 0 ? (
                <>
                  <img
                    src={GALLERY_IMAGES[galleryIndex]?.src}
                    alt={GALLERY_IMAGES[galleryIndex]?.caption}
                    className="rcp-gallery__main-img"
                  />
                  <div className="rcp-gallery__caption">{GALLERY_IMAGES[galleryIndex]?.caption}</div>
                </>
              ) : (
                <div className="rcp-gallery__placeholder">No Images Available</div>
              )}
            </div>
            {GALLERY_IMAGES.length > 1 && (
              <div className="rcp-gallery__thumbs">
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    className={\`rcp-gallery__thumb \${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}\`}
                    onClick={() => setGalleryIndex(i)}
                    type="button"
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>`;

for (const file of filesToUpdate) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes('rcp-gallery__marquee')) {
        content = content.replace(/<div className="rcp-gallery__marquee">[\s\S]*?<\/section>/, showcaseHTML);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${file} to use showcase layout`);
    } else {
        console.log(`${file} ALREADY uses showcase layout or is different`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}
