import getProduct from "./requests/getProduct.js";
import getGroupProducts from "./requests/getGroupProducts.js";
import getExchangeRates from "./requests/getExchangeRates.js";

export default (app) => {
  const path = "/api/";

  app.get(path + "getProduct", getProduct);
  app.get(path + "getGroupProducts", getGroupProducts);
  app.get(path + "getExchangeRates", getExchangeRates);
};
