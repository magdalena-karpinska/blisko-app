export type ConnectionsCircle = "family" | "friends" | "aquaintances";

export type Connection = {
  id: string;
  name: string;
  circle: ConnectionsCircle;
};

export type CircleProps = {
  name: string;
  connections: Connection[];
};
