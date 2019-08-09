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
                let foundIndex = state.garden.findIndex(x => x.id === action.id);
                state.garden[foundIndex].irri
                let i = state.garden.indexOf(action.id);
                state.garden[i].irrigation = 1;
                break;
        default:
            return state
    }
}
