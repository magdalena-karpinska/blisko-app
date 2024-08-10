"use client";

import {
  mockConnections,
  mockConversations,
  mockLoggedInUser,
  mockMessages,
} from "@/app/lib";
import { TextInput, ConversationComponent, PrimaryButton } from "@/app/ui";
import { useParams } from "next/navigation";

export default function Conversation() {
  const params = useParams();
  const conversationId = params.conversationId as string;

  const oneToOneConversation = mockConversations.find(
    (conversation) => conversation.conversation_id === conversationId
  );

  const conversationMessages = mockMessages.filter(
    (message) => message.conversation_id === conversationId
  );

  if (!oneToOneConversation) {
    return <div>Conversation not found. ID: {conversationId}</div>;
  }

  const user2 = mockConnections.find(
    (connection) => connection.name === oneToOneConversation.user2_name
  );
  if (!user2) {
    return <div>User not found. Name: {oneToOneConversation.user2_name}</div>;
  }

  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <ConversationComponent
        user2={user2}
        messages={conversationMessages}
        loggedInUser={mockLoggedInUser}
      />
      <div className="w-full max-w-2-xl flex space-x-2 ">
        <TextInput />
        <PrimaryButton>Send</PrimaryButton>
      </div>
    </main>
  );
}
