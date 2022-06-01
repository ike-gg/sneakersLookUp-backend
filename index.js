// import stockx from "stockx-scraper";

// const options = {
//   currency: "EUR",
//   country: "PL",
// };

import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.options("*", cors());

app.get("/", (req, res) => res.send("Working!!!"));

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000", "");
});
