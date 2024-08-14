import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import {
  Message,
  CircleManagementState,
  User,
  EnhancedConnection,
} from "@/app/lib";
import { mockConnections, mockMessages, mockLoggedInUser } from "@/app/lib";

const friendsThreshold = 5;
const familyThreshold = 15;

export const countMessagesFromLast24h = (messages: Message[]): number => {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return messages.filter((message) => new Date(message.timestamp) > oneDayAgo)
    .length;
};

export const attachToCircle = (messages: Message[]): string => {
  const amountOfMessagesFromLast24h = countMessagesFromLast24h(messages);
  if (amountOfMessagesFromLast24h >= familyThreshold) {
    return "family";
  } else if (amountOfMessagesFromLast24h >= friendsThreshold) {
    return "friends";
  } else {
    return "acquaintances";
  }
};

const createEnhancedConnections = (): EnhancedConnection[] => {
  return mockConnections.map((connection) => ({
    ...connection,
    messages: mockMessages.filter(
      (message) => message.conversation_id === connection.conversationId
    ),
  }));
};

export const useCircleManagement = create<CircleManagementState>(
  (set, get) => ({
    connections: createEnhancedConnections(),
    addConnection: (user: User) => {
      const newConnection: EnhancedConnection = {
        id: uuidv4(),
        userId: user.id,
        name: user.name,
        circleName: "acquaintances",
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
        const newMessage: Message = {
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
                circleName: attachToCircle([
                  ...connection.messages,
                  newMessage,
                ]),
              }
            : connection
        );
        return { connections: updatedConnections };
      });
    },
    getConnectionsByCircle: (circleName: string) => {
      const connections = get().connections.filter(
        (connection) => connection.circleName === circleName
      );
      return connections;
    },
    getAllConnections: () => {
      return get().connections;
    },
    getConnection: (conversationId: string) => {
      return get().connections.find(
        (connection) => connection.conversationId === conversationId
      );
    },
  })
);
