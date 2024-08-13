import { Avatar } from ".";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-10 bg-[#FC9F66] text-primary-content rounded-t-[20px] w-full max-w-[1100px] mx-auto h-[100px]">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
        <Avatar size="lg" />
      </div>
    </footer>
  );
}
