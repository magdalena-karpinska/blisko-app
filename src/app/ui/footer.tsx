import Avatar from "./avatar";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-secondary text-primary-content relative rounded-t-[20px] max-w-[1100px] w-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
        <Avatar size="lg" />
      </div>
      <aside className="pt-16"></aside>
    </footer>
  );
}
