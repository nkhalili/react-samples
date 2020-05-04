import React from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "Book 4", "author" : "Author 4", "pages" : 500},
  {"title": "Book 1", "author" : "Author 1", "pages" : 150},
  {"title": "Book 2", "author" : "Author 2", "pages" : 400},
  {"title": "Book 3", "author" : "Author 3", "pages" : 100},
]

const Library = ({ books }) =>
  <section>
    {books.map(
      (book, i) => 
        <Book
          key={i}
          title={book.title} 
          author={book.author} 
          pages={book.pages}/>
    )}
  </section>

const Book = ({title, author, pages}) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <p>Pages: {pages}</p>
    </div>
  )
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
);
