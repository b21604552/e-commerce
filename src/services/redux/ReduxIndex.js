import { createStore } from 'redux'
import reducerCombined from './reducerCombined'

export const reduxStore = createStore(reducerCombined)
