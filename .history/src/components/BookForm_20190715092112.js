import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image,setImage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}})
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text author" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <img style={{width: '200px', height: '200px'}}></img>
            <input type="file" accept="image/*" onChange={((e) => setImage())}/>
            <input type="submit" value="add book"/>
        </form>
     );
}

export default NewBookForm;