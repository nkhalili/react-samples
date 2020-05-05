# Default props

To set default values for properties to prevent functionality breaks.

## Class component

```javascript
    static defaultProps = {
        books: [
            {"title": "Default Book", "author": "Default Author", "pages": -1}
        ]
    }
```

## Function component

```javascript
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
```

## Prop types

To declare props types for components to make sure the right types are used in them. It adds warnings on console (helpful for debugging):

```console
VM581:37 Warning: Failed prop type: Invalid prop `books` of type `object` supplied to `Library`, expected `array`.
```

1. Install package

```powershell
    npm install prop-types --save
```

2. Import package

```javascript
    import PropTypes from 'prop-types'
```

3. Setup the prop types

```javascript
Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
}
```
