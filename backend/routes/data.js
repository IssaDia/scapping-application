const cheerio = require("cheerio");
const axios = require("axios");

const data = (req, res) => {
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

      return res.json({ name, siren });
    })
    .catch((error) => console.log(error));
};

module.exports = { data };
