const fs = require('fs');
const path = require('path');

const contentData = {
  'CakePlantDetailPage.jsx': {
    plantName: 'Cake Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Enter the highly lucrative bakery segment with our <strong>Fully Automatic Cake Plant</strong>. From soft cupcakes to premium layered cakes and bar cakes, this plant allows you to mass-produce delicious bakery items with ease.</p>
              <p>Our fully automatic line takes care of the entire process: aerated batter mixing, precise automatic depositing into molds, even baking in a continuous tunnel oven, gentle depanning, and hygienic flow-wrap packaging.</p>
              <p>By automating the delicate cake-making process, our machines ensure that every cake is perfectly spongy, evenly baked, and visually beautiful. The zero-touch hygienic process guarantees a premium, long-shelf-life product.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "Can I make cupcakes and bar cakes on the same machine?",
    "answer": "Yes! Our automatic batter depositor is highly flexible. By changing the baking trays and nozzle settings, you can produce cupcakes, bar cakes, muffins, and even center-filled cakes on the exact same production line."
  },
  {
    "question": "How do you achieve the perfect sponge texture?",
    "answer": "The secret is in our industrial aerated mixer. It whips the batter at high speeds to trap air, making the batter extremely light and fluffy. This guarantees a perfectly soft and spongy cake every time."
  },
  {
    "question": "What is center-filled cake, and can this plant do it?",
    "answer": "Center-filled cakes have liquid chocolate, strawberry jam, or cream injected inside the baked cake. Yes, our plant can be equipped with an automatic injection system that fills the cakes right after baking."
  },
  {
    "question": "How are the delicate cakes removed from the hot trays?",
    "answer": "Our plant uses automatic suction or vacuum depanning machines. They gently lift the soft baked cakes out of the hot molds without breaking or crushing them, placing them safely onto the cooling conveyor."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Commercial Cake Bakery?</h3>
              <p>Packaged cakes (like cupcakes, muffins, and bar cakes) are incredibly popular as sweet snacks and school tiffins. Unlike plain bread or biscuits, cakes command a premium price in the market. A fully automatic cake plant allows you to mass-produce these high-profit items hygienically, giving them the long shelf life needed to supply supermarkets globally.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Automatic Cake Plant Works (Simple Process)</h3>
              <p><strong>1. Aerated Batter Mixing:</strong> Ingredients are whipped at high speed to create a light, fluffy, and air-filled cake batter.</p>
              <p><strong>2. Automatic Depositing:</strong> The batter is precisely pumped and dropped into greased baking molds or paper cups.</p>
              <p><strong>3. Baking (Tunnel Oven):</strong> The trays slowly move through a temperature-controlled tunnel oven for a perfectly even, golden bake.</p>
              <p><strong>4. Depanning & Injection:</strong> The cakes are gently vacuum-lifted out of the trays. If needed, chocolate or cream is injected into the center.</p>
              <p><strong>5. Cooling & Packaging:</strong> The cakes cool down naturally on a conveyor and are individually packed in sealed wrappers to stay soft and fresh.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Salvin Industries provides world-class cake production lines designed for maximum hygiene and minimum labor. Our machines are built with SS304/SS316 food-grade steel and advanced PLC controls to ensure every cake is identical. From planning the factory layout to perfecting your cake recipe on our machines, we offer a 100% turnkey solution.</p>
            </div>
          </div>`
  },
  'WaferPlantDetailPage.jsx': {
    plantName: 'Wafer Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Capture the booming snack market with our <strong>Fully Automatic Wafer Plant</strong>. Crispy cream-filled wafers are a high-margin, high-demand snack loved by children and adults across the globe.</p>
              <p>Our turnkey wafer plants automate the entire complex process: from automatic batter mixing and baking thin wafer sheets, to spreading cream, stacking the sheets in layers, cooling, precise wire cutting, and high-speed packaging.</p>
              <p>Designed for extreme precision and hygiene, our automated line ensures perfectly crispy wafers with even cream distribution. The entire system is PLC-controlled, allowing you to produce premium quality snacks with minimal labor costs.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "How are the thin wafer sheets made?",
    "answer": "The liquid batter is automatically pumped onto flat baking plates that close like a waffle iron. These plates travel through a gas-heated oven, baking the batter into a large, crispy, flat wafer sheet in just a few minutes."
  },
  {
    "question": "Can I make wafers with different colored creams?",
    "answer": "Yes! The automatic cream spreading machine can apply chocolate, vanilla, strawberry, or any flavor cream you want. You can even create dual-flavor wafers by using multiple cream spreaders on the same line."
  },
  {
    "question": "How do you cut the large sheets into small finger wafers?",
    "answer": "After the large sheets are layered with cream, they pass through a cooling tunnel to harden the cream. Then, a highly precise wire-cutting machine slices the large stack into perfect, identical small wafer fingers."
  },
  {
    "question": "Is the plant energy efficient?",
    "answer": "Absolutely. The wafer baking oven is the heart of the plant, and ours is heavily insulated to prevent heat loss, making it highly fuel-efficient and cost-effective to run continuously."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Cream Wafer Business?</h3>
              <p>Wafers are lightweight, visually appealing, and highly profitable. Because the primary ingredient is an inexpensive batter layered with sweet cream, the production cost is extremely low while the retail price is high. An automated wafer plant allows you to mass-produce massive volumes of this high-margin FMCG product to supply local and international markets.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Automatic Wafer Plant Works (Simple Process)</h3>
              <p><strong>1. Batter Mixing & Baking:</strong> Liquid batter is mixed and pumped onto heavy baking plates which travel through a gas oven, creating large crispy wafer sheets.</p>
              <p><strong>2. Cream Spreading & Stacking:</strong> A machine automatically spreads a smooth layer of sweet cream on the sheets and stacks them on top of each other (like a sandwich).</p>
              <p><strong>3. Cooling (Book Building):</strong> The hot wafer stacks pass through a refrigerated cooling tunnel to solidify the melted cream, sticking the layers together.</p>
              <p><strong>4. Precision Cutting:</strong> A wire-cutting machine slices the large stacks into the small, rectangular wafer fingers you see in stores.</p>
              <p><strong>5. Automatic Packaging:</strong> The crispy wafers are gently fed into high-speed flow-wrap machines to seal in the freshness and crunch.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Our fully automatic wafer plants are engineered for precision and durability. We ensure 100% uniform baking across the plates and perfectly even cream application. Built with food-grade SS304/SS316 and advanced PLC touchscreens, our plants are easy to operate, require very few workers, and guarantee a completely hygienic, zero-touch final product.</p>
            </div>
          </div>`
  },
  'ChocolateProcessingPlantDetailPage.jsx': {
    plantName: 'Chocolate Processing',
    overview: `<div className="rcp-overview__text">
              <p>Enter the luxurious and highly profitable confectionery market with our <strong>Fully Automatic Chocolate Processing Plant</strong>. From rich dark chocolate bars to creamy milk chocolate, we provide the ultimate industrial solution.</p>
              <p>Our complete plant covers every stage of chocolate making: from roasting and grinding raw cocoa beans, to mixing, refining (conching) for a smooth texture, tempering for a glossy shine, and finally automatic molding and packing.</p>
              <p>Chocolate processing requires absolute precision. Our advanced PLC-controlled systems maintain exact temperatures and mixing times, ensuring your chocolate has the perfect snap, smooth mouthfeel, and premium quality without any manual interference.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "What is conching, and why is it important?",
    "answer": "Conching is a crucial mixing process that grinds the chocolate particles down to a microscopic size while heating and aerating the mixture. This is what removes bitterness and gives premium chocolate its incredibly smooth, melt-in-the-mouth texture."
  },
  {
    "question": "Why does chocolate need to be tempered?",
    "answer": "Tempering is the process of precisely heating and cooling liquid chocolate. This aligns the cocoa butter crystals so that the final chocolate bar is shiny, snaps cleanly when broken, and doesn't melt instantly in your hands."
  },
  {
    "question": "Can this plant make both chocolate bars and center-filled chocolates?",
    "answer": "Yes! Our automatic molding lines can be equipped with 'One-Shot' depositors. This amazing technology allows you to inject a liquid center (like caramel or strawberry cream) at the exact same time as the chocolate shell is formed."
  },
  {
    "question": "Does the plant process raw cocoa beans or just cocoa powder?",
    "answer": "Our comprehensive turnkey plants can do both. We can supply bean-to-bar systems (which roast and grind raw cocoa beans into liquor) or compound chocolate systems (which mix readymade cocoa powder, sugar, and fat)."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Chocolate Processing Business?</h3>
              <p>Chocolate is universally loved and seen as a premium, recession-proof product. The global demand for high-quality chocolate bars, truffles, and center-filled candies is massive. By setting up an automated chocolate processing plant, you can create a highly valuable brand with incredible profit margins, catering to both everyday consumers and premium gifting markets.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Chocolate Plant Works (Simple Process)</h3>
              <p><strong>1. Roasting & Grinding (Bean-to-Bar):</strong> Raw cocoa beans are roasted to develop flavor, then ground into a thick liquid called cocoa liquor.</p>
              <p><strong>2. Mixing & Refining (Conching):</strong> Cocoa liquor, sugar, milk powder, and cocoa butter are mixed and ground in a conching machine for hours until the texture is silky smooth.</p>
              <p><strong>3. Tempering:</strong> The liquid chocolate is carefully heated and cooled to crystallize the cocoa butter, ensuring a glossy finish and a hard snap.</p>
              <p><strong>4. Automatic Molding & Cooling:</strong> The tempered chocolate is poured into custom-shaped molds, vibrated to remove air bubbles, and sent through a cooling tunnel to harden.</p>
              <p><strong>5. Automatic Wrapping:</strong> The finished chocolate bars are automatically removed from the molds and beautifully wrapped in foil or flow-wrap packaging.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Chocolate making is highly technical, and Salvin Industries provides the advanced European-style technology required for perfection. Our machines feature precise jacketed temperature controls, heavy-duty SS304/SS316 food-grade construction, and fully automated PLC panels. We deliver a complete end-to-end solution, ensuring your chocolate brand stands out in quality and taste.</p>
            </div>
          </div>`
  },
  'ToffeePlantDetailPage.jsx': {
    plantName: 'Toffee Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Capitalize on the massive hard-boiled and soft candy market with our <strong>Fully Automatic Toffee & Candy Plant</strong>. Sweets and toffees are extreme high-volume products offering exceptional profit margins.</p>
              <p>Our completely automated production line handles everything flawlessly: from boiling sugar and glucose in vacuum cookers, mixing in flavors and colors on a cooling table, pulling the candy rope, forming the toffee shapes, to high-speed twist wrapping.</p>
              <p>By automating this sticky and difficult process, our PLC-controlled plant guarantees zero human touch, perfect hygiene, identical candy shapes, and incredible production speeds that manual labor simply cannot achieve.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "What is the difference between making hard candy and soft toffee?",
    "answer": "It comes down to the recipe and boiling temperature. Hard candy is boiled at a higher temperature to remove more moisture, while soft toffees and caramels have more moisture, milk, and fat. Our plant can be adjusted to make both!"
  },
  {
    "question": "How does the machine shape the toffee so perfectly?",
    "answer": "After the hot candy mass is cooled slightly, it goes through a 'Batch Roller' and 'Rope Sizer'. These machines roll the thick candy into a long, thin rope. A high-speed forming machine then chops and stamps this rope into perfect individual toffees."
  },
  {
    "question": "Can this plant do center-filled toffees?",
    "answer": "Yes. Our advanced candy forming lines can include a center-filling pump. This injects liquid chocolate, fruit jam, or soft cream right into the center of the candy rope before it gets chopped and formed."
  },
  {
    "question": "How fast does the twist wrapping machine work?",
    "answer": "Our high-speed automatic packaging machines are incredibly fast. Depending on the model, they can individually twist-wrap or flow-wrap hundreds of toffees every single minute, directly from the cooling conveyor."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Commercial Toffee & Candy Business?</h3>
              <p>Toffees and candies are low-cost, impulse-buy items that sell in massive quantities. Because the main ingredients (sugar and liquid glucose) are very affordable, the profit margins are huge when produced on a large, automated scale. A fully automated candy plant allows you to flood the market with your branded sweets at incredibly low production costs.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Toffee & Candy Plant Works (Simple Process)</h3>
              <p><strong>1. Vacuum Cooking:</strong> Sugar, water, and glucose are boiled in a high-tech vacuum cooker to exactly the right temperature to evaporate moisture without burning.</p>
              <p><strong>2. Cooling & Flavoring:</strong> The hot, sticky syrup is poured onto a water-cooled steel table where flavors, colors, and acids are kneaded into the mass.</p>
              <p><strong>3. Rope Forming:</strong> The large mass of candy is rolled and stretched by machines into a very long, continuous, thin rope.</p>
              <p><strong>4. Cutting & Forming:</strong> The rope enters a high-speed forming die that rapidly cuts and presses the candy into perfect shapes (ovals, squares, or spheres).</p>
              <p><strong>5. Cooling & Wrapping:</strong> The shaped candies travel through a long cooling tunnel to harden fully, and are then instantly fed into high-speed twist-wrapping or flow-wrapping machines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Candy making is a sticky, hot, and difficult process to do manually. Salvin Industries provides fully enclosed, automated solutions that make production effortless. Built with heavy-duty SS304/SS316 materials, our plants ensure perfect food hygiene. Our advanced PLC controls guarantee perfect cooking temperatures and forming speeds, delivering a complete turnkey solution for your confectionery brand.</p>
            </div>
          </div>`
  }
};

const dirPath = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

for (const [file, data] of Object.entries(contentData)) {
  const filePath = path.join(dirPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace overview text
    content = content.replace(/<div className="rcp-overview__text">[\s\S]*?<div className="rcp-overview__features">/, data.overview);
    
    // Replace FAQS
    content = content.replace(/const FAQS = \[[\s\S]*?\];/, data.faqs);

    // Replace SEO Body
    content = content.replace(/<div className="rcp-seo-content__body">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, data.seo + `\n        </div>\n      </section>`);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated content for ${file}`);
  }
}
