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
