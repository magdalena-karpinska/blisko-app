"use server";

import {
  fetchAllUsers,
  fetchAllConnections,
  insertConnection,
  searchUsers,
  insertMessage,
  fetchMessagesForConversation,
} from "@/db/queries";
import { User, Connection, Message } from "@/app/lib";

export async function getAllUsers(): Promise<User[]> {
  return fetchAllUsers();
}

export async function getAllConnections(): Promise<Connection[]> {
  return fetchAllConnections();
}

export async function addConnection(
  userId: string,
  name: string,
  circleName: string
): Promise<Connection> {
  return insertConnection(userId, name, circleName);
}

export async function searchForUsers(searchTerm: string): Promise<User[]> {
  return searchUsers(searchTerm);
}

export async function sendMessage(
  senderId: string,
  conversationId: string,
  text: string
): Promise<void> {
  await insertMessage(senderId, conversationId, text);
}

export async function getMessagesForConversation(
  conversationId: string
): Promise<Message[]> {
  const messages = await fetchMessagesForConversation(conversationId);
  return messages.map((msg) => ({
    ...msg,
    timestamp: msg.timestamp.toISOString(),
  }));
}
