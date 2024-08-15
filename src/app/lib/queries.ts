"use server";

import {
  User,
  Connection,
  Conversation,
  Message,
  LoggedInUser,
} from "@/app/lib";
import {
  mockUsers,
  mockMessages,
  mockConnections,
  mockConversations,
  mockLoggedInUser,
} from "./mockData";
import postgres from "postgres";
import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(process.env.POSTGRES_URL as string);

const db = drizzle(client, { schema });

let currentConnections = [...mockConnections];
let currentConversations = [...mockConversations];

export async function getLoggedInUser(): Promise<LoggedInUser> {
  return mockLoggedInUser;
}
export async function getAllUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockUsers;
}

export async function updateConnections(
  newConnections: Connection[]
): Promise<void> {
  console.log("Updating connections:", newConnections);
  currentConnections = newConnections;
}

export async function getAllConnections(): Promise<Connection[]> {
  console.log("Getting all connections:", currentConnections);
  return currentConnections;
}

export async function getAllCircles(): Promise<string[]> {
  return ["acquaintances", "friends", "family"];
}

export async function updateConversations(
  newConversations: Conversation[]
): Promise<void> {
  console.log("Updating conversations:", newConversations);
  currentConversations = newConversations;
}

export async function getAllConversations(): Promise<Conversation[]> {
  console.log("Getting all conversations:", currentConversations);
  return currentConversations;
}

export async function getAllMessages(): Promise<Message[]> {
  return mockMessages;
}

export async function getMessagesByConversationId(
  conversationId: string
): Promise<Message[]> {
  return mockMessages.filter(
    (message) => message.conversationId === conversationId
  );
}

export async function insertMessage(message: any): Promise<void> {
  await db.insert(schema.messages).values(message);
  mockMessages.push(message);
}
