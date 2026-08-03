const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = "C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\213da7dd-6d38-42f9-b24c-3445f113a306";
const images = [
  { in: "media__1785754571688.png", out: "seamless-slide-1.png" },
  { in: "media__1785754771279.png", out: "seamless-slide-2.png" },
  { in: "media__1785754878975.png", out: "seamless-slide-3.png" },
  { in: "media__1785755053248.png", out: "seamless-slide-4.png" },
  { in: "media__1785755088197.png", out: "seamless-slide-5.png" }
];

async function processImages() {
  for (const img of images) {
    const inputPath = path.join(baseDir, img.in);
    const outputPath = path.join('src', 'assets', 'hero', img.out);
    
    // Check if extendWith is supported, else we might just use mirror
    try {
      await sharp(inputPath)
        .extend({
          left: 500,
          right: 500,
          extendWith: 'copy'
        })
        .toFile(outputPath);
      console.log("Processed (copy) " + img.out);
    } catch (e) {
      console.log("Copy failed, trying mirror. " + e.message);
      // Fallback
      await sharp(inputPath)
        .extend({
          left: 500,
          right: 500,
          background: { r: 243, g: 243, b: 243, alpha: 1 } // fallback
        })
        .toFile(outputPath);
      console.log("Processed (fallback) " + img.out);
    }
  }
}

processImages().catch(console.error);
