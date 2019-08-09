import React, { useContext, useState } from 'react';
import { GardenContext } from '../contexts/GardenContext';
let id;
let visible = true;
const ModifyInfo = ({plant},key,show) => {
    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    const [image, setImage] = useState('')
    let cos=true;
    const resetTimer = (plant,id,target) => {

        clearInterval(id);
        dispatch({type: `${target}_RESET`, id: plant.id});
      }
      const toggleModal = () => {
        cos = false;
        console.log('Niewidoczny ' + visible)
      }
      const handleTime = (plant, target, reset) => {
        let counter = 0;
        let timer = () => {
          if(counter >= 99 || reset === true){
            clearInterval(id);
            alert(`${target} NEEDED!`)
            dispatch({type: `${target}_RESET`, id: plant.id});
          }else{
            counter++;
            dispatch({type: `START${target}_PLANT`, id: plant.id});
          }
        }
        id = setInterval(timer, 1000)

    }
      if(show){
        return(
  <div className="modal" key={key}>
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
              <input className="addPage_input-type-file" type="file" accept="file/*" onChange={(e) => setImage()}/>
              <span className="close-button" onClick={() => toggleModal()}>&times;</span>
              </div>
    </div>
    )}else{
      return null;
    }
}

export default ModifyInfo;