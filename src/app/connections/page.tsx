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
      aquaintances: [],
    } as Record<ConnectionsCircle, Connection[]>
  );

  const allCircles = getAllCircles();

  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <SearchInput />
      {allCircles.map((circle) => (
        <Circle
          key={circle}
          name={circle}
          connections={connectionsInCircles[circle]}
        />
      ))}
    </main>
  );
}
