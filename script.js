let x
x = document.querySelector('#addBook');
const myLibrary = [];


function nomerKnigi() {
    return (`Book ${myLibrary.length + 1}`);
}

function addBookLibrary(x) {
    let author = document.querySelector('#author-input').value;
    let title = document.querySelector('#title-input').value;
    let pages = document.querySelector('#pages-input').value;
    let mark = document.querySelector('#mark-input').value;
    x = new Book(title, author, pages, mark);
    myLibrary.push(x);
}

function removeBookLibrary() {
    myLibrary.remove;
}

function Book(title, author, pages, mark) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.mark = mark;
}

function addRow () {
    const tablica = document.querySelector('#tablica').getElementsByTagName('tbody')[0];
    const newRow = tablica.insertRow();
    const td1 = newRow.insertCell(0);
    const td2 = newRow.insertCell(1);
    const td3 = newRow.insertCell(2);
    const td4 = newRow.insertCell(3);
    const td5 = newRow.insertCell(4);

    const delet = document.createElement('button');
    delet.textContent = 'Delete';
    delet.addEventListener('click', function() {
        myLibrary.pop();
        newRow.remove();
    })

    td1.textContent = myLibrary[myLibrary.length - 1].title;
    td2.textContent = myLibrary[myLibrary.length - 1].author;
    td3.textContent = myLibrary[myLibrary.length - 1].pages;
    td4.textContent = myLibrary[myLibrary.length - 1].mark;
    td5.appendChild(delet);
    
}

x.addEventListener('click', function(e) {
    e.preventDefault();
    addBookLibrary(nomerKnigi());
    addRow ();
});


















