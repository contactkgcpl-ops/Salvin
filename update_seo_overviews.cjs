const fs = require('fs');
const path = require('path');

const seoContent = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Salvin Industries is a leading manufacturer and exporter of <strong>Fully Automatic Aloe Vera Juice Processing Plants</strong>. Our state-of-the-art turnkey solutions are engineered for high-efficiency commercial production, ensuring maximum yield and nutrient retention.</p>
              <p>Designed with premium SS304/SS316 food-grade stainless steel, our machinery guarantees 100% hygienic processing. The fully automated PLC-controlled system streamlines leaf washing, gel extraction, pasteurization, and packaging, significantly reducing labor costs and boosting profitability for your beverage manufacturing business.</p>
            </div>`
  },
  'BiscuitPlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Maximize your bakery's production capacity with our <strong>Fully Automatic Biscuit Manufacturing Plant</strong>. As a top-tier manufacturer of commercial bakery equipment, Salvin Industries provides robust, continuous processing lines for all types of biscuits.</p>
              <p>From automated dough mixing and rotary molding to continuous tunnel baking and automated packaging, our turnkey biscuit processing solutions deliver uniform baking, unmatched operational efficiency, and strict adherence to global food safety standards. Upgrade your confectionery business with our high-speed, energy-efficient bakery machines.</p>
            </div>`
  },
  'CookiePlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Salvin Industries specializes in designing and manufacturing <strong>Fully Automatic Cookie Processing Plants</strong> for large-scale industrial bakery operations. Our advanced wire-cut and drop cookie machines provide precise weight control and versatile shaping.</p>
              <p>Engineered for high-volume production, our complete turnkey cookie manufacturing line integrates automated dough feeding, baking, cooling, and wrapping. Achieve consistent texture, extended shelf life, and maximum ROI with our heavy-duty, PLC-operated commercial bakery equipment.</p>
            </div>`
  },
  'BreadPlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Establish a highly profitable commercial bakery with our <strong>Fully Automated Bread Manufacturing Plant</strong>. Salvin Industries delivers complete turnkey solutions for high-capacity bread production, from spiral kneading to automatic slicing and bagging.</p>
              <p>Our advanced baking technology ensures perfect crumb structure and uniform crust color. Featuring intelligent proofing chambers and energy-efficient rotary ovens, our food-grade SS304 machinery reduces manual handling, optimizes production speed, and guarantees superior bakery products.</p>
            </div>`
  },
  'CakePlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Scale your confectionery business with the <strong>Fully Automatic Cake Production Plant</strong> by Salvin Industries. We provide end-to-end commercial bakery solutions designed for cupcakes, muffins, layer cakes, and sponge cakes.</p>
              <p>Our turnkey cake processing line features precision aerated batter mixers, automatic tray depositors, and continuous tunnel ovens. Built with hygienic stainless steel and advanced automation, our machinery ensures perfect sponge volume, consistent baking, and seamless packaging for maximum industrial output.</p>
            </div>`
  },
  'WaferPlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Salvin Industries offers high-speed <strong>Fully Automatic Wafer Biscuit Manufacturing Plants</strong> engineered for premium commercial confectionery production. Our advanced flat-plate baking technology ensures ultra-crispy, perfectly layered wafers.</p>
              <p>Our comprehensive turnkey wafer processing line automates batter mixing, continuous baking, automatic cream spreading, block cooling, and wire cutting. Minimize product waste and maximize your production capacity with our highly reliable, PLC-controlled wafer making machinery.</p>
            </div>`
  },
  'ChocolateProcessingPlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Launch your premium chocolate brand with our <strong>Fully Automatic Chocolate Processing Plant</strong>. Salvin Industries is a trusted manufacturer of high-end commercial chocolate making machinery, providing complete bean-to-bar turnkey solutions.</p>
              <p>Our advanced industrial setup includes cocoa roasters, high-shear conching machines, precision tempering units, and automatic molding lines. Achieve the perfect snap, glossy finish, and smooth texture with our highly efficient, temperature-controlled SS304/SS316 chocolate production equipment.</p>
            </div>`
  },
  'ToffeePlantDetailPage.jsx': {
    overview: `<div className="rcp-overview__text">
              <p>Optimize your confectionery manufacturing with our <strong>Fully Automatic Toffee and Candy Production Plant</strong>. Salvin Industries engineers high-capacity, complete turnkey solutions for hard candies, soft toffees, and caramels.</p>
              <p>Our advanced continuous vacuum cookers, automated cooling tables, and high-speed twist wrapping machines eliminate manual labor and ensure perfect consistency. Built from premium food-grade stainless steel with intelligent PLC controls, our commercial candy making machines deliver unmatched efficiency and superior product quality.</p>
            </div>`
  }
};

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [file, data] of Object.entries(seoContent)) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace the overview text
    const overviewRegex = /<div className="rcp-overview__text">([\s\S]*?)<\/div>/;
    content = content.replace(overviewRegex, data.overview);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated highly SEO optimized overview for ${file}`);
  }
}
