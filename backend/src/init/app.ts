import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import getCompanyDataFromWebsite from "../../utils/getCompanyDataFromWebsite";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

// app.use("/api/search/:company", (req, res) => {
//   getCompanyDataFromWebsite(req, res);
// });

app.listen(config.port);

export default app;
