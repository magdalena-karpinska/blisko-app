import { Connection, LoggedInUser, Message } from "../lib";
import { MyMessage, TheirMessage } from "./message";

export type ConversationProps = {
  user2: Connection;
  messages: Message[];
  loggedInUser: LoggedInUser;
};

export function ConversationComponent({
  user2,
  messages,
  loggedInUser,
}: ConversationProps) {
  return (
    <div className="w-full max-w-2xl space-y-4">
      {messages.map((message) =>
        message.sender_name === loggedInUser.name ? (
          <MyMessage
            key={message.message_id}
            message={message.text}
            timestamp={message.timestamp}
            loggedInUser={loggedInUser}
          />
        ) : (
          <TheirMessage
            key={message.message_id}
            message={message.text}
            timestamp={message.timestamp}
            user={user2}
          />
        )
      )}
    </div>
  );
}
