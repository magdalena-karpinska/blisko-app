import { fetchConversations } from "@/app/lib";
import { ConversationList } from "@/app/ui";

export default async function Page() {
  const conversations = await fetchConversations();
  return <ConversationList conversations={conversations} />;
}
