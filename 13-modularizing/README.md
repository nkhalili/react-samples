# Modularization

As the project grows, you need to put each component in different file; this process is called modularization.

## Some advices

To export your class components use:

```javascript
    export default Library
```

To export your function components use;

```javascript
    export const Book = ({title, author, pages, freeBookmark}) => {
        ...
    }
```

Then you can import them in your main file, like:

```javascript
    import Library from './Library'
    import { Book } from './Book'
```
