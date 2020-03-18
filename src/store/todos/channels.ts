import { API, graphqlOperation } from 'aws-amplify'
import { eventChannel } from 'redux-saga'

import { onCreateTodo, onUpdateTodo, onDeleteTodo } from '../../graphql/subscriptions'
import { remoteTodoAdded, remoteTodoEdited, remoteTodoDeleted } from './actions'

export const createTodosChannel = () => (
  eventChannel(emit => {
    const onCreateTodoSubscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData: any) => emit(remoteTodoAdded(eventData.value.data.onCreateTodo))
    })

    const onUpdateTodoSubscription = API.graphql(graphqlOperation(onUpdateTodo)).subscribe({
      next: (eventData: any) => emit(remoteTodoEdited(eventData.value.data.onUpdateTodo))
    })

    const onDeleteTodoSubscription = API.graphql(graphqlOperation(onDeleteTodo)).subscribe({
      next: (eventData: any) => emit(remoteTodoDeleted(eventData.value.data.onDeleteTodo))
    })

    const unsubscribe = () => {
      onCreateTodoSubscription.unsubscribe()
      onUpdateTodoSubscription.unsubscribe()
      onDeleteTodoSubscription.unsubscribe()
    }

    return unsubscribe
  })
)