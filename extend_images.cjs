const sharp = require('sharp');
const fs = require('fs');

async function processImages() {
  for (let i = 1; i <= 5; i++) {
    const input = `src/assets/hero/hero-slide-${i}.png`;
    const temp = `src/assets/hero/temp-${i}.png`;
    
    // Read the image metadata to get width and height
    const metadata = await sharp(input).metadata();
    
    // Get the exact edge color of the image at (0,0)
    const colorBuffer = await sharp(input)
      .extract({ left: 0, top: 0, width: 1, height: 1 })
      .raw()
      .toBuffer();
    
    const hexColor = '#' + colorBuffer.toString('hex').substring(0, 6);
    
    // Create an extended version of the image matching aspect ratio (e.g. 1920x800)
    // We'll pad the sides with the exact edge color
    await sharp(input)
      .resize({
        width: 1920,
        height: 600,
        fit: 'contain',
        background: hexColor // Pad with the exact image edge color!
      })
      .toFile(temp);
      
    fs.renameSync(temp, input);
    console.log(`Processed Slide ${i} with padding color ${hexColor}`);
  }
}

processImages().catch(console.error);
