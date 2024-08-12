"use client";

import { useState, useCallback } from "react";

import {
  mockConnections,
  ConnectionsCircle,
  Connection,
  getAllCircles,
} from "../lib";

import { Circle, Search } from "../ui";

export default function ConnectionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const connectionsInCircles = mockConnections.reduce(
    (acc, connection) => {
      if (acc[connection.circle]) {
        acc[connection.circle].push(connection);
      }
      return acc;
    },
    {
      family: [],
      friends: [],
      acquaintances: [],
    } as Record<ConnectionsCircle, Connection[]>
  );

  const allCircles = getAllCircles();

  const getFilteredConnections = useCallback(
    (circle: ConnectionsCircle): Connection[] => {
      const circleConnections = connectionsInCircles[circle] || [];
      if (!searchTerm) return circleConnections;

      return circleConnections.filter((connection) =>
        connection.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    [connectionsInCircles, searchTerm]
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <>
      <Search onSearch={handleSearch} />
      {allCircles.map((circle) => (
        <Circle
          key={circle}
          name={circle}
          connections={getFilteredConnections(circle)}
        />
      ))}
    </>
  );
}
