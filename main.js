const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function render() {
    let booksContainer = document.querySelector(".books");
    
    // Clear previous entries
    booksContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        // Create book card
        let bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        // Create elements for book details
        let titleEl = document.createElement("div");
        titleEl.textContent = `Title: ${book.title}`;

        let authorEl = document.createElement("div");
        authorEl.textContent = `Author: ${book.author}`;

        let pagesEl = document.createElement("div");
        pagesEl.textContent = `Pages: ${book.pages}`;

        let isReadEl = document.createElement("div");
        isReadEl.textContent = book.isRead ? "Read ✅" : "Not Read ❌";

        // Create a remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
            myLibrary.splice(i, 1); // Remove book from array
            render(); // Re-render after deletion
        });

        // Append elements to book card
        bookCard.appendChild(titleEl);
        bookCard.appendChild(authorEl);
        bookCard.appendChild(pagesEl);
        bookCard.appendChild(isReadEl);
        bookCard.appendChild(removeBtn);

        // Append book card to container
        booksContainer.appendChild(bookCard);
    }
}


function addBookToLibrary () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("isRead").checked;
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "flex"
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})
