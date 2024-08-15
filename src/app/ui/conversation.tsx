"use client";

import { useEffect, useRef, useState } from "react";
import {
  Connection,
  fetchMessagesById,
  LoggedInUser,
  Message,
  sendMessage,
} from "../lib";
import { MyMessage, TheirMessage } from "./message";
import { TextInput } from "./inputs";
import { PrimaryButton } from "./buttons";

export type ConversationProps = {
  user2: Connection | null;
  loggedInUser: LoggedInUser;
  conversationId: string;
  messages: Message[];
};

export function Conversation({
  messages,
  user2,
  loggedInUser,
  conversationId,
}: ConversationProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = async (text: string) => {
    console.log("Sending message:", text);

    if (text.trim() !== "") {
      await sendMessage(loggedInUser.id, conversationId, text);
      setInputValue("");
    }
  };

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
      <div className="w-full max-w-2-xl flex space-x-2 ">
        <TextInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <PrimaryButton
          onClick={() => {
            console.log("Sending message:", inputValue);

            handleSendMessage(inputValue);
          }}
          className="btn btn-primary"
        >
          Send
        </PrimaryButton>
      </div>
    </div>
  );
}
