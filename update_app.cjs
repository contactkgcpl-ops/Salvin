const fs = require('fs');

let app = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add Import
const importStatement = 'import MayonnaiseProcessingDetailPage from "./pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage";';
if(!app.includes('MayonnaiseProcessingDetailPage')) {
    app = app.replace('import InstantMixFrozenFoodDetailPage', importStatement + '\nimport InstantMixFrozenFoodDetailPage');
    
    // 2. Add Route
    const route = '<Route path="/turnkey-project/mayonnaise-processing-plant" element={<MayonnaiseProcessingDetailPage />} />';
    app = app.replace('<Route path="/turnkey-project/instant-mix-frozen-food-processing-plant"', route + '\n          <Route path="/turnkey-project/instant-mix-frozen-food-processing-plant"');

    fs.writeFileSync('src/App.jsx', app);
    console.log('App.jsx updated!');
} else {
    console.log('Already updated!');
}
