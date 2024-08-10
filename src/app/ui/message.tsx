import { Connection, LoggedInUser } from "../lib";

export type MyMessageProps = {
  message: string;
  timestamp: string;
  loggedInUser: LoggedInUser;
};

export type TheirMessageProps = {
  message: string;
  timestamp: string;
  user: Connection;
};

const circleBgColor = {
  family: "bg-[#FAC357]",
  friends: "bg-[#FAE39C]",
  acquaintances: "bg-[#B8E0E3]",
};

export function MyMessage({
  message,
  timestamp,
  loggedInUser,
}: MyMessageProps) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="User's avatar" src={loggedInUser.avatar} />
        </div>
      </div>
      <div className="chat-header">
        {loggedInUser.name}
        <time className="text-xs opacity-50">{timestamp}</time>
      </div>
      <div className="chat-bubble bg-[#FC9F66]">{message}</div>
    </div>
  );
}

export function TheirMessage({ message, timestamp, user }: TheirMessageProps) {
  const bgColorClass = circleBgColor[user.circle];
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">
        {user.name}
        <time className="text-xs opacity-50">{timestamp}</time>
      </div>
      <div className={`chat-bubble ${bgColorClass}`}>{message}</div>
    </div>
  );
}
