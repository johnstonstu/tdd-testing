module.exports = str => {
  if (typeof str === "string" && str.length > 1) {
    let myString = str
      .replace(/[0-9]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/ /g, "")
      .toLocaleLowerCase();

    let res = "";
    let count = 0;
    let ans = "";

    for (let x = 0; x < myString.length; x++) {
      count++;
      if (myString[x] != myString[x + 1]) {
        res = myString[x];
        count = 0;
      }
      if (count == 1) {
        ans += res;
      }
    }
    return ans[0];
  } else return "error";
};
