// Describing the shape of the todo's slice of state
export interface Todo {
  id?: string,
  text: string,
  completed?: boolean
}

export interface TodosState {
  fetching?: boolean,
  error?: Error,
  items: Todo[]
}

// Describing the different ACTION NAMES available
export const REMOTE_TODO_ADDED = 'REMOTE_TODO_ADDED'
export const REMOTE_TODO_EDITED = 'REMOTE_TODO_EDITED'
export const REMOTE_TODO_DELETED = 'REMOTE_TODO_DELETED'
export const FETCH_TODOS_REQUESTED = 'FETCH_TODOS_REQUESTED'
export const FETCH_TODOS_SUCCEEDED = 'FETCH_TODOS_SUCCEEDED'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'
export const FETCH_TODOS_FINISHED = 'FETCH_TODOS_FINISHED'
export const FETCH_SINGLE_TODO_REQUESTED = 'FETCH_SINGLE_TODO_REQUESTED'
export const FETCH_SINGLE_TODO_SUCCEEDED = 'FETCH_SINGLE_TODO_SUCCEEDED'
export const FETCH_SINGLE_TODO_FAILED = 'FETCH_SINGLE_TODO_FAILED'
export const FETCH_SINGLE_TODO_FINISHED = 'FETCH_SINGLE_TODO_FINISHED'
export const ADD_TODO_REQUESTED = 'ADD_TODO_REQUESTED'
export const ADD_TODO_SUCCEEDED = 'ADD_TODO_SUCCEEDED'
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED'
export const ADD_TODO_FINISHED = 'ADD_TODO_FINISHED'
export const EDIT_TODO_REQUESTED = 'EDIT_TODO_REQUESTED'
export const EDIT_TODO_SUCCEEDED = 'EDIT_TODO_SUCCEEDED'
export const EDIT_TODO_FAILED = 'EDIT_TODO_FAILED'
export const EDIT_TODO_FINISHED = 'EDIT_TODO_FINISHED'
export const DELETE_TODO_REQUESTED = 'DELETE_TODO_REQUESTED'
export const DELETE_TODO_SUCCEEDED = 'DELETE_TODO_SUCCEEDED'
export const DELETE_TODO_FAILED = 'DELETE_TODO_FAILED'
export const DELETE_TODO_FINISHED = 'DELETE_TODO_FINISHED'

export interface RemoteTodoAddedAction {
  type: typeof REMOTE_TODO_ADDED
  payload: Todo
}

export interface RemoteTodoEditedAction {
  type: typeof REMOTE_TODO_EDITED
  payload: Todo
}

export interface RemoteTodoDeletedAction {
  type: typeof REMOTE_TODO_DELETED
  payload: Todo
}

export interface FetchTodosRequestedAction {
  type: typeof FETCH_TODOS_REQUESTED
}

export interface FetchTodosSucceededAction {
  type: typeof FETCH_TODOS_SUCCEEDED
  payload: Todo[]
}

export interface FetchTodosFailedAction {
  type: typeof FETCH_TODOS_FAILED
  payload: Error,
  error: true
}

export interface FetchTodosFinishedAction {
  type: typeof FETCH_TODOS_FINISHED
}

export interface FetchSingleTodoRequestedAction {
  type: typeof FETCH_SINGLE_TODO_REQUESTED
  meta: {
    id: string
  }
}

export interface FetchSingleTodoSucceededAction {
  type: typeof FETCH_SINGLE_TODO_SUCCEEDED
  payload: Todo
}

export interface FetchSingleTodoFailedAction {
  type: typeof FETCH_SINGLE_TODO_FAILED
  payload: Error,
  error: true,
  meta: {
    id: string
  }
}

export interface FetchSingleTodoFinishedAction {
  type: typeof FETCH_SINGLE_TODO_FINISHED
}

export interface AddTodoRequestedAction {
  type: typeof ADD_TODO_REQUESTED
  payload: Todo
  meta?: {
    onSuccess?: () => void
  }
}

export interface AddTodoSucceededAction {
  type: typeof ADD_TODO_SUCCEEDED
  payload: Todo
}

export interface AddTodoFailedAction {
  type: typeof ADD_TODO_FAILED
  payload: Error
  error: true
  meta: {
    todo: Todo
  }
}

export interface AddTodoFinishedAction {
  type: typeof ADD_TODO_FINISHED
}

export interface EditTodoRequestedAction {
  type: typeof EDIT_TODO_REQUESTED
  payload: Todo
  meta: {
    id: string
    onSuccess?: () => void
  }
}

export interface EditTodoSucceededAction {
  type: typeof EDIT_TODO_SUCCEEDED
  payload: Todo
  meta: {
    id: string
  }
}

export interface EditTodoFailedAction {
  type: typeof EDIT_TODO_FAILED
  payload: Error
  error: true
  meta: {
    todo: Todo
  }
}

export interface EditTodoFinishedAction {
  type: typeof EDIT_TODO_FINISHED
}

export interface DeleteTodoRequestedAction {
  type: typeof DELETE_TODO_REQUESTED
  meta: {
    id: string,
    onSuccess?: () => void
  }
}

export interface DeleteTodoSucceededAction {
  type: typeof DELETE_TODO_SUCCEEDED
  meta: {
    id: string
  }
}

export interface DeleteTodoFailedAction {
  type: typeof DELETE_TODO_FAILED
  payload: Error
  error: true
  meta: {
    id: string
  }
}

export interface DeleteTodoFinishedAction {
  type: typeof DELETE_TODO_FINISHED
}

export type TodosActionTypes =
  | RemoteTodoAddedAction
  | RemoteTodoEditedAction
  | RemoteTodoDeletedAction
  | FetchTodosRequestedAction
  | FetchTodosSucceededAction
  | FetchTodosFailedAction
  | FetchTodosFinishedAction
  | FetchSingleTodoRequestedAction
  | FetchSingleTodoSucceededAction
  | FetchSingleTodoFailedAction
  | FetchSingleTodoFinishedAction
  | AddTodoRequestedAction
  | AddTodoSucceededAction
  | AddTodoFailedAction
  | AddTodoFinishedAction
  | EditTodoRequestedAction
  | EditTodoSucceededAction
  | EditTodoFailedAction
  | EditTodoFinishedAction
  | DeleteTodoRequestedAction
  | DeleteTodoSucceededAction
  | DeleteTodoFailedAction
  | DeleteTodoFinishedAction
