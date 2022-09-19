import app from "../src/app";
import supertest from "supertest";
import { createNewTest } from "./factories/testFactory";
import { getToken } from "./factories/tokenFactory";
import { alreadyRegisteredCredentials } from "./factories/authFactory";
import { array } from "joi";

let token: string;

beforeAll(async () => (token = await getToken(alreadyRegisteredCredentials())));

describe("Create Test", () => {
  it("Create test and return test data and status code 201", async () => {
    const testData = createNewTest();
    const response = await supertest(app)
      .post("/tests")
      .set("Authorization", `Bearer ${token}`)
      .send(testData);

    console.log(response.text)
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(testData.name);
    expect(response.body.pdfUrl).toBe(testData.pdfUrl);
  });

  it("Create test with invalid token and return status code 401", async () => {
    const testData = createNewTest();
    const response = await supertest(app)
      .post("/test")
      .set("Authorization", "Bearer invalidToken")
      .send(testData);
    expect(response.status).toEqual(401);
  });

  it("Create test with invalid teacher and return status code 404", async () => {
    const testData = createNewTest();
    testData.teacherId = 999;
    const response = await supertest(app)
      .post("/test")
      .set("Authorization", `Bearer ${token}`)
      .send(testData);
    expect(response.status).toEqual(404);
  });

  it("Create test with invalid category and return status code 404", async () => {
    const testData = createNewTest();
    testData.categoryId = 999;
    const response = await supertest(app)
      .post("/test")
      .set("Authorization", `Bearer ${token}`)
      .send(testData);
    expect(response.status).toEqual(404);
  });

  it("Create test with invalid discipline and return status code 404", async () => {
    const testData =  createNewTest();
    testData.disciplineId = 999;
    const response = await supertest(app)
      .post("/test")
      .set("Authorization", `Bearer ${token}`)
      .send(testData);
    expect(response.status).toEqual(404);
  });
});

describe("Get tests", () => {

  it("Get tests groupedBy disciplines and return status code 200", async () => {
    const response = await supertest(app)
      .get("/tests")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toEqual(200);
  });

  it("Get tests groupedBy teachers and return status code 200", async () => {
    const response = await supertest(app)
      .get("/categories")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toEqual(200);
  });


  it("Get tests with invalid token and return status code 401", async () => {
    const response = await supertest(app)
      .get("/tests")
      .set("Authorization", "Bearer invalidToken")
    expect(response.status).toEqual(401);
  });
});
