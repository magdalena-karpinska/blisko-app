import { CircleProps } from "../lib";
import { ConnectionCard, Divider } from ".";

export function Circle({ name, connections }: CircleProps) {
  return (
    <div className="w-full space-y-4 my-4">
      <Divider text={name} />
      <div className="space-y-2">
        {connections.map((connection) => (
          <ConnectionCard key={connection.name} text={connection.name} />
        ))}
      </div>
    </div>
  );
}
