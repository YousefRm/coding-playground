function filterArrayOnlyMembers(arr) {
  let array1 = [];
  let array2 = [];
  arr.forEach((item) => { if (array1.includes(item)) { array2.push(item) } else { array1.push(item) } });
  return array1.filter(item => !array2.includes(item))
};
let inputArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 0, 8];
console.log(filterArrayOnlyMembers(inputArray))
