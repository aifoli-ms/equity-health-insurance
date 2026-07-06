import express from "express";
import plansRouter from "./routes/plans.js";
import providersRouter from "./routes/providers.js";
import faqsRouter from "./routes/faqs.js";
import contactsRouter from "./routes/contacts.js";

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use("/api/plans", plansRouter);
app.use("/api/providers", providersRouter);
app.use("/api/faqs", faqsRouter);
app.use("/api/contacts", contactsRouter);

export default app;
