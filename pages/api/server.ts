import type { NextApiResponse } from "next";
import { findServer } from "../../src/helpers/findServer";
import servers from "../../src/data/servers.json";

type Data = {
  onlineServers: string[];
};

export default async function handler(res: NextApiResponse<Data>) {
  const onlineServers: any[] = await findServer(servers);
  res.status(200).json({ onlineServers });
}
