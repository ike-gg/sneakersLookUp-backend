// import stockx from "stockx-scraper";

// const options = {
//   currency: "EUR",
//   country: "PL",
// };

import express from "express";

const app = express();

app.listen(443, () => {
  console.log("listening");
});

app.get("/", (req, res) => {
  res.send("hello!");
});
