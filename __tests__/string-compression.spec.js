const stringCompression = require("../lib/stringCompression.js");

describe("stringCompresion", () => {
  describe("when a string is entered", () => {
    it("should return each letter followed immediately by a number representing the number of occourances in a row", () => {
      const result = stringCompression("aaabbb");
      expect(result).toEqual("a3b3");
    });
  });
  describe("when an incorrect data type is entered", () => {
    it("should return error", () => {
      const result = stringCompression(15);
      expect(result).toEqual("error");
    });
  });
  describe("when a parameter is missing", () => {
    it("should return error", () => {
      const result = stringCompression();
      expect(result).toEqual("error");
    });
  });
  describe("when a number is entered in the string", () => {
    it("should return error", () => {
      const result = stringCompression("aa11bb");
      expect(result).toEqual("a2b2");
    });
  });
  describe("when spacing is entered in the string", () => {
    it("should return error", () => {
      const result = stringCompression("aa bb");
      expect(result).toEqual("a2b2");
    });
  });
  describe("when punctuation is entered in the string", () => {
    it("should return error", () => {
      const result = stringCompression("aa-bb");
      expect(result).toEqual("a2b2");
    });
  });
});
