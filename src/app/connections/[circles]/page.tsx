import { CircleConnectionList } from "@/app/ui";

export default async function Page({
  params,
}: {
  params: { circles: string };
}) {
  return <CircleConnectionList circleName={params.circles} />;
}
