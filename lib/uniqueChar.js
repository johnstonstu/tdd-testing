module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let myString = str
      .replace(/[0-9]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/ /g, "")
      .toLocaleLowerCase();

    let res = "";

    for (let x = 0; x < myString.length; x++) {
      if (myString[x] != myString[x + 1]) {
        res = myString[x];
      }
    }
    return res;
  } else return "error";
};
