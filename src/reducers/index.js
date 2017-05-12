import { combineReducers } from 'redux'
import Home from './Home'
import App from './App'
import Work from './Work'

export const rootReducer = combineReducers({
    Home,
    App,
    Work
})

