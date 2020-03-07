import { connect } from 'react-redux'

import { AppState } from '../store'
import { Todo } from '../store/todos/types'
import { addTodo, editTodo, deleteTodo } from '../store/todos/actions'
import TodoForm from '../forms/TodoForm'

const mapState = (state: AppState, ownProps: { id: string }) => ({
  todo: ownProps.id ? state.todos.find(t => t.id === ownProps.id) : undefined
})

const mapDispatch = {
  onAdd: (todo: Todo) => addTodo(todo),
  onEdit: (todo: Todo) => todo.id && editTodo(todo.id, todo),
  onDelete: (id: string) => deleteTodo(id)
}

const connector = connect(mapState, mapDispatch)

export default connector(TodoForm)