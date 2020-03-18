import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { List, ListSubheader, makeStyles, Chip, Divider, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import Alert from '@material-ui/lab/Alert'
import { v4 as uuid } from 'uuid'

import Todo from './Todo'
import { Todo as TodoType } from '../store/todos/types'
import { VisibilityFilter } from '../store/visibilityFilter/types'

export interface TodoListProps {
  title: string
  fetching?: boolean,
  error?: Error,
  todos: TodoType[],
  visibilityFilter: VisibilityFilter,
  fetchTodos: () => void,
  setVisibilityFilter: (f: VisibilityFilter) => void
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
  flagImage: {
    maxWidth: '80px',
    height: 'auto'
  }
}))

const TodoList: React.FunctionComponent<TodoListProps> = ({ title, fetching, error, todos, visibilityFilter, fetchTodos, setVisibilityFilter }) => {
  const classes = useStyles()
  const history = useHistory()
  const labelId = uuid()

  useEffect(() => {    
    fetchTodos()
  }, [fetchTodos])

  const handleClick = (id: string) => {
    history.push(`/edit/${id}`)
  }

  return (
    <React.Fragment>
      {
        fetching &&
        <React.Fragment>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </React.Fragment>
      }
      {
        error &&
        <React.Fragment>
          <Alert severity="error">{'An error occurred, please try again later.'}</Alert>
        </React.Fragment>
      }
      {
        !fetching && !error &&
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
                  {`${title} (${todos.length})`}
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
          {todos.map((t, i) =>
            <React.Fragment key={t.id}>
              <Todo todo={t} onClick={handleClick} />
              {(todos[i + 1] !== undefined) && <Divider component="li" />}
            </React.Fragment>
          )}
        </List>
      }
    </React.Fragment >
  )
}

export default TodoList
