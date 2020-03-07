import * as actions from './actions'
import * as types from './types'
import { todosReducer } from './reducers'

describe('todos reducer', () => {
  it('should handle ADD_TODO with an empty state', () => {
    const newTodo: types.Todo = { text: 'Run the tests' }
    const action: types.TodosActionTypes = {
      type: types.ADD_TODO,
      payload: newTodo
    }
    const initialState: types.TodosState = []
    const expectedState: types.TodosState = [newTodo]
    expect(todosReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle ADD_TODO with an non empty state', () => {
    const newTodo: types.Todo = { text: 'Run the tests' }
    const previousTodo: types.Todo = { text: 'Use Redux' }
    const action: types.TodosActionTypes = {
      type: types.ADD_TODO,
      payload: newTodo
    }
    const initialState: types.TodosState = [previousTodo]
    const expectedState: types.TodosState = [previousTodo, newTodo]
    expect(todosReducer(initialState, action)).toEqual(expectedState)
  })
})