import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  avatar: varchar("avatar", { length: 255 }).notNull(),
});

export const connectionsCircles = pgTable("connections_circles", {
  name: varchar("name", { length: 50 }).primaryKey().notNull(),
});

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const connections = pgTable("connections", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  circleName: varchar("circle_name", { length: 50 })
    .notNull()
    .default("acquaintances")
    .references(() => connectionsCircles.name),
  conversationId: uuid("conversation_id")
    .references(() => conversations.id)
    .notNull(),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  conversationId: uuid("conversation_id").references(() => conversations.id),
  senderId: uuid("sender_id").references(() => connections.id),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});
