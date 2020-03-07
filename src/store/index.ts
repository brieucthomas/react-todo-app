import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { todosReducer } from './todos/reducers'
import { visibilityFilterReducer } from './visibilityFilter/reducers'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore(initialState?: AppState) {
  const middlewares: Middleware[] = []
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  )

  return store
}
