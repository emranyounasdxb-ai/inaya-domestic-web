import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Format/size derivatives of the approved icon; no redesign or new branding.
const source = 'app/icon.png';
const sizes = [16, 32, 48];
// Small ICO frames use the original DIB format, including the legacy AND mask.
// PNG-in-ICO is valid, but not all favicon readers support that newer encoding.
const frames = await Promise.all(sizes.map(async size => {
  const rgba = await sharp(source).resize(size, size).ensureAlpha().raw().toBuffer();
  const maskStride = Math.ceil(size / 32) * 4;
  const pixelsLength = size * size * 4;
  const frame = Buffer.alloc(40 + pixelsLength + maskStride * size);
  frame.writeUInt32LE(40, 0); // BITMAPINFOHEADER
  frame.writeInt32LE(size, 4);
  frame.writeInt32LE(size * 2, 8); // XOR bitmap followed by the AND mask
  frame.writeUInt16LE(1, 12);
  frame.writeUInt16LE(32, 14);
  frame.writeUInt32LE(pixelsLength, 20);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const src = (y * size + x) * 4;
      const row = size - 1 - y; // DIB rows are bottom-up, pixels are BGRA.
      const dst = 40 + (row * size + x) * 4;
      frame[dst] = rgba[src + 2];
      frame[dst + 1] = rgba[src + 1];
      frame[dst + 2] = rgba[src];
      frame[dst + 3] = rgba[src + 3];
      if (rgba[src + 3] === 0) {
        frame[40 + pixelsLength + row * maskStride + (x >> 3)] |= 0x80 >> (x & 7);
      }
    }
  }
  return frame;
}));
const header = Buffer.alloc(6 + frames.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
for (let i = 0; i < sizes.length; i++) {
  const start = 6 + i * 16;
  header[start] = sizes[i]; header[start + 1] = sizes[i];
  header.writeUInt16LE(1, start + 4); header.writeUInt16LE(32, start + 6);
  header.writeUInt32LE(frames[i].length, start + 8); header.writeUInt32LE(offset, start + 12);
  offset += frames[i].length;
}
await writeFile('public/favicon.ico', Buffer.concat([header, ...frames]));
await sharp(source).resize(48, 48).png().toFile('public/favicon-48x48.png');
await sharp(source).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated DIB favicon.ico (16/32/48), 48px PNG and 180px Apple icon from app/icon.png');
