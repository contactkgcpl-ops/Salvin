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
  ['1_red_chilli.png', 'spices_seeds_cleaning_line.pdf', 'Red Chilli Processing Plant', ['High-volume cleaning, grinding, and controlled-atmosphere packaging for chilli commodities.', 'Built for food-grade hygiene, energy efficiency, and dependable OEE on your line.']],
  ['2_banna_chips.png', 'puffed_rice_processing.pdf', 'Banana Chips Processing Line', ['Continuous frying, seasoning, and sorting tailored for snack processors.', 'Delivers uniform moisture, colour, and throughput without sacrificing operator safety.']],
  ['3_beetroot.png', 'fruit_juice_salvin.pdf', 'Beetroot Juice Processing Plant', ['Cold extraction, clarification, and aseptic-ready packaging for vibrant juices.', 'Supports nutrient retention while scaling to industrial filling speeds you can commission fast.']],
  ['4_turmeric.png', 'spices_seeds_cleaning_line.pdf', 'Turmeric Powder Processing Plant', ['Cleaning, pulverisation, and sterilisation paths suited for premium powders.', 'Metal detection–friendly layouts help you ship audit-ready batches every shift.']],
  ['5_honey.png', 'honey_processing.pdf', 'Honey Processing & Bottling Plant', ['Filtration, warming, and precision dosing across jars and retail packs.', 'Preserves intrinsic viscosity and clarity while meeting export-ready sanitary design.']],
  ['6_dates.png', 'dehydration_onion_garlic_plant.pdf', 'Dates Processing & Packing Plant', ['Wash, grade, pitting options, and vacuum-ready sealing for premium fruit.', 'Ideal where shelf-life extension must pair with gentle handling of fragile produce.']],
  ['7_petrolium_jelly.png', 'petrolium_jelly_plant.pdf', 'Petroleum Jelly Manufacturing Plant', ['Melting, blending, and sterile filling skids for cosmetic-grade formulations.', 'Temperature-stable circuits reduce rework while simplifying validation paperwork.']],
  ['8_jackfruit.png', 'jecked_fruit_canned_line.pdf', 'Jackfruit Canning & Retort Line', ['Prep, brining or syrup staging, and high-speed can sealing with QA checkpoints.', 'Designed for tropical fruit processors expanding shelf-stable retail portfolios.']],
  ['9_pasta_making.png', 'noodles_pasta_making_plant.pdf', 'Pasta & Noodles Production Plant', ['Mixing, extrusion, drying or cooling modules sized to your flour intake.', 'Consistent bite texture and yield tracking suitable for co-manufacturers and brands.']],
  ['10_peanut_butter.png', 'peanut_butter_processing.pdf', 'Peanut Butter Processing Plant', ['Roasting, grinding, and filling under contained dust-managed environments.', 'Delivers smooth or crunchy profiles with CIP-friendly surfaces where recipes demand it.']],
  ['11_ginger_garlic_plant.png', 'ginger_garlic_plant.pdf', 'Ginger Garlic Paste Plant', ['Peeling or washing, paste manufacture, and chilled or ambient packing.', 'Keeps pungency stable via rapid processing and stainless distribution headers.']],
  ['12_blank_pepper_powder.png', 'nutrition_powder.pdf', 'Black Pepper Powder Line', ['Cryogenic or ambient milling with sieving integrated ahead of bulk packing.', 'Protects volatile oils while controlling particle size bands for institutional buyers.']],
  ['13_seed_cleaning_sorting.png', 'spices_seeds_cleaning_line.pdf', 'Seed Cleaning & Sorting Line', ['Multi-stage aspiration, grading, and optical-ready discharge chutes.', 'Raises batch purity before roasting or oil extraction downstream on your site.']],
  ['14_cocoa_powder_making_machine.png', 'nutrition_powder.pdf', 'Cocoa Powder Processing System', ['Pressing, alkalising paths optional, and micronising rooms isolated for allergens.', 'Supports confectionery ingredient specs with traceable mass balance reporting.']],
  ['15_liquid_glucose.png', 'Liquid Glucose manufacturing Plant.pdf', 'Liquid Glucose Manufacturing Plant', ['Enzymatic conversion, filtration, and evaporator trains tuned to DE targets.', 'Industrial glucose syrup suitable for sweets, breweries, and binder applications alike.']],
  ['16_coriander_powder.png', 'spices_seeds_cleaning_line.pdf', 'Coriander Powder Plant', ['Cleaning lines plus hammer or pin mills matched to volatile oil retention.', 'Ideal where aroma specification sheets drive procurement from growers to pack-out.']],
  ['17_pizza_sauce.png', 'pasta_pizza_source_making_plant.pdf', 'Pizza Sauce Processing Plant', ['Cooking kettles, homogenisation, and hot-fill compatibility for retail pouches.', 'Balanced acidity control supports pizza chains scaling central kitchens reliably.']],
  ['18_cashew_nut.png', 'peanut_butter_processing.pdf', 'Cashew Processing Turnkey', ['Paste or butter pathways leveraging nut roasting and stainless milling cores.', 'Adaptable to tree-nut programmes needing contained transitions between SKU runs.']],
  ['19_tomato_ketchup.png', 'tomato_ketchup_plant.pdf', 'Tomato Ketchup Manufacturing Plant', ['Receiving through concentration with viscosity-managed finishing vessels.', 'Pairs evaporators and fillers so HM puffs and retail bottles stay within QC bands.']],
  ['20_coffee_processing.png', 'instant_coffee_processing.pdf', 'Coffee Processing Plant', ['Roast profiles optional upstream plus extraction or soluble packaging blocks.', 'Delivers aroma-forward concentrates suited for jars, sticks, or vending blends.']],
  ['21_green_tea_processing_plant.png', 'instant_coffee_processing.pdf', 'Green Tea Processing Plant', ['Leaf handling, drying zones, and aroma-controlled milling where recipes allow.', 'Supports beverage houses launching botanical concentrates alongside coffee SKUs.']],
  ['22_potato_powder.png', 'potato_powder_plant.pdf', 'Potato Powder Dehydration Plant', ['Peeling or flake prep, drum or belt drying, and milling to instant-grade specs.', 'Great for snack Seasonings and thickening ingredients needing long ambient shelf life.']],
  ['23_mill_plant.png', 'wheat flour.pdf', 'Industrial Flour Milling Plant', ['Cleaning, conditioning, break rolls, and plan sifters sized to wheat receipts.', 'Produces baker-ready streams with dust containment engineered from intake to pack-off.']],
  ['24_edible_oil.png', 'peanut_oil.pdf', 'Edible Oil Processing Plant', ['Pressing or solvent paths configurable alongside refining skids when specified.', 'Matches throughput to seed intake while keeping extraction halls operator-safe.']],
  ['25_peanut_oil_mill.png', 'peanut_oil.pdf', 'Peanut Oil Mill', ['Decortication optional, screw pressing, and filtration trains before storage.', 'Delivers cold-press or refined peanut oil routes depending on your market positioning.']],
  ['26_wheat_flour_plant.png', 'wheat flour.pdf', 'Wheat Flour Processing Plant', ['Stoneless milling circuits with packaging diverters for bag or bulk customers.', 'Balances extraction yield with ash targets typical of institutional flour tenders.']],
  ['27_indsutry_4.0.png', 'agro_machine.pdf', 'Industry 4.0 Ready Processing Line', ['Sensorised motors, SCADA hooks, and telemetry-ready panels across critical assets.', 'Lets your maintenance teams predict faults before they ripple through upstream batches.']],
  ['28_roasted_nuts.png', 'peanut_butter_processing.pdf', 'Roasted Nuts Processing Line', ['Fluid-bed or drum roasting with seasoning drums and nitrogen-flushed packing.', 'Maintains crunch while limiting oil migration during high-speed retail transitions.']],
  ['29_kurkure_making.png', 'puffed_rice_processing.pdf', 'Kurkure-Style Extruded Snacks Plant', ['Twin-screw extrusion, drying, and flavour-on coating with sealed transitions.', 'Purpose-built for savoury extruded curls demanding uniform bulk density and breakage control.']],
  ['30_groundnut_chikki.png', 'nutrition_powder.pdf', 'Groundnut Chikki Manufacturing Line', ['Cooking pans, slab forming, and guillotine cutting with ergonomic guarding.', 'Balances caramelisation windows so brittle bars retain snap without sticking wrappers.']],
  ['31_biskuit_plant.png', 'noodles_pasta_making_plant.pdf', 'Biscuit Baking Turnkey', ['Dough feeding, rotary moulding or wire-cut, travelling ovens, and cream sandwich modules.', 'Supports laminated or hard dough portfolios with hygiene zoning baked into line layouts.']],
]

export const brochureProjects = RAW.map(([imageFile, pdfFile, title, lines], index) => ({
  id: `brochure-${index + 1}-${imageFile.replace(/\W+/g, '-')}`,
  imageSrc: `${IMG}/${imageFile}`,
  brochureHref: pdfHref(pdfFile),
  brochureDownloadName: pdfFile.replace(/\s+/g, '_'),
  title,
  descriptionLines: lines,
}))
