module.exports = arr => {
  if (typeof arr !== "object" || !arr || !arr.length) return "error";
  for (i = 1; i < 1000000; i++) {
    if (!arr.includes(i)) return i;
  }
};
