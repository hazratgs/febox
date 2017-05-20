/* eslint-disable */

import update from 'immutability-helper';

import {
    ADD_VIDEO,
    LOAD_VIDEO,
    SET_ACTIVE_SLIDE
} from '../constants/Home'


export function activeNewSlide(slide) {
    return {
        type: SET_ACTIVE_SLIDE,
        payload: slide
    }
}

export function addVideo(video) {
    return {
        type: ADD_VIDEO,
        payload: video
    }
}

export function videoLoader(slide, video, blobs) {
    return async (dispath) => {

        let response = await fetch(slide.video, {
            method: 'get',
            cache: 'force-cache',
            mode: 'no-cors'
        });

        // console.log(video)

        let blob = await response.blob();
        video.src = URL.createObjectURL(blob)

        let newVideo = {};
        newVideo[slide.id] = video

        // Добавляем новое видео в стор
        const updateVideo = update(blobs, {$merge: newVideo});

        dispath({
            type: LOAD_VIDEO,
            payload: updateVideo
        })
    }
}