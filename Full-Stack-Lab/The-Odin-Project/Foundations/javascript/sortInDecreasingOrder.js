function sortInDeacresingOrder(arr) {
  let result = arr.sort((a, b) => b - a);
  return result;
};
let arrayOfNumber = [1, 2, 7, 9, 19, 39, 33, 9, 0];
console.log(sortInDeacresingOrder(arrayOfNumber));
