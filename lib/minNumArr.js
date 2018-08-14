module.exports = arr => {
  if (!Array.isArray(arr) || !arr || !arr.length) return "error";
  const max = Math.abs(Math.max(...arr)) + 2;
  for (let x = 1; x < max; x++) {
    if (!arr.includes(x)) return x;
  }
};
