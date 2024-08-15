import { Connection, Conversation, LoggedInUser, Message, User } from ".";

export const mockLoggedInUser: LoggedInUser = {
  id: "current_user",
  name: "Magdalena Karpińska",
  avatar: "/magdalena.webp",
};

export async function getLoggedInUser(): Promise<LoggedInUser> {
  return mockLoggedInUser;
}

export const mockUsers: User[] = [
  {
    id: "100",
    name: "Anna Kowalska",
    avatar: "",
  },
  {
    id: "101",
    name: "Krystyna Kowalska",
    avatar: "",
  },
  {
    id: "102",
    name: "Anita Kowalska",
    avatar: "",
  },
  {
    id: "103",
    name: "Halina Kowalska",
    avatar: "",
  },
  {
    id: "104",
    name: "Magdalena Kowalska",
    avatar: "",
  },
  {
    id: "105",
    name: "Aleksandra Kowalska",
    avatar: "",
  },
];

export async function getAllUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockUsers;
}

export const mockConnections: Connection[] = [
  {
    id: "1",
    userId: "1",
    name: "Ines Acedo Leventopoulou",
    circleName: "friends",
    conversationId: "1",
  },
  {
    id: "2",
    userId: "2",
    name: "Agnese Ventrella",
    circleName: "friends",
    conversationId: "2",
  },
  {
    id: "3",
    userId: "3",
    name: "Monika Adamczyk-Majewska",
    circleName: "friends",
    conversationId: "3",
  },
  {
    id: "4",
    userId: "4",
    name: "Bernadeta Karpińska",
    circleName: "family",
    conversationId: "4",
  },
  {
    id: "5",
    userId: "5",
    name: "Krzysztof Karpiński",
    circleName: "family",
    conversationId: "5",
  },
  {
    id: "6",
    userId: "6",
    name: "Jonathan Zeray",
    circleName: "acquaintances",
    conversationId: "6",
  },
  {
    id: "7",
    userId: "7",
    name: "Robin Sahin",
    circleName: "acquaintances",
    conversationId: "7",
  },
  {
    id: "100",
    userId: "100",
    name: "Anna Kowalska",
    circleName: "acquaintances",
    conversationId: "100",
  },
];

let currentConnections = [...mockConnections];

export async function updateConnections(
  newConnections: Connection[]
): Promise<void> {
  console.log("Updating connections:", newConnections);
  currentConnections = newConnections;
}

export async function getAllConnections(): Promise<Connection[]> {
  console.log("Getting all connections:", currentConnections);
  return currentConnections;
}

export async function getAllCircles(): Promise<string[]> {
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
  {
    conversation_id: "6",
    user2_name: mockConnections[5].name,
    messages: [],
  },
  {
    conversation_id: "7",
    user2_name: mockConnections[6].name,
    messages: [],
  },
];

let currentConversations = [...mockConversations];

export async function updateConversations(
  newConversations: Conversation[]
): Promise<void> {
  console.log("Updating conversations:", newConversations);
  currentConversations = newConversations;
}

export async function getAllConversations(): Promise<Conversation[]> {
  console.log("Getting all conversations:", currentConversations);
  return currentConversations;
}

