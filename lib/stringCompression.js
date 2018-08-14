module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let myString = str
      .replace(/[0-9]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/ /g, "")
      .toLocaleLowerCase();

    let strArr = [];
    let counts = {};

    for (let x = 0; x < myString.length; x++) {
      if (!(myString[x] in counts)) {
        counts[myString[x]] = 1;
      } else if (myString[x] in counts) {
        counts[myString[x]] += 1;
      }
    }
    return counts;
    // for (let x = 0; x < myString.length; x++) {}
  } else return "error";
};
