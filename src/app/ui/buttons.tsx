interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export function PrimaryButton({
  children,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    } else {
    }
  };

  return (
    <button
      className={`btn btn-primary ${className || ""}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const buttonClasses = `btn btn-secondary ${className}`.trim();
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

export function GhostButton({ children, className, ...rest }: ButtonProps) {
  return <button className="btn btn-ghost">{children}</button>;
}

export function IconButton({
  size = "md",
  className,
  ...rest
}: IconButtonProps) {
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };
  return (
    <button
      className={`btn btn-circle btn-outline ${sizeClasses[size]} ${
        className || ""
      }`}
      {...rest}
    >
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
