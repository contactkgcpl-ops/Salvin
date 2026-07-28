const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importsToAdd = `
import PasteurizedMilkPlantDetailPage from "./pages/TurnkeyProject/components/PasteurizedMilkPlantDetailPage";
import ButtermilkProcessingPlantDetailPage from "./pages/TurnkeyProject/components/ButtermilkProcessingPlantDetailPage";
import PaneerProcessingPlantDetailPage from "./pages/TurnkeyProject/components/PaneerProcessingPlantDetailPage";
import CheesePlantDetailPage from "./pages/TurnkeyProject/components/CheesePlantDetailPage";
import GheePlantDetailPage from "./pages/TurnkeyProject/components/GheePlantDetailPage";
import ButterProcessingPlantDetailPage from "./pages/TurnkeyProject/components/ButterProcessingPlantDetailPage";
import IceCreamProcessingPlantDetailPage from "./pages/TurnkeyProject/components/IceCreamProcessingPlantDetailPage";
`;

const routesToAdd = `
          <Route path="/turnkey-project/fully-automatic-pasteurized-milk-plant" element={<PasteurizedMilkPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-buttermilk-processing-plant" element={<ButtermilkProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-paneer-processing-plant" element={<PaneerProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-cheese-plant" element={<CheesePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-ghee-plant" element={<GheePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-butter-processing-plant" element={<ButterProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-ice-cream-processing-plant" element={<IceCreamProcessingPlantDetailPage />} />
`;

if (!appContent.includes('PasteurizedMilkPlantDetailPage')) {
  appContent = appContent.replace('import LassiProcessingPlantDetailPage', importsToAdd + '\\nimport LassiProcessingPlantDetailPage');
  appContent = appContent.replace('<Route path="/turnkey-project/fully-automated-lassi-processing"', routesToAdd + '\\n          <Route path="/turnkey-project/fully-automated-lassi-processing"');
  fs.writeFileSync(appPath, appContent);
  console.log('App.jsx updated.');
} else {
  console.log('App.jsx already updated.');
}

const catPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'data', 'brochureCatalog.js');
let catContent = fs.readFileSync(catPath, 'utf8');

const catEntries = `
  ['buttermilk_plant_overview.jpg', null, 'Fully Automated Buttermilk Processing Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automated-buttermilk-processing-plant'],
  ['paneer_plant_overview.jpg', null, 'Fully Automated Paneer Processing Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automated-paneer-processing-plant'],
  ['cheese_plant_overview.jpg', null, 'Fully Automatic Cheese Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automatic-cheese-plant'],
  ['ghee_plant_overview.jpg', null, 'Fully Automatic Ghee Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automatic-ghee-plant'],
  ['butter_plant_overview.jpg', null, 'Fully Automated Butter Processing Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automated-butter-processing-plant'],
  ['ice_cream_plant_overview.jpg', null, 'Fully Automatic Ice Cream Processing Plant', ['Fully automated end-to-end processing solution.', 'Engineered for high efficiency, premium quality, and stringent hygiene standards.'], '/turnkey-project/fully-automatic-ice-cream-processing-plant'],
`;

if (!catContent.includes('Fully Automated Buttermilk Processing Plant')) {
  catContent = catContent.replace("  ['lassi_plant_overview.jpg'", catEntries + "  ['lassi_plant_overview.jpg'");
  fs.writeFileSync(catPath, catContent);
  console.log('brochureCatalog.js updated.');
} else {
  console.log('brochureCatalog.js already updated.');
}
