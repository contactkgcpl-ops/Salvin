const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'RedChilliDetailPage.css');
let css = fs.readFileSync(cssPath, 'utf8');

const toRemove = `
/* ══════════════════════════════════════════
   GALLERY (Dynamically added for other plants)
   ══════════════════════════════════════════ */
.rcp-gallery__showcase {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.rcp-gallery__main {
  position: relative;
  width: 100%;
  border-radius: var(--rcp-radius);
  overflow: hidden;
  background: var(--rcp-slate-50);
  border: 1px solid var(--rcp-slate-200);
}

.rcp-gallery__main-img {
  width: 100%;
  height: auto; /* Added per user request */
  max-height: 500px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.rcp-gallery__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 76, 125, 0.85);
  color: #fff;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.rcp-gallery__thumbs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.rcp-gallery__thumb {
  flex: 0 0 100px;
  height: 70px;
  border-radius: var(--rcp-radius-sm);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--rcp-transition);
  padding: 0;
  background: var(--rcp-slate-50);
}

.rcp-gallery__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rcp-gallery__thumb:hover {
  opacity: 0.8;
}

.rcp-gallery__thumb--active {
  border-color: var(--rcp-orange);
  box-shadow: 0 0 0 2px rgba(244, 124, 32, 0.2);
}
`;

if (css.includes(toRemove)) {
  css = css.replace(toRemove, '');
  fs.writeFileSync(cssPath, css);
  console.log("Successfully removed appended CSS block.");
} else {
  console.log("Appended CSS block not found, maybe slightly different formatting.");
}
