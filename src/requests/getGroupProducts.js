import stockx from "stockx-scraper";

const options = {
  currency: "EUR",
  country: "US",
};

export default (req, res) => {
  if ("q" in req.query) {
    const query = req.query.q;
    stockx
      .getProductGroup(query)
      .then((group) => {
        res.json(group);
      })
      .catch((error) => {
        res.json(error);
        console.error(error);
      });
  }
};
