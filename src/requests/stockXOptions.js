import ProxyList from "free-proxy";
import stockx from "stockx-scraper";
const proxyList = new ProxyList();

const getOptions = async () => {
  let proxies;
  try {
    proxies = await proxyList.get();
    proxies = proxies.map((proxy) => {
      return proxy.url;
    });
    const proxy = new stockx.ProxyList([proxies]);
    return {
      currency: `EUR`,
      country: `US`,
      proxy: proxy,
    };
  } catch (error) {
    return false;
  }
};

export { getOptions };
