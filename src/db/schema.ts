import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  conversationId: varchar("conversation_id", { length: 50 }).notNull(),
  senderId: varchar("sender_id", { length: 50 }).notNull(),
  text: text("text").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});
