import { SearchInput } from "../ui";
import { mockConversations } from "../lib";
import { ConversationCard } from "../ui/conversation-card";

export default function AllConversations() {
  return (
    <>
      <SearchInput />
      {mockConversations.map((conversation) => (
        <ConversationCard
          key={conversation.conversation_id}
          text={conversation.user2_name}
        />
      ))}
    </>
  );
}
