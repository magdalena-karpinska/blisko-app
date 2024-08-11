"use client";

import { useParams } from "next/navigation";
import { ConnectionsCircle, mockConnections } from "../../lib";
import { ConnectionCard, SearchInput } from "../../ui";

export default function CirclePage() {
  const params = useParams();
  const circleName = params.circles as ConnectionsCircle;

  const connectionsInCircle = mockConnections.filter(
    (connection) => connection.circle === circleName
  );

  return (
    <>
      <SearchInput />
      {connectionsInCircle.map((connection) => (
        <ConnectionCard key={connection.name} text={connection.name} />
      ))}
    </>
  );
}
