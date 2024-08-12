"use client";

import { useState, useCallback, Suspense } from "react";
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
      <Suspense fallback={<div>Loading connections...</div>}>
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
      </Suspense>
    </>
  );
}
