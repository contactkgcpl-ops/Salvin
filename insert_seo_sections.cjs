const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components', 'RedChilliDetailPage.css');
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    if (!cssContent.includes('.rcp-seo-content__body')) {
        cssContent += `\n
/* SEO Content Section */
.rcp-seo-content__body {
  max-width: 900px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.8;
  color: var(--rcp-slate-700);
}
.rcp-seo-content__body h3 {
  font-size: 22px;
  color: var(--rcp-slate-900);
  margin-top: 36px;
  margin-bottom: 16px;
  font-weight: 600;
}
.rcp-seo-content__body p {
  margin-bottom: 24px;
}
`;
        fs.writeFileSync(cssPath, cssContent);
        console.log("Updated CSS");
    }
}

const data = {
  'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Fruit Juice Manufacturing</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Start a Fruit Juice Business?</h3>
               <p>The demand for packaged, ready-to-drink fruit juices is growing rapidly worldwide. With increasing health awareness, consumers are looking for natural, hygienic, and preservative-free fruit juices. Setting up a fully automated processing plant allows you to tap into this massive market with high-profit margins.</p>
               
               <h3>How Does the Processing Plant Work?</h3>
               <p>The process is completely automated to maintain hygiene. It starts with thoroughly washing the raw fruits to remove dirt and pesticides. The fruits are then crushed, and the pulp is extracted. The extracted juice is filtered and passed through a pasteurization machine, which rapidly heats and cools the juice to kill bacteria without destroying the natural vitamins. Finally, the juice is packed in sterile bottles or pouches.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Our turnkey solutions are built using high-grade stainless steel to ensure 100% food safety. The entire production line is controlled by an advanced PLC system, meaning you need very few workers to operate the massive plant. We ensure maximum juice yield from every fruit, reducing waste and increasing your daily profits.</p>
           </div>
        </div>
      </section>\n\n`,
      
  'FullyAutomaticJellyManufacturingPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Jelly Manufacturing</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Invest in a Jelly Plant?</h3>
               <p>Fruit jellies, gummies, and soft candies are incredibly popular among children and adults alike. The confectionery market offers massive scalability. By manufacturing high-quality, perfectly textured jellies, you can quickly establish a highly profitable FMCG brand with excellent shelf life and easy distribution.</p>
               
               <h3>How Does the Jelly Processing Work?</h3>
               <p>The automated process begins by mixing sugar, water, pectin, and natural fruit flavors in a specialized vacuum cooker. This mixture is boiled until it reaches the perfect syrup consistency. The hot syrup is then pumped into a depositor machine that precisely fills it into custom-shaped moulds. These moulds pass through a long cooling tunnel where the jelly sets and hardens before being automatically demoulded and coated with sugar.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>We provide completely automated, hands-free jelly production lines. Our advanced vacuum cooking technology ensures that the fruit flavors and vibrant colors are not destroyed by excessive heat. With our precision depositing machines, every single jelly comes out in the exact same size and weight, guaranteeing a premium product every time.</p>
           </div>
        </div>
      </section>\n\n`,
      
  'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Garlic Dehydration</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Start a Garlic Dehydration Business?</h3>
               <p>Dehydrated garlic flakes, minced garlic, and garlic powder are essential ingredients in the global food industry, used heavily in spices, sauces, ready-to-eat meals, and snacks. Dehydrating raw garlic extends its shelf life from a few months to over a year, making it highly profitable for export and bulk industrial sales.</p>
               
               <h3>How Does the Dehydration Process Work?</h3>
               <p>The process starts by breaking the raw garlic bulbs into individual cloves. A pneumatic air-peeler then removes the skin without damaging the clove. The peeled cloves are washed, sterilized, and sliced evenly. These slices are fed onto a continuous hot air belt dryer, which slowly removes the moisture. The dried flakes are then sorted by size and packaged.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Our continuous belt drying technology is designed to operate at precise, low temperatures. This is critical because excessive heat destroys the allicin (the compound that gives garlic its strong smell and taste). Our plant ensures that your dehydrated garlic retains its sharp pungency, natural white color, and strong aroma, fetching premium prices in the market.</p>
           </div>
        </div>
      </section>\n\n`,
      
  'FullyAutomaticVegetableDryingPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Vegetable Drying</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Invest in a Vegetable Drying Plant?</h3>
               <p>Dried vegetables like onions, carrots, cabbage, and ginger are in huge demand by soup manufacturers, instant noodle brands, and spice blenders. Drying vegetables reduces their weight by up to 90%, making shipping incredibly cheap while preserving the vegetables for years without refrigeration.</p>
               
               <h3>How Does the Vegetable Drying Process Work?</h3>
               <p>Fresh vegetables are first dumped into a massive bubble washing tank to remove all dirt. They are then automatically sliced or diced into small pieces. To stop them from losing their color, they are quickly blanched (briefly boiled) and then passed over a vibration screen to remove excess water. Finally, they enter a continuous hot air dryer where the moisture is gently evaporated.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Drying vegetables evenly is a massive challenge in the food industry. Our automated drying lines use multiple layers and advanced air circulation to ensure that every single vegetable piece is perfectly dried inside and out. The result is a high-quality product that rehydrates instantly and tastes fresh when cooked.</p>
           </div>
        </div>
      </section>\n\n`,
      
  'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Garam Masala Processing</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Start a Garam Masala Business?</h3>
               <p>Garam Masala is the heart of Indian and South Asian cooking. The demand for branded, high-quality, and hygienically packed blended spices is skyrocketing. By manufacturing a perfectly balanced and highly aromatic Garam Masala, you can build a highly profitable and recurring FMCG business.</p>
               
               <h3>How Does the Masala Processing Work?</h3>
               <p>The process starts by thoroughly cleaning whole raw spices (like cumin, cardamom, and black pepper) to remove stones and dust. The spices are then gently roasted to release their natural oils and flavors. After roasting, they are fed into a heavy-duty pulverizer that grinds them into a fine powder. This powder is perfectly mixed in a ribbon blender before being automatically packed into sealed pouches.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>When spices get too hot during grinding, they lose their flavor and aroma. Our pulverizers are equipped with advanced cooling jackets to grind spices at low temperatures. Furthermore, our precision ribbon blenders ensure that every single pouch of Garam Masala has the exact same taste and proportion of spices.</p>
           </div>
        </div>
      </section>\n\n`,
      
  'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx': `      <section className="rcp-section rcp-seo-content" id="seo-guide" data-animate>
        <div className={\`rcp-container rcp-animate \${isVisible["seo-guide"] ? "rcp-animate--in" : ""}\`}>
           <div className="rcp-section-badge">Comprehensive Guide</div>
           <h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Frozen Vegetable Processing</span></h2>
           <p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential.</p>
           <div className="rcp-seo-content__body">
               <h3>Why Invest in a Frozen Vegetable Plant?</h3>
               <p>The frozen food sector is booming as modern consumers look for convenience and year-round availability of seasonal vegetables like green peas and sweet corn. Frozen vegetables have an incredible shelf life and often retain more nutrients than fresh produce that sits in supermarkets for days.</p>
               
               <h3>How Does the Freezing Process Work?</h3>
               <p>The process begins with intensive washing and slicing of the fresh vegetables. They are then blanched in hot water to deactivate enzymes that cause rotting. The most critical step is the IQF (Individual Quick Freezing) tunnel. Cold air blasts freeze the vegetables in just a few minutes. Because it happens so fast, ice crystals don't have time to grow and destroy the vegetable cells. The frozen goods are then weighed and packed.</p>
               
               <h3>The Salvin Industries Advantage</h3>
               <p>Our IQF technology is world-class. It ensures that vegetables like green peas do not stick together in a giant block of ice—every pea remains separate and individually frozen. With our fully automated stainless steel production line, you can process tons of vegetables per hour with minimal labor and zero contamination.</p>
           </div>
        </div>
      </section>\n\n`
};

const componentsDir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [filename, newHtml] of Object.entries(data)) {
  const filePath = path.join(componentsDir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Inject the new section right before `<section className="rcp-section rcp-process-new"`
    if (!content.includes('id="seo-guide"')) {
        content = content.replace(
            /<section className="rcp-section rcp-process-new"/, 
            `${newHtml}      <section className="rcp-section rcp-process-new"`
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filename}`);
    } else {
        console.log(`Section already exists in ${filename}`);
    }
  } else {
    console.log(`File not found: ${filename}`);
  }
}
