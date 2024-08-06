type AvatarProps = {
  size?: "sm" | "md" | "lg";
};

export function Avatar({ size = "sm" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-16",
    md: "w-24",
    lg: "w-32",
  };

  return (
    <div className="avatar pr-4">
      <div className={`${sizeClasses[size]} rounded-full `}>
        <img src="/magdalena.webp" alt="Magdalena" />
      </div>
    </div>
  );
}
