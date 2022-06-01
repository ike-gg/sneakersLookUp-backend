import express from "express";
import apiHandler from "./src/apiHandler.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.options("*", cors());
app.listen(PORT, function () {
  console.log(`server running on port ${PORT}`);
});

apiHandler(app);

app.get("/", (req, res) => {
  res.redirect("https://github.com/ike-gg/sneakersLookUp-backend");
});
