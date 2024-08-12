export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function TextInput({ className = "", ...props }: TextInputProps) {
  return (
    <input
      type="text"
      placeholder="Type here"
      className={`input input-bordered w-full ${className}`}
      {...props}
    />
  );
}
