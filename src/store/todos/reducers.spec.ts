import * as types from './types'
import { todosReducer } from './reducers'

describe('todos reducer', () => {
  it('should handle ADD_TODO_SUCCEEDED with an empty state', () => {
    const newTodo: types.Todo = { text: 'Run the tests' }
    const action: types.TodosActionTypes = {
      type: types.ADD_TODO_SUCCEEDED,
      payload: newTodo
    }
    const initialState: types.TodosState = {
      items: []
    }
    const expectedState: types.TodosState = {
      items: [newTodo]
    }
    expect(todosReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle ADD_TODO_SUCCEEDED with an non empty state', () => {
    const newTodo: types.Todo = { text: 'Run the tests' }
    const previousTodo: types.Todo = { text: 'Use Redux' }
    const action: types.TodosActionTypes = {
      type: types.ADD_TODO_SUCCEEDED,
      payload: newTodo
    }
    const initialState: types.TodosState = {
      items: [previousTodo]
    }
    const expectedState: types.TodosState = {
      items: [previousTodo, newTodo]
    }
    expect(todosReducer(initialState, action)).toEqual(expectedState)
  })
})