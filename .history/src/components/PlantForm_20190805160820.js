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
    const { garden } = useContext(GardenContext);

    if(image === ""){
        setImage(plantImg);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({type: 'ADD_PLANT', plant: {name, desc, image}})
        setName('');
        setDesc('');
        setImage('');
    }
    return (
        <form className="addPage" onSubmit={handleSubmit}>
            <input className="addPage_input-type-name" type="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input className="addPage_input-type-desc" type="desc" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} required/>
            <input className="addPage_input-type-file" type="file" accept="file/*" onChange={(e) => setImage(if(URL.createObjectURL(e.target.files[0]))} />
            <input className="addPage_input-type-submit" type="submit" value="Add plant"/>
            {garden.length >= 1 ? <Link to="/mainPage" className="addPage__moveMain">Move to Garden Panel</Link> : ''}
        </form>
     );
}

export default NewPlantForm;
