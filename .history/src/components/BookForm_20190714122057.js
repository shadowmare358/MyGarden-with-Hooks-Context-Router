import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAutor]
    return (  );
}

export default NewBookForm;