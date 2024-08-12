"use client";

import { useState, useCallback } from "react";
import { Search } from "../ui";
import { mockConversations } from "../lib";
import { ConversationCard } from "../ui/conversation-card";

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
        <ConversationCard
          key={conversation.conversation_id}
          text={conversation.user2_name}
        />
      ))}
    </>
  );
}
