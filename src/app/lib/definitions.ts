export type ConnectionsCircle = "family" | "friends" | "acquaintances";

export type Connection = {
  id: string;
  name: string;
  circle: ConnectionsCircle;
};
