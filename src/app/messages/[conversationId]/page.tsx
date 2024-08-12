"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";

import {
  mockConnections,
  mockConversations,
  mockLoggedInUser,
  mockMessages,
} from "@/app/lib";
import { TextInput, ConversationComponent, PrimaryButton } from "@/app/ui";

export default function Conversation() {
  const params = useParams();
  const conversationId = params.conversationId as string;

  // To scroll to the bottom of the chat
  // Create a reference to the last message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // To find a proper conversation
  const oneToOneConversation = mockConversations.find(
    (conversation) => conversation.conversation_id === conversationId
  );

  //  To filter messages by conversation id and sort them by timestamp
  const conversationMessages = mockMessages
    .filter((message) => message.conversation_id === conversationId)
    .sort(
      (a, b) =>
        // Fromt o oldest to the newest
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

  // Autoscroll functionality
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Call the function when the conversationMessages change
  useEffect(() => {
    scrollToBottom();
  }, [conversationMessages]);

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
    <>
      <ConversationComponent
        user2={user2}
        messages={conversationMessages}
        loggedInUser={mockLoggedInUser}
        messagesEndRef={messagesEndRef}
      />
      <div className="w-full max-w-2-xl flex space-x-2 ">
        <TextInput />
        <PrimaryButton>Send</PrimaryButton>
      </div>
    </>
  );
}
