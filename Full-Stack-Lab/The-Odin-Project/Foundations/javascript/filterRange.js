function filterRange(start, finish, arr) {
  return arr.filter(num => num >= start && num <= finish);

};
let providedArray = [3, 0, 6, 1, 4, 8, 0, 3, 9];
console.log(filterRange(1, 6, providedArray))
