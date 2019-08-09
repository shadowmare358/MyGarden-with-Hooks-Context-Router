import React, { useContext, useState } from 'react';
import { GardenContext } from '../contexts/GardenContext';
let id;
let visible = true;
const ModifyInfo = ({plant},key,show) => {
    const { garden } = useContext(GardenContext);
    const {dispatch} = useContext(GardenContext);
    const [irrigation,setIrr] = useState('');
    const [image, setImage] = useState('')

    const resetTimer = (plant,id,target) => {

        clearInterval(id);
        dispatch({type: `${target}_RESET`, id: plant.id});
      }
      const toggleModal = () => {
        visible = false;
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
    show = true;

    return
    if(show){

    }


      ) : (
        return null;
      );

}

export default ModifyInfo;