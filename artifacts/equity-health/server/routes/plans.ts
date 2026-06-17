import { Router } from "express";
import { db, plansTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";

const router = Router();

router.get("/", async (_req, res) => {
  const plans = await db.select().from(plansTable).orderBy(asc(plansTable.sortOrder));
  res.json(plans);
});

router.get("/:slug", async (req, res) => {
  const [plan] = await db.select().from(plansTable).where(eq(plansTable.slug, req.params.slug));
  if (!plan) {
    res.status(404).json({ message: "Plan not found" });
    return;
  }
  res.json(plan);
});

export default router;
