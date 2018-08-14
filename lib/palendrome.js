// inspired by https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7

module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr
      .split("")
      .reverse()
      .join("");

    return reverseStr === lowRegStr;
  } else return false;
};
