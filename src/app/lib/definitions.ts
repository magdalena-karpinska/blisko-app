export type ConnectionsCircle = "family" | "friends" | "acquaintances";

export type Connection = {
  id: string;
  name: string;
  circle: ConnectionsCircle;
  conversationId: string;
};

export type User = {
  id: string;
  name: string;
};

export type Conversation = {
  conversation_id: string | null;
  user2_name: string;
  messages: Message[];
};

export type Message = {
  message_id: string;
  conversation_id: string;
  sender_name: string;
  text: string;
  timestamp: string;
};

export type LoggedInUser = {
  id: string;
  name: string;
  avatar: string;
};

export type EnhancedConnection = Connection & {
  messages: Message[];
  circle: ConnectionsCircle;
};

export type CircleManagementState = {
  connections: EnhancedConnection[];
  addConnection: (user: User) => void;
  sendMessage: (senderId: string, receiverId: string, content: string) => void;
  getConnectionsByCircle: (circle: ConnectionsCircle) => EnhancedConnection[];
  getAllConnections: () => EnhancedConnection[];
  getConnection: (userId: string) => EnhancedConnection | undefined;
};
