module.exports = (str1, str2) => {
  if (
    !str1 ||
    !str2 ||
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    !str1.length ||
    !str2.length
  )
    return "error";

  let diff = Math.abs(str1.length - str2.length);

  if (str1 === str2) return true;
  if (diff > 1) return false;

  let a = 0;
  let b = 0;
  let c = 0;

  if (str1.length > str2.length) {
    long = str1;
    short = str2;
  } else {
    long = str2;
    short = str1;
  }

  for (x = 0; x < long.length; x++) {
    if (long.length === short.length) {
      if (short[a] === long[a]) {
        a++;
      } else {
        a++;
        c++;
      }
    } else if (long[a] === short[b]) {
      a++;
      b++;
    } else {
      a++;
      c++;
    }
  }
  return c > 1 ? false : true;
};
