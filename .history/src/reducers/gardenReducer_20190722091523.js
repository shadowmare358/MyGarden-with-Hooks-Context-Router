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
                let updatedItem = state.find((plant) => { return plant.id === action.id })
                updatedItem.irrigation = 1;
                let foundIndex = state.findIndex(plant => plant.id === action.id);
                state[foundIndex].irrigation = 1;
                return state;
        default:
            return state
    }
}
