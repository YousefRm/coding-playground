function Book(title, author, pages, status) {

  if (!new.target) {
    /* throw Error("you forgot to start with new keyword"); */


  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return this.title + this.author + this.pages + this.status;
  }
}
let cssInDepth = new Book("css in depth ", "dont remember ", 300, " not finished");
console.log(cssInDepth.info());

let test = Book("this", "is", "a", "test");
let y = [];
console.log(Object.getPrototypeOf(y));
function Person() {
  this.kind = "human";
}
function Student(college) {
  Person.call(this);
  this.college = college;
}
Object.setPrototypeOf(Student.prototype, Person.prototype);

let student1 = new Student("university");

console.log(student1.kind);