export const mockMessages: Message[] = [
  {
    id: "1",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "How are you?!",
    timestamp: "2024-08-10T12:06:00Z",
  },
  {
    id: "2",
    conversationId: "1",
    senderId: "Ines Acedo Leventopoulou",
    text: "Hej! What's up?",
    timestamp: "2024-08-10T12:07:00Z",
  },
  {
    id: "3",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "I'm good, thanks!",
    timestamp: "2024-08-10T12:08:00Z",
  },
  {
    id: "4",
    conversationId: "1",
    senderId: "Ines Acedo Leventopoulou",
    text: "Great to hear!",
    timestamp: "2024-08-10T12:09:00Z",
  },
  {
    id: "5",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "How was your day?",
    timestamp: "2024-08-10T12:10:00Z",
  },
  {
    id: "6",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "It was good, thanks!",
    timestamp: "2024-08-10T12:11:00Z",
  },
  {
    id: "7",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "What did you do?",
    timestamp: "2024-08-10T12:12:00Z",
  },
  {
    id: "8",
    conversationId: "1",
    senderId: "Ines Acedo Leventopoulou",
    text: "I went to the park with my dog",
    timestamp: "2024-08-10T12:13:00Z",
  },
  {
    id: "9",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "That sounds fun!",
    timestamp: "2024-08-10T12:14:00Z",
  },
  {
    id: "10",
    conversationId: "1",
    senderId: "Ines Acedo Leventopoulou",
    text: "It was!",
    timestamp: "2024-08-10T12:15:00Z",
  },
  {
    id: "11",
    conversationId: "1",
    senderId: mockLoggedInUser.name,
    text: "I have to go now, talk to you later!",
    timestamp: "2024-08-10T12:16:00Z",
  },
  {
    id: "12",
    conversationId: "1",
    senderId: "Ines Acedo Leventopoulou",
    text: "Bye!",
    timestamp: "2024-08-10T12:17:00Z",
  },
  {
    id: "1",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "How are you?!",
    timestamp: "2024-08-10T12:06:00Z",
  },
  {
    id: "2",
    conversationId: "6",
    senderId: "Jonathan Zeray",
    text: "Hej! What's up?",
    timestamp: "2024-08-10T12:07:00Z",
  },
  {
    id: "3",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "I'm good, thanks!",
    timestamp: "2024-08-10T12:08:00Z",
  },
  {
    id: "4",
    conversationId: "6",
    senderId: "Jonathan Zeray",
    text: "Great to hear!",
    timestamp: "2024-08-10T12:09:00Z",
  },
  {
    id: "5",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "How was your day?",
    timestamp: "2024-08-10T12:10:00Z",
  },
  {
    id: "6",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "It was good, thanks!",
    timestamp: "2024-08-10T12:11:00Z",
  },
  {
    id: "7",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "What did you do?",
    timestamp: "2024-08-10T12:12:00Z",
  },
  {
    id: "8",
    conversationId: "6",
    senderId: "Jonathan Zeray",
    text: "I went to the park with my dog",
    timestamp: "2024-08-10T12:13:00Z",
  },
  {
    id: "9",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "That sounds fun!",
    timestamp: "2024-08-10T12:14:00Z",
  },
  {
    id: "10",
    conversationId: "6",
    senderId: "Jonathan Zeray",
    text: "It was!",
    timestamp: "2024-08-10T12:15:00Z",
  },
  {
    id: "11",
    conversationId: "6",
    senderId: mockLoggedInUser.name,
    text: "I have to go now, talk to you later!",
    timestamp: "2024-08-10T12:16:00Z",
  },
  {
    id: "12",
    conversationId: "6",
    senderId: "Jonathan Zeray",
    text: "Bye!",
    timestamp: "2024-08-10T12:17:00Z",
  },
  {
    id: "1",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "How are you?!",
    timestamp: "2024-08-10T12:06:00Z",
  },
  {
    id: "2",
    conversationId: "4",
    senderId: "Bernadeta Karpińska",
    text: "Hej! What's up?",
    timestamp: "2024-08-10T12:07:00Z",
  },
  {
    id: "3",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "I'm good, thanks!",
    timestamp: "2024-08-10T12:08:00Z",
  },
  {
    id: "4",
    conversationId: "4",
    senderId: "Bernadeta Karpińska",
    text: "Great to hear!",
    timestamp: "2024-08-10T12:09:00Z",
  },
  {
    id: "5",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "How was your day?",
    timestamp: "2024-08-10T12:10:00Z",
  },
  {
    id: "6",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "It was good, thanks!",
    timestamp: "2024-08-10T12:11:00Z",
  },
  {
    id: "7",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "What did you do?",
    timestamp: "2024-08-10T12:12:00Z",
  },
  {
    id: "8",
    conversationId: "4",
    senderId: "Bernadeta Karpińska",
    text: "I went to the park with my dog",
    timestamp: "2024-08-10T12:13:00Z",
  },
  {
    id: "9",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "That sounds fun!",
    timestamp: "2024-08-10T12:14:00Z",
  },
  {
    id: "10",
    conversationId: "4",
    senderId: "Bernadeta Karpińska",
    text: "It was!",
    timestamp: "2024-08-10T12:15:00Z",
  },
  {
    id: "11",
    conversationId: "4",
    senderId: mockLoggedInUser.name,
    text: "I have to go now, talk to you later!",
    timestamp: "2024-08-10T12:16:00Z",
  },
  {
    id: "12",
    conversationId: "4",
    senderId: "Bernadeta Karpińska",
    text: "Bye!",
    timestamp: "2024-08-10T12:17:00Z",
  },
];

export async function getAllMessages(): Promise<Message[]> {
  console.log("Getting all messages:", mockMessages);
  return mockMessages;
}
