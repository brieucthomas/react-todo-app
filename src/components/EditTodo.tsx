import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'

import TodoForm from '../forms/TodoForm'
import data from '../data.json'

export interface AddTodoProps { }

const AddTodo: React.FunctionComponent<AddTodoProps> = () => {
  let { id } = useParams()
  const todo = id ? data.find(t => t.id === id) : undefined

  return (
    <Container maxWidth="sm">
      <TodoForm todo={todo} />
    </Container>
  )
}

export default AddTodo
