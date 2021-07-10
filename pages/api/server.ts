import type { NextApiResponse } from "next";
import { findServer } from "../../src/helpers/findServer";

type Data = {
  onlineServers: string[];
};

export default async function handler(res: NextApiResponse<Data>) {
  const onlineServers: any[] = await findServer();
  res.status(200).json({ onlineServers });
}
