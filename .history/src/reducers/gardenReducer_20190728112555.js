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
                irrigation: 0,
                fertilization: 0,
                weeding: 0
            }]
        case 'REMOVE_PLANT':
            return state.filter(plant => plant.id !== action.id)
        case 'STARTIRRIGATION_PLANT':
                return state.filter((plant) => {
                        if (plant.id === action.id ) {
                                return Object.assign({}, plant, {
                                    irrigation: plant.irrigation++
                              })

                    }
                    return plant
                  })
        case 'STARTFERTILIZATION_PLANT':
                        return state.filter((plant) => {
                                if (plant.id === action.id ) {
                                        return Object.assign({}, plant, {
                                            fertilization: plant.fertilization++
                                      })

                            }
                            return plant
                          })
        case 'STARTWEEDING_PLANT':
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
        case 'FERTILIZATION_RESET':

                        return state.filter((plant) => {
                            if (plant.id === action.id) {
                               plant.fertilization = 0;
                                return Object.assign({}, plant, {
                                    fertilization: plant.fertilization
                              })

                            }
                            return plant
                          })
        case 'WEEDING_RESET':
                                return state.filter((plant) => {
                                    if (plant.id === action.id) {
                                       plant.weeding = 0;
                                        return Object.assign({}, plant, {
                                            weeding: plant.weeding
                                      })

                                    }
                                    return plant
                                  })
        case 'SET_NAME':
                                return state.filter((plant) => {
                                    if (plant.id === action.id) {
                                        return Object.assign({}, plant, {
                                            name: action.name
                                    })

                                    }
                                    return plant
                                })
                               
        default:
            return state
    }
}
