import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { List, ListSubheader, makeStyles, Chip, Divider, Grid } from '@material-ui/core'
import { v4 as uuid } from 'uuid'

import { Todo as TodoType, VisibilityFilter } from '../types'
import Todo from './Todo'

export interface TodoListProps {
  title: string
  todos: TodoType[]
}

const useStyles = makeStyles(theme => ({
  root: {
    borderWidth: '1px',
    borderColor: theme.palette.grey[300],
    borderStyle: 'solid',
    borderRadius: theme.shape.borderRadius,
    paddingBottom: 0,
  },
  header: {
    textTransform: 'uppercase'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const TodoList: React.FunctionComponent<TodoListProps> = ({ title, todos }) => {
  const classes = useStyles()
  const history = useHistory()
  const labelId = uuid()

  const [visibilityFilter, setVisibilityFilter] = useState<VisibilityFilter>(VisibilityFilter.ShowAll)

  const handleClick = (id: string) => {
    history.push(`/edit/${id}`)
  }

  const filteredTodos = todos.filter(t => {
    if (visibilityFilter === VisibilityFilter.ShowActive) {
      return !t.completed
    }

    if (visibilityFilter === VisibilityFilter.ShowCompleted) {
      return t.completed
    }

    return true
  })

  return (
    <List
      component="nav"
      aria-labelledby={labelId}
      subheader={
        <ListSubheader
          component="h1"
          id={labelId}
          classes={{
            root: classes.header
          }}>
          <Grid container justify="space-between">
            <Grid item>
              {`${title} (${filteredTodos.length})`}
            </Grid>
            <Grid item>
              <Chip
                clickable
                label="All"
                color={visibilityFilter === VisibilityFilter.ShowAll ? "primary" : "default"}
                onClick={() => setVisibilityFilter(VisibilityFilter.ShowAll)}
                className={classes.chip}
              />
              <Chip
                clickable
                label="Active"
                color={(visibilityFilter as VisibilityFilter) === VisibilityFilter.ShowActive ? "primary" : "default"}
                onClick={() => setVisibilityFilter(VisibilityFilter.ShowActive)}
                className={classes.chip}
              />
              <Chip
                clickable
                label="Completed"
                color={(visibilityFilter as VisibilityFilter) === VisibilityFilter.ShowCompleted ? "primary" : "default"}
                onClick={() => setVisibilityFilter(VisibilityFilter.ShowCompleted)}
                className={classes.chip}
              />
            </Grid>
          </Grid>
        </ListSubheader>
      }
      className={classes.root}
    >
      {filteredTodos.map((t, i) =>
        <React.Fragment key={t.id}>
          <Todo todo={t} onClick={handleClick} />
          {(filteredTodos[i + 1] !== undefined) && <Divider component="li" />}
        </React.Fragment>
      )}
    </List>
  )
}

export default TodoList
