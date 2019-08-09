import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/GardenContext';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import { BrowserRouter, Route} from 'react-router-dom'
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BookContextProvider>
        <Route exact path="/" components={{main: Navbar,cos: NewBookForm, cosinnego: BookList}}/>
        <Route path="/mainPage" component={MainPage}/>
      </BookContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
