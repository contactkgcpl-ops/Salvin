const fs = require('fs');
const path = require('path');

const seoGuides = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Aloe Vera Processing</span>',
    subtitle: 'Understanding commercial extraction, pasteurization, and market opportunities.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in Commercial Aloe Vera Processing?</h3>
              <p>The global demand for health-centric beverages is surging, making commercial aloe vera juice processing a highly lucrative venture. Setting up an industrial-scale manufacturing plant allows you to capitalize on this growing market by producing high-volume, premium-grade aloe vera products with consistent quality and extended shelf life.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Aloe Vera Processing Workflow</h3>
              <p><strong>1. Washing & Trimming:</strong> Automated high-pressure washers and trimmers ensure complete removal of impurities from raw aloe leaves.</p>
              <p><strong>2. Filleting & Extraction:</strong> Advanced mechanical extractors efficiently separate the bitter aloin skin from the pure, nutrient-rich inner gel.</p>
              <p><strong>3. Homogenization & Pasteurization:</strong> The gel is blended into a smooth liquid and rapidly pasteurized to eliminate pathogens while preserving essential vitamins.</p>
              <p><strong>4. Aseptic Packaging:</strong> The finished juice is automatically filled into sterile bottles or pouches, ready for global distribution.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides cutting-edge turnkey solutions for beverage manufacturing. Our fully automated aloe vera plants are manufactured from premium SS304/SS316 food-grade materials, ensuring zero contamination and maximum ROI. From complete facility layout design to machinery installation and operator training, we deliver unmatched industrial performance.</p>
            </div>`
  },
  'BiscuitPlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Commercial Biscuit Manufacturing</span>',
    subtitle: 'Understanding industrial baking, automation, and operational efficiency.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Commercial Biscuit Plant?</h3>
              <p>Biscuits remain a cornerstone of the global fast-moving consumer goods (FMCG) market. Establishing a fully automated biscuit manufacturing plant provides a scalable business model with exceptional profit margins, leveraging high-speed production lines to meet massive consumer demand efficiently.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Biscuit Production Workflow</h3>
              <p><strong>1. High-Shear Dough Mixing:</strong> Industrial planetary and horizontal mixers ensure uniform blending of flour, sugar, and fats into perfect dough.</p>
              <p><strong>2. Rotary Molding & Sheeting:</strong> The dough is continuously fed into precision rotary molds, ensuring identical weight and shape for every biscuit.</p>
              <p><strong>3. Continuous Tunnel Baking:</strong> The raw biscuits travel through advanced, multi-zone tunnel ovens for perfectly even baking and moisture extraction.</p>
              <p><strong>4. Automated Packaging:</strong> Finished biscuits are rapidly cooled and seamlessly fed into high-speed horizontal flow wrapping machines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries is a premier manufacturer of heavy-duty commercial bakery equipment. Our turnkey biscuit production lines are engineered for 24/7 continuous operation, minimizing labor overhead while maximizing output. With state-of-the-art PLC controls and robust SS304 construction, we guarantee long-term reliability and compliance with stringent food safety standards.</p>
            </div>`
  },
  'CookiePlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Commercial Cookie Production</span>',
    subtitle: 'Understanding wire-cut technology, drop cookies, and industrial baking.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in an Industrial Cookie Plant?</h3>
              <p>The premium cookie market is expanding rapidly, driven by consumer demand for center-filled, wire-cut, and gourmet varieties. An automated cookie production line allows food manufacturers to produce diverse, high-margin bakery products with precise quality control and minimal manual intervention.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Cookie Production Workflow</h3>
              <p><strong>1. Automated Ingredient Dosing & Mixing:</strong> Programmable dosing systems ensure exact ingredient ratios before high-shear mixing.</p>
              <p><strong>2. Wire-Cut & Drop Extrusion:</strong> Versatile extrusion heads accurately portion the thick dough directly onto baking bands or trays.</p>
              <p><strong>3. Multi-Zone Baking:</strong> Convection tunnel ovens apply precise heat profiles to achieve the perfect texture, from soft-baked to crispy.</p>
              <p><strong>4. Cooling & Wrapping:</strong> Engineered cooling conveyors stabilize the cookies before they enter high-speed automatic packaging lines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries delivers innovative turnkey solutions for commercial cookie manufacturing. Our fully automated plants offer rapid changeovers between product types, exceptional energy efficiency, and superior build quality. We empower bakery enterprises to scale their production seamlessly with our cutting-edge, PLC-integrated machinery.</p>
            </div>`
  },
  'BreadPlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Industrial Bread Manufacturing</span>',
    subtitle: 'Understanding dough rheology, proofing, and large-scale baking.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Commercial Bread Plant?</h3>
              <p>Bread is a universal dietary staple with consistent, year-round demand. Establishing an industrial bread manufacturing plant allows for the high-volume production of sliced bread, buns, and rolls, providing a steady revenue stream and the ability to dominate local or regional FMCG markets.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Bread Production Workflow</h3>
              <p><strong>1. Spiral Mixing:</strong> Heavy-duty spiral mixers rapidly develop gluten networks in the dough for optimal elasticity and texture.</p>
              <p><strong>2. Dividing & Rounding:</strong> Automated dividers accurately portion the dough, while rounders prepare it for resting.</p>
              <p><strong>3. Climate-Controlled Proofing:</strong> Specialized proofing chambers strictly regulate temperature and humidity to ensure perfect yeast fermentation.</p>
              <p><strong>4. Baking, Slicing & Bagging:</strong> The dough is baked in industrial rotary or tunnel ovens, cooled, automatically sliced, and sealed in branded packaging.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides world-class turnkey solutions for commercial bread production. Our robust, highly automated machinery minimizes dough handling, significantly improving hygiene and product consistency. We deliver complete, energy-efficient bakery setups tailored to your specific output requirements and factory layout.</p>
            </div>`
  },
  'CakePlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Commercial Cake Production</span>',
    subtitle: 'Understanding batter aeration, precision depositing, and industrial baking.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Commercial Cake Plant?</h3>
              <p>The demand for packaged cakes, muffins, and Swiss rolls offers exceptional profit margins for commercial bakeries. A fully automated cake production plant ensures perfect batter aeration and consistent baking, allowing you to deliver premium, long-shelf-life confectionery products at an industrial scale.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Cake Production Workflow</h3>
              <p><strong>1. Aerated Batter Preparation:</strong> Specialized planetary mixers whip air into the ingredients to create a highly stable, voluminous batter.</p>
              <p><strong>2. Precision Depositing:</strong> Servo-driven depositors inject exact volumes of batter into automatically greased baking trays.</p>
              <p><strong>3. Tunnel Baking:</strong> The trays move continuously through a highly regulated tunnel oven, ensuring uniform heat distribution and perfect sponge development.</p>
              <p><strong>4. Vacuum Depanning & Packaging:</strong> Soft cakes are gently extracted using vacuum depanners, cooled, and processed through flow wrapping machines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries engineers state-of-the-art turnkey cake manufacturing plants built for maximum operational efficiency. Our hygienic, SS304/SS316 food-grade machinery integrates advanced PLC/HMI controls, ensuring minimal product wastage, perfect baking consistency, and rapid production speeds for your bakery enterprise.</p>
            </div>`
  },
  'WaferPlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Industrial Wafer Manufacturing</span>',
    subtitle: 'Understanding flat-plate baking, cream spreading, and high-speed processing.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Commercial Wafer Plant?</h3>
              <p>Wafer biscuits are high-demand confectionery products known for their crisp texture and long shelf life. A fully automated wafer manufacturing plant provides an incredibly efficient production cycle, converting simple liquid batter and cream into high-margin, globally marketable products in minutes.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Wafer Production Workflow</h3>
              <p><strong>1. Liquid Batter Preparation:</strong> Automated mixers blend flour, water, and lecithin into a perfectly smooth, lump-free liquid batter.</p>
              <p><strong>2. Flat-Plate Baking:</strong> The batter is pumped onto hot, moving baking plates, transforming instantly into large, crispy wafer sheets.</p>
              <p><strong>3. Automated Cream Spreading:</strong> Precision rollers apply uniform layers of cream, automatically stacking the wafer sheets into blocks.</p>
              <p><strong>4. Cooling & Wire Cutting:</strong> The wafer blocks are chilled in a cooling tower to solidify the cream, then cleanly sliced into individual fingers by tensioned wires.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries delivers highly reliable, continuous-operation turnkey wafer plants. Our robust baking ovens and precision cutting systems ensure zero product deformity and minimal waste. Designed for supreme energy efficiency and strict sanitation, our commercial machinery is the optimal choice for scaling your confectionery brand.</p>
            </div>`
  },
  'ChocolateProcessingPlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Commercial Chocolate Processing</span>',
    subtitle: 'Understanding conching, tempering, and industrial molding.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in an Industrial Chocolate Plant?</h3>
              <p>Chocolate manufacturing is a prestigious, high-revenue industry. A state-of-the-art, fully automated chocolate processing plant allows you to command the premium confectionery market by producing perfectly tempered, smooth, and visually flawless chocolate bars, pralines, and compound chips at an industrial scale.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Chocolate Production Workflow</h3>
              <p><strong>1. Cocoa Roasting & Grinding:</strong> Raw cocoa beans are precision-roasted and ground into a rich, fluid chocolate liquor.</p>
              <p><strong>2. High-Shear Conching:</strong> The mixture undergoes intense kneading in a conche, refining particle size and developing a perfectly smooth mouthfeel.</p>
              <p><strong>3. Advanced Tempering:</strong> The chocolate is subjected to strictly controlled heating and cooling cycles to stabilize cocoa butter crystals, ensuring a glossy finish and crisp snap.</p>
              <p><strong>4. Automated Molding & Cooling:</strong> The tempered chocolate is deposited into polycarbonate molds, passed through a cooling tunnel, and rapidly packaged.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries provides world-class, bean-to-bar turnkey solutions for chocolate manufacturing. Our sophisticated SS316 food-grade machinery offers unparalleled temperature control, essential for perfect tempering and conching. We empower confectionery manufacturers to achieve global quality standards with highly efficient, automated processing lines.</p>
            </div>`
  },
  'ToffeePlantDetailPage.jsx': {
    title: 'A Comprehensive Guide to <span className="rcp-accent">Industrial Toffee & Candy Production</span>',
    subtitle: 'Understanding vacuum cooking, continuous forming, and high-speed wrapping.',
    body: `<div className="rcp-seo-content__block">
              <h3>Why Invest in a Commercial Candy & Toffee Plant?</h3>
              <p>The confectionery market demands vast volumes of hard candies, caramels, and toffees. A fully automated candy production plant eliminates the severe hazards and inconsistencies of manual sugar boiling, delivering massive daily outputs with perfect shape, taste, and hygienic safety.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Industrial Candy Production Workflow</h3>
              <p><strong>1. Continuous Vacuum Cooking:</strong> Sugar and glucose syrup are boiled under vacuum pressure, ensuring rapid moisture evaporation without burning or discoloration.</p>
              <p><strong>2. Cooling & Flavor Mixing:</strong> The hot sugar mass is discharged onto automated cooling tables where colors and flavors are homogeneously kneaded in.</p>
              <p><strong>3. Batch Rolling & Rope Sizing:</strong> The candy mass is automatically drawn into a continuous, uniform rope of exact thickness.</p>
              <p><strong>4. High-Speed Forming & Wrapping:</strong> The candy rope is rapidly stamped into individual pieces, cooled in a chilling tunnel, and instantly twist-wrapped by high-speed packaging machines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>The Salvin Industries Advantage</h3>
              <p>Salvin Industries is an industry leader in manufacturing highly durable turnkey confectionery plants. Our advanced PLC-controlled systems guarantee precise temperature management and synchronization between cooking and forming stages. Built entirely from heavy-duty stainless steel, our commercial candy machinery ensures absolute hygiene, minimal labor dependency, and exceptional manufacturing profitability.</p>
            </div>`
  }
};

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [file, data] of Object.entries(seoGuides)) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace the SEO guide section
    const seoRegex = /<div className="rcp-seo-content__body">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;
    
    // First update the title and subtitle
    content = content.replace(/<h2 className="rcp-section-title">.*?<\/h2>/, `<h2 className="rcp-section-title">${data.title}</h2>`);
    content = content.replace(/<p className="rcp-section-subtitle">.*?<\/p>/, `<p className="rcp-section-subtitle">${data.subtitle}</p>`);

    // Then update the body
    content = content.replace(seoRegex, `<div className="rcp-seo-content__body">\n${data.body}\n          </div>\n        </div>\n      </section>`);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated highly SEO optimized comprehensive guide for ${file}`);
  }
}
