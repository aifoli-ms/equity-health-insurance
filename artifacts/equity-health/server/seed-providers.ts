import { db, pool } from "@workspace/db";
import { providersTable } from "@workspace/db";
import fs from "fs";
import path from "path";

function classifyCategory(specialty: string): string {
  const s = specialty.toLowerCase().trim();
  if (s.includes("pharmacy") || s.includes("pharma") || s.includes("chemist")) return "Pharmacy";
  if (s.includes("dental") || s.includes("dent")) return "Dental";
  if (s.includes("optical") || s.includes("eye") || s.includes("vision") || s.includes("optic") || s.includes("optom") || s.includes("optial")) return "Optical";
  if (s.includes("laboratory") || s.includes("lab") && !s.includes("gp") && !s.includes("pharm")) return "Laboratory";
  if (s.includes("x-ray") || s.includes("imaging") || s.includes("radiol") || s.includes("scan") && !s.includes("gp")) return "Diagnostics";
  if (s.includes("physiotherapy") || s.includes("physi")) return "Physiotherapy";
  if (s.includes("hearing") || s.includes("ent")) return "Hospital";
  return "Hospital";
}

function parseRegion(line: string): string | null {
  const lower = line.toLowerCase();
  if (!lower.includes("region") && !lower.includes("tamale")) return null;
  // Skip header rows and provider rows that happen to contain "region" in name
  const cells = line.split("|").map(c => c.trim()).filter(Boolean);
  if (cells.length >= 5 && cells[0].match(/^\d+$/)) return null;

  if (lower.includes("greater accra")) return "Accra";
  if (lower.includes("ashanti")) return "Ashanti Region";
  if (lower.includes("western")) return "Western Region";
  if (lower.includes("eastern")) return "Eastern Region";
  if (lower.includes("volta")) return "Volta Region";
  if (lower.includes("central")) return "Central Region";
  if (lower.includes("bono") || lower.includes("ahafo")) return "Bono/Ahafo Region";
  if (lower.includes("tamale") || lower.includes("northern")) return "Northern Region";
  return null;
}

function parseSuburb(line: string): string | null {
  const m = line.match(/Suburb\s*[-–]?\s*(.+?)(?:\s*\|)/);
  return m ? m[1].trim() : null;
}

interface ProviderRow {
  name: string;
  category: string;
  location: string;
  address: string;
  phone: string;
}

async function seedProviders() {
  const mdPath = path.resolve(import.meta.dirname, "../../../.firecrawl/rosewood-hsp-list.md");
  const content = fs.readFileSync(mdPath, "utf-8");
  const lines = content.split("\n");

  const providers: ProviderRow[] = [];
  let currentRegion = "Greater Accra";
  let currentSuburb = "";

  for (const line of lines) {
    const regionMatch = parseRegion(line);
    if (regionMatch) {
      currentRegion = regionMatch;
      continue;
    }

    const suburbMatch = parseSuburb(line);
    if (suburbMatch) {
      currentSuburb = suburbMatch;
      continue;
    }

    // Match provider rows: | number | name | plan | specialty | phone | location |
    const cells = line.split("|").map(c => c.trim()).filter(Boolean);
    if (cells.length < 6) continue;

    const [num, name, _plan, specialty, phone, location] = cells;
    if (!num.match(/^\d+$/)) continue;
    if (!name || name === "") continue;

    const category = classifyCategory(specialty);

    // Some specialty fields contain "lab" as part of a combo like "Gp/Lab/Pharm" - those are hospitals
    const specialtyLower = specialty.toLowerCase();
    const isComboWithLab = specialtyLower.includes("gp") || specialtyLower.includes("obs") || specialtyLower.includes("surg");
    const finalCategory = (category === "Laboratory" && isComboWithLab) ? "Hospital" : category;

    const locationStr = location || currentSuburb;
    const suburb = currentSuburb.split("/")[0].trim();
    const regionShort = currentRegion.replace(/^Greater\s+/, "");

    providers.push({
      name: name.trim(),
      category: finalCategory,
      location: `${suburb}, ${regionShort}`,
      address: locationStr,
      phone: phone.split("/")[0].trim(),
    });
  }

  console.log(`Parsed ${providers.length} providers. Inserting...`);

  // Clear existing providers
  await db.delete(providersTable);

  // Insert in batches of 50
  for (let i = 0; i < providers.length; i += 50) {
    const batch = providers.slice(i, i + 50);
    await db.insert(providersTable).values(batch);
    console.log(`  Inserted ${Math.min(i + 50, providers.length)}/${providers.length}`);
  }

  console.log("Provider seeding complete.");
  await pool.end();
}

seedProviders().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
