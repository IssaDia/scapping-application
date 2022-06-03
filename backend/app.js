require("dotenv").config();

const { data } = require("./routes/data");
const { index } = require("./routes/index");

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
  index(req, res);
});

app.get("/api/search/:company", async (req, res) => {
  await data(req, res);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
