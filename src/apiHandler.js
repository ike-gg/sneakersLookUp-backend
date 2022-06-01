import getProduct from "./requests/getProduct.js";
import getGroupProducts from "./requests/getGroupProducts.js";

export default (app) => {
  const path = "/api/";

  app.get(path + "getProduct", getProduct);
  app.get(path + "getGroupProducts", getGroupProducts);
};
