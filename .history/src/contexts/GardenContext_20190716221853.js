import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/gardenReducer'

export const GardenContext = createContext();

const GardenContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('garden');
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem('garden', JSON.stringify(books))
  }, [books])

  return (
    <GardenContext.Provider value={{ books, dispatch }}>
      {props.children}
    </GardenContext.Provider>
  );
}

export default GardenContextProvider;