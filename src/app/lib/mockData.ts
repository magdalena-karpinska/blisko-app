import { Connection, ConnectionsCircle, Conversation, Message } from ".";

export const mockConnections: Connection[] = [
  {
    id: "1",
    name: "Ines Acedo Leventopoulou",
    circle: "friends",
  },
  {
    id: "2",
    name: "Agnese Ventrella",
    circle: "friends",
  },
  {
    id: "3",
    name: "Monika Adamczyk-Majewska",
    circle: "friends",
  },
  {
    id: "4",
    name: "Bernadeta Karpińska",
    circle: "family",
  },
  {
    id: "5",
    name: "Krzysztof Karpiński",
    circle: "family",
  },
  {
    id: "6",
    name: "Jonathan Zeray",
    circle: "acquaintances",
  },
  {
    id: "6",
    name: "Robin Sahin",
    circle: "acquaintances",
  },
];

export function getAllCircles(): ConnectionsCircle[] {
  return ["acquaintances", "friends", "family"];
}

export const mockConversations: Conversation[] = [
  {
    conversation_id: "1",
    user2_name: mockConnections[0].name,
    messages: [],
  },
  {
    conversation_id: "2",
    user2_name: mockConnections[1].name,
    messages: [],
  },
  {
    conversation_id: "3",
    user2_name: mockConnections[2].name,
    messages: [],
  },
  {
    conversation_id: "4",
    user2_name: mockConnections[3].name,
    messages: [],
  },
  {
    conversation_id: "5",
    user2_name: mockConnections[4].name,
    messages: [],
  },
];

export const mockMessages: Message[] = [
  {
    message_id: "1",
    conversation_id: "1",
    sender_id: "1",
    text: "How are you?!",
  },
  {
    message_id: "2",
    conversation_id: "1",
    sender_id: "2",
    text: "Hej! What's up?",
  },
  {
    message_id: "3",
    conversation_id: "1",
    sender_id: "1",
    text: "I'm good, thanks!",
  },
  {
    message_id: "4",
    conversation_id: "1",
    sender_id: "2",
    text: "Great to hear!",
  },
  {
    message_id: "5",
    conversation_id: "1",
    sender_id: "1",
    text: "How was your day?",
  },
  {
    message_id: "6",
    conversation_id: "1",
    sender_id: "2",
    text: "It was good, thanks!",
  },
  {
    message_id: "7",
    conversation_id: "1",
    sender_id: "1",
    text: "What did you do?",
  },
  {
    message_id: "8",
    conversation_id: "1",
    sender_id: "2",
    text: "I went to the park with my dog",
  },
  {
    message_id: "9",
    conversation_id: "1",
    sender_id: "1",
    text: "That sounds fun!",
  },
  {
    message_id: "10",
    conversation_id: "1",
    sender_id: "2",
    text: "It was!",
  },
  {
    message_id: "11",
    conversation_id: "1",
    sender_id: "1",
    text: "I have to go now, talk to you later!",
  },
  {
    message_id: "12",
    conversation_id: "1",
    sender_id: "2",
    text: "Bye!",
  },
];
