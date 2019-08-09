export const bookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return 
    }
}

const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }