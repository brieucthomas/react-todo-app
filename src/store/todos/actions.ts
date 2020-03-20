import {
  Todo,
  TodosActionTypes,
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCEEDED,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_FINISHED,
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCEEDED,
  ADD_TODO_FAILED,
  ADD_TODO_FINISHED,
  EDIT_TODO_REQUESTED,
  DELETE_TODO_FINISHED,
  DELETE_TODO_REQUESTED,
  EDIT_TODO_FINISHED,
  EDIT_TODO_SUCCEEDED,
  DELETE_TODO_SUCCEEDED,
  DELETE_TODO_FAILED,
  EDIT_TODO_FAILED,
  REMOTE_TODO_ADDED,
  REMOTE_TODO_EDITED,
  REMOTE_TODO_DELETED,
  FETCH_SINGLE_TODO_REQUESTED,
  FETCH_SINGLE_TODO_SUCCEEDED,
  FETCH_SINGLE_TODO_FAILED,
  FETCH_SINGLE_TODO_FINISHED
} from './types'

export const remoteTodoAdded = (todo: Todo): TodosActionTypes => ({
  type: REMOTE_TODO_ADDED,
  payload: todo
})

export const remoteTodoEdited = (todo: Todo): TodosActionTypes => ({
  type: REMOTE_TODO_EDITED,
  payload: todo
})

export const remoteTodoDeleted = (todo: Todo): TodosActionTypes => ({
  type: REMOTE_TODO_DELETED,
  payload: todo
})

export const fetchTodosRequested = (): TodosActionTypes => ({
  type: FETCH_TODOS_REQUESTED
})

export const fetchTodosSucceeded = (todos: Todo[]): TodosActionTypes => ({
  type: FETCH_TODOS_SUCCEEDED,
  payload: todos
})

export const fetchTodosFailed = (error: Error): TodosActionTypes => ({
  type: FETCH_TODOS_FAILED,
  payload: error,
  error: true
})

export const fetchTodosFinished = (): TodosActionTypes => ({
  type: FETCH_TODOS_FINISHED
})

export const fetchSingleTodoRequested = (id: string): TodosActionTypes => ({
  type: FETCH_SINGLE_TODO_REQUESTED,
  meta: {
    id
  }
})

export const fetchSingleTodoSucceeded = (todo: Todo): TodosActionTypes => ({
  type: FETCH_SINGLE_TODO_SUCCEEDED,
  payload: todo
})

export const fetchSingleTodoFailed = (id: string, error: Error): TodosActionTypes => ({
  type: FETCH_SINGLE_TODO_FAILED,
  payload: error,
  error: true,
  meta: {
    id
  }
})

export const fetchSingleTodoFinished = (): TodosActionTypes => ({
  type: FETCH_SINGLE_TODO_FINISHED
})

export const addTodoRequested = (newTodo: Todo, onSuccess?: () => void): TodosActionTypes => ({
  type: ADD_TODO_REQUESTED,
  payload: newTodo,
  meta: {
    onSuccess
  }
})

export const addTodoSucceeded = (todo: Todo): TodosActionTypes => ({
  type: ADD_TODO_SUCCEEDED,
  payload: todo
})

export const addTodoFailed = (todo: Todo, error: Error): TodosActionTypes => ({
  type: ADD_TODO_FAILED,
  payload: error,
  error: true,
  meta: {
    todo
  }
})

export const addTodoFinished = (): TodosActionTypes => ({
  type: ADD_TODO_FINISHED
})

export const editTodoRequested = (editedTodo: Todo, onSuccess?: () => void): TodosActionTypes => ({
  type: EDIT_TODO_REQUESTED,
  payload: editedTodo,
  meta: {
    id: editedTodo.id as string,
    onSuccess
  }
})

export const editTodoSucceeded = (id: string, todo: Todo): TodosActionTypes => ({
  type: EDIT_TODO_SUCCEEDED,
  payload: todo,
  meta: {
    id
  }
})

export const editTodoFailed = (todo: Todo, error: Error): TodosActionTypes => ({
  type: EDIT_TODO_FAILED,
  payload: error,
  error: true,
  meta: {
    todo
  }
})

export const editTodoFinished = (): TodosActionTypes => ({
  type: EDIT_TODO_FINISHED
})

export const deleteTodoRequested = (id: string, onSuccess?: () => void): TodosActionTypes => ({
  type: DELETE_TODO_REQUESTED,
  meta: {
    id,
    onSuccess
  }
})

export const deleteTodoSucceeded = (id: string): TodosActionTypes => ({
  type: DELETE_TODO_SUCCEEDED,
  meta: {
    id
  }
})

export const deleteTodoFailed = (id: string, error: Error): TodosActionTypes => ({
  type: DELETE_TODO_FAILED,
  payload: error,
  error: true,
  meta: {
    id
  }
})

export const deleteTodoFinished = (): TodosActionTypes => ({
  type: DELETE_TODO_FINISHED
})