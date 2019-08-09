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
                return state.map((plant, id) => {
                    if (id === action.id) {
                      return Object.assign({}, plant, {
                        irrigation: plant.irrigation++
                      })
                    }
                    return plant
                  })
                // state[action.id].irrigation = 1;
                // return [...state, state]
        default:
            return state
    }
}
