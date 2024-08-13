import { Heading5, IconButton } from ".";

type CardProps = {
  text: string;
  onAdd: () => void;
  iconButtonSize?: "sm" | "md" | "lg";
};

export function UserCard({ text, onAdd, iconButtonSize = "sm" }: CardProps) {
  return (
    <div className="card bg-white text-primary-content w-full">
      <div className="card-body p-4 flex flex-row items-center justify-between">
        <Heading5 text={text} />
        <div className="flex space-x-4">
          <IconButton
            size={iconButtonSize}
            aria-label="Acquaintances icon"
            onClick={onAdd}
          />
        </div>
      </div>
    </div>
  );
}
