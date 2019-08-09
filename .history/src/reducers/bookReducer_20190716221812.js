import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                title: action..title,
                author: action..author,
                image: action..image,
                id: uuid()
            }]
        case 'REMOVE_PLANT':
            return state.filter( => .id !== action.id)
        default:
            return state
    }
}
