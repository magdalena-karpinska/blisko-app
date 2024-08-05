type CardProps = {
  text: string;
};

export function ConnectionCard({ text }: CardProps) {
  return (
    <div className="card bg-white text-primary-content w-full">
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
      </div>
    </div>
  );
}
