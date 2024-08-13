"use client";

import { useState, useCallback, Suspense } from "react";
import Link from "next/link";

import { Search, ConversationCard } from "@/app/ui";
import { useCircleManagement } from "@/app/lib";

export default function AllConversations() {
  const { getAllConnections } = useCircleManagement();
  const [searchTerm, setSearchTerm] = useState("");

  const allConnections = getAllConnections();

  const filteredConversations = allConnections.filter((connection) =>
    connection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading connections...</div>}>
        <Search onSearch={handleSearch} />
        {filteredConversations.map((conversation) => (
          <Link
            key={conversation.conversationId}
            className="w-full"
            href={`/messages/${conversation.conversationId}`}
          >
            <ConversationCard text={conversation.name} />
          </Link>
        ))}
      </Suspense>
    </>
  );
}
