import getProduct from "./requests/getProduct.js";

export default (app) => {
  const path = "/api/";

  app.get(path + "getProduct", getProduct);
};
