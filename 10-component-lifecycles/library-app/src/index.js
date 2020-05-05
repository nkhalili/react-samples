import React, { Component } from 'react';
import { render } from 'react-dom';

const bookList = [
  {"title" : "Book 1", "author" : "Author 1", "pages" : 100},
  {"title" : "Book 2", "author" : "Author 2", "pages" : 150},
  {"title" : "Book 3", "author" : "Author 3", "pages" : 500}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <p>Pages: {pages}</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes! :)' : 'no! :('}</p>
    </div>
  )
}

const Hiring = () => 
  <div>
    <p>We are hiring! Check www.library.com/jobs for more.</p>
  </div>

const NotHiring = () => 
  <div>
    <p>We are not hiring right now.</p>
  </div>

class Library extends Component {

  state = { 
    open: true,
    freeBookmark: true,
    hiring: true
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>toggle state</button>
        {books.map(
          (book, i) => 
            <Book 
              key={i}
              title={book.title}
              author={book.author}
              pages={book.pages}
              freeBookmark={this.state.freeBookmark} />
        )}
      </div>
    )
  }
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
);
