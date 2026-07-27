const fs = require('fs');
const path = require('path');

const plants = [
  {
    file: 'PetroleumJellyProcessingDetailPage.jsx',
    faqs: `
const FAQS = [
  {
    "question": "What grades of petroleum jelly can this plant produce?",
    "answer": "Our plants are designed to produce all grades, including cosmetic, pharmaceutical (medical), and industrial-grade petroleum jelly, by precisely controlling the homogenization and cooling processes."
  },
  {
    "question": "Does the plant maintain uniform blending without lump formation?",
    "answer": "Yes, our high-shear vacuum homogenizers ensure perfectly smooth, lump-free, and air-bubble-free jelly, which is critical for cosmetic and medical applications."
  },
  {
    "question": "Is the filling process fully automated?",
    "answer": "Absolutely. The plant integrates seamlessly with automatic tube and jar filling machines that maintain the jelly at the exact flowable temperature before it solidifies in the container."
  },
  {
    "question": "Can this plant also produce hair wax or similar cosmetics?",
    "answer": "Yes, with minor formulation adjustments, the same high-shear heating and blending system can be used to manufacture hair waxes, pomades, and thick ointments."
  }
];`
  },
  {
    file: 'FullyAutomaticYogurtPlantDetailPage.jsx',
    faqs: `
const FAQS = [
  {
    "question": "How do you prevent whey separation (wateriness) in the yogurt?",
    "answer": "Whey separation is prevented by our precise homogenization and exact temperature-controlled incubation vats, which ensure the protein structure sets perfectly."
  },
  {
    "question": "Can the plant produce both set yogurt and stirred/flavored yogurt?",
    "answer": "Yes, our turnkey solution is highly versatile. It features specialized gentle agitators that can blend in fruit pulp or flavors without breaking the delicate curd structure of stirred yogurt."
  },
  {
    "question": "Is the cleaning process automated?",
    "answer": "Yes, the entire plant is equipped with a fully automatic CIP (Clean-In-Place) system, ensuring maximum hygiene without manual intervention."
  },
  {
    "question": "What type of packaging options are supported?",
    "answer": "The plant integrates with fully automatic rotary or linear cup filling and sealing machines, as well as pouch filling systems, depending on your market needs."
  }
];`
  },
  {
    file: 'FullyAutomaticUHTMilkPlantDetailPage.jsx',
    faqs: `
const FAQS = [
  {
    "question": "Does UHT sterilization affect the taste of the milk?",
    "answer": "Because we use ultra-fast flash heating (over 135°C for just seconds) and immediate cooling, the natural flavor and nutritional value of the milk are highly preserved without any burnt taste."
  },
  {
    "question": "What is the shelf life of the milk produced?",
    "answer": "When paired with our aseptic packaging machines, the UHT milk can achieve a shelf life of 6 to 9 months without any refrigeration or chemical preservatives."
  },
  {
    "question": "Is this plant suitable for flavored milk or juices?",
    "answer": "Yes, our UHT sterilizers are highly versatile and can process flavored milk, soya milk, juices, and other liquid beverages with minor configuration changes."
  },
  {
    "question": "How is the aseptic condition maintained during packaging?",
    "answer": "The milk is transferred from the sterilizer to the aseptic filling machine through a completely closed, sterile piping loop, preventing any exposure to ambient air."
  }
];`
  },
  {
    file: 'CurdPlantDetailPage.jsx',
    faqs: `
const FAQS = [
  {
    "question": "How does the cup-incubation method work?",
    "answer": "In this method, the milk is inoculated with cultures and immediately filled into cups. The cups are then moved to a large incubation chamber where the curd sets directly in its final packaging, resulting in a firm, thick texture."
  },
  {
    "question": "Can we control the sourness of the curd?",
    "answer": "Yes. By strictly controlling the temperature in our incubation chambers and rapidly transferring the set curd to blast cooling rooms, we completely halt fermentation, locking in the perfect sweet taste."
  },
  {
    "question": "What capacity ranges are available?",
    "answer": "We offer Curd plants ranging from 500 liters per day for small-scale dairy startups up to 50,000+ liters per day for large industrial operations."
  },
  {
    "question": "Does the machinery prevent cream from rising to the top?",
    "answer": "Yes, our high-pressure homogenizers break down fat globules so evenly that the cream remains perfectly distributed throughout the curd, rather than forming a layer on top."
  }
];`
  },
  {
    file: 'LassiProcessingPlantDetailPage.jsx',
    faqs: `
const FAQS = [
  {
    "question": "Can the plant produce flavored Lassi like Mango or Rose?",
    "answer": "Absolutely. The plant features specialized blending tanks and inline dosing systems that perfectly mix fruit pulps, syrups, and flavors into the yogurt base."
  },
  {
    "question": "How do you ensure the Lassi doesn't separate in the bottle?",
    "answer": "We utilize heavy-duty, high-shear homogenizers that completely emulsify the yogurt, water, and sugar, resulting in a perfectly stable and silky-smooth beverage that won't separate."
  },
  {
    "question": "What kind of packaging is typically used?",
    "answer": "Our filling lines can be customized to handle PET bottles, glass bottles, or flexible pouches, complete with automatic capping and labeling."
  },
  {
    "question": "Is the system easy to clean after running flavored batches?",
    "answer": "Yes, the integrated automated CIP (Clean-In-Place) system thoroughly cleans the tanks and pipelines, preventing any flavor cross-contamination between different batches."
  }
];`
  }
];

const faqJSX = \`
      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={\\\`rcp-container rcp-animate \${isVisible["faq"] ? "rcp-animate--in" : ""}\\\`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our plant.</p>
          <div className="rcp-faq__list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={\\\`rcp-faq__item \${isOpen ? "rcp-faq__item--open" : ""}\\\`}>
                  <button className="rcp-faq__question-btn" onClick={() => setActiveFaq(isOpen ? null : index)} type="button">
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content"><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
\`;

for (const plant of plants) {
  const filePath = path.join(__dirname, 'src/pages/TurnkeyProject/components', plant.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert FAQS array before GALLERY_IMAGES if not already present
  if (!content.includes('const FAQS = [')) {
    content = content.replace('/* ─── Gallery Images ─── */', plant.faqs + '\\n\\n/* ─── Gallery Images ─── */');
  }

  // Insert activeFaq state if not present
  if (!content.includes('activeFaq')) {
    content = content.replace('const [galleryIndex, setGalleryIndex] = useState(0);', 'const [galleryIndex, setGalleryIndex] = useState(0);\\n  const [activeFaq, setActiveFaq] = useState(null);');
  }

  // Insert FAQ JSX before gallery section if not present
  if (!content.includes('id="faq"')) {
    content = content.replace('<section className="rcp-section rcp-gallery"', faqJSX + '\\n      <section className="rcp-section rcp-gallery"');
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + plant.file);
}
