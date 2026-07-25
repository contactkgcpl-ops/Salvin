const fs = require('fs');

const file = 'src/pages/TurnkeyProject/components/FullyAutomaticSpicePackagingLineDetailPage.jsx';
let content = fs.readFileSync(file, 'utf8');

const newMachinery = `const MACHINERY_LIST = [
  { name: "Bulk Storage & Feeding", desc: "High-capacity stainless steel silo and screw feeder system for continuous product supply.", image: "/turnkey-brochures/images/spice-packaging-gallery/silo_feeder.jpg" },
  { name: "Auger Filling Machine", desc: "Servo-driven automatic auger filler for highly accurate dosing into jars and bottles.", image: "/turnkey-brochures/images/spice-packaging-gallery/auger_filler.jpg" },
  { name: "VFFS Pouch Packing", desc: "High-speed Vertical Form Fill Seal (VFFS) machine for continuous pouch packaging.", image: "/turnkey-brochures/images/spice-packaging-gallery/vffs_pouch.jpg" },
  { name: "Check Weigher & Metal Detector", desc: "Integrated quality control system to ensure exact weight and zero metal contamination.", image: "/turnkey-brochures/images/spice-packaging-gallery/check_weigher.jpg" },
  { name: "Carton Sealing Machine", desc: "Automatic case erecting, packing, and tape sealing system for secondary packaging.", image: "/turnkey-brochures/images/spice-packaging-gallery/carton_sealing.jpg" },
  { name: "Robotic Palletizing", desc: "Advanced robotic palletizing system for high-speed, automated end-of-line stacking.", image: "/turnkey-brochures/images/spice-packaging-gallery/robotic_palletizer.jpg" }
];`;

content = content.replace(/const MACHINERY_LIST = \[[\\s\\S]*?\];/, newMachinery);

const newGallery = `const GALLERY_IMAGES = [
  { src: "/turnkey-brochures/images/spice-packaging-gallery/silo_feeder.jpg", caption: "Bulk Storage Silo & Screw Feeder System" },
  { src: "/turnkey-brochures/images/spice-packaging-gallery/auger_filler.jpg", caption: "Automatic Auger Filling Machine for Jars" },
  { src: "/turnkey-brochures/images/spice-packaging-gallery/vffs_pouch.jpg", caption: "High-Speed VFFS Pouch Packing Machine" },
  { src: "/turnkey-brochures/images/spice-packaging-gallery/check_weigher.jpg", caption: "Integrated Check Weigher & Metal Detector" },
  { src: "/turnkey-brochures/images/spice-packaging-gallery/carton_sealing.jpg", caption: "Automatic Carton Packing & Sealing Machine" },
  { src: "/turnkey-brochures/images/spice-packaging-gallery/robotic_palletizer.jpg", caption: "Robotic Palletizing System" }
];`;

content = content.replace(/const GALLERY_IMAGES = \[[\\s\\S]*?\];/, newGallery);

content = content.replace(
  '<img src="/turnkey-brochures/images/spice_packaging_line.jpg" alt="Fully Automatic Spice Packaging Line Overview" loading="lazy" />',
  '<img src="/turnkey-brochures/images/spice-packaging-gallery/vffs_pouch.jpg" alt="Fully Automatic Spice Packaging Line Overview" loading="lazy" />'
);

fs.writeFileSync(file, content);
console.log("Updated Spice Packaging Line images.");
