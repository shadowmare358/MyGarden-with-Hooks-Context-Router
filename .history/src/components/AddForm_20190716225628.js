import React from 'react';
import NewPlantForm from './PlantForm';
import PlantsList from './PlantsList';
import Navbar from './Navbar';
const AddForm = () => {

        return (
            <>
            <div>
        <Navbar/>
        <PlantsList/>
        <NewPlantForm/>
        <h1>MainPage</h1>
        </>
        );


}

export default AddForm ;