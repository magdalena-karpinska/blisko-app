"use server";

import { fetchAllConnections } from "../lib";

export default async function Page() {
  const connections = await fetchAllConnections();
  const connectionNames = connections.map((connection) => connection.name);
  return (
    <>
      <h1>Experiment</h1>
      <div>
        {connectionNames.map((name) => (
          <div>{name}</div>
        ))}
      </div>
    </>
  );
}
