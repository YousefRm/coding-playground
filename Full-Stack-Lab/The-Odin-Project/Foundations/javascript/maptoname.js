let john = { name: "john", age: 15 };
let youssef = { name: "youssef", age: 17 };
let mostafa = { name: "Mostafa", age: 88 };
let arrayOfObjects = [john, youssef, mostafa];
let mapToName = (arr) => {
  return arr.map(obj => obj.name);
};
console.log(mapToName(arrayOfObjects));
