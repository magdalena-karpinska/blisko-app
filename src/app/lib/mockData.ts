import {
  Connection,
  ConnectionsCircle,
  Conversation,
  LoggedInUser,
  Message,
} from ".";

export const mockLoggedInUser: LoggedInUser = {
  id: "current_user",
  name: "Magdalena Karpińska",
  avatar: "/magdalena.webp",
};

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
    sender_name: mockLoggedInUser.name,
    text: "How are you?!",
    timestamp: "2024-08-10T12:06:00Z",
  },
  {
    message_id: "2",
    conversation_id: "1",
    sender_name: "Ines Acedo Leventopoulou",
    text: "Hej! What's up?",
    timestamp: "2024-08-10T12:07:00Z",
  },
  {
    message_id: "3",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "I'm good, thanks!",
    timestamp: "2024-08-10T12:08:00Z",
  },
  {
    message_id: "4",
    conversation_id: "1",
    sender_name: "Ines Acedo Leventopoulou",
    text: "Great to hear!",
    timestamp: "2024-08-10T12:09:00Z",
  },
  {
    message_id: "5",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "How was your day?",
    timestamp: "2024-08-10T12:10:00Z",
  },
  {
    message_id: "6",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "It was good, thanks!",
    timestamp: "2024-08-10T12:11:00Z",
  },
  {
    message_id: "7",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "What did you do?",
    timestamp: "2024-08-10T12:12:00Z",
  },
  {
    message_id: "8",
    conversation_id: "1",
    sender_name: "Ines Acedo Leventopoulou",
    text: "I went to the park with my dog",
    timestamp: "2024-08-10T12:13:00Z",
  },
  {
    message_id: "9",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "That sounds fun!",
    timestamp: "2024-08-10T12:14:00Z",
  },
  {
    message_id: "10",
    conversation_id: "1",
    sender_name: "Ines Acedo Leventopoulou",
    text: "It was!",
    timestamp: "2024-08-10T12:15:00Z",
  },
  {
    message_id: "11",
    conversation_id: "1",
    sender_name: mockLoggedInUser.name,
    text: "I have to go now, talk to you later!",
    timestamp: "2024-08-10T12:16:00Z",
  },
  {
    message_id: "12",
    conversation_id: "1",
    sender_name: "Ines Acedo Leventopoulou",
    text: "Bye!",
    timestamp: "2024-08-10T12:17:00Z",
  },
];
