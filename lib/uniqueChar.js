module.exports = str => {
  if (typeof str !== "string" || !str || !str.length) return "error";
  let count;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    let unique = true;
    for (let x = 0; x < str.length; x++) {
      if (letter === str[x] && i !== x) unique = false;
    }
    if (unique) return letter;
  }
};
