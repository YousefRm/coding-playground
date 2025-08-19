function shuffle(arr) {
  let finalArray = new Array(arr.length).fill(0);
  let size = arr.length;
  let randomIndexes = [];
  arr.forEach(item => finalArray[getrandomIndex()] = item);
  function getrandomIndex() {
    let randomNumber = Math.floor(Math.random() * size);
    if (randomIndexes.includes(randomNumber)) { return getrandomIndex() };
    randomIndexes.push(randomNumber);
    return randomNumber;
  };
  return finalArray;
}
let targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = new Array(11).fill(0);
for (let i = 0; i <= 10000; i++) {
  count[shuffle(targetArray)[0]]++;
};
console.log(shuffle(targetArray));
count.shift();
console.log(count);
