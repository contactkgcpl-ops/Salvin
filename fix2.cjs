const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/pages/TurnkeyProject/components/FaceCreamManufacturingDetailPage.jsx');
let jsxCode = fs.readFileSync(jsxPath, 'utf8');

const targetStr = `answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  // Scroll to top only on initial page entry`;

const replacement = `answer: "Yes, we provide a complete turnkey solution. Our expert engineers will come to your factory, install all the machines, start the production, and hand over a running plant to you."
  }
]

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/face-cream-gallery/2.jpg', caption: 'Main Emulsifying Mixer' },
  { src: '/turnkey-brochures/images/face-cream-gallery/5.jpg', caption: 'Automatic Filling & Sealing Machine' },
  { src: '/turnkey-brochures/images/face-cream-gallery/1.jpg', caption: 'Ingredient Weighing & Dosing System' },
  { src: '/turnkey-brochures/images/face-cream-gallery/3.jpg', caption: 'High Shear Homogenizer' },
  { src: '/turnkey-brochures/images/face-cream-gallery/4.jpg', caption: 'Holding & Storage Tank' },
  { src: '/turnkey-brochures/images/face-cream-gallery/6.jpg', caption: 'Labeling & Carton Packing Line' },
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function FaceCreamManufacturingDetailPage() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  // Scroll to top only on initial page entry`;

jsxCode = jsxCode.replace(targetStr, replacement);
fs.writeFileSync(jsxPath, jsxCode);
console.log("Fixed syntax error!");
