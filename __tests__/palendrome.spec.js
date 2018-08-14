const palendrome = require("../lib/palendrome.js");

describe("palendrome", () => {
  describe("when str is not a palendrome", () => {
    it("should return false", () => {
      const result = palendrome("stu");
      expect(result).toEqual(false);
    });
  });
  describe("when str is a palendrome", () => {
    it("should return true", () => {
      const result = palendrome("mom");
      expect(result).toEqual(true);
    });
  });
  describe("when str is a palendrome, with a capital", () => {
    it("should return true", () => {
      const result = palendrome("Mom");
      expect(result).toEqual(true);
    });
  });
  describe("when str has a number, but is stll a palendrome", () => {
    it("should return true", () => {
      const result = palendrome("My age is 0, 0 si ega ym");
      expect(result).toEqual(true);
    });
  });
  describe("when input is not a string", () => {
    it("should return false", () => {
      const result = palendrome(7);
      expect(result).toEqual(false);
    });
  });
  describe("when a parameter is missing", () => {
    it("should return false", () => {
      const result = palendrome();
      expect(result).toEqual(false);
    });
  });
  describe("when the length of the str is 1", () => {
    it("should return false", () => {
      const result = palendrome("i");
      expect(result).toEqual(false);
    });
  });
  describe("when there is punctuation, should be ignored", () => {
    it("should return true", () => {
      const result = palendrome("A man, a plan, a canal. Panama");
      expect(result).toEqual(true);
    });
  });
  describe("when there is punctuation and numbers but is palendrome", () => {
    it("should return true", () => {
      const result = palendrome("0_0 (: /- :) 0–0");
      expect(result).toEqual(true);
    });
  });
});
