export type Connection = {
  id: string;
  userId: string;
  name: string;
  circleName: string;
  conversationId: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Conversation = {
  conversation_id: string | null;
  user2_name: string;
  messages: Message[];
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  timestamp: string;
};

export type LoggedInUser = {
  id: string;
  name: string;
  avatar: string;
};

export type EnhancedConnection = {
  id: string;
  userId: string;
  name: string;
  circleName: string;
  conversationId: string;
  messages: Message[];
};

export type CircleManagementState = {
  connections: EnhancedConnection[];
  addConnection: (user: User) => EnhancedConnection;
  sendMessage: (senderId: string, receiverId: string, content: string) => void;
  getConnectionsByCircle: (circleName: string) => EnhancedConnection[];
  getAllConnections: () => EnhancedConnection[];
  getConnection: (conversationId: string) => EnhancedConnection | undefined;
};
