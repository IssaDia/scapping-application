require("dotenv").config();

const cheerio = require("cheerio");
let puppeteer = require("puppeteer");
const axios = require("axios");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.get("/api/search/:company", async (req, res) => {
  const company = req.params.company;
  const URL = `https://www.societe.com/cgi-bin/search?champs=${company}`;

  axios
    .get(URL)
    .then((response) => {
      const $ = cheerio.load(response.data);
      const name = $("#recap_deno_search").text();
      res.json({ name });
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
