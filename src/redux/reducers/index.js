import { combineReducers } from 'redux'
import { login } from './oAuth'

const globalReducer = combineReducers ({login})

export default globalReducer