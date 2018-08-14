const stringCompare = require("../lib/stringCompare.js");

describe("stringCompresion", () => {
  describe("when a parameter is missing", () => {
    it("should return error", () => {
      const result = stringCompare();
      expect(result).toEqual("error");
    });
  });
  describe("when the wrong datatype is entered", () => {
    it("should return error", () => {
      const result = stringCompare(1);
      expect(result).toEqual("error");
    });
  });
  describe("when not enough args are provided", () => {
    it("should return error", () => {
      const result = stringCompare("stus");
      expect(result).toEqual("error");
    });
  });
  describe("When target can be reached with one addition", () => {
    it("should return true", () => {
      const result = stringCompare("pale", "ple");
      expect(result).toEqual(true);
    });
  });
  describe("When target can be reached with one subtraction", () => {
    it("should return true", () => {
      const result = stringCompare("pales", "pale");
      expect(result).toEqual(true);
    });
  });
  describe("When target can be reached with one replace", () => {
    it("should return true", () => {
      const result = stringCompare("bales", "pale");
      expect(result).toEqual(true);
    });
  });
  describe("When target has two or more changes have been made", () => {
    it("should return false", () => {
      const result = stringCompare("pale", "bake");
      expect(result).toEqual(false);
    });
  });
  describe("When target has two or more changes have been made", () => {
    it("should return false", () => {
      const result = stringCompare("face", "facts");
      expect(result).toEqual(false);
    });
  });
});
