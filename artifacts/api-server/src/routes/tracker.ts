import { Router } from "express";
import { db } from "@workspace/db";
import { applicationTrackingTable, usersTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { authMiddleware, AuthenticatedRequest } from "../middlewares/auth.js";
import { SCHEMES } from "../data/schemes.js";

export const trackerRouter = Router();

// ── Public: shareable approved-schemes card (no auth) ──────────────────────
trackerRouter.get("/public/:userId", async (req, res) => {
  const userId = parseInt(String(req.params["userId"]), 10);
  if (isNaN(userId)) { res.status(400).json({ error: "Invalid user id" }); return; }

  const [userRow] = await db.select({ name: usersTable.name }).from(usersTable)
    .where(eq(usersTable.id, userId)).limit(1);
  if (!userRow) { res.status(404).json({ error: "User not found" }); return; }

  const rows = await db.select().from(applicationTrackingTable)
    .where(and(eq(applicationTrackingTable.userId, userId), eq(applicationTrackingTable.status, "approved")));

  const schemes = rows.map(r => {
    const scheme = SCHEMES.find(s => s.id === r.schemeId);
    return {
      schemeId: r.schemeId,
      title: scheme?.title ?? r.schemeId,
      category: scheme?.category ?? "",
      description: scheme?.description ?? "",
      officialWebsite: scheme?.officialWebsite ?? "",
      approvedAt: r.updatedAt?.toISOString() ?? "",
    };
  });

  res.json({ userName: userRow.name, approvedCount: schemes.length, schemes });
});

// ── Protected routes ────────────────────────────────────────────────────────
trackerRouter.use(authMiddleware);

trackerRouter.get("/", async (req: AuthenticatedRequest, res) => {
  const rows = await db.select().from(applicationTrackingTable)
    .where(eq(applicationTrackingTable.userId, req.userId!));
  const result = rows.map(r => ({ ...r, scheme: SCHEMES.find(s => s.id === r.schemeId) }));
  res.json(result);
});

trackerRouter.put("/:schemeId", async (req: AuthenticatedRequest, res) => {
  const schemeId = String(req.params["schemeId"]);
  const { status, notes } = req.body as { status?: string; notes?: string };
  if (!SCHEMES.find(s => s.id === schemeId)) { res.status(404).json({ error: "Scheme not found" }); return; }

  const [existing] = await db.select().from(applicationTrackingTable)
    .where(and(eq(applicationTrackingTable.userId, req.userId!), eq(applicationTrackingTable.schemeId, schemeId))).limit(1);

  if (existing) {
    const [updated] = await db.update(applicationTrackingTable)
      .set({
        ...(status ? { status } : {}),
        ...(notes !== undefined ? { notes } : {}),
        updatedAt: new Date(),
        ...(status === "applied" && !existing.appliedAt ? { appliedAt: new Date() } : {}),
      })
      .where(eq(applicationTrackingTable.id, existing.id)).returning();
    res.json({ ...updated, scheme: SCHEMES.find(s => s.id === schemeId) });
  } else {
    const [created] = await db.insert(applicationTrackingTable)
      .values({
        userId: req.userId!,
        schemeId,
        status: status ?? "not_started",
        notes,
        appliedAt: status === "applied" ? new Date() : undefined,
      })
      .returning();
    res.status(201).json({ ...created, scheme: SCHEMES.find(s => s.id === schemeId) });
  }
});

trackerRouter.delete("/:schemeId", async (req: AuthenticatedRequest, res) => {
  const schemeId = String(req.params["schemeId"]);
  await db.delete(applicationTrackingTable)
    .where(and(eq(applicationTrackingTable.userId, req.userId!), eq(applicationTrackingTable.schemeId, schemeId)));
  res.json({ message: "Removed" });
});
