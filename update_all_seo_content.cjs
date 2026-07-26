const fs = require('fs');
const path = require('path');

const dir = 'src/pages/TurnkeyProject/components';

const plants = {
  'FullyAutomaticMixedSpicePlantDetailPage.jsx': {
    overviewTitle: "Mixed Spice Processing",
    overviewText: `<p><strong>Salvin Industries' Fully Automatic Mixed Spice Processing Plant</strong> is an advanced turnkey solution designed to handle a variety of spices efficiently. From pre-cleaning and sorting to precision grinding and hygienic blending, our fully automated system ensures maximum product yield and zero flavor loss.</p>
              <p>Built with food-grade SS304/316 stainless steel, this plant features PLC-controlled automation to reduce manual labor and ensure every batch meets the highest global food safety standards. It is the perfect choice for scaling up mixed spice production with consistent quality.</p>`,
    seoTitle: "A Simple Guide to <span className=\"rcp-accent\">Mixed Spice Processing</span>",
    seoSubtitle: "Understanding the industrial process, benefits, and market potential.",
    seoContent: `<div className="rcp-seo-content__text">
            <h3>What is Mixed Spice Processing?</h3>
            <p>Mixed spice processing involves cleaning, roasting, grinding, and perfectly blending different raw spices to create a uniform spice mix. At an industrial scale, this requires heavy-duty machines that can handle high volumes while preserving the essential oils and natural aroma of the spices.</p>

            <h3>Why Automate Your Spice Plant?</h3>
            <p>Automation eliminates human error, ensures a highly hygienic environment, and guarantees consistent taste across all batches. It also significantly lowers labor costs and boosts your production speed, allowing you to fulfill large orders quickly.</p>

            <h3>Market Potential for Mixed Spices</h3>
            <p>The demand for ready-to-use mixed spices is rapidly growing globally. Investing in a fully automatic plant allows you to supply high-quality, perfectly blended spices to supermarkets, restaurants, and export markets, ensuring a high return on investment.</p>
          </div>`
  },
  'FullyAutomaticPasteurizedMilkPlantDetailPage.jsx': {
    overviewTitle: "Pasteurized Milk Processing",
    overviewText: `<p><strong>Salvin Industries' Fully Automatic Pasteurized Milk Plant</strong> is a state-of-the-art turnkey solution engineered for dairy processing. We provide an end-to-end processing ecosystem that rapidly pasteurizes, homogenizes, and packages milk while maintaining its natural nutrients and freshness.</p>
              <p>With our advanced machinery and PLC-controlled automation, you can achieve continuous, high-yield milk processing. Our food-grade stainless steel systems adhere strictly to global dairy safety and hygiene standards, ensuring an extended shelf life for your milk products.</p>`,
    seoTitle: "A Simple Guide to <span className=\"rcp-accent\">Milk Pasteurization</span>",
    seoSubtitle: "Understanding the dairy processing steps, benefits, and market growth.",
    seoContent: `<div className="rcp-seo-content__text">
            <h3>What is Milk Pasteurization?</h3>
            <p>Pasteurization is the process of heating milk to a specific temperature to destroy harmful bacteria, followed by rapid cooling. This extends the shelf life of the milk and makes it entirely safe for consumption, without destroying its natural nutritional value.</p>

            <h3>Benefits of a Fully Automatic Dairy Plant</h3>
            <p>A fully automatic dairy plant ensures completely touch-free processing. From raw milk reception to final pouch packing, the closed-loop hygienic system prevents any contamination. The built-in CIP (Clean-in-Place) system also makes daily cleaning effortless.</p>

            <h3>The Growing Dairy Market</h3>
            <p>Safe, packaged milk is a daily necessity worldwide. By setting up a high-capacity automatic pasteurized milk plant, you can reliably supply safe, fresh, and high-quality milk to large urban populations and capitalize on the growing dairy industry.</p>
          </div>`
  },
  'FullyAutomaticSpicePackagingLineDetailPage.jsx': {
    overviewTitle: "Spice Packaging",
    overviewText: `<p><strong>Salvin Industries' Fully Automatic Spice Packaging Line</strong> is a high-speed turnkey solution designed for accurate, hygienic, and efficient packaging of all spice powders. Our advanced multi-head weighers and VFFS packing machines ensure zero product wastage and perfectly sealed pouches.</p>
              <p>Constructed from premium food-grade stainless steel, this fully automatic packaging line operates with PLC-controlled precision. It seamlessly integrates with your grinding and blending lines to provide a continuous, touch-free transition from raw powder to market-ready packets.</p>`,
    seoTitle: "A Simple Guide to <span className=\"rcp-accent\">Spice Packaging</span>",
    seoSubtitle: "Understanding the packaging process, accuracy, and market impact.",
    seoContent: `<div className="rcp-seo-content__text">
            <h3>Why is Automatic Packaging Important?</h3>
            <p>Spices are highly sensitive to moisture and air. Our automatic packaging line uses nitrogen flushing and airtight sealing to lock in the aroma, flavor, and freshness of the spices, giving them a much longer shelf life on supermarket shelves.</p>

            <h3>Precision and Speed</h3>
            <p>Manual packing often leads to inaccurate weights and product spillage. Our automatic multi-head weighers guarantee exact pouch weights at extremely high speeds, saving you money on wasted product and dramatically increasing your daily output.</p>

            <h3>Boosting Brand Value</h3>
            <p>A perfectly sealed, attractive pouch builds immediate trust with consumers. By using an industrial packaging line, your final product will look highly professional, making it easier to enter large retail chains and international export markets.</p>
          </div>`
  },
  'SpiceBlendingPlantDetailPage.jsx': {
    overviewTitle: "Spice Blending",
    overviewText: `<p><strong>Salvin Industries' Spice Blending Plant</strong> is a specialized turnkey solution engineered for creating perfectly homogeneous spice mixtures. Our advanced ribbon blenders and paddle mixers guarantee that every single pouch of your mixed spice has the exact same uniform taste.</p>
              <p>Featuring a fully automated, PLC-controlled batching and mixing process, this plant eliminates human inconsistencies. Built with food-grade SS304/316, the system is designed for quick cleaning between different recipes, ensuring maximum efficiency and zero cross-contamination.</p>`,
    seoTitle: "A Simple Guide to <span className=\"rcp-accent\">Spice Blending</span>",
    seoSubtitle: "Understanding recipe consistency, industrial mixing, and market success.",
    seoContent: `<div className="rcp-seo-content__text">
            <h3>The Art of Spice Blending</h3>
            <p>Creating complex spice mixes like Garam Masala or Curry Powder requires mixing multiple ingredients in exact proportions. Industrial blending ensures that even trace ingredients (like expensive saffron or cardamom) are distributed 100% evenly throughout the entire batch.</p>

            <h3>Why Use a Ribbon Blender?</h3>
            <p>A ribbon blender uses uniquely designed helical blades that move the spices in opposite directions simultaneously. This creates a highly efficient, gentle mixing action that blends the powders perfectly in just a few minutes without generating excess heat.</p>

            <h3>Consistency is Key</h3>
            <p>For any food brand, consistency is the most important factor. If a customer buys your blended spice today, they expect it to taste exactly the same as the one they bought last month. Our automated blending plants guarantee this exact consistency every single time.</p>
          </div>`
  },
  'FullyAutomatedCurryPowderProcessingPlantDetailPage.jsx': {
    overviewTitle: "Curry Powder Processing",
    overviewText: `<p><strong>Salvin Industries' Fully Automatic Curry Powder Processing Plant</strong> is an advanced turnkey solution engineered specifically for high-volume curry powder production. From roasting raw coriander and cumin to ultra-fine pulverizing, we ensure maximum flavor retention.</p>
              <p>With our robust machinery and PLC-controlled automation, you can achieve continuous, high-yield production of premium curry powder. The entire plant is fabricated from food-grade stainless steel to ensure a highly hygienic, touch-free operation tailored to global export standards.</p>`,
    seoTitle: "A Simple Guide to <span className=\"rcp-accent\">Curry Powder Production</span>",
    seoSubtitle: "Understanding roasting, grinding, and the global curry powder market.",
    seoContent: `<div className="rcp-seo-content__text">
            <h3>How is Curry Powder Made?</h3>
            <p>Curry powder is a complex blend of coriander, turmeric, cumin, fenugreek, and other spices. The industrial process involves carefully roasting the raw spices to release their natural oils, followed by low-temperature grinding to preserve the vibrant color and strong aroma.</p>

            <h3>The Importance of Cool Grinding</h3>
            <p>Grinding spices generates a lot of heat, which can burn the powder and destroy its flavor. Our industrial pulverizers use specialized cooling technology to keep the temperature low during grinding, ensuring your curry powder retains its authentic taste and bright color.</p>

            <h3>Global Demand for Curry Powder</h3>
            <p>Curry powder is one of the most widely consumed spice blends in the world. By investing in a fully automatic processing plant, you can produce large volumes of export-quality curry powder to meet the massive demand in both domestic and international food markets.</p>
          </div>`
  }
};

