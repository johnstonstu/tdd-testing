module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let myString = str
      .replace(/[0-9]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/ /g, "");
    return myString;
  } else return "error";
};
