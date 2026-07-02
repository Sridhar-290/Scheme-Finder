import { Router } from "express";
import { db } from "@workspace/db";
import { savedSchemesTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { authMiddleware, AuthenticatedRequest } from "../middlewares/auth.js";
import { SCHEMES } from "../data/schemes.js";

export const savedRouter = Router();

savedRouter.use(authMiddleware);

savedRouter.get("/", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const saved = await db.select().from(savedSchemesTable).where(eq(savedSchemesTable.userId, userId));

  const results = saved.map(s => {
    const scheme = SCHEMES.find(sc => sc.id === s.schemeId);
    return { ...s, scheme };
  }).filter(s => s.scheme !== undefined);

  res.json(results);
});

savedRouter.post("/:schemeId", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const schemeId = String(req.params["schemeId"]);
  const { notes } = req.body as { notes?: string };

  const scheme = SCHEMES.find(s => s.id === schemeId);
  if (!scheme) {
    res.status(404).json({ error: "Scheme not found" });
    return;
  }

  const existing = await db.select().from(savedSchemesTable)
    .where(and(eq(savedSchemesTable.userId, userId), eq(savedSchemesTable.schemeId, schemeId)))
    .limit(1);

  if (existing[0]) {
    res.json({ ...existing[0], scheme });
    return;
  }

  const [saved] = await db.insert(savedSchemesTable).values({
    userId,
    schemeId,
    notes,
  }).returning();

  res.status(201).json({ ...saved, scheme });
});

savedRouter.delete("/:schemeId", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const schemeId = String(req.params["schemeId"]);

  await db.delete(savedSchemesTable)
    .where(and(eq(savedSchemesTable.userId, userId), eq(savedSchemesTable.schemeId, schemeId)));

  res.json({ message: "Removed from saved schemes" });
});
