// Describing the shape of the todo's slice of state
export interface Todo {
  id?: string,
  text: string,
  completed?: boolean
}

export type TodosState = Todo[]

// Describing the different ACTION NAMES available
export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

interface EditTodoAction {
  type: typeof EDIT_TODO
  payload: Todo
  meta: {
    id: string
  }
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  meta: {
    id: string
  }
}

export type TodosActionTypes = AddTodoAction | EditTodoAction | DeleteTodoAction
