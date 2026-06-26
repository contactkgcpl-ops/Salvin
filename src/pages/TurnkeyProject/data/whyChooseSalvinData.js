const whyChooseSalvinData = {
  // Data-driven projects
  'fully-automated-ors-plant': [
    { title: 'Pharmaceutical Grade', desc: 'WHO-compliant hygienic construction using SS316L for all contact parts.' },
    { title: 'Precise Ingredient Dosing', desc: 'Accurate load-cell based weighing ensures strict formulation consistency.' },
    { title: 'Dust-Free Transfer', desc: 'Vacuum conveying eliminates airborne contamination and protects operators.' },
    { title: 'Homogeneous Blending', desc: 'High-shear ribbon blenders mix delicate salts and glucose uniformly.' },
    { title: 'High-Speed Sachet Packing', desc: 'Automated multi-lane VFFS lines guarantee airtight, sterile seals.' },
    { title: 'Audit Ready Automation', desc: 'SCADA integration provides 21 CFR Part 11 compliant batch logging.' }
  ],
  'pickle-processing-and-packaging-plant': [
    { title: 'Food Grade Processing', desc: '100% SS304/SS316 construction ensuring sanitary production of acidic pickles.' },
    { title: 'Precision Slicing', desc: 'Automated, uniform cutting of fruits and vegetables for consistent curing.' },
    { title: 'Advanced Brining', desc: 'Temperature-controlled maturation tanks optimize flavor and shelf life.' },
    { title: 'Gentle Spice Blending', desc: 'Homogeneous mixing systems coat pieces evenly without bruising.' },
    { title: 'Automated Filling Lines', desc: 'High-speed volumetric jar and pouch filling maintains hygiene.' },
    { title: 'Extended Shelf Life', desc: 'Integrated sealing, capping, and sterilization processes protect stability.' }
  ],
  'milk-powder-processing-packaging-plant': [
    { title: 'Dairy Hygiene Standards', desc: 'CIP-ready sanitary design meets strict international dairy regulations.' },
    { title: 'Advanced Spray Drying', desc: 'Highly efficient atomization guarantees excellent powder solubility.' },
    { title: 'Multi-Effect Evaporation', desc: 'Falling film evaporators maximize yield while dramatically saving energy.' },
    { title: 'Gentle Powder Handling', desc: 'Vibro-sifters and fluid beds cool and classify powder without degradation.' },
    { title: 'Aseptic Packaging', desc: 'Automated powder packing under modified atmosphere extends shelf life.' },
    { title: 'Thermal Efficiency', desc: 'Optimized heat recovery systems minimize overall operational costs.' }
  ],

  // Hardcoded React Component Projects
  'InstantNoodlesDetailPage': [
    { title: 'Continuous Production', desc: 'Seamlessly automated from dough mixing to final packaging.' },
    { title: 'Precision Dough Sheeting', desc: 'Multi-roller compound systems ensure perfect noodle texture and thickness.' },
    { title: 'Advanced Steaming & Frying', desc: 'Multi-stage continuous steaming and deep-frying locks in flavor.' },
    { title: 'Oil Management', desc: 'Integrated oil filtration maintains frying quality and reduces waste.' },
    { title: 'Automated Packaging', desc: 'High-speed flow wrapping machines synchronize with the cooling conveyor.' },
    { title: 'Energy Efficient', desc: 'Optimized heating profiles reduce power consumption across the line.' }
  ],
  'MayonnaiseProcessingDetailPage': [
    { title: 'Advanced Emulsification', desc: 'High-shear homogenizers ensure perfectly stable, smooth emulsions.' },
    { title: 'Hygienic Mixing', desc: 'Vacuum-sealed mixing vessels prevent aeration and bacterial contamination.' },
    { title: 'Accurate Dosing', desc: 'Automated flow meters guarantee precise oil, egg, and vinegar ratios.' },
    { title: 'CIP / SIP Ready', desc: 'Fully automated Cleaning-in-Place systems minimize changeover time.' },
    { title: 'Viscous Liquid Filling', desc: 'Piston-based fillers cleanly package thick mayonnaise into jars or pouches.' },
    { title: 'Product Consistency', desc: 'PLC controls maintain exact temperature and shear rates batch after batch.' }
  ],
  'ProteinBarManufacturingDetailPage': [
    { title: 'High Viscosity Handling', desc: 'Heavy-duty Z-blade mixers easily process dense protein and nougat masses.' },
    { title: 'Precision Extrusion', desc: 'Multi-layer extruders form uniform bars without damaging delicate ingredients.' },
    { title: 'Integrated Enrobing', desc: 'Seamless chocolate coating and cooling tunnels for premium finishes.' },
    { title: 'Gentle Cooling', desc: 'Extended active cooling conveyors stabilize bars prior to cutting.' },
    { title: 'Ultrasonic Cutting', desc: 'Clean, accurate guillotine slicing prevents product deformation.' },
    { title: 'Flow Wrap Automation', desc: 'Direct-to-wrapper feeding lines maintain high speeds and hygiene.' }
  ],
  'InstantMixFrozenFoodDetailPage': [
    { title: 'Cold Chain Integration', desc: 'Systems designed to maintain strict temperature controls throughout processing.' },
    { title: 'IQF Technology', desc: 'Individual Quick Freezing systems lock in moisture, flavor, and nutrients.' },
    { title: 'Versatile Blending', desc: 'Gentle tumble mixers combine diverse ingredients without breakage.' },
    { title: 'Hygienic Washdown', desc: 'IP69K-rated equipment allows aggressive cleaning in high-care zones.' },
    { title: 'Accurate Multihead Weighing', desc: 'Precision dosing of frozen mixes directly into bags or cartons.' },
    { title: 'Traceability', desc: 'Automated barcode and batch tracking systems for food safety compliance.' }
  ],
  'RedChilliDetailPage': [
    { title: 'Aroma Retention', desc: 'Cool-grinding technology prevents essential oil loss and preserves spice color.' },
    { title: 'Heavy Duty Milling', desc: 'Industrial hammer and pin mills engineered specifically for tough spices.' },
    { title: 'Dust Extraction', desc: 'Integrated cyclonic separation and bag filters maintain a clean environment.' },
    { title: 'Continuous Sieving', desc: 'Vibro classifiers ensure exact mesh sizes for premium powder grades.' },
    { title: 'Automated Blending', desc: 'Ribbon blenders allow precise addition of anti-caking agents.' },
    { title: 'Airtight Packaging', desc: 'VFFS and auger fillers package powders to prevent moisture absorption.' }
  ],
  'WheatFlourProcessingDetailPage': [
    { title: 'High Extraction Rate', desc: 'Advanced roller mills and plan-sifters maximize premium flour yield.' },
    { title: 'Intensive Cleaning', desc: 'Multi-stage destoning, scouring, and optical sorting removes all impurities.' },
    { title: 'Automated Dampening', desc: 'Moisture control systems optimize wheat conditioning before milling.' },
    { title: 'Pneumatic Conveying', desc: 'Enclosed vacuum transfer prevents pest infestation and flour loss.' },
    { title: 'Precision Fortification', desc: 'Micro-dosing systems add vitamins and minerals accurately.' },
    { title: 'Bulk Packing Lines', desc: 'High-speed carousel packers for 10kg to 50kg bags with automated stitching.' }
  ],
  'IndustrialFlourMillingDetailPage': [
    { title: 'High-Capacity Milling', desc: 'Heavy-duty roller mills engineered for 24/7 industrial-scale production.' },
    { title: 'Advanced Sifting', desc: 'High-efficiency purifiers and plan-sifters ensure precise flour grading.' },
    { title: 'Energy Optimization', desc: 'Aerodynamic pneumatic lifts reduce power usage across large plants.' },
    { title: 'Automated Silo Management', desc: 'Integrated SCADA controls for raw material intake and storage.' },
    { title: 'Continuous Quality Monitoring', desc: 'In-line NIR sensors verify ash and protein content in real-time.' },
    { title: 'Dust-Free Environment', desc: 'Comprehensive aspiration networks exceed international safety standards.' }
  ],
  'TomatoKetchupManufacturingDetailPage': [
    { title: 'Vacuum Evaporation', desc: 'Low-temperature concentration preserves vibrant tomato color and flavor.' },
    { title: 'High-Shear Blending', desc: 'Inline homogenizers ensure a smooth, lump-free, stable ketchup texture.' },
    { title: 'Hot Fill Technology', desc: 'Integrated tubular heat exchangers pasteurize and fill at optimal temperatures.' },
    { title: 'Aseptic Storage', desc: 'Sterile holding tanks prevent contamination before final packaging.' },
    { title: 'Automated Bottle Filling', desc: 'High-speed rotary fillers designed specifically for viscous sauces.' },
    { title: 'CIP Automation', desc: 'Automated clean-in-place sequences maintain strict food safety.' }
  ],
  'SeedCleaningSortingDetailPage': [
    { title: 'Optical Sorting', desc: 'High-resolution color and shape sorters remove microscopic defects.' },
    { title: 'Gravity Separation', desc: 'Specific gravity tables effectively eliminate light, shriveled, or damaged seeds.' },
    { title: 'Gentle Handling', desc: 'Bucket elevators and specialized conveyors prevent seed coat cracking.' },
    { title: 'Multi-Screen Grading', desc: 'Vibratory graders sort seeds precisely by width, thickness, and length.' },
    { title: 'Seed Treatment', desc: 'Automated coating machines uniformly apply fungicides and nutrients.' },
    { title: 'Dust Management', desc: 'Closed-loop aspiration systems keep the processing facility clean.' }
  ],
  'PotatoPowderDehydrationDetailPage': [
    { title: 'Continuous Blanching', desc: 'Steam blanchers deactivate enzymes and preserve natural potato color.' },
    { title: 'Gentle Mash Extrusion', desc: 'Low-shear ricers prepare the mash without rupturing starch cells.' },
    { title: 'Drum Drying Technology', desc: 'Precision flaker drums rapidly dehydrate mash into high-quality flakes.' },
    { title: 'Milling & Sifting', desc: 'Hammer mills process flakes into fine, highly soluble potato powder.' },
    { title: 'Energy Recovery', desc: 'Heat exchangers capture and reuse exhaust steam from the dryers.' },
    { title: 'Nitrogen Flushing', desc: 'Packaging lines inject inert gas to extend the powder\'s shelf life.' }
  ],
  'PizzaSauceProcessingDetailPage': [
    { title: 'Chunky Ingredient Handling', desc: 'Pumps and valves designed to pass diced tomatoes and herbs without crushing.' },
    { title: 'Controlled Cooking', desc: 'Jacketed kettles with scraped-surface agitators prevent sauce burning.' },
    { title: 'Vacuum Deaeration', desc: 'Removes trapped air to prevent oxidation and extend product color.' },
    { title: 'Inline Pasteurization', desc: 'Continuous thermal processing ensures microbiological safety.' },
    { title: 'Versatile Filling', desc: 'Piston fillers handle hot sauce filling into cans, jars, or pouches.' },
    { title: 'Recipe Automation', desc: 'PLC systems store and precisely execute complex spice addition sequences.' }
  ],

  'PeanutOilMillDetailPage': [
    { title: 'High-Yield Expelling', desc: 'Heavy-duty screw presses extract maximum oil while preserving quality.' },
    { title: 'Efficient Decortication', desc: 'Automated shelling and winnowing separates kernels from husks cleanly.' },
    { title: 'Steam Conditioning', desc: 'Multi-stage cooking kettles optimize oil release prior to pressing.' },
    { title: 'Multi-Stage Filtration', desc: 'Filter presses and polishers deliver brilliantly clear, pure peanut oil.' },
    { title: 'Cake Processing', desc: 'Automated handling of oil cake for secondary extraction or animal feed.' },
    { title: 'Automated Bottling', desc: 'High-speed rotary lines fill, cap, and label PET or glass bottles.' }
  ],
  'PeanutButterDetailPage': [
    { title: 'Continuous Roasting', desc: 'Hot air roasters ensure uniform color and flavor development in peanuts.' },
    { title: 'Two-Stage Milling', desc: 'Colloid mills and stone grinders produce ultra-smooth or crunchy textures.' },
    { title: 'De-Gassing Technology', desc: 'Vacuum systems remove air pockets to prevent oil separation and oxidation.' },
    { title: 'Stabilizer Dosing', desc: 'Inline dynamic mixers seamlessly integrate emulsifiers and stabilizers.' },
    { title: 'Scraped Surface Cooling', desc: 'Heat exchangers rapidly crystallize stabilizers for a perfect set.' },
    { title: 'Viscous Filling Lines', desc: 'Heavy-duty piston fillers handle thick peanut butter with extreme accuracy.' }
  ],
  'PastaNoodlesDetailPage': [
    { title: 'Vacuum Extrusion', desc: 'High-pressure extruders operating under vacuum yield defect-free pasta.' },
    { title: 'Precision Dosing', desc: 'Automated semolina and water proportioning guarantees ideal dough hydration.' },
    { title: 'Multi-Stage Drying', desc: 'Climatic drying chambers carefully control humidity to prevent pasta cracking.' },
    { title: 'Custom Die Plates', desc: 'Interchangeable Teflon or bronze dies create a vast variety of pasta shapes.' },
    { title: 'Continuous Processing', desc: 'Fully automated flow from raw flour silos to the packaging line.' },
    { title: 'Volumetric Weighing', desc: 'Multihead weighers accurately dose short pasta into pillow bags or cartons.' }
  ],
  'LiquidGlucoseDetailPage': [
    { title: 'Enzymatic Liquefaction', desc: 'Advanced jet cookers ensure complete starch gelatinization and breakdown.' },
    { title: 'Saccharification Tanks', desc: 'Temperature-controlled vessels optimize enzyme conversion to glucose.' },
    { title: 'Ion Exchange Purification', desc: 'Resin columns remove ash and proteins, yielding crystal-clear syrup.' },
    { title: 'Multi-Effect Evaporation', desc: 'Vacuum evaporators efficiently concentrate the syrup to high Brix levels.' },
    { title: 'Carbon Filtration', desc: 'Activated carbon treatment removes color bodies and off-flavors.' },
    { title: 'Hygienic Storage', desc: 'Heated, UV-sterilized SS316L silos prevent crystallization and contamination.' }
  ],
  'JackfruitDetailPage': [
    { title: 'Automated Peeling & Coring', desc: 'Specialized machinery safely processes thick jackfruit rinds.' },
    { title: 'Latex Removal Systems', desc: 'High-pressure wash and food-safe solvent systems handle sticky sap.' },
    { title: 'Bulb Separation', desc: 'Gentle mechanical systems extract fruit bulbs and seeds intact.' },
    { title: 'Multi-Product Lines', desc: 'Adaptable for chips, frozen bulbs, puree, or dehydrated jackfruit.' },
    { title: 'Vacuum Frying', desc: 'Low-temperature fryers create crispy chips while retaining natural color.' },
    { title: 'Aseptic Packaging', desc: 'Sterile filling systems extend the shelf life of jackfruit purees.' }
  ],
  'GreenTeaProcessingDetailPage': [
    { title: 'Rapid Steaming/Panning', desc: 'Immediate enzyme deactivation locks in antioxidants and the vibrant green color.' },
    { title: 'Gentle Rolling', desc: 'Automated orthodox rollers shape the leaves without breaking them.' },
    { title: 'Multi-Stage Drying', desc: 'Fluid bed dryers carefully reduce moisture to precise, shelf-stable levels.' },
    { title: 'Optical Color Sorting', desc: 'Advanced cameras remove yellow leaves, stems, and impurities.' },
    { title: 'Flavor Preservation', desc: 'Low-temperature processing protects delicate volatile aromatic compounds.' },
    { title: 'Tea Bag Packaging', desc: 'High-speed machines fold, staple, and tag pyramid or standard tea bags.' }
  ],
  'GingerGarlicPasteDetailPage': [
    { title: 'Industrial Peeling', desc: 'High-capacity abrasive and pneumatic peelers process garlic and ginger efficiently.' },
    { title: 'Heavy Duty Crushing', desc: 'Specialized macerators break down tough ginger fibers cleanly.' },
    { title: 'Homogeneous Blending', desc: 'Jacketed mixers combine paste with salt, oil, and preservatives uniformly.' },
    { title: 'Thermal Pasteurization', desc: 'Inline heating systems deactivate enzymes to prevent paste discoloration.' },
    { title: 'Hygienic Piston Filling', desc: 'Accurately fills thick, fibrous paste into jars, pouches, or bulk drums.' },
    { title: 'Automated CIP', desc: 'Clean-in-place systems eliminate intense odors between product runs.' }
  ],
  'EdibleOilProcessingDetailPage': [
    { title: 'Continuous Extraction', desc: 'High-efficiency solvent extractors and screw presses maximize oil yield.' },
    { title: 'Physical Refining', desc: 'Chemical-free neutralization and deodorization preserves oil nutrients.' },
    { title: 'Winterization Technology', desc: 'Controlled chilling and filtration removes waxes for perfectly clear oil.' },
    { title: 'Bleaching Systems', desc: 'Vacuum-sealed earth mixing removes pigments and oxidation products.' },
    { title: 'Energy Integration', desc: 'Economizer heat exchangers drastically reduce steam and cooling costs.' },
    { title: 'Nitrogen Blanketing', desc: 'Inert gas systems prevent oil oxidation during storage and bottling.' }
  ],
  'CorianderPowderDetailPage': [
    { title: 'Cryogenic Grinding Option', desc: 'Liquid nitrogen cooling prevents the loss of highly volatile essential oils.' },
    { title: 'Multi-Stage Cleaning', desc: 'Destoners and magnetic separators remove all foreign matter from seeds.' },
    { title: 'Gentle Roasting', desc: 'Continuous roasters develop distinct flavor profiles before milling.' },
    { title: 'Micro-Fine Milling', desc: 'Pin mills classify powder to exact mesh sizes without overheating.' },
    { title: 'Aroma-Sealed Packaging', desc: 'VFFS machines flush bags with nitrogen to lock in the fresh scent.' },
    { title: 'Dust Containment', desc: 'Fully enclosed pneumatic transfer keeps the processing facility spotless.' }
  ],
  'CoffeeProcessingDetailPage': [
    { title: 'Precision Roasting', desc: 'Drum roasters with advanced profiling ensure consistent batch-to-batch flavor.' },
    { title: 'De-Stoning & Cleaning', desc: 'Pneumatic separators remove heavy impurities immediately after roasting.' },
    { title: 'Uniform Grinding', desc: 'Water-cooled roller mills produce consistent particle sizes for espresso to drip.' },
    { title: 'De-Gassing Silos', desc: 'Specialized silos allow CO2 release while preventing oxygen exposure.' },
    { title: 'Aroma Recovery', desc: 'Closed-loop systems capture and reintroduce volatile coffee aromas.' },
    { title: 'Valve Packaging', desc: 'Automated application of one-way degassing valves on high-speed lines.' }
  ],
  'CocoaPowderProcessingDetailPage': [
    { title: 'Alkalization Systems', desc: 'Pressurized Dutching reactors deeply develop cocoa color and flavor.' },
    { title: 'High-Pressure Pressing', desc: 'Hydraulic presses efficiently separate cocoa butter from cocoa liquor.' },
    { title: 'Kibbling & Cooling', desc: 'Breakers and cooling tunnels rapidly stabilize cocoa cake before milling.' },
    { title: 'Micro-Milling', desc: 'Classifying hammer mills pulverize cake into ultra-fine, highly soluble powder.' },
    { title: 'Fat Content Control', desc: 'Precision automation allows exact switching between 10/12 and 20/22 fat powders.' },
    { title: 'Tempered Storage', desc: 'Temperature-controlled silos prevent fat bloom and lumping in the final powder.' }
  ],
  'BlackPepperDetailPage': [
    { title: 'Cryo-Milling Technology', desc: 'Preserves the delicate piperine alkaloid and volatile aromatic oils.' },
    { title: 'Advanced Sterilization', desc: 'Steam sterilization systems eliminate pathogens without degrading flavor.' },
    { title: 'Optical Sorting', desc: 'Removes light berries, pinheads, and off-color peppercorns automatically.' },
    { title: 'Sifting & Grading', desc: 'Multi-deck vibratory screens classify whole pepper by exact millimeter sizes.' },
    { title: 'Dust-Free Blending', desc: 'Enclosed ribbon mixers ensure uniform batches of ground pepper.' },
    { title: 'Moisture Barrier Packing', desc: 'Auger fillers package powder into high-barrier laminates to prevent clumping.' }
  ]
};

export default whyChooseSalvinData;
