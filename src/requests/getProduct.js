import stockx from "stockx-scraper";
import { getOptions } from "./stockXOptions.js";

let options = getOptions()
  .then(() => console.log("successful get proxies for getProduct"))
  .catch((error) => console.error(error));

setInterval(() => {
  options = getOptions()
    .then(() => console.log("successful exchanged proxies for getProduct"))
    .catch((error) => console.error(error));
}, 1000 * 60 * 60);

export default (req, res) => {
  if ("q" in req.query) {
    const query = req.query.q;
    stockx
      .getProduct(query, options)
      .then((item) => {
        res.json(item);
      })
      .catch((error) => {
        res.json(error);
        console.error(error);
      });
  } else {
    res.json({ error: "no query provided" });
  }
};
