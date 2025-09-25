class Entity {
  constructor(name) {
    this.name = name;
  }
  get kind() {
    console.log(this.type)
  }
}
class Human extends Entity {
  constructor(name) {
    super(name);
    this.type = "human";
  }
}
let person1 = new Human("youssef");
function test1() {
  person1.kind;
}
class BankAcount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  despoit(amount) {
    this.balance += amount;
    console.log(this.balance)
  }
  withdraw(amount) {
    if (this.balance - amount < 0) { return console.log("not enough money") };
    this.balance -= amount;
    console.log(this.balance)
  }
}
const myBankAcount = new BankAcount("youssef", 1000);
function test2() {
  myBankAcount.despoit(2000);
  myBankAcount.withdraw(4000);
  console.log(myBankAcount.balance);
}
export {
  person1, myBankAcount
}

