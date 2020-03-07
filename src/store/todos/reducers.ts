import { TodosState, ADD_TODO, EDIT_TODO, DELETE_TODO, TodosActionTypes } from './types'
import { Todo } from '../../store/todos/types'

const initialState: TodosState = []

export const todosReducer = (state = initialState, action: TodosActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case EDIT_TODO:
      return state.map((todo: Todo) =>
        (todo.id === action.meta.id)
          ? action.payload
          : todo
      )
    case DELETE_TODO:
      return state.filter((todo: Todo) => (todo.id !== action.meta.id))
    default:
      return state
  }
}
