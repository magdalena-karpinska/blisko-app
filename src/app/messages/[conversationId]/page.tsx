"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Connection, Message } from "@/app/lib"; // Make sure to import these types
import { useCircleManagement } from "@/app/lib";
import { TextInput, ConversationComponent, PrimaryButton } from "@/app/ui";

export default function Conversation() {
  const params = useParams();
  const conversationId = params.conversationId as string;

  const { getConnection, sendMessage } = useCircleManagement();
  const [inputValue, setInputValue] = useState<string>("");

  const [loggedInUser] = useState({
    id: "current_user",
    name: "Magdalena Karpińska",
    avatar: "/magdalena.webp",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Subscribe to the specific connection in the Zustand store
  const connection = useCircleManagement((state) =>
    state.connections.find(
      (c: Connection) => c.conversationId === conversationId
    )
  );

  useEffect(() => {
    if (!connection) {
      console.error("Connection not found for ID:", conversationId);
    }
  }, [connection, conversationId]);

  if (!connection) {
    return <div>Connection not found. ID: {conversationId}</div>;
  }

  // Sort messages by timestamp
  const conversationMessages = [...connection.messages].sort(
    (a: Message, b: Message) =>
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  // Autoscroll functionality
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationMessages]);

  const handleSendMessage = (content: string) => {
    if (content.trim() !== "") {
      sendMessage(loggedInUser.id, conversationId, content);
      setInputValue("");
    }
  };

  return (
    <>
      <ConversationComponent
        user2={connection}
        messages={conversationMessages}
        loggedInUser={loggedInUser}
        messagesEndRef={messagesEndRef}
      />
      <div className="w-full max-w-2-xl flex space-x-2 ">
        <TextInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onSend={handleSendMessage}
        />
        <PrimaryButton
          onClick={() => {
            handleSendMessage(inputValue);
          }}
          className="btn btn-primary"
        >
          Send
        </PrimaryButton>
      </div>
    </>
  );
}
