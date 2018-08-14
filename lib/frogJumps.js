module.exports = (start, end, len) => {
  if (typeof (start, end, len) === "number") {
    if (end - start === len) {
      return 1;
    } else if (start > end || len <= 0) {
      return 0;
    } else return Math.ceil((end - start) / len);
  }
  return "NaN";
};
