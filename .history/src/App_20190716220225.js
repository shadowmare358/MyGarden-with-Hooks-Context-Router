import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import { BrowserRouter, Route} from 'react-router-dom'
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm/>
        <Route path="/" exact components={addPage}/>
        <Route path="/mainPage" exact component={MainPage}/>
      </BookContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
