export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex-grow overflow-y-auto">
      <main className="w-full flex flex-col items-center space-y-4 my-8 pb-16 px-4 md:px-8 lg:px-16">
        {children}
      </main>
    </div>
  );
}
