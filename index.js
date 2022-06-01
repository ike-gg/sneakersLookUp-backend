import express from "express";
import apiHandler from "./src/apiHandler.js";

const app = express();

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000");
});

apiHandler(app);

app.get("/", (req, res) => {
  res.redirect("https://github.com/ike-gg/sneakersLookUp-backend");
});
