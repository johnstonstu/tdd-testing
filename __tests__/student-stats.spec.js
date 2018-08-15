const StudentStats = require("../lib/studentStats.js");

describe("stats", () => {
  let statsMachine, processesedData;
  beforeEach(() => {
    statsMachine = new StudentStats("../lib/testing-data/bdd-dummy-data.json");
    processesedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        4: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });
  it("should load JSON data", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waters");
  });

  describe("Query project by name", () => {
    describe("when a name does not exist", () => {
      it("should return correct stats", () => {
        expect(() => statsMachine.getProjectByName("aaa")).toThrow(
          "Invalid project provided"
        );
      });
    });
    describe("when a name exists", () => {
      it("should return correct stats", () => {
        expect(statsMachine.getProjectByName("project1")).toEqual(
          processesedData.projects["project1"]
        );
      });
    });
  });
});
