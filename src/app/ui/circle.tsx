import { ConnectionCard, Divider } from ".";
import { Connection } from "../lib";

export type CircleProps = {
  name: string;
  connections: Connection[];
};

export function Circle({ name, connections }: CircleProps) {
  return (
    <div className="w-full space-y-4 my-4">
      <Divider text={name} />
      <div className="space-y-2">
        {connections.map((connection) => (
          <ConnectionCard
            key={connection.id}
            text={connection.name}
            conversationId={connection.conversationId}
          />
        ))}
      </div>
    </div>
  );
}
