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
