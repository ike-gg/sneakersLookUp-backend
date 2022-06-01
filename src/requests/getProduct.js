import stockx from "stockx-scraper";

const options = {
  currency: "EUR",
  country: "UK",
};

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
  }
};
