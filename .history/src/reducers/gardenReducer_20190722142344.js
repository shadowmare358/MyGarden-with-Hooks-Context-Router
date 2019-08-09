import uuid from 'uuid/v1'

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                desc: action.plant.desc,
                name: action.plant.name,
                image: action.plant.image,
                id: uuid(),
                irrigation: 25
            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        case 'STARTTIME_PLANT':
                return state.filter((plant) => {
                    if (plant.id === action.id) {
                        const time = action.time*3600;
                      return Object.assign({}, plant, {
                            irrigation: setInterval(() => {plant.irrigation++},time/100)
                      })
                    }
                    return plant
                  })

        default:
            return state
    }
}
