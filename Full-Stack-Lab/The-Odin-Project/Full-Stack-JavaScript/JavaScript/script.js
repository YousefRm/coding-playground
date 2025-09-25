let inputs = document.querySelector(".inputs");
let addButton = document.querySelector(".add");
let values = inputs.children;
let trigger = false;
let bookArray = [];
let main = document.getElementsByTagName("main")[0];
function Book(author, Title, Pages, Read) {
    this.author = author;
    this.Title = Title;
    this.Pages = Pages;
    this.Read = Read;
    this.id = crypto.randomUUID();
}
function bookrender() {
    main.innerHTML="";
    for(let i=0; i<bookArray.length;i++) {
        let div = document.createElement("div");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let button = document.createElement("button");
        button.addEventListener("click", function removeBook() {
            bookArray.splice(i,1);
            bookrender();
        }
        )
        button.textContent="Remove";
        title.textContent = `${bookArray[i].Title}`;
        author.textContent = `Author: ${bookArray[i].author}`;
        pages.textContent = `Pages: ${bookArray[i].Pages}`;
        read.textContent = `Read: ${bookArray[i].Read}`;
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(button);
        main.appendChild(div);
    }
}
addButton.addEventListener("click", function addBookToLibrary() {
    inputs.classList.toggle("show");
    if(trigger) {
     let title = values[0].value;
     let author = values[1].value;
     let pages = values[2].value;
     let read = values[3].value;
     bookArray.push(new Book(author,title,pages,read));
     bookrender();
    };
    trigger = !trigger;
});
