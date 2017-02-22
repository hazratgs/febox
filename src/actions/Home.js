import { HELLO } from '../constants/Home'

export function start() {
    return (dispath) => {
        dispath({
            type: HELLO,
            payload: 'world'
        })
    }
}