import Link from "next/link";

import { BsEnvelopeHeart } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { Avatar } from ".";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-10 bg-[#FC9F66] text-primary-content rounded-t-[20px] w-full max-w-[1100px] mx-auto h-[100px]">
      <div className="relative flex justify-between items-center w-full px-6 py-4">
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
