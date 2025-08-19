function camelize(str) {
  let strArray = str.split("-");
  strArray.forEach((word, i, arr) => {
    if (i != 0) {
      let wordArray = word.split("");
      wordArray[0] = wordArray[0].toUpperCase();
      arr[i] = wordArray.join("");
    }
  });
  return strArray.join("");
};
console.log(camelize("remove-dash-and-camelize"))
