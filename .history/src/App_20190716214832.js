import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <Route path="/" exact component=NewBookForm/>
      </BookContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
