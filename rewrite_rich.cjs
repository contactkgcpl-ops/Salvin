const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'TurnkeyProject', 'components');

const pages = [
  {
    file: 'FullyAutomatedFruitJuiceProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Fruit Juice Processing Plant',
    img: 'fruit-juice.jpeg',
    desc: 'Advanced turnkey solution for industrial fruit juice processing, integrating extraction, clarification, pasteurization, and aseptic packaging to produce premium quality juices.',
    metaDesc: 'Advanced turnkey solution for industrial fruit juice processing, integrating extraction, clarification, pasteurization, and aseptic packaging to produce premium quality juices.',
    processSteps: [
      { id: 1, title: 'Fruit Washing & Sorting' },
      { id: 2, title: 'Crushing & Pulping' },
      { id: 3, title: 'Juice Extraction' },
      { id: 4, title: 'Clarification & Filtration' },
      { id: 5, title: 'Homogenization & Pasteurization' },
      { id: 6, title: 'Aseptic Filling & Packaging' }
    ],
    machinery: [
      { name: 'Industrial Fruit Washer & Sorter', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'High-capacity bubble and spray washing system to remove dirt, pesticides, and impurities from raw fruits.' },
      { name: 'Fruit Pulper & Extractor Machine', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Heavy-duty extraction system designed for maximum juice yield while separating seeds and skin efficiently.' },
      { name: 'Pasteurization & Sterilization Unit', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'Thermal processing unit ensuring the elimination of pathogens while preserving the natural flavor and nutrients.' },
      { name: 'Automatic Bottling & Capping Line', image: '/turnkey-brochures/images/fruit-juice.jpeg', desc: 'High-speed rotary filling and capping machine for PET or glass bottles under strict hygienic conditions.' }
    ],
    faqs: [
      { question: 'What fruits can be processed in this plant?', answer: 'The plant is versatile and can process a wide variety of fruits including apples, oranges, mangoes, pineapples, berries, and mixed fruits by adjusting the extraction modules.' },
      { question: 'Does the plant support aseptic packaging?', answer: 'Yes, our fruit juice plants can be integrated with aseptic packaging lines (Tetra Pak, aseptic pouches, or bottles) for extended shelf life without preservatives.' },
      { question: 'What is the standard production capacity?', answer: 'We offer customizable capacities ranging from 500 liters per hour (LPH) to 10,000 LPH, depending on industrial requirements.' }
    ]
  },
  {
    file: 'FullyAutomaticJellyManufacturingPlantDetailPage.jsx',
    title: 'Fully Automatic Jelly Manufacturing Plant',
    img: 'jelly.jpeg',
    desc: 'Complete automated solution for high-volume jelly production, featuring precision mixing, cooking, flavor dosing, and automated cup/pouch packaging.',
    metaDesc: 'Complete automated solution for high-volume jelly production, featuring precision mixing, cooking, flavor dosing, and automated cup/pouch packaging.',
    processSteps: [
      { id: 1, title: 'Ingredient Weighing & Batching' },
      { id: 2, title: 'Syrup Preparation & Boiling' },
      { id: 3, title: 'Pectin & Flavor Blending' },
      { id: 4, title: 'Vacuum Cooking' },
      { id: 5, title: 'Cooling & Setting' },
      { id: 6, title: 'Automated Cup/Pouch Packaging' }
    ],
    machinery: [
      { name: 'Jacketed Mixing & Boiling Kettles', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'SS316 food-grade kettles with scrape surface agitators for uniform heating and mixing of sugar, water, and pectin.' },
      { name: 'Inline Flavor & Color Dosing System', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Automated precision dosing pumps to inject flavors, colors, and citric acid accurately before the setting phase.' },
      { name: 'Continuous Vacuum Cooker', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'Evaporates excess moisture at lower temperatures to achieve the perfect brix level without caramelizing the sugar.' },
      { name: 'Rotary Cup Filling & Sealing Machine', image: '/turnkey-brochures/images/jelly.jpeg', desc: 'High-speed automated packaging machine that fills liquid jelly into cups, seals with foil, and cools for final setting.' }
    ],
    faqs: [
      { question: 'Can this plant produce both fruit jellies and clear jellies?', answer: 'Yes, the plant is designed to handle various formulations including real fruit pulp jellies, clear gelatin/pectin jellies, and fortified functional jellies.' },
      { question: 'How is the setting time managed in continuous production?', answer: 'We utilize a specialized cooling tunnel integrated post-packaging, which rapidly brings down the temperature to set the jelly firmly before final carton packing.' },
      { question: 'Are CIP (Clean-In-Place) systems included?', answer: 'Absolutely. The entire pipeline, kettles, and filling nozzles are connected to an automated CIP system for quick and thorough cleaning during flavor changeovers.' }
    ]
  },
  {
    file: 'FullyAutomaticDehydratedGarlicPlantDetailPage.jsx',
    title: 'Fully Automatic Dehydrated Garlic Plant',
    img: 'garlic.jpeg',
    desc: 'End-to-end processing solution for dehydrated garlic, including peeling, washing, slicing, drying, and packing, ensuring maximum flavor retention and extended shelf life.',
    metaDesc: 'End-to-end processing solution for dehydrated garlic, including peeling, washing, slicing, drying, and packing, ensuring maximum flavor retention and extended shelf life.',
    processSteps: [
      { id: 1, title: 'Bulb Breaking & Separation' },
      { id: 2, title: 'Dry & Wet Peeling' },
      { id: 3, title: 'Washing & Sterilization' },
      { id: 4, title: 'Slicing & Chopping' },
      { id: 5, title: 'Hot Air Dehydration' },
      { id: 6, title: 'Color Sorting & Packaging' }
    ],
    machinery: [
      { name: 'Garlic Bulb Breaker & Separator', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Gently separates whole garlic bulbs into individual cloves without causing mechanical damage to the cloves.' },
      { name: 'Pneumatic Garlic Peeling Machine', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Uses high-pressure compressed air to peel garlic cloves efficiently, maintaining a high peeling rate and clean surface.' },
      { name: 'Continuous Multi-Layer Belt Dryer', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'A temperature-controlled hot air circulation dryer that uniformly removes moisture from garlic slices to achieve desired dehydration.' },
      { name: 'Optical Color Sorter', image: '/turnkey-brochures/images/garlic.jpeg', desc: 'Advanced camera-based sorting system that detects and removes discolored, burnt, or defective garlic flakes before packaging.' }
    ],
    faqs: [
      { question: 'Does the dehydration process retain the strong garlic aroma?', answer: 'Yes, our multi-layer belt dryers use precise, low-temperature controlled drying profiles that preserve the essential oils, allicin content, and strong natural aroma of the garlic.' },
      { question: 'What forms of dehydrated garlic can be produced?', answer: 'The line can be customized with milling equipment to produce garlic flakes (slices), minced garlic, granulated garlic, and fine garlic powder.' },
      { question: 'How is peeling efficiency maintained without damaging the garlic?', answer: 'We utilize pneumatic (air-based) peeling technology which removes the skin through air friction rather than mechanical abrasion, ensuring 95%+ peeling efficiency with zero damage.' }
    ]
  },
  {
    file: 'FullyAutomaticVegetableDryingPlantDetailPage.jsx',
    title: 'Fully Automatic Vegetable Drying Plant',
    img: 'vegetable-drying.jpeg',
    desc: 'Versatile industrial vegetable dehydration plant equipped with washing, blanching, continuous drying, and packaging modules to process onions, carrots, potatoes, and leafy greens.',
    metaDesc: 'Versatile industrial vegetable dehydration plant equipped with washing, blanching, continuous drying, and packaging modules to process onions, carrots, potatoes, and leafy greens.',
    processSteps: [
      { id: 1, title: 'Sorting & Grading' },
      { id: 2, title: 'Washing & Peeling' },
      { id: 3, title: 'Slicing & Dicing' },
      { id: 4, title: 'Blanching & De-watering' },
      { id: 5, title: 'Continuous Hot Air Drying' },
      { id: 6, title: 'Cooling & Packaging' }
    ],
    machinery: [
      { name: 'Industrial Bubble Washing Machine', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'High-pressure air bubble wash tank that thoroughly cleans soil, pesticide residues, and impurities from various vegetables.' },
      { name: 'Multi-functional Vegetable Dicer/Slicer', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'High-speed cutting machine capable of processing vegetables into uniform slices, cubes, or strips.' },
      { name: 'Continuous Blanching & Cooling Line', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Inactivates enzymes to preserve original vegetable color and nutrients, followed by immediate cooling to stop the cooking process.' },
      { name: 'Heat Pump / Hot Air Circulation Dryer', image: '/turnkey-brochures/images/vegetable-drying.jpeg', desc: 'Energy-efficient drying oven that gently removes moisture from vegetables while maintaining their nutritional profile.' }
    ],
    faqs: [
      { question: 'Which vegetables can be dried using this plant?', answer: 'The plant is highly versatile and can dry onions, tomatoes, carrots, potatoes, cabbage, spinach, mushrooms, bell peppers, and various herbs.' },
      { question: 'Why is blanching necessary before drying?', answer: 'Blanching deactivates enzymes that cause browning and flavor loss during dehydration. It ensures the final dried vegetables retain their vibrant color and nutritional value.' },
      { question: 'What is the heat source for the dryer?', answer: 'Depending on your factory setup, the dryer can be configured to run on electricity, steam radiators, thermic fluid heaters, or gas burners.' }
    ]
  },
  {
    file: 'FullyAutomatedGaramMasalaProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Garam Masala Processing Plant',
    img: 'garam-masala.jpeg',
    desc: 'High-capacity spice processing line tailored for Garam Masala, featuring automated cleaning, roasting, cryogenic grinding, blending, and pouch packaging.',
    metaDesc: 'High-capacity spice processing line tailored for Garam Masala, featuring automated cleaning, roasting, cryogenic grinding, blending, and pouch packaging.',
    processSteps: [
      { id: 1, title: 'Raw Spice Cleaning & Destoning' },
      { id: 2, title: 'Proportionate Batching' },
      { id: 3, title: 'Spice Roasting' },
      { id: 4, title: 'Grinding & Pulverizing' },
      { id: 5, title: 'Ribbon Blending' },
      { id: 6, title: 'Automated Pouch Packing' }
    ],
    machinery: [
      { name: 'Vibratory Screen & Destoner', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Removes dust, stones, twigs, and foreign particles from whole spices like cumin, cardamom, cloves, and cinnamon.' },
      { name: 'Continuous Spice Roaster', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'Rotary drum roaster that uniformly heats whole spices to release essential oils and enhance the aroma profile.' },
      { name: 'Multi-stage Pulverizer (Pin Mill)', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'High-speed impact mill equipped with a water-cooling jacket to prevent flavor loss due to heat generation during grinding.' },
      { name: 'Ribbon Blender with Spice Sprayer', image: '/turnkey-brochures/images/garam-masala.jpeg', desc: 'U-trough mixer designed for homogeneous blending of multiple ground spices to achieve the perfect Garam Masala formulation.' }
    ],
    faqs: [
      { question: 'Does the grinding process cause aroma loss?', answer: 'No. We utilize water-cooled pulverizers or optional cryogenic grinding technology that maintains low temperatures, preventing the volatilization of essential spice oils.' },
      { question: 'Can the plant handle customized spice formulations?', answer: 'Yes, the batching system is controlled via PLC/SCADA, allowing you to save multiple recipes. It will automatically weigh and feed exact proportions of individual spices.' },
      { question: 'What type of packaging machines are provided?', answer: 'We integrate Form-Fill-Seal (FFS) machines capable of handling stand-up pouches, center-seal bags, and jars equipped with nitrogen flushing for extended shelf life.' }
    ]
  },
  {
    file: 'FullyAutomatedFrozenVegetableProcessingPlantDetailPage.jsx',
    title: 'Fully Automated Frozen Vegetable Processing Plant',
    img: 'frozen-vegetable.jpeg',
    desc: 'State-of-the-art IQF (Individual Quick Freezing) vegetable processing line designed to wash, blanch, freeze, and pack peas, corn, carrots, and mixed vegetables.',
    metaDesc: 'State-of-the-art IQF (Individual Quick Freezing) vegetable processing line designed to wash, blanch, freeze, and pack peas, corn, carrots, and mixed vegetables.',
    processSteps: [
      { id: 1, title: 'Vegetable Washing & Sorting' },
      { id: 2, title: 'Cutting & Slicing' },
      { id: 3, title: 'Blanching' },
      { id: 4, title: 'Pre-Cooling & Chilling' },
      { id: 5, title: 'IQF Freezing' },
      { id: 6, title: 'Weighing & Cold Packaging' }
    ],
    machinery: [
      { name: 'Vegetable Blanching Tunnel', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Continuous steam or hot water blancher designed to halt enzymatic activity, ensuring the frozen vegetables retain their color and texture.' },
      { name: 'Pre-cooling Air Chiller', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Quickly reduces the temperature of blanched vegetables using chilled water and air blasts, preparing them for the freezer.' },
      { name: 'IQF (Individual Quick Freezing) Tunnel', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Fluidized bed freezer that rapidly freezes each vegetable piece individually at -40°C, preventing lump formation and maintaining cell structure.' },
      { name: 'Multi-head Weigher & VFFS Packer', image: '/turnkey-brochures/images/frozen-vegetable.jpeg', desc: 'Frost-resistant automated packaging machine that accurately weighs frozen produce and seals them into retail or bulk bags.' }
    ],
    faqs: [
      { question: 'What is IQF technology?', answer: 'IQF stands for Individual Quick Freezing. It uses extreme cold air blasts to freeze each piece of vegetable separately in minutes, preventing ice crystals from rupturing cell walls, thus keeping the vegetable fresh when thawed.' },
      { question: 'Can this plant process green peas and sweet corn?', answer: 'Yes, it is highly optimized for green peas, sweet corn, diced carrots, broccoli florets, and mixed vegetable blends.' },
      { question: 'What is the required ambient temperature for packaging?', answer: 'The packaging section is typically installed in a climate-controlled room (around 4-10°C) to ensure the frozen vegetables do not thaw before being sealed in bags.' }
    ]
  }
];

pages.forEach(p => {
  const content = `import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './${p.file.replace('.jsx', '.css')}'
import WhyChooseSalvin from './WhyChooseSalvin'

/* ─── Process Flow Steps ─── */
const PROCESS_STEPS = ${JSON.stringify(p.processSteps, null, 2)}

/* ─── Machinery Used ─── */
const MACHINERY_LIST = ${JSON.stringify(p.machinery, null, 2)}

/* ─── FAQs ─── */
const FAQS = ${JSON.stringify(p.faqs, null, 2)}

/* ─── Gallery Images ─── */
const GALLERY_IMAGES = [
  { src: '/turnkey-brochures/images/${p.img}', caption: '${p.title} Overview' }
]

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function ${p.file.replace('.jsx', '')}() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = '${p.title} | Turnkey Solutions | Salvin Industries'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', '${p.metaDesc}')
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ifm-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="ifm-hero">
        <div className="ifm-hero__overlay" />
        <div className="ifm-hero__bg" style={{ backgroundImage: \`url('/turnkey-brochures/images/${p.img}')\` }} />
        <div className="ifm-hero__content">
          <span className="ifm-hero__badge">
            <span className="ifm-hero__badge-dot" />
            TURNKEY SOLUTION
          </span>
          <h1 className="ifm-hero__title">${p.title}</h1>
          <p className="ifm-hero__subtitle">${p.desc}</p>
          <div className="ifm-hero__actions">
            <a href="#enquiry" className="ifm-btn ifm-btn--primary ifm-btn--lg">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="ifm-section ifm-overview" id="overview" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['overview'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Plant Overview</div>
          <h2 className="ifm-section-title">${p.title.split(' ').slice(0,-1).join(' ')} <span className="ifm-accent">Plant</span></h2>
          <div className="ifm-overview__grid">
            <div className="ifm-overview__text">
              <p>${p.desc}</p>
              <div className="ifm-overview__features">
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Premium Quality Production</p>
                    <p className="ifm-overview__feature-desc">Consistent and high-quality output.</p>
                  </div>
                </div>
                <div className="ifm-overview__feature">
                  <div className="ifm-overview__feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                  </div>
                  <div className="ifm-overview__feature-body">
                    <p className="ifm-overview__feature-title">Fully Automated Operation</p>
                    <p className="ifm-overview__feature-desc">Reduces labor costs and increases efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ifm-overview__image-wrapper">
              <img src={\`/turnkey-brochures/images/\${'${p.img}'}\`} alt="${p.title}" className="ifm-overview__image" />
              <div className="ifm-overview__experience-badge">
                <span className="ifm-overview__experience-years">15+</span>
                <span className="ifm-overview__experience-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS FLOW ═══ */}
      <section className="ifm-section ifm-process bg-slate-50" id="process" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['process'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Workflow</div>
          <h2 className="ifm-section-title">Standard Processing <span className="ifm-accent">Flow</span></h2>
          <div className="ifm-process__grid">
            {PROCESS_STEPS.map((step, idx) => (
              <div className="ifm-process-step" key={step.id}>
                <div className="ifm-process-step__number">{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="ifm-process-step__content">
                  <h3 className="ifm-process-step__title">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MACHINERY ═══ */}
      <section className="ifm-section ifm-machinery" id="machinery" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['machinery'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">Equipment</div>
          <h2 className="ifm-section-title">Key <span className="ifm-accent">Machinery</span></h2>
          <div className="ifm-machinery__grid">
            {MACHINERY_LIST.map((mach, idx) => (
              <div className="ifm-mach-card" key={idx}>
                <div className="ifm-mach-card__img">
                  <img src={mach.image} alt={mach.name} />
                </div>
                <div className="ifm-mach-card__content">
                  <h3 className="ifm-mach-card__title">{mach.name}</h3>
                  <p className="ifm-mach-card__desc">{mach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin />

      {/* ═══ GALLERY ═══ */}
      <section className="ifm-section ifm-gallery bg-slate-900" id="gallery" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['gallery'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge ifm-section-badge--dark">Gallery</div>
          <h2 className="ifm-section-title text-white">Project <span className="ifm-accent">Gallery</span></h2>
          <div className="ifm-gallery__wrapper">
            <img src={GALLERY_IMAGES[galleryIndex].src} alt={GALLERY_IMAGES[galleryIndex].caption} className="ifm-gallery__image" />
            <div className="ifm-gallery__caption">{GALLERY_IMAGES[galleryIndex].caption}</div>
            <div className="ifm-gallery__controls">
              {GALLERY_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  className={\`ifm-gallery__dot \${idx === galleryIndex ? 'ifm-gallery__dot--active' : ''}\`}
                  onClick={() => setGalleryIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQs ═══ */}
      <section className="ifm-section ifm-faqs" id="faqs" data-animate>
        <div className={\`ifm-container ifm-animate \${isVisible['faqs'] ? 'ifm-animate--in' : ''}\`}>
          <div className="ifm-section-badge">FAQ</div>
          <h2 className="ifm-section-title">Frequently Asked <span className="ifm-accent">Questions</span></h2>
          <div className="ifm-faqs__list">
            {FAQS.map((faq, idx) => (
              <div className={\`ifm-faq \${activeFaq === idx ? 'ifm-faq--active' : ''}\`} key={idx}>
                <button className="ifm-faq__question" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  {faq.question}
                  <span className="ifm-faq__icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                <div className="ifm-faq__answer">
                  <div className="ifm-faq__answer-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
`;
  fs.writeFileSync(path.join(dir, p.file), content);
});

console.log("Successfully generated rich detail pages!");
