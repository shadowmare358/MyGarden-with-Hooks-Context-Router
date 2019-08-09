import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image,setImage] = useState('')
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
               setImage()
            };
           reader.readAsDataURL(input.files[0]);
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
            <input type="file" accept="image/*" onChange={(e) => setImage(this)}/>
            <input type="submit" value="add book"/>
        </form>
     );
}

export default NewBookForm;