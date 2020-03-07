import * as actions from './actions'
import * as types from './types'

describe('todos actions', () => {
  it('should create an action to add a todo', () => {
    const newTodo: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction = {
      type: types.ADD_TODO,
      payload: newTodo
    }
    expect(actions.addTodo(newTodo)).toEqual(expectedAction)
  })

  it('should create an action to edit a todo', () => {
    const editedTodo: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction = {
      type: types.EDIT_TODO,
      payload: editedTodo,
      meta: {
        id: 'foo'
      }
    }
    expect(actions.editTodo('foo', editedTodo)).toEqual(expectedAction)
  })  

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      meta: {
        id: 'foo'
      }
    }
    expect(actions.deleteTodo('foo')).toEqual(expectedAction)
  })   
})