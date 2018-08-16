// const data = require("../lib/testing-data/bdd-dummy-data.json");
const processData = require("../lib/processData");

describe("Process Data", () => {
  let processedData;

  let mockData = [
    {
      name: "Miss Jermain Waters",
      age: 25,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "pass",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Juliana Runte",
      age: 24,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 26,
      yearsExperience: 2,
      satisfaction: 2,
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
      expect(Object.keys(processedData)).toEqual([
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
    it("should calculate avg satisfaction for for passing students", () => {
      expect(processedData.projects.project1.passed).toEqual({
        number: 1,
        satisfaction: 2
      });
    });
    it("should calculate avg satisfaction for failing students", () => {
      expect(processedData.projects.project1.failed).toEqual({
        number: 2,
        satisfaction: 2
      });
    });
  });

  describe("experience", () => {
    it("should return average staisfaction given years of experience", () => {
      expect(processedData.experience[3]).toEqual({
        satisfaction: 2
      });
    });
  });

  describe("demographics", () => {
    it("should return average age and satisfaction", () => {
      expect(processedData.demographics).toEqual({
        averageAge: 25,
        averageSatisfaction: 2
      });
    });
  });
});
