import uuid from 'uuid/v1'

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK'
    }
}

const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }