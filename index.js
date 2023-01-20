function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  // To pass the tests, don't forget to return your fetch!
  .then(r => r.json())
  .then(data => renderBooks(data));
  return fetch('https://anapioficeandfire.com/api/books')
} 

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


