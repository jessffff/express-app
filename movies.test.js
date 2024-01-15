const request = require("supertest");
const { app } = require("./app");

describe("GET /api/movies/:id", () => {
  // Test for the id 1
  describe("GET /api/movies/1", () => {
    it("should return status 200", async () => {
      const response = await request(app).get("/api/movies/1");
      expect(response.status).toBe(200);
    });

    it("should return response in JSON format", async () => {
      const response = await request(app).get("/api/movies/1");
      expect(response.headers["content-type"]).toMatch(/json/);
    });
  });

  // Bonus: Test for the id 0
  describe("GET /api/movies/0", () => {
    it("should return status 404 (Not Found)", async () => {
      const response = await request(app).get("/api/movies/0");
      expect(response.status).toBe(404);
    });
  });
});