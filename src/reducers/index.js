import { combineReducers } from 'redux'
import recipes from './recipes'
import { routerReducer } from 'react-router-redux'

const rootReducers = combineReducers({
  recipes,
  routing: routerReducer
})

export default rootReducers
