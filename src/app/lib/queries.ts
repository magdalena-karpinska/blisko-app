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
  console.log("Getting all messages:", mockMessages);
  return mockMessages;
}
