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
  describe("when all elements are the same in the array", () => {
    it("should return error", () => {
      const result = minNumArr([1, 1, 1]);
      expect(result).toEqual(2);
    });
  });
  describe("when all elements are the mixed elemtnts in the array", () => {
    it("should return error", () => {
      const result = minNumArr([1, "two", 3]);
      expect(result).toEqual(undefined);
    });
  });
  describe("when all elements are the negetive in the array", () => {
    it("should return the first positive integer", () => {
      const result = minNumArr([-1, -2, -3]);
      expect(result).toEqual(1);
    });
  });
  describe("given an array of n integers", () => {
    it("returns the minimal positive integer (greater than 0) that does not occur in the array", () => {
      const result = minNumArr([1, 3, 6, 4, 1, 2]);
      expect(result).toEqual(5);
    });
  });
  describe("given an array of large n integers", () => {
    it("returns the minimal positive integer (greater than 0) that does not occur in the array", () => {
      const result = minNumArr([
        1,
        2,
        3,
        4,
        11213123,
        3123123,
        612312312,
        434654334,
        23453453
      ]);
      expect(result).toEqual(5);
    });
  });
});
