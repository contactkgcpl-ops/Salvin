const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'RedChilliDetailPage.css');
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const marqueeCSS = `

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

if (!cssContent.includes('.rcp-gallery__marquee {')) {
  fs.appendFileSync(cssPath, marqueeCSS, 'utf-8');
  console.log('Restored Marquee CSS');
} else {
  console.log('Marquee CSS already exists');
}
