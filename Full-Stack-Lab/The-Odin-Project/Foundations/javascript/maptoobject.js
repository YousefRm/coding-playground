let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let usersmapped = users.map((user) => { return { fullName: user.name + " " + user.surname, id: user.id } });
users.forEach((item, i, arr) => {
  arr[i].fullName = arr[i].name + " " + arr[i].surname;
  delete arr[i].name;
  delete arr[i].surname;
});

console.log(users);
console.log(usersmapped)
