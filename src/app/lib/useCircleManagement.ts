import { useState, useCallback, useEffect } from "react";
import {
  Connection,
  User,
  Message,
  getMessagesForConversation,
} from "@/app/lib";
import {
  getAllConnections,
  addConnection as addConnectionAction,
  sendMessage as sendMessageAction,
} from "@/app/lib";

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

export const useCircleManagement = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConnections = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedConnections = await getAllConnections();
      setConnections(fetchedConnections);
    } catch (error) {
      setError("Failed to fetch connections. Please try again later.");
      console.error("Error fetching connections:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  const addConnection = useCallback(
    async (user: User, circleName: string = "acquaintances") => {
      try {
        const newConnection = await addConnectionAction(
          user.id,
          user.name,
          circleName
        );
        setConnections((prevConnections) => [
          ...prevConnections,
          newConnection,
        ]);
        return newConnection;
      } catch (error) {
        setError("Failed to add connection. Please try again.");
        console.error("Error adding connection:", error);
      }
    },
    []
  );

  const sendMessage = useCallback(
    async (senderId: string, conversationId: string, content: string) => {
      try {
        await sendMessageAction(senderId, conversationId, content);
        // After sending the message, fetch the updated messages for this conversation
        const updatedMessages = await getMessagesForConversation(
          conversationId
        );
        // Update the local state with the new messages
        setConnections((prevConnections) =>
          prevConnections.map((conn) =>
            conn.conversationId === conversationId
              ? { ...conn, messages: updatedMessages }
              : conn
          )
        );
      } catch (error) {
        setError("Failed to send message. Please try again.");
        console.error("Error sending message:", error);
      }
    },
    []
  );

  const getConnectionsByCircle = useCallback(
    (circleName: string) => {
      return connections.filter(
        (connection) => connection.circleName === circleName
      );
    },
    [connections]
  );

  const getConnection = useCallback(
    (conversationId: string) => {
      return connections.find(
        (connection) => connection.conversationId === conversationId
      );
    },
    [connections]
  );

  return {
    connections,
    loading,
    error,
    fetchConnections,
    addConnection,
    sendMessage,
    getConnectionsByCircle,
    getAllConnections: () => connections,
    getConnection,
  };
};
