"use client";

import { useEffect, useMemo, useState } from "react";

import { Connection, fetchConnectionByCircle } from "@/app/lib";
import { SecondaryButton, Divider, Search, ConnectionCard } from "@/app/ui";
import { useRouter } from "next/navigation";

type CircleConnectionListProps = {
  circleName: string;
};

export function CircleConnectionList({
  circleName,
}: CircleConnectionListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [connections, setConnections] = useState<Connection[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function loadConnections() {
      const fetchedConnections = await fetchConnectionByCircle(circleName);
      setConnections(fetchedConnections);
    }
    loadConnections();
  }, [circleName]);

  const filteredConnections = useMemo(() => {
    return connections.filter((connection) =>
      connection.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [connections, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddConnection = () => {
    router.push("/connections/acquaintances/add");
  };

  return (
    <>
      {circleName == "acquaintances" && (
        <div className="w-full flex flex-col items-center">
          <SecondaryButton
            className="w-full max-w-none"
            onClick={handleAddConnection}
          >
            Add an acquaintance
          </SecondaryButton>
          <Divider text="or" />
        </div>
      )}
      <Search onSearch={handleSearch} />

      {filteredConnections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          text={connection.name}
          conversationId={connection.conversationId}
        />
      ))}
    </>
  );
}
