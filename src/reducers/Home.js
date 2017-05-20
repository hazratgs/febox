import {
    ADD_VIDEO,
    LOAD_VIDEO,
    SET_ACTIVE_SLIDE

} from '../constants/Home'

const initialState = {
    activeSlide: null,
    videos: {},
    blobs: {}
}

export default function homeState(state = initialState, action) {
    switch (action.type){
        case ADD_VIDEO:
            return {...state, videos: action.payload}

        case LOAD_VIDEO:
            return {...state, blobs: action.payload}

        case SET_ACTIVE_SLIDE:
            return {...state, activeSlide: action.payload}

        default:
            return state
    }
}