Object.keys(plants).forEach(f => {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const data = plants[f];
  if (!data) return;

  // 1. Replace overview title
  content = content.replace(
    /<h2 className="rcp-section-title">Complete Processing <span className="rcp-accent">Solution<\/span><\/h2>/,
    `<h2 className="rcp-section-title">Complete <span className="rcp-accent">${data.overviewTitle}</span> Solution</h2>`
  );

  // 2. Replace overview text
  const overviewRegex = /<div className="rcp-overview__text">\s*<p><strong>Salvin Industries[^]*?specific requirements\.<\/p>/;
  content = content.replace(overviewRegex, `<div className="rcp-overview__text">\n              ${data.overviewText}`);

  // 3. Replace SEO title
  const seoTitleRegex = /<h2 className="rcp-section-title">A Simple Guide to <span className="rcp-accent">Garam Masala Processing<\/span><\/h2>/;
  content = content.replace(seoTitleRegex, `<h2 className="rcp-section-title">${data.seoTitle}</h2>`);

  // 4. Replace SEO subtitle
  const seoSubtitleRegex = /<p className="rcp-section-subtitle">Understanding the industrial process, benefits, and market potential\.<\/p>/;
  content = content.replace(seoSubtitleRegex, `<p className="rcp-section-subtitle">${data.seoSubtitle}</p>`);

  // 5. Replace SEO content body
  const seoContentRegex = /<div className="rcp-seo-content__text">[^]*?<\/div>\s*<\/div>\s*<div className="rcp-seo-content__image">/;
  content = content.replace(seoContentRegex, `${data.seoContent}\n          </div>\n          <div className="rcp-seo-content__image">`);

  fs.writeFileSync(filePath, content);
  console.log("Updated content for:", f);
});
