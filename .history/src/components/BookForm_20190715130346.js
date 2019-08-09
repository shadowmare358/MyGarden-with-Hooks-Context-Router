import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image] = useState('')
    const readURL = (input) => {
        console.log(input)
        if (input && input[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                
               setImage('http://placehold.it/180')
            };
           reader.readAsDataURL(input[0]);
        }
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
            <input type="file" accept="image/*" onChange={(e) => readURL(e.target.files)}/>
            <input type="submit" value="add book"/>
        </form>
     );
}

export default NewBookForm;