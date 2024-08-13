import Link from "next/link";

import { CircleCard } from "./ui";

export default function Dashboard() {
  return (
    <main className="w-full flex flex-col items-center space-y-4 my-4">
      <Link className="w-full" href="/connections">
        <CircleCard text="All" bgColor="blue" />
      </Link>
      <Link className="w-full" href="/connections/acquaintances">
        <CircleCard
          text="Acquaintances"
          bgColor="lightBlue"
          isAcquaintances={true}
        />
      </Link>
      <Link className="w-full" href="/connections/friends">
        <CircleCard text="Friends" bgColor="lightOrange" />
      </Link>
      <Link className="w-full" href="/connections/family">
        <CircleCard text="Family" bgColor="orange" />
      </Link>
    </main>
  );
}
