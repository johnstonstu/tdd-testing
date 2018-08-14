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

  if (str1 === str2) return true;
  if (Math.abs(str1.length - str2.length) > 1) return false;

  return true;
};
