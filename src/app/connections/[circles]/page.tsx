"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Connection, ConnectionsCircle, mockConnections } from "../../lib";
import {
  ConnectionCard,
  Divider,
  PrimaryButton,
  Search,
  SecondaryButton,
} from "../../ui";

export default function CirclePage() {
  const params = useParams();
  const circleName = params.circles as ConnectionsCircle;

  const [filteredConnections, setFilteredConnections] = useState<Connection[]>(
    []
  );

  useEffect(() => {
    const filtered = mockConnections.filter(
      (connection) => connection.circle === circleName
    );
    setFilteredConnections(filtered);
  }, [circleName]);

  const handleSearch = useCallback(
    (term: string) => {
      const filtered = mockConnections.filter(
        (connection) =>
          connection.circle === circleName &&
          connection.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredConnections(filtered);
    },
    [circleName]
  );

  return (
    <>
      {circleName == "acquaintances" && (
        <div className="w-full flex flex-col items-center">
          <SecondaryButton className="w-full max-w-none">
            Add an acquaintance
          </SecondaryButton>
          <Divider text="or" />
        </div>
      )}
      <Search onSearch={handleSearch} />

      {filteredConnections.map((connection) => (
        <ConnectionCard
          key={connection.name}
          text={connection.name}
          conversationId={connection.conversationId}
        />
      ))}
    </>
  );
}
