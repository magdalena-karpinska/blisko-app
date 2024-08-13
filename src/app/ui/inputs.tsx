export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  onSend: (value: string) => void;
};

export function TextInput({
  className = "",
  onSend,
  ...props
}: TextInputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSend(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };
  return (
    <input
      type="text"
      placeholder="Type here"
      className={`input input-bordered w-full ${className}`}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}
