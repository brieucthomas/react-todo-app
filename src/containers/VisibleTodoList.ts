import { connect } from 'react-redux'

import { AppState } from '../store'
import TodoList from '../components/TodoList'
import { Todo } from '../store/todos/types'
import { VisibilityFilter } from '../store/visibilityFilter/types'
import { setVisibilityFilter } from '../store/visibilityFilter/actions'

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos
    case VisibilityFilter.ShowCompleted:
      return todos.filter(t => t.completed)
    case VisibilityFilter.ShowActive:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapState = (state: AppState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter,
  title: "Your Todos"
})

const mapDispatch = {
  setVisibilityFilter: (filter: VisibilityFilter) => setVisibilityFilter(filter)
}

const connector = connect(mapState, mapDispatch)

export default connector(TodoList)