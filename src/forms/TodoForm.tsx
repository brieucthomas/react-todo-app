import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { Box, Button, makeStyles, FormControlLabel } from '@material-ui/core'
import { TextField, Switch } from 'formik-material-ui'

import { Todo } from '../types'

export interface TodoFormProps {
  todo?: Todo
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

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ todo }) => {
  const classes = useStyles()
  const history = useHistory()
  const isNew: boolean = todo ? false : true
  const initialValues: Todo = todo || {
    text: '',
    completed: false
  }

  todo = todo ? todo : initialValues

  const FormValidator = (values: Todo): Partial<Todo> => {
    const errors: Partial<Todo> = {}

    if (!values.text.trim()) {
      errors.text = 'Required'
    }

    return errors
  }

  const OnSumbit = (values: Todo, { setSubmitting }: FormikHelpers<Todo>) => {
    setSubmitting(false)
    console.log(values)
    history.push('/')
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={FormValidator}
      onSubmit={OnSumbit}
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
              {isNew ? 'Add' : 'Edit'}
            </Button>
            {!isNew &&
              <Button
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                {'Delete'}
              </Button>
            }
          </Box>
        </Form>
      )
      }
    </Formik >
  )
}

export default TodoForm
