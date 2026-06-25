const fs = require('fs');
const path = require('path');

// read binary headers to get jpeg dimensions
function getJpegSize(filePath) {
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(1024);
  fs.readSync(fd, buffer, 0, 1024, 0);
  fs.closeSync(fd);

  for (let i = 0; i < buffer.length - 1; i++) {
    if (buffer[i] === 0xff && (buffer[i + 1] === 0xc0 || buffer[i + 1] === 0xc2)) {
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
  }
  return { width: 0, height: 0 };
}

const dir = 'public/turnkey-brochures/images/milk-powder-processing-plant';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
files.forEach(f => {
  const size = getJpegSize(path.join(dir, f));
  console.log(`${f}: ${size.width}x${size.height} (Aspect: ${(size.width/size.height).toFixed(2)})`);
});
