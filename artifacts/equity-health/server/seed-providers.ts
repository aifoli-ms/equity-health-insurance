import { db, pool } from "@workspace/db";
import { providersTable } from "@workspace/db";
import fs from "fs";
import path from "path";

interface ProviderRow {
  name: string;
  category: string;
  location: string;
  address: string;
  phone: string;
}

async function seedProviders() {
  const jsonPath = path.resolve(import.meta.dirname, "../../../.firecrawl/rosewood-providers.json");
  const providers: ProviderRow[] = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  console.log(`Loaded ${providers.length} providers. Inserting...`);

  await db.delete(providersTable);

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
