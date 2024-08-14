import { db } from "./index"; // Import the 'raw' function from the 'index' file
import { eq, not, inArray, sql } from "drizzle-orm";
import { users, connections, conversations } from "@/db/schema";
import { Connection, User } from "@/app/lib";

export async function fetchAllUsers(): Promise<User[]> {
  return db.select().from(users);
}

export async function fetchAllConnections(): Promise<Connection[]> {
  return db.select().from(connections);
}

export async function fetchAvailableUsers(
  existingConnectionIds: string[]
): Promise<User[]> {
  return db
    .select()
    .from(users)
    .where(not(inArray(users.id, existingConnectionIds)));
}

export async function fetchConnectionsByCircle(circle: string) {
  return db
    .select()
    .from(connections)
    .where(eq(connections.circleName, circle));
}

export async function insertConnection(
  userId: string,
  name: string,
  circleName: string
): Promise<Connection> {
  const [newConversation] = await db
    .insert(conversations)
    .values({})
    .returning({ id: conversations.id });

  const conversationId = newConversation.id;

  const [newConnection] = await db
    .insert(connections)
    .values({
      userId,
      name,
      circleName,
      conversationId,
    })
    .returning();
  return newConnection;
}

export async function searchUsers(searchTerm: string): Promise<User[]> {
  const term = `%${searchTerm}%`;

  return db
    .select()
    .from(users)
    .where(sql`LOWER(${users.name}) LIKE LOWER(${term})`);
}
