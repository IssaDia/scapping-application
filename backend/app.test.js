const { index } = require("./routes/index");
const { data } = require("./routes/data");

const request = require("supertest");
const express = require("express");
const app = express();

describe("App server tests", () => {
  it("responds to /", async () => {
    const req = {};
    const res = {};
    const getMessage = await index(req, res);
    expect(getMessage).toEqual({ message: "working" });
  });
  it("returns a JSON with results", async () => {
    // const req = { params: { company: "auchan" } };
    // const res = {};
    // const getMessage = await data(req, res);
    // expect(getMessage).toEqual({ name: "auchan", siren: ["832 235 402"] });
    const res = await request(app).post("/api/search/:company").send({
      company: "auchan",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
