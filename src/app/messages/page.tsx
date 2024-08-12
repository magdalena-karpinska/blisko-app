"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

import { Search } from "../ui";
import { mockConversations } from "../lib";
import { ConversationCard } from "../ui";

export default function AllConversations() {
  const [filteredConversations, setFilteredConversations] =
    useState(mockConversations);

  const handleSearch = useCallback((term: string) => {
    const filtered = mockConversations.filter((conversation) =>
      conversation.user2_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredConversations(filtered);
  }, []);

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredConversations.map((conversation) => (
        <Link
          className="w-full"
          href={`/messages/${conversation.conversation_id}`}
        >
          <ConversationCard
            key={conversation.conversation_id}
            text={conversation.user2_name}
          />
        </Link>
      ))}
    </>
  );
}
