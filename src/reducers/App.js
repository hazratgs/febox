import {
    COLOR_HEADER,
    SHOW_ASIDE,
    HIDE_ASIDE
} from '../constants/App'

const initialState = {
    colorHeader: 'white',
    aside: 'hidden'
}

export default function headerState(state = initialState, action) {
    switch (action.type){
        case COLOR_HEADER:
            return {...state, colorHeader: action.payload}

        case SHOW_ASIDE:
            return {...state, aside: action.payload}

        case HIDE_ASIDE:
            return {...state, aside: action.payload}

        default:
            return state
    }
}