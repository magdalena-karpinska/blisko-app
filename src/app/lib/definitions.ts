export type ConnectionsCircle = "family" | "friends" | "acquaintances";

export type Connection = {
  id: string;
  name: string;
  circle: ConnectionsCircle;
};

export type Conversation = {
  conversation_id: string;
  user2_name: string;
  messages: Message[];
};

export type Message = {
  message_id: string;
  conversation_id: string;
  sender_id: string;
  text: string;
};
