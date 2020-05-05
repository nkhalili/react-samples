import React, { Component } from 'react';
import { render } from 'react-dom';

const bookList = [
  {"title" : "Book 1"},
  {"title" : "Book 2", "author" : "Author 2", "pages" : 150},
  {"title" : "Book 3", "author" : "Author 3", "pages" : 500}
]

const Book = ({title="default title", author="default author", pages=-1, freeBookmark}) => {
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

  static defaultProps = {
    books: [
      {"title": "Default Book", "author": "Default Author", "pages": -1}
    ]
  }

  state = { 
    open: true,
    freeBookmark: true,
    hiring: true,
    data:[],
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1') // fetch data from RestAPI
      .then(data => data.json()) // Format the data into json
      .then(data => this.setState({data, loading: false})) // Set the data into our state variable 'data'
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
        {this.state.loading
          ? "Loading..."
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                    <h3>Library Product of the Week!</h3>
                    <h4>{product.name}</h4>
                    <img src={product.image} height={100} alt={product.name} />
                  </div>
                )
              })}
          </div>
        }
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
  <Library books={bookList}/>,
  document.getElementById('root')
);
