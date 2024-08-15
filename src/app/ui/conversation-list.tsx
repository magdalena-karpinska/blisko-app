"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { Conversation } from "@/app/lib";
import { Search, ConversationCard } from "@/app/ui";

type ConversationListProps = {
  conversations: Conversation[];
};

export function ConversationList({ conversations }: ConversationListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) =>
      conversation.user2_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [conversations, searchTerm]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredConversations.map((conversation) => (
        <Link
          key={conversation.conversation_id}
          className="w-full"
          href={`/messages/${conversation.conversation_id}`}
        >
          <ConversationCard text={conversation.user2_name} />
        </Link>
      ))}
    </>
  );
}
