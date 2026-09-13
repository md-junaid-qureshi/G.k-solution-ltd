import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, "../../img");
const targetDir = path.resolve(__dirname, "../public/projects");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function normalizeFileName(name) {
  let normalized = name.toLowerCase().trim();

  // Replace spaces and special characters with hyphens
  normalized = normalized.replace(/\s+/g, "-");

  // Fix double extensions and specific typos
  normalized = normalized.replace(/\.jpg\.jpeg$/, ".jpeg");
  normalized = normalized.replace(/offfice2\.jpeg$/, "office-2.jpeg");
  normalized = normalized.replace(/officedesk\.jpeg$/, "office-desk.jpeg");
  normalized = normalized.replace(/coffe\.jpeg$/, "coffee.jpeg");
  normalized = normalized.replace(/beadroom2\.jpeg$/, "bedroom-2.jpeg");
  normalized = normalized.replace(/beedroom\.jpeg$/, "bedroom-1.jpeg");
  normalized = normalized.replace(/bedroom3\.jpeg$/, "bedroom-3.jpeg");
  normalized = normalized.replace(/bedroom4\.jpeg$/, "bedroom-4.jpeg");
  normalized = normalized.replace(/woring\.jpeg$/, "working-1.jpeg");
  normalized = normalized.replace(/working2\.jpeg$/, "working-2.jpeg");
  normalized = normalized.replace(/office_waiting\.jpeg$/, "office-waiting.jpeg");
  normalized = normalized.replace(/waiting_area\.jpeg$/, "waiting-area.jpeg");
  normalized = normalized.replace(/waiting2\.jpeg$/, "waiting-2.jpeg");
  normalized = normalized.replace(/vfs_cafetaria\.jpeg$/, "vfs-cafeteria.jpeg");
  normalized = normalized.replace(/vfs_loge\.jpeg$/, "vfs-lounge.jpeg");
  normalized = normalized.replace(/dinningroom\.jpg$/, "dining-room.jpg");
  normalized = normalized.replace(/meeting-room\.jpeg$/, "meeting-room.jpeg");
  normalized = normalized.replace(/whatsapp-image-.*\.jpeg$/, "whatsapp-interior.jpeg");

  return normalized;
}

const files = fs.readdirSync(sourceDir);
let count = 0;

console.log(`Starting asset migration from ${sourceDir} -> ${targetDir}`);

for (const file of files) {
  const srcPath = path.join(sourceDir, file);
  const stat = fs.statSync(srcPath);

  if (stat.isFile()) {
    const normalizedName = normalizeFileName(file);
    const destPath = path.join(targetDir, normalizedName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: "${file}" -> "${normalizedName}"`);
    count++;
  }
}

console.log(`\nSuccessfully migrated and normalized ${count} assets to public/projects/`);
