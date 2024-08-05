import Avatar from "./avatar";
import { Heading3, PageHeading, Paragraph } from "./headings";
import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="lex flex-col items-left rounded-b-3xl overflow-hidden h-[18vh] max-w-[1100px] w-full">
      <NavBar />
      <div className="px-10 pt-5 max-w-[1100px] mx-auto w-full">
        <Paragraph text="Welcome back," />
        <PageHeading text="Magdalena" />
      </div>
    </header>
  );
}
