import { Router } from "express";
import { db } from "@workspace/db";
import { userProfilesTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { authMiddleware, AuthenticatedRequest } from "../middlewares/auth.js";

export const profileRouter = Router();

profileRouter.use(authMiddleware);

profileRouter.get("/", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const [profile] = await db.select().from(userProfilesTable).where(eq(userProfilesTable.userId, userId)).limit(1);
  if (!profile) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }
  res.json(profile);
});

profileRouter.put("/", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const { name, state, age, income, occupation, gender, category } = req.body as {
    name?: string;
    state?: string;
    age?: number;
    income?: number;
    occupation?: string;
    gender?: string;
    category?: string;
  };

  const [existing] = await db.select().from(userProfilesTable).where(eq(userProfilesTable.userId, userId)).limit(1);

  if (!existing) {
    const [created] = await db.insert(userProfilesTable).values({
      userId,
      name: name ?? req.user!.name,
      state: state ?? "",
      age: age ?? 0,
      income,
      occupation,
      gender,
      category,
    }).returning();
    res.json(created);
    return;
  }

  const [updated] = await db.update(userProfilesTable)
    .set({
      ...(name !== undefined ? { name } : {}),
      ...(state !== undefined ? { state } : {}),
      ...(age !== undefined ? { age } : {}),
      ...(income !== undefined ? { income } : {}),
      ...(occupation !== undefined ? { occupation } : {}),
      ...(gender !== undefined ? { gender } : {}),
      ...(category !== undefined ? { category } : {}),
    })
    .where(eq(userProfilesTable.userId, userId))
    .returning();

  res.json(updated);
});
