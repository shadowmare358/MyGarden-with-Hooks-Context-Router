import React from 'react';
import NewPlantForm from './PlantForm';
import PlantsList from './PlantsList';
import Navbar from './Navbar';
const AddForm = () => {

        return (
            <>
            <div className="addForm">
        <Navbar/>
        <PlantsList/>
        <NewPlantForm/>
        </div>
        </>
        );


}

export default AddForm ;