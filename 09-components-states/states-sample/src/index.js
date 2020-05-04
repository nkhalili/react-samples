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
  constructor(props){
    super(props) // will create a new instance of this class
    this.state = { // Adding state value
      open: true
    } 
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }
  toggleOpenClosed() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {/* Using state value */}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>toggle state</button>
        {books.map(
          (book, i) => 
            <Book 
              key={i}
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
