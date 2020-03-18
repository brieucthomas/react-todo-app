import {
  TodosState,
  TodosActionTypes,
  FETCH_TODOS_SUCCEEDED,
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_FAILED,
  ADD_TODO_SUCCEEDED,
  EDIT_TODO_SUCCEEDED,
  DELETE_TODO_SUCCEEDED,
  REMOTE_TODO_ADDED,
  REMOTE_TODO_DELETED,
  REMOTE_TODO_EDITED,
} from './types'
import { Todo } from '../../store/todos/types'

const initialState: TodosState = {
  fetching: false,
  error: undefined,
  items: []
}

export const todosReducer = (state = initialState, action: TodosActionTypes): TodosState => {
  switch (action.type) {
    case REMOTE_TODO_ADDED:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case REMOTE_TODO_EDITED:
      return {
        ...state,
        items: state.items.map((todo: Todo) =>
          (todo.id === action.payload.id)
            ? action.payload
            : todo
        )
      }
    case REMOTE_TODO_DELETED:
      return {
        ...state,
        items: state.items.filter((todo: Todo) =>
          todo.id !== action.payload.id
        )
      }
    case FETCH_TODOS_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: undefined,
        items: []
      }
    case FETCH_TODOS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        error: undefined,
        items: action.payload
      }
    case FETCH_TODOS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
        items: []
      }
    case ADD_TODO_SUCCEEDED:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    case EDIT_TODO_SUCCEEDED:
      return {
        ...state,
        items: state.items.map((todo: Todo) =>
          (todo.id === action.meta.id)
            ? action.payload
            : todo
        )
      }
    case DELETE_TODO_SUCCEEDED:
      return {
        ...state,
        items: state.items.filter((todo: Todo) =>
          todo.id !== action.meta.id
        )
      }
    default:
      return state
  }
}
