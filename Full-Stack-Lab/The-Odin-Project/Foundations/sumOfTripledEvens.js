let inputArray = [1, 2, 3, 4, 5];
function sumOfTripledEvens(arr) {
  return arr.filter(num => num % 2 == 0).map(num => num * 3).reduce((total, item) => total += item, 0);
};
let outputArray = sumOfTripledEvens(inputArray);
console.log(outputArray)
