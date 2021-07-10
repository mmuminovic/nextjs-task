import axios from "axios";
import { ServerListItemModel } from "../typings/server.model";

export const checkUrlExists = async (url: string) => {
  try {
    const server = await axios.get(url);

    if (server && server.status >= 200 && server.status < 300) {
      return url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const findServer = async (servers: ServerListItemModel[]) => {
  const checkServers = servers
    .sort(
      (a: ServerListItemModel, b: ServerListItemModel) =>
        a.priority - b.priority
    )
    .map((server: ServerListItemModel) => checkUrlExists(server.url));
  const res = await Promise.all(checkServers);
  const onlineServers = res.filter((e) => e !== null);
  return onlineServers;
};

module.exports = { findServer, checkUrlExists };
