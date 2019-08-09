import React from 'react';

const ModifyInfo = (plant) => {
    return (
        <div className="modal">
        <div className="modal-content">
        <p className="mainList__inputs__name">irrigation</p>
        <input type="text" placeholder={plant.irrigation} onChange={(e) => setIrr(e.target.value)}/>
        <button onClick={() => handleTime(plant,'IRRIGATION', false)}>Start timer</button>
        <button onClick={() => resetTimer(plant,id,'IRRIGATION')}>RESET</button>
        <p className="mainList__inputs__name">fertilization</p>
        <input type="text"/>
        <button onClick={() => handleTime(plant,'FERTILIZATION')}>Start timer</button>
        <button onClick={() => resetTimer(plant,id,'FERTILIZATION')}>RESET</button>
        <p className="mainList__inputs__name">weeding</p>
        <input type="text"/>
        <button onClick={() => handleTime(plant,'WEEDING')}>Start timer</button>
        <button onClick={() => resetTimer(plant,id,'WEEDING')}>RESET</button>
        <p className="mainList__inputs__name">Plant name</p>
        <input type="text" placeholder={plant.name} />
        <p className="mainList__inputs__name">Description</p>
        <input type="text" placeholder={plant.desc}/>
        <p className="mainList__inputs__name">Image</p>
        <img className="mainList__image" src={plant.image} alt="plant"></img>
        <input className="addPage_input-type-file" type="file" accept="file/*" onChange={(e) => setImage(plantImg)}/>
        <span class="close-button" onClick={() => toggleModal()}>&times;</span>
        </div>
        </div>
      );

}

export default ModifyInfo;