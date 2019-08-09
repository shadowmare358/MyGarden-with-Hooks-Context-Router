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
                    garden: state.garden.map(plant => {
                      if (plant.id !== action.id) return traveler; // this is not out target, return the object as is
                      return { // return a new object
                        ...traveler,
                        enemies: [
                          ...traveler.enemies, { // new enemy
                            id,
                            profession,
                          }
                        ]
                      }
                    })
                  };
                  return nextState;
                return state.map((plant, index) => {
                    if (index === action.index) {
                      return Object.assign({}, plant, {
                        desc: 'Ala ma kota'
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
