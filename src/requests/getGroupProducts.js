import stockx from "stockx-scraper";
import { getOptions } from "./stockXOptions.js";

let options = getOptions()
  .then(() => console.log("successful get proxies for getGroupProducts"))
  .catch((error) => console.error(error));

export default (req, res) => {
  if ("q" in req.query) {
    const query = req.query.q;
    stockx
      .getProductGroup(query, options)
      .then((group) => {
        res.json(group);
      })
      .catch((error) => {
        res.json(error);
        console.error(error);
      });
  } else {
    res.json({ error: "no query provided" });
  }
};
