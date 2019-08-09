import React, { useContext, useState} from 'react';
import {GardenContext} from '../contexts/GardenContext';
import plantImg from '../images/E6A94B58-3203-4FB0-9C64-87E1AD2B9DF9.png'
import {Link} from 'react-router-dom';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const NewPlantForm = () => {
    const {dispatch} = useContext(GardenContext)
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [image, setImage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PLANT', plant: {name, desc, image}})
        setName('');
        setDesc('');
    }
    return (
        <form className="addPage" onSubmit={handleSubmit}>
            <input className="addPage_input-type-name" type="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input className="addPage_input-type-desc" type="desc" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required/>
            <input className="addPage_input-type-image" type="image" accept="image/*" value={image} onChange={(e) => setImage(plantImg)}/>
            <input className="addPage_input-type-submit" type="submit" value="Add plant"/>
            {dispatch.length >= 1 ? <Link to="/mainPage" className="addPage__moveMain">Move to Garden Panel</Link> : ''}
        </form>
     );
}

export default NewPlantForm;
