import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { systemReducer } from './system/reducers'
import { todosReducer } from './todos/reducers'
import { visibilityFilterReducer } from './visibilityFilter/reducers'
import { todosSaga, watchOnTodosChannel } from './todos/sagas'

const rootReducer = combineReducers({
  system: systemReducer,
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore(initialState?: AppState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: Middleware[] = [
    sagaMiddleware
  ]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  )

  sagaMiddleware.run(todosSaga)
  sagaMiddleware.run(watchOnTodosChannel)

  return store
}
