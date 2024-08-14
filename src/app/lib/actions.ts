import {
  fetchAllUsers,
  fetchAllConnections,
  insertConnection,
  searchUsers,
} from "@/db/queries";
import { User, Connection } from "@/app/lib";

export async function getAllUsers(): Promise<User[]> {
  return fetchAllUsers();
}

export async function getAllConnections(): Promise<Connection[]> {
  return fetchAllConnections();
}

export async function addNewConnection(
  userId: string,
  name: string,
  circleName: string
): Promise<Connection> {
  return insertConnection(userId, name, circleName);
}

export async function searchForUsers(searchTerm: string): Promise<User[]> {
  return searchUsers(searchTerm);
}
