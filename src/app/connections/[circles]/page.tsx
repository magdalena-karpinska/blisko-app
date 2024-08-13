"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Connection, ConnectionsCircle, useCircleManagement } from "@/app/lib";
import { ConnectionCard, Divider, Search, SecondaryButton } from "@/app/ui";

export default function CirclePage() {
  const params = useParams();
  const router = useRouter();
  const circleName = params.circles as ConnectionsCircle;

  const { getConnectionsByCircle, getAllConnections } = useCircleManagement();

  const [filteredConnections, setFilteredConnections] = useState<Connection[]>(
    []
  );

  useEffect(() => {
    const connections = getConnectionsByCircle(circleName);
    setFilteredConnections(connections);
  }, [circleName, getConnectionsByCircle]);

  const handleSearch = useCallback(
    (term: string) => {
      const allConnections = getAllConnections();
      const filtered = allConnections.filter(
        (connection) =>
          connection.circle === circleName &&
          connection.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredConnections(filtered);
    },
    [circleName, getAllConnections]
  );

  const handleAddAcquaintance = () => {
    router.push("/connections/acquaintances/add");
  };

  return (
    <>
      {circleName == "acquaintances" && (
        <div className="w-full flex flex-col items-center">
          <SecondaryButton
            className="w-full max-w-none"
            onClick={handleAddAcquaintance}
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
