# Component state

## Using Destructor

Instead of getting books property from *props* like this:

```javascript
    class Library extends Component {
        render() {
            const books = this.props.books; // getting books from props
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
```

You can use destructor like this:

```javascript
    class Library extends Component {
        render() {
            const { books } = this.props; // Using books destructor (object destructor)
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
```

## Adding local state to the component

One way to add local state to the component is to use **constructor method**.

- *State* is an object with different keys similar to *props*.

```javascript
class Library extends Component {
  constructor(props){
    super(props) // will create a new instance of this class
    this.state = { // Adding state value
      open: true
    }
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {/* Using state value */}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
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
```

## Set state

1.To change the state via setState(), use this code:

```javascript
  toggleOpenClosed() {
      this.setState({
        open: !this.state.open
      })
    }
```

2.Don't forget to bind your method through the constructor:

```javascript
  constructor(props){
    super(props)
    this.state = {
      open: true
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }
```

2.1. You can also use arrow function to simplify this operation. You don't have to set it in constructor, if you are using arrow function in your function declaration:

```javascript
  toggleOpenClosed = () => {
      this.setState({
        open: !this.state.open
      })
    }
```

setState is **asynchronous**, if you are relying on previous state you need to use a **callback function** instead of using objects like [2].

```javascript
  toggleOpenClosed() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
```

**Rule of thumb:** Keep the state in the root of the tree. (Lifting State Up)
Your root component (e.g. Library) should hold all the state variables and pass them to the children components (e.g. Book).

```javascript
  const Book = ({title, author, pages, freeBookmark}) => {
    return (
      <div>
        <h1>Title: {title}</h1>
        <h3>Author: {author}</h3>
        <p>Pages: {pages}</p>
        {/* Using the state variable from props */}
        <p>Free Bookmark today: {freeBookmark ? 'yes! :)' : 'no! :('}</p>
      </div>
    )
  }

  class Library extends Component {
    ...
    render() {
      const { books } = this.props;
      return (
        <div>
          <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
          <button onClick={this.toggleOpenClosed}>toggle state</button>
          {books.map(
            (book, i) =>
              <Book
                key={i}
                title={book.title}
                author={book.author}
                pages={book.pages}
                freeBookmark={this.state.freeBookmark} /> // passing the state through props
          )}
        </div>
      )
    }
  }
```
