import React, { useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [image, setImage] = useState('')
    const readURL = (input) => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })

        const formData = new FormData()

        files.forEach((file, i) => {
          formData.append(i, file)
        })

        fetch(`${API_URL}/image-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(images => {
          this.setState({
            uploading: false,
            images
          })
        })
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