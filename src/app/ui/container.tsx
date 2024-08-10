export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-4 md:px-8 lg:px-16 flex flex-col flex-1 pb-20">
      {children}
    </div>
  );
}
