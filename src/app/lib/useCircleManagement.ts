import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import {
  Message,
  ConnectionsCircle,
  CircleManagementState,
  User,
  EnhancedConnection,
} from "@/app/lib";
import { mockConnections, mockMessages, mockLoggedInUser } from "@/app/lib";

const friendsTreshold = 5;
const familyTreshold = 15;

export const countMessagesFromLast24h = (messages: Message[]): number => {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return messages.filter((message) => new Date(message.timestamp) > oneDayAgo)
    .length;
};

export const attachToCircle = (messages: Message[]): ConnectionsCircle => {
  const amountOfMessagesFromLast24h = countMessagesFromLast24h(messages);
  if (amountOfMessagesFromLast24h >= familyTreshold) {
    return "family";
  } else if (amountOfMessagesFromLast24h >= friendsTreshold) {
    return "friends";
  } else {
    return "acquaintances";
  }
};

// Helper function to merge mockConnections and mockMessages
const createEnhancedConnections = (): EnhancedConnection[] => {
  return mockConnections.map((connection) => ({
    ...connection,
    messages: mockMessages.filter(
      (message) => message.conversation_id === connection.conversationId
    ),
  }));
};

// Create a new store using zustand
export const useCircleManagement = create<CircleManagementState>(
  (set, get) => ({
    connections: createEnhancedConnections(),
    addConnection: (user: User) => {
      const newConnection = {
        id: user.id,
        name: user.name,
        circle: "acquaintances" as ConnectionsCircle,
        conversationId: uuidv4(),
        messages: [],
      };
      set((state) => ({
        connections: [...state.connections, newConnection],
      }));
      return newConnection;
    },
    sendMessage: (
      senderId: string,
      conversationId: string,
      content: string
    ) => {
      set((state) => {
        const newMessage = {
          message_id: uuidv4(),
          conversation_id: conversationId,
          sender_name: mockLoggedInUser.name,
          text: content,
          timestamp: new Date().toISOString(),
        };
        const updatedConnections = state.connections.map((connection) =>
          connection.conversationId === conversationId
            ? {
                ...connection,
                messages: [...connection.messages, newMessage],
                circle: attachToCircle([...connection.messages, newMessage]),
              }
            : connection
        );
        return { connections: updatedConnections };
      });
    },
    getConnectionsByCircle: (circle: ConnectionsCircle) => {
      const connections = get().connections.filter(
        (connection) => connection.circle === circle
      );
      return connections;
    },
    getAllConnections: () => {
      const connections = get().connections;
      return connections;
    },
    getConnection: (conversationId: string) => {
      const connection = get().connections.find(
        (connection) => connection.conversationId === conversationId
      );
      return connection;
    },
  })
);
