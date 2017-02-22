import { COLOR_HEADER } from '../constants/App'

export function changeColorHeader(color) {
    return (dispath) => {
        dispath({
            type: COLOR_HEADER,
            payload: color
        })
    }
}