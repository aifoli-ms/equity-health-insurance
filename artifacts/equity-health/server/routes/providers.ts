import { Router } from "express";
import { db, providersTable } from "@workspace/db";
import { ilike, eq, or, asc, count, and, type SQL } from "drizzle-orm";

const PAGE_SIZE = 24;

const router = Router();

router.get("/", async (req, res) => {
  const { search, category, page } = req.query;
  const currentPage = Math.max(1, Number(page) || 1);

  const conditions: SQL[] = [];

  if (typeof category === "string" && category !== "All") {
    conditions.push(eq(providersTable.category, category));
  }

  if (typeof search === "string" && search.trim()) {
    const term = `%${search.trim()}%`;
    conditions.push(
      or(
        ilike(providersTable.name, term),
        ilike(providersTable.location, term),
      )!,
    );
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const [{ total }] = await db
    .select({ total: count() })
    .from(providersTable)
    .where(where);

  const providers = await db
    .select()
    .from(providersTable)
    .where(where)
    .orderBy(asc(providersTable.name))
    .limit(PAGE_SIZE)
    .offset((currentPage - 1) * PAGE_SIZE);

  res.json({
    data: providers,
    page: currentPage,
    pageSize: PAGE_SIZE,
    total,
    totalPages: Math.ceil(total / PAGE_SIZE),
  });
});

export default router;
