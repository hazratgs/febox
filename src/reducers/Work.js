import { WORK } from '../constants/Work'

const initialState = {
    work: ''
}

export default function workState(state = initialState, action) {
    switch (action.type){
        case WORK:
            return {...state, work: action.payload}

        default:
            return state
    }
}