const { findServer, checkUrlExists } = require("../helpers/findServer");

const goodServers = [{ url: "https://github.com/", priority: 1 }];
const badServers = [{ url: "https://githuuuuuuuuuub.com/", priority: 1 }];

test("good servers", () => {
  return findServer(goodServers).then((data: any[]) => {
    expect(data).toStrictEqual(["https://github.com/"]);
  });
});

test("bad servers", () => {
  return findServer(badServers).then((data: any[]) => {
    expect(data).toStrictEqual([]);
  });
});

test("good url", () => {
  return checkUrlExists(goodServers[0].url).then((data: any[]) => {
    expect(data).toStrictEqual("https://github.com/");
  });
});

test("bad url", () => {
  return checkUrlExists(badServers[0].url).then((data: any[]) => {
    expect(data).toStrictEqual(null);
  });
});
