export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-4 md:px-8 lg:px-16 flex flex-col flex-1 pb-20">
      <main className="w-full flex flex-col items-center space-y-4 my-8">
        {children}
      </main>
    </div>
  );
}
