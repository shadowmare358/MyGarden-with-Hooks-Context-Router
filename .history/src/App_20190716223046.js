import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/GardenContext';
import BookList from './components/PlantsList';
import NewBookForm from './components/PlantForm';
import { BrowserRouter, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import AddForm from './components/AddForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BookContextProvider>
        <Route exact path="/" component={AddForm}/>
        <Route path="/mainPage" component={MainPage}/>
      </BookContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
