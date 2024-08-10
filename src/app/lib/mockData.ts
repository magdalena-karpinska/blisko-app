import { Connection, ConnectionsCircle } from ".";

export const mockConnections: Connection[] = [
  {
    id: "1",
    name: "Ines Acedo Leventopoulou",
    circle: "friends",
  },
  {
    id: "2",
    name: "Agnese Ventrella",
    circle: "friends",
  },
  {
    id: "3",
    name: "Monika Adamczyk-Majewska",
    circle: "friends",
  },
  {
    id: "4",
    name: "Bernadeta Karpińska",
    circle: "family",
  },
  {
    id: "5",
    name: "Krzysztof Karpiński",
    circle: "family",
  },
  {
    id: "6",
    name: "Jonathan Zeray",
    circle: "acquaintances",
  },
  {
    id: "6",
    name: "Robin Sahin",
    circle: "acquaintances",
  },
];

export function getAllCircles(): ConnectionsCircle[] {
  return ["acquaintances", "friends", "family"];
}
