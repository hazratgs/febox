import { HELLO } from '../constants/Home'

const initialState = {
    hello: ''
}

export default function homeState(state = initialState, action) {
    switch (action.type){
        case HELLO:
            return {...state, hello: action.payload}

        default:
            return state
    }
}