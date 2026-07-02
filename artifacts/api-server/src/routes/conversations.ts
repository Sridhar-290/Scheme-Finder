import { Router } from "express";
import { db } from "@workspace/db";
import { conversationsTable, messagesTable, userProfilesTable } from "@workspace/db";
import { eq, and, asc } from "drizzle-orm";
import { authMiddleware, AuthenticatedRequest } from "../middlewares/auth.js";
import { generateAIResponse } from "../services/ai.js";

export const conversationsRouter = Router();

conversationsRouter.use(authMiddleware);

conversationsRouter.get("/", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const convos = await db.select().from(conversationsTable)
    .where(eq(conversationsTable.userId, userId))
    .orderBy(conversationsTable.updatedAt);
  res.json(convos.reverse());
});

conversationsRouter.post("/", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const { title } = req.body as { title?: string };

  const [convo] = await db.insert(conversationsTable).values({
    userId,
    title: title ?? "New Conversation",
  }).returning();

  res.status(201).json(convo);
});

conversationsRouter.get("/:id", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const id = parseInt(String(req.params["id"]), 10);

  const [convo] = await db.select().from(conversationsTable)
    .where(and(eq(conversationsTable.id, id), eq(conversationsTable.userId, userId)))
    .limit(1);

  if (!convo) {
    res.status(404).json({ error: "Conversation not found" });
    return;
  }

  const msgs = await db.select().from(messagesTable)
    .where(eq(messagesTable.conversationId, id))
    .orderBy(asc(messagesTable.createdAt));

  res.json({ ...convo, messages: msgs });
});

conversationsRouter.delete("/:id", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const id = parseInt(String(req.params["id"]), 10);

  const [convo] = await db.select().from(conversationsTable)
    .where(and(eq(conversationsTable.id, id), eq(conversationsTable.userId, userId)))
    .limit(1);

  if (!convo) {
    res.status(404).json({ error: "Conversation not found" });
    return;
  }

  await db.delete(messagesTable).where(eq(messagesTable.conversationId, id));
  await db.delete(conversationsTable).where(eq(conversationsTable.id, id));

  res.json({ message: "Conversation deleted" });
});

conversationsRouter.post("/:id/messages", async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const id = parseInt(String(req.params["id"]), 10);
  const { content } = req.body as { content?: string };

  if (!content) {
    res.status(400).json({ error: "content is required" });
    return;
  }

  const [convo] = await db.select().from(conversationsTable)
    .where(and(eq(conversationsTable.id, id), eq(conversationsTable.userId, userId)))
    .limit(1);

  if (!convo) {
    res.status(404).json({ error: "Conversation not found" });
    return;
  }

  // Save user message
  await db.insert(messagesTable).values({
    conversationId: id,
    role: "user",
    content,
  });

  // Get conversation history
  const history = await db.select().from(messagesTable)
    .where(eq(messagesTable.conversationId, id))
    .orderBy(asc(messagesTable.createdAt));

  // Get user profile for context
  const [profile] = await db.select().from(userProfilesTable)
    .where(eq(userProfilesTable.userId, userId))
    .limit(1);

  const messages = history.map(m => ({ role: m.role as "user" | "assistant", content: m.content }));

  const aiContent = await generateAIResponse(messages, profile ? {
    age: profile.age ?? undefined,
    state: profile.state ?? undefined,
    income: profile.income ?? undefined,
    occupation: profile.occupation ?? undefined,
    gender: profile.gender ?? undefined,
    category: profile.category ?? undefined,
  } : undefined);

  const [aiMessage] = await db.insert(messagesTable).values({
    conversationId: id,
    role: "assistant",
    content: aiContent,
  }).returning();

  // Update conversation updatedAt
  await db.update(conversationsTable)
    .set({ updatedAt: new Date() })
    .where(eq(conversationsTable.id, id));

  // Auto-title if first message
  if (history.length <= 1 && convo.title === "New Conversation") {
    const autoTitle = content.length > 50 ? content.slice(0, 50) + "…" : content;
    await db.update(conversationsTable)
      .set({ title: autoTitle })
      .where(eq(conversationsTable.id, id));
  }

  res.status(201).json(aiMessage);
});
