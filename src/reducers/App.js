import { COLOR_HEADER } from '../constants/App'

const initialState = {
    colorHeader: 'white'
}

export default function headerState(state = initialState, action) {
    switch (action.type){
        case COLOR_HEADER:
            return {...state, colorHeader: action.payload}

        default:
            return state
    }
}