import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                desc: action.plant.desc,
                name: action.plant.name,
                image: action.plant.image,
                id: uuid()
            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        default:
            return state
    }
}
