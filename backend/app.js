require("dotenv").config();

const cheerio = require("cheerio");
const pretty = require("pretty");
let puppeteer = require("puppeteer");

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.get("/api/search/:company", async (req, res) => {
  const company = req.params.company;
  const URL_LOGIN = "https://www.linkedin.com/login/fr";
  const EMAIL_SELECTOR = "#username";
  const PASSWORD_SELECTOR = "#password";
  const SUBMIT_SELECTOR = "div#app__container > main.app__content > div.card-layout > div#organic-div > form.login__form > div.login__form_action_container > button.btn__primary--large.from__button--floating";

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
                const textExtracted = $(
                  ".link-without-visited-state.inline-block.ember-view"
                ).text();
                if (textExtracted !== undefined) {
                  const extractedWords = textExtracted.trim().split(" ");
                  console.log(extractedWords[2] + " Employees");
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

  // await axios(url)
  //   .then((response) => {
  //     const html_data = response.data;
  //     const $ = cheerio.load(html_data);
  //     const siren = $(".org-top-card__primary-content--ia");

  //     console.log(siren.html());
  //   })
  //   .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
