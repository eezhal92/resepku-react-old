import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const defaultState = {
  recipes: {
    items: [],
    selectedRecipe: {
      slug: ''
    }
  }
}

const store = createStore(
  rootReducers,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').default
    store.replaceReducer(nextReducers)
  })
}

export default store
