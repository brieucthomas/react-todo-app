import * as actions from './actions'
import * as types from './types'

describe('todos actions', () => {
  it('should create an action to add a todo created by another user', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction: types.RemoteTodoAddedAction = {
      type: types.REMOTE_TODO_ADDED,
      payload
    }
    expect(actions.remoteTodoAdded(payload)).toEqual(expectedAction)
  })
  
  it('should create an action to edit a todo updated by another user', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction: types.RemoteTodoEditedAction = {
      type: types.REMOTE_TODO_EDITED,
      payload      
    }
    expect(actions.remoteTodoEdited(payload)).toEqual(expectedAction)
  })
  
  it('should create an action to delete a todo removed by another user', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction: types.RemoteTodoDeletedAction = {
      type: types.REMOTE_TODO_DELETED,
      payload      
    }
    expect(actions.remoteTodoDeleted(payload)).toEqual(expectedAction)
  })

  it('should create an action to add a todo', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction = {
      type: types.ADD_TODO_REQUESTED,
      payload,
      meta: {
        onSuccess: undefined
      }
    }
    expect(actions.addTodoRequested(payload)).toEqual(expectedAction)
  })

  it('should create an action to add a todo with onSuccess callback', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const onSuccess = () => {}
    const expectedAction = {
      type: types.ADD_TODO_REQUESTED,
      payload,
      meta: {
        onSuccess
      }
    }
    expect(actions.addTodoRequested(payload, onSuccess)).toEqual(expectedAction)
  })

  it('should create an action to add a todo with success', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const expectedAction = {
      type: types.ADD_TODO_SUCCEEDED,
      payload
    }
    expect(actions.addTodoSucceeded(payload)).toEqual(expectedAction)
  })

  it('should create an action to add a todo with error', () => {
    const payload: types.Todo = {
      text: 'Finish docs'
    }
    const error = new Error('An error occured')
    const expectedAction = {
      type: types.ADD_TODO_FAILED,
      payload: error,
      error: true,
      meta: {
        todo: payload
      }    
    }
    expect(actions.addTodoFailed(payload, error)).toEqual(expectedAction)
  })

  it('should create an action to edit a todo', () => {
    const payload: types.Todo = {
      id: 'foo',
      text: 'Finish docs'
    }
    const expectedAction = {
      type: types.EDIT_TODO_REQUESTED,
      payload,
      meta: {
        id: 'foo'
      }
    }
    expect(actions.editTodoRequested(payload)).toEqual(expectedAction)
  })

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: types.DELETE_TODO_REQUESTED,
      meta: {
        id: 'foo'
      }
    }
    expect(actions.deleteTodoRequested('foo')).toEqual(expectedAction)
  })
})