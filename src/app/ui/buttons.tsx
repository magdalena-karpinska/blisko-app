interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function PrimaryButton({ children, className, ...rest }: ButtonProps) {
  return <button className="btn btn-primary">{children}</button>;
}

export function SecondaryButton({ children, className, ...rest }: ButtonProps) {
  return <button className="btn btn-secondary">{children}</button>;
}

export function GhostButton({ children, className, ...rest }: ButtonProps) {
  return <button className="btn btn-ghost">{children}</button>;
}

export function IconButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button className="btn btn-circle btn-outline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
          transform="rotate(45 12 12)"
        />
      </svg>
    </button>
  );
}

export function DisabledButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button className="btn" disabled={true}>
      {children}
    </button>
  );
}
