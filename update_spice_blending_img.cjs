const fs = require('fs');

const file = 'src/pages/TurnkeyProject/components/SpiceBlendingPlantDetailPage.jsx';
let content = fs.readFileSync(file, 'utf8');

const newMachinery = `const MACHINERY_LIST = [
  { name: "Raw Spice Cleaning & Destoning", desc: "Advanced cleaning machine to efficiently remove stones, dust, and impurities from raw spices.", image: "/turnkey-brochures/images/spice-blending/cleaning_destoning.jpg" },
  { name: "Automatic Spice Roaster", desc: "Industrial rotary roaster with precise temperature control to enhance aroma and remove moisture.", image: "/turnkey-brochures/images/spice-blending/spice_roaster.jpg" },
  { name: "Hammer Mill / Pulverizer", desc: "Heavy-duty grinding machine designed to pulverize roasted spices into uniform fine powder.", image: "/turnkey-brochures/images/spice-blending/hammer_mill.jpg" },
  { name: "Ribbon Blender Mixer", desc: "High-capacity ribbon blending system ensuring 100% homogeneous mixing of ground spices.", image: "/turnkey-brochures/images/spice-blending/ribbon_blender.jpg" },
  { name: "Vibro Sieving & Screening", desc: "Fine mesh vibro sifter to guarantee consistent powder size and remove any oversized particles.", image: "/turnkey-brochures/images/spice-blending/vibro_sieving.jpg" },
  { name: "Automatic Pouch Packing", desc: "High-speed multi-head weigher and VFFS packing machine for highly accurate pouch filling.", image: "/turnkey-brochures/images/spice-blending/pouch_packing.jpg" }
];`;

content = content.replace(/const MACHINERY_LIST = \[[^]*?\];/, newMachinery);

const newGallery = `const GALLERY_IMAGES = [
  { src: "/turnkey-brochures/images/spice-blending/cleaning_destoning.jpg", caption: "Raw Spice Cleaning & Destoning Machine" },
  { src: "/turnkey-brochures/images/spice-blending/spice_roaster.jpg", caption: "Automatic Spice Roasting Machine" },
  { src: "/turnkey-brochures/images/spice-blending/hammer_mill.jpg", caption: "Hammer Mill / Pulverizer Grinding Machine" },
  { src: "/turnkey-brochures/images/spice-blending/ribbon_blender.jpg", caption: "Ribbon Blender Spice Mixing Machine" },
  { src: "/turnkey-brochures/images/spice-blending/vibro_sieving.jpg", caption: "Vibro Sieving & Fine Mesh Screening Machine" },
  { src: "/turnkey-brochures/images/spice-blending/pouch_packing.jpg", caption: "Automatic Garam Masala Pouch Filling & Packing Machine" }
];`;

content = content.replace(/const GALLERY_IMAGES = \[[^]*?\];/, newGallery);

content = content.replace(
  '<img src="/turnkey-brochures/images/spice_blending_plant.jpg" alt="Spice Blending Plant Overview" loading="lazy" />',
  '<img src="/turnkey-brochures/images/spice-blending/ribbon_blender.jpg" alt="Spice Blending Plant Overview" loading="lazy" />'
);

fs.writeFileSync(file, content);
console.log("Images applied properly this time.");
