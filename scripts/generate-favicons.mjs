import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Format/size derivatives of the approved icon; no redesign or new branding.
const source = 'app/icon.png';
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()));
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
console.log('Generated favicon.ico (16/32/48), 48px PNG and 180px Apple icon from app/icon.png');
