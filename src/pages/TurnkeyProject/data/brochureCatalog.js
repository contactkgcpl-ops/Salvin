/**
 * One card per image under /public/turnkey-brochures/images.
 * PDFs live under /public/turnkey-brochures/pdfs — update pairs when assets change.
 */
const IMG = '/turnkey-brochures/images'
const PDF = '/turnkey-brochures/pdfs'

function pdfHref(filename) {
  return `${PDF}/${encodeURIComponent(filename)}`
}

/** @type {readonly { imageFile: string, pdfFile: string, title: string, lines: [string, string] }[]} */
const RAW = [
  ['1_red_chilli.png', 'salvin food powder processing machinaries.pdf', 'Red Chilli Processing Plant', ['High-volume cleaning, grinding, and controlled-atmosphere packaging for chilli commodities.', 'Built for food-grade hygiene, energy efficiency, and dependable OEE on your line.'], '/turnkey-project/red-chilli-processing-plant'],
  ['3_beetroot.png', 'fruit_juice_salvin.pdf', 'Beetroot Juice Processing Plant', ['Cold extraction, clarification, and aseptic-ready packaging for vibrant juices.', 'Supports nutrient retention while scaling to industrial filling speeds you can commission fast.'], '/turnkey-project/beetroot-juice-processing-plant'],
  ['4_turmeric.png', 'salvin food powder processing machinaries.pdf', 'Turmeric Powder Processing Plant', ['Cleaning, pulverisation, and sterilisation paths suited for premium powders.', 'Metal detection–friendly layouts help you ship audit-ready batches every shift.']],
  ['5_honey.png', 'honey_processing.pdf', 'Honey Processing & Bottling Plant', ['Filtration, warming, and precision dosing across jars and retail packs.', 'Preserves intrinsic viscosity and clarity while meeting export-ready sanitary design.']],
  ['6_dates.png', 'date_processing_salvin.pdf', 'Dates Processing & Packing Plant', ['Wash, grade, pitting options, and vacuum-ready sealing for premium fruit.', 'Ideal where shelf-life extension must pair with gentle handling of fragile produce.']],

  ['8_jackfruit.png', 'jecked_fruit_canned_line.pdf', 'Jackfruit Canning & Retort Line', ['Prep, brining or syrup staging, and high-speed can sealing with QA checkpoints.', 'Designed for tropical fruit processors expanding shelf-stable retail portfolios.']],
  ['9_pasta_making.png', 'noodles_pasta_making_plant.pdf', 'Pasta & Noodles Production Plant', ['Mixing, extrusion, drying or cooling modules sized to your flour intake.', 'Consistent bite texture and yield tracking suitable for co-manufacturers and brands.']],
  ['10_peanut_butter.png', 'peanut_butter_processing.pdf', 'Peanut Butter Processing Plant', ['Roasting, grinding, and filling under contained dust-managed environments.', 'Delivers smooth or crunchy profiles with CIP-friendly surfaces where recipes demand it.']],
  ['11_ginger_garlic_plant.png', 'ginger_garlic_plant.pdf', 'Ginger Garlic Paste Plant', ['Peeling or washing, paste manufacture, and chilled or ambient packing.', 'Keeps pungency stable via rapid processing and stainless distribution headers.'], '/turnkey-project/ginger-garlic-paste-plant'],
  ['12_blank_pepper_powder.png', 'salvin food powder processing machinaries.pdf', 'Black Pepper Powder Line', ['Cryogenic or ambient milling with sieving integrated ahead of bulk packing.', 'Protects volatile oils while controlling particle size bands for institutional buyers.'], '/turnkey-project/black-pepper-powder-line-plant'],
  ['13_seed_cleaning_sorting.png', 'spices_seeds_cleaning_line.pdf', 'Seed Cleaning & Sorting Line', ['Multi-stage aspiration, grading, and optical-ready discharge chutes.', 'Raises batch purity before roasting or oil extraction downstream on your site.'], '/turnkey-project/seed-cleaning-sorting-line-plant'],
  ['14_cocoa_powder_making_machine.png', 'instant_coffee_processing.pdf', 'Cocoa Powder Processing System', ['Pressing, alkalising paths optional, and micronising rooms isolated for allergens.', 'Supports confectionery ingredient specs with traceable mass balance reporting.'], '/turnkey-project/cocoa-powder-processing-system-plant'],
  ['15_liquid_glucose.png', 'Liquid Glucose manufacturing Plant.pdf', 'Liquid Glucose Manufacturing Plant', ['Enzymatic conversion, filtration, and evaporator trains tuned to DE targets.', 'Industrial glucose syrup suitable for sweets, breweries, and binder applications alike.']],
  ['17_pizza_sauce.png', 'pasta_pizza_source_making_plant.pdf', 'Pizza Sauce Processing Plant', ['Cooking kettles, homogenisation, and hot-fill compatibility for retail pouches.', 'Balanced acidity control supports pizza chains scaling central kitchens reliably.']],
  ['19_tomato_ketchup.png', 'tomato_ketchup_plant.pdf', 'Tomato Ketchup Manufacturing Plant', ['Receiving through concentration with viscosity-managed finishing vessels.', 'Pairs evaporators and fillers so HM puffs and retail bottles stay within QC bands.']],
  ['20_coffee_processing.png', 'instant_coffee_processing.pdf', 'Coffee Processing Plant', ['Roast profiles optional upstream plus extraction or soluble packaging blocks.', 'Delivers aroma-forward concentrates suited for jars, sticks, or vending blends.']],
  ['21_green_tea_processing_plant.png', 'instant_coffee_processing.pdf', 'Green Tea Processing Plant', ['Leaf handling, drying zones, and aroma-controlled milling where recipes allow.', 'Supports beverage houses launching botanical concentrates alongside coffee SKUs.']],
  ['22_potato_powder.png', 'potato_powder_plant.pdf', 'Potato Powder Dehydration Plant', ['Peeling or flake prep, drum or belt drying, and milling to instant-grade specs.', 'Great for snack Seasonings and thickening ingredients needing long ambient shelf life.']],
  ['23_mill_plant.png', 'wheat flour.pdf', 'Industrial Flour Milling Plant', ['Cleaning, conditioning, break rolls, and plan sifters sized to wheat receipts.', 'Produces baker-ready streams with dust containment engineered from intake to pack-off.'], '/turnkey-project/industrial-flour-milling-plant'],
  ['25_peanut_oil_mill.png', 'peanut_oil.pdf', 'Peanut Oil Mill Plant', ['Decortication optional, screw pressing, and filtration trains before storage.', 'Delivers cold-press or refined peanut oil routes depending on your market positioning.'], '/turnkey-project/peanut-oil-mill-plant'],
  ['24_edible_oil.png', 'peanut_oil.pdf', 'Edible Oil Processing Plant', ['Pressing or solvent paths configurable alongside refining skids when specified.', 'Matches throughput to seed intake while keeping extraction halls operator-safe.']],
  ['26_wheat_flour_plant.png', 'wheat flour.pdf', 'Wheat Flour Processing Plant', ['Stoneless milling circuits with packaging diverters for bag or bulk customers.', 'Balances extraction yield with ash targets typical of institutional flour tenders.']],
  ['16_coriander_powder.png', 'salvin food powder processing machinaries.pdf', 'Coriander Powder Plant', ['Cleaning lines plus hammer or pin mills matched to volatile oil retention.', 'Ideal where aroma specification sheets drive procurement from growers to pack-out.']],
  ['18_cashew_nut.png', '', 'Cashew Processing Turnkey', ['Paste or butter pathways leveraging nut roasting and stainless milling cores.', 'Adaptable to tree-nut programmes needing contained transitions between SKU runs.']],
  ['27_indsutry_4.0.png', '', 'Industry 4.0 Ready Processing Line', ['Sensorised motors, SCADA hooks, and telemetry-ready panels across critical assets.', 'Lets your maintenance teams predict faults before they ripple through upstream batches.']],
  ['28_roasted_nuts.png', '', 'Roasted Nuts Processing Line', ['Fluid-bed or drum roasting with seasoning drums and nitrogen-flushed packing.', 'Maintains crunch while limiting oil migration during high-speed retail transitions.']],
  ['29_kurkure_making.png', '', 'Kurkure-Style Extruded Snacks Plant', ['Twin-screw extrusion, drying, and flavour-on coating with sealed transitions.', 'Purpose-built for savoury extruded curls demanding uniform bulk density and breakage control.']],
  ['30_groundnut_chikki.png', '', 'Groundnut Chikki Manufacturing Line', ['Cooking pans, slab forming, and guillotine cutting with ergonomic guarding.', 'Balances caramelisation windows so brittle bars retain snap without sticking wrappers.']],
  ['31_biskuit_plant.png', 'biscuit_baking_turnkey.pdf', 'Biscuit Baking Turnkey', ['Dough feeding, rotary moulding or wire-cut, travelling ovens, and cream sandwich modules.', 'Supports laminated or hard dough portfolios with hygiene zoning baked into line layouts.']],
  ['banana-chips-processing-plant/banana-chips-brochure.png', 'banana_chips_plant.pdf', 'Banana Chips Processing Plant', ['Continuous frying, seasoning, and sorting tailored for snack processors.', 'Delivers uniform moisture, colour, and throughput without sacrificing operator safety.']],
  ['protein_bar_hero.jpg', 'protein_bar.pdf', 'Protein Bar Manufacturing Plant', ['Complete Turnkey solutions for protein bar processing and packaging.', 'High-quality nutritional bars through a controlled and automated process.'], '/turnkey-project/protein-bar-manufacturing-plant'],
  ['instant-mix-frozen-food-processing-plant/instant-mix-frozen-food-brochure.jpg', 'instant_mix_and_frozen_food.pdf', 'Instant Mix & Frozen Food Processing Plant', ['End-to-end processing solutions for instant mixes and frozen food products.', 'Hygienic and automated systems ensuring consistent quality and extended shelf life.'], '/turnkey-project/instant-mix-frozen-food-processing-plant'],
  ['mayonnaise/mayonnaise_card.jpg', 'mayonnaise.pdf', 'Mayonnaise Processing Plant', ['High-shear emulsification and homogenization units for perfectly stable mayonnaise and sauces.', 'Food-grade stainless steel construction ensures hygiene, efficiency, and consistent product quality.'], '/turnkey-project/mayonnaise-processing-plant'],
  ['instant_noodles_card.jpg', 'Instant noodles.pdf', 'Instant Noodles Processing Plant', ['Fully automated production line with high efficiency and hygienic design.', 'Complete process from flour mixing and sheeting to frying, seasoning, and packing.'], '/turnkey-project/instant-noodles-processing-plant'],
  ['automatic_masala_card.jpg', 'AMC-30_plant.pdf', 'Automatic Masala Packing Plant', ['Fully automated masala processing, blending, screening and packaging solution.', 'Features hygienic stainless steel construction and advanced PLC based controls.'], '/turnkey-project/automatic-masala-packing-plant'],
  ['ors_plant_card.jpg', 'ORS.pdf', 'ORS Processing Plant', ['End-to-end turnkey solution for processing and packaging WHO recommended ORS formulations.', 'High-speed hygienic production from ingredient blending to final sachet sealing.'], '/turnkey-project/fully-automated-ors-plant'],
  ['pickle-processing-plant/pickle_infographic.jpg', 'PICKLE.pdf', 'Pickle Processing & Packaging Plant', ['Fully automated fruit and vegetable pickle processing lines.', 'Advanced brining, precision slicing, and high-speed jar filling.'], '/turnkey-project/pickle-processing-and-packaging-plant'],
  ['milk-powder-processing-plant/milk_powder_infographic.jpg', 'milk powder.pdf', 'Milk Powder Processing & Packaging Plant', ['Fully automated process from raw milk reception to spray drying and packing.', 'Ensures consistent powder quality with advanced evaporation and drying.'], '/turnkey-project/milk-powder-processing-packaging-plant'],
  ['ctc-tea-processing-plant/ctc_tea_infographic.jpg', 'ctc_tea_processing.pdf', 'CTC Tea Processing & Packaging Plant', ['Fully automated CTC tea processing plant from fresh leaf receiving to finished packaging.', 'Advanced CTC technology for uniform granule formation and consistent flavor, aroma & color.'], '/turnkey-project/ctc-tea-processing-packaging-plant'],
  ['economical-kurkure-plant/economical_kurkure_cover.jpg', 'Economical_Kurkure_Plant.pdf', 'Economical Kurkure Making Plant', ['Complete turnkey solution for economical kurkure production.', 'Snack Food Processing'], '/turnkey-project/economical-kurkure-making-plant'],
  ['protein-powder-production-plant/protein-powder-brochure.jpg', 'protein_powder_production_plant.pdf', 'Protein Powder Production Plant', ['Complete turnkey solution for protein powder manufacturing, blending, drying, milling and automated packaging.', 'Powder Processing'], '/turnkey-project/protein-powder-production-plant']
]

export const brochureProjects = RAW.map(([imageFile, pdfFile, title, lines, detailsPath], index) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const computedDetailsPath = detailsPath || `/turnkey-project/${slug}`;
  return {
    id: `brochure-${index + 1}-${imageFile.replace(/\W+/g, '-')}`,
    imageSrc: `${IMG}/${imageFile}`,
    brochureHref: pdfFile ? pdfHref(pdfFile) : null,
    brochureDownloadName: pdfFile ? pdfFile.replace(/\s+/g, '_') : null,
    hasBrochure: !!pdfFile,
    title,
    descriptionLines: lines,
    detailsPath: computedDetailsPath,
  };
})
