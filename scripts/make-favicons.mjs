import { Resvg } from "@resvg/resvg-js";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "app", "Billoxi Fav.svg"));

const outputs = [
  { size: 48, file: join(root, "public", "favicon-48x48.png") },
  { size: 96, file: join(root, "public", "favicon-96x96.png") },
  { size: 144, file: join(root, "public", "favicon-144x144.png") },
  { size: 192, file: join(root, "public", "favicon-192x192.png") },
  { size: 512, file: join(root, "public", "favicon-512x512.png") },
  { size: 180, file: join(root, "public", "apple-touch-icon.png") },
  { size: 48, file: join(root, "app", "icon.png") },
  { size: 96, file: join(root, "app", "icon1.png") },
  { size: 192, file: join(root, "app", "icon2.png") },
  { size: 180, file: join(root, "app", "apple-icon.png") },
];

for (const { size, file } of outputs) {
  mkdirSync(dirname(file), { recursive: true });
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    background: "#E3FF75",
  })
    .render()
    .asPng();
  writeFileSync(file, png);
  console.log(`wrote ${file} (${size}x${size})`);
}

copyFileSync(
  join(root, "public", "favicon-48x48.png"),
  join(root, "public", "favicon.png"),
);
console.log("done");
