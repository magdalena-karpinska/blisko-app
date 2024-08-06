import { Heading5 } from ".";

type CardProps = {
  text: string;
};

export function ConnectionCard({ text }: CardProps) {
  return (
    <div className="card bg-white text-primary-content w-full">
      <div className="card-body p-4">
        <Heading5 text={text} />
      </div>
    </div>
  );
}
