import {
    CHANGE_TYPE_WORK,
    LOADER_TYPE_WORK,
    SUCCESS_TYPE_WORK,
    HIDDEN_WORK
} from '../constants/Work'

export function changeTypeWork(type) {
    return (dispath) => {

        dispath({
            type: LOADER_TYPE_WORK,
            payload: 'loader'
        })

        setTimeout(() => {
            dispath({
                type: CHANGE_TYPE_WORK,
                payload: type
            })
        }, 250)

        setTimeout(() => {
            dispath({
                type: SUCCESS_TYPE_WORK,
                payload: 'show'
            })
        }, 500)
    }
}

export function hiddenWork() {
    return {
        type: HIDDEN_WORK,
        payload: 'loader'
    }
}