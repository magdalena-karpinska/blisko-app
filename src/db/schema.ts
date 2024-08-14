import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  avatar: varchar("avatar", { length: 255 }).notNull(),
});

export const connectionsCircles = pgTable("connections", {
  name: varchar("name", { length: 50 }).primaryKey(),
});

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const connections = pgTable("connections", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  circleName: varchar("circle_name", { length: 50 }).references(
    () => connectionsCircles.name
  ),
  conversationId: uuid("conversation_id").references(() => conversations.id),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").references(() => conversations.id),
  senderId: uuid("sender_id").references(() => connections.id),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  connections: many(connections),
}));

export const conversationsRelations = relations(conversations, ({ many }) => ({
  connections: many(connections),
  messages: many(messages),
}));

export const connectionsCirclesRelations = relations(
  connectionsCircles,
  ({ many }) => ({
    connections: many(connections),
  })
);

export const connectionsRelations = relations(connections, ({ one, many }) => ({
  user: one(users, {
    fields: [connections.userId],
    references: [users.id],
  }),
  conversation: one(conversations, {
    fields: [connections.conversationId],
    references: [conversations.id],
  }),
  circle: one(connectionsCircles, {
    fields: [connections.circleName],
    references: [connectionsCircles.name],
  }),
  messages: many(messages),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  conversation: one(conversations, {
    fields: [messages.conversationId],
    references: [conversations.id],
  }),
  sender: one(connections, {
    fields: [messages.senderId],
    references: [connections.id],
  }),
}));
