import express from "express";
import apiHandler from "./src/apiHandler.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.options("*", cors());

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000");
});

apiHandler(app);

app.get("/", (req, res) => {
  res.redirect("https://github.com/ike-gg/sneakersLookUp-backend");
});
