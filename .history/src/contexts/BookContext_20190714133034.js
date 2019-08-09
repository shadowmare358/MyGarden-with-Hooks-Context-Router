import React, { createContext, useState, useReducer } from 'react';


export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useReducer(bookReducer, []);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;