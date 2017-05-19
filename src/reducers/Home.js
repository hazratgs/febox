import {
    ADD_BLOB,
    ADD_VIDEO,
    SET_ACTIVE_SLIDE

} from '../constants/Home'

const initialState = {
    activeSlide: null,
    blobs: {},
    videos: {}
}

export default function homeState(state = initialState, action) {
    switch (action.type){
        case ADD_BLOB:
            return {...state, blobs: action.payload}

        case ADD_VIDEO:
            return {...state, videos: action.payload}

        case SET_ACTIVE_SLIDE:
            return {...state, activeSlide: action.payload}

        default:
            return state
    }
}