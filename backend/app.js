require("dotenv").config();

const cheerio = require("cheerio");
const axios = require("axios");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

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
    .then(async (response) => {
      const $ = await cheerio.load(response.data);
      const targetedElm = $(
        "div#result_doc > .ResultBloc__link > div > .ResultBloc__link__content .extract"
      ).first();

      const name = targetedElm
        .find("p.txt > span.highlight")
        .first()
        .text()
        .trim();
      const siren = targetedElm
        .find("p.txt")
        .first()
        .text()
        .match(/[0-9]{3} [0-9]{3} [0-9]{3}/);

      res.json({ name, siren });
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
