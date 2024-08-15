import { uuid } from "drizzle-orm/pg-core";
import {
  Conversation,
  getAllUsers,
  getLoggedInUser,
  getAllMessages,
  Message,
  User,
  Connection,
  getAllConnections,
  updateConnections,
  updateConversations,
  mockMessages,
} from ".";
import { getAllConversations } from ".";

export async function fetchConversations(): Promise<Conversation[]> {
  try {
    const conversations = await getAllConversations();
    return conversations;
  } catch (error) {
    console.error("Error fetching conversations", error);
    return [];
  }
}

export async function fetchMessagesById(
  conversationId: string
): Promise<Message[]> {
  try {
    const allMessages = await getAllMessages();

    const conversationMessages = allMessages.filter(
      (message) => message.conversationId === conversationId
    );

    const sortedMessages = conversationMessages.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    return sortedMessages;
  } catch (error) {
    console.error("Error fetching messages", error);
    return [];
  }
}

export async function fetchUserById(userId: string): Promise<User> {
  const allUsers = await getAllUsers();

  try {
    const user = allUsers.find((user) => user.id === userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    return user;
  } catch (error) {
    console.error("Error fetching user", error);
    throw error;
  }
}

export async function fetchLoggedInUser(): Promise<User> {
  try {
    const loggedInUser = await getLoggedInUser();
    return loggedInUser;
  } catch (error) {
    console.error("Error fetching conversations", error);
    throw error;
  }
}

export async function fetchConnectionById(
  id: string
): Promise<Connection | null> {
  try {
    console.log(`Fetching connection with id: ${id}`);
    const allConnections = await getAllConnections();
    console.log("All connections:", allConnections);

    const connection = allConnections.find(
      (connection) => connection.conversationId === id
    );

    if (!connection) {
      console.log(`No connection found with id ${id}`);
      return null;
    }

    console.log("Found connection:", connection);
    return connection;
  } catch (error) {
    console.error("Error fetching connection", error);
    throw error;
  }
}

export async function fetchAllConnections(): Promise<Connection[]> {
  try {
    const connections = await getAllConnections();
    return connections;
  } catch (error) {
    console.error("Error fetching connections", error);
    return [];
  }
}

export async function fetchConnectionByCircle(
  circleName: string
): Promise<Connection[]> {
  try {
    const allConnections = await getAllConnections();
    const circleConnections = allConnections.filter(
      (connection) => connection.circleName === circleName
    );
    return circleConnections;
  } catch (error) {
    console.error("Error fetching connections", error);
    return [];
  }
}

export async function fetchAvailableUsers(): Promise<User[]> {
  try {
    const [allUsers, allConnections] = await Promise.all([
      getAllUsers(),
      fetchAllConnections(),
    ]);

    const availableUsers = allUsers.filter(
      (user) =>
        !allConnections.some((connection) => connection.userId === user.id)
    );
    return availableUsers;
  } catch (error) {
    console.error("Error fetching available users", error);
    throw new Error("Error fetching available users");
  }
}

export async function addConnection(user: User): Promise<Connection[]> {
  try {
    console.log("Adding new connection for user:", user);
    const currentConnections = await getAllConnections();
    const currentConversations = await getAllConversations();

    const existingConnection = currentConnections.some(
      (connection) => connection.userId === user.id
    );

    if (existingConnection) {
      throw new Error("This user is already a connection");
    }

    const newConnection: Connection = {
      id: user.id,
      userId: user.id,
      name: user.name,
      circleName: "acquaintances",
      conversationId: user.id,
    };

    const newConversation: Conversation = {
      conversation_id: user.id,
      user2_name: user.name,
      messages: [],
    };

    console.log("Current connections before adding:", currentConnections);
    currentConnections.push(newConnection);
    currentConversations.push(newConversation);

    console.log(
      "Added connection and conversation",
      newConnection,
      newConversation
    );
    console.log("Updated connections:", currentConnections);

    await updateMockData(currentConnections, currentConversations);

    return currentConnections;
  } catch (error) {
    console.error("Error adding connection", error);
    throw error;
  }
}

export async function sendMessage(
  senderId: string,
  conversationId: string,
  text: string
): Promise<any> {
  try {
    const newMessage: Message = {
      id: Math.random.toString(),
      senderId: senderId,
      text: text,
      conversationId: conversationId,
      timestamp: new Date().toISOString(),
    };

    mockMessages.push(newMessage);
  } catch (error) {
    console.error("Error adding connection", error);
    throw error;
  }
}

async function updateMockData(
  connections: Connection[],
  conversations: Conversation[]
) {
  await Promise.all([
    updateConnections(connections),
    updateConversations(conversations),
  ]);
}
