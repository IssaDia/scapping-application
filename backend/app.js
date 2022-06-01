const cheerio = require("cheerio");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.get("api/search/:company", (req, res) => {
  const company = req.query.company;
  fetch(`https://www.societe.com/cgi-bin/search?champs=${company}`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
