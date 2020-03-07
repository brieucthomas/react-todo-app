import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container } from '@material-ui/core'

import TodoForm from '../containers/TodoForm'

type RouterParams = {
  id: string
}

export type EditTodoProps = RouteComponentProps<RouterParams> & {
  id?: string
}

const EditTodo: React.FunctionComponent<EditTodoProps> = ({ match }) => {
  const id = match.params.id

  return (
    <Container maxWidth="sm">
      <TodoForm id={id} />
    </Container>
  )
}

export default EditTodo
