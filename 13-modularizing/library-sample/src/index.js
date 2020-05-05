import React from 'react';
import { render } from 'react-dom';
import Library from './Library'


const bookList = [
  {"title" : "Book 1", "author" : "Author 1", "pages" : 100},
  {"title" : "Book 2", "author" : "Author 2", "pages" : 150},
  {"title" : "Book 3", "author" : "Author 3", "pages" : 500}
]

render(
  <Library books={bookList} />,
  document.getElementById('root')
);
