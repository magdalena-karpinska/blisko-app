"use client";

import { useMemo, useState } from "react";

import { Connection } from "@/app/lib";
import { Circle, Search } from "@/app/ui";

type ConnectionListProps = {
  connections: Connection[];
};

export function ConnectionList({ connections }: ConnectionListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const connectionsByCircle = useMemo(() => {
    const groupedConnections: Record<string, Connection[]> = {};

    connections.forEach((connection) => {
      if (!groupedConnections[connection.circleName]) {
        groupedConnections[connection.circleName] = [];
      }

      groupedConnections[connection.circleName].push(connection);
    });
    return groupedConnections;
  }, [connections]);

  const filteredConnectionsByCircle = useMemo(() => {
    const result: Record<string, Connection[]> = {};

    for (const circleName in connectionsByCircle) {
      const filteredConnections = connectionsByCircle[circleName].filter(
        (connection) =>
          connection.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      result[circleName] = filteredConnections;
    }
    return result;
  }, [connections, searchTerm]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {Object.keys(filteredConnectionsByCircle).map((circleName) => (
        <Circle
          key={circleName}
          name={circleName}
          connections={filteredConnectionsByCircle[circleName]}
        />
      ))}
    </>
  );
}
