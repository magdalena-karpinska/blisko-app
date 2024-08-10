import { SearchInput } from "../ui";
import { mockConversations } from "../lib";
import { ConversationCard } from "../ui/conversation-card";

export default function AllConversations() {
  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <SearchInput />
      {mockConversations.map((conversation) => (
        <ConversationCard
          key={conversation.conversation_id}
          text={conversation.user2_name}
        />
      ))}
    </main>
  );
}
