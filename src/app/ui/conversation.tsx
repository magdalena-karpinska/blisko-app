"use client";

import { useEffect, useRef, useState } from "react";
import { Connection, fetchMessagesById, LoggedInUser, Message } from "../lib";
import { MyMessage, TheirMessage } from "./message";

export type ConversationProps = {
  user2: Connection | null;
  loggedInUser: LoggedInUser;
  conversationId: string;
};

export function Conversation({
  user2,
  loggedInUser,
  conversationId,
}: ConversationProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadMessages() {
      const fetchedMessages = await fetchMessagesById(conversationId);
      setMessages(fetchedMessages);
    }
    loadMessages();
  }, [conversationId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full space-y-4">
      {messages.map((message) =>
        message.senderId === loggedInUser.name ? (
          <MyMessage
            key={message.id}
            message={message.text}
            timestamp={message.timestamp}
            loggedInUser={loggedInUser}
          />
        ) : (
          <TheirMessage
            key={message.id}
            message={message.text}
            timestamp={message.timestamp}
            user={user2}
          />
        )
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
