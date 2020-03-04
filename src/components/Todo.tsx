import React from 'react'
import { ListItem, ListItemText, makeStyles } from '@material-ui/core'

import { Todo as TodoType } from '../types'

export interface TodoProps {
  todo: TodoType,
  onClick: (id: string) => void
}

const useStyles = makeStyles(theme => ({
  root: {
    '&.completed': {
      textDecoration: 'line-through'
    }
  },
  icon: {
    opacity: .2,
    '&.done': {
      opacity: 1,
    }
  }
}))


const Todo: React.FunctionComponent<TodoProps> = ({ todo, onClick }) => {
  const classes = useStyles()

  return (
    <ListItem
      button
      onClick={() => todo.id ? onClick(todo.id) : false}
      className={`${classes.root} ${todo.completed ? 'completed' : false}`}
    >
      <ListItemText primary={todo.text} />
    </ListItem >
  )
}

export default Todo
