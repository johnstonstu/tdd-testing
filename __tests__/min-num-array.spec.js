const minNumArr = require("../lib/minNumArr.js");

describe("stringCompresion", () => {
  describe("when a parameter is missing", () => {
    it("should return error", () => {
      const result = minNumArr();
      expect(result).toEqual("error");
    });
  });
  describe("when datatyle is not array", () => {
    it("should return error", () => {
      const result = minNumArr(1);
      expect(result).toEqual("error");
    });
  });
  describe("given an array of n integers", () => {
    it("returns the minimal positive integer (greater than 0) that does not occur in the array", () => {
      const result = minNumArr([1, 3, 6, 4, 1, 2]);
      expect(result).toEqual(5);
    });
  });
});
