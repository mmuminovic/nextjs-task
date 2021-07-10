import axios from "axios";
import servers from "../servers.json";

const checkUrlExists = async (url: string) => {
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

export const findServer = async () => {
  const checkServers = servers
    .sort((a, b) => a.priority - b.priority)
    .map((server) => checkUrlExists(server.url));
  const res = await Promise.all(checkServers);
  const onlineServers = res.filter((e) => e !== null);
  return onlineServers;
};
