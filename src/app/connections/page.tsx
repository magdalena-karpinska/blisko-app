import { fetchAllConnections } from "@/app/lib";
import { ConnectionList } from "@/app/ui";

export default async function Page() {
  const connections = await fetchAllConnections();

  return <ConnectionList connections={connections} />;
}
