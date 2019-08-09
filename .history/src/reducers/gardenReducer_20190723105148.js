import uuid from 'uuid/v1'
import NewPlantForm from '../components/PlantForm';

export const gardenReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PLANT':
            return [...state, {
                desc: action.plant.desc,
                name: action.plant.name,
                image: action.plant.image,
                id: uuid(),
                irrigation: 1
            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        case 'STARTTIMEIRR_PLANT':
                return state.filter((plant) => {
                        if (plant.id === action.id ) {
                                return Object.assign({}, plant, {
                                    irrigation: plant.irrigation++
                              })

                    }
                    return plant
                  })
        case 'STARTTIMEFER_PLANT':
                        return state.filter((plant) => {
                                if (plant.id === action.id ) {
                                        return Object.assign({}, plant, {
                                            fertilization: plant.fertilization++
                                      })

                            }
                            return plant
                          })
        case 'STARTTIMEWED_PLANT':
                                return state.filter((plant) => {
                                        if (plant.id === action.id ) {
                                                return Object.assign({}, plant, {
                                                    weeding: plant.weeding++
                                              })

                                    }
                                    return plant
                                  })
        case 'IRRIGATION_RESET':

                return state.filter((plant) => {
                    if (plant.id === action.id) {
                       plant.irrigation = 0;
                        return Object.assign({}, plant, {
                            irrigation: plant.irrigation
                      })

                    }
                    return plant
                  })
                  case 'IRRIGATION_RESET':

                        return state.filter((plant) => {
                            if (plant.id === action.id) {
                               plant.irrigation = 0;
                                return Object.assign({}, plant, {
                                    irrigation: plant.irrigation
                              })

                            }
                            return plant
                          })
        default:
            return state
    }
}
