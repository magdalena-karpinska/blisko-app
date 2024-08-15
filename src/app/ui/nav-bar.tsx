import { BsEnvelopeHeart } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

import Link from "next/link";

type NavBarProps = {
  bgColor: string;
};

export function NavBar({ bgColor }: NavBarProps) {
  return (
    <div className={`navbar bg-${bgColor} px-10`}>
      <div className="navbar-start">
        <Link href="#" onClick={() => window.history.back()}>
          <MdOutlineArrowBackIos size={30} />
        </Link>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          Blisko
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/messages">
          <BsEnvelopeHeart className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}
