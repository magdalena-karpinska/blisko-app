import Link from "next/link";
import { Heading5 } from ".";
import { BsEnvelope } from "react-icons/bs";
import { TbUserEdit } from "react-icons/tb";

type CardProps = {
  text: string;
  conversationId: string;
};

export function ConnectionCard({ text, conversationId }: CardProps) {
  if (!conversationId) {
    console.warn(`ConnectionCard: conversationId is undefined for ${text}`);
  }
  return (
    <div className="card bg-white text-primary-content w-full">
      <div className="card-body p-4 flex flex-row items-center justify-between">
        <Heading5 text={text} />
        <div className="flex space-x-4">
          <Link href={`/messages/${conversationId}`}>
            <BsEnvelope />
          </Link>
        </div>
      </div>
    </div>
  );
}
