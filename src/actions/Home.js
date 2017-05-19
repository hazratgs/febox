import {
    ADD_BLOB,
    ADD_VIDEO,
    SET_ACTIVE_SLIDE
} from '../constants/Home'

export function addBlobElement(blob) {
    return {
        type: ADD_BLOB,
        payload:blob
    }
}

export function addVideoElement(video) {
    return {
        type: ADD_VIDEO,
        payload: video
    }
}

export function activeNewSlide(slide) {
    return {
        type: SET_ACTIVE_SLIDE,
        payload: slide
    }
}