import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const connections = pgTable("connections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  circle: varchar("circle", { length: 20 }).notNull(),
});
