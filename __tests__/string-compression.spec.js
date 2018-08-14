const stringCompression = require("../lib/stringCompression.js");

describe("stringCompresion", () => {
  describe("when a string is entered", () => {
    it("should return each letter followed immediately by a number representing the number of occourances in a row", () => {
      const result = frogJumps("aaabbb");
      expect(result).toEqual("a3b3");
    });
  });
});
