"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

import { Connection, ConnectionsCircle, mockConnections } from "../../lib";
import { ConnectionCard, Search } from "../../ui";

export default function CirclePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const circleName = params.circles as ConnectionsCircle;

  const [filteredConnections, setFilteredConnections] = useState<Connection[]>(
    () => {
      const initialSearchTerm = searchParams.get("query") || "";
      return mockConnections.filter(
        (connection) =>
          connection.circle === circleName &&
          connection.name
            .toLowerCase()
            .includes(initialSearchTerm.toLowerCase())
      );
    }
  );

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
      <Search onSearch={handleSearch} />
      {filteredConnections.map((connection) => (
        <ConnectionCard key={connection.name} text={connection.name} />
      ))}
    </>
  );
}
