const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = "C:\\Users\\digesh prajapati\\.gemini\\antigravity-ide\\brain\\213da7dd-6d38-42f9-b24c-3445f113a306";
const images = [
  { in: "media__1785754571688.png", out: "final-slide-1.png" },
  { in: "media__1785754771279.png", out: "final-slide-2.png" },
  { in: "media__1785754878975.png", out: "final-slide-3.png" },
  { in: "media__1785755053248.png", out: "final-slide-4.png" },
  { in: "media__1785755088197.png", out: "final-slide-5.png" }
];

async function processImages() {
  const TARGET_WIDTH = 2000;
  const TARGET_HEIGHT = 600;

  for (const img of images) {
    const inputPath = path.join(baseDir, img.in);
    const outputPath = path.join('src', 'assets', 'hero', img.out);
    
    // First, resize to target height (600) while keeping aspect ratio
    const resizedBuffer = await sharp(inputPath)
      .resize({ height: TARGET_HEIGHT })
      .toBuffer();
      
    const metadata = await sharp(resizedBuffer).metadata();
    const currentWidth = metadata.width;
    
    if (currentWidth < TARGET_WIDTH) {
      // Calculate how much padding we need
      const totalPadding = TARGET_WIDTH - currentWidth;
      const leftPad = Math.floor(totalPadding / 2);
      const rightPad = totalPadding - leftPad;
      
      try {
        await sharp(resizedBuffer)
          .extend({
            left: leftPad,
            right: rightPad,
            extendWith: 'copy'
          })
          .toFile(outputPath);
        console.log("Processed perfectly: " + img.out);
      } catch (e) {
        console.log("Error extending: " + e.message);
      }
    } else {
      // If it's already wider than target, just crop or save as is
      await sharp(resizedBuffer).resize({ width: TARGET_WIDTH, height: TARGET_HEIGHT, fit: 'cover' }).toFile(outputPath);
      console.log("Cropped perfectly: " + img.out);
    }
  }
}

processImages().catch(console.error);
