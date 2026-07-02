import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
});

export const insertUserSchema = createInsertSchema(usersTable).omit({ id: true, createdAt: true });
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof usersTable.$inferSelect;

export const userProfilesTable = sqliteTable("user_profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => usersTable.id),
  name: text("name").notNull(),
  state: text("state").notNull().default(""),
  age: integer("age").notNull().default(0),
  income: integer("income"),
  occupation: text("occupation"),
  gender: text("gender"),
  category: text("category"),
  createdAt: integer("created_at", { mode: "timestamp" }),
});

export const insertUserProfileSchema = createInsertSchema(userProfilesTable).omit({ id: true, createdAt: true });
export type InsertUserProfile = z.infer<typeof insertUserProfileSchema>;
export type UserProfile = typeof userProfilesTable.$inferSelect;

export const savedSchemesTable = sqliteTable("saved_schemes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => usersTable.id),
  schemeId: text("scheme_id").notNull(),
  notes: text("notes"),
  savedAt: integer("saved_at", { mode: "timestamp" }),
});

export const insertSavedSchemeSchema = createInsertSchema(savedSchemesTable).omit({ id: true, savedAt: true });
export type InsertSavedScheme = z.infer<typeof insertSavedSchemeSchema>;
export type SavedScheme = typeof savedSchemesTable.$inferSelect;

export const conversationsTable = sqliteTable("conversations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => usersTable.id),
  title: text("title").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const insertConversationSchema = createInsertSchema(conversationsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertConversation = z.infer<typeof insertConversationSchema>;
export type Conversation = typeof conversationsTable.$inferSelect;

export const applicationTrackingTable = sqliteTable("application_tracking", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => usersTable.id),
  schemeId: text("scheme_id").notNull(),
  status: text("status").notNull().default("not_started"),
  notes: text("notes"),
  appliedAt: integer("applied_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});
export type ApplicationTracking = typeof applicationTrackingTable.$inferSelect;

export const messagesTable = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  conversationId: integer("conversation_id").notNull().references(() => conversationsTable.id),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
});

export const insertMessageSchema = createInsertSchema(messagesTable).omit({ id: true, createdAt: true });
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messagesTable.$inferSelect;
