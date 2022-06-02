require("dotenv").config();

const cheerio = require("cheerio");
let puppeteer = require("puppeteer");
const pretty = require("pretty");
const axios = require("axios");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.get("/api/searchv2/:company", async (req, res) => {
  const company = req.params.company;
  const URL = `https://www.societe.com/cgi-bin/search?champs=${company}`;
  const SUBMIT_SELECTOR = "#buttsearch";
  const INPUT_SEARCH_COMPANY_SELECTOR = "#input_search";
  const GENERAL_CONDITION_SELECTOR = ".didomi-continue-without-agreeing";
  const SUBMIT_COMPANY_DETAILS_SELECTOR = ".ResultBloc__link__content";

  axios
    .get(URL)
    .then((response) => {
      const $ = cheerio.load(response.data);

      const name = $("#recap_deno_search").text();

      console.log(name);
      res.json({ name });
    })
    .catch((error) => console.log(error));

  // if (company !== undefined) {
  //   (() => {
  //     puppeteer.launch({ headless: false }).then(async (browser) => {
  //       let page = await browser.newPage();
  //       await page.setDefaultNavigationTimeout(0);
  //       page.setViewport({ width: 1366, height: 768 });
  //       await page.goto(URL, {
  //         waitUntil: "domcontentloaded",
  //       });
  //       await page.waitForSelector(".didomi-popup-container", {
  //         visible: true,
  //       });
  //       await page.click(GENERAL_CONDITION_SELECTOR);
  //       await page.click(INPUT_SEARCH_COMPANY_SELECTOR);
  //       await page.keyboard.type(company);
  //       await page.click(SUBMIT_SELECTOR);
  //       await page.waitForNavigation();
  //       page.click(SUBMIT_COMPANY_DETAILS_SELECTOR).then(() => {
  //         const content = page.content();
  //         content
  //           .then((success) => {
  //             const $ = cheerio.load(success);
  //             console.log(pretty($.html()));
  //           })
  //           .catch((error) => console.log(error));
  //       });
  //     });
  //   })();
  // }
});

app.get("/api/search/:company", async (req, res) => {
  const company = req.params.company;
  const URL_LOGIN = "https://www.linkedin.com/login/fr";
  const EMAIL_SELECTOR = "#username";
  const PASSWORD_SELECTOR = "#password";
  const SUBMIT_SELECTOR =
    "div#app__container > main.app__content > div.card-layout > div#organic-div > form.login__form > div.login__form_action_container > button.btn__primary--large.from__button--floating";

  if (company !== undefined) {
    (() => {
      puppeteer
        .launch({ headless: false })
        .then(async (browser) => {
          let page = await browser.newPage();
          page.setViewport({ width: 1366, height: 768 });
          await page.goto(URL_LOGIN, {
            waitUntil: "domcontentloaded",
          });
          await page.click(EMAIL_SELECTOR);
          await page.keyboard.type(process.env.LINKEDIN_USERNAME);
          await page.click(PASSWORD_SELECTOR);
          await page.keyboard.type(process.env.LINKEDIN_PASSWORD);
          await page.click(SUBMIT_SELECTOR);
          await page.waitForNavigation();
          page
            .goto(`https://www.linkedin.com/company/${company}/about/`, {
              waitUntil: "domcontentloaded",
            })
            .then(() => {
              const content = page.content();
              content.then((success) => {
                const $ = cheerio.load(success);
                const company_name = $(
                  "h1.t-24.t-black.t-boldfull-width > span"
                ).text();

                if (company_name !== undefined) {
                  console.log(company_name, "company");
                } else {
                  console.log("Unable to fetch results. Please try again!");
                }
              });
            });
        })
        .catch((err) => {
          console.log(" CAUGHT WITH AN ERROR ", err);
        });
    })();
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
