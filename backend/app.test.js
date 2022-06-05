const request = require("supertest");
const app = require("./app");

describe("App server tests", () => {
  it("returns a JSON with results", async () => {
    const res = await request(app)
      .get("/api/search/auchan")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({ name: "AUCHAN", siren: ["832 235 402"] });
  });
});
