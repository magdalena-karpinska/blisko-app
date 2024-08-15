import { fetchLoggedInUser, fetchConnectionById } from "@/app/lib";
import { Conversation } from "@/app/ui";

export default async function Page({
  params,
}: {
  params: { conversationId: string };
}) {
  const user2 = await fetchConnectionById(params.conversationId);
  const loggedInUser = await fetchLoggedInUser();

  if (!user2) {
    return <div>User not found</div>;
  }

  return (
    <Conversation
      conversationId={params.conversationId}
      user2={user2}
      loggedInUser={loggedInUser}
    />
  );
}
