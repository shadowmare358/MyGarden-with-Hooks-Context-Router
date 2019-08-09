import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                desc: action.plant.desc,
                name: action.plant.name,
                image: action.plant.image,
                id: uuid(),
                irrigation: 0,
                fertilization: 0,
                weeding: 0

            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        case 'STARTTIME_PLANT':
                const nextState = {
                    ...state,
                    garden: state.map(plant => {
                      if (plant.id === action.id) // this is not out target, return the object as is
                            plant.irrigation = 10
                    })
                  };
                  return nextState;

        default:
            return state
    }
}
