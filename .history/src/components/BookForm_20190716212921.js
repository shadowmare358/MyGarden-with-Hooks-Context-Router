import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';
import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'
import {Link} from 'react-router-dom';
import MainPage from './MainPage';
const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image, setImage] = useState('')
    const { books } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author, image}})
        setTitle('');
        setAuthor('');
    }
    return (
        <form className="addPage" onSubmit={handleSubmit}>
            <input className="addPage_input-type-name" type="name" placeholder="Plant name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input className="addPage_input-type-desc" type="desc" placeholder="Description" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input className="addPage_input-type-image" type="image" accept="image/*" onChange={(e) => setImage(plantImg)}/>
            <input className="addPage_input-type-submit" type="submit" value="Add plant"/>
            {books.length >= 1 ? <Link to="/mainPage" className="addPage__moveMain">Move to Garden Panel</Link> : ''}
        </form>
        <Route path="/users/" component={MainPage} />
     );
}

export default NewBookForm;
