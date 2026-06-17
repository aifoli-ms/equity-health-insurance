import express from "express";
import path from "path";
import plansRouter from "./routes/plans";
import providersRouter from "./routes/providers";
import faqsRouter from "./routes/faqs";
import contactsRouter from "./routes/contacts";

const app = express();
const API_PORT = Number(process.env.API_PORT) || (Number(process.env.PORT) || 5000) + 1;

app.use(express.json());

// API routes
app.use("/api/plans", plansRouter);
app.use("/api/providers", providersRouter);
app.use("/api/faqs", faqsRouter);
app.use("/api/contacts", contactsRouter);

// Serve static frontend in production
const distPath = path.resolve(import.meta.dirname, "../dist/public");
app.use(express.static(distPath));
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(API_PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${API_PORT}`);
});

export default app;
