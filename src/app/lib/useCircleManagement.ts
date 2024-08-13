import { Message, ConnectionsCircle } from "./definitions";

const friendsTreshold = 5;
const familyTreshold = 15;

export function countMessagesFromLast24h(messages: Message[]): number {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return messages.filter((message) => new Date(message.timestamp) > oneDayAgo)
    .length;
}

export function attachToCircle(messages: Message[]): ConnectionsCircle {
  const amountOfMessagesFromLast24h = countMessagesFromLast24h(messages);
  if (amountOfMessagesFromLast24h > familyTreshold) {
    return "family";
  } else if (amountOfMessagesFromLast24h > friendsTreshold) {
    return "friends";
  } else {
    return "acquaintances";
  }
}
