import server from "../src/server";
import supertest from "supertest";


describe("App server tests", () => {
  it("returns a JSON with results",  () => {
      supertest(server)
      .get("/api/search/auchan")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ name: "AUCHAN", siren: ["832 235 402"] });
      })
   
    

  });
});
