"use client";

import { useParams } from "next/navigation";

export default function Conversation() {
  const params = useParams();
  const conversationId = params.id as string;

  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <Conversation />
    </main>
  );
}
