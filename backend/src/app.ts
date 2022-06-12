import dotenv  from "dotenv";
import express from "express";

dotenv.config();

const app:Express = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  getCompanyDataFromWebsite,
} = require("../utils/getCompanyDataFromWebsite");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.get("/api/search/:company", (req: Request, res: Response) => {
  getCompanyDataFromWebsite(req, res);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
