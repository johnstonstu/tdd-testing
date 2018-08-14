const uniqueChar = require("../lib/uniqueChar.js");

describe("stringCompresion", () => {
  describe("when a parameter is missing", () => {
    it("should return error", () => {
      const result = uniqueChar();
      expect(result).toEqual("error");
    });
  });
  describe("when an empty string is entered", () => {
    it("should return error", () => {
      const result = uniqueChar(" ");
      expect(result).toEqual("error");
    });
  });
  describe("when a non string is entered", () => {
    it("should return error", () => {
      const result = uniqueChar(9);
      expect(result).toEqual("error");
    });
  });
  describe("when a string is entered", () => {
    it("should find the first unique char", () => {
      const result = uniqueChar("aabcc");
      expect(result).toEqual("c");
    });
  });
});
