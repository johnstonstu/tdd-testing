// // __tests__/frog-jumps.spec.js
// const frogJumps = require("../lib/frogJumps.js");

// describe("frogJumps", () => {
//   describe("when start is equal to end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(10, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when start is greater then end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when jump length is 0", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, 0);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when jump length is 0", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, -10);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when jump len is equal to (end-start)", () => {
//     it("should return 1", () => {
//       const result = frogJumps(10, 20, 10);
//       expect(result).toEqual(1);
//     });
//   });
//   describe("when the number of jumps is a whole number", () => {
//     it("should return the number of jumps", () => {
//       const result = frogJumps(10, 110, 10);
//       expect(result).toEqual(10);
//     });
//   });
//   describe("when number of jumps is a fraction, rounds up to whole number", () => {
//     it("should return number of jumps rouned up", () => {
//       const result = frogJumps(1, 10, 5);
//       expect(result).toEqual(2);
//     });
//   });
//   describe("when wrong data type entered", () => {
//     it("should return NaN", () => {
//       const result = frogJumps(1, 10, "stu");
//       expect(result).toEqual("NaN");
//     });
//   });
//   describe("when missing parameter(s)", () => {
//     it("should return NaN", () => {
//       const result = frogJumps();
//       expect(result).toEqual("NaN");
//     });
//   });
// });
