import {
  mockConnections,
  ConnectionsCircle,
  Connection,
  getAllCircles,
} from "../lib";

import { Circle, SearchInput } from "../ui";

export default function ConnectionsPage() {
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

  return (
    <>
      <SearchInput />
      {allCircles.map((circle) => (
        <Circle
          key={circle}
          name={circle}
          connections={connectionsInCircles[circle]}
        />
      ))}
    </>
  );
}
