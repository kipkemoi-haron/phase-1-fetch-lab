function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const url = "https://anapioficeandfire.com/api/books";

  return fetch(url) // Perform the fetch request
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => renderBooks(data)); // Pass the JSON object to renderBooks()
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
