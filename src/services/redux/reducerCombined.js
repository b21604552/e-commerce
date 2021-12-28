import { combineReducers } from 'redux'
import GeneralReducer from './reducers/GeneralReducer'

const reducerCombined = combineReducers({
  GeneralReducer: GeneralReducer
})

export default reducerCombined
