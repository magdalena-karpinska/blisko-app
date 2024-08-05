import { CircleCard } from "./ui/circle-card";

export default function Dashboard() {
  return (
    <main className="w-full flex flex-col items-center space-y-4 my-4">
      <CircleCard text="All" bgColor="blue" />
      <CircleCard text="Acquaintances" bgColor="lightBlue" />
      <CircleCard text="Friends" bgColor="lightOrange" />
      <CircleCard text="Family" bgColor="orange" />
    </main>
  );
}
