const fs = require('fs');
const path = require('path');

const contentData = {
  'AloeVeraJuiceProcessingPlantDetailPage.jsx': {
    plantName: 'Aloe Vera Juice Processing',
    overview: `<div className="rcp-overview__text">
              <p>Start your own profitable beverage business with our <strong>Fully Automated Aloe Vera Juice Processing Plant</strong>. Aloe vera juice is famous worldwide for its incredible health and skin benefits, making it a high-demand health drink.</p>
              <p>Our plant handles everything automatically—from washing the raw aloe vera leaves to extracting the pure gel, blending it into juice, filtering, and packing it safely. The process uses cold extraction and gentle pasteurization to ensure all natural vitamins and nutrients remain intact.</p>
              <p>Built with 100% food-grade stainless steel (SS304/SS316), the entire setup runs on advanced PLC controls. This means the juice stays pure, highly hygienic, and completely untouched by human hands, guaranteeing a long shelf life.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "Is the aloe vera juice extraction fully automatic?",
    "answer": "Yes! Our plant is fully automated. Once you load the fresh aloe vera leaves, the machine automatically washes, peels, and extracts the pure gel without any manual touching."
  },
  {
    "question": "Does the machine preserve the natural nutrients of aloe vera?",
    "answer": "Absolutely. We use a cold-processing method and gentle filtration to make sure all the natural vitamins, minerals, and health benefits of the aloe vera are kept safe in the juice."
  },
  {
    "question": "What kind of packaging can this plant do?",
    "answer": "The plant can easily be connected to various packaging machines. You can pack the aloe vera juice into PET bottles, glass bottles, or tetra packs depending on your market needs."
  },
  {
    "question": "Is it easy to clean the machines after production?",
    "answer": "Yes, our plant comes with a built-in CIP (Clean-In-Place) system. This means the machines clean themselves automatically from the inside using hot water and food-safe cleaning liquids."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start an Aloe Vera Juice Business?</h3>
              <p>The health and wellness market is growing incredibly fast, and aloe vera juice is one of the most popular natural drinks. Packed with vitamins and antioxidants, it is loved for its digestive and skin benefits. By investing in a commercial aloe vera juice processing plant, you can tap into this massive global market and earn high profits with a healthy FMCG product.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Aloe Vera Plant Works (Simple Process)</h3>
              <p><strong>1. Washing and Sorting:</strong> Fresh aloe vera leaves are thoroughly washed to remove dirt and bacteria.</p>
              <p><strong>2. Gel Extraction:</strong> The tough outer skin is carefully removed, and the pure inner gel is extracted cleanly.</p>
              <p><strong>3. Blending and Filtration:</strong> The gel is blended into a smooth juice and filtered to remove any unwanted tough fibers.</p>
              <p><strong>4. Pasteurization:</strong> The juice is gently heated to remove any bacteria while keeping all the healthy nutrients alive.</p>
              <p><strong>5. Automatic Packaging:</strong> The fresh juice is automatically filled into clean bottles, sealed, and labeled for the market.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Our automatic plants are built with high-quality SS304 and SS316 stainless steel, ensuring complete food safety. They run on smart PLC controls, meaning you need fewer workers to run the factory, reducing your daily costs and maximizing your earnings. We provide full setup, installation, and training to help you succeed.</p>
            </div>
          </div>`
  },
  'BiscuitPlantDetailPage.jsx': {
    plantName: 'Biscuit Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Enter the fast-growing bakery market with our <strong>Fully Automatic Biscuit Plant</strong>. Biscuits are a daily snack loved by millions, offering a massive and highly profitable business opportunity.</p>
              <p>Our complete turnkey solution covers every step of biscuit making. It starts with automatic dough mixing, perfect shaping through rotary moulders or cutters, baking in continuous tunnel ovens, cooling, and high-speed packaging.</p>
              <p>With smart PLC automation, the plant ensures uniform baking, perfect color, and consistent crunch in every single biscuit. The fully hygienic, zero-touch process guarantees a high-quality product with a long shelf life.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "Can I make different types of biscuits with one plant?",
    "answer": "Yes! By simply changing the molds and recipe, you can make soft dough biscuits (like glucose or butter cookies) and hard dough biscuits (like Marie or crackers) on the same production line."
  },
  {
    "question": "How is the baking temperature controlled?",
    "answer": "Our continuous baking tunnel ovens are equipped with smart temperature sensors and PLC controls. This ensures heat is distributed evenly across all zones, giving every biscuit the perfect golden color and crunch."
  },
  {
    "question": "Does the plant include automatic packaging?",
    "answer": "Yes, our fully automatic plant includes high-speed cooling conveyors that feed the baked biscuits directly into automatic flow wrapping or family pack machines without any human touch."
  },
  {
    "question": "What is the fuel source for the baking oven?",
    "answer": "Our ovens are highly energy-efficient and can be customized to run on LPG, natural gas (PNG), diesel, or electricity, depending on what is most cost-effective in your region."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Biscuit Manufacturing Business?</h3>
              <p>Biscuits are one of the most consumed packaged foods globally. From children to adults, everyone eats biscuits daily with tea or coffee. Setting up a commercial biscuit manufacturing plant is a highly profitable venture because the raw materials (flour, sugar, oil) are cheap, but the branded final product sells quickly in massive volumes.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Biscuit Plant Works (Simple Process)</h3>
              <p><strong>1. Dough Mixing:</strong> Ingredients like flour, sugar, and butter are mixed perfectly in high-speed industrial mixers.</p>
              <p><strong>2. Shaping & Molding:</strong> The dough is passed through rotary molds or cutters to stamp out perfectly shaped raw biscuits with your brand name.</p>
              <p><strong>3. Baking (Tunnel Oven):</strong> The raw biscuits travel through a long, continuous tunnel oven where they are baked to a perfect golden crunch.</p>
              <p><strong>4. Cooling:</strong> Freshly baked biscuits travel on a long cooling conveyor to harden and release excess heat.</p>
              <p><strong>5. Automatic Packaging:</strong> The cooled biscuits are automatically grouped and packed into attractive wrappers, ready for sale.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Salvin Industries delivers heavy-duty, energy-efficient biscuit plants that run 24/7 without breaking down. Our food-grade stainless steel machines ensure 100% hygiene, while our smart automation reduces your labor costs. From factory layout design to installing the oven and training your staff, we provide a complete A-to-Z solution.</p>
            </div>
          </div>`
  },
  'CookiePlantDetailPage.jsx': {
    plantName: 'Cookie Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Dominate the premium bakery market with our <strong>Fully Automatic Cookie Plant</strong>. Premium cookies like chocolate chip, center-filled, and wire-cut cookies offer massive profit margins and are loved worldwide.</p>
              <p>Our cookie plants are designed for extreme versatility and precision. The automated process handles heavy dough mixing, precise wire-cutting or center-filling, even baking in continuous ovens, and automatic cooling and packing.</p>
              <p>Equipped with advanced PLC controls, our machines ensure that every single cookie has the perfect weight, shape, and homemade texture. The zero-touch, hygienic process guarantees a premium product ready for supermarket shelves.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "Can this plant make center-filled chocolate cookies?",
    "answer": "Yes! We offer specialized center-filling extruders that allow you to inject liquid chocolate, jam, or cream directly into the center of the dough before baking."
  },
  {
    "question": "What is the difference between a wire-cut and dropped cookie?",
    "answer": "Wire-cut cookies are sliced from a thick dough roll, making them look rustic and thick (like classic chocolate chip cookies). Dropped cookies use a softer dough that is squeezed onto the tray, creating a smooth, round shape. Our plant can do both!"
  },
  {
    "question": "Do I need a lot of workers to run this plant?",
    "answer": "No. Because the plant is fully automatic, the dough is automatically dropped onto the baking belt, travels through the oven, cools down, and goes into the packing machine automatically. You only need a few supervisors."
  },
  {
    "question": "Is the oven energy efficient?",
    "answer": "Absolutely. Our continuous tunnel ovens use heavy insulation and smart temperature control zones to lock in heat, drastically reducing your fuel or electricity costs."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Premium Cookie Business?</h3>
              <p>While normal biscuits sell for lower margins, premium cookies (like butter cookies, choco-chip, and center-filled cookies) are sold at higher prices with huge profit margins. Consumers today prefer high-quality, delicious cookies for gifting and snacking. Investing in an automatic cookie plant allows you to create premium, high-value FMCG products.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Cookie Plant Works (Simple Process)</h3>
              <p><strong>1. Heavy Dough Mixing:</strong> Special planetary mixers combine butter, sugar, and flour to create a rich, smooth cookie dough.</p>
              <p><strong>2. Wire Cutting & Extrusion:</strong> The dough is pushed through special nozzles and cut with a wire to drop perfectly shaped cookies directly onto the baking belt.</p>
              <p><strong>3. Baking (Tunnel Oven):</strong> The cookies slowly travel through a temperature-controlled tunnel oven to bake perfectly without burning the bottom.</p>
              <p><strong>4. Cooling:</strong> The hot cookies travel on a cooling conveyor to set their shape and become crunchy.</p>
              <p><strong>5. Automatic Packaging:</strong> The cookies are gently packed into premium trays or individual wrappers using high-speed packing machines.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Our cookie manufacturing machines are designed to give your product that perfect 'homemade' texture but at industrial speeds. We use food-grade SS304/SS316 materials for 100% hygiene and integrate world-class electronics for zero breakdowns. We help you set up the entire factory and train your team to produce world-class cookies.</p>
            </div>
          </div>`
  },
  'BreadPlantDetailPage.jsx': {
    plantName: 'Bread Manufacturing',
    overview: `<div className="rcp-overview__text">
              <p>Start a highly profitable daily-need business with our <strong>Fully Automated Bread Plant</strong>. Bread is an essential food consumed every single day, guaranteeing a non-stop, high-volume market.</p>
              <p>Our commercial bread lines automate the entire complex process of bread making. From spiral dough mixing, dividing, and rounding, to automatic proofing (fermentation), baking, slicing, and bagging.</p>
              <p>By removing human handling, our fully automatic plant ensures perfect dough consistency, uniform loaf sizes, and completely hygienic production. The result is soft, perfectly baked bread with an extended shelf life.</p>
              <div className="rcp-overview__features">`,
    faqs: `const FAQS = [
  {
    "question": "Can I make different types of bread (white, brown, whole wheat)?",
    "answer": "Yes! By simply changing the recipe in the dough mixer, the same automatic line can produce white bread, brown bread, whole wheat, or even sweet buns and pavs."
  },
  {
    "question": "How does the machine ensure all bread loaves are the same size?",
    "answer": "Our automatic volumetric dough divider cuts the dough into exact, identical weights. It then molds and drops them into baking pans automatically, ensuring every loaf is identical."
  },
  {
    "question": "What is a proofer and why is it important?",
    "answer": "A proofer is a humidity and temperature-controlled chamber. The dough rests in the proofer so the yeast can act, making the dough rise perfectly before it goes into the oven. Our automatic proofer ensures perfectly soft bread every time."
  },
  {
    "question": "Does the plant slice and pack the bread automatically?",
    "answer": "Yes. After baking and cooling, the loaves pass through an automatic high-speed slicer and are immediately packed and tied in bags, keeping the bread completely untouched by human hands."
  }
];`,
    seo: `<div className="rcp-seo-content__body">
            <div className="rcp-seo-content__block">
              <h3>Why Start a Commercial Bread Bakery?</h3>
              <p>Bread is a staple food in homes, restaurants, and fast-food chains everywhere. Because it is bought and consumed daily, a commercial bread business offers instant cash flow and high daily sales. By automating the process, you can produce thousands of loaves a day with very few workers, maximizing your daily profit.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>How Our Automatic Bread Plant Works (Simple Process)</h3>
              <p><strong>1. Spiral Mixing:</strong> Flour, yeast, and water are kneaded perfectly in an industrial spiral mixer to create stretchy dough.</p>
              <p><strong>2. Dividing & Molding:</strong> The dough is automatically cut into equal pieces and rolled into shapes to fit the bread pans.</p>
              <p><strong>3. Proofing:</strong> The pans enter a warm, humid chamber where the yeast makes the dough rise beautifully.</p>
              <p><strong>4. Baking:</strong> The risen dough travels through a tunnel oven (or rotary rack oven) where it bakes into soft bread with a golden crust.</p>
              <p><strong>5. Cooling, Slicing & Bagging:</strong> The baked bread is cooled down, sliced evenly, and automatically sealed in plastic bags for the market.</p>
            </div>
            
            <div className="rcp-seo-content__block">
              <h3>Why Choose Salvin Industries?</h3>
              <p>Salvin Industries builds heavy-duty bakery equipment designed for 24/7 non-stop production. Our bread plants guarantee 100% hygiene, perfect loaf consistency, and massive energy savings on baking. From factory layout planning to installing the entire line and testing the recipe, we deliver a complete turnkey bakery solution.</p>
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
