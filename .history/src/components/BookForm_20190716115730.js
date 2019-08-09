import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';
import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'
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
        console.log(image)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text author" placeholder="Plant name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Description" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="file" accept="image/*" onChange={(e) => setImage(plantImg)}/>
            <input type="submit" value="Add plant"/>
            {books.length >= 1 ? <button>Move to Garden Panel</button> : ''
        </form>
     );
}

export default NewBookForm;
