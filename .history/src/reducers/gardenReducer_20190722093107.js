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
                const state = Object.assign({}, this.state);
                state[action.id].irrigation = state[action.id].irrigation + 1;
                let objIndex = state.findIndex((obj => obj.id === action.id));
                state[objIndex].irrigation = state[objIndex].irrigation + 1;
                this.setState({
                    state
                });
                break;
        default:
            return state
    }
}
