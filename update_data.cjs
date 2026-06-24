const fs = require('fs');
let code = fs.readFileSync('src/pages/TurnkeyProject/data/turnkeyProjectsData.js', 'utf8');
if (!code.includes('mayonnaise-processing-plant')) {
  code = code.replace(`  'pasta-noodles-production-plant': {`, `  'mayonnaise-processing-plant': {
    title: 'Mayonnaise Processing Plant',
    badge: 'TURNKEY MAYONNAISE PROCESSING SOLUTION',
    subtitle: 'Complete Turnkey Solutions for Industrial Mayonnaise Manufacturing, Processing & Packaging',
    heroImage: '/turnkey-brochures/images/mayonnaise_card.jpg',
    pdfFile: 'mayonnaise.pdf',
    stats: {
      capacity: '500 Ltr–3,000 Ltr',
      stages: '7 Stage',
      retention: 'Consistent Emulsion'
    },
    overview: {
      title: 'Complete Mayonnaise Processing Plant',
      p1: 'High capacity production with hygienic stainless steel design and PLC based automation.',
      p2: 'Ensures consistent emulsion quality, reduced production losses, and food-grade processing standards.',
      highlights: [],
      image: '/turnkey-brochures/images/mayonnaise_card.jpg',
      photoImage: '/turnkey-brochures/images/mayonnaise_card.jpg',
      features4: []
    },
    capacities: [],
    features: [],
    processSteps: [],
    machinery: [],
    applications: [],
    gallery: []
  },
  'pasta-noodles-production-plant': {`);
  fs.writeFileSync('src/pages/TurnkeyProject/data/turnkeyProjectsData.js', code);
  console.log('Added to turnkeyProjectsData.js');
} else {
  console.log('Already exists');
}
