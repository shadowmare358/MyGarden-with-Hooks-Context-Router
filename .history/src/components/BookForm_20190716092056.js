import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';
import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'
const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image, setImage] = useState('')
    const readURL = (e) => {
       setImage('E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author, image}})
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text author" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="file" accept="image/*" onChange={(e) => readURL()}/>
            <input type="submit" value="add book"/>
        </form>
     );
}

export default NewBookForm;