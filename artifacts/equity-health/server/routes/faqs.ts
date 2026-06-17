import { Router } from "express";
import { db, faqsTable } from "@workspace/db";
import { asc } from "drizzle-orm";

const router = Router();

router.get("/", async (_req, res) => {
  const faqs = await db.select().from(faqsTable).orderBy(asc(faqsTable.sortOrder));
  res.json(faqs);
});

export default router;
