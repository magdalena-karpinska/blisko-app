"use client";

import { useParams } from "next/navigation";
import { ConnectionsCircle, mockConnections } from "../../lib";
import { Circle, ConnectionCard, SearchInput } from "../../ui";

export default function CirclePage() {
  const params = useParams();
  const circleName = params.circles as ConnectionsCircle;

  const connectionsInCircle = mockConnections.filter(
    (connection) => connection.circle === circleName
  );

  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <SearchInput />
      {connectionsInCircle.map((connection) => (
        <ConnectionCard key={connection.name} text={connection.name} />
      ))}
    </main>
  );
}
