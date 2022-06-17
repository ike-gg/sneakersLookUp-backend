import ProxyList from "free-proxy";
const proxyList = new ProxyList();

const getOptions = async () => {
  let proxies;
  try {
    proxies = await proxyList.get();
    return {
      currency: `EUR`,
      country: `US`,
      proxy: proxies,
    };
  } catch (error) {
    return false;
  }
};

export { getOptions };
