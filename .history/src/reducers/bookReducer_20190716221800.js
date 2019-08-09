import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                image: action.book.image,
                id: uuid()
            }]
        case 'REMOVE_PLANT':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}
