import { pgTable, serial, text, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const plansTable = pgTable("plans", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description"),
  monthlyPremium: integer("monthly_premium").notNull(),
  targetAudience: text("target_audience").notNull(),
  popular: boolean("popular").default(false),
  features: jsonb("features").notNull().$type<string[]>(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertPlanSchema = createInsertSchema(plansTable).omit({ id: true });
export type InsertPlan = z.infer<typeof insertPlanSchema>;
export type Plan = typeof plansTable.$inferSelect;
