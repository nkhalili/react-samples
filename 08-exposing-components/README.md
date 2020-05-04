# Exposing Components

## First sample

```javascript
    import React from 'react';
    import { render } from 'react-dom';

    const Library = () =>
    <section>
        <Book title="Book 1" author="Author 1" pages={100}/>
        <Book title="Book 2" author="Author 2" pages={400}/>
        <Book title="Book 3" author="Author 3" pages={250}/>
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
    <Library />,
    document.getElementById('root')
    );
```

## Rendering child components - .map() usage

```javascript
    const Library = ({ books }) =>
    <section>
        {books.map(
        book => 
            <Book 
            title={book.title} 
            author={book.author} 
            pages={book.pages}/>
        )}
    </section>
```
