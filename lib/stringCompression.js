module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let myString = str
      .replace(/[0-9]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/ /g, "")
      .toLocaleLowerCase();

    let strArr = [];
    let res = "";
    let count = 0;

    for (let x = 0; x < myString.length; x++) {
      count++;
      if (myString[x] != myString[x + 1]) {
        res += myString[x] + count;
        count = 0;
      }
    }

    return res;
  } else return "error";
};
