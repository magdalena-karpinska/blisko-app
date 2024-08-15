import {
  fetchLoggedInUser,
  fetchConnectionById,
  fetchMessagesById,
} from "@/app/lib";
import { Conversation } from "@/app/ui";

export default async function Page({
  params,
}: {
  params: { conversationId: string };
}) {
  const user2 = await fetchConnectionById(params.conversationId);
  const loggedInUser = await fetchLoggedInUser();
  const messages = await fetchMessagesById(params.conversationId);
  if (!user2) {
    return <div>User not found</div>;
  }

  return (
    <Conversation
      messages={messages}
      conversationId={params.conversationId}
      user2={user2}
      loggedInUser={loggedInUser}
    />
  );
}
