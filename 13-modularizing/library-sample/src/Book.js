import React from 'react'

export const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Author: {author}</h3>
      <p>Pages: {pages}</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes! :)' : 'no! :('}</p>
    </div>
  )
}
