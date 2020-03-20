import {
  Todo,
  RemoteTodoAddedAction,
  RemoteTodoEditedAction,
  RemoteTodoDeletedAction,
  REMOTE_TODO_ADDED,
  REMOTE_TODO_EDITED,
  REMOTE_TODO_DELETED,
  FETCH_SINGLE_TODO_REQUESTED,
  FETCH_SINGLE_TODO_SUCCEEDED,
  FETCH_SINGLE_TODO_FAILED,
  FETCH_SINGLE_TODO_FINISHED,
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCEEDED,
  ADD_TODO_FAILED,
  EDIT_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
  FetchSingleTodoSucceededAction,
  FetchSingleTodoRequestedAction,
  FetchSingleTodoFailedAction,
  FetchSingleTodoFinishedAction,
  AddTodoRequestedAction,
  AddTodoSucceededAction,
  AddTodoFailedAction,
  EditTodoRequestedAction,
  DeleteTodoRequestedAction
} from "./types"
import {
  remoteTodoAdded,
  remoteTodoEdited,
  remoteTodoDeleted,
  fetchSingleTodoRequested,
  fetchSingleTodoFailed,
  fetchSingleTodoFinished,
  addTodoRequested,
  addTodoSucceeded,
  addTodoFailed,
  editTodoRequested,
  deleteTodoRequested,
  fetchSingleTodoSucceeded
} from "./actions"

describe('todos actions', () => {
  it('should create REMOTE_TODO_ADDED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const expectedAction: RemoteTodoAddedAction = {
      type: REMOTE_TODO_ADDED,
      payload
    }
    expect(remoteTodoAdded(payload)).toEqual(expectedAction)
  })

  it('should create REMOTE_TODO_EDITED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const expectedAction: RemoteTodoEditedAction = {
      type: REMOTE_TODO_EDITED,
      payload
    }
    expect(remoteTodoEdited(payload)).toEqual(expectedAction)
  })

  it('should create REMOTE_TODO_DELETED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const expectedAction: RemoteTodoDeletedAction = {
      type: REMOTE_TODO_DELETED,
      payload
    }
    expect(remoteTodoDeleted(payload)).toEqual(expectedAction)
  })

  it('should create FETCH_SINGLE_TODO_REQUESTED', () => {
    const expectedAction: FetchSingleTodoRequestedAction = {
      type: FETCH_SINGLE_TODO_REQUESTED,
      meta: {
        id: '1'
      }
    }
    expect(fetchSingleTodoRequested('1')).toEqual(expectedAction)
  })

  it('should create FETCH_SINGLE_TODO_SUCCEEDED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const expectedAction: FetchSingleTodoSucceededAction = {
      type: FETCH_SINGLE_TODO_SUCCEEDED,
      payload
    }
    expect(fetchSingleTodoSucceeded(payload)).toEqual(expectedAction)
  })

  it('should create FETCH_SINGLE_TODO_FAILED', () => {
    const error = new Error('An error occurred')
    const expectedAction: FetchSingleTodoFailedAction = {
      type: FETCH_SINGLE_TODO_FAILED,
      payload: error,
      error: true,
      meta: {
        id: '1'
      }
    }
    expect(fetchSingleTodoFailed('1', error)).toEqual(expectedAction)
  })

  it('should create FETCH_SINGLE_TODO_FINISHED', () => {
    const expectedAction: FetchSingleTodoFinishedAction = {
      type: FETCH_SINGLE_TODO_FINISHED
    }
    expect(fetchSingleTodoFinished()).toEqual(expectedAction)
  })

  it('should create ADD_TODO_REQUESTED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const onSuccess = () => { }
    const expectedAction: AddTodoRequestedAction = {
      type: ADD_TODO_REQUESTED,
      payload,
      meta: {
        onSuccess
      }
    }
    expect(addTodoRequested(payload, onSuccess)).toEqual(expectedAction)
  })

  it('should create ADD_TODO_SUCCEEDED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const expectedAction: AddTodoSucceededAction = {
      type: ADD_TODO_SUCCEEDED,
      payload
    }
    expect(addTodoSucceeded(payload)).toEqual(expectedAction)
  })

  it('should create ADD_TODO_FAILED', () => {
    const payload: Todo = {
      text: 'Finish docs'
    }
    const error = new Error('An error occured')
    const expectedAction: AddTodoFailedAction = {
      type: ADD_TODO_FAILED,
      payload: error,
      error: true,
      meta: {
        todo: payload
      }
    }
    expect(addTodoFailed(payload, error)).toEqual(expectedAction)
  })

  it('should create EDIT_TODO_REQUESTED', () => {
    const payload: Todo = {
      id: 'foo',
      text: 'Finish docs'
    }
    const expectedAction: EditTodoRequestedAction = {
      type: EDIT_TODO_REQUESTED,
      payload,
      meta: {
        id: 'foo'
      }
    }
    expect(editTodoRequested(payload)).toEqual(expectedAction)
  })

  it('should create DELETE_TODO_REQUESTED', () => {
    const expectedAction: DeleteTodoRequestedAction = {
      type: DELETE_TODO_REQUESTED,
      meta: {
        id: 'foo'
      }
    }
    expect(deleteTodoRequested('foo')).toEqual(expectedAction)
  })
})