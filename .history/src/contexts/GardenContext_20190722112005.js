import React, { createContext, useReducer, useEffect } from 'react';
import { gardenReducer } from '../reducers/gardenReducer'

export const GardenContext = createContext();

const GardenContextProvider = (props) => {
  const [garden, dispatch] = useReducer(gardenReducer, [], () => {
    const localData = localStorage.getItem('garden');
    return localData ? localData) : []
  });
  useEffect(() => {
    localStorage.setItem('garden', JSON.stringify(garden))
  }, [garden])

  return (
    <GardenContext.Provider value={{ garden, dispatch }}>
      {props.children}
    </GardenContext.Provider>
  );
}

export default GardenContextProvider;