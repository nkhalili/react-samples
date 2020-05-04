import React, { Component } from 'react';
import { render } from 'react-dom';

const bookList = [
  {"title" : "Book 1", "author" : "Author 1", "pages" : 100},
  {"title" : "Book 2", "author" : "Author 2", "pages" : 150},
  {"title" : "Book 3", "author" : "Author 3", "pages" : 500}
]

const Book = ({title, author, pages}) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <p>Pages: {pages}</p>
    </div>
  )
}

class Library extends Component {
  render() {
    const books = this.props.books;
    return (
      <div>
        {books.map(
          book => 
            <Book 
              title={book.title}
              author={book.author}
              pages={book.pages} />
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
);
