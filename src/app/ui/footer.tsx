import Link from "next/link";

import { BsEnvelopeHeart } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { Avatar } from ".";

export function Footer() {
  return (
    <footer className="footer footer-center p-4 h-24 bg-secondary text-primary-content relative rounded-t-[20px] max-w-[1100px] w-full">
      <div className="flex justify-between items-center w-full px-12">
        <Link href="/messages">
          <BsEnvelopeHeart className="text-3xl" />
        </Link>
        <IoCalendarNumberOutline className="text-3xl" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
        <Avatar size="lg" />
      </div>
    </footer>
  );
}
