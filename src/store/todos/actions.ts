import { Todo, ADD_TODO, EDIT_TODO, DELETE_TODO, TodosActionTypes } from './types'

export const addTodo = (newTodo: Todo): TodosActionTypes => ({
  type: ADD_TODO,
  payload: newTodo
})

export const editTodo = (id: string, editedTodo: Todo): TodosActionTypes => ({
  type: EDIT_TODO,
  payload: editedTodo,
  meta: {
    id
  }
})

export const deleteTodo = (id: string): TodosActionTypes => ({
  type: DELETE_TODO,
  meta: {
    id
  }
})
