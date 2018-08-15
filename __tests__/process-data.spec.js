// const data = require("../lib/testing-data/bdd-dummy-data.json");
const processData = require("../lib/processData");

describe("Process Data", () => {
  let processedData;

  let mockData = [
    {
      name: "Miss Jermain Waters",
      age: 31,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "pass",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Juliana Runte",
      age: 42,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 25,
      yearsExperience: 2,
      satisfaction: 4,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    }
  ];

  beforeEach(() => {
    processedData = processData(mockData);
  });

  describe("shape of processed data", () => {
    it("should generate an obj with 3 keys", () => {
      expect(Object.keys(processData)).toEqual([
        "projects",
        "experience",
        "demographics"
      ]);
    });
  });

  describe("projects", () => {
    it("should create an object for each project", () => {
      expect(Object.keys(processedData.projects)).toEqual([
        "project1",
        "project2",
        "project3",
        "project4"
      ]);
    });
    it("should calculate avg satisfaction for for passing students", () => {});
    it("should calculate avg satisfaction for failing students", () => {});
  });

  describe("experience", () => {
    it("should return average staisfaction given years of experience", () => {});
  });

  describe("demographics", () => {
    it("should return average age and satisfaction", () => {});
  });
});
