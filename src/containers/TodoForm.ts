import { connect } from 'react-redux'

import { AppState } from '../store'
import { Todo } from '../store/todos/types'
import { addTodoRequested, editTodoRequested, deleteTodoRequested, fetchSingleTodoRequested } from '../store/todos/actions'
import TodoForm from '../forms/TodoForm'

const mapState = (state: AppState, ownProps: { id: string }) => ({
  todo: ownProps.id ? state.todos.items.find(t => t.id === ownProps.id) : undefined
})

const mapDispatch = {
  fetchTodo: (id: string) => fetchSingleTodoRequested(id),
  onAdd: (todo: Todo, onSuccess: () => void) => addTodoRequested(todo, onSuccess),
  onEdit: (todo: Todo, onSuccess: () => void) => todo.id && editTodoRequested(todo, onSuccess),
  onDelete: (id: string, onSuccess: () => void) => deleteTodoRequested(id, onSuccess)
}

const connector = connect(mapState, mapDispatch)

export default connector(TodoForm)