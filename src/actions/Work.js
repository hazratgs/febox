import { WORK } from '../constants/Work'

export function start() {
    return (dispath) => {
        dispath({
            type: WORK,
            payload: 'world'
        })
    }
}