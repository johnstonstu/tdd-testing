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
      expect(result).toEqual(" ");
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
      expect(result).toEqual("b");
    });
  });
  describe("when a string has no unique chars", () => {
    it("should be undefined", () => {
      const result = uniqueChar("aaa");
      expect(result).toEqual(undefined);
    });
  });
  describe("when a string has a unique letter later in the string", () => {
    it("should return the first unique char", () => {
      const result = uniqueChar("frof");
      expect(result).toEqual("r");
    });
  });
  describe("when a string of unique chars has been entered", () => {
    it("should return the first unique char", () => {
      const result = uniqueChar("terfg");
      expect(result).toEqual("t");
    });
  });
});
