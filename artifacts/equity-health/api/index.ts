import express from "express";
import plansRouter from "../server/routes/plans.js";
import providersRouter from "../server/routes/providers.js";
import faqsRouter from "../server/routes/faqs.js";
import contactsRouter from "../server/routes/contacts.js";

const app = express();
app.use(express.json());

app.use("/api/plans", plansRouter);
app.use("/api/providers", providersRouter);
app.use("/api/faqs", faqsRouter);
app.use("/api/contacts", contactsRouter);

export default app;
