import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { Box, Button, makeStyles, FormControlLabel } from '@material-ui/core'
import { TextField, Switch } from 'formik-material-ui'
import Skeleton from '@material-ui/lab/Skeleton'

import { Todo } from '../store/todos/types'

export interface TodoFormProps {
  id?: string,
  todo?: Todo,
  fetchTodo: (id: string) => void,
  onAdd: (todo: Todo, onSuccess: () => void) => void,
  onEdit: (todo: Todo, onSuccess: () => void) => void,
  onDelete: (id: string, onSuccess: () => void) => void
}

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: theme.spacing(2)
  },
  switcher: {
    display: 'flex',
    marginLeft: 0
  },
  switcherLabel: {
    flexGrow: 1,
  },
  actions: {
    textAlign: 'right',
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  }
}))

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ id, todo, fetchTodo, onAdd, onEdit, onDelete }) => {
  const classes = useStyles()
  const history = useHistory()
  const fetching = id && !todo

  useEffect(() => {
    id && fetchTodo(id)
  }, [id])

  const initialValues: Todo = {
    text: '',
    completed: false
  }

  const formValidator = (values: Todo): Partial<Todo> => {
    const errors: Partial<Todo> = {}

    if (!values.text.trim()) {
      errors.text = 'Required'
    }

    return errors
  }

  const onSuccess = () => {
    history.push('/')
  }

  const onSumbit = (values: Todo, { setSubmitting }: FormikHelpers<Todo>) => {
    setSubmitting(false)
    id ? onEdit(values, onSuccess) : onAdd(values, onSuccess)
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
        !fetching &&  
        <Formik
          initialValues={todo ? todo : initialValues}
          validate={formValidator}
          onSubmit={onSumbit}
          enableReinitialize={true}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="text"
                component={TextField}
                classes={{
                  root: classes.field,
                }}
                label="Todo"
                autoFocus
                required
                fullWidth
                data-testid="text"
              />
              <FormControlLabel
                label="Completed"
                labelPlacement="start"
                classes={{
                  root: classes.switcher,
                  label: classes.switcherLabel
                }}
                control={
                  <Field type="checkbox" name="completed" component={Switch} />
                }
              />
              <Box mt={4} className={classes.actions}>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {id ? 'Edit' : 'Add'}
                </Button>
                {id &&
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={() => id && onDelete(id, onSuccess)}
                  >
                    {'Delete'}
                  </Button>
                }
              </Box>
            </Form>
          )
          }
        </Formik >
      }
    </React.Fragment>
  )
}

export default TodoForm
